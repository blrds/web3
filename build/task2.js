/*! For license information please see task2.js.LICENSE.txt */
(()=>{var e={"./node_modules/axios/index.js":(e,t,o)=>{e.exports=o("./node_modules/axios/lib/axios.js")},"./node_modules/axios/lib/adapters/xhr.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/core/settle.js"),n=o("./node_modules/axios/lib/helpers/cookies.js"),i=o("./node_modules/axios/lib/helpers/buildURL.js"),a=o("./node_modules/axios/lib/core/buildFullPath.js"),u=o("./node_modules/axios/lib/helpers/parseHeaders.js"),l=o("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),c=o("./node_modules/axios/lib/core/createError.js"),d=o("./node_modules/axios/lib/defaults/transitional.js"),f=o("./node_modules/axios/lib/cancel/Cancel.js");e.exports=function(e){return new Promise((function(t,o){var p,h=e.data,m=e.headers,b=e.responseType;function x(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}s.isFormData(h)&&delete m["Content-Type"];var j=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(v+":"+g)}var y=a(e.baseURL,e.url);function _(){if(j){var s="getAllResponseHeaders"in j?u(j.getAllResponseHeaders()):null,n={data:b&&"text"!==b&&"json"!==b?j.response:j.responseText,status:j.status,statusText:j.statusText,headers:s,config:e,request:j};r((function(e){t(e),x()}),(function(e){o(e),x()}),n),j=null}}if(j.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),j.timeout=e.timeout,"onloadend"in j?j.onloadend=_:j.onreadystatechange=function(){j&&4===j.readyState&&(0!==j.status||j.responseURL&&0===j.responseURL.indexOf("file:"))&&setTimeout(_)},j.onabort=function(){j&&(o(c("Request aborted",e,"ECONNABORTED",j)),j=null)},j.onerror=function(){o(c("Network Error",e,null,j)),j=null},j.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",s=e.transitional||d;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(c(t,e,s.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",j)),j=null},s.isStandardBrowserEnv()){var w=(e.withCredentials||l(y))&&e.xsrfCookieName?n.read(e.xsrfCookieName):void 0;w&&(m[e.xsrfHeaderName]=w)}"setRequestHeader"in j&&s.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:j.setRequestHeader(t,e)})),s.isUndefined(e.withCredentials)||(j.withCredentials=!!e.withCredentials),b&&"json"!==b&&(j.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&j.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&j.upload&&j.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){j&&(o(!e||e&&e.type?new f("canceled"):e),j.abort(),j=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),j.send(h)}))}},"./node_modules/axios/lib/axios.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/helpers/bind.js"),n=o("./node_modules/axios/lib/core/Axios.js"),i=o("./node_modules/axios/lib/core/mergeConfig.js"),a=function e(t){var o=new n(t),a=r(n.prototype.request,o);return s.extend(a,n.prototype,o),s.extend(a,o),a.create=function(o){return e(i(t,o))},a}(o("./node_modules/axios/lib/defaults/index.js"));a.Axios=n,a.Cancel=o("./node_modules/axios/lib/cancel/Cancel.js"),a.CancelToken=o("./node_modules/axios/lib/cancel/CancelToken.js"),a.isCancel=o("./node_modules/axios/lib/cancel/isCancel.js"),a.VERSION=o("./node_modules/axios/lib/env/data.js").version,a.all=function(e){return Promise.all(e)},a.spread=o("./node_modules/axios/lib/helpers/spread.js"),a.isAxiosError=o("./node_modules/axios/lib/helpers/isAxiosError.js"),e.exports=a,e.exports.default=a},"./node_modules/axios/lib/cancel/Cancel.js":e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},"./node_modules/axios/lib/cancel/CancelToken.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/cancel/Cancel.js");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var o=this;this.promise.then((function(e){if(o._listeners){var t,s=o._listeners.length;for(t=0;t<s;t++)o._listeners[t](e);o._listeners=null}})),this.promise.then=function(e){var t,s=new Promise((function(e){o.subscribe(e),t=e})).then(e);return s.cancel=function(){o.unsubscribe(t)},s},e((function(e){o.reason||(o.reason=new s(e),t(o.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},"./node_modules/axios/lib/cancel/isCancel.js":e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"./node_modules/axios/lib/core/Axios.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/helpers/buildURL.js"),n=o("./node_modules/axios/lib/core/InterceptorManager.js"),i=o("./node_modules/axios/lib/core/dispatchRequest.js"),a=o("./node_modules/axios/lib/core/mergeConfig.js"),u=o("./node_modules/axios/lib/helpers/validator.js"),l=u.validators;function c(e){this.defaults=e,this.interceptors={request:new n,response:new n}}c.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var o=t.transitional;void 0!==o&&u.assertOptions(o,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var s=[],r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));var n,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!r){var d=[i,void 0];for(Array.prototype.unshift.apply(d,s),d=d.concat(c),n=Promise.resolve(t);d.length;)n=n.then(d.shift(),d.shift());return n}for(var f=t;s.length;){var p=s.shift(),h=s.shift();try{f=p(f)}catch(e){h(e);break}}try{n=i(f)}catch(e){return Promise.reject(e)}for(;c.length;)n=n.then(c.shift(),c.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},s.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,o){return this.request(a(o||{},{method:e,url:t,data:(o||{}).data}))}})),s.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,o,s){return this.request(a(s||{},{method:e,url:t,data:o}))}})),e.exports=c},"./node_modules/axios/lib/core/InterceptorManager.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");function r(){this.handlers=[]}r.prototype.use=function(e,t,o){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!o&&o.synchronous,runWhen:o?o.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){s.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},"./node_modules/axios/lib/core/buildFullPath.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),r=o("./node_modules/axios/lib/helpers/combineURLs.js");e.exports=function(e,t){return e&&!s(t)?r(e,t):t}},"./node_modules/axios/lib/core/createError.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/core/enhanceError.js");e.exports=function(e,t,o,r,n){var i=new Error(e);return s(i,t,o,r,n)}},"./node_modules/axios/lib/core/dispatchRequest.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/core/transformData.js"),n=o("./node_modules/axios/lib/cancel/isCancel.js"),i=o("./node_modules/axios/lib/defaults/index.js"),a=o("./node_modules/axios/lib/cancel/Cancel.js");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=s.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),s.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return n(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"./node_modules/axios/lib/core/enhanceError.js":e=>{"use strict";e.exports=function(e,t,o,s,r){return e.config=t,o&&(e.code=o),e.request=s,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},"./node_modules/axios/lib/core/mergeConfig.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t){t=t||{};var o={};function r(e,t){return s.isPlainObject(e)&&s.isPlainObject(t)?s.merge(e,t):s.isPlainObject(t)?s.merge({},t):s.isArray(t)?t.slice():t}function n(o){return s.isUndefined(t[o])?s.isUndefined(e[o])?void 0:r(void 0,e[o]):r(e[o],t[o])}function i(e){if(!s.isUndefined(t[e]))return r(void 0,t[e])}function a(o){return s.isUndefined(t[o])?s.isUndefined(e[o])?void 0:r(void 0,e[o]):r(void 0,t[o])}function u(o){return o in t?r(e[o],t[o]):o in e?r(void 0,e[o]):void 0}var l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return s.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||n,r=t(e);s.isUndefined(r)&&t!==u||(o[e]=r)})),o}},"./node_modules/axios/lib/core/settle.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/core/createError.js");e.exports=function(e,t,o){var r=o.config.validateStatus;o.status&&r&&!r(o.status)?t(s("Request failed with status code "+o.status,o.config,null,o.request,o)):e(o)}},"./node_modules/axios/lib/core/transformData.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/defaults/index.js");e.exports=function(e,t,o){var n=this||r;return s.forEach(o,(function(o){e=o.call(n,e,t)})),e}},"./node_modules/axios/lib/defaults/index.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),n=o("./node_modules/axios/lib/core/enhanceError.js"),i=o("./node_modules/axios/lib/defaults/transitional.js"),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,c={transitional:i,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(l=o("./node_modules/axios/lib/adapters/xhr.js")),l),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,o){if(s.isString(e))try{return(0,JSON.parse)(e),s.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,o=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,i=!o&&"json"===this.responseType;if(i||r&&s.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw n(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};s.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),s.forEach(["post","put","patch"],(function(e){c.headers[e]=s.merge(a)})),e.exports=c},"./node_modules/axios/lib/defaults/transitional.js":e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},"./node_modules/axios/lib/env/data.js":e=>{e.exports={version:"0.26.1"}},"./node_modules/axios/lib/helpers/bind.js":e=>{"use strict";e.exports=function(e,t){return function(){for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];return e.apply(t,o)}}},"./node_modules/axios/lib/helpers/buildURL.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,o){if(!t)return e;var n;if(o)n=o(t);else if(s.isURLSearchParams(t))n=t.toString();else{var i=[];s.forEach(t,(function(e,t){null!=e&&(s.isArray(e)?t+="[]":e=[e],s.forEach(e,(function(e){s.isDate(e)?e=e.toISOString():s.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))})))})),n=i.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}},"./node_modules/axios/lib/helpers/combineURLs.js":e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"./node_modules/axios/lib/helpers/cookies.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");e.exports=s.isStandardBrowserEnv()?{write:function(e,t,o,r,n,i){var a=[];a.push(e+"="+encodeURIComponent(t)),s.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),s.isString(r)&&a.push("path="+r),s.isString(n)&&a.push("domain="+n),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"./node_modules/axios/lib/helpers/isAbsoluteURL.js":e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},"./node_modules/axios/lib/helpers/isAxiosError.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");e.exports=function(e){return s.isObject(e)&&!0===e.isAxiosError}},"./node_modules/axios/lib/helpers/isURLSameOrigin.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");e.exports=s.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function r(e){var s=e;return t&&(o.setAttribute("href",s),s=o.href),o.setAttribute("href",s),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return e=r(window.location.href),function(t){var o=s.isString(t)?r(t):t;return o.protocol===e.protocol&&o.host===e.host}}():function(){return!0}},"./node_modules/axios/lib/helpers/normalizeHeaderName.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t){s.forEach(e,(function(o,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=o,delete e[s])}))}},"./node_modules/axios/lib/helpers/parseHeaders.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/utils.js"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,o,n,i={};return e?(s.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=s.trim(e.substr(0,n)).toLowerCase(),o=s.trim(e.substr(n+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([o]):i[t]?i[t]+", "+o:o}})),i):i}},"./node_modules/axios/lib/helpers/spread.js":e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"./node_modules/axios/lib/helpers/validator.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/env/data.js").version,r={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){r[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}}));var n={};r.transitional=function(e,t,o){function r(e,t){return"[Axios v"+s+"] Transitional option '"+e+"'"+t+(o?". "+o:"")}return function(o,s,i){if(!1===e)throw new Error(r(s," has been removed"+(t?" in "+t:"")));return t&&!n[s]&&(n[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(o,s,i)}},e.exports={assertOptions:function(e,t,o){if("object"!=typeof e)throw new TypeError("options must be an object");for(var s=Object.keys(e),r=s.length;r-- >0;){var n=s[r],i=t[n];if(i){var a=e[n],u=void 0===a||i(a,n,e);if(!0!==u)throw new TypeError("option "+n+" must be "+u)}else if(!0!==o)throw Error("Unknown option "+n)}},validators:r}},"./node_modules/axios/lib/utils.js":(e,t,o)=>{"use strict";var s=o("./node_modules/axios/lib/helpers/bind.js"),r=Object.prototype.toString;function n(e){return Array.isArray(e)}function i(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===r.call(e)}function u(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===r.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var o=0,s=e.length;o<s;o++)t.call(null,e[o],o,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:n,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===r.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:l,isUndefined:i,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===r.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function o(o,s){l(t[s])&&l(o)?t[s]=e(t[s],o):l(o)?t[s]=e({},o):n(o)?t[s]=o.slice():t[s]=o}for(var s=0,r=arguments.length;s<r;s++)d(arguments[s],o);return t},extend:function(e,t,o){return d(t,(function(t,r){e[r]=o&&"function"==typeof t?s(t,o):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}(()=>{const e=o("./node_modules/axios/index.js").default,t="https://api.hh.ru/vacancies";document.querySelector("#search").addEventListener("click",(o=>{const s=document.querySelector("#vac-search").value;(null==s?e.get(t):e.get(t,{params:{text:s}})).then((e=>{var t=[];e.data.items.forEach((e=>{t.push(`${e.employer.name} - ${e.name}, ЗП: ${null!=e.salary?(null==e.salary.from?`до ${e.salary.to}`:`от ${e.salary.from}`)+" "+e.salary.currency:"Не указана"}`)})),document.querySelector("#rest-result").textContent=t.join("\n")})).catch((e=>{alert(e.message)}))}))})()})();
//# sourceMappingURL=task2.js.map