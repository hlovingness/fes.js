if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const u=e=>i(e,n),a={module:{uri:n},exports:c,require:u};s[n]=Promise.all(l.map((e=>a[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8a466adf68fe0c2989c3d770b4999439"},{url:"assets/css/styles.6322d7ca.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/205.8a8b2972.js",revision:null},{url:"assets/js/293.8912f64a.js",revision:null},{url:"assets/js/491.000b1708.js",revision:null},{url:"assets/js/519.22262c34.js",revision:null},{url:"assets/js/app.accad1eb.js",revision:null},{url:"assets/js/runtime~app.8bc5b0d2.js",revision:null},{url:"assets/js/v-00cf7e23.8ed31ae7.js",revision:null},{url:"assets/js/v-040800dc.573e8b67.js",revision:null},{url:"assets/js/v-0a0e491c.5d9d9fed.js",revision:null},{url:"assets/js/v-1c0edac3.65dbe06e.js",revision:null},{url:"assets/js/v-1d14d5cc.094da916.js",revision:null},{url:"assets/js/v-2c05b6e0.3d6a2d53.js",revision:null},{url:"assets/js/v-2fe128e7.ee4c15ec.js",revision:null},{url:"assets/js/v-323bda7e.17afbabd.js",revision:null},{url:"assets/js/v-355ee23e.37ae78b8.js",revision:null},{url:"assets/js/v-3706649a.59a2e6ca.js",revision:null},{url:"assets/js/v-37e1c06f.bbc9a315.js",revision:null},{url:"assets/js/v-392e58ee.d22fb831.js",revision:null},{url:"assets/js/v-3c4e521e.aca887cb.js",revision:null},{url:"assets/js/v-3cd5a4ef.35a2cafb.js",revision:null},{url:"assets/js/v-3dba8814.78bea624.js",revision:null},{url:"assets/js/v-411c0c9e.4b141951.js",revision:null},{url:"assets/js/v-41dee210.e57d4e30.js",revision:null},{url:"assets/js/v-494b840e.464a98ff.js",revision:null},{url:"assets/js/v-528b8b6c.2882839c.js",revision:null},{url:"assets/js/v-5bf80046.cea28e77.js",revision:null},{url:"assets/js/v-5f4c684e.88e1fca7.js",revision:null},{url:"assets/js/v-6320961c.bf722e39.js",revision:null},{url:"assets/js/v-6f2f6a5a.c585b7f1.js",revision:null},{url:"assets/js/v-76cb52e8.29c058c1.js",revision:null},{url:"assets/js/v-76cd065c.3cec3ceb.js",revision:null},{url:"assets/js/v-7b48519a.f9c827e5.js",revision:null},{url:"assets/js/v-7b96e3a4.b5f71c2d.js",revision:null},{url:"assets/js/v-85fa9b2a.f7ec1b53.js",revision:null},{url:"assets/js/v-884fd4bc.eb4f433d.js",revision:null},{url:"assets/js/v-8daa1a0e.2eb99b38.js",revision:null},{url:"assets/js/v-a1a49808.4cd0895a.js",revision:null},{url:"assets/js/v-a951be94.27805aa9.js",revision:null},{url:"assets/js/v-b15becb0.bf7b8e49.js",revision:null},{url:"assets/js/v-c253c956.c58eb9ae.js",revision:null},{url:"assets/js/v-c5618810.a89a2605.js",revision:null},{url:"assets/js/v-d61a9282.7ccb6f5a.js",revision:null},{url:"assets/js/v-d7fa887a.708daa02.js",revision:null},{url:"assets/js/v-ef8c5e10.8949400e.js",revision:null},{url:"assets/js/v-fb0f0066.6507e4ba.js",revision:null},{url:"assets/js/v-fffb8e28.f074cea9.js",revision:null},{url:"framework.png",revision:"d5bc1ce01d8f58c2d32e4396441e5dcc"},{url:"guide/config.html",revision:"d4ce041c592d26938c16b9c5619190b8"},{url:"guide/contributing.html",revision:"3e3868fa662e3697b12f99468076cb9d"},{url:"guide/css.html",revision:"3c6eb02f42d8a195ae8539ae37bff5cc"},{url:"guide/directory-structure.html",revision:"cbf08af696cee4ca7c296d09ab582ba1"},{url:"guide/env.html",revision:"526ded7bc343f19066cc8ee6924e5da1"},{url:"guide/faq.html",revision:"451e68eb5c8b5e086f8bb59a6b30cb70"},{url:"guide/getting-started.html",revision:"b193f11eefbf11e57bc8ca81f39e8a86"},{url:"guide/image.html",revision:"367c0c97775736e4550685a8c9082285"},{url:"guide/index.html",revision:"f49dc241077af1a6935bed87616ff47e"},{url:"guide/mock.html",revision:"d884968580a9d847f61c3f9de70acc79"},{url:"guide/plugin.html",revision:"858de2ca94736835e6c3cbe12fe19bbc"},{url:"guide/public.html",revision:"908886d3f647e6ff43a625fa6397d9b7"},{url:"guide/route.html",revision:"a677ed47ebc3a2fca5ca7149c4582785"},{url:"guide/runtime-config.html",revision:"2be7f8ed1ed6b2ab54c46155308d6f42"},{url:"guide/template.html",revision:"604960df72e01f221d23912cab596506"},{url:"home.png",revision:"3a3b46b3bb2f0a9a52f439c80bade53a"},{url:"index.html",revision:"3adbd3811b1142f79e021d722ea8647e"},{url:"logo.png",revision:"41e6de8a94a52a5c1d7914b51111a12c"},{url:"mixin.png",revision:"c58d839aa919cee826f75bf5b348fd81"},{url:"pickTemplate.png",revision:"fb8b8e4e86c33eefe04abee6de5a03d9"},{url:"pickTemplateTip.png",revision:"e0c95971ab1e5692e997fe030c18f2a9"},{url:"plugins.png",revision:"f5e112b065621364d8cd663b245dc619"},{url:"reference/api.html",revision:"2b7540ce4e0687b610b11912d455acfa"},{url:"reference/api/index.html",revision:"bf18456b9d904d8eb3490c263a3f772f"},{url:"reference/cli.html",revision:"7976c21c9926cc770f3547afd83ab9a9"},{url:"reference/cli/index.html",revision:"f72db21c65ece8639adc7b9589ec64f5"},{url:"reference/config/index.html",revision:"c03008543a779310ea6e89cf1d9d6a21"},{url:"reference/plugin/dev/api.html",revision:"813632c8b877636df3d713a0866a034a"},{url:"reference/plugin/dev/index.html",revision:"37352971b7faee726d4217650390603e"},{url:"reference/plugin/index.html",revision:"f3d3cf6014f4ff66f9f0dd5195f392c6"},{url:"reference/plugin/plugins/access.html",revision:"272de2ba350620326d430eccd4df3389"},{url:"reference/plugin/plugins/editor.html",revision:"11c1fef884b1f8ed9ad523ca873017e9"},{url:"reference/plugin/plugins/enums.html",revision:"4579a3c6b610652f6426980143b31aae"},{url:"reference/plugin/plugins/icon.html",revision:"a34403fd93b1564a54e1bff34f03eb00"},{url:"reference/plugin/plugins/jest.html",revision:"a9be55cc0cb8b5edf07e5dd53ca23eec"},{url:"reference/plugin/plugins/layout.html",revision:"130ac6c90e4e7d1fc15a144257526864"},{url:"reference/plugin/plugins/locale.html",revision:"9006d24fb854c324f7a4335f162f3552"},{url:"reference/plugin/plugins/model.html",revision:"7e3b6b3c646779fadf967a7c67640148"},{url:"reference/plugin/plugins/pinia.html",revision:"48bf8f619eb07c619f94aed1a4fc5198"},{url:"reference/plugin/plugins/qiankun.html",revision:"ce96ce6b5cb7852df697cee0c6e6db4c"},{url:"reference/plugin/plugins/request.html",revision:"487e45fe5eb49cd511b20f640ba5ccff"},{url:"reference/plugin/plugins/sass.html",revision:"e83e8a278e1819c5980c0329ab6609bf"},{url:"reference/plugin/plugins/vuex.html",revision:"967e93385cf28e283b34e403d9b2a3b4"},{url:"reference/plugin/plugins/watermark.html",revision:"2759c9c0132418df7058c6f0023476d9"},{url:"reference/plugin/plugins/windicss.html",revision:"c24cc5095f1d59a5ebae10c20d1625ca"},{url:"side.png",revision:"a5bf932a270e116563f7e1da8968d493"},{url:"top.png",revision:"b282c6a45571a8a0aa710c044b7e4893"}],{})}));
