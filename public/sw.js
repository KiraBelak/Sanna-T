if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/146-98ea09fe46358c08.js",revision:"98ea09fe46358c08"},{url:"/_next/static/chunks/2852872c-3e64d4dab59ee9d0.js",revision:"3e64d4dab59ee9d0"},{url:"/_next/static/chunks/426-b4ff1f2c74921e00.js",revision:"b4ff1f2c74921e00"},{url:"/_next/static/chunks/428-4c98f745e0976f6d.js",revision:"4c98f745e0976f6d"},{url:"/_next/static/chunks/498-2334157de650c663.js",revision:"2334157de650c663"},{url:"/_next/static/chunks/613-4d265d7e0e28e305.js",revision:"4d265d7e0e28e305"},{url:"/_next/static/chunks/664-fe1f0ac1dd157bd4.js",revision:"fe1f0ac1dd157bd4"},{url:"/_next/static/chunks/669-41050500460e8292.js",revision:"41050500460e8292"},{url:"/_next/static/chunks/675-a68a687f75217cc4.js",revision:"a68a687f75217cc4"},{url:"/_next/static/chunks/75fc9c18-e61c2e0d9c9a0957.js",revision:"e61c2e0d9c9a0957"},{url:"/_next/static/chunks/825-13570c34f4444b94.js",revision:"13570c34f4444b94"},{url:"/_next/static/chunks/839-f80cfc08fb274506.js",revision:"f80cfc08fb274506"},{url:"/_next/static/chunks/842-fd4fc859b6414e59.js",revision:"fd4fc859b6414e59"},{url:"/_next/static/chunks/917-557b21248d8e500d.js",revision:"557b21248d8e500d"},{url:"/_next/static/chunks/947-8a1b1bd42275d848.js",revision:"8a1b1bd42275d848"},{url:"/_next/static/chunks/967-6b64801d8152a8fd.js",revision:"6b64801d8152a8fd"},{url:"/_next/static/chunks/c16184b3-7198470ed508ae47.js",revision:"7198470ed508ae47"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-adbef0b70b442f4f.js",revision:"adbef0b70b442f4f"},{url:"/_next/static/chunks/pages/Camarita-fa7714202d48ba64.js",revision:"fa7714202d48ba64"},{url:"/_next/static/chunks/pages/_app-9f9d361aab0332ba.js",revision:"9f9d361aab0332ba"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/admin/dashboard-9b7ef90c8844dd4b.js",revision:"9b7ef90c8844dd4b"},{url:"/_next/static/chunks/pages/admin/users-d23bed11a445a06a.js",revision:"d23bed11a445a06a"},{url:"/_next/static/chunks/pages/admin/users/%5Bid%5D-fc421dfe92d76a47.js",revision:"fc421dfe92d76a47"},{url:"/_next/static/chunks/pages/admin/users/add-100d68132b0e783d.js",revision:"100d68132b0e783d"},{url:"/_next/static/chunks/pages/auth/error-21e29550b178e606.js",revision:"21e29550b178e606"},{url:"/_next/static/chunks/pages/auth/signin-2bba7f6eff472e54.js",revision:"2bba7f6eff472e54"},{url:"/_next/static/chunks/pages/auth/verify-request-e5372c4c8079178c.js",revision:"e5372c4c8079178c"},{url:"/_next/static/chunks/pages/chaform-01be7c57a2ba912e.js",revision:"01be7c57a2ba912e"},{url:"/_next/static/chunks/pages/contact-7db88ba95d801f1e.js",revision:"7db88ba95d801f1e"},{url:"/_next/static/chunks/pages/demo-0b6854d0f11ec25a.js",revision:"0b6854d0f11ec25a"},{url:"/_next/static/chunks/pages/index-bc05147817ce8181.js",revision:"bc05147817ce8181"},{url:"/_next/static/chunks/pages/ios-0d746e0e05000a33.js",revision:"0d746e0e05000a33"},{url:"/_next/static/chunks/pages/myobjetives-a68af8d1a30c9fef.js",revision:"a68af8d1a30c9fef"},{url:"/_next/static/chunks/pages/owners-a164f0ab438ca6e0.js",revision:"a164f0ab438ca6e0"},{url:"/_next/static/chunks/pages/profiledata-0e79de59edf89ac2.js",revision:"0e79de59edf89ac2"},{url:"/_next/static/chunks/pages/reto-5e24cf333f3d9cd0.js",revision:"5e24cf333f3d9cd0"},{url:"/_next/static/chunks/pages/rewards-f63747a1d1f2ae5a.js",revision:"f63747a1d1f2ae5a"},{url:"/_next/static/chunks/pages/user/MyProfile-a37d4fac4e4b75fb.js",revision:"a37d4fac4e4b75fb"},{url:"/_next/static/chunks/pages/user/info-8977e3af5df53d6f.js",revision:"8977e3af5df53d6f"},{url:"/_next/static/chunks/pages/user/profile-a3f3a5bd42a33065.js",revision:"a3f3a5bd42a33065"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5761f3a204ffdf4a.js",revision:"5761f3a204ffdf4a"},{url:"/_next/static/css/1f42e261f0fdb53d.css",revision:"1f42e261f0fdb53d"},{url:"/_next/static/css/2c73632f60809884.css",revision:"2c73632f60809884"},{url:"/_next/static/css/33c12fe5684dc365.css",revision:"33c12fe5684dc365"},{url:"/_next/static/css/5674832e1468d24d.css",revision:"5674832e1468d24d"},{url:"/_next/static/css/89def3a8b567af8b.css",revision:"89def3a8b567af8b"},{url:"/_next/static/htr9_qnRT-ZNlbgGsxOH2/_buildManifest.js",revision:"f3b4808fffdab83cbd4f8396b1a53692"},{url:"/_next/static/htr9_qnRT-ZNlbgGsxOH2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/material-icons-outlined.78a93b20.woff",revision:"78a93b20"},{url:"/_next/static/media/material-icons-outlined.f86cb7b0.woff2",revision:"f86cb7b0"},{url:"/_next/static/media/material-icons-round.92dc7ca2.woff",revision:"92dc7ca2"},{url:"/_next/static/media/material-icons-round.b10ec9db.woff2",revision:"b10ec9db"},{url:"/_next/static/media/material-icons-sharp.3885863e.woff2",revision:"3885863e"},{url:"/_next/static/media/material-icons-sharp.a71cb2bf.woff",revision:"a71cb2bf"},{url:"/_next/static/media/material-icons-two-tone.588d6313.woff",revision:"588d6313"},{url:"/_next/static/media/material-icons-two-tone.675bd578.woff2",revision:"675bd578"},{url:"/_next/static/media/material-icons.4ad034d2.woff",revision:"4ad034d2"},{url:"/_next/static/media/material-icons.59322316.woff2",revision:"59322316"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/badges/bronce.png",revision:"fec417c5249926e533450aa185e1318e"},{url:"/creadores/kaleb.jpg",revision:"19f395eba8143308c64c7446fdf68c19"},{url:"/favicon.ico",revision:"325a2d2996760ea7fb41120c9ee71e63"},{url:"/icon-192x192.png",revision:"08fb4ef84956d16afea32a04eb13e28b"},{url:"/icon-256x256.png",revision:"dc7051eb22824f965fedee5513fb562b"},{url:"/icon-384x384.png",revision:"1f64c50c00d510b52a08b98e8de938de"},{url:"/icon-512x512.png",revision:"b9d30cc90e26f107586fa254ffa9be1d"},{url:"/images/ios/1.jpg",revision:"92eedc268ea02df1b574a9acc9fade92"},{url:"/images/ios/2.jpg",revision:"753fb23f62fcf8f04a4f965cdfceb133"},{url:"/images/ios/3.jpg",revision:"504752dca21a683cfc629219f3778c5c"},{url:"/images/ios/add.png",revision:"3773c2aaeb6f2b29f2fd2f55694c13ab"},{url:"/images/ios/inicio.png",revision:"69b0ad64698db9992e906bb6ac6a5fc5"},{url:"/images/ios/safari-logo.png",revision:"8e6487e0281f896af387f0d4849d0b2f"},{url:"/images/ios/share.png",revision:"f26ab7cc787f44818b4fc32550446bb8"},{url:"/insignias/Insignia_01.png",revision:"b008e5262614ac590debd629da2bc180"},{url:"/insignias/Insignia_02.png",revision:"cd60b1f7bb173a24a56921db3fe01e9f"},{url:"/insignias/Insignia_03.png",revision:"6a8aa7fa371428fb7fec0b0debe5e111"},{url:"/insignias/Vector1.png",revision:"22bad73390c27036fc81c992eb59c82b"},{url:"/insignias/Vector2.png",revision:"33753f05c2fd89cab0b82043c0c7df2c"},{url:"/insignias/Vector3.png",revision:"a81758545173aefb7d43f5eb3999d04e"},{url:"/logo.png",revision:"17cd3c8b5174dbf052295778df6c8016"},{url:"/manifest.json",revision:"ce65d7607f69b7f0927f106a2b63997d"},{url:"/og.jpeg",revision:"7288b8bfd39d31a0766873f688fc01a1"},{url:"/pdf/saludDigna.pdf",revision:"985103e8843a23707971d56358cfdbe4"},{url:"/retos/r1.png",revision:"4ae48b6ed0b785204408eacfb417aa4d"},{url:"/retos/r2.png",revision:"917efd3ebcbbbf2f6791cc112a3b02f9"},{url:"/service-worker.js",revision:"33cf8302729f2d89017ae82442396e61"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
