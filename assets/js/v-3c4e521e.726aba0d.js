"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[925],{1371:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3c4e521e",path:"/reference/plugin/plugins/model.html",title:"@fesjs/plugin-model",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"启用方式",slug:"启用方式",children:[]},{level:2,title:"介绍",slug:"介绍",children:[{level:3,title:"Model 文件",slug:"model-文件",children:[]},{level:3,title:"在组件中使用 Model",slug:"在组件中使用-model",children:[]},{level:3,title:"@@initialState",slug:"initialstate",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"useModel",slug:"usemodel",children:[]}]}],filePathRelative:"reference/plugin/plugins/model.md",git:{updatedTime:1655278609e3,contributors:[{name:"wanchun",email:"445436867@qq.com",commits:1}]}}},7746:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="fesjs-plugin-model" tabindex="-1"><a class="header-anchor" href="#fesjs-plugin-model" aria-hidden="true">#</a> @fesjs/plugin-model</h1><h2 id="启用方式" tabindex="-1"><a class="header-anchor" href="#启用方式" aria-hidden="true">#</a> 启用方式</h2><p>在 package.json 中引入依赖：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;@fesjs/fes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;@fesjs/plugin-model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>一种简易的数据管理方案。我们知道 Vue 的理念是用响应式数据驱动UI更新，提供 <code>reactive</code> 、 <code>ref</code> 等API把数据变成响应式的。我们使用<code>Provide / Inject</code>特性，在应用实例中共享响应式数据。</p><p>我们约定<code>src/models</code> 目录下的文件为项目定义的 <code>model</code> 文件。每个文件需要默认导出一个 <code>function</code>。</p><p>文件名则对应最终 <code>model</code> 的 <code>name</code>，你可以通过插件提供的 <code>API</code> 来消费 <code>model</code> 中的数据。</p><h3 id="model-文件" tabindex="-1"><a class="header-anchor" href="#model-文件" aria-hidden="true">#</a> Model 文件</h3><p><strong>src/models/useAuthModel.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useAuthModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">signin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n      <span class="token comment">// todo</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">signout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n      <span class="token comment">// todo</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    user<span class="token punctuation">,</span>\n    signin<span class="token punctuation">,</span>\n    signout\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="在组件中使用-model" tabindex="-1"><a class="header-anchor" href="#在组件中使用-model" aria-hidden="true">#</a> 在组件中使用 Model</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@fesjs/fes&quot;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span> user<span class="token punctuation">,</span> signin<span class="token punctuation">,</span> signout <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span><span class="token string">&quot;useAuthModel&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="initialstate" tabindex="-1"><a class="header-anchor" href="#initialstate" aria-hidden="true">#</a> @@initialState</h3><p>在<code>beforeRender</code>的返回的内容会写入<code>@@initialState</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> beforeRender <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token operator">&lt;</span>PageLoading <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n    <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span> setRole <span class="token punctuation">}</span> <span class="token operator">=</span> access<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token function">setRole</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// 初始化应用的全局状态，可以通过 useModel(&#39;@@initialState&#39;) 获取，具体用法看@/components/UserCenter 文件</span>\n                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;harrywan&#39;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>然后我们可以在其他组件中使用：</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{initialState.userName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span><span class="token string">&#39;@@initialState&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            initialState\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scope</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="usemodel" tabindex="-1"><a class="header-anchor" href="#usemodel" aria-hidden="true">#</a> useModel</h3><p><strong>useModel(name)</strong></p><ul><li><p><strong>类型</strong>：函数</p></li><li><p><strong>详情</strong>: 获取 Model 数据，\b也就是 Model 文件默认导出函数执行的结果。</p></li><li><p><strong>参数</strong>：</p><ul><li>name，传入 Model 文件名</li></ul></li></ul>',22),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);