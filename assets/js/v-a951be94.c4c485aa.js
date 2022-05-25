"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[65],{8007:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-a951be94",path:"/reference/cli.html",title:"命令行接口",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"dev",slug:"dev",children:[]},{level:2,title:"build",slug:"build",children:[]},{level:2,title:"info",slug:"info",children:[]}],filePathRelative:"reference/cli.md",git:{updatedTime:1653450562e3,contributors:[{name:"wanchun",email:"445436867@qq.com",commits:1}]}}},5173:(n,s,e)=>{e.r(s),e.d(s,{default:()=>v});var a=e(6252);const p=(0,a._)("h1",{id:"命令行接口",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#命令行接口","aria-hidden":"true"},"#"),(0,a.Uk)(" 命令行接口")],-1),l=(0,a.Uk)("VuePress 命令行接口是由 "),r={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("@vuepress/cli"),c=(0,a.Uk)(" 包提供的。它是 "),o={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("vuepress"),u=(0,a.Uk)(" 包的依赖之一，当然你也可以单独安装它。"),b=(0,a.uE)('<p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:\n  $ vuepress <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n\nCommands:\n  dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>    Start development server\n  build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>  Build to static site\n  info               Display environment information\n\nFor <span class="token function">more</span> info, run any <span class="token builtin class-name">command</span> with the <span class="token variable"><span class="token variable">`</span>--help<span class="token variable">`</span></span> flag:\n  $ vuepress dev --help\n  $ vuepress build --help\n  $ vuepress info --help\n\nOptions:\n  -v, --version  Display version number \n  -h, --help     Display this message \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:\n  $ vuepress dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>\n\nOptions:\n  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> \n  -p, --port <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>      Use specified port <span class="token punctuation">(</span>default: <span class="token number">8080</span><span class="token punctuation">)</span> \n  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files \n  --host <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span>          Use specified <span class="token function">host</span> <span class="token punctuation">(</span>default: <span class="token number">0.0</span>.0.0<span class="token punctuation">)</span> \n  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files \n  --clean-temp           Clean the temporary files before dev \n  --clean-cache          Clean the cache files before dev \n  --open                 Open browser when ready \n  --debug                Enable debug mode \n  --no-watch             Disable watching page and config files <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>\n  -v, --version          Display version number \n  -h, --help             Display this message\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>',7),d=(0,a.Uk)("将你的 VuePress 站点构建成静态文件，以便你进行后续"),m=(0,a.Uk)("部署"),h=(0,a.Uk)("。"),k=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:\n  $ vuepress build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>\n\nOptions:\n  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> \n  -d, --dest <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>      Set the directory build output <span class="token punctuation">(</span>default: .vuepress/dist<span class="token punctuation">)</span> \n  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files \n  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files \n  --clean-temp           Clean the temporary files before build \n  --clean-cache          Clean the cache files before build \n  --debug                Enable debug mode \n  -v, --version          Display version number \n  -h, --help             Display this message\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>',5),f={},v=(0,e(3744).Z)(f,[["render",function(n,s){const e=(0,a.up)("OutboundLink"),f=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,(0,a._)("p",null,[l,(0,a._)("a",r,[t,(0,a.Wm)(e)]),c,(0,a._)("a",o,[i,(0,a.Wm)(e)]),u]),b,(0,a._)("p",null,[d,(0,a.Wm)(f,{to:"/guide/deployment.html"},{default:(0,a.w5)((()=>[m])),_:1}),h]),k],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);