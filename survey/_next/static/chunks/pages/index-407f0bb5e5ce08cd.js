(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2697)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,s=void 0!==l&&l,h=e.loading,p=e.lazyRoot,j=void 0===p?null:p,E=e.lazyBoundary,k=void 0===E?"200px":E,_=e.className,N=e.quality,R=e.width,C=e.height,P=e.style,L=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,D=(e.onError,e.placeholder),W=void 0===D?"empty":D,B=e.blurDataURL,T=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),F=u.useMemo((function(){var e=b||U||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[U]),H=T,J=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(J=H.layout),delete H.layout);var V=z;if("loader"in H){if(H.loader){var G=H.loader;V=function(e){e.config;var t=v(e,["config"]);return G(t)}}delete H.loader}var X="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var $=x(t)?t.default:t;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(B=B||$.blurDataURL,X=$.src,(!J||"fill"!==J)&&(C=C||$.height,R=R||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}t="string"===typeof t?t:X;var Q=O(R),K=O(C),Y=O(N),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),ne=te[0],re=te[1],ie=o(g.useIntersection({rootRef:j,rootMargin:k,disabled:!Z}),3),oe=ie[0],ae=ie[1],ce=ie[2],le=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:q};0;0;var ge=Object.assign({},P,"raw"===J?{aspectRatio:"".concat(Q," / ").concat(K)}:fe),me="blur"!==W||ne?{}:{filter:"blur(20px)",backgroundSize:L||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===J)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var he=K/Q,pe=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===J?(se.display="block",se.position="relative",de=!0,ue.paddingTop=pe):"intrinsic"===J?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===J&&(se.display="inline-block",se.position="relative",se.width=Q,se.height=K)}else 0;var ye={src:S,srcSet:void 0,sizes:void 0};le&&(ye=A({config:F,src:t,unoptimized:c,layout:J,width:Q,quality:Y,sizes:n,loader:V}));var ve=t;0;var be,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var je=(i(be={},we,ye.srcSet),i(be,Se,ye.sizes),be),xe=u.default.useLayoutEffect,Ae=u.useRef(M),Oe=u.useRef(t);u.useEffect((function(){Ae.current=M}),[M]),xe((function(){Oe.current!==t&&(ce(),Oe.current=t)}),[ce,t]);var ze=y({isLazy:Z,imgAttributes:ye,heightInt:K,widthInt:Q,qualityInt:Y,layout:J,className:_,imgStyle:ge,blurStyle:me,loading:h,config:F,unoptimized:c,placeholder:W,loader:V,srcString:ve,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:oe,isVisible:le},H);return u.default.createElement(u.default.Fragment,null,"raw"===J?u.default.createElement(I,Object.assign({},ze)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(I,Object.assign({},ze))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var l,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),g=n(9246),m=n(8730),h=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=u.widths,f=u.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[g]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(e,t,n,r,i,o){e&&e.src!==S&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,c=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,g=e.srcString,m=e.config,h=e.unoptimized,p=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,j=e.onError,x=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,style:y({},c,l),ref:u.useCallback((function(e){S(e),(null===e||void 0===e?void 0:e.complete)&&E(e,g,0,d,b,w)}),[S,g,o,d,b,w]),onLoad:function(e){E(e.currentTarget,g,0,d,b,w)},onError:function(e){"blur"===d&&w(!0),j&&j(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,A({config:m,src:g,unoptimized:h,layout:o,width:r,quality:i,sizes:t.sizes,loader:p}),"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:c,className:a,loading:f||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],m=i(o.useState(t?t.current:null),2),h=m[0],p=m[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),v=o.useCallback((function(){g(!1)}),[]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&p(t.current)}),[t]),[y,f,v]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},2697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(9008),o=n(5675),a=n.n(o),c=n(7294),l={src:"/bodystamo/survey/_next/static/media/ic_star_active.6591dfab.svg",height:24,width:24},s={src:"/bodystamo/survey/_next/static/media/ic_star_inactive.13807967.svg",height:24,width:24};var u=function(){var e=(0,c.useState)([!1,!1,!1,!1,!1]),t=e[0],n=e[1],o=(0,c.useState)(""),u=o[0],d=o[1],f=(0,c.useState)(void 0),g=f[0],m=f[1],h=(0,c.useState)(void 0),p=h[0],y=h[1],v=(0,c.useRef)(0);v.current=t.reduce((function(e,t){return t?e+1:e}),0);var b=function(e,t){m(void 0),y(void 0),setTimeout((function(){y(t),m(e)}),100)};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"\ubc14\ub514\uc2a4\ud0dc\ubaa8 \ud638\ud761\uce21\uc815 \uae30\ub2a5 \uc124\ubb38\uc870\uc0ac"}),(0,r.jsx)("meta",{name:"description",content:"\ubc14\ub514\uc2a4\ud0dc\ubaa8 \ud638\ud761\uce21\uc815 \uae30\ub2a5 \uc124\ubb38\uc870\uc0ac"})]}),(0,r.jsxs)("div",{className:"m-4",children:[(0,r.jsx)("div",{className:"alert alert-secondary",children:"\ud638\ud761\uce21\uc815 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc124\ubb38\uc870\uc0ac\uc785\ub2c8\ub2e4."}),(0,r.jsxs)("div",{className:"".concat(p&&"highlight"),children:[(0,r.jsx)("div",{className:"error"}),(0,r.jsxs)("h5",{children:["\ub9cc\uc871\ub3c4 ",(0,r.jsx)("span",{className:"text-danger",children:"*"})]}),(0,r.jsx)("div",{className:"disable-drag text-center",children:(0,r.jsx)("div",{children:t.map((function(e,i){return(0,r.jsx)("span",{className:"me-2",onClick:function(e){for(var r=JSON.parse(JSON.stringify(t)),o=0;o<t.length;o++)r[o]=o<=i;n(r),b(void 0)},children:(0,r.jsx)(a(),{src:e?l:s,width:48,height:48,alt:"star"})},i)}))})})]}),(0,r.jsxs)("div",{className:"mt-3",children:[(0,r.jsx)("h5",{children:"\uc758\uacac"}),(0,r.jsx)("textarea",{className:"form-control",rows:5,placeholder:"\uce21\uc815\uc5d0 \ub300\ud55c \uc758\uacac\uc744 \uc790\uc720\ub86d\uac8c \uc801\uc5b4\uc8fc\uc138\uc694.",value:u,onChange:function(e){return d(e.target.value)}}),g&&(0,r.jsx)("div",{className:"text-center text-danger mt-2",children:g}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"btn ".concat(g?"btn-danger":"btn-primary"," w-100 mt-2"),onClick:function(e){if(t.some((function(e){return e})))try{b(void 0),SurveyCallback.postMessage(JSON.stringify({score:v.current,comment:u,version:2}))}catch(n){b("\uc571 \ub0b4\uc5d0\uc11c\ub9cc \uc81c\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")}else b("\ub9cc\uc871\ub3c4\ub97c \uc54c\ub824\uc8fc\uc138\uc694.",!0)},children:"\uc81c\ucd9c\ud558\uae30"})})]})]})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);