"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[617],{4148:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n={key:"v-d7fa887a",path:"/guide/contributing.html",title:"贡献指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"概览",slug:"概览",children:[]},{level:2,title:"开发配置",slug:"开发配置",children:[]},{level:2,title:"开发脚本",slug:"开发脚本",children:[{level:3,title:"yarn build",slug:"yarn-build",children:[]},{level:3,title:"yarn docs:dev",slug:"yarn-docs-dev",children:[]},{level:3,title:"调试功能",slug:"调试功能",children:[]}]}],filePathRelative:"guide/contributing.md",git:{updatedTime:1653448604e3,contributors:[{name:"harrywan",email:"445436867@qq.com",commits:1}]}}},332:(e,a,r)=>{r.r(a),r.d(a,{default:()=>A});var n=r(6252);const l=(0,n._)("h1",{id:"贡献指南",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#贡献指南","aria-hidden":"true"},"#"),(0,n.Uk)(" 贡献指南")],-1),s=(0,n._)("h2",{id:"概览",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),(0,n.Uk)(" 概览")],-1),d=(0,n.Uk)("项目仓库借助于 "),o={href:"https://classic.yarnpkg.com/zh-Hans/docs/workspaces",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("Yarn Classic 工作区"),c=(0,n.Uk)(" 来实现 "),t={href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("Monorepo"),u=(0,n.Uk)(" ，在 "),h=(0,n._)("code",null,"packages",-1),f=(0,n.Uk)(" 目录下存放了多个互相关联的独立 Package 。"),b=(0,n.uE)('<ul><li><p><code>@fesjs/create-fes-app</code>: 创建项目模板模块。提供<code>create-fes-app</code>命令，提供创建多种类型项目模板的能力。</p></li><li><p><code>@fesjs/fes</code>: 入口模块。提供<code>fes</code>命令和 API 入口。</p></li><li><p><code>@fesjs/compiler</code>: 编译时插件管理模块。定义插件的生命周期、插件配置、插件通讯机制等。</p></li><li><p><code>@fesjs/runtime</code>: 运行时插件模块。集成了vue-router，定义运行时插件生命周期、插件通讯机制。</p></li><li><p><code>@fesjs/preset-build-in</code>: 内置插件集。包含<code>dev</code>、<code>build</code>等命令，集成webpack5+babel，提供方便编写插件的API，入口文件处理，路由处理等能力。</p></li><li><p><code>@fesjs/fes-template</code>: 适用于PC类型的模板项目。</p></li><li><p><code>@fesjs/fes-template-h5</code>: 适用于H5类型的模板项目。</p></li><li><p><code>@fesjs/plugin-${name}</code>: 官方插件。</p></li><li><p><code>@fesjs/fes</code>: 是 <code>@fesjs/compiler</code> + <code>@fesjs/runtime</code> + <code>@fesjs/preset-build-in</code> 的封装。用户只需要安装此依赖和额外的插件或者插件集。</p></li></ul><h2 id="开发配置" tabindex="-1"><a class="header-anchor" href="#开发配置" aria-hidden="true">#</a> 开发配置</h2><p>开发要求：</p>',3),m={href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("Node.js"),k=(0,n.Uk)(),_=(0,n._)("strong",null,"version 12+",-1),v={href:"https://classic.yarnpkg.com/zh-Hans/docs/install",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("Yarn v1 classic"),U=(0,n.uE)('<p>克隆代码仓库，并安装依赖：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>监听源文件修改：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>打开另一个终端，开始开发项目文档网站：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>本项目开发使用的一些主要工具：</p>',7),y={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("Jest"),w=(0,n.Uk)(" 用于单元测试"),E={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("ESLint"),W=(0,n.Uk)(" + "),C={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("Prettier"),H=(0,n.Uk)(" 用于代码检查和格式化"),J={href:"https://github.com/umijs/father",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("@umi/father"),N=(0,n.Uk)(" 用于将ES6语法编译成ES5或者CommonJS"),Y=(0,n.uE)('<h2 id="开发脚本" tabindex="-1"><a class="header-anchor" href="#开发脚本" aria-hidden="true">#</a> 开发脚本</h2><h3 id="yarn-build" tabindex="-1"><a class="header-anchor" href="#yarn-build" aria-hidden="true">#</a> <code>yarn build</code></h3><p><code>build</code> 命令会使用 <code>father-build</code> 将 ES6 编译为 CommonJS。</p><p>本项目在编写Node端的代码时也用ES6，所以你在克隆代码仓库后，可能需要先执行该命令来确保项目代码可以顺利运行，因为编译后的 JS 文件被 <code>.gitignore</code> 排除在仓库以外了。</p><h3 id="yarn-docs-dev" tabindex="-1"><a class="header-anchor" href="#yarn-docs-dev" aria-hidden="true">#</a> <code>yarn docs:dev</code></h3><p><code>docs:</code> 前缀表明，这些命令是针对文档 (documentation) 进行操作的，即 <code>docs</code> 目录。<br> 使用 Vue Press在本地启动文档网站服务器，用于实时查看文档效果。</p><h3 id="调试功能" tabindex="-1"><a class="header-anchor" href="#调试功能" aria-hidden="true">#</a> 调试功能</h3><p>在开发完插件代码后，需要在template项目中验证功能</p><ul><li>进入<code>packages/template</code>目录</li><li>执行<code>yarn dev</code></li></ul>',9),q={},A=(0,r(3744).Z)(q,[["render",function(e,a){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,s,(0,n._)("p",null,[d,(0,n._)("a",o,[i,(0,n.Wm)(r)]),c,(0,n._)("a",t,[p,(0,n.Wm)(r)]),u,h,f]),b,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",m,[g,(0,n.Wm)(r)]),k,_]),(0,n._)("li",null,[(0,n._)("a",v,[j,(0,n.Wm)(r)])])]),U,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",y,[x,(0,n.Wm)(r)]),w]),(0,n._)("li",null,[(0,n._)("a",E,[S,(0,n.Wm)(r)]),W,(0,n._)("a",C,[P,(0,n.Wm)(r)]),H]),(0,n._)("li",null,[(0,n._)("a",J,[z,(0,n.Wm)(r)]),N])]),Y],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const r=e.__vccOpts||e;for(const[e,n]of a)r[e]=n;return r}}}]);