"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[754],{6285:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-00cf7e23",path:"/guide/mock.html",title:"Mock 数据",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"约定式 Mock 文件",slug:"约定式-mock-文件",children:[]},{level:2,title:"编写 Mock 文件",slug:"编写-mock-文件",children:[{level:3,title:"cgiMock \b参数",slug:"cgimock-参数",children:[]},{level:3,title:"mockjs 参数",slug:"mockjs-参数",children:[]},{level:3,title:"utils 参数",slug:"utils-参数",children:[]}]},{level:2,title:"配置 Mock",slug:"配置-mock",children:[]},{level:2,title:"关闭 Mock",slug:"关闭-mock",children:[]}],filePathRelative:"guide/mock.md",git:{updatedTime:1655278609e3,contributors:[{name:"wanchun",email:"445436867@qq.com",commits:1}]}}},5808:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(6252);const t=(0,p.uE)('<h1 id="mock-数据" tabindex="-1"><a class="header-anchor" href="#mock-数据" aria-hidden="true">#</a> Mock 数据</h1><p>Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。</p><h2 id="约定式-mock-文件" tabindex="-1"><a class="header-anchor" href="#约定式-mock-文件" aria-hidden="true">#</a> 约定式 Mock 文件</h2><p>Fes.js 约定 <code>./mock.js</code> 为 mock 文件。</p><p>比如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.\n├── mock.js\n└── src\n    └── pages\n        └── index.vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="编写-mock-文件" tabindex="-1"><a class="header-anchor" href="#编写-mock-文件" aria-hidden="true">#</a> 编写 Mock 文件</h2><p>可以参考如下 🌰：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> cgiMock<span class="token punctuation">,</span> mockjs<span class="token punctuation">,</span> utils <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> Random <span class="token punctuation">}</span> <span class="token operator">=</span> mockjs<span class="token punctuation">;</span>\n\n    <span class="token comment">// 测试 proxy 与 mock 用例集合</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/movie/in_theaters_mock&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;movie:  movie/in_theaters_mock ~~~~~&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/movie/test_mock&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;mock:  movie/test_mock&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 测试用例: mock.js change，重现请求，需要能拉最新的数据</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/watchtest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;通过 register 测试 mock watch: 初始状态&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 返回一个数字</span>\n    <span class="token comment">// cgiMock(&#39;/number&#39;, 666);</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/number&#39;</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 返回一个json</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/json&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;400101&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;不合法的请求:Missing cookie &#39;wb_app_id&#39; for method parameter of type String&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">transactionTime</span><span class="token operator">:</span> <span class="token string">&#39;20170309171146&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 利用 mock.js 产生随机文本</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/text&#39;</span><span class="token punctuation">,</span> Random<span class="token punctuation">.</span><span class="token function">cparagraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 返回一个字符串 利用 mock.js 产生随机字符</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/random&#39;</span><span class="token punctuation">,</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string-property property">&#39;string|1-10&#39;</span><span class="token operator">:</span> <span class="token string">&#39;★&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 正则匹配url, 返回一个字符串</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/abc|\\/xyz</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;regexp test!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// option.result 参数如果是一个函数, 可以实现自定义返回内容, 接收的参数是是经过 express 封装的 req 和 res 对象.</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/function$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;function test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 返回文本 readFileSync</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/file&#39;</span><span class="token punctuation">,</span> utils<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 更复杂的规则配置</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/who</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>\n        <span class="token function">result</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;kwan&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">kwan</span><span class="token operator">:</span> <span class="token string">&#39;孤独患者&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Nooooooooooo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">,</span>\n            <span class="token string-property property">&#39;Content-Length&#39;</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">ETag</span><span class="token operator">:</span> <span class="token string">&#39;12345&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;myname&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;kwan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">900000</span><span class="token punctuation">,</span> <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 携带参数的请求</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/v2/audit/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>\n            currentPage<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> isAudited\n        <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                currentPage<span class="token punctuation">,</span>\n                pageSize<span class="token punctuation">,</span>\n                <span class="token literal-property property">totalPage</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">totalCount</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">pageData</span><span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> pageSize <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    <span class="token literal-property property">title</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">authorName</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">authorId</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">createTime</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">updateTime</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">readCount</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">favoriteCount</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">postId</span><span class="token operator">:</span> <span class="token string">&#39;12323&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">serviceTag</span><span class="token operator">:</span> <span class="token string">&#39;业务类型&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">productTag</span><span class="token operator">:</span> <span class="token string">&#39;产品类型&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">requestTag</span><span class="token operator">:</span> <span class="token string">&#39;需求类型&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">handleTag</span><span class="token operator">:</span> <span class="token string">&#39;已采纳&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">postType</span><span class="token operator">:</span> <span class="token string">&#39;voice&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">postStatus</span><span class="token operator">:</span> isAudited <span class="token operator">?</span> <span class="token string">&#39;pass&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;auditing&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">auditStatus</span><span class="token operator">:</span> <span class="token string">&#39;audit1&#39;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// multipart/form-data 类型</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/v2/upload&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;文件上传成功&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br></div></div><h3 id="cgimock-参数" tabindex="-1"><a class="header-anchor" href="#cgimock-参数" aria-hidden="true">#</a> cgiMock \b参数</h3><p>创建一个 mock 接口，参数非常灵活，参考上面的 demo 即可。</p><h3 id="mockjs-参数" tabindex="-1"><a class="header-anchor" href="#mockjs-参数" aria-hidden="true">#</a> mockjs 参数</h3>',12),e={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("Mock.js"),c=(0,p.Uk)(" 是常用的辅助生成模拟数据的三方库，借助他可以提升我们的 mock 数据能力。"),l=(0,p.uE)('<p>比如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> cgiMock<span class="token punctuation">,</span> mockjs<span class="token punctuation">,</span> utils <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">cgiMock</span><span class="token punctuation">(</span><span class="token string">&#39;/random&#39;</span><span class="token punctuation">,</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string-property property">&#39;string|1-10&#39;</span><span class="token operator">:</span> <span class="token string">&#39;★&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="utils-参数" tabindex="-1"><a class="header-anchor" href="#utils-参数" aria-hidden="true">#</a> utils 参数</h3><p>工具函数：</p><ul><li>utils.file(path)，从项目根目录根据path寻找文件，返回文件流。</li></ul><h2 id="配置-mock" tabindex="-1"><a class="header-anchor" href="#配置-mock" aria-hidden="true">#</a> 配置 Mock</h2>',6),r=(0,p.Uk)("详见配置 "),u=(0,p.Uk)("mock"),i=(0,p.Uk)("。"),k=(0,p.uE)('<h2 id="关闭-mock" tabindex="-1"><a class="header-anchor" href="#关闭-mock" aria-hidden="true">#</a> 关闭 Mock</h2><p>可以通过配置关闭。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),b={},m=(0,a(3744).Z)(b,[["render",function(n,s){const a=(0,p.up)("OutboundLink"),b=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[(0,p._)("a",e,[o,(0,p.Wm)(a)]),c]),l,(0,p._)("p",null,[r,(0,p.Wm)(b,{to:"/reference/config/#mock"},{default:(0,p.w5)((()=>[u])),_:1}),i]),k],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);