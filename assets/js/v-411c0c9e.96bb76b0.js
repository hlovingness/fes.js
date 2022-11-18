"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[496],{565:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-411c0c9e",path:"/reference/plugin/plugins/locale.html",title:"@fesjs/plugin-locale",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"启用方式",slug:"启用方式",children:[]},{level:2,title:"配置",slug:"配置",children:[{level:3,title:"约定式配置",slug:"约定式配置",children:[]},{level:3,title:"编译时配置",slug:"编译时配置",children:[]},{level:3,title:"运行时配置",slug:"运行时配置",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"locale",slug:"locale-1",children:[]},{level:3,title:"useI18n",slug:"usei18n",children:[]}]}],filePathRelative:"reference/plugin/plugins/locale.md",git:{updatedTime:1668740775e3,contributors:[{name:"听海",email:"445436867@qq.com",commits:1}]}}},4919:(n,s,a)=>{a.r(s),a.d(s,{default:()=>O});var e=a(6252);const p=(0,e._)("h1",{id:"fesjs-plugin-locale",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#fesjs-plugin-locale","aria-hidden":"true"},"#"),(0,e.Uk)(" @fesjs/plugin-locale")],-1),t=(0,e._)("h2",{id:"介绍",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,e.Uk)(" 介绍")],-1),l=(0,e.Uk)("国际化插件，基于 "),o={href:"https://github.com/intlify/vue-i18n-next",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Vue I18n"),r=(0,e.Uk)("，用于解决 i18n 问题。"),i=(0,e.uE)('<h2 id="启用方式" tabindex="-1"><a class="header-anchor" href="#启用方式" aria-hidden="true">#</a> 启用方式</h2><p>在 <code>package.json</code> 中引入依赖：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;@fesjs/fes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;@fesjs/plugin-locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="约定式配置" tabindex="-1"><a class="header-anchor" href="#约定式配置" aria-hidden="true">#</a> 约定式配置</h3><p>Fes.js 约定如下目录，项目就拥有了 <code>zh-CN</code> 与 <code>en-US</code> 国际化语言切换：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src\n  ├── locales\n  │    ├── zh-CN.js\n  │    └── en-US.js\n  └── pages\n  │    └── index.vue\n  └── app.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>多语言文件的命名规范：<code>&lt;lang&gt;-&lt;COUNTRY&gt;.js</code></p><p>多语言文件的内容规范：键值组成的字面量，如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/locales/zh-CN.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token keyword">interface</span><span class="token operator">:</span> <span class="token string">&#39;接口&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">overview</span><span class="token operator">:</span> <span class="token string">&#39;概述&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">internationalization</span><span class="token operator">:</span> <span class="token string">&#39;国际化，基于&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">achieve</span><span class="token operator">:</span> <span class="token string">&#39;实现。&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">ui</span><span class="token operator">:</span> <span class="token string">&#39;UI组件&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/locales/en-US.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token keyword">interface</span><span class="token operator">:</span> <span class="token string">&#39;interface&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">overview</span><span class="token operator">:</span> <span class="token string">&#39;Overview&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">internationalization</span><span class="token operator">:</span> <span class="token string">&#39;internationalization，base on&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">achieve</span><span class="token operator">:</span> <span class="token string">&#39;to achieve.&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">ui</span><span class="token operator">:</span> <span class="token string">&#39;UI components&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',11),u=(0,e.Uk)("想了解更多语言信息配置、匹配规则，请参考 "),k={href:"https://vue-i18n.intlify.dev/guide/essentials/syntax.html",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Vue I18n"),b=(0,e.Uk)(" 文档。"),g=(0,e.uE)('<h3 id="编译时配置" tabindex="-1"><a class="header-anchor" href="#编译时配置" aria-hidden="true">#</a> 编译时配置</h3><p>在执行 <code>fes dev</code> 或者 <code>fes build</code> 时，通过此配置生成运行时的代码，在配置文件<code>.fes.js</code> 中配置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>默认配置为：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default locale</span>\n        <span class="token literal-property property">fallbackLocale</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// set fallback locale</span>\n        <span class="token literal-property property">baseNavigator</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启浏览器语言检测</span>\n        <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 用户是否需要 Legacy API 模式</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>所有配置项如下：</p><h4 id="locale" tabindex="-1"><a class="header-anchor" href="#locale" aria-hidden="true">#</a> locale</h4><ul><li><p><strong>类型</strong>：<code>String</code></p></li><li><p><strong>默认值</strong>：<code>zh-CN</code></p></li><li><p><strong>详情</strong>：当前的语言。</p></li></ul><h4 id="fallbacklocale" tabindex="-1"><a class="header-anchor" href="#fallbacklocale" aria-hidden="true">#</a> fallbackLocale</h4><ul><li><p><strong>类型</strong>：<code>String</code></p></li><li><p><strong>默认值</strong>：<code>zh-CN</code></p></li><li><p><strong>详情</strong>：兜底的语言，如果当前语言找不到配置，则使用默认语言，需要保证默认语言配置文件存在。</p></li></ul><h4 id="basenavigator" tabindex="-1"><a class="header-anchor" href="#basenavigator" aria-hidden="true">#</a> baseNavigator</h4><ul><li><p><strong>类型</strong>：<code>Boolean</code></p></li><li><p><strong>默认值</strong>：<code>true</code></p></li><li><p><strong>详情</strong>：开启浏览器语言检测。</p></li></ul><p>默认情况下，当前语言环境的识别按照：<code>localStorage</code> 中 <code>fes_locale</code> 值 &gt; 浏览器检测 &gt; <code>default</code> 设置的默认语言 &gt; <code>zh-CN</code> 中文。</p><h4 id="legacy" tabindex="-1"><a class="header-anchor" href="#legacy" aria-hidden="true">#</a> legacy</h4><ul><li><p><strong>类型</strong>：<code>Boolean</code></p></li><li><p><strong>默认值</strong>：<code>false</code></p></li><li><p><strong>详情</strong>：用户是否需要 Legacy API 模式</p></li></ul><h3 id="运行时配置" tabindex="-1"><a class="header-anchor" href="#运行时配置" aria-hidden="true">#</a> 运行时配置</h3><p>暂无。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="locale-1" tabindex="-1"><a class="header-anchor" href="#locale-1" aria-hidden="true">#</a> locale</h3><p>插件 API 通过 <code>@fesjs/fes</code> 导出：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="locale-messages" tabindex="-1"><a class="header-anchor" href="#locale-messages" aria-hidden="true">#</a> locale.messages</h4><ul><li><p><strong>类型</strong>：<code>Object</code></p></li><li><p><strong>详情</strong>：当前的配置的语言信息。</p></li></ul><h4 id="locale-setlocale" tabindex="-1"><a class="header-anchor" href="#locale-setlocale" aria-hidden="true">#</a> locale.setLocale</h4><ul><li><p><strong>类型</strong>：<code>Function</code></p></li><li><p><strong>详情</strong>：设置当前的语言。</p></li><li><p><strong>参数</strong>：</p><ul><li>locale，语言的名称，应该是符合 <code>&lt;lang&gt;-&lt;COUNTRY&gt;</code> 规范的名称。</li></ul></li><li><p><strong>返回值</strong>：<code>null</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\nlocale<span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="locale-addlocale" tabindex="-1"><a class="header-anchor" href="#locale-addlocale" aria-hidden="true">#</a> locale.addLocale</h4><ul><li><p><strong>类型</strong>：<code>Function</code></p></li><li><p><strong>详情</strong>：手动添加语言配置。</p></li><li><p><strong>参数</strong>：</p><ul><li>locale，语言的名称，符合 <code>&lt;lang&gt;-&lt;COUNTRY&gt;</code> 规范的名称。</li><li>messages, 语言信息。</li></ul></li><li><p><strong>返回值</strong>：<code>null</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span>\nlocale<span class="token punctuation">.</span><span class="token function">addLocale</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">&#39;ja-JP&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;テスト&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="locale-getalllocales" tabindex="-1"><a class="header-anchor" href="#locale-getalllocales" aria-hidden="true">#</a> locale.getAllLocales</h4><ul><li><p><strong>类型</strong>：<code>Function</code></p></li><li><p><strong>详情</strong>：获取当前获得所有国际化文件的列表，默认会在 locales 文件夹下寻找类似 <code>en-US.js</code> 文件。</p></li><li><p><strong>参数</strong>：null</p></li><li><p><strong>返回值</strong>：<code>Array</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span><span class="token function">getAllLocales</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [&quot;en-US&quot;, &quot;id-ID&quot;, &quot;ja-JP&quot;, &quot;pt-BR&quot;, &quot;zh-CN&quot;, &quot;zh-TW&quot;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="usei18n" tabindex="-1"><a class="header-anchor" href="#usei18n" aria-hidden="true">#</a> useI18n</h3>',33),m=(0,e.Uk)("Composition API, 只能在 "),h=(0,e._)("code",null,"setup",-1),v=(0,e.Uk)(" 函数中使用，更多细节参考 "),f={href:"https://vue-i18n.intlify.dev/api/composition.html#usei18n",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("Vue I18n"),j=(0,e.Uk)("。 \b举个 🌰："),x=(0,e.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>{{ t(&#39;language&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>message: {{ t(&#39;hello&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token comment">// Something to do ...</span>\n\n   <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">,</span> t <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',1),w=(0,e._)("code",null,"useI18n()",-1),U=(0,e.Uk)("返回结果是 "),_={href:"https://vue-i18n.intlify.dev/api/composition.html#composer",target:"_blank",rel:"noopener noreferrer"},q=(0,e.Uk)("Composer"),C=(0,e.Uk)("，提供类似 "),I=(0,e._)("code",null,"t",-1),N=(0,e.Uk)("、"),z=(0,e._)("code",null,"n",-1),L=(0,e.Uk)("、"),S=(0,e._)("code",null,"d",-1),A=(0,e.Uk)(" 等转换函数，在模板中使用。"),P={},O=(0,a(3744).Z)(P,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,t,(0,e._)("p",null,[l,(0,e._)("a",o,[c,(0,e.Wm)(a)]),r]),i,(0,e._)("p",null,[u,(0,e._)("a",k,[d,(0,e.Wm)(a)]),b]),g,(0,e._)("p",null,[m,h,v,(0,e._)("a",f,[y,(0,e.Wm)(a)]),j]),x,(0,e._)("p",null,[w,U,(0,e._)("a",_,[q,(0,e.Wm)(a)]),C,I,N,z,L,S,A])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);