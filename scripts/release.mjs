import minimist from 'minimist';
import fs from 'fs';
import * as url from 'url';
import path from 'path';
import chalk from 'chalk';
import semver from 'semver';
import enquirer from 'enquirer';
import { execa } from 'execa';

// eslint-disable-next-line import/extensions
import buildConfig from '../build.config.js';

const { prompt } = enquirer;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const { preid, dry: isDryRun, tag: releaseTag } = minimist(process.argv.slice(2));
const packages = buildConfig.pkgs;

const versionIncrements = ['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease'];

const incVersion = (version, i) => {
    const preId = preid || semver.prerelease(version)[0] || 'alpha';
    return semver.inc(version, i, preId);
};
const run = (bin, args, opts = {}) => execa(bin, args, { stdio: 'inherit', ...opts });
const dryRun = (bin, args, opts = {}) => console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts);
const runIfNotDry = isDryRun ? dryRun : run;
const getPkgRoot = (pkg) => path.resolve(__dirname, `../packages/${pkg}`);
const step = (msg) => console.log(chalk.cyan(msg));

// eslint-disable-next-line no-shadow
async function publishPackage(pkg, runIfNotDry) {
    const _releaseTag = releaseTag || 'next';
    step(`Publishing ${pkg.name}...`);
    try {
        await runIfNotDry(
            // note: use of yarn is intentional here as we rely on its publishing
            // behavior.
            'npm',
            ['publish', ...(_releaseTag ? ['--tag', _releaseTag] : []), '--access', 'public', '--registry', 'https://registry.npmjs.org'],
            {
                cwd: getPkgRoot(pkg.dirName),
                stdio: 'pipe',
            },
        );
        console.log(chalk.green(`Successfully published ${pkg.name}@${pkg.newVersion}`));
    } catch (e) {
        if (e.stderr.match(/previously published/)) {
            console.log(chalk.red(`Skipping already published: ${pkg.name}`));
        } else {
            throw e;
        }
    }
}

function readPackageJson(pkgPath) {
    return JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
}

function genRootPackageVersion() {
    const pkgPath = path.resolve(path.resolve(__dirname, '..'), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    return semver.inc(pkg.version, 'prerelease', semver.prerelease(pkg.version) && semver.prerelease(pkg.version)[0]);
}

function readPackageVersionAndName(pkg) {
    const pkgPath = path.resolve(getPkgRoot(pkg), 'package.json');
    const { version, name } = readPackageJson(pkgPath);
    return {
        version,
        name,
    };
}

function updatePackage(pkgRoot, version) {
    const pkgPath = path.resolve(pkgRoot, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.version = version;
    fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
}

function updateVersions(packagesVersion, newRootVersion) {
    // 1. update root package.json
    updatePackage(path.resolve(__dirname, '..'), newRootVersion);
    // 2. update all packages
    packagesVersion.forEach((p) => updatePackage(getPkgRoot(p.dirName), p.newVersion));
}

const isChangeInCurrentTag = async (pkg, newestTag) => {
    const { stdout: pkgDiffContent } = await run('git', ['diff', newestTag, `packages/${pkg}`], { stdio: 'pipe' });
    return !!pkgDiffContent;
};

const filterChangedPackages = async () => {
    const { stdout: newestTag } = await run('git', ['describe', '--abbrev=0', '--tags'], { stdio: 'pipe' });

    const results = await Promise.all(
        packages.map(async (pkg) => {
            const result = await isChangeInCurrentTag(pkg, newestTag);
            return result;
        }),
    );

    return packages.filter((_v, index) => results[index]);
};

async function createPackageNewVersion(pkg) {
    const { name, version } = readPackageVersionAndName(pkg);

    // no explicit version, offer suggestions
    const { release } = await prompt({
        type: 'select',
        name: 'release',
        message: `Select release type: ${name}`,
        choices: versionIncrements.map((i) => `${i} (${incVersion(version, i)})`).concat(['custom']),
    });

    let newVersion;
    if (release === 'custom') {
        newVersion = (
            await prompt({
                type: 'input',
                name: 'version',
                message: `Input custom version: ${name}`,
                initial: version,
            })
        ).version;
    } else {
        newVersion = release.match(/\((.*)\)/)[1];
    }

    if (!semver.valid(newVersion)) {
        console.log(`invalid target version: ${newVersion}, please again.`);
        return createPackageNewVersion(pkg);
    }

    return newVersion;
}

async function main() {
    const changedPackages = await filterChangedPackages();

    if (!changedPackages.length) {
        console.log(chalk.yellow(`No changes to commit.`));
        return;
    }

    const packagesVersion = [];
    for (const pkg of changedPackages) {
        const newVersion = await createPackageNewVersion(pkg);
        packagesVersion.push({
            dirName: pkg,
            newVersion,
            ...readPackageVersionAndName(pkg),
        });
    }

    const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        message: `These packages will be released: \n${packagesVersion
            .map((pkg) => `${chalk.magenta(pkg.name)}: v${pkg.version} > ${chalk.green(`v${pkg.newVersion}`)}`)
            .join('\n')}\nConfirm?`,
    });

    if (!yes) {
        return;
    }

    const newRootVersion = genRootPackageVersion();

    // update all package versions and inter-dependencies
    step('\nUpdating cross dependencies...');
    updateVersions(packagesVersion, newRootVersion);

    // // build all packages with types
    step('\nBuilding all packages...');
    if (!isDryRun) {
        await run('yarn', ['build']);
    } else {
        console.log(`(skipped build)`);
    }

    // generate changelog
    step('\nGenerating changelog...');
    await run(`yarn`, ['changelog']);

    const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
    if (stdout) {
        step('\nCommitting changes...');
        await runIfNotDry('git', ['add', '-A']);
        await runIfNotDry('git', ['commit', '-m', `chore: v${newRootVersion}`]);
    } else {
        console.log('No changes to commit.');
    }

    // publish packages
    step('\nPublishing packages...');
    for (const pkg of packagesVersion) {
        await publishPackage(pkg, runIfNotDry);
    }

    // push to GitHub
    step('\nPushing to GitHub...');
    await runIfNotDry('git', ['tag', `v${newRootVersion}`]);
    await runIfNotDry('git', ['push', 'origin', `refs/tags/v${newRootVersion}`]);
    await runIfNotDry('git', ['push']);

    if (isDryRun) {
        console.log(`\nDry run finished - run git diff to see package changes.`);
    }
    console.log();
}

main().catch((err) => {
    console.error(err);
});