"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[807],{9570:(e,s,l)=>{l.r(s),l.d(s,{data:()=>a});const a={key:"v-fffb8e28",path:"/guide/",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"痛点",slug:"痛点",children:[]},{level:2,title:"Fes.js 是什么？",slug:"fes-js-是什么",children:[]},{level:2,title:"Fes.js 如何工作？",slug:"fes-js-如何工作",children:[{level:3,title:"架构",slug:"架构",children:[]},{level:3,title:"插件和插件集",slug:"插件和插件集",children:[]},{level:3,title:".fes 临时文件",slug:"fes-临时文件",children:[]}]},{level:2,title:"为什么不是 ...?",slug:"为什么不是",children:[{level:3,title:"Vue CLI",slug:"vue-cli",children:[]},{level:3,title:"UMI",slug:"umi",children:[]}]}],filePathRelative:"guide/README.md",git:{updatedTime:1653448604e3,contributors:[{name:"harrywan",email:"445436867@qq.com",commits:1}]}}},5195:(e,s,l)=>{l.r(s),l.d(s,{default:()=>c});var a=l(6252);const i=(0,a.uE)('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="痛点" tabindex="-1"><a class="header-anchor" href="#痛点" aria-hidden="true">#</a> 痛点</h2><p>在开发一个前端项目之前，我们可能需要做如下准备工作：</p><ul><li>搭建开发环境</li><li>约定代码规范</li><li>封装API请求</li><li>配置路由</li><li>实现布局、菜单、导航</li><li>实现登录</li><li>权限管理</li><li>...</li></ul><p>除了准备工作之外，还会遇到很多相似的业务类型，比如中后台应用大多都是工作台、增删改查、权限、图表等。如果每次项目都完全手动处理一遍，不仅耗费时间，久而久之可能会存在多种技术栈、开发规范，导致开发流程不统一，历史项目越来越难维护。所以我们需要一套完整的解决方案，管理开发到部署整个流程。</p><h2 id="fes-js-是什么" tabindex="-1"><a class="header-anchor" href="#fes-js-是什么" aria-hidden="true">#</a> Fes.js 是什么？</h2><p>Fes.js 是一个好用的前端应用解决方案。Fes.js 以 Vue 3.0 和路由为基础，同时支持配置式路由和约定式路由，并以此进行功能扩展。配以覆盖编译时和运行时生命周期完善的插件体系，支持各种功能扩展和业务需求。</p><p>它主要具备以下特点：</p><ul><li><p>🚀 <strong>快速</strong> ，内置了路由、开发、构建等，并且提供测试、布局、权限、国际化、状态管理、API请求、数据字典、SvgIcon等插件，可以满足大部分日常开发需求。</p></li><li><p>🧨 <strong>简单</strong> ，基于Vue.js 3.0，上手简单。贯彻“约定优于配置”思想，设计插件上尽可能用约定替代配置，同时提供统一的插件配置入口，简单简洁又不失灵活。提供一致性的API入口，一致化的体验，学习起来更轻松。</p></li><li><p>💪 <strong>健壮</strong> ，只需要关心页面内容，减少写BUG的机会！提供单元测试、覆盖测试能力保障项目质量。</p></li><li><p>📦 <strong>可扩展</strong> ，借鉴Umi实现了完整的生命周期和插件化机制，插件可以管理项目的编译时和运行时，能力均可以通过插件封装进来，在 Fes.js 中协调有序的运行。</p></li><li><p>📡 <strong>面向未来</strong> ，在满足需求的同时，我们也不会停止对新技术的探索。已使用Vue3.0来提升应用性能，已使用webpack5提升构建性能和实现微服务，未来会探索vite等新技术。</p></li></ul><h2 id="fes-js-如何工作" tabindex="-1"><a class="header-anchor" href="#fes-js-如何工作" aria-hidden="true">#</a> Fes.js 如何工作？</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3>',11),r=["src"],n=(0,a._)("p",null,"Fes.js 把大家常用的技术栈封装成一个个插件进行整理，收敛到一起，让大家只用 Fes.js 就可以完成 80% 的日常工作。",-1),t=(0,a._)("h3",{id:"插件和插件集",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#插件和插件集","aria-hidden":"true"},"#"),(0,a.Uk)(" 插件和插件集")],-1),d=["src"],h=(0,a.uE)(' Fes.js 支持插件和插件集，通过这张图应该很好理解到他们的关系，通过插件集我们把插件收敛依赖然后支持不同的业务类型。 <h3 id="fes-临时文件" tabindex="-1"><a class="header-anchor" href="#fes-临时文件" aria-hidden="true">#</a> .fes 临时文件</h3><p>.fes 临时目录是整个 Fes.js 项目的发动机，你的入口文件、路由等等都在这里，这些是由 fes 内部插件及三方插件生成的。</p><p>你通常会在 .fes 下看到以下目录</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+ .fes\n  + core     # 内部插件生成\n  + pluginA  # 外部插件生成\n  + presetB  # 外部插件生成\n  + fes.js   # 入口文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>临时文件是 Fes.js 中非常重要的一部分，框架或插件会根据你的代码生成临时文件，这些原来需要放在项目里的脏乱差的部分都被藏在了这里。</p><p>你可以在这里调试代码，但不要在 .git 仓库里提交他，因为他的临时性，每次启动 fes 时都会被删除并重新生成。</p><h2 id="为什么不是" tabindex="-1"><a class="header-anchor" href="#为什么不是" aria-hidden="true">#</a> 为什么不是 ...?</h2><h3 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> Vue CLI</h3><p>Vue CLI 是基于 Vue.js 进行快速开发的完整系统，提供交互式脚手架、丰富的官方插件，并且可通过插件进行扩展，他在打包层把体验做到了极致，但是不包含路由，不是框架。所以，如果大家想基于他修改部分配置，或者希望在打包层之外也做技术收敛时，就会遇到困难。</p><h3 id="umi" tabindex="-1"><a class="header-anchor" href="#umi" aria-hidden="true">#</a> UMI</h3><p>UMI 是个很好的选择，Fes.js 很多功能是借鉴 UMI 做的。UMI 是基于 React 封装的应用级框架，贯彻着函数式编程的思维。而 Vue 有所不同，虽然 Vue 3.0 向函数式迈了一大步，但大家可能依然喜欢编写 <code>.vue</code>文件，而非 <code>.jsx</code> 文件。两种思维方式会导致部分API设计上有所差异，虽然 UMI 有 <code>plugin-vue</code> ，但不太 &quot;vue&quot;。推荐喜欢 React 的同学使用 UMI。</p>',12),u={},c=(0,l(3744).Z)(u,[["render",function(e,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("img",{src:e.$withBase("framework.png"),alt:"架构"},null,8,r),n,t,(0,a._)("p",null,[(0,a._)("img",{src:e.$withBase("plugins.png"),alt:"插件",title:"插件",style:{width:"500px"},class:"medium-zoom-image"},null,8,d)]),h],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{const l=e.__vccOpts||e;for(const[e,a]of s)l[e]=a;return l}}}]);