if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const a=e=>i(e,n),c={module:{uri:n},exports:u,require:a};s[n]=Promise.all(l.map((e=>c[e]||a(e)))).then((e=>(r(...e),u)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"5a7f20d61929e190b2b1122e5d440f72"},{url:"assets/css/styles.ef829674.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/205.8a8b2972.js",revision:null},{url:"assets/js/293.f9b4a116.js",revision:null},{url:"assets/js/399.e64d5302.js",revision:null},{url:"assets/js/491.b1c8b635.js",revision:null},{url:"assets/js/app.9356c203.js",revision:null},{url:"assets/js/runtime~app.0a5a557b.js",revision:null},{url:"assets/js/v-00cf7e23.824e4c17.js",revision:null},{url:"assets/js/v-040800dc.5a08f27c.js",revision:null},{url:"assets/js/v-0a0e491c.e37dd24f.js",revision:null},{url:"assets/js/v-1c0edac3.417b4fa6.js",revision:null},{url:"assets/js/v-1d14d5cc.d66ace99.js",revision:null},{url:"assets/js/v-2c05b6e0.b9681872.js",revision:null},{url:"assets/js/v-2fe128e7.a801b36e.js",revision:null},{url:"assets/js/v-323bda7e.576011ac.js",revision:null},{url:"assets/js/v-355ee23e.1f31fc3b.js",revision:null},{url:"assets/js/v-3706649a.59a2e6ca.js",revision:null},{url:"assets/js/v-37e1c06f.db79613c.js",revision:null},{url:"assets/js/v-392e58ee.10032a7f.js",revision:null},{url:"assets/js/v-3c4e521e.6a8c6c84.js",revision:null},{url:"assets/js/v-3cd5a4ef.7235fb6b.js",revision:null},{url:"assets/js/v-3dba8814.b5959fb5.js",revision:null},{url:"assets/js/v-411c0c9e.91ceaa1c.js",revision:null},{url:"assets/js/v-41dee210.39ef535e.js",revision:null},{url:"assets/js/v-494b840e.da4d45f5.js",revision:null},{url:"assets/js/v-528b8b6c.37d02170.js",revision:null},{url:"assets/js/v-5bf80046.2683ee86.js",revision:null},{url:"assets/js/v-5f4c684e.bdeb9024.js",revision:null},{url:"assets/js/v-6320961c.71451791.js",revision:null},{url:"assets/js/v-6f2f6a5a.19088c6d.js",revision:null},{url:"assets/js/v-76cb52e8.265192c2.js",revision:null},{url:"assets/js/v-76cd065c.08d823e2.js",revision:null},{url:"assets/js/v-7b48519a.a03aef7f.js",revision:null},{url:"assets/js/v-7b96e3a4.5f177364.js",revision:null},{url:"assets/js/v-85fa9b2a.48df6b3f.js",revision:null},{url:"assets/js/v-884fd4bc.3c09da17.js",revision:null},{url:"assets/js/v-8daa1a0e.0d41f947.js",revision:null},{url:"assets/js/v-a1a49808.216c6fc6.js",revision:null},{url:"assets/js/v-a951be94.99ef91b1.js",revision:null},{url:"assets/js/v-b15becb0.4f083702.js",revision:null},{url:"assets/js/v-c253c956.1f475c06.js",revision:null},{url:"assets/js/v-c5618810.ea9a23d1.js",revision:null},{url:"assets/js/v-d61a9282.bd64d11e.js",revision:null},{url:"assets/js/v-d7fa887a.e034055c.js",revision:null},{url:"assets/js/v-ef8c5e10.a8759183.js",revision:null},{url:"assets/js/v-fb0f0066.529b57ce.js",revision:null},{url:"assets/js/v-fffb8e28.ca8295d6.js",revision:null},{url:"framework.png",revision:"d5bc1ce01d8f58c2d32e4396441e5dcc"},{url:"guide/config.html",revision:"ff8abd56f8986b3a811e05a384cf076e"},{url:"guide/contributing.html",revision:"2169f695db40d2517f556cac53539d91"},{url:"guide/css.html",revision:"417d779d89f9d4c91dd72664a5d25e43"},{url:"guide/directory-structure.html",revision:"53663835fa9cd39d5fc15b4da2f66859"},{url:"guide/env.html",revision:"7d6110a038131ee83269ce2ccba80a39"},{url:"guide/faq.html",revision:"c830402089e5c334d97f10b6ea3ac6e8"},{url:"guide/getting-started.html",revision:"2510697aa6ffd6e242b61fb0aa2f905d"},{url:"guide/image.html",revision:"9e2b05966b833e82968b7666329b6415"},{url:"guide/index.html",revision:"564e2e1a62078185d4e2ae1e952fb7a5"},{url:"guide/mock.html",revision:"504fe4fee73fef74357454fe9038d2f4"},{url:"guide/plugin.html",revision:"72203e311efc5c302457d8e01b4b9d8c"},{url:"guide/public.html",revision:"69a892177ad1d4cd073befb48a648624"},{url:"guide/route.html",revision:"c287743aa5f5bbe347664d8221d9e161"},{url:"guide/runtime-config.html",revision:"1d7cd9c6a4661da4d5cb67cf39d77357"},{url:"guide/template.html",revision:"ea06bed386fbac6299e578048ecd5ea2"},{url:"home.png",revision:"3a3b46b3bb2f0a9a52f439c80bade53a"},{url:"index.html",revision:"0eb950d1586662219b9d2767b9d6a951"},{url:"logo.png",revision:"41e6de8a94a52a5c1d7914b51111a12c"},{url:"mixin.png",revision:"c58d839aa919cee826f75bf5b348fd81"},{url:"pickTemplate.png",revision:"fb8b8e4e86c33eefe04abee6de5a03d9"},{url:"pickTemplateTip.png",revision:"e0c95971ab1e5692e997fe030c18f2a9"},{url:"plugins.png",revision:"f5e112b065621364d8cd663b245dc619"},{url:"reference/api.html",revision:"eaa892e2cb9fc2d39234a82997eefca1"},{url:"reference/api/index.html",revision:"a9f8d89e03437ca5a41c58acca66e6dd"},{url:"reference/cli.html",revision:"c8936f57d536063b156ea8d18b7b2262"},{url:"reference/cli/index.html",revision:"c4c5408e246fe4f5311c12c0bc101c5e"},{url:"reference/config/index.html",revision:"d323f3eb029c37351ac7d1a7f8443359"},{url:"reference/plugin/dev/api.html",revision:"193b525b7ea44359af0e1808def9886f"},{url:"reference/plugin/dev/index.html",revision:"efa11184e54f578e554e499d568f128d"},{url:"reference/plugin/index.html",revision:"06b405bd721e8d58bfdf587db0058c9f"},{url:"reference/plugin/plugins/access.html",revision:"aea09720e1819bfa3caa11c2c58e5303"},{url:"reference/plugin/plugins/editor.html",revision:"5902239ef837a9422f6c8cfc4649bbf4"},{url:"reference/plugin/plugins/enums.html",revision:"51bfc54abd6840e063f827e37ac972a5"},{url:"reference/plugin/plugins/icon.html",revision:"9a98cd820dc0501092d605885130e3a0"},{url:"reference/plugin/plugins/jest.html",revision:"c223c7cdaef8da511dad355375093904"},{url:"reference/plugin/plugins/layout.html",revision:"ec391089c5a33bceb025009eac3d314c"},{url:"reference/plugin/plugins/locale.html",revision:"0d2477bd1c3370db6ee87a1d84f9075c"},{url:"reference/plugin/plugins/model.html",revision:"562a477419d7d7087fc77f9c9f74768d"},{url:"reference/plugin/plugins/pinia.html",revision:"95e59cdbce15e250bc670eb1cbebb82e"},{url:"reference/plugin/plugins/qiankun.html",revision:"e3c8f134049cb8e1242e16d43de0547c"},{url:"reference/plugin/plugins/request.html",revision:"700fd2c939e2ea1659c76f51e80a0a6d"},{url:"reference/plugin/plugins/sass.html",revision:"0643581ae33505140d75e534360d4756"},{url:"reference/plugin/plugins/vuex.html",revision:"4a5cfda94d263beb48b6c53b85d3da05"},{url:"reference/plugin/plugins/watermark.html",revision:"2c0d6eb002d2854b27a0f73f62856496"},{url:"reference/plugin/plugins/windicss.html",revision:"7cb261c337342f387779e8ffe3c7d67a"},{url:"side.png",revision:"a5bf932a270e116563f7e1da8968d493"},{url:"top.png",revision:"b282c6a45571a8a0aa710c044b7e4893"}],{})}));
