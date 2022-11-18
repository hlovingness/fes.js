"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[445],{1759:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-85fa9b2a",path:"/guide/config.html",title:"配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"本地临时配置文件",slug:"本地临时配置文件",children:[]},{level:2,title:"多环境多份配置",slug:"多环境多份配置",children:[]},{level:2,title:"优先级",slug:"优先级",children:[]}],filePathRelative:"guide/config.md",git:{updatedTime:1668740775e3,contributors:[{name:"听海",email:"445436867@qq.com",commits:1}]}}},5942:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>Fes.js 约定 <code>.fes.js</code> 文件为项目编译需要配置文件，可以引入 node 端依赖项，不要引入浏览器端依赖项。</p><p>一份常见的配置示例如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;/v2&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&#39;/v2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string-property property">&#39;target&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://api.douban.com/&#39;</span><span class="token punctuation">,</span>\n            <span class="token string-property property">&#39;changeOrigin&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> \n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Fes.js&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;Created by MumbelFe&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">multiTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">menus</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;onepiece&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;store&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;simpleList&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="本地临时配置文件" tabindex="-1"><a class="header-anchor" href="#本地临时配置文件" aria-hidden="true">#</a> 本地临时配置文件</h2><p>可以新建 <code>.fes.local.js</code> 作为本地临时配置文件。这份配置会和 <code>.fes.js</code> 做 <code>deep merge</code> 后形成最终配置。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .fes.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// .fes.local.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> \n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>最终的配置是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> \n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>.fes.local.js</code> 是本地验证使用的临时配置，仅在 <code>fes dev</code> 时有效，请将其添加到 <code>.gitignore</code>，务必不要提交到 <code>git</code> 仓库中。</p></div><h2 id="多环境多份配置" tabindex="-1"><a class="header-anchor" href="#多环境多份配置" aria-hidden="true">#</a> 多环境多份配置</h2><p>可以通过环境变量 <code>FES_ENV</code> 区分不同环境，来指定当前环境的配置文件，这份配置会和 <code>.fes.js</code> 做 <code>deep merge</code> 后形成最终配。</p><p>比如配置如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .fes.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// .fes.uat.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> \n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>当我们运行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">FES_ENV</span><span class="token operator">=</span>uat fes dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这时候会命中 <code>.fes.uat.js</code> 这份环境配置，最终配置是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> \n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>本地临时配置 &gt; 环境配置 &gt; 基础配置</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果多份配置中存在相同的配置项，<strong>则优先级高的会覆盖优先级低的</strong>。</p></div>',21),e={},t=(0,a(3744).Z)(e,[["render",function(s,n){return p}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,p]of n)a[s]=p;return a}}}]);