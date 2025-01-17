import { defineBuildConfig } from '@fesjs/fes';

export default defineBuildConfig({
    targets: {
        chrome: '78',
    },
    define: {
        __DEV__: false,
    },
    html: {
        title: '海贼王',
    },
    router: {
        mode: 'hash',
    },
    watermark: {
        disabled: false,
    },
    access: {
        roles: {
            admin: ['*'],
            menuTest: ['/', '/menuTest'],
        },
    },
    mock: {
        prefix: '/v2',
    },
    proxy: {
        '/v2': {
            target: 'https://api.douban.com/',
            changeOrigin: true,
        },
    },
    layout: {
        title: 'Fes.js',
        footer: 'Created by MumbleFE',
        multiTabs: true,
        navigation: 'mixin',
        theme: 'dark',
        menus: [
            {
                name: 'index',
                icon: '/wine-outline.svg',
                match: ['/route/*'],
            },
            {
                name: 'editor',
                icon: '/wine-outline.svg',
            },
            {
                title: '$externalLink',
                icon: 'UserOutlined',
                path: 'https://www.baidu.com',
            },
            {
                name: 'mock',
            },
            {
                title: '菜单权限测试',
                children: [
                    {
                        title: '子菜单',
                        path: '/menuTest',
                    },
                ],
            },
            {
                name: 'cssModule',
            },
            {
                name: 'pinia',
            },
        ],
        menuProps: {
            defaultExpandAll: false,
        },
    },
    devServer: {
        port: 8080,
    },
    enums: {
        status: [
            ['0', '无效的'],
            ['1', '有效的'],
        ],
    },
    dynamicImport: true,
    monacoEditor: {
        languages: ['javascript', 'typescript', 'html', 'json'],
    },
});
