"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[230],{6062:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-323bda7e",path:"/reference/plugin/plugins/editor.html",title:"@fesjs/plugin-monaco-editor",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"启用方式",slug:"启用方式",children:[]},{level:2,title:"编译时配置",slug:"编译时配置",children:[{level:3,title:"filename",slug:"filename",children:[]},{level:3,title:"publicPath",slug:"publicpath",children:[]},{level:3,title:"languages",slug:"languages",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"monaco",slug:"monaco",children:[]},{level:3,title:"组件 MonacoEditor",slug:"组件-monacoeditor",children:[]}]}],filePathRelative:"reference/plugin/plugins/editor.md",git:{updatedTime:165344965e4,contributors:[{name:"wanchun",email:"445436867@qq.com",commits:1}]}}},5846:(n,s,a)=>{a.r(s),a.d(s,{default:()=>L});var t=a(6252);const e=(0,t._)("h1",{id:"fesjs-plugin-monaco-editor",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fesjs-plugin-monaco-editor","aria-hidden":"true"},"#"),(0,t.Uk)(" @fesjs/plugin-monaco-editor")],-1),p=(0,t._)("h2",{id:"介绍",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,t.Uk)(" 介绍")],-1),o=(0,t.Uk)("我们会遇到需要编辑代码的场景，比如编辑"),l=(0,t._)("code",null,"json",-1),r=(0,t.Uk)("、"),c=(0,t._)("code",null,"javascript",-1),i=(0,t.Uk)("、"),u=(0,t._)("code",null,"python",-1),d=(0,t.Uk)("等等，"),k={href:"https://github.com/Microsoft/monaco-editor",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("Monaco Editor"),h=(0,t.Uk)(" 是\b一个好用而且强大的的代码编辑器库，引入"),m=(0,t._)("code",null,"Monaco Editor",-1),g=(0,t.Uk)("有一定的成本，插件实现了胶水代码，提供轻松引入的能力。目前内置的 "),f=(0,t._)("code",null,"Monaco Editor",-1),y=(0,t.Uk)(" 版本是 "),v=(0,t._)("code",null,"1.9.1",-1),j=(0,t.Uk)("。"),q=(0,t.uE)('<h2 id="启用方式" tabindex="-1"><a class="header-anchor" href="#启用方式" aria-hidden="true">#</a> 启用方式</h2><p>在 <code>package.json</code> 中引入依赖：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;@fesjs/fes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;@fesjs/plugin-monaco-editor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="编译时配置" tabindex="-1"><a class="header-anchor" href="#编译时配置" aria-hidden="true">#</a> 编译时配置</h2><p>在执行 <code>fes dev</code> 或者 <code>fes build</code> 时，通过此配置生成运行时的代码，在配置文件<code>.fes.js</code> 中配置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">monacoEditor</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">languages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;javascript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',6),w=(0,t.Uk)("我们通过 "),x=(0,t._)("code",null,"monaco-editor-webpack-plugin",-1),_=(0,t.Uk)(" 集成 "),U=(0,t._)("code",null,"Monaco Editor",-1),E=(0,t.Uk)(" 的 "),M=(0,t._)("code",null,"ESM",-1),P=(0,t.Uk)("版本，所以编辑时其实就是 "),C=(0,t._)("code",null,"monaco-editor-webpack-plugin",-1),T=(0,t.Uk)(" 的配置，具体配置项参考"),A={href:"https://github.com/Microsoft/monaco-editor-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("文档"),I=(0,t.Uk)("。"),O=(0,t.uE)('<h3 id="filename" tabindex="-1"><a class="header-anchor" href="#filename" aria-hidden="true">#</a> filename</h3><ul><li><p><strong>类型</strong>：自定义worker脚本名称</p></li><li><p><strong>默认值</strong>：<code>&#39;[name].worker.js&#39;</code></p></li></ul><h3 id="publicpath" tabindex="-1"><a class="header-anchor" href="#publicpath" aria-hidden="true">#</a> publicPath</h3><ul><li><p><strong>类型</strong>：自定义worker脚本的路径</p></li><li><p><strong>默认值</strong>：<code>&#39;&#39;</code></p></li></ul><h3 id="languages" tabindex="-1"><a class="header-anchor" href="#languages" aria-hidden="true">#</a> languages</h3><ul><li><p><strong>类型</strong>：需要支持的语言类型</p></li><li><p><strong>默认值</strong>：<code>[&#39;abap&#39;, &#39;apex&#39;, &#39;azcli&#39;, &#39;bat&#39;, &#39;bicep&#39;, &#39;cameligo&#39;, &#39;clojure&#39;, &#39;coffee&#39;, &#39;cpp&#39;, &#39;csharp&#39;, &#39;csp&#39;, &#39;css&#39;, &#39;dart&#39;, &#39;dockerfile&#39;, &#39;ecl&#39;, &#39;elixir&#39;, &#39;fsharp&#39;, &#39;go&#39;, &#39;graphql&#39;, &#39;handlebars&#39;, &#39;hcl&#39;, &#39;html&#39;, &#39;ini&#39;, &#39;java&#39;, &#39;javascript&#39;, &#39;json&#39;, &#39;julia&#39;, &#39;kotlin&#39;, &#39;less&#39;, &#39;lexon&#39;, &#39;liquid&#39;, &#39;lua&#39;, &#39;m3&#39;, &#39;markdown&#39;, &#39;mips&#39;, &#39;msdax&#39;, &#39;mysql&#39;, &#39;objective-c&#39;, &#39;pascal&#39;, &#39;pascaligo&#39;, &#39;perl&#39;, &#39;pgsql&#39;, &#39;php&#39;, &#39;postiats&#39;, &#39;powerquery&#39;, &#39;powershell&#39;, &#39;pug&#39;, &#39;python&#39;, &#39;qsharp&#39;, &#39;r&#39;, &#39;razor&#39;, &#39;redis&#39;, &#39;redshift&#39;, &#39;restructuredtext&#39;, &#39;ruby&#39;, &#39;rust&#39;, &#39;sb&#39;, &#39;scala&#39;, &#39;scheme&#39;, &#39;scss&#39;, &#39;shell&#39;, &#39;solidity&#39;, &#39;sophia&#39;, &#39;sparql&#39;, &#39;sql&#39;, &#39;st&#39;, &#39;swift&#39;, &#39;systemverilog&#39;, &#39;tcl&#39;, &#39;twig&#39;, &#39;typescript&#39;, &#39;vb&#39;, &#39;xml&#39;, &#39;yaml&#39;]</code></p></li><li><p><strong>详情</strong>：默认是全部，但是编译后包体积会非常大，建议用到什么语言则配置什么语言。特别某些语言依赖其他语言，例如<code>javascript</code>依赖<code>typescript</code>，需要使用<code>javascript</code>时需要配置为：</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">monacoEditor</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">languages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;javascript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="monaco" tabindex="-1"><a class="header-anchor" href="#monaco" aria-hidden="true">#</a> monaco</h3>',9),W=(0,t.Uk)("编辑器的全局对象，提供扩展语言，自定义主题等等API，具体用法请查看"),F={href:"https://microsoft.github.io/monaco-editor/",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("monaco"),Z=(0,t.Uk)("官方文档。"),D=(0,t.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> monaco <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\n\nmonaco<span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">defineTheme</span><span class="token punctuation">(</span><span class="token string">&#39;myCoolTheme&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\t<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;vs&#39;</span><span class="token punctuation">,</span>\n\t<span class="token literal-property property">inherit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;custom-info&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;808080&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;custom-error&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;ff0000&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fontStyle</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;custom-notice&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;FFA500&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;custom-date&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;008800&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="组件-monacoeditor" tabindex="-1"><a class="header-anchor" href="#组件-monacoeditor" aria-hidden="true">#</a> 组件 MonacoEditor</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MonacoEditor</span> \n        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">check</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MonacoEditor</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MonacoEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        MonacoEditor\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            json\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>编辑器的主题，使用其他主题需要先使用<code>monaco.editor.defineTheme</code>定义主题</td><td>string</td><td><code>defaultTheme</code></td></tr><tr><td>language</td><td>编辑器的语言</td><td>string</td><td>-</td></tr><tr><td>height</td><td>编辑器的高度</td><td>string</td><td><code>100%</code></td></tr><tr><td>width</td><td>编辑器的宽度</td><td>string</td><td><code>100%</code></td></tr><tr><td>modelValue(v-model)</td><td>编辑器的代码</td><td>string</td><td>-</td></tr><tr><td>readOnly</td><td>是否只读</td><td>boolean</td><td><code>false</code></td></tr><tr><td>options</td><td>编辑器的配置对象</td><td>object</td><td><code>{}</code></td></tr><tr><td>check</td><td>是否检查代码，如果检查不通过则不更新数据，目前只支持<code>json</code></td><td>boolean</td><td><code>false</code></td></tr></tbody></table><h4 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> events</h4><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>onload</td><td>编辑器初始化后触发</td><td>({monaco, editor, editorModel}) =&gt; void</td></tr><tr><td>scrollChange</td><td>滚动时触发</td><td>(e) =&gt; void</td></tr></tbody></table>',7),H={},L=(0,a(3744).Z)(H,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("p",null,[o,l,r,c,i,u,d,(0,t._)("a",k,[b,(0,t.Wm)(a)]),h,m,g,f,y,v,j]),q,(0,t._)("p",null,[w,x,_,U,E,M,P,C,T,(0,t._)("a",A,[z,(0,t.Wm)(a)]),I]),O,(0,t._)("p",null,[W,(0,t._)("a",F,[S,(0,t.Wm)(a)]),Z]),D],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);