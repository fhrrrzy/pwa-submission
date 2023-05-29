(()=>{"use strict";var e={977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},552:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},253:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}},35:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}(()=>{s(552);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>{return e||(s=t.precache,[t.prefix,s,t.suffix].filter((e=>e&&e.length>0)).join("-"));var s};function n(e,t){const s=t();return e.waitUntil(s),s}function a(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:r}=t;if(!r)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(r,location.href),a=new URL(r,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:a.href}}s(977);class i{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class c{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let o;s(35);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>{return e||(t=h.runtime,[h.prefix,t,h.suffix].filter((e=>e&&e.length>0)).join("-"));var t};class u extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class f{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const p=new Set;function g(e){return"string"==typeof e?new Request(e):e}s(873);class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=g(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:r,matchOptions:n}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:r});s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:r,matchOptions:n,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,t){const s=g(e);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(s,"write");if(!t)throw new u("cache-put-with-no-response",{url:(n=r.url,new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var n;const a=await this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),l=h?await async function(e,t,s,r){const n=d(t.url,s);if(t.url===n)return e.match(t,r);const a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(n===d(t.url,s))return e.match(t,r)}(o,r.clone(),["__WB_REVISION__"],c):null;try{await o.put(r,h?a.clone():a)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=g(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[s]=r}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),r=r=>{const n=Object.assign(Object.assign({},r),{state:s});return t[e](n)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class w{constructor(e={}){this.cacheName=l(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,n=new y(this,{event:t,request:s,params:r}),a=this._getResponse(n,s,t);return[a,this._awaitComplete(a,n,s,t)]}async _getResponse(e,t,s){let r;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new u("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:n,event:s,request:t}),r)break;if(!r)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))r=await n({event:s,request:t,response:r});return r}async _awaitComplete(e,t,s,r){let n,a;try{n=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:n,error:a}),t.destroy(),a)throw a}}class m extends w{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let r;const n=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=n.integrity,a=t.integrity,i=!a||a===e;r=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?a||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,r.clone()))}return r}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const r=await s.fetch(t);if(!await s.cachePut(t,r.clone()))throw new e("bad-precaching-response",{url:t.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,r]of this.plugins.entries())r!==m.copyRedirectedCacheableResponsesPlugin&&(r===m.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let r=null;if(t.url&&(r=new URL(t.url).origin),r!==self.location.origin)throw new e("cross-origin-copy-response",{origin:r});const n=t.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(a):a,c=function(){if(void 0===o){const e=new Response("");if("body"in e)try{new Response(e.body),o=!0}catch(e){o=!1}o=!1}return o}()?n.body:await n.blob();return new Response(c,i)}(t):t};class _{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:r(e),plugins:[...t,new c({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const r of t){"string"==typeof r?s.push(r):r&&void 0===r.revision&&s.push(r.url);const{cacheKey:t,url:n}=a(r),i="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:t});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==r.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(t,r.integrity)}if(this._urlsToCacheKeys.set(n,t),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return n(e,(async()=>{const t=new i;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:r,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t;return{updatedURLs:s,notUpdatedURLs:r}}))}activate(e){return n(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),r=[];for(const n of t)s.has(n.url)||(await e.delete(n),r.push(n.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let v;const R=()=>(v||(v=new _),v);s(253);class C extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}s(80);const b=e=>e&&"object"==typeof e?e:{handle:e};class U{constructor(e,t,s="GET"){this.handler=b(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=b(e)}}class q extends U{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class L{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const r=s.origin===location.origin,{params:n,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:s});let i=a&&a.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=a&&a.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async r=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw r}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:r}){const n=this._routes.get(s.method)||[];for(const a of n){let n;const i=a.match({url:e,sameOrigin:t,request:s,event:r});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new C("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new C("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let k;function x(e,t,s){let r;if("string"==typeof e){const n=new URL(e,location.href);r=new U((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)r=new q(e,t,s);else if("function"==typeof e)r=new U(e,t,s);else{if(!(e instanceof U))throw new C("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return(k||(k=new L,k.addFetchListener(),k.addCacheListener()),k).registerRoute(r),r}class K extends U{constructor(e,t){super((({request:s})=>{const r=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:n}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=r.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}const T={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};var P;P=[{'revision':null,'url':'196.9a8934e4709af7576723.bundle.js'},{'revision':null,'url':'5d982326781d6f8ea98b.jpg'},{'revision':null,'url':'app.9ecdebc1dca829adb162.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app.9ecdebc1dca829adb162.bundle.js.LICENSE.txt'},{'revision':'071e8a8bc49021a69077036bd1ca826a','url':'app.webmanifest'},{'revision':'df20aa80fff5056eddd55b483b0ca515','url':'favicon.png'},{'revision':'76f9cad1fd18c73f085300e355512c0b','url':'icons/icon-144x144.png'},{'revision':'47e9a5b10ba51e4f7a093d7092e642b7','url':'icons/icon-192x192.png'},{'revision':'c4675679aa0e3a972e1af9dee74ba4d8','url':'icons/icon-512x512.png'},{'revision':'df20aa80fff5056eddd55b483b0ca515','url':'icons/icon-72x72.png'},{'revision':'82c551d81f7a155a5252bc91eccc02c6','url':'icons/icon-96x96.png'},{'revision':'228e4ee9247e1cceb504ad2281f14458','url':'images/404.svg'},{'revision':'4ea98fe648a0b853ab379c928b5fd0bf','url':'images/hero-image_4.jpg'},{'revision':'17abf7ca9fbb200b04dada934997519f','url':'images/mouse-down.svg'},{'revision':'1355a062434b0a5cb477a9c95d372bdd','url':'index.html'}],R().precache(P),function(e){const t=R();x(new K(t,undefined))}(),self.addEventListener("install",(function(){console.log("Service Worker: Installed"),self.skipWaiting()})),self.addEventListener("activate",(function(e){console.log("Service Worker: Activated"),e.waitUntil(self.clients.claim())})),x((function(e){return"https://restaurant-api.dicoding.dev"===e.url.origin}),new class extends w{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(T)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let r,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(e){e instanceof Error&&(r=e)}if(!n)throw new u("no-response",{url:e.url,error:r});return n}}),self.addEventListener("push",(function(){console.log("Service Worker: Pushed")}))})()})();
//# sourceMappingURL=sw.bundle.js.map