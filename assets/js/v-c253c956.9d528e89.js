"use strict";(self.webpackChunkfes_js=self.webpackChunkfes_js||[]).push([[673],{9073:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-c253c956",path:"/reference/plugin/plugins/enums.html",title:"@fesjs/plugin-enums",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"启用方式",slug:"启用方式",children:[]},{level:2,title:"配置",slug:"配置",children:[{level:3,title:"静态配置",slug:"静态配置",children:[]},{level:3,title:"动态配置",slug:"动态配置",children:[]}]},{level:2,title:"场景使用",slug:"场景使用",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"get",slug:"get",children:[]},{level:3,title:"push",slug:"push",children:[]},{level:3,title:"remove",slug:"remove",children:[]},{level:3,title:"concat",slug:"concat",children:[]},{level:3,title:"convert",slug:"convert",children:[]},{level:3,title:"extend配置",slug:"extend配置",children:[]},{level:3,title:"dir规则",slug:"dir规则",children:[]}]}],filePathRelative:"reference/plugin/plugins/enums.md",git:{updatedTime:1653450562e3,contributors:[{name:"wanchun",email:"445436867@qq.com",commits:1}]}}},9533:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="fesjs-plugin-enums" tabindex="-1"><a class="header-anchor" href="#fesjs-plugin-enums" aria-hidden="true">#</a> @fesjs/plugin-enums</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>日常业务开发中，有很多场景会使用到枚举值，比如select-options、table-column。</p><p>该插件提供统一的枚举存取及丰富的函数来处理枚举。</p><h2 id="启用方式" tabindex="-1"><a class="header-anchor" href="#启用方式" aria-hidden="true">#</a> 启用方式</h2><p>在 <code>package.json</code> 中引入依赖：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;@fesjs/fes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;@fesjs/plugin-enums&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="静态配置" tabindex="-1"><a class="header-anchor" href="#静态配置" aria-hidden="true">#</a> 静态配置</h3><p>在 <code>.fes.js</code> 中配置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 配置格式：[[key, value], ...]</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">enums</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;无效的&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;有效的&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="动态配置" tabindex="-1"><a class="header-anchor" href="#动态配置" aria-hidden="true">#</a> 动态配置</h3><p>在业务代码中</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> enums <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// 动态添加</span>\nenums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;无效的&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;有效的&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\nenums<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 有效的</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="场景使用" tabindex="-1"><a class="header-anchor" href="#场景使用" aria-hidden="true">#</a> 场景使用</h2><ul><li><p>动态添加的枚举项支持数组和对象</p></li><li><p>枚举项为对象时，可以指定keyName和valueName属性名</p></li><li><p>导出枚举值，可指定取值的路径</p></li><li><p>导出枚举可扩展属性</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 遍历枚举status --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in enumsGet(<span class="token punctuation">&#39;</span>status<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            {{item.value}}：{{item.key}}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 遍历枚举扩展后的roles --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in roles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            {{item.name}}：{{item.disabled}}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 获取枚举roles为2的英文名 --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{enumsGet(&#39;roles&#39;, &#39;2&#39;, { dir: &#39;eName&#39; })}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> enums <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fesjs/fes&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 动态添加枚举，枚举项是对象，并指定key的属性名为id</span>\n        enums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;roles&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">cName</span><span class="token operator">:</span> <span class="token string">&#39;系统管理员&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;System&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">perm</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">cName</span><span class="token operator">:</span> <span class="token string">&#39;业务管理员&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;Business&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">perm</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">cName</span><span class="token operator">:</span> <span class="token string">&#39;普通用户&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">perm</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyName</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 导出定制格式的roles，扩展枚举项新的属性name、disabled</span>\n        <span class="token keyword">const</span> roles <span class="token operator">=</span> enums<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;roles&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>\n                    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;cName&#39;</span> <span class="token comment">// 指定取值路径，取属性cName的值</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span>\n                    <span class="token comment">// 传入函数，获取结果值</span>\n                    <span class="token function-variable function">transfer</span><span class="token operator">:</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>value<span class="token punctuation">.</span>perm<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>roles<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// [{key: &#39;1&#39;, name: &#39;系统管理员&#39;, disabled: true, value: {...}}, ....]</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">enumsGet</span><span class="token operator">:</span> enums<span class="token punctuation">.</span>get<span class="token punctuation">,</span>\n            roles\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><ul><li><p><code>get(name: string)</code> 获取指定名字的枚举</p></li><li><p><code>get(name: string, key: string)</code> 获取指定名字及键枚举默认值</p></li><li><p><code>get(name: string, opt: {extend: Array&lt;Object&gt;})</code> 获取指定名字的自定义格式枚举，<a href="#extend%E9%85%8D%E7%BD%AE">查看extend配置</a></p></li><li><p><code>get(name: string, key: string, opt: {dir: string})</code> 获取指定名字及键枚举<a href="#dir%E8%A7%84%E5%88%99">dir规则</a>的值</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">)</span>\n<span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>\n<span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">transfer</span><span class="token operator">:</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push</h3><p>动态添加枚举，重复添加会覆盖</p><ul><li><code>push(name: string, _enum: Array&lt;Array&gt;)</code></li><li><code>push(name: string, _enum: Array&lt;Object&gt;, opt?: Object)</code><ul><li>opt.keyName 指定key的取值属性，默认是key</li><li>opt.valueName 指定value的取值属性</li></ul></li></ul><p>枚举项为数组，枚举项的[0]解析为key，枚举项的[1]解析为value</p><p>枚举项为对象时，根据opt配置keyName、valueName取枚举项属性值分别作为key和value，<code>如果valueName未设置则value就是枚举项</code></p><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove</h3><ul><li>remove(name: string)</li></ul><p>移除指定的枚举</p><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat</h3><p>基于现有的枚举，连接上新的枚举后返回新的枚举</p><ul><li><code>concat(name: string, _enum: Array&lt;Array|Object&gt;, opt?: Object))</code><ul><li>opt.keyName 指定key的取值属性，默认是key</li><li>opt.valueName 指定value的取值属性</li><li>opt.before 是否添加在现有的之前，默认是false</li><li>opt.extend：返回的枚举<a href="#extend%E9%85%8D%E7%BD%AE">extend配置</a></li></ul></li></ul><h3 id="convert" tabindex="-1"><a class="header-anchor" href="#convert" aria-hidden="true">#</a> convert</h3><p>将传入的枚举格式转换为{key, value}的形式</p><ul><li><code>convert(name: string, _enum: Array&lt;Array|Object&gt;, opt?: Object))</code><ul><li>opt.keyName 指定key的取值属性，默认是key</li><li>opt.valueName 指定value的取值属性</li></ul></li></ul><h3 id="extend配置" tabindex="-1"><a class="header-anchor" href="#extend配置" aria-hidden="true">#</a> extend配置</h3><p>扩展枚举项属性的配置</p><ul><li><code>extend: Array&lt;Object&gt;</code><ul><li><code>key</code> 指定扩展的属性名</li><li><code>dir</code> 指定该属性的取值路径</li><li><code>transfer(item: {key: any, value: any})</code> 转换函数，参数未枚举项，返回就是该属性的值</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>同时设置<a href="#dir%E8%A7%84%E5%88%99">dir</a>和transfer，transfer优先</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">transfer</span><span class="token operator">:</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="dir规则" tabindex="-1"><a class="header-anchor" href="#dir规则" aria-hidden="true">#</a> dir规则</h3><p>dir是指定枚举项value的取值方式，规则如下：</p><ul><li>对象属性 <code>A</code>、<code>A.B</code></li><li>数组 <code>[0]</code>、<code>[0][1]</code></li><li>混合 <code>A[0]</code>、<code>[0].A</code>、<code>A[0].B</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 假如枚举项value的结构如下</span>\n<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aring&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;管理员&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>\n            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;业务操作员&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 那么规则解析是：</span>\ndir              value\n<span class="token string">&#39;age&#39;</span>        <span class="token operator">=&gt;</span>  <span class="token number">18</span>\n<span class="token string">&#39;role[0]&#39;</span>    <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;管理员&#39;</span><span class="token punctuation">}</span>\n<span class="token string">&#39;role[1].id&#39;</span> <span class="token operator">=&gt;</span>  <span class="token number">2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>枚举项value如果是基本类型，则规则不生效，value就是当前值</p></div>',45),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);