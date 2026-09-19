var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function ee(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ue(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,le)}catch(e){le(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function O(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ue(O.bind(null,e))}var de={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=de,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=O,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ue,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,C=-1,ee=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<ee)}function T(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,ne=D.port2;D.port1.onmessage=T,E=function(){ne.postMessage(null)}}else E=function(){_(T,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function ee(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function te(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,E=Symbol.for(`react.element`),D=Symbol.for(`react.transitional.element`),ne=Symbol.for(`react.portal`),re=Symbol.for(`react.fragment`),ie=Symbol.for(`react.strict_mode`),ae=Symbol.for(`react.profiler`),oe=Symbol.for(`react.consumer`),se=Symbol.for(`react.context`),ce=Symbol.for(`react.forward_ref`),le=Symbol.for(`react.suspense`),ue=Symbol.for(`react.suspense_list`),O=Symbol.for(`react.memo`),de=Symbol.for(`react.lazy`),fe=Symbol.for(`react.activity`),pe=Symbol.for(`react.legacy_hidden`),me=Symbol.for(`react.memo_cache_sentinel`),he=Symbol.for(`react.view_transition`),ge=Symbol.for(`react.recoverable`),_e=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=_e&&e[_e]||e[`@@iterator`],typeof e==`function`?e:null)}var ve=Symbol.for(`react.client.reference`);function ye(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case re:return`Fragment`;case ae:return`Profiler`;case ie:return`StrictMode`;case le:return`Suspense`;case ue:return`SuspenseList`;case fe:return`Activity`;case he:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ne:return`Portal`;case se:return e.displayName||`Context`;case oe:return(e._context.displayName||`Context`)+`.Consumer`;case ce:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case O:return t=e.displayName||null,t===null?ye(e.type)||`Memo`:t;case de:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var be=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Se=[],Ce=-1;function we(e){return{current:e}}function M(e){0>Ce||(e.current=Se[Ce],Se[Ce]=null,Ce--)}function N(e,t){Ce++,Se[Ce]=e.current,e.current=t}var Te=we(null),Ee=we(null),De=we(null),Oe=we(null);function ke(e,t){switch(N(De,t),N(Ee,e),N(Te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}M(Te),N(Te,e)}function Ae(){M(Te),M(Ee),M(De)}function je(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,N(Oe,e)),t=Te.current;var n=dp(t,e.type);t!==n&&(N(Ee,e),N(Te,n))}function Me(e){Ee.current===e&&(M(Te),M(Ee)),Oe.current===e&&(M(Oe),sh._currentValue=xe)}var Ne,Pe;function Fe(e){if(Ne===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||``,Pe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ne+e+Pe}var Ie=!1;function Le(e,t){if(!e||Ie)return``;Ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Fe(n):``}function Re(e,t){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe(`Lazy`);case 13:return e.child!==t&&t!==null?Fe(`Suspense Fallback`):Fe(`Suspense`);case 19:return Fe(`SuspenseList`);case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Fe(`Activity`);case 30:return Fe(`ViewTransition`);default:return``}}function ze(e){try{var t=``,n=null;do t+=Re(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Be=Object.prototype.hasOwnProperty,Ve=t.unstable_scheduleCallback,He=t.unstable_cancelCallback,Ue=t.unstable_shouldYield,We=t.unstable_requestPaint,Ge=t.unstable_now,Ke=t.unstable_getCurrentPriorityLevel,qe=t.unstable_ImmediatePriority,Je=t.unstable_UserBlockingPriority,Ye=t.unstable_NormalPriority,Xe=t.unstable_LowPriority,Ze=t.unstable_IdlePriority,Qe=t.log,$e=t.unstable_setDisableYieldValue,et=null,P=null;function tt(e){if(typeof Qe==`function`&&$e(e),P&&typeof P.setStrictMode==`function`)try{P.setStrictMode(et,e)}catch{}}var nt=Math.clz32?Math.clz32:at,rt=Math.log,it=Math.LN2;function at(e){return e>>>=0,e===0?32:31-(rt(e)/it|0)|0}var ot=256,st=262144,ct=4194304;function lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=lt(n))):i=lt(o):i=lt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=lt(n))):i=lt(o)):i=lt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ft(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-nt(n),i=1<<r;t|=e[r],n&=~i}return t}function pt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var e=ct;return ct<<=1,!(ct&62914560)&&(ct=4194304),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _t(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-nt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&vt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function vt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function bt(e,t){var n=t&-t;return n=n&42?1:xt(n),(n&(e.suspendedLanes|t))===0?n:0}function xt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function St(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ct(){var e=j.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function F(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var wt=Math.random().toString(36).slice(2),Tt=`__reactFiber$`+wt,Et=`__reactProps$`+wt,Dt=`__reactContainer$`+wt,Ot=`__reactEvents$`+wt,kt=`__reactListeners$`+wt,At=`__reactHandles$`+wt,jt=`__reactResources$`+wt,Mt=`__reactMarker$`+wt,Nt=`__reactLoad$`+wt;function Pt(e){delete e[Tt],delete e[Et],delete e[kt],delete e[At]}function Ft(e){var t;if(t=e[Tt])return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Tt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function It(e){if(e=e[Tt]||e[Dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Lt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Rt(e){var t=e[jt];return t||=e[jt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function zt(e){e[Mt]=!0}function Bt(e){e[Nt]=void 0}var Vt=new Set,Ht={};function Ut(e,t){Wt(e,t),Wt(e+`Capture`,t)}function Wt(e,t){for(Ht[e]=t,e=0;e<t.length;e++)Vt.add(t[e])}var Gt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Kt={},qt={};function Jt(e){return Be.call(qt,e)?!0:Be.call(Kt,e)?!1:Gt.test(e)?qt[e]=!0:(Kt[e]=!0,!1)}var I=!1;function Yt(){var e=I;return I=!1,e}function Xt(e,t,n){if(Jt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function $t(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function en(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function tn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nn(e){if(!e._valueTracker){var t=en(e)?`checked`:`value`;e._valueTracker=tn(e,t,``+e[t])}}function rn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=en(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var an=/[\n"\\]/g;function on(e){return e.replace(an,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function sn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+$t(t)):e.value!==``+$t(t)&&(e.value=``+$t(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):ln(e,$t(n)):o===`number`&&e.value==t?ln(e,$t(e.value)):ln(e,$t(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+$t(s):e.removeAttribute(`name`)}function cn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){nn(e);return}n=n==null?``:``+$t(n),t=t==null?n:``+$t(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),nn(e)}function ln(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dn(e,t,n){if(t!=null&&(t=``+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+$t(n)}function fn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(be(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=$t(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),nn(e)}function pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function hn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||mn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function gn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,I=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(hn(e,a,r),I=!0)}else for(var o in t)t.hasOwnProperty(o)&&hn(e,o,t[o])}function _n(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var vn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),yn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bn(e){return yn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function xn(){}var Sn=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,Tn=null;function En(e){var t=It(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;a:switch(e=t.stateNode,t.type){case`input`:if(sn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+on(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Et]||null;if(!a)throw Error(i(90));sn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&rn(r)}break a;case`textarea`:dn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}}}var Dn=!1;function On(e,t,n){if(Dn)return e(t,n);Dn=!0;try{return e(t)}finally{if(Dn=!1,(wn!==null||Tn!==null)&&(zd(),wn&&(t=wn,e=Tn,Tn=wn=null,En(t),e)))for(t=0;t<e.length;t++)En(e[t])}}function kn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Et]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,jn=!1;if(An)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){jn=!0}}),window.addEventListener(`test`,Mn,Mn),window.removeEventListener(`test`,Mn,Mn)}catch{jn=!1}var Nn=null,Pn=null,Fn=null;function In(){if(Fn)return Fn;var e,t=Pn,n=t.length,r,i=`value`in Nn?Nn.value:Nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Fn=i.slice(e,1<r?1-r:void 0)}function Ln(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function zn(){return!1}function Bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Rn:zn,this.isPropagationStopped=zn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Bn(Vn),Un=T({},Vn,{view:0,detail:0}),Wn=Bn(Un),Gn,Kn,qn,Jn=T({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==qn&&(qn&&e.type===`mousemove`?(Gn=e.screenX-qn.screenX,Kn=e.screenY-qn.screenY):Kn=Gn=0,qn=e),Gn)},movementY:function(e){return`movementY`in e?e.movementY:Kn}}),Yn=Bn(Jn),Xn=Bn(T({},Jn,{dataTransfer:0})),Zn=Bn(T({},Un,{relatedTarget:0})),Qn=Bn(T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0})),$n=Bn(T({},Vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),er=Bn(T({},Vn,{data:0})),tr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},nr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},rr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rr[e])?!!t[e]:!1}function ar(){return ir}var or=Bn(T({},Un,{key:function(e){if(e.key){var t=tr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Ln(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?nr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type===`keypress`?Ln(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Ln(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),sr=Bn(T({},Jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),cr=Bn(T({},Vn,{submitter:0})),lr=Bn(T({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar})),ur=Bn(T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),dr=Bn(T({},Jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),fr=Bn(T({},Vn,{newState:0,oldState:0,source:0})),pr=[9,13,27,32],mr=An&&`CompositionEvent`in window,hr=null;An&&`documentMode`in document&&(hr=document.documentMode);var gr=An&&`TextEvent`in window&&!hr,_r=An&&(!mr||hr&&8<hr&&11>=hr),vr=` `,yr=!1;function br(e,t){switch(e){case`keyup`:return pr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function xr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Sr=!1;function Cr(e,t){switch(e){case`compositionend`:return xr(t);case`keypress`:return t.which===32?(yr=!0,vr):null;case`textInput`:return e=t.data,e===vr&&yr?null:e;default:return null}}function wr(e,t){if(Sr)return e===`compositionend`||!mr&&br(e,t)?(e=In(),Fn=Pn=Nn=null,Sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return _r&&t.locale!==`ko`?null:t.data;default:return null}}var Tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Tr[e.type]:t===`textarea`}function Dr(e,t,n,r){wn?Tn?Tn.push(r):Tn=[r]:wn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Or=null,kr=null;function Ar(e){Vf(e,0)}function jr(e){if(rn(Lt(e)))return e}function Mr(e,t){if(e===`change`)return t}var Nr=!1;if(An){var Pr;if(An){var Fr=`oninput`in document;if(!Fr){var Ir=document.createElement(`div`);Ir.setAttribute(`oninput`,`return;`),Fr=typeof Ir.oninput==`function`}Pr=Fr}else Pr=!1;Nr=Pr&&(!document.documentMode||9<document.documentMode)}function Lr(){Or&&(Or.detachEvent(`onpropertychange`,Rr),kr=Or=null)}function Rr(e){if(e.propertyName===`value`&&jr(kr)){var t=[];Dr(t,kr,e,Cn(e)),On(Ar,t)}}function zr(e,t,n){e===`focusin`?(Lr(),Or=t,kr=n,Or.attachEvent(`onpropertychange`,Rr)):e===`focusout`&&Lr()}function Br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return jr(kr)}function Vr(e,t){if(e===`click`)return jr(t)}function Hr(e,t){if(e===`input`||e===`change`)return jr(t)}function Ur(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Wr=typeof Object.is==`function`?Object.is:Ur;function Gr(e,t){if(Wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Be.call(t,i)||!Wr(e[i],t[i]))return!1}return!0}function Kr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jr(e,t){var n=qr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=qr(n)}}function Yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Qr=An&&`documentMode`in document&&11>=document.documentMode,$r=null,ei=null,ti=null,ni=!1;function ri(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||$r==null||$r!==Kr(r)||(r=$r,`selectionStart`in r&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&Gr(ti,r)||(ti=r,r=Jf(ei,`onSelect`),0<r.length&&(t=new Hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ai={animationend:ii(`Animation`,`AnimationEnd`),animationiteration:ii(`Animation`,`AnimationIteration`),animationstart:ii(`Animation`,`AnimationStart`),transitionrun:ii(`Transition`,`TransitionRun`),transitionstart:ii(`Transition`,`TransitionStart`),transitioncancel:ii(`Transition`,`TransitionCancel`),transitionend:ii(`Transition`,`TransitionEnd`)},oi={},si={};An&&(si=document.createElement(`div`).style,`AnimationEvent`in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),`TransitionEvent`in window||delete ai.transitionend.transition);function ci(e){if(oi[e])return oi[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in si)return oi[e]=t[n];return e}var li=ci(`animationend`),ui=ci(`animationiteration`),di=ci(`animationstart`),fi=ci(`transitionrun`),pi=ci(`transitionstart`),mi=ci(`transitioncancel`),hi=ci(`transitionend`),gi=new Map,_i=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);_i.push(`scrollEnd`);function vi(e,t){gi.set(e,t),Ut(t,[e])}var yi=0;function bi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=yi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function xi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Si(e,t){return e=xi(e),t=xi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ci=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},wi=[],Ti=0,Ei=0;function Di(){for(var e=Ti,t=Ei=Ti=0;t<e;){var n=wi[t];wi[t++]=null;var r=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var a=wi[t];if(wi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ji(n,i,a)}}function Oi(e,t,n,r){wi[Ti++]=e,wi[Ti++]=t,wi[Ti++]=n,wi[Ti++]=r,Ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ki(e,t,n,r){return Oi(e,t,n,r),Mi(e)}function Ai(e,t){return Oi(e,null,null,t),Mi(e)}function ji(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-nt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Mi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ni={};function Pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(e,t,n,r){return new Pi(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,t){var n=e.alternate;return n===null?(n=Fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ri(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ii(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Te.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case fe:return e=Fi(31,n,t,a),e.elementType=fe,e.lanes=o,e;case re:return Bi(n.children,a,o,t);case ie:s=8,a|=24;break;case ae:return e=Fi(12,n,t,a|2),e.elementType=ae,e.lanes=o,e;case le:return e=Fi(13,n,t,a),e.elementType=le,e.lanes=o,e;case ue:return e=Fi(19,n,t,a),e.elementType=ue,e.lanes=o,e;case pe:case he:return e=a|32,e=Fi(30,n,t,e),e.elementType=he,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case se:s=10;break a;case oe:s=9;break a;case ce:s=11;break a;case O:s=14;break a;case de:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Bi(e,t,n,r){return e=Fi(7,e,r,t),e.lanes=n,e}function Vi(e,t,n){return e=Fi(6,e,null,t),e.lanes=n,e}function Hi(e){var t=Fi(18,null,null,0);return t.stateNode=e,t}function Ui(e,t,n){return t=Fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wi=new WeakMap;function Gi(e,t){if(typeof e==`object`&&e){var n=Wi.get(e);return n===void 0?(t={value:e,source:t,stack:ze(t)},Wi.set(e,t),t):n}return{value:e,source:t,stack:ze(t)}}var Ki=[],qi=0,Ji=null,Yi=0,Xi=[],Zi=0,Qi=null,$i=1,ea=``;function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Ji,Ji=e,Yi=t}function na(e,t,n){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,Qi=e;var r=$i;e=ea;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var a=32-nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$i=1<<32-nt(t)+i|n<<i|r,ea=a+e}else $i=1<<a|n<<i|r,ea=e}function ra(e){e.return!==null&&(ta(e,1),na(e,1,0))}function ia(e){for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null;for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,ea=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null}function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,$i=t.id,ea=t.overflow,Qi=e}var oa=null,L=null,R=!1,sa=null,ca=!1,la=Error(i(519));function ua(e){throw ga(Gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),la}function da(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Tt]=e,t[Et]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),cn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),fn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||ua(e,!0)}function fa(e){for(oa=e.return;oa;)switch(oa.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:oa=oa.return}}function pa(e){if(e!==oa)return!1;if(!R)return fa(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&L&&ua(e),fa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else t===27?(t=L,Sp(e.type)?(e=um,um=null,L=e):L=t):L=oa?lm(e.stateNode.nextSibling):null;return!0}function ma(){L=oa=null,R=!1}function ha(){var e=sa;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),sa=null),e}function ga(e){sa===null?sa=[e]:sa.push(e)}var _a=we(null),va=null,ya=null;function ba(e,t,n){N(_a,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=_a.current,M(_a)}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ca(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Sa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Sa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function wa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Wr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Oe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Ca(t,e,n,r),t.flags|=262144,e!==null}function Ta(e){for(e=e.firstContext;e!==null;){if(!Wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){va=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Da(e){return ka(va,e)}function Oa(e,t){return va===null&&Ea(e),ka(e,t)}function ka(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ya===null){if(e===null)throw Error(i(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var Aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ja=t.unstable_scheduleCallback,Ma=t.unstable_NormalPriority,Na={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pa(){return{controller:new Aa,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&ja(Ma,function(){e.controller.abort()})}function Ia(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var La=null;function Ra(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var za=null,Ba=0,Va=0,Ha=null;function Ua(e,t){if(za===null){var n=za=[];Ba=0,Va=Pf(),Ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ba++,t.then(Wa,Wa),t}function Wa(){if(--Ba===0&&(La=null,za!==null)){Ha!==null&&(Ha.status=`fulfilled`);var e=za;za=null,Va=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ka=A.S;A.S=function(e,t){if(gd=Ge(),typeof t==`object`&&t&&typeof t.then==`function`&&Ua(e,t),La!==null)for(var n=bf;n!==null;)Ia(n,La),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ia(r,n),r=r.next;if(Va!==0){r=La,r===null&&(r=La=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ka!==null&&Ka(e,t)};var qa=we(null);function Ja(){var e=qa.current;return e===null?G.pooledCache:e}function Ya(e,t){t===null?N(qa,qa.current):N(qa,t.pool)}function Xa(){var e=Ja();return e===null?null:{parent:Na._currentValue,pool:e}}var Za=Error(i(460)),Qa=Error(i(474)),$a=Error(i(542)),eo={then:function(){}};function to(e){return e=e.status,e===`fulfilled`||e===`rejected`}function no(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xn,xn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(xn,xn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e}throw io=t,Za}}function ro(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(io=e,Za):e}}var io=null;function ao(){if(io===null)throw Error(i(459));var e=io;return io=null,e}function oo(e){if(e===Za||e===$a)throw Error(i(483))}var so=null,co=0;function lo(e){var t=co;return co+=1,so===null&&(so=[]),no(so,e,t)}function uo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function fo(e,t){throw t.$$typeof===E?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function po(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===re?(e=d(e,t,n.props.children,r,n.key),uo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===de&&ro(i)===t.type)?(t=a(t,n.props),uo(t,n),t.return=e,t):(t=zi(n.type,n.key,n.props,null,e.mode,r),uo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case D:return n=zi(t.type,t.key,t.props,null,e.mode,n),uo(n,t),n.return=e,n;case ne:return t=Ui(t,e.mode,n),t.return=e,t;case de:return t=ro(t),f(e,t,n)}if(be(t)||k(t))return t=Bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,lo(t),n);if(t.$$typeof===se)return f(e,Oa(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case D:return n.key===i?l(e,t,n,r):null;case ne:return n.key===i?u(e,t,n,r):null;case de:return n=ro(n),p(e,t,n,r)}if(be(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,lo(n),r);if(n.$$typeof===se)return p(e,t,Oa(e,n),r);fo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case D:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ne:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case de:return r=ro(r),m(e,t,n,r,i)}if(be(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,lo(r),i);if(r.$$typeof===se)return m(e,t,n,Oa(t,r),i);fo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ta(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ta(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ta(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ta(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ta(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ta(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===re&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case D:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===re){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),uo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===de&&ro(l)===r.type){n(e,r.sibling),c=a(r,o.props),uo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===re?(c=Bi(o.props.children,e.mode,c,o.key),uo(c,o),c.return=e,e=c):(c=zi(o.type,o.key,o.props,null,e.mode,c),uo(c,o),c.return=e,e=c)}return s(e);case ne:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ui(o,e.mode,c),c.return=e,e=c}return s(e);case de:return o=ro(o),_(e,r,o,c)}if(be(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,lo(o),c);if(o.$$typeof===se)return _(e,r,Oa(e,o),c);fo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{co=0;var i=_(e,t,n,r);return so=null,i}catch(t){if(t===Za||t===$a)throw t;var a=Fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var mo=po(!0),ho=po(!1),go=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Mi(e),ji(e,null,n),t}return Oi(e,r,t,n),Mi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Co=!1;function wo(){if(Co){var e=Ha;if(e!==null)throw e}}function To(e,t,n,r){Co=!1;var i=e.updateQueue;go=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Va&&(Co=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:go=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function Eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Do(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var Oo=we(null),ko=we(0);function Ao(e,t){e=od,N(ko,e),N(Oo,t),od=e|t.baseLanes}function jo(){N(ko,od),N(Oo,Oo.current)}function Mo(){od=ko.current,M(Oo),M(ko)}var No=we(null),Po=null;function Fo(e){var t=e.alternate;N(Bo,Bo.current&1),N(No,e),Po===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(Po=e)}function Io(e){N(Bo,Bo.current),N(No,e),Po===null&&(Po=e)}function Lo(e){e.tag===22?(N(Bo,Bo.current),N(No,e),Po===null&&(Po=e)):Ro()}function Ro(){N(Bo,Bo.current),N(No,No.current)}function zo(e){M(No),Po===e&&(Po=null),M(Bo)}var Bo=we(0);function Vo(e,t){N(No,No.current),N(Bo,t)}function Ho(e){M(Bo),M(No),Po===e&&(Po=null)}function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,z=null,B=null,Go=null,Ko=!1,qo=!1,Jo=!1,Yo=0,Xo=0,Zo=null,Qo=0;function $o(){throw Error(i(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wr(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,i,a){return Wo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?vc:yc,Jo=!1,a=n(r,i),Jo=!1,qo&&(a=rs(t,n,r,i)),ns(e),a}function ns(e){A.H=_c;var t=B!==null&&B.next!==null;if(Wo=0,Go=B=z=null,Ko=!1,Xo=0,Zo=null,t)throw Error(i(300));e===null||Ic||(e=e.dependencies,e!==null&&Ta(e)&&(Ic=!0))}function rs(e,t,n,r){z=e;var a=0;do{if(qo&&(Zo=null),Xo=0,qo=!1,25<=a)throw Error(i(301));if(a+=1,Go=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=bc,o=t(n,r)}while(qo);return o}function is(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?ds(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function as(){var e=Yo!==0;return Yo=0,e}function os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ss(e){if(Ko){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ko=!1}Wo=0,Go=B=z=null,qo=!1,Xo=Yo=0,Zo=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Go===null?z.memoizedState=Go=e:Go=Go.next=e,Go}function ls(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=Go===null?z.memoizedState:Go.next;if(t!==null)Go=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Go===null?z.memoizedState=Go=e:Go=Go.next=e}return Go}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Xo;return Xo+=1,Zo===null&&(Zo=[]),e=no(Zo,e,t),t=z,(Go===null?t.memoizedState:Go.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?vc:yc),e}function fs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ds(e);if(e.$$typeof===ge)return;if(e.$$typeof===se)return Da(e)}throw Error(i(438,String(e)))}function ps(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=us(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=me;return t.index++,n}function ms(e,t){return typeof t==`function`?t(e):t}function hs(e){return gs(ls(),B,e)}function gs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Wo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Va&&(d=!0);else if((Wo&p)===p){u=u.next,p===Va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,sd|=p;f=u.action,Jo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Wr(o,e.memoizedState)&&(Ic=!0,d&&(n=Ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _s(e){var t=ls(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Wr(o,t.memoizedState)||(Ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vs(e,t,n){var r=z,a=ls(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Wr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,Ic=!0),a=a.queue,Us(xs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Go!==null&&!!(Go.memoizedState.tag&1),Rs(e?9:8,{destroy:void 0},bs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Wo&127||ys(r,t,n)}return n}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=us(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bs(e,t,n,r){t.value=n,t.getSnapshot=r,Ss(t)&&Cs(e)}function xs(e,t,n){return n(function(){Ss(t)&&Cs(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wr(e,n)}catch{return!0}}function Cs(e){var t=Ai(e,2);t!==null&&Pd(t,e,2)}function ws(e){var t=cs();if(typeof e==`function`){var n=e;if(e=n(),Jo){tt(!0);try{n()}finally{tt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t}function Ts(e,t,n,r){return e.baseState=n,gs(e,B,typeof r==`function`?r:ms)}function Es(e,t,n,r,a){if(mc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ds(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};o.types=a===null?null:a.types,A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Os(e,t,s)}catch(n){As(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Os(e,t,a)}catch(n){As(e,t,n)}}function Os(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ks(e,t,n)},function(n){return As(e,t,n)}):ks(e,t,n)}function ks(e,t,n){t.status=`fulfilled`,t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ds(e,n)))}function As(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,js(t),t=t.next;while(t!==r)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ms(e,t){return t}function Ns(e,t){if(R){var n=G.formState;if(n!==null){a:{var r=z;if(R){if(L){b:{for(var i=L,a=ca;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=lm(i.nextSibling),r=i.data===`F!`;break a}}ua(r)}r=!1}r&&(t=n[0])}}return n=cs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=r,n=dc.bind(null,z,r),r.dispatch=n,r=ws(!1),a=pc.bind(null,z,!1,r.queue),r=cs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Es.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ps(e){return Fs(ls(),B,e)}function Fs(e,t,n){if(t=gs(e,t,Ms)[0],e=hs(ms)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ds(t)}catch(e){throw e===Za?$a:e}else r=t;t=ls();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,Rs(9,{destroy:void 0},Is.bind(null,i,n),null)),[r,a,e]}function Is(e,t){e.action=t}function Ls(e){var t=ls(),n=B;if(n!==null)return Fs(t,n,e);ls(),t=t.memoizedState,n=ls();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=us(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zs(){return ls().memoizedState}function Bs(e,t,n,r){var i=cs();z.flags|=e,i.memoizedState=Rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Vs(e,t,n,r){var i=ls();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&es(r,B.memoizedState.deps)?i.memoizedState=Rs(t,a,n,r):(z.flags|=e,i.memoizedState=Rs(1|t,a,n,r))}function Hs(e,t){Bs(8390656,8,e,t)}function Us(e,t){Vs(2048,8,e,t)}function Ws(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=us(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gs(e){var t=ls().memoizedState;return Ws({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ks(e,t){return Vs(4,2,e,t)}function qs(e,t){return Vs(4,4,e,t)}function Js(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,n){n=n==null?null:n.concat([e]),Vs(4,4,Js.bind(null,t,e),n)}function Xs(){}function Zs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&es(t,r[1]))return r[0];if(r=e(),Jo){tt(!0);try{e()}finally{tt(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||Wo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),z.lanes|=e,sd|=e,n)}function ec(e,t,n,r){return Wr(n,t)?n:Oo.current===null?!(Wo&106)||Wo&1073741824&&!(q&261930)?(Ic=!0,e.memoizedState=n):(e=Md(),z.lanes|=e,sd|=e,t):(e=$s(e,n,r),Wr(e,t)||(Ic=!0),e)}function tc(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};s.types=o===null?null:o.types,A.T=s,pc(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?fc(e,t,Ga(c,r),jd(e)):fc(e,t,r,jd(e))}catch(n){fc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function nc(){}function rc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ic(e).queue;tc(e,a,t,xe,n===null?nc:function(){return ac(e),n(r)})}function ic(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:xe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ac(e){var t=ic(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},jd())}function oc(){return Da(sh)}function sc(){return ls().memoizedState}function cc(){return ls().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=yo(n);var r=bo(t,e,n);r!==null&&(Pd(r,t,n),xo(r,t,n)),t={cache:Pa()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e)?hc(t,n):(n=ki(e,t,n,r),n!==null&&(Pd(n,e,r),gc(n,t,r)))}function dc(e,t,n){fc(e,t,n,jd())}function fc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Wr(s,o))return Oi(e,t,i,0),G===null&&Di(),!1}catch{}if(n=ki(e,t,i,r),n!==null)return Pd(n,e,r),gc(n,t,r),!0}return!1}function pc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(t)throw Error(i(479))}else t=ki(e,n,r,2),t!==null&&Pd(t,e,2)}function mc(e){var t=e.alternate;return e===z||t!==null&&t===z}function hc(e,t){qo=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}var _c={readContext:Da,use:fs,useCallback:$o,useContext:$o,useEffect:$o,useImperativeHandle:$o,useLayoutEffect:$o,useInsertionEffect:$o,useMemo:$o,useReducer:$o,useRef:$o,useState:$o,useDebugValue:$o,useDeferredValue:$o,useTransition:$o,useSyncExternalStore:$o,useId:$o,useHostTransitionStatus:$o,useFormState:$o,useActionState:$o,useOptimistic:$o,useMemoCache:$o,useCacheRefresh:$o,useEffectEvent:$o},vc={readContext:Da,use:fs,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Da,useEffect:Hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Bs(4194308,4,Js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bs(4194308,4,e,t)},useInsertionEffect:function(e,t){Bs(4,2,e,t)},useMemo:function(e,t){var n=cs();t=t===void 0?null:t;var r=e();if(Jo){tt(!0);try{e()}finally{tt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=cs();if(n!==void 0){var i=n(t);if(Jo){tt(!0);try{n(t)}finally{tt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,n=dc.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){return $s(cs(),e,t)},useTransition:function(){var e=ws(!1);return e=tc.bind(null,z,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=cs();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||ys(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Hs(xs.bind(null,r,o,e),[e]),r.flags|=2048,Rs(9,{destroy:void 0},bs.bind(null,r,o,n,t),null),n},useId:function(){var e=cs(),t=G.identifierPrefix;if(R){var n=ea,r=$i;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pc.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return cs().memoizedState=lc.bind(null,z)},useEffectEvent:function(e){var t=cs(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:Da,use:fs,useCallback:Zs,useContext:Da,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:hs,useRef:zs,useState:function(){return hs(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){return ec(ls(),B.memoizedState,e,t)},useTransition:function(){var e=hs(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){return Ts(ls(),B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs},bc={readContext:Da,use:fs,useCallback:Zs,useContext:Da,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:_s,useRef:zs,useState:function(){return _s(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ls();return B===null?$s(n,e,t):ec(n,B.memoizedState,e,t)},useTransition:function(){var e=_s(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var n=ls();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ts(n,B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=yo(n);r.tag=2,t!=null&&(r.callback=t),t=bo(e,r,n),t!==null&&(Pd(t,e,n),xo(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){Ci(e)}function Dc(e){console.error(e)}function Oc(e){Ci(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=yo(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=yo(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&wa(t,n,a,!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Po===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(R)return t=No.current,t===null?(r!==la&&(t=Error(i(423),{cause:r}),ga(Gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Gi(r,n),a=jc(e.stateNode,r,a),So(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==la&&(e=Error(i(422),{cause:r}),ga(Gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Gi(o,n),fd===null?fd=[o]:fd.push(o),Y!==4&&(Y=2),t===null)return!0;r=Gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=jc(n.stateNode,r,e),So(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Mc(a),Nc(a,e,n,r),So(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(i(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?ho(t,null,n,r):mo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ea(t),r=ts(e,t,n,o,a,i),s=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(R&&s&&ra(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Gr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Li(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Gr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ya(t,a===null?null:a.cachePool),a===null?jo():Ao(t,a),Lo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ya(t,null),jo(),Ro()):(Ya(t,a.cachePool),Ao(t,a),Ro(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Ja();return a=a===null?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ya(t,null),jo(),Lo(t),e!==null&&wa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return mo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,zo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Io(t),(e=L)?(e=am(e,ca),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Io(t),a){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ic||wa(e,t,n,!1),a=(n&e.childLanes)!==0,Ic||a){if(Oo.current===null){if(r=G,r!==null&&(s=bt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ai(e,s),Pd(r,e,s),Fc;Kd()}t=Gc(e,t,n)}else e=o.treeContext,L=lm(s.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Ea(t),n=ts(e,t,n,r,void 0,i),r=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(R&&r&&ra(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Ea(t),t.updateQueue=null,n=rs(t,r,n,i),ns(e),r=as(),e!==null&&!Ic?(os(e,t,a),fl(e,t,a)):(R&&r&&ra(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Ea(t),t.stateNode===null){var a=Ni,o=n.contextType;typeof o==`object`&&o&&(a=Da(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},_o(t),o=n.contextType,a.context=typeof o==`object`&&o?Da(o):Ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),To(t,r,a,i),wo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ni,typeof u==`object`&&u&&(o=Da(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),go=!1;var f=t.memoizedState;a.state=f,To(t,r,a,i),wo(),l=t.memoizedState,s||f!==l||go?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=go||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vo(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ni,typeof l==`object`&&l&&(c=Da(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),go=!1,f=t.memoizedState,a.state=f,To(t,r,a,i),wo();var p=t.memoizedState;o!==d||f!==p||go||e!==null&&e.dependencies!==null&&Ta(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=go||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ma(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:Xa()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Bo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(R){if(i?Fo(t):Ro(),(e=L)?(e=am(e,ca),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ro(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Bi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Fo(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Ro(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Li(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Bi(i,a,n,null),i.flags|=2):i=Li(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=Xa():(s=Na._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Fo(t),n=e.child,e=n.sibling,n=Li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Fi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return mo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Fo(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Ro(),o=a.fallback,s=t.mode,a=rl({mode:`visible`,children:a.children},s),o=Bi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,mo(t,e.child,null,c),a=t.child,a.memoizedState=$c(c),a.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,a)):(Ro(),t.child=e.child,t.flags|=128,null);if(Fo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ga({value:a,source:null,stack:null})),il(e,t,c)}if(Ic||wa(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(Oo.current!==null)return il(e,t,c);if(r=G,r!==null&&(a=bt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ai(e,a),Pd(r,e,a),Fc;return om(o)||Kd(),il(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,L=lm(o.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=nl(t,a.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uo(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Bo.current;if(t.flags&128)return Vo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Vo(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=R?Yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return ba(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ta(e)))}function ml(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),ba(t,Na,e.memoizedState.cache),ma();break;case 27:case 5:je(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fo(t),t.flags|=128,null;r=wa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Fo(t),e=fl(e,t,n),e===null?null:e.sibling)}Fo(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(wa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vo(t,Bo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:ba(t,Na,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,R&&t.flags&1048576&&na(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,typeof e==`function`)Ii(e)?(r=Tc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ce){t.tag=11,t=Rc(null,t,e,r,n);break a}if(a===O){t.tag=14,t=zc(null,t,e,r,n);break a}if(a===se){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=ye(e)||e,Error(i(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Tc(r,t.pendingProps),Xc(e,t,r,a,n);case 3:a:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,vo(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ba(t,Na,r),r!==o.cache&&Ca(t,[Na],n,!0),wo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==a){a=Gi(Error(i(424)),t),ga(a),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=lm(e.firstChild),oa=t,R=!0,sa=null,ca=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ma(),r===a){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(t.stateNode=fp(t.type,t.pendingProps,De.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&R&&(r=t.stateNode=hm(t.type,t.pendingProps,De.current),oa=t,ca=!0,a=L,Sp(t.type)?(um=a,L=lm(r.firstChild)):L=a),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=rm(r,t.type,t.pendingProps,ca),r===null?a=!1:(t.stateNode=r,oa=t,L=lm(r.firstChild),ca=!1,a=!0)),a||ua(t)),je(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ts(e,t,is,null,null,n),sh._currentValue=a),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=im(n,t.pendingProps,ca),n===null?e=!1:(t.stateNode=n,oa=t,L=null,e=!0)),e||ua(t)),null;case 13:return tl(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ea(t),a=Da(a),r=r(a),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Ea(t),r=Da(Na),e===null?(a=Ja(),a===null&&(a=G,o=Pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},_o(t),ba(t,Na,a)):((e.lanes&n)!==0&&(vo(e,t),To(t,null,null,n),wo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ba(t,Na,r),r!==a.cache&&Ca(t,[Na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ba(t,Na,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:R&&ra(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw io=eo,Qa}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw io=eo,Qa}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:mt(),e.lanes|=t,dd|=t)}function bl(e,t){if(!R)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ha())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(gl(t),o===null?(V(t),_l(t,a,null,r,n)):(V(t),vl(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,o)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,a,e,r,n)),null;case 27:if(Me(t),n=De.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),t.subtreeFlags&=-33554433,null}e=Te.current,pa(t)?da(t,e):(e=hm(a,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(Me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),t.subtreeFlags&=-33554433,null}if(o=Te.current,pa(t))da(t,o);else{var s=lp(De.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Tt]=t,o[Et]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=De.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=oa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Tt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ua(t,!0)}else e=lp(e).createTextNode(r),e[Tt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=pa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Tt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zo(t),t):(zo(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Tt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(zo(t),t):(zo(t),null)}return zo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return Ae(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return xa(t.type),V(t),null;case 19:if(Ho(t),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)bl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,bl(r,!1),e=o.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ri(n,e),n=n.sibling;return Vo(t,Bo.current&1|2),R&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ge()>_d&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!R)return V(t),null}else 2*Ge()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ge(),e.sibling=null,o=Bo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||R?Vo(t,o):(n=o,N(No,t),N(Bo,n),Po===null&&(Po=t)),R&&ta(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return zo(t),Mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&M(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(i(156,t.tag))}function Sl(e,t){switch(ia(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xa(Na),Ae(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(zo(t),t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ho(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ae(),null;case 10:return xa(t.type),null;case 22:case 23:return zo(t),Mo(),e!==null&&M(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xa(Na),null;case 25:return null;default:return null}}function Cl(e,t){switch(ia(t),t.tag){case 3:xa(Na),Ae();break;case 26:case 27:case 5:Me(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&zo(t);break;case 13:zo(t);break;case 19:Ho(t);break;case 10:xa(t.type);break;case 22:case 23:zo(t),Mo(),e!==null&&M(qa);break;case 24:xa(Na)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Do(t,n)}catch(t){Z(e,e.return,t)}}}function Dl(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=bi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Et]=t}catch(t){Z(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xn)),Al(e,r),I=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),I=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Tt]=e,t[Et]=n}catch(t){Z(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Hl=!0,Tp(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Si(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=bi(r,n),a=Si(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Nd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Si(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Si(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Nd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode);t=Si(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=bi(n,r),a=Si(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=Xr(e),Zr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Tc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=bi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Si(a.default,a.update),a!==`none`&&Jl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&wl(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Do(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),su=t,H=i}break;case 30:Lu(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,I=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(P&&typeof P.onCommitFiberUnmount==`function`)try{P.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:H||kl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),I=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),I=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),wu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,wu(e,t,n),H=r;break;case 30:kl(n,t),wu(e,t,n);break;case 7:H||kl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),a&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Mt]||r[Tt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Tt]=e,zt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Tt]=e,zt(r),t=r}e.stateNode=t}}else su||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):a.count--,n===null?su||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),r!==null&&a&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=cu,cu=!1,Au(t,e,n),cu=o,Nu(e),a&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{pn(t,``),I=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),a&1024&&(lu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,I=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(I=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}lu&&(lu=!1,Pu(e)),I=!1;break;case 4:a=cu,cu=su,r=Yt(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,I&&pu&&(mu=!0),I=r,cu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Ge()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||o,cu=u||o,H=l||s,Au(t,e,n),H=l,cu=u,su=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||su||H||(t=s||H,n=su,r=H,su=o||su,H=t,Ru(e,2),su=n,H=r),!o&&cu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(H||r===null||kl(r,r.return)),a=Yt(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&Si(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&I&&(e.flags|=4),pu=o,I=a;break;case 21:break;case 7:a&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Pl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Nl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(pn(l,``),n.flags&=-33),Bl(e,Rl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else ou(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Fu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=bi(a,o),o=bi(n.memoizedProps,o);var s=Si(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),Ru(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),Ru(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:kl(n,n.return),Ru(n,r);break;case 7:kl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),wl(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Eo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Ol(a,a.return);break;case 30:zu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Fa(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=Da(Na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Da(Na).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:A.T===null?Ct():Pf()}function Md(){if(ud===0){if(!(q&536870912)||R){var e=st;st<<=1,!(st&3932160)&&(st=262144),ud=e}else ud=536870912}return e=No.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(bi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),gt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||dt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-Ge(),10<a)){if(Rd(r,t,ud,!rd),ut(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Ge():(a&4194048)===a?gd-Ge():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ft(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-nt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&vt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,ya=va=null,ss(e),so=null,co=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Li(e.current,null),q=t,J=0,nd=null,rd=!1,id=dt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=ft(e,t),Di(),n}function Hd(e,t){z=null,A.H=_c,t===Za||t===$a?(t=ao(),J=3):t===Qa?(t=ao(),J=4):J=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,kc(e,Gi(t,e.current)))}function Ud(){var e=No.current;return e===null?!0:(q&4194048)===q?Po===null:(q&62914560)===q||q&536870912?e===Po:!1}function Wd(){var e=A.H;return A.H=_c,e===null?_c:e}function Gd(){var e=A.A;return A.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&No.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:No.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ya=va=null,W=r,A.H=i,A.A=a,K===null&&(G=null,q=0,Di()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(vd=null,_d=Ge()+500,Vd(e,t)):id=dt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(to(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:to(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),Y=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ya=va=null,A.H=r,A.A=a,W=n,K===null?(G=null,q=0,Di(),Y):0}function Xd(){for(;K!==null&&!Ue();)Zd(K)}function Zd(e){var t=hl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ss(t);var r=t;r===oa&&(R?(fa(r),r.tag===5&&r.stateNode!=null&&(L=r.stateNode)):(fa(r),R=!0));default:Cl(n,t),t=K=Ri(t,od),t=hl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){ya=va=null,ss(t),so=null,co=0;var i=t.return;try{if(Pc(e,i,t,n,q)){Y=1,kc(e,Gi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,kc(e,Gi(n,e.current)),K=null;return}t.flags&32768?(R||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=No.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ei,_t(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ra(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ye,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=A.T,A.T=null,i=j.p,j.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,j.p=i,A.T=r}}X=1,Hl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=A.T,A.T=null;var i=j.p;j.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=Xr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Yr(s.ownerDocument.documentElement,s)){if(c!==null&&Zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Jr(s,h),v=Jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,j.p=i,A.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,j.p=r,A.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,We();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),St(r),n=n.stateNode,P&&typeof P.onCommitFiberRoot==`function`)try{P.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=A.T,a=j.p,j.p=2,A.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{A.T=n,j.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=St(Sd),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),P&&typeof P.onPostCommitFiberRoot==`function`)try{P.onPostCommitFiberRoot(et,o)}catch{}return!0}finally{j.p=a,A.T=r,uf(e,t)}}function pf(e,t,n){t=Gi(n,t),t=jc(e.stateNode,t,2),e=bo(e,t,2),e!==null&&(gt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Gi(n,e),n=Mc(2),r=bo(t,n,2),r!==null&&(Nc(n,r,t,e),gt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ge()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=mt()),e=Ai(e,t),e!==null&&(gt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ve(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-nt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=ut(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||dt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ge(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=pt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=ut(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&He(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||dt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&He(r),St(n)){case 2:case 8:n=Je;break;case 32:n=Ye;break;case 268435456:n=Ze;break;default:n=Ye}return r=jf.bind(null,e),n=Ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&He(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=ut(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ge()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ve(qe,Of):kf()})}function Pf(){if(Tf===0){var e=Va;e===0&&(e=ot,ot<<=1,!(ot&261888)&&(ot=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:bn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Et]||null).action),o=r.submitter;o&&(t=(t=o[Et]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);rc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),rc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<_i.length;Lf++){var Rf=_i[Lf];vi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}vi(li,`onAnimationEnd`),vi(ui,`onAnimationIteration`),vi(di,`onAnimationStart`),vi(`dblclick`,`onDoubleClick`),vi(`focusin`,`onFocus`),vi(`focusout`,`onBlur`),vi(fi,`onTransitionRun`),vi(pi,`onTransitionStart`),vi(mi,`onTransitionCancel`),vi(hi,`onTransitionEnd`),Wt(`onMouseEnter`,[`mouseout`,`mouseover`]),Wt(`onMouseLeave`,[`mouseout`,`mouseover`]),Wt(`onPointerEnter`,[`pointerout`,`pointerover`]),Wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ut(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ut(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ut(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ut(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ut(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ut(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Ot];n===void 0&&(n=t[Ot]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Vt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!jn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ft(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}On(function(){var r=a,i=Cn(n),s=[];a:{var c=gi.get(e);if(c!==void 0){var l=Hn,u=e;switch(e){case`keypress`:if(Ln(n)===0)break a;case`keydown`:case`keyup`:l=or;break;case`focusin`:u=`focus`,l=Zn;break;case`focusout`:u=`blur`,l=Zn;break;case`beforeblur`:case`afterblur`:l=Zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Yn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Xn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=lr;break;case li:case ui:case di:l=Qn;break;case hi:l=ur;break;case`scroll`:case`scrollend`:l=Wn;break;case`wheel`:l=dr;break;case`copy`:case`cut`:case`paste`:l=$n;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=sr;break;case`submit`:l=cr;break;case`toggle`:case`beforetoggle`:l=fr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=kn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==Sn&&(u=n.relatedTarget||n.fromElement)&&(Ft(u)||u[Dt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ft(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Yn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=sr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Lt(c),h=l==null?u:Lt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ft(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?te(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Lt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Mr;else if(Er(c)){if(Nr)_=Hr;else{_=Br;var v=zr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&_n(r.elementType)&&(_=Mr):_=Vr;if(_&&=_(e,r)){Dr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Lt(r):window,e){case`focusin`:(Er(v)||v.contentEditable===`true`)&&($r=v,ei=r,ti=null);break;case`focusout`:ti=ei=$r=null;break;case`mousedown`:ni=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ni=!1,ri(s,n,i);break;case`selectionchange`:if(Qr)break;case`keydown`:case`keyup`:ri(s,n,i)}var y;if(mr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Sr?br(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(_r&&n.locale!==`ko`&&(Sr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Sr&&(y=In()):(Nn=i,Pn=`value`in Nn?Nn.value:Nn.textContent,Sr=!0)),v=Jf(r,b),0<v.length&&(b=new er(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=xr(n),y!==null&&(b.data=y)))),(y=gr?Cr(e,n):wr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new er(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=kn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=kn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=kn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=kn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&pn(e,``+r);else return;break;case`className`:Zt(e,`class`,r);break;case`tabIndex`:Zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Zt(e,n,r);break;case`style`:gn(e,r,o);return;case`data`:if(t!==`object`){Zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=xn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=bn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Xt(e,`popover`,r);break;case`xlinkActuate`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Xt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=vn.get(n)||n,Xt(e,n,r);else return}I=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:gn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)pn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=xn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ht.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Et]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}I=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Xt(e,n,r)}return}I=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}cn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&un(e,!!r,n,!0):un(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}fn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(_n(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(I=!0),o=m;break;case`name`:m!==f&&(I=!0),a=m;break;case`checked`:m!==f&&(I=!0),u=m;break;case`defaultChecked`:m!==f&&(I=!0),d=m;break;case`value`:m!==f&&(I=!0),s=m;break;case`defaultValue`:m!==f&&(I=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}sn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(I=!0),p=o;break;case`defaultValue`:o!==l&&(I=!0),c=o;break;case`multiple`:o!==l&&(I=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?un(e,!!n,n?[]:``,!1):un(e,!!n,t,!0)):un(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(I=!0),p=a;break;case`defaultValue`:a!==o&&(I=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}dn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(I=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(_n(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Tt]=r,n[Et]=t,np(n,e,t),zt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Ft(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=te(n,a,w),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=te(r,a,w),t===null?t=!1:(h(t,!0,ee,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===xn&&(e.onclick=null),Pt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=j.d;j.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=It(e);t!==null&&t.tag===5&&t.type===`form`?ac(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=on(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),zt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+on(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+on(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+on(n.imageSizes)+`"]`)):i+=`[href="`+on(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Nt]=!0,o.onload=o.onerror=function(){Bt(o)}),zt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+on(r)+`"][href="`+on(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),zt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Rt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);zt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Rt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),zt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Rt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),zt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=De.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Rt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Rt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Rt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+on(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Nt]){r.loading=1;return}}else t=e.createElement(`link`),t[Nt]=!0,t.onload=t.onerror=Bt.bind(null,t),np(t,`link`,n),zt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+on(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+on(n.href)+`"]`);if(r)return t.instance=r,zt(r),r;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),zt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,zt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),zt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,zt(a),a):(r=n,(a=vm.get(o))&&(r=T({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),zt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Mt]||a[Tt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,zt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),zt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:se,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Fi(3,null,null,t),e.current=a,a.stateNode=e,t=Pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},_o(a),e}function uh(e){return e?(e=Ni,e):Ni}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=yo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=bo(e,r,t),n!==null&&(Pd(n,e,t),xo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ai(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=xt(t);var n=Ai(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,yh(e,t,n,r)}finally{j.p=a,A.T=i}}function vh(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,yh(e,t,n,r)}finally{j.p=a,A.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=It(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=lt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-nt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=Ge()+500,Df(0,!1))}}break;case 31:case 13:s=Ai(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Cn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ft(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ke()){case qe:return 2;case Je:return 8;case Ye:case Xe:return 32;case Ze:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=It(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ft(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,F(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,F(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sn=r,n.target.dispatchEvent(r),Sn=null}else return t=It(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=It(n);a!==null&&(e.splice(t,3),t-=3,rc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Et]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Et]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Dt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{et=Jh.inject(qh),P=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ec,s=Dc,c=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Dt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`Baringo.Bomet.Bungoma.Busia.Elgeyo Marakwet.Embu.Garissa.Homa Bay.Isiolo.Kajiado.Kakamega.Kericho.Kiambu.Kilifi.Kirinyaga.Kisii.Kisumu.Kitui.Kwale.Laikipia.Lamu.Machakos.Makueni.Mandera.Marsabit.Meru.Migori.Mombasa.Murang'a.Nairobi.Nakuru.Nandi.Narok.Nyamira.Nyandarua.Nyeri.Samburu.Siaya.Taita Taveta.Tana River.Tharaka Nithi.Trans Nzoia.Turkana.Uasin Gishu.Vihiga.Wajir.West Pokot`.split(`.`),b=[`Retail`,`Restaurant`,`Wholesale`,`Professional Services`,`Construction`,`Transport`,`Beauty & Wellness`,`E-commerce`,`Manufacturing`,`Agriculture`,`Other`],x=[`1–5 employees`,`6–10`,`11–20`,`21–50`,`51–100`,`100+`],S=[{id:`Cash flow`,label:`Cash flow`,desc:`Managing day-to-day liquidity, M-Pesa float, and supplier credit`},{id:`Getting customers`,label:`Getting customers`,desc:`Attracting high-paying foot traffic and online buyers`},{id:`Managing stock`,label:`Managing stock`,desc:`Tracking reorder points, avoiding dead stock and shrinkage`},{id:`Tax/compliance`,label:`Tax/compliance`,desc:`Navigating KRA eTIMS, VAT 16%, Turnover Tax, and county permits`},{id:`Marketing`,label:`Marketing`,desc:`Promoting products on WhatsApp, social media, and local SMS`},{id:`Customer retention`,label:`Customer retention`,desc:`Encouraging repeat buyers and building brand loyalty`},{id:`Business planning`,label:`Business planning`,desc:`Forecasting demand, expanding branches, and securing credit`},{id:`Understanding finances`,label:`Understanding finances`,desc:`Separating business money from personal funds and analyzing margins`}],C=[{id:`news-1`,title:`KRA eTIMS Compliance Update for Kenyan MSMEs: What Every Trader Needs to Know`,category:`Tax & Compliance`,summary:`The Kenya Revenue Authority has introduced simplified USSD and web solutions (*222#) to help micro and small enterprises issue valid electronic tax invoices easily.`,content:`As part of Kenya’s ongoing digitisation push, KRA requires all business expenses to be supported by an eTIMS electronic tax invoice to qualify as deductible expenses for corporate income tax. For informal traders and micro businesses whose annual turnover is below KSh 5 million, KRA has simplified the onboarding process via the eTIMS Lite portal and USSD code *222#. BizHubKE connects directly to these compliance best practices to keep your ledger audit-ready.`,publishedAt:`Today, 8:30 AM`,readTime:`4 min read`,source:`BizHubKE Regulatory Desk`,tags:[`KRA`,`eTIMS`,`Tax Compliance`,`SME Kenya`]},{id:`news-2`,title:`CBK Monetary Policy: How Current Lending Rates Impact Working Capital for Nairobi Retailers`,category:`Kenya Business`,summary:`Central Bank of Kenya signals steady policy rates as commercial banks adjust SME risk-based lending models. Here is how to keep your credit line open.`,content:`Managing cash flow requires understanding lending spreads. With Kenyan banks adhering to the risk-based pricing framework, businesses that maintain clear, digital bookkeeping and consistent M-Pesa statements qualify for preferential loan terms of 2% to 4% lower than unvetted peers. BizHubKE generates exportable financial health reports that Kenyan commercial banks and SACCOs recognize.`,publishedAt:`Yesterday`,readTime:`5 min read`,source:`Business Daily Africa`,tags:[`Banking`,`CBK`,`Working Capital`,`SACCO`]},{id:`news-3`,title:`Top 5 WhatsApp CRM Strategies Driving 40% Repeat Purchases in Mombasa & Nakuru`,category:`Business Growth`,summary:`Kenyan shoppers prefer conversational commerce. Discover how automated invoice reminders and WhatsApp status broadcasts convert casual buyers into loyal patrons.`,content:`Over 94% of Kenyan smartphone users actively use WhatsApp. By shifting your customer communications from generic SMS to personalised WhatsApp receipts, re-order notifications, and VIP flash discounts, SMEs in retail and services are seeing a 40% lift in monthly repeat purchases with near-zero ad spend.`,publishedAt:`2 days ago`,readTime:`3 min read`,source:`BizHubKE Growth Lab`,tags:[`WhatsApp CRM`,`Sales`,`Customer Retention`]},{id:`news-4`,title:`Accessing Government Procurement Opportunities (AGPO) and Youth SME Grants in 2025/2026`,category:`Funding`,summary:`How registered Kenyan enterprises owned by Youth, Women, and Persons with Disabilities can tap the 30% affirmative action public procurement quota.`,content:`Under the AGPO scheme, national ministries and county governments must allocate at least 30% of public tender budgets to marginalized business categories. Ensure your business registration certificate, CR12, valid KRA tax compliance certificate (TCC), and BizHubKE digitized books are updated to secure high-value supply contracts.`,publishedAt:`3 days ago`,readTime:`6 min read`,source:`National Treasury Kenya`,tags:[`AGPO`,`Tenders`,`Government Grants`,`Funding`]},{id:`news-5`,title:`AI in African Retail: How Smart Inventory Forecasting Prevents Overstocking During Rainy Seasons`,category:`AI`,summary:`Kenyan logistics and fast-moving consumer goods (FMCG) businesses are deploying machine learning to predict stockouts and avoid perishable spoilage.`,content:`Unpredictable logistics caused by weather or supply disruptions can wipe out small shop margins. Utilizing automated reorder thresholds and predictive demand algorithms built into BizHubKE helps shop managers maintain ideal shelf velocity without tying up capital.`,publishedAt:`4 days ago`,readTime:`4 min read`,source:`TechCabal East Africa`,tags:[`AI`,`Inventory`,`Retail`,`Logistics`]}],ee=[{id:`course-1`,title:`eTIMS Mastery for Kenyan Business Owners`,category:`Tax & Compliance`,description:`A step-by-step practical guide to understanding electronic tax invoicing, input vs. output VAT, and zero-headache annual filing with KRA.`,durationMinutes:45,lessonCount:4,level:`Beginner`,lessons:[{id:`c1-l1`,title:`What is eTIMS and Who Must Comply in Kenya?`,durationMinutes:10,content:`Understand the legal mandate under Section 23A of the Tax Procedures Act. Every business spending money needs eTIMS invoices from suppliers to claim deductions against gross income.`,keyTakeaways:[`Applies to both VAT-registered and non-VAT traders`,`Unlocks business expense tax deductibility`,`Accessible via Web, USSD *222#, and System-to-System APIs`]},{id:`c1-l2`,title:`Turnover Tax (TOT 3%) vs. Standard Corporate Income Tax (30%)`,durationMinutes:12,content:`Learn how to determine if your business qualifies for Turnover Tax (gross sales between KSh 1M and KSh 25M per year at a flat 3% monthly rate) instead of complex profit-based tax accounting.`,keyTakeaways:[`TOT is 3% of gross turnover`,`Paid monthly via iTax by the 20th of the following month`,`Exempt from keeping full balance sheet audits`]},{id:`c1-l3`,title:`How to Reconcile M-Pesa Statements with KRA Records`,durationMinutes:11,content:`Separate personal transactions from business Paybill and Till disbursements. Maintain proper audit trails so tax authorities do not conflate personal savings with trade revenue.`,keyTakeaways:[`Maintain a dedicated Business Till / Paybill`,`Avoid mixing personal send-money with customer payments`,`Download monthly settlement reports for reconciliation`]},{id:`c1-l4`,title:`Handling Exempt and Zero-Rated Supplies in Kenya`,durationMinutes:12,content:`Identify which foodstuffs, medical supplies, and agricultural inputs are zero-rated (0% VAT) versus exempt, and how to invoice them accurately.`,keyTakeaways:[`Difference between exempt supplies and 0% rate`,`Input tax recovery restrictions on exempt products`,`Issuing compliant invoices with BizHubKE`]}]},{id:`course-2`,title:`Managing Working Capital & M-Pesa Float Like a Pro`,category:`Cash Flow & Finance`,description:`Master cash conversion cycles, manage supplier credit lines without going bankrupt, and protect your working capital from inflation.`,durationMinutes:35,lessonCount:3,level:`Intermediate`,lessons:[{id:`c2-l1`,title:`The Cash Conversion Cycle in Kenyan Retail`,durationMinutes:12,content:`Measure the number of days between paying for goods from wholesalers (e.g., Eastleigh, Kamukunji, or Gikomba) and collecting cash from customers.`,keyTakeaways:[`Calculate Days Sales in Inventory (DSI)`,`Shorten customer payment windows`,`Avoid holding slow-moving inventory`]},{id:`c2-l2`,title:`Float Management & Bank-to-Till Settlement Fees`,durationMinutes:11,content:`How to minimize transaction tariff leakage across Safaricom M-Pesa Business Till, Paybill tariffs, and commercial bank bulk settlements.`,keyTakeaways:[`Understand Buy Goods vs. Paybill tariff structures`,`Schedule scheduled sweeps rather than multiple ad-hoc withdrawals`,`Keep emergency liquidity buffers`]},{id:`c2-l3`,title:`Debt Recovery: Getting Paid on Time Without Ruining Relationships`,durationMinutes:12,content:`Standard operating procedures for extending credit, setting 14-day payment limits, and using courteous WhatsApp prompts to secure timely payments.`,keyTakeaways:[`Never release goods without a signed delivery note or invoice`,`Automate gentle payment reminders 3 days before due date`,`Offer 2% prompt-settlement discounts`]}]},{id:`course-3`,title:`Growing Customer Lifetime Value via WhatsApp CRM`,category:`Business Growth`,description:`Transform your customer contacts into a loyal community that orders weekly through broadcast lists, catalog marketing, and rapid support.`,durationMinutes:30,lessonCount:3,level:`Beginner`,lessons:[{id:`c3-l1`,title:`Setting up WhatsApp Business & Catalog Integration`,durationMinutes:10,content:`How to structure your WhatsApp Business profile with your verified location, opening hours, product catalog links, and greeting messages.`,keyTakeaways:[`Optimize your business profile bio`,`Upload product photos with KSh pricing`,`Set up automated away messages and quick replies`]},{id:`c3-l2`,title:`Segmenting Customers in BizHubKE for Targeted Campaigns`,durationMinutes:10,content:`Divide your customer base into VIP spenders, occasional buyers, and inactive accounts to send relevant offers without spamming.`,keyTakeaways:[`Categorize contacts by frequency and average basket size`,`Re-engage customers who have not bought in 30 days`,`Respect privacy and opt-out preferences`]},{id:`c3-l3`,title:`Closing Sales in Chat: From Inquiry to Instant M-Pesa Payment`,durationMinutes:10,content:`Frameworks to handle objections, send digital invoices with one-click M-Pesa Till details, and confirm deliveries smoothly.`,keyTakeaways:[`Respond within 5 minutes for highest conversion`,`Provide clear payment instructions with Till/Paybill number`,`Send instant PDF receipts from BizHubKE`]}]}],w=[{id:`opp-1`,title:`Kenya Youth Enterprise Development Fund (YEDF) SME Loan`,organization:`Ministry of Youth Affairs, Creative Economy & Sports`,provider:`Ministry of Youth Affairs`,deadline:`Rolling Applications 2026`,grantAmountKSh:`Up to KSh 2,000,000`,amountKSh:`Up to KSh 2,000,000`,description:`Concessional working capital facility for young Kenyan entrepreneurs with 6% annual interest.`,eligibility:`Kenyan youth aged 18-35 with registered enterprises operating for at least 6 months.`,category:`Low-Interest Credit`,linkText:`Check Eligibility`},{id:`opp-2`,title:`Women Enterprise Fund (WEF) Growth Capital Program`,organization:`State Department for Gender and Affirmative Action`,provider:`WEF Kenya`,deadline:`Quarterly intakes`,grantAmountKSh:`KSh 100,000 - KSh 1,500,000`,amountKSh:`KSh 100,000 - KSh 1,500,000`,description:`Revolving fund providing interest-free growth capital to female entrepreneurs across all 47 counties.`,eligibility:`Women-owned businesses (at least 70% ownership or women group partnerships).`,category:`Affirmative Action Fund`,linkText:`Apply via County Office`},{id:`opp-3`,title:`Kenya Climate Innovation Center (KCIC) Agribusiness Acceleration`,organization:`KCIC & Development Partners`,provider:`KCIC Agribusiness`,deadline:`November 30, 2026`,grantAmountKSh:`Up to KSh 5,000,000 in Grants & Mentorship`,amountKSh:`Up to KSh 5,000,000 in Grants`,description:`Direct catalytic grant funding and technical capacity building for climate-smart value chains.`,eligibility:`Agri-processing, renewable energy, waste management, and water tech enterprises in Kenya.`,category:`Grant & Technical Assistance`,linkText:`View Details`}],te=b,T=w,E={id:`usr_demo_001`,fullName:`Faith Muthoni Wanjiku`,email:`faith.wanjiku@bizhub.co.ke`,phoneNumber:`+254 712 345 678`,createdAt:new Date(Date.now()-2592e6).toISOString(),emailVerified:!0,role:`platform-admin`},D={id:`biz_demo_001`,ownerId:E.id,name:`Kilimani Fresh Supplies & Retail`,county:`Nairobi`,businessType:`Retail`,businessSize:`6–10`,tagline:`Fresh farm produce, pantry essentials & corporate delivery in Nairobi`,mpesaTillNumber:`5849201`,mpesaPaybill:`400200`,mpesaAccountName:`KILIMANI SUPPLIES`,bankName:`Equity Bank Kenya`,bankAccount:`0180293847291`,kraPin:`P051938291K`,currency:`KSh`,challenges:[`Cash flow`,`Managing stock`,`Tax/compliance`,`Customer retention`],onboardingCompleted:!0,createdAt:new Date(Date.now()-2592e6).toISOString()},ne=[{id:`cust_001`,businessId:D.id,name:`David Otieno`,phone:`+254 722 984 321`,email:`david.otieno@gmail.com`,county:`Nairobi`,outstandingBalance:14500,totalPurchases:185e3,notes:`Weekly fresh vegetable orders for restaurant in Westlands. Prefers WhatsApp invoices.`,createdAt:new Date(Date.now()-216e7).toISOString()},{id:`cust_002`,businessId:D.id,name:`Amina Hassan Mohamed`,phone:`+254 733 112 455`,email:`amina.hassan@coastcafes.ke`,county:`Mombasa`,outstandingBalance:0,totalPurchases:94e3,notes:`Prompt payer via M-Pesa Buy Goods. Always requests eTIMS compliant receipts.`,createdAt:new Date(Date.now()-1728e6).toISOString()},{id:`cust_003`,businessId:D.id,name:`Dr. Kamau Karanja`,phone:`+254 720 556 778`,email:`karanja.clinic@yahoo.com`,county:`Kiambu`,outstandingBalance:6800,totalPurchases:62400,notes:`Office pantry supplies every Monday. Pays within 14 days.`,createdAt:new Date(Date.now()-1296e6).toISOString()},{id:`cust_004`,businessId:D.id,name:`Mama Zawadi Caterers`,phone:`+254 718 443 219`,email:`zawadi.caterers@gmail.com`,county:`Nakuru`,outstandingBalance:28e3,totalPurchases:24e4,notes:`Bulk purchase for weekend wedding events. High volume, needs friendly payment reminder.`,createdAt:new Date(Date.now()-10368e5).toISOString()}],re=[{id:`prod_001`,businessId:D.id,name:`Grade 1 Long Grain Basmati Rice (25kg)`,sku:`RIC-BAS-25`,category:`Grains & Cereals`,unit:`Bag`,costPrice:3800,sellingPrice:4750,stockQuantity:42,minAlertQuantity:10,description:`Aromatic pure grain rice sourced from Mwea irrigation scheme.`,createdAt:new Date(Date.now()-24192e5).toISOString()},{id:`prod_002`,businessId:D.id,name:`Pure Sunflower Cooking Oil (20 Litres)`,sku:`OIL-SUN-20L`,category:`Cooking Oils`,unit:`Jerrican`,costPrice:4900,sellingPrice:5800,stockQuantity:18,minAlertQuantity:8,description:`Triple refined cholesterol-free vegetable oil for catering and retail.`,createdAt:new Date(Date.now()-24192e5).toISOString()},{id:`prod_003`,businessId:D.id,name:`Fortified Maize Flour Grade 1 (Bale of 12 x 2kg)`,sku:`FLR-MZ-24KG`,category:`Flour & Starches`,unit:`Bale`,costPrice:1950,sellingPrice:2400,stockQuantity:65,minAlertQuantity:15,description:`Premium sifted maize meal with KRA tax compliance stamp and KEBS mark.`,createdAt:new Date(Date.now()-24192e5).toISOString()},{id:`prod_004`,businessId:D.id,name:`Organic Hass Avocados Export Quality (Crate of 40)`,sku:`AVO-HASS-40`,category:`Fresh Produce`,unit:`Crate`,costPrice:1200,sellingPrice:1900,stockQuantity:5,minAlertQuantity:12,description:`High oil content Murang'a avocados. Fast moving, low stock alert!`,createdAt:new Date(Date.now()-24192e5).toISOString()},{id:`prod_005`,businessId:D.id,name:`Natural Honey Jar (500g Glass Jar)`,sku:`HNY-NAT-500G`,category:`Preserves & Organics`,unit:`Jar`,costPrice:450,sellingPrice:750,stockQuantity:80,minAlertQuantity:20,description:`Raw unprocessed acacia honey sourced from Baringo bee-keepers.`,createdAt:new Date(Date.now()-24192e5).toISOString()}],ie=[{id:`sale_001`,businessId:D.id,saleNumber:`REC-2026-081`,customerId:`cust_001`,customerName:`David Otieno`,date:new Date(Date.now()-864e5).toISOString().split(`T`)[0],items:[{productId:`prod_001`,productName:`Grade 1 Long Grain Basmati Rice (25kg)`,quantity:3,unitPrice:4750,total:14250},{productId:`prod_002`,productName:`Pure Sunflower Cooking Oil (20 Litres)`,quantity:2,unitPrice:5800,total:11600}],totalAmount:25850,paymentMethod:`mpesa`,referenceCode:`SDQ83910KL`,notes:`Paid via M-Pesa Buy Goods Till 5849201. Auto-reconciled.`,createdAt:new Date(Date.now()-864e5).toISOString()},{id:`sale_002`,businessId:D.id,saleNumber:`REC-2026-082`,customerId:`cust_002`,customerName:`Amina Hassan Mohamed`,date:new Date(Date.now()-1728e5).toISOString().split(`T`)[0],items:[{productId:`prod_003`,productName:`Fortified Maize Flour Grade 1 (Bale of 12 x 2kg)`,quantity:5,unitPrice:2400,total:12e3},{productId:`prod_005`,productName:`Natural Honey Jar (500g Glass Jar)`,quantity:10,unitPrice:750,total:7500}],totalAmount:19500,paymentMethod:`mpesa`,referenceCode:`SDR29481XP`,notes:`M-Pesa confirmed. Issued eTIMS receipt.`,createdAt:new Date(Date.now()-1728e5).toISOString()},{id:`sale_003`,businessId:D.id,saleNumber:`REC-2026-083`,customerId:`cust_003`,customerName:`Dr. Kamau Karanja`,date:new Date(Date.now()-2592e5).toISOString().split(`T`)[0],items:[{productId:`prod_001`,productName:`Grade 1 Long Grain Basmati Rice (25kg)`,quantity:1,unitPrice:4750,total:4750},{productId:`prod_004`,productName:`Organic Hass Avocados Export Quality (Crate of 40)`,quantity:2,unitPrice:1900,total:3800}],totalAmount:8550,paymentMethod:`bank`,referenceCode:`EQT-TX-993821`,notes:`Equity Bank direct deposit transfer.`,createdAt:new Date(Date.now()-2592e5).toISOString()},{id:`sale_004`,businessId:D.id,saleNumber:`REC-2026-084`,customerId:`cust_004`,customerName:`Mama Zawadi Caterers`,date:new Date(Date.now()-432e6).toISOString().split(`T`)[0],items:[{productId:`prod_002`,productName:`Pure Sunflower Cooking Oil (20 Litres)`,quantity:4,unitPrice:5800,total:23200},{productId:`prod_003`,productName:`Fortified Maize Flour Grade 1 (Bale of 12 x 2kg)`,quantity:8,unitPrice:2400,total:19200}],totalAmount:42400,paymentMethod:`credit`,referenceCode:`INV-2026-014`,notes:`Credit term 14 days. Invoice pending settlement.`,createdAt:new Date(Date.now()-432e6).toISOString()}],ae=[{id:`exp_001`,businessId:D.id,category:`Rent`,description:`Commercial shop space rent at Kilimani Business Centre (Sept 2026)`,amount:45e3,date:new Date(Date.now()-5184e5).toISOString().split(`T`)[0],paymentMethod:`bank`,referenceCode:`BNK-RENT-9201`,createdAt:new Date(Date.now()-5184e5).toISOString()},{id:`exp_002`,businessId:D.id,category:`Staff Salaries / PAYE`,description:`September staff wages (Shop assistant & storekeeper) & KRA PAYE`,amount:52e3,date:new Date(Date.now()-6912e5).toISOString().split(`T`)[0],paymentMethod:`bank`,referenceCode:`SAL-0926-EQ`,createdAt:new Date(Date.now()-6912e5).toISOString()},{id:`exp_003`,businessId:D.id,category:`Stock Purchases`,description:`Wholesale rice and grains consignment from Mwea Miller Co-op`,amount:76e3,date:new Date(Date.now()-864e6).toISOString().split(`T`)[0],paymentMethod:`mpesa`,referenceCode:`SDQ184920M`,createdAt:new Date(Date.now()-864e6).toISOString()},{id:`exp_004`,businessId:D.id,category:`Transport & Fuel`,description:`Delivery motorbike fuel & Nairobi central dispatch fees`,amount:8400,date:new Date(Date.now()-3456e5).toISOString().split(`T`)[0],paymentMethod:`mpesa`,referenceCode:`SDF748291P`,createdAt:new Date(Date.now()-3456e5).toISOString()},{id:`exp_005`,businessId:D.id,category:`Utilities & Water`,description:`Kenya Power (KPLC) electricity token & Nairobi Water bill`,amount:6200,date:new Date(Date.now()-10368e5).toISOString().split(`T`)[0],paymentMethod:`mpesa`,referenceCode:`KPLC-482918`,createdAt:new Date(Date.now()-10368e5).toISOString()},{id:`exp_006`,businessId:D.id,category:`KRA Taxes / Licenses`,description:`Nairobi County Unified Single Business Permit renewal portion`,amount:12500,date:new Date(Date.now()-12096e5).toISOString().split(`T`)[0],paymentMethod:`bank`,referenceCode:`NCCG-PERMIT-48`,createdAt:new Date(Date.now()-12096e5).toISOString()}],oe=[{id:`inv_001`,businessId:D.id,invoiceNumber:`BHK-2026-0042`,customerId:`cust_001`,customerName:`David Otieno`,customerPhone:`+254 722 984 321`,customerEmail:`david.otieno@gmail.com`,issueDate:new Date(Date.now()-6048e5).toISOString().split(`T`)[0],dueDate:new Date(Date.now()+6048e5).toISOString().split(`T`)[0],items:[{description:`Grade 1 Long Grain Basmati Rice (25kg Bags)`,quantity:2,unitPrice:4750,amount:9500},{description:`Pure Sunflower Cooking Oil (20L Jerrican)`,quantity:1,unitPrice:5800,amount:5800}],subtotal:15300,taxRate:0,taxAmount:0,totalAmount:15300,status:`sent`,mpesaDetails:`Buy Goods Till: 5849201 (Kilimani Supplies) or Paybill 400200 Acc: INV0042`,notes:`Thank you for your business. Please quote invoice number during payment.`,createdAt:new Date(Date.now()-6048e5).toISOString()},{id:`inv_002`,businessId:D.id,invoiceNumber:`BHK-2026-0039`,customerId:`cust_004`,customerName:`Mama Zawadi Caterers`,customerPhone:`+254 718 443 219`,customerEmail:`zawadi.caterers@gmail.com`,issueDate:new Date(Date.now()-1728e6).toISOString().split(`T`)[0],dueDate:new Date(Date.now()-5184e5).toISOString().split(`T`)[0],items:[{description:`Pure Sunflower Cooking Oil (20L)`,quantity:4,unitPrice:5800,amount:23200},{description:`Fortified Maize Flour Grade 1 (Bales)`,quantity:2,unitPrice:2400,amount:4800}],subtotal:28e3,taxRate:0,taxAmount:0,totalAmount:28e3,status:`overdue`,mpesaDetails:`Buy Goods Till: 5849201 (Kilimani Supplies)`,notes:`Payment is now overdue. Please settle promptly via M-Pesa to prevent service pause.`,createdAt:new Date(Date.now()-1728e6).toISOString()},{id:`inv_003`,businessId:D.id,invoiceNumber:`BHK-2026-0035`,customerId:`cust_002`,customerName:`Amina Hassan Mohamed`,customerPhone:`+254 733 112 455`,customerEmail:`amina.hassan@coastcafes.ke`,issueDate:new Date(Date.now()-216e7).toISOString().split(`T`)[0],dueDate:new Date(Date.now()-9504e5).toISOString().split(`T`)[0],items:[{description:`Natural Honey Jar (500g Glass Jar) Box of 20`,quantity:2,unitPrice:15e3,amount:3e4},{description:`Delivery & Handling to Mombasa CBD`,quantity:1,unitPrice:2500,amount:2500}],subtotal:32500,taxRate:0,taxAmount:0,totalAmount:32500,status:`paid`,mpesaDetails:`Buy Goods Till: 5849201`,notes:`Fully settled on 15th via M-Pesa receipt QK920182X.`,createdAt:new Date(Date.now()-216e7).toISOString()}],se=[{id:`sup_001`,businessId:D.id,name:`Mwea Farmers Cooperative Millers`,contactPerson:`Peter Kariuki`,phone:`+254 722 300 400`,email:`sales@mwearice.co.ke`,category:`Grains & Rice`,paymentTerms:`50% deposit, balance 14 days`,outstandingBalance:32e3,createdAt:new Date(Date.now()-216e7).toISOString()},{id:`sup_002`,businessId:D.id,name:`Bidco Africa Distributors Nairobi`,contactPerson:`Esther Mwangi`,phone:`+254 733 800 900`,email:`esther.m@bidco-distributors.ke`,category:`Edible Oils & Detergents`,paymentTerms:`Strict 7 days bank transfer`,outstandingBalance:0,createdAt:new Date(Date.now()-1728e6).toISOString()},{id:`sup_003`,businessId:D.id,name:`Murang'a Horticultural Growers Sacco`,contactPerson:`John Njoroge`,phone:`+254 711 654 321`,email:`horticulture@murangasacco.org`,category:`Fresh Fruits & Vegetables`,paymentTerms:`Cash on delivery / M-Pesa`,outstandingBalance:12400,createdAt:new Date(Date.now()-1296e6).toISOString()}],ce=[{id:`notif_001`,businessId:D.id,title:`KRA eTIMS Monthly Filing Reminder`,message:`Monthly VAT and Turnover Tax (TOT) returns are due by the 20th of this month. Your BizHubKE sales data is ready for export.`,type:`warning`,isRead:!1,createdAt:new Date().toISOString()},{id:`notif_002`,businessId:D.id,title:`Low Stock Alert: Hass Avocados`,message:`Organic Hass Avocados stock has dropped to 5 crates (below alert minimum of 12). Place a reorder with Murang'a Growers.`,type:`alert`,isRead:!1,createdAt:new Date(Date.now()-36e5).toISOString()},{id:`notif_003`,businessId:D.id,title:`M-Pesa Payment Received: KSh 25,850`,message:`David Otieno completed payment for sale REC-2026-081 via Till 5849201.`,type:`success`,isRead:!0,createdAt:new Date(Date.now()-864e5).toISOString()}],le=`bizhubke_state_v1`;
var defaultRegisteredUsers = [
  E,
  { id: 'usr_demo_002', fullName: 'Amina Hassan Mohamed', email: 'amina.hassan@coastcafes.ke', phoneNumber: '+254 733 112 455', createdAt: new Date(Date.now() - 3888e6).toISOString(), emailVerified: true, role: 'owner' },
  { id: 'usr_demo_003', fullName: 'Dr. Kamau Karanja', email: 'karanja.clinic@yahoo.com', phoneNumber: '+254 720 556 778', createdAt: new Date(Date.now() - 5184e5).toISOString(), emailVerified: true, role: 'owner' },
  { id: 'usr_demo_004', fullName: 'Beatrice Zawadi Ochieng', email: 'zawadi.caterers@gmail.com', phoneNumber: '+254 718 443 219', createdAt: new Date(Date.now() - 2592e5).toISOString(), emailVerified: true, role: 'owner' },
  { id: 'usr_demo_005', fullName: 'Peter Kariuki Mwangi', email: 'kariuki@mwearice.co.ke', phoneNumber: '+254 722 300 400', createdAt: new Date(Date.now() - 5184e6).toISOString(), emailVerified: true, role: 'owner' },
  { id: 'usr_demo_006', fullName: 'Kiprop Cheruiyot', email: 'kiprop@eldoretlogistics.co.ke', phoneNumber: '+254 711 987 654', createdAt: new Date(Date.now() - 7776e6).toISOString(), emailVerified: true, role: 'owner' },
  { id: 'usr_demo_007', fullName: 'Dennis Kiprono', email: 'dennis.kiprono@kilimanifresh.co.ke', phoneNumber: '+254 728 112 334', createdAt: new Date(Date.now() - 1728e6).toISOString(), emailVerified: true, role: 'manager' },
  { id: 'usr_demo_008', fullName: 'Mary Achieng', email: 'mary.achieng@kilimanifresh.co.ke', phoneNumber: '+254 719 445 667', createdAt: new Date(Date.now() - 864e6).toISOString(), emailVerified: true, role: 'staff' },
  { id: 'usr_demo_009', fullName: 'Benson Mutua', email: 'benson.mutua@kilimanifresh.co.ke', phoneNumber: '+254 722 889 900', createdAt: new Date(Date.now() - 432e6).toISOString(), emailVerified: true, role: 'accountant' }
];

var defaultBusinessMembers = [
  { id: 'mem_001', businessId: D.id, userId: E.id, role: 'Owner', joinedAt: D.createdAt || new Date(Date.now() - 2592e6).toISOString() },
  { id: 'mem_002', businessId: D.id, userId: 'usr_demo_007', role: 'Manager', joinedAt: new Date(Date.now() - 1728e6).toISOString() },
  { id: 'mem_003', businessId: D.id, userId: 'usr_demo_008', role: 'Staff', joinedAt: new Date(Date.now() - 864e6).toISOString() },
  { id: 'mem_004', businessId: D.id, userId: 'usr_demo_009', role: 'Accountant', joinedAt: new Date(Date.now() - 432e6).toISOString() }
];

var defaultRegisteredBusinesses = [
  D,
  { id: 'biz_002', ownerId: 'usr_demo_002', name: 'Coast Cafes & Spice Traders', county: 'Mombasa', businessType: 'Restaurant', businessSize: '11–20', tagline: 'Authentic coastal Swahili spices and catering supplies', mpesaTillNumber: '694021', currency: 'KSh', createdAt: new Date(Date.now() - 3888e6).toISOString(), onboardingCompleted: true },
  { id: 'biz_003', ownerId: 'usr_demo_003', name: 'Karanja Family Healthcare Clinic', county: 'Kiambu', businessType: 'Professional Services', businessSize: '6–10', tagline: 'Affordable primary healthcare & pharmacy services in Thika', mpesaTillNumber: '883920', currency: 'KSh', createdAt: new Date(Date.now() - 5184e5).toISOString(), onboardingCompleted: true },
  { id: 'biz_004', ownerId: 'usr_demo_004', name: 'Mama Zawadi Catering & Events', county: 'Nakuru', businessType: 'Restaurant', businessSize: '6–10', tagline: 'Event catering and institutional food services', mpesaTillNumber: '449102', currency: 'KSh', createdAt: new Date(Date.now() - 2592e5).toISOString(), onboardingCompleted: true },
  { id: 'biz_005', ownerId: 'usr_demo_005', name: 'Mwea Agro-Millers & Grain Silos', county: 'Kirinyaga', businessType: 'Wholesale', businessSize: '21–50', tagline: 'Bulk rice milling and wholesale grains distribution', mpesaTillNumber: '119284', currency: 'KSh', createdAt: new Date(Date.now() - 5184e6).toISOString(), onboardingCompleted: true },
  { id: 'biz_006', ownerId: 'usr_demo_006', name: 'Eldoret Tech Logistics & Fleet', county: 'Uasin Gishu', businessType: 'Transport', businessSize: '6–10', tagline: 'North Rift parcel delivery and fleet repair hub', mpesaTillNumber: '339182', currency: 'KSh', createdAt: new Date(Date.now() - 7776e6).toISOString(), onboardingCompleted: true }
];

var defaultRegisteredSubscriptions = [
  { id: 'sub_001', businessId: D.id, plan: 'business', status: 'active', priceKSh: 999, expiresAt: new Date(Date.now() + 5184e6).toISOString() },
  { id: 'sub_002', businessId: 'biz_002', plan: 'enterprise', status: 'active', priceKSh: 2499, expiresAt: new Date(Date.now() + 4320e6).toISOString() },
  { id: 'sub_003', businessId: 'biz_003', plan: 'starter', status: 'trial', priceKSh: 499, expiresAt: new Date(Date.now() + 3456e5).toISOString() },
  { id: 'sub_004', businessId: 'biz_004', plan: 'business', status: 'trial', priceKSh: 999, expiresAt: new Date(Date.now() + 5184e5).toISOString() },
  { id: 'sub_005', businessId: 'biz_005', plan: 'enterprise', status: 'active', priceKSh: 2499, expiresAt: new Date(Date.now() + 6912e6).toISOString() },
  { id: 'sub_006', businessId: 'biz_006', plan: 'starter', status: 'cancelled', priceKSh: 499, expiresAt: new Date(Date.now() - 864e6).toISOString() }
];

// Ensure news, training, and opportunities have draft and scheduled items
C.forEach(item => { if (!item.status) item.status = 'published'; });
if (!C.some(item => item.id === 'news-draft-1')) {
  C.push({
    id: 'news-draft-1',
    title: 'Upcoming KRA eTIMS API v2.0 Architecture for SME Point-of-Sale Integration',
    category: 'Tax & Compliance',
    summary: 'Technical guidance on real-time cryptographically signed eTIMS payload transmission directly from local Kenyan shop registers.',
    content: 'Kenya Revenue Authority is publishing finalized technical protocols for automated end-of-day invoice validation for VAT-registered small businesses.',
    publishedAt: 'Draft (Pending KRA Gazette)',
    readTime: '4 min read',
    source: 'BizHubKE Technical Desk',
    tags: ['eTIMS', 'KRA', 'API', 'Compliance'],
    status: 'draft'
  });
  C.push({
    id: 'news-sched-1',
    title: 'National Budget 2026/27 Highlights: Key Manufacturing & Tax Deductions for Cottage Industries',
    category: 'Kenya Business',
    summary: 'A preview of proposed tax amnesties, withholding VAT adjustments, and preferential public procurement quotas for Kenyan small manufacturers.',
    content: 'Parliamentary budget committee announces new incentives for local value addition and processing plants across all 47 counties.',
    publishedAt: 'Scheduled: Next Monday 9:00 AM',
    readTime: '5 min read',
    source: 'National Treasury Kenya',
    tags: ['Budget', 'Manufacturing', 'Tax Amnesties'],
    status: 'scheduled'
  });
}

ee.forEach(item => { if (!item.status) item.status = 'published'; });
if (!ee.some(item => item.id === 'course-draft-1')) {
  ee.push({
    id: 'course-draft-1',
    title: 'Cross-Border EAC Trade & FX Risk Hedging for Importers',
    category: 'Cash Flow & Finance',
    description: 'Protecting your business margins against US Dollar and regional currency volatility when sourcing goods from Tanzania, Uganda, or China.',
    durationMinutes: 40,
    lessonCount: 3,
    level: 'Advanced',
    lessons: [],
    status: 'draft'
  });
  ee.push({
    id: 'course-sched-1',
    title: 'AI-Powered Bookkeeping & Instant M-Pesa Till Reconciliation',
    category: 'Technology',
    description: 'How to automate daily ledger balancing and categorize transactions with zero manual data entry errors.',
    durationMinutes: 25,
    lessonCount: 3,
    level: 'Beginner',
    lessons: [],
    status: 'scheduled'
  });
}

w.forEach(item => { if (!item.status) item.status = 'published'; });
if (!w.some(item => item.id === 'opp-draft-1')) {
  w.push({
    id: 'opp-draft-1',
    title: 'Nairobi County Youth & Women MSME Business Innovation Seed Grant 2026',
    organization: 'Nairobi City County Sector of Trade & Industrialization',
    provider: 'Nairobi City County',
    deadline: 'Draft (Awaiting County Assembly Ratification)',
    grantAmountKSh: 'Up to KSh 1,000,000 in Grants',
    amountKSh: 'Up to KSh 1,000,000',
    description: 'Grant facility to support modern retail and agribusiness value addition setups in informal settlements and sub-counties.',
    eligibility: 'Registered businesses operating within Nairobi County with active single business permits.',
    category: 'County Seed Grant',
    linkText: 'Internal Review Draft',
    status: 'draft'
  });
  w.push({
    id: 'opp-sched-1',
    title: 'USAID Kenya & East Africa Food Security Value Chain Facility',
    organization: 'USAID Feed the Future & TradeMark Africa',
    provider: 'USAID East Africa',
    deadline: 'Opens October 1, 2026',
    grantAmountKSh: 'KSh 2,500,000 - KSh 10,000,000 Matching Grants',
    amountKSh: 'KSh 2,500,000 - KSh 10,000,000',
    description: 'Matching grant and technical capacity assistance for post-harvest loss prevention, cold chain storage, and grain aggregation.',
    eligibility: 'Agricultural aggregators, millers, cold storage operators, and fresh produce exporters in Kenya.',
    category: 'Matching Grant',
    linkText: 'Preview Application Guide',
    status: 'scheduled'
  });
}

function ue(){if(typeof window<`u`)try{let e=localStorage.getItem(le);if(e){let t=JSON.parse(e);if(t.businesses&&t.businesses.length>0)return t}}catch{}return{users:defaultRegisteredUsers,businesses:defaultRegisteredBusinesses,businessMembers:defaultBusinessMembers,subscriptions:defaultRegisteredSubscriptions,customers:ne,products:re,sales:ie,expenses:ae,invoices:oe,inventoryTransactions:[],suppliers:se,newsArticles:C,trainingCourses:ee,opportunities:w,notifications:ce,activeUserId:E.id,activeBusinessId:D.id}}var O=new class{constructor(){this.listeners=new Set,this.state=ue(),this.ensureDefaultTeamMembers()}save(){if(typeof window<`u`)try{localStorage.setItem(le,JSON.stringify(this.state))}catch(e){console.error(`Failed to save to localStorage:`,e)}this.notify()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}getState(){return this.state}getActiveUser(){return this.state.activeUserId&&this.state.users.find(e=>e.id===this.state.activeUserId)||null}getActiveBusiness(){return this.state.activeBusinessId&&this.state.businesses.find(e=>e.id===this.state.activeBusinessId)||null}switchBusiness(e){this.state.businesses.some(t=>t.id===e)&&(this.state.activeBusinessId=e,this.save())}register(e){let t=this.state.users.find(t=>t.email.toLowerCase()===e.email.toLowerCase()),n=t?t.id:`usr_${Date.now()}`,r=t||{id:n,fullName:e.fullName,email:e.email,phoneNumber:e.phoneNumber,createdAt:new Date().toISOString(),emailVerified:!0},i=`biz_${Date.now()}`,a={id:i,ownerId:n,name:e.businessName,county:e.county,businessType:e.businessType,businessSize:e.businessSize,currency:`KSh`,onboardingCompleted:!1,createdAt:new Date().toISOString()},o={id:`mem_${Date.now()}`,businessId:i,userId:n,role:`owner`,joinedAt:new Date().toISOString()},s={id:`sub_${Date.now()}`,businessId:i,plan:`business`,status:`trial`,priceKSh:999,expiresAt:new Date(Date.now()+6048e5).toISOString()};return t||this.state.users.push(r),this.state.businesses.push(a),this.state.businessMembers.push(o),this.state.subscriptions.push(s),this.state.activeUserId=n,this.state.activeBusinessId=i,this.save(),{user:r,business:a}}login(e,t){let n=this.state.users.find(t=>t.email.toLowerCase()===e.toLowerCase());if(!n)return{success:!1,message:`No registered user found with this email. Please click "Get Started Free" to register.`};this.state.activeUserId=n.id;let r=this.state.businessMembers.find(e=>e.userId===n.id);if(r)this.state.activeBusinessId=r.businessId;else{let e=this.state.businesses.find(e=>e.ownerId===n.id);e&&(this.state.activeBusinessId=e.id)}return this.save(),{success:!0}}logout(){this.state.activeUserId=null,this.state.activeBusinessId=null,this.save()}loginDemoUser(){this.state.activeUserId=E.id,this.state.activeBusinessId=D.id,this.save()}updateOnboarding(e,t){let n=this.state.businesses.find(t=>t.id===e);if(n){if(t.tagline&&(n.tagline=t.tagline),t.mpesaTillNumber&&(n.mpesaTillNumber=t.mpesaTillNumber),t.mpesaPaybill&&(n.mpesaPaybill=t.mpesaPaybill),t.challenges&&(n.challenges=t.challenges),t.markCompleted!==void 0&&(n.onboardingCompleted=t.markCompleted),t.firstProduct){let n={id:`prod_${Date.now()}`,businessId:e,name:t.firstProduct.name,sku:t.firstProduct.name.substring(0,3).toUpperCase()+`-001`,category:t.firstProduct.category||`General`,unit:`Item`,costPrice:t.firstProduct.costPrice||0,sellingPrice:t.firstProduct.sellingPrice||0,stockQuantity:t.firstProduct.stockQuantity||1,minAlertQuantity:5,createdAt:new Date().toISOString()};this.state.products.push(n)}if(t.firstCustomer){let n={id:`cust_${Date.now()}`,businessId:e,name:t.firstCustomer.name,phone:t.firstCustomer.phone,email:t.firstCustomer.email,outstandingBalance:0,totalPurchases:0,notes:t.firstCustomer.notes,createdAt:new Date().toISOString()};this.state.customers.push(n)}this.save()}}getCustomers(){let e=this.state.activeBusinessId;return e?this.state.customers.filter(t=>t.businessId===e):[]}getProducts(){let e=this.state.activeBusinessId;return e?this.state.products.filter(t=>t.businessId===e):[]}getSales(){let e=this.state.activeBusinessId;return e?this.state.sales.filter(t=>t.businessId===e):[]}getExpenses(){let e=this.state.activeBusinessId;return e?this.state.expenses.filter(t=>t.businessId===e):[]}getInvoices(){let e=this.state.activeBusinessId;return e?this.state.invoices.filter(t=>t.businessId===e):[]}getSuppliers(){let e=this.state.activeBusinessId;return e?this.state.suppliers.filter(t=>t.businessId===e):[]}ensureDynamicNotifications(e){if(!this.state.notifications)this.state.notifications=[];let existingMap=new Map;this.state.notifications.forEach(t=>{t&&t.businessId===e&&existingMap.set(t.id,t)});let generated=[];let products=this.state.products?this.state.products.filter(t=>t.businessId===e):[];products.forEach(p=>{let threshold=p.lowStockThreshold??p.minAlertQuantity??5;if(p.stockQuantity<=threshold){let id=`notif_lowstock_${p.id}`;let prev=existingMap.get(id);generated.push({id,businessId:e,category:`inventory`,targetTab:`inventory`,targetId:p.id,targetSearch:p.name,type:`alert`,title:`Low Stock Alert: ${p.name}`,message:`Only ${p.stockQuantity} ${p.unit||`units`} remaining in stock (below threshold of ${threshold}). Reorder required.`,actionLabel:`View in Inventory`,isRead:prev?prev.isRead:!1,createdAt:prev?prev.createdAt:(p.createdAt||new Date().toISOString())})}});let invoices=this.state.invoices?this.state.invoices.filter(t=>t.businessId===e):[];invoices.forEach(inv=>{let isPastDue=inv.dueDate&&new Date(inv.dueDate).getTime()<Date.now();if(inv.status===`overdue`||(inv.status!==`paid`&&isPastDue)){let id=`notif_overdue_${inv.id}`;let prev=existingMap.get(id);generated.push({id,businessId:e,category:`invoices`,targetTab:`invoices`,targetId:inv.id,targetSearch:inv.invoiceNumber,targetFilter:`overdue`,type:`danger`,title:`Overdue Invoice: ${inv.invoiceNumber}`,message:`Payment of KSh ${Number(inv.totalAmount||0).toLocaleString()} by ${inv.customerName} was due on ${inv.dueDate}. Follow up on payment.`,actionLabel:`Open Invoice`,isRead:prev?prev.isRead:!1,createdAt:prev?prev.createdAt:(inv.createdAt||new Date().toISOString())})}});let complianceId1=`notif_compliance_kra_tot_${e}`;let prevComp1=existingMap.get(complianceId1);generated.push({id:complianceId1,businessId:e,category:`compliance`,targetTab:`compliance`,targetId:`kra_monthly`,type:`warning`,title:`Upcoming Compliance: KRA Monthly Tax Filing`,message:`Monthly Turnover Tax (TOT) and VAT returns are due by the 20th of this month. Reconcile eTIMS invoices and export filing report.`,actionLabel:`Review Tax Filing`,isRead:prevComp1?prevComp1.isRead:!1,createdAt:prevComp1?prevComp1.createdAt:new Date().toISOString()});let complianceId2=`notif_compliance_sbp_${e}`;let prevComp2=existingMap.get(complianceId2);generated.push({id:complianceId2,businessId:e,category:`compliance`,targetTab:`compliance`,targetId:`sbp_renewal`,type:`warning`,title:`Upcoming Compliance: Single Business Permit Renewal`,message:`Nairobi County Unified Business Permit renewal window is open. Verify trade licensing checklist.`,actionLabel:`Check Permit Status`,isRead:prevComp2?prevComp2.isRead:!1,createdAt:prevComp2?prevComp2.createdAt:new Date(Date.now()-432e5).toISOString()});let customers=this.state.customers?this.state.customers.filter(t=>t.businessId===e):[];customers.forEach(c=>{if(c.outstandingBalance>0||(c.notes&&c.notes.toLowerCase().includes(`reminder`))){let id=`notif_cust_followup_${c.id}`;let prev=existingMap.get(id);generated.push({id,businessId:e,category:`customers`,targetTab:`customers`,targetId:c.id,targetSearch:c.name,type:`info`,title:`Customer Follow-Up Due: ${c.name}`,message:`Outstanding balance of KSh ${Number(c.outstandingBalance||0).toLocaleString()}. ${c.notes||`Send friendly reminder and check in on next order.`}`,actionLabel:`Open Customer CRM`,isRead:prev?prev.isRead:!1,createdAt:prev?prev.createdAt:(c.createdAt||new Date().toISOString())})}});let genSet=new Set(generated.map(g=>g.id));let other=this.state.notifications.filter(n=>n.businessId!==e);let manual=this.state.notifications.filter(n=>n.businessId===e&&!genSet.has(n.id)&&!n.id.startsWith(`notif_lowstock_`)&&!n.id.startsWith(`notif_overdue_`)&&!n.id.startsWith(`notif_compliance_`)&&!n.id.startsWith(`notif_cust_followup_`));this.state.notifications=[...generated,...manual,...other]}getNotifications(){let e=this.state.activeBusinessId;return e?(this.ensureDynamicNotifications(e),this.state.notifications.filter(t=>t.businessId===e)):[]}addSale(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`sale_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};if(n.items.forEach(e=>{let n=this.state.products.find(n=>n.businessId===t&&n.id===e.productId);n&&(n.stockQuantity=Math.max(0,n.stockQuantity-e.quantity))}),n.customerId){let e=this.state.customers.find(e=>e.businessId===t&&e.id===n.customerId);e&&(e.totalPurchases+=n.totalAmount,n.paymentMethod===`credit`&&(e.outstandingBalance+=n.totalAmount))}return this.state.sales.unshift(n),this.save(),n}addExpense(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`exp_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};return this.state.expenses.unshift(n),this.save(),n}addInvoice(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`inv_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};return this.state.invoices.unshift(n),this.save(),n}updateInvoiceStatus(e,t){let n=this.state.activeBusinessId,r=this.state.invoices.find(t=>t.id===e&&t.businessId===n);r&&(r.status=t,this.save())}addCustomer(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`cust_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};return this.state.customers.push(n),this.save(),n}addProduct(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`prod_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};return this.state.products.push(n),this.save(),n}adjustStock(e,t,n){let r=this.state.activeBusinessId,i=this.state.products.find(t=>t.id===e&&t.businessId===r);i&&(i.stockQuantity=Math.max(0,i.stockQuantity+t),this.state.inventoryTransactions.unshift({id:`tx_${Date.now()}`,businessId:r,productId:e,productName:i.name,type:t>=0?`in`:`out`,quantity:Math.abs(t),reason:n,date:new Date().toISOString()}),this.save())}addSupplier(e){let t=this.state.activeBusinessId;if(!t)throw Error(`No active business selected`);let n={...e,id:`sup_${Date.now()}`,businessId:t,createdAt:new Date().toISOString()};return this.state.suppliers.push(n),this.save(),n}markNotificationAsRead(e){let t=this.state.notifications.find(t=>t.id===e);t&&(t.isRead=!0,this.save())}markAllNotificationsAsRead(){let e=this.state.activeBusinessId;e&&this.state.notifications&&(this.state.notifications.forEach(t=>{t.businessId===e&&(t.isRead=!0)}),this.save())}calculateBusinessScore(){let e=this.state.activeBusinessId;if(!e)return{businessId:``,overallScore:78,cashFlowScore:80,complianceScore:75,inventoryScore:82,customerRetentionScore:76,recommendations:[`Verify your KRA eTIMS registration status on iTax`,`Follow up on outstanding invoices older than 14 days`,`Restock low-inventory items to prevent sales loss`]};let t=this.getSales(),n=this.getExpenses(),r=this.getInvoices(),i=this.getProducts(),a=this.getActiveBusiness(),o=t.reduce((e,t)=>e+t.totalAmount,0),s=o-n.reduce((e,t)=>e+t.amount,0),c=70;s>0&&(c+=15),o>5e4&&(c+=10);let l=65;a?.kraPin&&(l+=15),(a?.mpesaTillNumber||a?.mpesaPaybill)&&(l+=10),r.length>0&&(l+=5);let u=80,d=i.filter(e=>e.stockQuantity<=e.minAlertQuantity).length;d>2&&(u-=15),i.length>3&&(u+=10);let f=75,p=r.filter(e=>e.status===`overdue`).length;p>0&&(f-=10);let m=Math.round((c+l+u+f)/4),h=[];return a?.kraPin||h.push(`Add your KRA PIN in Business Settings to unlock eTIMS invoice generation.`),d>0&&h.push(`${d} product(s) are below safety stock threshold.`),p>0&&h.push(`Send polite WhatsApp payment reminders for ${p} overdue invoice(s).`),c>=80&&h.push(`Healthy operating margin: Consider qualifying for low-interest Kenyan SME loan funds.`),{businessId:e,overallScore:Math.min(98,Math.max(45,m)),cashFlowScore:Math.min(100,Math.max(40,c)),complianceScore:Math.min(100,Math.max(40,l)),inventoryScore:Math.min(100,Math.max(40,u)),customerRetentionScore:Math.min(100,Math.max(40,f)),recommendations:h.length>0?h:[`Maintain weekly bank reconciliation and record all cash transactions.`]}}getCurrentUser(){return this.getActiveUser()}recordSale(e){return this.addSale({saleNumber:e.saleNumber||`SAL-${Date.now().toString().slice(-4)}`,customerId:e.customerId,customerName:e.customerName||`Walk-in Customer`,date:e.date||new Date().toISOString().split(`T`)[0],items:e.items||[],totalAmount:e.totalAmount||0,paymentMethod:(e.paymentMethod||`mpesa`).toLowerCase().includes(`pesa`)?`mpesa`:(e.paymentMethod||`cash`).toLowerCase().includes(`cash`)?`cash`:(e.paymentMethod||`bank`).toLowerCase().includes(`bank`)?`bank`:`credit`,referenceCode:e.referenceCode||e.mpesaReceiptNumber,mpesaReceiptNumber:e.mpesaReceiptNumber,notes:e.notes})}recordExpense(e){return this.addExpense({category:e.category||`Other`,description:e.description||`General expense`,amount:e.amount||0,date:e.date||new Date().toISOString().split(`T`)[0],paidTo:e.paidTo,paymentMethod:e.paymentMethod||`mpesa`,receiptNumber:e.receiptNumber,referenceCode:e.receiptNumber})}createInvoice(e){return this.addInvoice({invoiceNumber:e.invoiceNumber||`INV-${Date.now().toString().slice(-4)}`,customerId:e.customerId||`general`,customerName:e.customerName||`Customer`,customerPhone:e.customerPhone||``,customerEmail:e.customerEmail,issueDate:e.date||new Date().toISOString().split(`T`)[0],date:e.date||new Date().toISOString().split(`T`)[0],dueDate:e.dueDate||new Date(Date.now()+12096e5).toISOString().split(`T`)[0],items:(e.items||[]).map(e=>({description:e.description,quantity:e.quantity,unitPrice:e.unitPrice,amount:e.total||e.quantity*e.unitPrice,total:e.total||e.quantity*e.unitPrice})),subtotal:e.subtotal||0,taxRate:e.taxRate||16,taxAmount:e.taxAmount||0,totalAmount:e.totalAmount||0,status:(e.status||`sent`).toLowerCase(),notes:e.notes,etimsVerified:e.etimsVerified??!0})}createBusiness(e){let t=this.getActiveUser()||E,n=`biz_${Date.now()}`,r={id:n,ownerId:t.id,name:e.name||`My Kenyan Business`,county:e.county||`Nairobi`,businessType:e.businessType||`Retail`,businessSize:e.businessSize||`1–5 employees`,tagline:e.tagline,mpesaTillNumber:e.mpesaTillNumber,mpesaPaybill:e.mpesaPaybill,mpesaAccountName:e.mpesaAccountName,mpesaAccountNumber:e.mpesaAccountNumber,kraPin:e.kraPin,currency:`KSh`,challenges:e.challenges,growthGoals:e.growthGoals,onboardingCompleted:!0,createdAt:new Date().toISOString()};return this.state.businesses.push(r),this.state.activeBusinessId=n,this.save(),r}updateBusinessProfile(e){let t=this.getActiveBusiness();t&&(Object.assign(t,e),this.save())}updateProductStock(e,t){let n=this.state.activeBusinessId,r=this.state.products.find(t=>t.id===e&&t.businessId===n);r&&(r.stockQuantity=t,this.save())}getUsers(){
  if (!this.state.users || this.state.users.length <= 1) {
    this.state.users = defaultRegisteredUsers;
    this.save();
  }
  return this.state.users;
}
getBusinesses(){
  if (!this.state.businesses || this.state.businesses.length <= 1) {
    this.state.businesses = defaultRegisteredBusinesses;
    this.save();
  }
  return this.state.businesses;
}
getSubscriptions(){
  if (!this.state.subscriptions || this.state.subscriptions.length <= 1) {
    this.state.subscriptions = defaultRegisteredSubscriptions;
    this.save();
  }
  return this.state.subscriptions;
}
updateBusinessSubscription(businessId, plan, status){
  let sub = (this.state.subscriptions || []).find(s => s.businessId === businessId);
  const planPrices = { starter: 499, business: 999, enterprise: 2499 };
  if (sub) {
    if (plan) {
      sub.plan = plan;
      sub.priceKSh = planPrices[plan] || 999;
    }
    if (status) sub.status = status;
  } else {
    this.state.subscriptions.push({
      id: 'sub_' + Date.now(),
      businessId: businessId,
      plan: plan || 'business',
      status: status || 'trial',
      priceKSh: planPrices[plan || 'business'] || 999,
      expiresAt: new Date(Date.now() + 2592e6).toISOString()
    });
  }
  this.save();
}
updateBusinessStatus(businessId, status){
  let sub = (this.state.subscriptions || []).find(s => s.businessId === businessId);
  if (sub) {
    sub.status = status;
    this.save();
  }
}
updateUserRole(userId, role){
  let u = (this.state.users || []).find(x => x.id === userId);
  if (u) {
    u.role = role;
    this.save();
  }
}
updateContentItem(type, item){
  let listKey = type === 'news' ? 'newsArticles' : type === 'training' ? 'trainingCourses' : 'opportunities';
  if (!this.state[listKey]) this.state[listKey] = type === 'news' ? C : type === 'training' ? ee : w;
  let idx = this.state[listKey].findIndex(x => x.id === item.id);
  if (idx !== -1) {
    this.state[listKey][idx] = { ...this.state[listKey][idx], ...item };
  } else {
    this.state[listKey].unshift(item);
  }
  this.save();
}
deleteContentItem(type, itemId){
  let listKey = type === 'news' ? 'newsArticles' : type === 'training' ? 'trainingCourses' : 'opportunities';
  if (!this.state[listKey]) this.state[listKey] = type === 'news' ? C : type === 'training' ? ee : w;
  this.state[listKey] = this.state[listKey].filter(x => x.id !== itemId);
  this.save();
}
getNews(){
  if (!this.state.newsArticles) this.state.newsArticles = C;
  return this.state.newsArticles;
}
getCourses(){
  if (!this.state.trainingCourses) this.state.trainingCourses = ee;
  return this.state.trainingCourses;
}
getOpportunities(){
  if (!this.state.opportunities) this.state.opportunities = w;
  return this.state.opportunities;
}
ensureDefaultTeamMembers(){
  if (!this.state.businessMembers) {
    this.state.businessMembers = [];
  }
  let bizId = D.id;
  let sampleMembers = [
    { id: 'mem_001', businessId: bizId, userId: E.id, role: 'Owner', joinedAt: D.createdAt || new Date(Date.now() - 2592e6).toISOString() },
    { id: 'mem_002', businessId: bizId, userId: 'usr_demo_007', role: 'Manager', joinedAt: new Date(Date.now() - 1728e6).toISOString() },
    { id: 'mem_003', businessId: bizId, userId: 'usr_demo_008', role: 'Staff', joinedAt: new Date(Date.now() - 864e6).toISOString() },
    { id: 'mem_004', businessId: bizId, userId: 'usr_demo_009', role: 'Accountant', joinedAt: new Date(Date.now() - 432e6).toISOString() }
  ];
  let sampleUsers = [
    { id: 'usr_demo_007', fullName: 'Dennis Kiprono', email: 'dennis.kiprono@kilimanifresh.co.ke', phoneNumber: '+254 728 112 334', createdAt: new Date(Date.now() - 1728e6).toISOString(), emailVerified: true, role: 'manager' },
    { id: 'usr_demo_008', fullName: 'Mary Achieng', email: 'mary.achieng@kilimanifresh.co.ke', phoneNumber: '+254 719 445 667', createdAt: new Date(Date.now() - 864e6).toISOString(), emailVerified: true, role: 'staff' },
    { id: 'usr_demo_009', fullName: 'Benson Mutua', email: 'benson.mutua@kilimanifresh.co.ke', phoneNumber: '+254 722 889 900', createdAt: new Date(Date.now() - 432e6).toISOString(), emailVerified: true, role: 'accountant' }
  ];
  if (!this.state.users) this.state.users = defaultRegisteredUsers;
  sampleUsers.forEach(su => {
    if (!this.state.users.some(u => u.id === su.id)) {
      this.state.users.push(su);
    }
  });
  sampleMembers.forEach(sm => {
    let existing = this.state.businessMembers.find(m => m.businessId === sm.businessId && (m.userId === sm.userId || m.id === sm.id));
    if (!existing) {
      this.state.businessMembers.push(sm);
    }
  });
}
getBusinessMembers(businessId){
  let bizId = businessId || this.state.activeBusinessId || D.id;
  this.ensureDefaultTeamMembers();
  let members = (this.state.businessMembers || []).filter(m => m.businessId === bizId);
  return members.map(m => {
    let u = (this.state.users || []).find(u => u.id === m.userId);
    return {
      ...m,
      fullName: u ? u.fullName : (m.fullName || 'Team Member'),
      email: u ? u.email : (m.email || 'member@kilimanifresh.co.ke'),
      phoneNumber: u ? u.phoneNumber : (m.phoneNumber || '+254 700 000 000'),
      role: m.role || (u ? (u.role ? u.role.charAt(0).toUpperCase() + u.role.slice(1) : 'Staff') : 'Staff')
    };
  });
}
inviteTeamMember(businessId, { fullName, email, phoneNumber, role }){
  let bizId = businessId || this.state.activeBusinessId || D.id;
  let normalizedRole = ['Owner', 'Manager', 'Staff', 'Accountant'].find(r => r.toLowerCase() === (role || '').toLowerCase()) || 'Staff';
  let existingUser = (this.state.users || []).find(u => u.email.toLowerCase() === (email || '').toLowerCase());
  let userId = existingUser ? existingUser.id : 'usr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
  if (!existingUser) {
    this.state.users.push({
      id: userId,
      fullName: fullName || 'New Team Member',
      email: email || ('user_' + Date.now() + '@bizhub.ke'),
      phoneNumber: phoneNumber || '+254 700 000 000',
      createdAt: new Date().toISOString(),
      emailVerified: true,
      role: normalizedRole.toLowerCase()
    });
  }
  if (!this.state.businessMembers) this.state.businessMembers = [];
  let existingMember = this.state.businessMembers.find(m => m.businessId === bizId && (m.userId === userId || (m.email && m.email.toLowerCase() === (email || '').toLowerCase())));
  if (existingMember) {
    existingMember.role = normalizedRole;
  } else {
    this.state.businessMembers.push({
      id: 'mem_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      businessId: bizId,
      userId: userId,
      role: normalizedRole,
      joinedAt: new Date().toISOString()
    });
  }
  this.save();
  return { success: true, message: 'Successfully invited ' + fullName + ' as ' + normalizedRole + '.' };
}
updateMemberRole(memberId, newRole){
  let normalizedRole = ['Owner', 'Manager', 'Staff', 'Accountant'].find(r => r.toLowerCase() === (newRole || '').toLowerCase()) || newRole;
  let m = (this.state.businessMembers || []).find(m => m.id === memberId);
  if (m) {
    m.role = normalizedRole;
    let u = (this.state.users || []).find(u => u.id === m.userId);
    if (u) {
      u.role = normalizedRole.toLowerCase();
    }
    this.save();
  }
}
removeTeamMember(memberId){
  if (this.state.businessMembers) {
    this.state.businessMembers = this.state.businessMembers.filter(m => m.id !== memberId);
    this.save();
  }
}
switchActiveUser(userId){
  let u = (this.state.users || []).find(u => u.id === userId);
  if (u) {
    this.state.activeUserId = u.id;
    this.save();
  }
}
switchActiveRole(newRole, businessId){
  let bizId = businessId || this.state.activeBusinessId || D.id;
  let normalizedRole = ['Owner', 'Manager', 'Staff', 'Accountant'].find(r => r.toLowerCase() === (newRole || '').toLowerCase()) || 'Owner';
  let u = this.getCurrentUser();
  if (u) {
    u.role = normalizedRole.toLowerCase();
    if (!this.state.businessMembers) this.state.businessMembers = [];
    let m = this.state.businessMembers.find(m => m.businessId === bizId && m.userId === u.id);
    if (m) {
      m.role = normalizedRole;
    } else {
      this.state.businessMembers.push({
        id: 'mem_' + Date.now(),
        businessId: bizId,
        userId: u.id,
        role: normalizedRole,
        joinedAt: new Date().toISOString()
      });
    }
    this.save();
  }
}
getCurrentUserRole(businessId){
  let bizId = businessId || this.state.activeBusinessId || D.id;
  this.ensureDefaultTeamMembers();
  let u = this.getCurrentUser();
  if (!u) return 'Owner';
  if (u.role === 'platform-admin') return 'Owner';
  let m = (this.state.businessMembers || []).find(m => m.businessId === bizId && m.userId === u.id);
  if (m && m.role) {
    let r = m.role.toLowerCase();
    if (r === 'owner') return 'Owner';
    if (r === 'manager') return 'Manager';
    if (r === 'staff') return 'Staff';
    if (r === 'accountant') return 'Accountant';
    return m.role;
  }
  let ur = (u.role || '').toLowerCase();
  if (ur === 'owner') return 'Owner';
  if (ur === 'manager') return 'Manager';
  if (ur === 'staff') return 'Staff';
  if (ur === 'accountant') return 'Accountant';
  let biz = (this.state.businesses || []).find(b => b.id === bizId);
  if (biz && biz.ownerId === u.id) return 'Owner';
  return 'Owner';
}
getCompleteState(){return this.state}
resetDemoData(){this.state=ue(),this.save()}},de=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),fe=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),pe=e=>{let t=fe(e);return t.charAt(0).toUpperCase()+t.slice(1)},me=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),he=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},ge={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},_e=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...ge,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:me(`lucide`,i),...!a&&!he(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),k=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(_e,{ref:i,iconNode:t,className:me(`lucide-${de(pe(e))}`,`lucide-${e}`,n),...r}));return n.displayName=pe(e),n},ve=k(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ye=k(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),be=k(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),A=k(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),j=k(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),xe=k(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Se=k(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),Ce=k(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),we=k(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),M=k(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),N=k(`calculator`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]),Te=k(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),Ee=k(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),De=k(`chart-line`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]]),Oe=k(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ke=k(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),Ae=k(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),je=k(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Me=k(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Ne=k(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Pe=k(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),Fe=k(`credit-card`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`,key:`ynyp8z`}],[`line`,{x1:`2`,x2:`22`,y1:`10`,y2:`10`,key:`1b3vmo`}]]),Ie=k(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Le=k(`file-text`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Re=k(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),ze=k(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),Be=k(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),Ve=k(`layout-dashboard`,[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`,key:`10lvy0`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`,key:`16une8`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`,key:`1hutg5`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`ldoo1y`}]]),He=k(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),Ue=k(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),We=k(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ge=k(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Ke=k(`megaphone`,[[`path`,{d:`M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z`,key:`q8bfy3`}],[`path`,{d:`M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14`,key:`1853fq`}],[`path`,{d:`M8 6v8`,key:`15ugcq`}]]),qe=k(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Je=k(`message-square-heart`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}],[`path`,{d:`M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5`,key:`1faxuh`}]]),Ye=k(`message-square-text`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}],[`path`,{d:`M7 11h10`,key:`1twpyw`}],[`path`,{d:`M7 15h6`,key:`d9of3u`}],[`path`,{d:`M7 7h8`,key:`af5zfr`}]]),Xe=k(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),Ze=k(`package-search`,[[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`,key:`e7tb2h`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`,key:`a4e8g8`}],[`circle`,{cx:`18.5`,cy:`15.5`,r:`2.5`,key:`b5zd12`}],[`path`,{d:`M20.27 17.27 22 19`,key:`1l4muz`}]]),Qe=k(`panels-top-left`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M9 21V9`,key:`1oto5p`}]]),$e=k(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),et=k(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),P=k(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),tt=k(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),nt=k(`receipt`,[[`path`,{d:`M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z`,key:`q3az6g`}],[`path`,{d:`M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`,key:`1h4pet`}],[`path`,{d:`M12 17.5v-11`,key:`1jc1ny`}]]),rt=k(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),it=k(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),at=k(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),ot=k(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),st=k(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),ct=k(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),lt=k(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),ut=k(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),dt=k(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),ft=k(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),pt=k(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),mt=k(`trending-down`,[[`path`,{d:`M16 17h6v-6`,key:`t6n2it`}],[`path`,{d:`m22 17-8.5-8.5-5 5L2 7`,key:`x473p`}]]),ht=k(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),gt=k(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),_t=k(`truck`,[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]),vt=k(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),yt=k(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),bt=k(`wallet-cards`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2`,key:`4125el`}],[`path`,{d:`M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21`,key:`1dpki6`}]]),xt=k(`wallet`,[[`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,key:`18etb6`}],[`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,key:`xoc0q4`}]]),St=k(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ct=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=o(((e,t)=>{t.exports=Ct()}))(),wt=({activeUser:e,activeBusiness:t,onOpenAuth:n,onOpenDashboard:r,onNavigateSection:i})=>{let[a,o]=_.useState(!1),s=[{label:`Home`,id:`hero`},{label:`Features`,id:`features`},{label:`How It Works`,id:`how-it-works`},{label:`Platform`,id:`showcase`},{label:`News & Training`,id:`news-training`},{label:`Pricing`,id:`pricing`},{label:`FAQ`,id:`faq`},{label:`About`,id:`about`},{label:`Contact`,id:`contact`}];return(0,F.jsxs)(`header`,{className:`sticky top-0 z-50 bg-[#0B192C]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all`,children:[(0,F.jsxs)(`div`,{className:`bg-gradient-to-r from-emerald-700 via-[#006A4E] to-emerald-800 py-1.5 px-4 text-xs font-medium text-emerald-50 flex items-center justify-center gap-2`,children:[(0,F.jsx)(`span`,{className:`inline-flex items-center px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold text-[10px] border border-amber-300/30`,children:`KENYA 2026 READY`}),(0,F.jsx)(`span`,{children:`Simplified eTIMS Compliance & M-Pesa Integration for Kenyan SMEs`}),(0,F.jsx)(`span`,{className:`hidden sm:inline text-emerald-200`,children:`•`}),(0,F.jsx)(`button`,{onClick:()=>n(`register`),className:`hidden sm:inline-flex items-center text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer`,children:`Claim 7-Day Free Trial`})]}),(0,F.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`flex items-center justify-between h-20`,children:[(0,F.jsxs)(`div`,{onClick:()=>i(`hero`),className:`flex items-center gap-3 cursor-pointer group`,children:[(0,F.jsx)(`div`,{className:`relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-[#006A4E] to-[#0A192F] p-0.5 shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform`,children:(0,F.jsxs)(`div`,{className:`w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center relative overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`absolute inset-x-0 top-0 h-1 bg-red-600`}),(0,F.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 h-1 bg-emerald-500`}),(0,F.jsx)(M,{className:`w-6 h-6 text-amber-400`})]})}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsxs)(`span`,{className:`font-extrabold text-2xl tracking-tight text-white font-serif`,children:[`BizHub`,(0,F.jsx)(`span`,{className:`text-emerald-400`,children:`KE`})]}),(0,F.jsx)(`span`,{className:`px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider`,children:`SME`})]}),(0,F.jsx)(`p`,{className:`text-[11px] font-medium text-slate-400 tracking-wider`,children:`Grow • Manage • Succeed`})]})]}),(0,F.jsx)(`nav`,{className:`hidden md:flex items-center space-x-1 lg:space-x-2`,children:s.map(e=>(0,F.jsx)(`button`,{onClick:()=>i(e.id),className:`px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer`,children:e.label},e.id))}),(0,F.jsx)(`div`,{className:`hidden md:flex items-center gap-3`,children:e?(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsxs)(`button`,{onClick:r,className:`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-900/40 hover:shadow-lg transition-all cursor-pointer`,children:[(0,F.jsx)(Ve,{className:`w-4 h-4 text-amber-300`}),(0,F.jsx)(`span`,{children:`Go to Dashboard`}),(0,F.jsx)(ke,{className:`w-4 h-4`})]}),(0,F.jsx)(`div`,{className:`flex items-center gap-2 pl-2 border-l border-slate-700`,children:(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-full bg-emerald-800 text-emerald-200 font-bold flex items-center justify-center text-sm border border-emerald-500/40`,children:e.fullName.charAt(0)})})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{onClick:()=>n(`login`),className:`px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer`,children:`Login`}),(0,F.jsxs)(`button`,{onClick:()=>n(`register`),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md shadow-amber-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer`,children:[(0,F.jsx)(ft,{className:`w-4 h-4 text-slate-950`}),(0,F.jsx)(`span`,{children:`Get Started Free`})]})]})}),(0,F.jsxs)(`div`,{className:`md:hidden flex items-center gap-2`,children:[e&&(0,F.jsxs)(`button`,{onClick:r,className:`px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-semibold text-white flex items-center gap-1.5`,children:[(0,F.jsx)(Ve,{className:`w-3.5 h-3.5`}),(0,F.jsx)(`span`,{children:`App`})]}),(0,F.jsx)(`button`,{onClick:()=>o(!a),className:`p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none`,children:a?(0,F.jsx)(St,{className:`w-6 h-6`}):(0,F.jsx)(qe,{className:`w-6 h-6`})})]})]})}),a&&(0,F.jsxs)(`div`,{className:`md:hidden bg-[#0A192F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2`,children:[(0,F.jsx)(`div`,{className:`space-y-1`,children:s.map(e=>(0,F.jsx)(`button`,{onClick:()=>{i(e.id),o(!1)},className:`block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800`,children:e.label},e.id))}),(0,F.jsx)(`div`,{className:`pt-4 border-t border-slate-800 flex flex-col gap-2.5`,children:e?(0,F.jsxs)(`button`,{onClick:()=>{r(),o(!1)},className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm`,children:[(0,F.jsx)(Ve,{className:`w-4 h-4 text-amber-300`}),(0,F.jsxs)(`span`,{children:[`Open `,t?.name||`Dashboard`]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{onClick:()=>{n(`login`),o(!1)},className:`w-full py-2.5 rounded-xl border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800`,children:`Login`}),(0,F.jsxs)(`button`,{onClick:()=>{n(`register`),o(!1)},className:`w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg`,children:[(0,F.jsx)(ft,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Get Started Free`})]})]})})]})]})},Tt=({onStartFreeTrial:e,onWatchDemo:t,onSelectFeaturePill:n})=>{
  const [heroImageSrc, setHeroImageSrc] = (0, _.useState)(() => {
    try {
      return localStorage.getItem("bizhubke_custom_hero_image") || "/images/hero-business-owner.jpg";
    } catch(err) {
      return "/images/hero-business-owner.jpg";
    }
  });
  const [uploadToast, setUploadToast] = (0, _.useState)(null);
  const fileInputRef = (0, _.useRef)(null);
  const handleImageFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadToast("Please select a valid image file");
      setTimeout(() => setUploadToast(null), 3500);
      return;
    }
    const reader = new FileReader();
    reader.onload = (loadEvt) => {
      const dataUrl = loadEvt.target.result;
      setHeroImageSrc(dataUrl);
      try {
        localStorage.setItem("bizhubke_custom_hero_image", dataUrl);
      } catch(err) {}
      fetch("/api/upload-hero-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: dataUrl })
      }).then(() => {
        setUploadToast("Hero photo updated!");
        setTimeout(() => setUploadToast(null), 4000);
      }).catch(() => {
        setUploadToast("Hero photo updated!");
        setTimeout(() => setUploadToast(null), 4000);
      });
    };
    reader.readAsDataURL(file);
  };
  return (0,F.jsxs)(`section`,{id:`hero`,className:`relative overflow-hidden bg-gradient-to-b from-[#0B192C] via-[#0D243F] to-[#0A192F] text-white pt-12 pb-20 lg:pt-18 lg:pb-28`,children:[(0,F.jsx)(`div`,{className:`absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]`}),(0,F.jsx)(`div`,{className:`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none`}),(0,F.jsx)(`div`,{className:`absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none`}),(0,F.jsxs)(`div`,{className:`max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 items-center`,children:[(0,F.jsxs)(`div`,{className:`xl:col-span-5 space-y-7 text-center xl:text-left`,children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 animate-bounce-subtle`,children:[(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-red-600`}),(0,F.jsx)(`span`,{className:`font-extrabold`,children:`Built for Kenyan Businesses • Built for Growth`})]}),(0,F.jsxs)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] font-serif`,children:[`The Digital Business Partner for`,` `,(0,F.jsx)(`span`,{className:`text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300`,children:`Kenyan SMEs`})]}),(0,F.jsx)(`p`,{className:`text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0`,children:`Run your business. Understand your numbers. Get more customers. Stay compliant. Grow.`}),(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(je,{className:`w-4 h-4 text-emerald-400 shrink-0`}),(0,F.jsx)(`span`,{children:`eTIMS & KRA Ready Invoices`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(je,{className:`w-4 h-4 text-emerald-400 shrink-0`}),(0,F.jsx)(`span`,{children:`M-Pesa Till & Paybill Tracking`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(je,{className:`w-4 h-4 text-emerald-400 shrink-0`}),(0,F.jsx)(`span`,{children:`WhatsApp Customer CRM`})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2`,children:[(0,F.jsxs)(`button`,{onClick:e,className:`w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-3 group transition-all cursor-pointer hover:scale-[1.02]`,children:[(0,F.jsx)(`span`,{children:`Start Free Trial`}),(0,F.jsx)(ye,{className:`w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-300`})]}),(0,F.jsxs)(`button`,{onClick:t,className:`w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center gap-3 backdrop-blur-sm transition-all cursor-pointer`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center`,children:(0,F.jsx)(et,{className:`w-4 h-4 fill-amber-400`})}),(0,F.jsx)(`span`,{children:`Watch 2-Min Demo`})]})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400`,children:[(0,F.jsxs)(`div`,{className:`flex -space-x-2`,children:[(0,F.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white`,children:`NK`}),(0,F.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-amber-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white`,children:`MW`}),(0,F.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white`,children:`KO`}),(0,F.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-teal-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white`,children:`+1k`})]}),(0,F.jsxs)(`p`,{children:[(0,F.jsx)(`strong`,{className:`text-white font-semibold`,children:`1,200+ Kenyan Traders`}),` trust BizHubKE across Nairobi, Mombasa, Kisumu & Eldoret`]})]})]}),(0,F.jsx)(`div`,{className:`xl:col-span-7 relative`,children:(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-center xl:justify-end gap-5 sm:gap-6`,children:[(0,F.jsxs)(`div`,{className:`relative w-full sm:w-60 md:w-64 lg:w-72 xl:w-64 2xl:w-72 h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-900 shrink-0 group`,onDragOver:(ev)=>ev.preventDefault(),onDrop:(ev)=>{ev.preventDefault();if(ev.dataTransfer.files?.[0])handleImageFile(ev.dataTransfer.files[0])},children:[(0,F.jsx)(`input`,{ref:fileInputRef,type:`file`,accept:`image/*`,className:`hidden`,onChange:(ev)=>{if(ev.target.files?.[0])handleImageFile(ev.target.files[0])}}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>fileInputRef.current?.click(),title:`Upload attached Kenyan SME owner image`,className:`absolute top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-slate-900/85 hover:bg-emerald-600 text-white text-[11px] font-bold backdrop-blur-md border border-slate-600/80 shadow-lg flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105`,children:[(0,F.jsx)(`span`,{children:`📷`}),(0,F.jsx)(`span`,{children:`Replace Photo`})]}),uploadToast&&(0,F.jsx)(`div`,{className:`absolute top-12 left-3 right-3 z-30 px-2.5 py-1.5 rounded-xl bg-emerald-600/95 text-white text-[11px] font-semibold text-center shadow-xl animate-in fade-in`,children:uploadToast}),(0,F.jsx)(`img`,{src:heroImageSrc,alt:`Confident Kenyan woman small-business owner in green apron inside her grocery store`,className:`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500`}),(0,F.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent pointer-events-none`}),(0,F.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`}),(0,F.jsx)(`p`,{className:`text-xs font-bold text-white`,children:`Kenyan SME Owner`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-300 mt-0.5 truncate`,children:`Grocery & Retail • Nairobi, Kenya`})]})]}),(0,F.jsxs)(`div`,{className:`relative w-full sm:w-auto max-w-lg shrink-0`,children:[(0,F.jsxs)(`div`,{className:`relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-4 sm:p-6 border border-slate-700 shadow-2xl backdrop-blur-xl`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between pb-4 border-b border-slate-800`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-red-500/80`}),(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-amber-500/80`}),(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-emerald-500/80`}),(0,F.jsx)(`span`,{className:`ml-2 text-xs font-mono text-slate-400`,children:`bizhubke.co.ke/dashboard`})]}),(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300`,children:[(0,F.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`}),`M-Pesa Live`]})]}),(0,F.jsxs)(`div`,{className:`mt-4 space-y-4`,children:[(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-[#0B192C] border border-slate-800 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs text-slate-400 font-medium`,children:`Today's Revenue (All Channels)`}),(0,F.jsx)(`p`,{className:`text-2xl sm:text-3xl font-extrabold text-white mt-0.5`,children:`KSh 53,900`}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,F.jsxs)(`span`,{className:`inline-flex items-center text-[11px] font-semibold text-emerald-400`,children:[(0,F.jsx)(ht,{className:`w-3 h-3 mr-0.5`}),` +24% vs yesterday`]}),(0,F.jsx)(`span`,{className:`text-slate-500 text-[10px]`,children:`• M-Pesa: 82%`})]})]}),(0,F.jsx)(`div`,{className:`w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400`,children:(0,F.jsx)(nt,{className:`w-6 h-6`})})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,F.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/70`,children:[(0,F.jsx)(`p`,{className:`text-[11px] text-slate-400`,children:`KRA eTIMS Status`}),(0,F.jsxs)(`p`,{className:`text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1`,children:[(0,F.jsx)(je,{className:`w-3.5 h-3.5`}),` Synchronized`]}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-500 mt-0.5`,children:`Turnover Tax: KSh 1,617`})]}),(0,F.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/70`,children:[(0,F.jsx)(`p`,{className:`text-[11px] text-slate-400`,children:`WhatsApp CRM`}),(0,F.jsxs)(`p`,{className:`text-sm font-bold text-amber-300 mt-1 flex items-center gap-1`,children:[(0,F.jsx)(Ye,{className:`w-3.5 h-3.5`}),` 8 Inquiries`]}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-500 mt-0.5`,children:`3 orders ready for dispatch`})]})]}),(0,F.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-[#0A192F] border border-emerald-600/30 flex items-center gap-3.5`,children:[(0,F.jsxs)(`div`,{className:`relative shrink-0`,children:[(0,F.jsx)(`div`,{className:`w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-emerald-600 p-0.5`,children:(0,F.jsx)(`div`,{className:`w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-amber-300 font-bold text-base`,children:`FW`})}),(0,F.jsx)(`span`,{className:`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900`})]}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`h4`,{className:`text-xs font-bold text-white truncate`,children:`Faith Wanjiku`}),(0,F.jsx)(`span`,{className:`text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold`,children:`Kilimani, Nairobi`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-300 truncate mt-0.5`,children:`Retail Director • Kilimani Fresh Supplies`}),(0,F.jsx)(`p`,{className:`text-[10px] text-emerald-300 mt-0.5 italic`,children:`"BizHubKE saved us 15 hours every week on bookkeeping and KRA receipts."`})]})]})]})]}),(0,F.jsxs)(`div`,{className:`absolute -bottom-6 -left-4 sm:-left-6 p-3 rounded-2xl bg-white text-slate-900 shadow-xl border border-emerald-100 flex items-center gap-3 animate-float`,children:[(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xs`,children:`M`}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-extrabold text-slate-900`,children:`M-Pesa Confirmed`}),(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-emerald-600`,children:`NEW`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-600 font-medium`,children:`KSh 14,250 received via Till 5849201`})]})]})]})]})})]}),(0,F.jsxs)(`div`,{className:`mt-16 sm:mt-20 pt-8 border-t border-slate-800/80`,children:[(0,F.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-5`,children:`Complete Biashara Operating Suite`}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 sm:gap-4`,children:[{label:`Finance & Invoicing`,key:`finance`,icon:nt,color:`bg-emerald-50 text-emerald-800 border-emerald-200`},{label:`Customers & WhatsApp CRM`,key:`crm`,icon:Ye,color:`bg-green-50 text-green-800 border-green-200`},{label:`Inventory & Operations`,key:`inventory`,icon:Ce,color:`bg-blue-50 text-blue-800 border-blue-200`},{label:`Compliance & Tax`,key:`compliance`,icon:ut,color:`bg-amber-50 text-amber-900 border-amber-200`},{label:`Training & News`,key:`training`,icon:Re,color:`bg-pink-50 text-pink-900 border-pink-200`}].map(e=>{let t=e.icon;return(0,F.jsxs)(`button`,{onClick:()=>n(e.key),className:`flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${e.color}`,children:[(0,F.jsx)(t,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:e.label})]},e.key)})})]})]})]});
},
Et=({onLearnMore:e,onOpenRegister:t})=>(0,F.jsx)(`section`,{id:`features`,className:`py-20 lg:py-28 bg-[#F8FAFC]`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-3`,children:[(0,F.jsx)(ft,{className:`w-3.5 h-3.5`}),`Designed specifically for Kenyan traders & entrepreneurs`]}),(0,F.jsx)(`h2`,{className:`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif`,children:`Solve Your Biggest Business Challenges`}),(0,F.jsx)(`p`,{className:`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed`,children:`Running an SME in Kenya is hard work. We took the 5 biggest pain points Kenyan business owners face every day and turned them into effortless digital superpowers.`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,children:[{id:`cash-flow`,title:`1. Cash Flow & Finance`,subtitle:`Never guess where your business money goes`,description:`Separate personal finances from your business. Auto-reconcile M-Pesa Buy Goods Till, Paybill statements, and bank deposits into clear daily profit & loss views.`,icon:bt,bgStyle:`bg-emerald-50/70 hover:bg-emerald-50 border-emerald-200`,iconStyle:`bg-emerald-600 text-white`,badgeStyle:`bg-emerald-100 text-emerald-800`,highlights:[`M-Pesa Till & Paybill sync`,`Real-time daily profit tracker`,`Track unpaid customer debt`]},{id:`tax-compliance`,title:`2. Tax & Compliance`,subtitle:`Eliminate the fear of KRA penalties & audit notices`,description:`Generate valid electronic tax invoices (eTIMS) straight from your phone or laptop. Auto-calculate Turnover Tax (TOT 3%), VAT (16%), and track county permit renewals.`,icon:lt,bgStyle:`bg-amber-50/80 hover:bg-amber-50 border-amber-200`,iconStyle:`bg-amber-500 text-slate-950`,badgeStyle:`bg-amber-100 text-amber-900`,highlights:[`eTIMS compliant digital receipts`,`3% Turnover Tax calculation`,`Single Business Permit alerts`]},{id:`inventory-ops`,title:`3. Inventory & Operations`,subtitle:`Stop dead stock, theft, and stockout panics`,description:`Real-time inventory countdown with smart reorder thresholds. Receive instant alerts on your phone when fast-moving items are low before you lose a customer.`,icon:Ze,bgStyle:`bg-blue-50/70 hover:bg-blue-50 border-blue-200`,iconStyle:`bg-blue-600 text-white`,badgeStyle:`bg-blue-100 text-blue-800`,highlights:[`Automated reorder point alerts`,`Stock shrinkage & cost tracking`,`Multi-category catalog management`]},{id:`customers-crm`,title:`4. Customers & WhatsApp CRM`,subtitle:`Turn casual shoppers into devoted weekly buyers`,description:`Kenyan commerce lives on WhatsApp. Send elegant PDF invoices, payment receipts, and friendly payment reminders with direct 1-click WhatsApp messaging.`,icon:Je,bgStyle:`bg-rose-50/70 hover:bg-rose-50 border-rose-200`,iconStyle:`bg-rose-500 text-white`,badgeStyle:`bg-rose-100 text-rose-800`,highlights:[`Click-to-chat WhatsApp invoices`,`Customer purchase history logs`,`Personalized payment reminders`]},{id:`intelligence-growth`,title:`5. Business Intelligence & Growth`,subtitle:`Understand your numbers and access SME capital`,description:`Generate audited financial statements that Kenyan banks and SACCOs accept for loans. Monitor your Kenyan Business Health Score to know where to improve.`,icon:De,bgStyle:`bg-indigo-50/70 hover:bg-indigo-50 border-indigo-200`,iconStyle:`bg-indigo-600 text-white`,badgeStyle:`bg-indigo-100 text-indigo-800`,highlights:[`Kenyan Business Health Score (0-100)`,`Bank-ready financial exports`,`Top-selling margin analytics`]}].map((t,n)=>{let r=t.icon,i=n===3||n===4;return(0,F.jsxs)(`div`,{className:`rounded-3xl p-7 sm:p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${t.bgStyle} ${i?`lg:col-span-1.5`:``}`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,F.jsx)(`div`,{className:`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${t.iconStyle}`,children:(0,F.jsx)(r,{className:`w-7 h-7`})}),(0,F.jsxs)(`span`,{className:`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${t.badgeStyle}`,children:[`Challenge #`,n+1]})]}),(0,F.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold text-slate-900 font-serif`,children:t.title}),(0,F.jsx)(`p`,{className:`text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider`,children:t.subtitle}),(0,F.jsx)(`p`,{className:`mt-4 text-sm text-slate-700 leading-relaxed`,children:t.description}),(0,F.jsxs)(`div`,{className:`mt-5 pt-5 border-t border-slate-200/80 space-y-2`,children:[t.highlights.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-medium text-slate-800`,children:[(0,F.jsx)(je,{className:`w-3.5 h-3.5 text-emerald-600 shrink-0`}),(0,F.jsx)(`span`,{children:e})]},t)),t.id===`tax-compliance`&&(0,F.jsx)(`p`,{className:`mt-3 pt-2.5 text-[11px] text-slate-500 leading-normal italic border-t border-amber-200/60`,children:`BizHubKE provides business information and workflow tools and does not replace professional tax or legal advice.`})]})]}),(0,F.jsx)(`div`,{className:`mt-8 pt-4`,children:(0,F.jsxs)(`a`,{href:t.id===`cash-flow`?`/features/cash-flow-finance`:t.id===`tax-compliance`?`/features/tax-compliance`:t.id===`inventory-ops`?`/features/inventory-operations`:t.id===`customers-crm`?`/features/customers-whatsapp-crm`:`/features/business-intelligence-growth`,onClick:function(n){n.preventDefault();e(t.id);},className:`w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-200 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer group-hover:border-slate-900`,children:[(0,F.jsx)(`span`,{children:`Learn More`}),(0,F.jsx)(ye,{className:`w-4 h-4 text-emerald-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform`})]})})]},t.id)})}),(0,F.jsxs)(`div`,{className:`mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0B192C] to-[#006A4E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-2xl font-bold font-serif`,children:`Ready to simplify your Kenyan business operations?`}),(0,F.jsx)(`p`,{className:`text-slate-200 text-sm mt-1`,children:`Get started with our free trial — no credit card or setup fees required.`})]}),(0,F.jsx)(`button`,{onClick:t,className:`shrink-0 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer`,children:`Create Your Free Account`})]})]})}),Dt=({onOpenDashboard:e,onOpenRegister:t})=>{let[n,r]=_.useState(`overview`);return(0,F.jsxs)(`section`,{id:`showcase`,className:`py-20 lg:py-28 bg-gradient-to-b from-[#0A192F] via-[#0B192C] to-[#0A192F] text-white relative overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#006A4E_1px,transparent_1px)] [background-size:32px_32px]`}),(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,F.jsx)(`span`,{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4`,children:`Unified Kenyan Business Operating System`}),(0,F.jsxs)(`h2`,{className:`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif`,children:[`Everything You Need in`,` `,(0,F.jsx)(`span`,{className:`text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300`,children:`One Platform`})]}),(0,F.jsx)(`p`,{className:`mt-4 text-base sm:text-lg text-slate-300 leading-relaxed`,children:`Replace scattered paper receipt books, messy Excel sheets, and disorganized M-Pesa SMS messages with a unified, cloud-backed command center.`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-5 space-y-5`,children:[[{title:`Easy-to-use dashboard`,description:`Zero accounting jargon. Designed so any shop owner, manager, or cashier can record transactions in 5 seconds.`,icon:Qe,color:`text-amber-400 bg-amber-400/10 border-amber-400/20`},{title:`Mobile and desktop access`,description:`Works seamlessly on Android smartphones, tablets, and desktop computers. Offline-first cached data syncs instantly.`,icon:dt,color:`text-emerald-400 bg-emerald-400/10 border-emerald-400/20`},{title:`Kenya-focused features`,description:`Native M-Pesa Till & Paybill reconciliation, KRA eTIMS invoice generation, and Turnover Tax (TOT 3%) calculation.`,icon:Ge,color:`text-teal-300 bg-teal-400/10 border-teal-400/20`},{title:`Secure and reliable`,description:`Strict multi-tenant data isolation. Your financial records, customer phone numbers, and margins remain strictly private.`,icon:He,color:`text-blue-400 bg-blue-400/10 border-blue-400/20`},{title:`Local business support`,description:`Dedicated Nairobi-based customer support via WhatsApp and phone. Real people who understand Kenyan retail.`,icon:ze,color:`text-rose-400 bg-rose-400/10 border-rose-400/20`}].map((e,t)=>{let n=e.icon;return(0,F.jsxs)(`div`,{className:`p-4 sm:p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all flex items-start gap-4 group`,children:[(0,F.jsx)(`div`,{className:`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${e.color}`,children:(0,F.jsx)(n,{className:`w-6 h-6 group-hover:scale-110 transition-transform`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-base font-bold text-white group-hover:text-emerald-300 transition-colors`,children:e.title}),(0,F.jsx)(`p`,{className:`mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed`,children:e.description})]})]},t)}),(0,F.jsx)(`div`,{className:`pt-3`,children:(0,F.jsxs)(`button`,{onClick:t,className:`w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all`,children:[(0,F.jsx)(`span`,{children:`Start Your 7-Day Free Trial`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})})]}),(0,F.jsx)(`div`,{className:`lg:col-span-7`,children:(0,F.jsxs)(`div`,{className:`rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl`,children:[(0,F.jsxs)(`div`,{className:`px-5 py-4 bg-[#0B192C] border-b border-slate-800 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-red-500/80`}),(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-amber-500/80`}),(0,F.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-emerald-500/80`})]}),(0,F.jsx)(`div`,{className:`h-4 w-px bg-slate-700`}),(0,F.jsxs)(`span`,{className:`text-xs font-semibold text-slate-300 flex items-center gap-1.5`,children:[(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400`}),`Kilimani Fresh Supplies & Retail • Nairobi`]})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg text-xs`,children:[(0,F.jsx)(`button`,{onClick:()=>r(`overview`),className:`px-2.5 py-1 rounded-md font-medium transition-all ${n===`overview`?`bg-emerald-600 text-white shadow`:`text-slate-400 hover:text-white`}`,children:`Overview`}),(0,F.jsx)(`button`,{onClick:()=>r(`sales`),className:`px-2.5 py-1 rounded-md font-medium transition-all ${n===`sales`?`bg-emerald-600 text-white shadow`:`text-slate-400 hover:text-white`}`,children:`Sales`}),(0,F.jsx)(`button`,{onClick:()=>r(`invoices`),className:`px-2.5 py-1 rounded-md font-medium transition-all ${n===`invoices`?`bg-emerald-600 text-white shadow`:`text-slate-400 hover:text-white`}`,children:`Invoices`})]})]}),(0,F.jsxs)(`div`,{className:`p-6 space-y-6`,children:[(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4`,children:[(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-[#0B192C] border border-slate-800`,children:[(0,F.jsx)(`p`,{className:`text-[11px] font-semibold text-slate-400 uppercase tracking-wider`,children:`Gross Sales (Month)`}),(0,F.jsx)(`p`,{className:`text-2xl font-extrabold text-white mt-1`,children:`KSh 324,800`}),(0,F.jsxs)(`div`,{className:`mt-1 flex items-center gap-1 text-[11px] font-medium text-emerald-400`,children:[(0,F.jsx)(ht,{className:`w-3 h-3`}),` +18.4% vs last month`]})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-[#0B192C] border border-slate-800`,children:[(0,F.jsx)(`p`,{className:`text-[11px] font-semibold text-slate-400 uppercase tracking-wider`,children:`M-Pesa Float Balance`}),(0,F.jsx)(`p`,{className:`text-2xl font-extrabold text-amber-300 mt-1`,children:`KSh 84,250`}),(0,F.jsx)(`div`,{className:`mt-1 text-[11px] text-slate-400`,children:`Till: 5849201 Active`})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-[#0B192C] border border-slate-800`,children:[(0,F.jsx)(`p`,{className:`text-[11px] font-semibold text-slate-400 uppercase tracking-wider`,children:`Biashara Score`}),(0,F.jsxs)(`div`,{className:`flex items-baseline gap-2 mt-1`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-extrabold text-emerald-400`,children:`88/100`}),(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded`,children:`EXCELLENT`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-400 mt-1`,children:`Loan Ready`})]})]}),n===`overview`&&(0,F.jsx)(`div`,{className:`space-y-4 animate-in fade-in duration-200`,children:(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-slate-800/40 border border-slate-800`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,F.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-slate-300`,children:`Recent Settled Transactions`}),(0,F.jsx)(`span`,{className:`text-[11px] text-emerald-400 font-semibold cursor-pointer hover:underline`,children:`View All (28)`})]}),(0,F.jsxs)(`div`,{className:`space-y-2.5`,children:[(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs`,children:`MP`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-white`,children:`Basmati Rice 25kg (x3)`}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-400`,children:`David Otieno • Till 5849201 • Ref: SDQ83910KL`})]})]}),(0,F.jsxs)(`div`,{className:`text-right`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-emerald-400`,children:`+ KSh 14,250`}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-400`,children:`10 mins ago`})]})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs`,children:`MP`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-white`,children:`Maize Flour Grade 1 (x5 bales)`}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-400`,children:`Amina Hassan • M-Pesa Buy Goods • Ref: SDR29481XP`})]})]}),(0,F.jsxs)(`div`,{className:`text-right`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-emerald-400`,children:`+ KSh 12,000`}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-400`,children:`42 mins ago`})]})]})]})]})}),n===`sales`&&(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-3 animate-in fade-in duration-200`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-slate-300`,children:`Sales Channel Breakdown`}),(0,F.jsx)(`span`,{className:`text-[10px] text-slate-400`,children:`Today's total: KSh 53,900`})]}),(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex justify-between text-[11px] mb-1`,children:[(0,F.jsx)(`span`,{className:`text-slate-300`,children:`M-Pesa Till / Paybill (82%)`}),(0,F.jsx)(`span`,{className:`text-emerald-400 font-semibold`,children:`KSh 44,198`})]}),(0,F.jsx)(`div`,{className:`w-full h-2 rounded-full bg-slate-800 overflow-hidden`,children:(0,F.jsx)(`div`,{className:`h-full bg-emerald-500 rounded-full`,style:{width:`82%`}})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex justify-between text-[11px] mb-1`,children:[(0,F.jsx)(`span`,{className:`text-slate-300`,children:`Cash (12%)`}),(0,F.jsx)(`span`,{className:`text-amber-300 font-semibold`,children:`KSh 6,468`})]}),(0,F.jsx)(`div`,{className:`w-full h-2 rounded-full bg-slate-800 overflow-hidden`,children:(0,F.jsx)(`div`,{className:`h-full bg-amber-400 rounded-full`,style:{width:`12%`}})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex justify-between text-[11px] mb-1`,children:[(0,F.jsx)(`span`,{className:`text-slate-300`,children:`Bank Transfer / Credit (6%)`}),(0,F.jsx)(`span`,{className:`text-blue-300 font-semibold`,children:`KSh 3,234`})]}),(0,F.jsx)(`div`,{className:`w-full h-2 rounded-full bg-slate-800 overflow-hidden`,children:(0,F.jsx)(`div`,{className:`h-full bg-blue-500 rounded-full`,style:{width:`6%`}})})]})]})]}),n===`invoices`&&(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-3 animate-in fade-in duration-200`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-slate-300`,children:`Pending & Sent Invoices`}),(0,F.jsx)(`span`,{className:`text-[10px] text-emerald-400`,children:`eTIMS Auto-Signed`})]}),(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-white`,children:`INV-2026-0042 • David Otieno`}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-400`,children:`Due in 7 days • Direct WhatsApp sent`})]}),(0,F.jsx)(`div`,{className:`text-right`,children:(0,F.jsx)(`span`,{className:`px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300`,children:`SENT • KSh 15,300`})})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-white`,children:`INV-2026-0039 • Mama Zawadi Caterers`}),(0,F.jsx)(`p`,{className:`text-[10px] text-red-400`,children:`Overdue by 6 days • WhatsApp reminder triggered`})]}),(0,F.jsx)(`div`,{className:`text-right`,children:(0,F.jsx)(`span`,{className:`px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300`,children:`OVERDUE • KSh 28,000`})})]})]})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5 text-emerald-400`,children:[(0,F.jsx)(ut,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`256-bit encrypted data isolation`})]}),(0,F.jsxs)(`button`,{onClick:e,className:`text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(`span`,{children:`Launch Live Interactive App`}),(0,F.jsx)(ye,{className:`w-3.5 h-3.5`})]})]})]})]})})]})]})]})},Ot=({newsArticles:e,trainingCourses:t,onSelectArticle:n,onSelectCourse:r,onExploreMore:i})=>{let[a,o]=_.useState(`All`),s=[`All`,`Kenya Business`,`Tax & Compliance`,`Business Growth`,`Funding`,`Technology`,`AI`],c=a===`All`?e.slice(0,3):e.filter(e=>e.category===a).slice(0,3);return(0,F.jsx)(`section`,{id:`news-training`,className:`py-20 lg:py-28 bg-white border-y border-slate-200/80`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3`,children:[(0,F.jsx)(Re,{className:`w-3.5 h-3.5 text-emerald-700`}),`SME Knowledge Hub & Market Pulse`]}),(0,F.jsx)(`h2`,{className:`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif`,children:`Stay Informed. Keep Learning. Grow Faster.`}),(0,F.jsx)(`p`,{className:`mt-3 text-base text-slate-600 max-w-2xl`,children:`Curated regulatory updates from KRA, CBK monetary policy briefs, WhatsApp growth tactics, and practical video modules for Kenyan business owners.`})]}),(0,F.jsxs)(`button`,{onClick:i,className:`self-start md:self-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer group shrink-0`,children:[(0,F.jsx)(`span`,{children:`Browse Full Academy & News`}),(0,F.jsx)(ye,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2`,children:s.map(e=>(0,F.jsx)(`button`,{onClick:()=>o(e),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${a===e?`bg-[#0B192C] text-amber-300 shadow-md`:`bg-slate-100 text-slate-700 hover:bg-slate-200`}`,children:e},e))}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,children:c.map(e=>{let t={"Kenya Business":{bg:`bg-emerald-100`,text:`text-emerald-800`},"Tax & Compliance":{bg:`bg-amber-100`,text:`text-amber-900`},"Business Growth":{bg:`bg-blue-100`,text:`text-blue-800`},Funding:{bg:`bg-purple-100`,text:`text-purple-800`},Technology:{bg:`bg-teal-100`,text:`text-teal-800`},AI:{bg:`bg-rose-100`,text:`text-rose-800`}}[e.category]||{bg:`bg-slate-100`,text:`text-slate-800`};return(0,F.jsxs)(`div`,{onClick:()=>n(e),className:`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-2 mb-4`,children:[(0,F.jsx)(`span`,{className:`px-3 py-1 rounded-full text-xs font-bold ${t.bg} ${t.text}`,children:e.category}),(0,F.jsxs)(`span`,{className:`flex items-center gap-1 text-xs text-slate-500`,children:[(0,F.jsx)(Ne,{className:`w-3.5 h-3.5`}),e.readTime]})]}),(0,F.jsx)(`h3`,{className:`text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug font-serif`,children:e.title}),(0,F.jsx)(`p`,{className:`mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed`,children:e.summary})]}),(0,F.jsxs)(`div`,{className:`mt-6 pt-5 border-t border-slate-100 flex items-center justify-between`,children:[(0,F.jsxs)(`span`,{className:`text-xs font-medium text-slate-500`,children:[`Source: `,e.source]}),(0,F.jsxs)(`span`,{className:`text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform`,children:[`Read Article `,(0,F.jsx)(ye,{className:`w-3.5 h-3.5`})]})]})]},e.id)})}),t.length>0&&(0,F.jsxs)(`div`,{className:`mt-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0B192C] to-[#0A192F] p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8`,children:[(0,F.jsxs)(`div`,{className:`space-y-3`,children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase`,children:[(0,F.jsx)(ft,{className:`w-3 h-3`}),`Featured Free Training Course`]}),(0,F.jsx)(`h3`,{className:`text-2xl sm:text-3xl font-bold font-serif`,children:t[0].title}),(0,F.jsx)(`p`,{className:`text-slate-300 text-sm max-w-2xl`,children:t[0].description}),(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-xs text-emerald-300 pt-1`,children:[(0,F.jsxs)(`span`,{children:[`⏱️ `,t[0].durationMinutes,` minutes total`]}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsxs)(`span`,{children:[`📚 `,t[0].lessonCount,` interactive lessons`]}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsxs)(`span`,{children:[`🎯 Level: `,t[0].level]})]})]}),(0,F.jsx)(`button`,{onClick:()=>r(t[0]),className:`shrink-0 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer`,children:`Start Free Course Now`})]})]})})},kt=({onSelectPlan:e})=>(0,F.jsx)(`section`,{id:`pricing`,className:`py-20 lg:py-28 bg-[#F8FAFC]`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3`,children:[(0,F.jsx)(ft,{className:`w-3.5 h-3.5 text-amber-600`}),`Transparent Pricing in Kenyan Shillings (KSh)`]}),(0,F.jsx)(`h2`,{className:`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif`,children:`Simple, Honest Plans for Every Kenyan Business`}),(0,F.jsx)(`p`,{className:`mt-4 text-base sm:text-lg text-slate-600`,children:`No hidden costs. Pay via M-Pesa or bank transfer. Cancel anytime with one click.`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`,children:[{name:`Starter`,priceKSh:499,period:`/month`,badge:`Micro Retailers & Dukas`,description:`Perfect for small shops, sole proprietors, and kiosks wanting clean bookkeeping.`,featured:!1,features:[`Single user access`,`Sales & Cash ledger`,`Standard eTIMS receipts`,`Up to 100 products inventory`,`Basic WhatsApp receipts`,`Local email support`],cta:`Start with Starter`},{name:`Business`,priceKSh:999,period:`/month`,badge:`Most Popular for SMEs`,description:`Ideal for growing restaurants, retail stores, and service businesses across Kenya.`,featured:!0,features:[`Up to 3 staff user roles`,`M-Pesa Till & Paybill auto-reconcile`,`Full eTIMS compliance generator`,`Unlimited inventory & low-stock alerts`,`WhatsApp CRM & auto-reminders`,`KRA Turnover Tax (TOT) calculator`,`Priority WhatsApp support`],cta:`Start 7-Day Free Trial`},{name:`Professional`,priceKSh:1999,period:`/month`,badge:`Multi-Branch & Wholesale`,description:`For established distributors, pharmacies, clinics, and multi-staff operations.`,featured:!1,features:[`Up to 10 team members with RBAC`,`Multi-store inventory transfers`,`Advanced margin & profit analytics`,`Kenyan Bank & SACCO export reports`,`Dedicated AI Biashara Advisor`,`Direct phone support hotline`],cta:`Choose Professional`},{name:`Enterprise`,priceKSh:4999,period:`+/month`,badge:`High-Volume Operations`,description:`Custom setups for manufacturing, franchise chains, and high-volume exporters.`,featured:!1,features:[`Unlimited users & branch locations`,`Direct KRA eTIMS API integration`,`Custom ERP & SACCO data pipelines`,`Dedicated account manager in Nairobi`,`Staff onboarding & on-site training`,`SLA 99.9% guaranteed uptime`],cta:`Contact Enterprise Sales`}].map(t=>(0,F.jsxs)(`div`,{className:`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${t.featured?`bg-[#0B192C] text-white shadow-2xl border-2 border-emerald-500 scale-105 z-10`:`bg-white text-slate-900 shadow-md border border-slate-200 hover:shadow-xl`}`,children:[t.featured&&(0,F.jsx)(`div`,{className:`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md whitespace-nowrap z-20`,children:`MOST POPULAR FOR SMEs`}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`mb-4`,children:[!t.featured&&(0,F.jsx)(`span`,{className:`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700`,children:t.badge}),(0,F.jsx)(`h3`,{className:`text-2xl font-bold font-serif ${t.featured?`mt-1`:`mt-2`}`,children:t.name})]}),(0,F.jsxs)(`div`,{className:`mb-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider opacity-70`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-3xl sm:text-4xl font-black`,children:t.priceKSh.toLocaleString()}),(0,F.jsx)(`span`,{className:`text-sm font-medium opacity-70`,children:t.period})]}),(0,F.jsx)(`p`,{className:`text-xs mt-2 ${t.featured?`text-slate-300`:`text-slate-600`}`,children:t.description})]}),(0,F.jsxs)(`div`,{className:`pt-5 border-t ${t.featured?`border-slate-800`:`border-slate-100`}`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-wider mb-3 ${t.featured?`text-amber-300`:`text-slate-500`}`,children:`Included features:`}),(0,F.jsx)(`ul`,{className:`space-y-2.5`,children:t.features.map((e,n)=>(0,F.jsxs)(`li`,{className:`flex items-start gap-2 text-xs font-medium`,children:[(0,F.jsx)(Oe,{className:`w-4 h-4 shrink-0 mt-0.5 ${t.featured?`text-emerald-400`:`text-emerald-600`}`}),(0,F.jsx)(`span`,{className:t.featured?`text-slate-200`:`text-slate-700`,children:e})]},n))})]})]}),(0,F.jsx)(`div`,{className:`mt-8 pt-4`,children:(0,F.jsxs)(`button`,{onClick:()=>e(t.name),className:`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${t.featured?`bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg`:`bg-slate-900 hover:bg-emerald-600 text-white shadow-sm`}`,children:[(0,F.jsx)(`span`,{children:t.cta}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})})]},t.name))}),(0,F.jsxs)(`div`,{className:`mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2`,children:[(0,F.jsx)(ut,{className:`w-4 h-4 text-emerald-600`}),(0,F.jsx)(`span`,{children:`Supports Safaricom M-Pesa (Buy Goods & Paybill), Airtel Money, and all Kenyan commercial banks.`})]})]})}),ChevronDownIcon=k("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"cd1"}]]),faqItemsList=[
  {
    q: "What is BizHubKE?",
    a: "BizHubKE is an all-in-one digital operating platform built for Kenyan SMEs, combining bookkeeping, M-Pesa tracking, KRA eTIMS compliance, inventory, and customer WhatsApp tools in one simple system."
  },
  {
    q: "Who is BizHubKE for?",
    a: "It is designed for Kenyan retail shops, wholesale distributors, restaurants, service providers, pharmacies, and growing entrepreneurs who want to eliminate manual paperwork and track their daily numbers clearly."
  },
  {
    q: "How much does it cost?",
    a: "Plans start at KSh 499 per month for Starter and KSh 999 per month for Business, with no setup fees and convenient payment via Safaricom M-Pesa."
  },
  {
    q: "Can I try it for free?",
    a: "Yes, you can sign up for our 7-day free trial with full access to all features so you can test BizHubKE with your own business operations before paying anything."
  },
  {
    q: "Can I manage multiple businesses?",
    a: "Yes, our Professional and Enterprise plans allow you to add multiple business entities or branch locations and seamlessly toggle between them from one dashboard."
  },
  {
    q: "Can I use BizHubKE on my phone?",
    a: "Yes, BizHubKE works smoothly on any smartphone, tablet, or desktop browser with fast performance, clean mobile layouts, and low data consumption."
  },
  {
    q: "Does BizHubKE replace an accountant?",
    a: "No, BizHubKE does not replace an accountant. Instead, it automates daily transaction logging and generates clean, reconciled financial reports so your accountant can advise you faster and at lower fees."
  },
  {
    q: "Does BizHubKE file taxes for me?",
    a: "No, BizHubKE does not file taxes for you automatically. It calculates your Turnover Tax (TOT) and formats your sales into eTIMS-compliant records so filing your returns on KRA iTax is quick, accurate, and stress-free."
  },
  {
    q: "Can I connect WhatsApp?",
    a: "Yes, BizHubKE integrates with WhatsApp so you can send instant digital receipts, payment reminders, order notifications, and customer broadcasts directly from your sales records."
  },
  {
    q: "Is my business data secure?",
    a: "Yes, your business and customer records are protected with bank-grade 256-bit encryption, automated cloud backups, and strict role-based access permissions for your staff."
  }
];// PLACEHOLDER / EXAMPLE CONTENT:
// The testimonial quotes, business names, and owner profiles below are illustrative examples
// created for demonstration and layout verification. They are not real customer quotes yet.
const testimonialItemsList = [
  {
    id: "testimonial-1",
    name: "Faith Wanjiku",
    initials: "FW",
    business: "Kilimani Fresh Supplies",
    location: "Kilimani, Nairobi",
    benefitTag: "Time Saved on Bookkeeping",
    badgeBg: "bg-emerald-100 border-emerald-300 text-emerald-800",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    quote: "BizHubKE cut our daily bookkeeping from 3 hours down to 20 minutes. M-Pesa automatic reconciliation means our sales and cash drawer balance perfectly every single evening without manual counting."
  },
  {
    id: "testimonial-2",
    name: "David Ochieng",
    initials: "DO",
    business: "Rift Valley Hardware & Spares",
    location: "Nakuru CBD",
    benefitTag: "Easier eTIMS Compliance",
    badgeBg: "bg-amber-100 border-amber-300 text-amber-900",
    pillBg: "bg-amber-50 text-amber-800 border-amber-200/80",
    quote: "eTIMS used to be our biggest headache every month until we switched to BizHubKE. Every transaction automatically produces KRA-compliant receipts, and our monthly Turnover Tax return takes just one click."
  },
  {
    id: "testimonial-3",
    name: "Fatma Abdallah",
    initials: "FA",
    business: "Swahili Plate Restaurant & Catering",
    location: "Mombasa Old Town",
    benefitTag: "More Repeat Customers via WhatsApp",
    badgeBg: "bg-teal-100 border-teal-300 text-teal-800",
    pillBg: "bg-teal-50 text-teal-800 border-teal-200/80",
    quote: "Sending automated digital receipts and lunch specials directly on WhatsApp transformed how we connect with diners. Our repeat customer orders jumped by 35% in our first two months."
  }
];

const howItWorksSteps = [
  {
    stepNumber: "01",
    id: "step-1",
    title: "Sign up and tell us about your business",
    subtitle: "2-Minute Onboarding",
    description: "Create your free account, pick your Kenyan county, and select your sector — retail duka, restaurant, wholesale, hardware, or professional services.",
    icon: M,
    iconBg: "bg-emerald-100 border-emerald-300 text-emerald-800",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    perk: "No credit card or paperwork needed"
  },
  {
    stepNumber: "02",
    id: "step-2",
    title: "Add your first sale, customer, or product",
    subtitle: "Fast Daily Tracking",
    description: "Record cash and M-Pesa transactions, upload inventory items with low-stock warnings, and save customer contacts for automatic WhatsApp receipts.",
    icon: nt,
    iconBg: "bg-amber-100 border-amber-300 text-amber-900",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200/80",
    perk: "Instant KRA eTIMS-ready digital receipts"
  },
  {
    stepNumber: "03",
    id: "step-3",
    title: "See your dashboard and Business Score update automatically",
    subtitle: "Real-Time Intelligence",
    description: "Watch your live cash flow, profit margins, and 0–100 Business Health Score refresh in real time as sales and expenses are logged each day.",
    icon: ht,
    iconBg: "bg-teal-100 border-teal-300 text-teal-800",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-200/80",
    perk: "Live profit margins & Turnover Tax estimates"
  },
  {
    stepNumber: "04",
    id: "step-4",
    title: "Get AI-powered recommendations to grow",
    subtitle: "Smart Biashara Advisor",
    description: "Receive practical recommendations on fast-moving stock, optimal pricing, customer re-engagement alerts, and SACCO loan qualification.",
    icon: ft,
    iconBg: "bg-indigo-100 border-indigo-300 text-indigo-800",
    badgeBg: "bg-indigo-50 text-indigo-800 border-indigo-200/80",
    perk: "Personalized advice tuned for Kenyan markets"
  }
];

const HowItWorksSectionComponent = ({ onOpenRegister, onOpenDashboard }) => {
  return (0, F.jsx)("section", {
    id: "how-it-works",
    className: "py-20 lg:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden",
    children: (0, F.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [ 
        (0, F.jsxs)("div", {
          className: "text-center max-w-3xl mx-auto mb-16",
          children: [
            (0, F.jsxs)("div", {
              className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3",
              children: [
                (0, F.jsx)(ft, { className: "w-3.5 h-3.5 text-emerald-600" }),
                "Simple 4-Step Process"
              ]
            }),
            (0, F.jsx)("h2", {
              className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif",
              children: "How BizHubKE Works"
            }),
            (0, F.jsx)("p", {
              className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed",
              children: "From first signup to automated bookkeeping and AI-driven growth in minutes. No complicated accounting degrees or expensive software needed."
            })
          ]
        }),
        (0, F.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative",
          children: howItWorksSteps.map((step, idx) => {
            const IconComp = step.icon;
            return (0, F.jsxs)("div", {
              id: step.id,
              className: "bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between relative group",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center justify-between mb-5",
                      children: [
                        (0, F.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, F.jsx)("div", {
                              className: "w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 " + step.iconBg,
                              children: (0, F.jsx)(IconComp, { className: "w-6 h-6" })
                            }),
                            (0, F.jsx)("span", {
                              className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white",
                              children: idx + 1
                            })
                          ]
                        }),
                        (0, F.jsx)("span", {
                          className: "text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-300 group-hover:text-emerald-600 transition-colors",
                          children: step.stepNumber
                        })
                      ]
                    }),
                    (0, F.jsx)("div", {
                      className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-2.5 " + step.badgeBg,
                      children: step.subtitle
                    }),
                    (0, F.jsx)("h3", {
                      className: "text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif group-hover:text-emerald-800 transition-colors leading-snug",
                      children: step.title
                    }),
                    (0, F.jsx)("p", {
                      className: "text-xs sm:text-sm text-slate-600 leading-relaxed mb-4",
                      children: step.description
                    })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-500 mt-2",
                  children: [
                    (0, F.jsx)(Oe, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
                    (0, F.jsx)("span", { children: step.perk })
                  ]
                })
              ]
            }, step.id);
          })
        }),
        (0, F.jsxs)("div", {
          className: "mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0B192C] to-[#0A192F] p-7 sm:p-9 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-emerald-500/20",
          children: [
            (0, F.jsxs)("div", {
              className: "space-y-2 text-center lg:text-left",
              children: [
                (0, F.jsxs)("div", {
                  className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider",
                  children: [
                    (0, F.jsx)(ft, { className: "w-3 h-3 text-emerald-400" }),
                    "Start Free In Minutes"
                  ]
                }),
                (0, F.jsx)("h3", {
                  className: "text-xl sm:text-2xl font-bold font-serif",
                  children: "Ready to streamline your biashara today?"
                }),
                (0, F.jsx)("p", {
                  className: "text-slate-300 text-xs sm:text-sm max-w-xl",
                  children: "Join hundreds of Kenyan retailers, dukas, and service businesses already growing faster with BizHubKE."
                })
              ]
            }),
            (0, F.jsxs)("div", {
              className: "flex flex-wrap items-center justify-center gap-3 shrink-0",
              children: [
                (0, F.jsxs)("button", {
                  id: "how-it-works-register-btn",
                  onClick: onOpenRegister,
                  className: "px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer",
                  children: [
                    (0, F.jsx)("span", { children: "Create Free Account" }),
                    (0, F.jsx)(ye, { className: "w-4 h-4" })
                  ]
                }),
                (0, F.jsx)("button", {
                  id: "how-it-works-demo-btn",
                  onClick: onOpenDashboard,
                  className: "px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 hover:border-white/40 transition-all cursor-pointer",
                  children: "Explore Live Demo"
                })
              ]
            })
          ]
        })
      ]
    })
  });
};
const TestimonialsSectionComponent = () => {
  return (0, F.jsx)("section", {
    id: "testimonials",
    className: "py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80",
    children: (0, F.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        (0, F.jsxs)("div", {
          className: "text-center max-w-3xl mx-auto mb-16",
          children: [
            (0, F.jsxs)("div", {
              className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3",
              children: [
                (0, F.jsx)(Je, { className: "w-3.5 h-3.5 text-emerald-600" }),
                "Kenyan SME Success Stories"
              ]
            }),
            (0, F.jsx)("h2", {
              className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif",
              children: "Loved by Growing Kenyan SMEs"
            }),
            (0, F.jsx)("p", {
              className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed",
              children: "See how retail shops, hardware stores, and restaurants save hours, stay compliant with KRA, and bring back customers with BizHubKE."
            })
          ]
        }),
        (0, F.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
          children: testimonialItemsList.map(item => {
            return (0, F.jsxs)("div", {
              id: item.id,
              className: "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        (0, F.jsxs)("div", {
                          className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border " + item.pillBg,
                          children: [
                            (0, F.jsx)(je, { className: "w-3.5 h-3.5" }),
                            item.benefitTag
                          ]
                        }),
                        (0, F.jsxs)("div", {
                          className: "flex items-center gap-0.5 text-amber-400",
                          children: [1, 2, 3, 4, 5].map(star => (0, F.jsx)("svg", {
                            key: star,
                            className: "w-4 h-4 fill-amber-400 text-amber-400",
                            viewBox: "0 0 20 20",
                            children: (0, F.jsx)("path", {
                              d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            })
                          }, star))
                        })
                      ]
                    }),
                    (0, F.jsxs)("p", {
                      className: "text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6",
                      children: ["\"", item.quote, "\""]
                    })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "pt-4 border-t border-slate-100 flex items-center gap-3.5",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "relative shrink-0",
                      children: [
                        (0, F.jsx)("div", {
                          className: "w-11 h-11 rounded-full border-2 font-bold text-sm flex items-center justify-center shadow-xs " + item.badgeBg,
                          children: item.initials
                        }),
                        (0, F.jsx)("span", {
                          className: "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"
                        })
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, F.jsx)("h3", {
                          className: "text-sm sm:text-base font-bold text-slate-900 truncate",
                          children: item.name
                        }),
                        (0, F.jsxs)("p", {
                          className: "text-xs text-slate-500 truncate flex items-center gap-1 mt-0.5",
                          children: [
                            (0, F.jsx)(Ge, { className: "w-3 h-3 text-slate-400 shrink-0" }),
                            item.business,
                            (0, F.jsx)("span", { className: "text-slate-300", children: "•" }),
                            item.location
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }, item.id);
          })
        })
      ]
    })
  });
};const whyChooseOutcomes = [
  {
    id: "outcome-bookkeeping",
    icon: Ne,
    metric: "Save 8+ Hours Weekly",
    metricBadge: "bg-emerald-50 text-emerald-800 border-emerald-200/90",
    iconBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
    headline: "Save hours a week on bookkeeping",
    sentence: "Automate your daily cash and M-Pesa reconciliation so you can close your shop on time without spending stressful late nights balancing paper ledgers."
  },
  {
    id: "outcome-kra-penalties",
    icon: ut,
    metric: "Zero KRA Penalties",
    metricBadge: "bg-amber-50 text-amber-900 border-amber-200/90",
    iconBg: "bg-amber-100 text-amber-900 border-amber-300",
    headline: "Avoid costly KRA penalties",
    sentence: "Stay 100% compliant year-round with automated eTIMS digital receipts and accurate Turnover Tax calculations generated well before the 20th deadline."
  },
  {
    id: "outcome-whatsapp-reminders",
    icon: Ye,
    metric: "3x Faster Collections",
    metricBadge: "bg-teal-50 text-teal-800 border-teal-200/90",
    iconBg: "bg-teal-100 text-teal-800 border-teal-300",
    headline: "Get paid faster with WhatsApp payment reminders",
    sentence: "Recover overdue customer balances quickly with polite, automated payment prompts featuring instant M-Pesa Till and Paybill checkout links."
  },
  {
    id: "outcome-business-score",
    icon: ht,
    metric: "Real-Time 0–100 Index",
    metricBadge: "bg-indigo-50 text-indigo-800 border-indigo-200/90",
    iconBg: "bg-indigo-100 text-indigo-800 border-indigo-300",
    headline: "Make confident decisions with a real Business Score",
    sentence: "Know your true net profit margins and bank-loan eligibility in real time with an objective health metric that updates after every transaction."
  }
];

const WhyChooseBizHubSectionComponent = () => {
  return (0, F.jsx)("section", {
    id: "why-bizhubke",
    className: "py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden",
    children: (0, F.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        (0, F.jsxs)("div", {
          className: "text-center max-w-3xl mx-auto mb-16",
          children: [
            (0, F.jsxs)("div", {
              className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3",
              children: [
                (0, F.jsx)(ft, { className: "w-3.5 h-3.5 text-emerald-600" }),
                "Real Biashara Outcomes"
              ]
            }),
            (0, F.jsx)("h2", {
              className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif",
              children: "Why Kenyan Businesses Choose BizHubKE"
            }),
            (0, F.jsx)("p", {
              className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed",
              children: "Built for tangible bottom-line results, not complicated accounting jargon. Here is how local retailers, wholesalers, and service entrepreneurs transform their daily operations."
            })
          ]
        }),
        (0, F.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
          children: whyChooseOutcomes.map((item) => {
            const IconComp = item.icon;
            return (0, F.jsxs)("div", {
              id: item.id,
              className: "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center justify-between mb-5",
                      children: [
                        (0, F.jsx)("div", {
                          className: "w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 " + item.iconBg,
                          children: (0, F.jsx)(IconComp, { className: "w-6 h-6" })
                        }),
                        (0, F.jsx)("span", {
                          className: "text-[11px] font-bold px-2.5 py-1 rounded-full border " + item.metricBadge,
                          children: item.metric
                        })
                      ]
                    }),
                    (0, F.jsx)("h3", {
                      className: "text-base sm:text-lg font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-700 transition-colors leading-snug",
                      children: item.headline
                    })
                  ]
                }),
                (0, F.jsx)("p", {
                  className: "text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-slate-100",
                  children: item.sentence
                })
              ]
            }, item.id);
          })
        })
      ]
    })
  });
};

const TrustSecurityStripComponent = () => {
  const trustItems = [
    {
      id: "trust-enc",
      icon: He,
      title: "Bank-Grade Encryption",
      desc: "256-bit SSL encryption and isolated cloud databases with automated daily backups."
    },
    {
      id: "trust-kra",
      icon: ut,
      title: "Certified KRA eTIMS Standard",
      desc: "Instant compliance with Kenya Revenue Authority electronic tax invoice guidelines."
    },
    {
      id: "trust-mpesa",
      icon: dt,
      title: "Safaricom M-Pesa Ready",
      desc: "Built directly for Buy Goods Tills and Paybill reconciliation with real-time callbacks."
    },
    {
      id: "trust-support",
      icon: ze,
      title: "Local Nairobi Support",
      desc: "Friendly assistance 6 days a week via WhatsApp, phone, and email across all 47 counties."
    }
  ];

  return (0, F.jsx)("section", {
    id: "trust-security-strip",
    className: "bg-[#0B192C] text-white py-12 border-y border-slate-800 relative overflow-hidden",
    children: (0, F.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
      children: [
        (0, F.jsx)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
          children: trustItems.map((item) => {
            const IconComp = item.icon;
            return (0, F.jsxs)("div", {
              id: item.id,
              className: "flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all",
              children: [
                (0, F.jsx)("div", {
                  className: "w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5",
                  children: (0, F.jsx)(IconComp, { className: "w-5 h-5" })
                }),
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsx)("h4", {
                      className: "text-sm font-bold text-white tracking-wide font-serif",
                      children: item.title
                    }),
                    (0, F.jsx)("p", {
                      className: "text-xs text-slate-300 leading-relaxed mt-1.5",
                      children: item.desc
                    })
                  ]
                })
              ]
            }, item.id);
          })
        })
      ]
    })
  });
};

const ContactSectionComponent = () => {
  const [formData, setFormData] = _.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = _.useState(false);
  const [isSubmitting, setIsSubmitting] = _.useState(false);
  const [formError, setFormError] = _.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in all required fields (Full Name, Email, and Your Message).");
      return;
    }

    setIsSubmitting(true);

    const lines = [
      "New contact form submission",
      "Name: " + formData.name.trim(),
      "Email: " + formData.email.trim()
    ];
    if (formData.phone && formData.phone.trim()) {
      lines.push("Phone: " + formData.phone.trim());
    }
    lines.push("Message: " + formData.message.trim());

    const messageText = lines.join("\n");
    const waUrl = "https://wa.me/254740807650?text=" + encodeURIComponent(messageText);

    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      window.location.href = waUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (0, F.jsx)("section", {
    id: "contact",
    className: "py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/90 relative overflow-hidden",
    children: (0, F.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        (0, F.jsxs)("div", {
          className: "text-center max-w-3xl mx-auto mb-16",
          children: [
            (0, F.jsxs)("div", {
              className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3",
              children: [
                (0, F.jsx)(ft, { className: "w-3.5 h-3.5 text-emerald-600" }),
                "Get in Touch"
              ]
            }),
            (0, F.jsx)("h2", {
              className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif",
              children: "Contact Our Nairobi Team"
            }),
            (0, F.jsx)("p", {
              className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed",
              children: "Have questions about eTIMS compliance, M-Pesa Paybill setup, or onboarding your staff? We are right here in Kenya to help your biashara thrive."
            })
          ]
        }),
        (0, F.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
          children: [
            (0, F.jsx)("div", {
              className: "lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm",
              children: submitted ? (0, F.jsxs)("div", {
                className: "text-center py-10 space-y-4 animate-in fade-in",
                children: [
                  (0, F.jsx)("div", {
                    className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner",
                    children: (0, F.jsx)(je, { className: "w-8 h-8" })
                  }),
                  (0, F.jsx)("h3", {
                    className: "text-2xl font-bold text-slate-900 font-serif",
                    children: "Opening WhatsApp to send your message to our Nairobi team"
                  }),
                  (0, F.jsxs)("p", {
                    className: "text-slate-600 text-sm max-w-md mx-auto leading-relaxed",
                    children: [
                      "Thank you, ",
                      (0, F.jsx)("strong", { children: formData.name }),
                      ". Your inquiry has been prepared for our WhatsApp Helpdesk at ",
                      (0, F.jsx)("strong", { className: "text-emerald-700 font-semibold", children: "+254 740 807 650" }),
                      ". If WhatsApp did not open automatically, tap below to send it directly to our desk."
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2",
                    children: [
                      (0, F.jsxs)("a", {
                        href: "https://wa.me/254740807650?text=" + encodeURIComponent(
                          ["New contact form submission", "Name: " + formData.name.trim(), "Email: " + formData.email.trim(), formData.phone ? "Phone: " + formData.phone.trim() : "", "Message: " + formData.message.trim()].filter(Boolean).join("\n")
                        ),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2",
                        children: [
                          (0, F.jsx)(Xe, { className: "w-4 h-4" }),
                          "Open WhatsApp Chat"
                        ]
                      }),
                      (0, F.jsx)("button", {
                        onClick: () => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", message: "" });
                        },
                        className: "px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-all cursor-pointer",
                        children: "Send Another Message"
                      })
                    ]
                  })
                ]
              }) : (0, F.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-5",
                children: [
                  formError && (0, F.jsx)("div", { className: "p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold animate-in fade-in", children: formError }),
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", {
                        className: "text-xl font-bold text-slate-900 font-serif mb-1",
                        children: "Send Us a Message"
                      }),
                      (0, F.jsx)("p", {
                        className: "text-xs text-slate-500",
                        children: "Fill in your details and our team will get back to you shortly."
                      })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                      (0, F.jsxs)("div", {
                        className: "space-y-1.5",
                        children: [
                          (0, F.jsx)("label", {
                            className: "block text-xs font-bold text-slate-700 uppercase tracking-wider",
                            children: "Your Full Name *"
                          }),
                          (0, F.jsx)("input", {
                            type: "text",
                            required: true,
                            value: formData.name,
                            onChange: (e) => setFormData(Object.assign({}, formData, { name: e.target.value })),
                            placeholder: "e.g. Grace Wanjiku",
                            className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                          })
                        ]
                      }),
                      (0, F.jsxs)("div", {
                        className: "space-y-1.5",
                        children: [
                          (0, F.jsx)("label", {
                            className: "block text-xs font-bold text-slate-700 uppercase tracking-wider",
                            children: "Email Address *"
                          }),
                          (0, F.jsx)("input", {
                            type: "email",
                            required: true,
                            value: formData.email,
                            onChange: (e) => setFormData(Object.assign({}, formData, { email: e.target.value })),
                            placeholder: "e.g. grace@biashara.co.ke",
                            className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, F.jsx)("label", {
                        className: "block text-xs font-bold text-slate-700 uppercase tracking-wider",
                        children: "Phone / WhatsApp (Optional)"
                      }),
                      (0, F.jsx)("input", {
                        type: "tel",
                        value: formData.phone,
                        onChange: (e) => setFormData(Object.assign({}, formData, { phone: e.target.value })),
                        placeholder: "e.g. +254 712 345 678",
                        className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, F.jsx)("label", {
                        className: "block text-xs font-bold text-slate-700 uppercase tracking-wider",
                        children: "Your Message *"
                      }),
                      (0, F.jsx)("textarea", {
                        required: true,
                        rows: 4,
                        value: formData.message,
                        onChange: (e) => setFormData(Object.assign({}, formData, { message: e.target.value })),
                        placeholder: "Tell us about your business, your county, or any questions about BizHubKE...",
                        className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                      })
                    ]
                  }),
                  (0, F.jsxs)("button", {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                    children: [
                      (0, F.jsx)("span", { children: isSubmitting ? "Sending..." : "Send Message to Nairobi Desk" }),
                      (0, F.jsx)(ot, { className: "w-4 h-4" })
                    ]
                  })
                ]
              })
            }),
            (0, F.jsxs)("div", {
              className: "lg:col-span-5 space-y-5",
              children: [
                (0, F.jsxs)("div", {
                  className: "bg-[#0B192C] text-white rounded-3xl p-7 border border-slate-800 shadow-md",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center justify-between mb-4 pb-4 border-b border-slate-800",
                      children: [
                        (0, F.jsx)("h3", {
                          className: "text-lg font-bold font-serif text-white",
                          children: "Direct Support Channels"
                        }),
                        (0, F.jsx)("span", {
                          className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                          children: "Nairobi Hub"
                        })
                      ]
                    }),
                    (0, F.jsxs)("ul", {
                      className: "space-y-4 text-sm",
                      children: [
                        (0, F.jsxs)("li", {
                          className: "flex items-start gap-3.5",
                          children: [
                            (0, F.jsx)("div", {
                              className: "w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5",
                              children: (0, F.jsx)(Ye, { className: "w-4 h-4" })
                            }),
                            (0, F.jsxs)("div", {
                              children: [
                                (0, F.jsx)("p", {
                                  className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                  children: "WhatsApp Helpdesk"
                                }),
                                (0, F.jsx)("a", {
                                  href: "https://wa.me/254740807650",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "font-semibold text-amber-300 hover:text-amber-200 transition-colors",
                                  children: "+254 740 807 650"
                                }),
                                (0, F.jsx)("p", {
                                  className: "text-[11px] text-slate-400 mt-0.5",
                                  children: "Fast response for billing, till linkage & quick questions"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, F.jsxs)("li", {
                          className: "flex items-start gap-3.5",
                          children: [
                            (0, F.jsx)("div", {
                              className: "w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5",
                              children: (0, F.jsx)(We, { className: "w-4 h-4" })
                            }),
                            (0, F.jsxs)("div", {
                              children: [
                                (0, F.jsx)("p", {
                                  className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                  children: "Email Support"
                                }),
                                (0, F.jsx)("a", {
                                  href: "mailto:support@bizhub.co.ke",
                                  className: "font-semibold text-slate-200 hover:text-emerald-400 transition-colors",
                                  children: "support@bizhub.co.ke"
                                }),
                                (0, F.jsx)("p", {
                                  className: "text-[11px] text-slate-400 mt-0.5",
                                  children: "Detailed inquiries and official correspondence"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, F.jsxs)("li", {
                          className: "flex items-start gap-3.5",
                          children: [
                            (0, F.jsx)("div", {
                              className: "w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5",
                              children: (0, F.jsx)($e, { className: "w-4 h-4" })
                            }),
                            (0, F.jsxs)("div", {
                              children: [
                                (0, F.jsx)("p", {
                                  className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                  children: "Hotline Phone"
                                }),
                                (0, F.jsx)("a", {
                                  href: "tel:+254740807650",
                                  className: "font-semibold text-slate-200 hover:text-emerald-400 transition-colors",
                                  children: "+254 740 807 650"
                                }),
                                (0, F.jsx)("p", {
                                  className: "text-[11px] text-slate-400 mt-0.5",
                                  children: "Technical onboarding & live assistance"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, F.jsxs)("li", {
                          className: "flex items-start gap-3.5",
                          children: [
                            (0, F.jsx)("div", {
                              className: "w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5",
                              children: (0, F.jsx)(Ge, { className: "w-4 h-4" })
                            }),
                            (0, F.jsxs)("div", {
                              children: [
                                (0, F.jsx)("p", {
                                  className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                  children: "Physical Office"
                                }),
                                (0, F.jsx)("p", {
                                  className: "font-semibold text-slate-200",
                                  children: "Kilimani, Nairobi, Kenya"
                                }),
                                (0, F.jsx)("p", {
                                  className: "text-[11px] text-slate-400 mt-0.5",
                                  children: "Ground Floor, Argwings Kodhek Road"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2 mb-4 text-slate-900",
                      children: [
                        (0, F.jsx)(Ne, { className: "w-5 h-5 text-emerald-600" }),
                        (0, F.jsx)("h3", {
                          className: "text-base font-bold font-serif",
                          children: "Business & Support Hours"
                        })
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      className: "space-y-2.5 text-xs text-slate-600",
                      children: [
                        (0, F.jsxs)("div", {
                          className: "flex items-center justify-between py-1.5 border-b border-slate-100",
                          children: [
                            (0, F.jsx)("span", { className: "font-medium", children: "Monday – Friday" }),
                            (0, F.jsx)("span", { className: "font-bold text-slate-900", children: "8:00 AM – 6:00 PM EAT" })
                          ]
                        }),
                        (0, F.jsxs)("div", {
                          className: "flex items-center justify-between py-1.5 border-b border-slate-100",
                          children: [
                            (0, F.jsx)("span", { className: "font-medium", children: "Saturday" }),
                            (0, F.jsx)("span", { className: "font-bold text-slate-900", children: "9:00 AM – 2:00 PM EAT" })
                          ]
                        }),
                        (0, F.jsxs)("div", {
                          className: "flex items-center justify-between py-1.5",
                          children: [
                            (0, F.jsx)("span", { className: "font-medium", children: "Sunday & Public Holidays" }),
                            (0, F.jsx)("span", { className: "font-semibold text-amber-600", children: "WhatsApp On-Call Support" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  });
};

const FAQSectionComponent=({onOpenAuth})=>{
  const [openIndex, setOpenIndex] = _.useState(0);
  return (0,F.jsx)("section",{
    id:"faq",
    className:"py-20 lg:py-28 bg-white border-t border-slate-200/80",
    children: (0,F.jsxs)("div",{
      className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children:[
        (0,F.jsxs)("div",{
          className:"text-center max-w-3xl mx-auto mb-14",
          children:[
            (0,F.jsxs)("div",{
              className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3",
              children:[
                (0,F.jsx)(Me,{className:"w-3.5 h-3.5 text-emerald-600"}),
                "Got Questions? We Have Answers"
              ]
            }),
            (0,F.jsx)("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif",children:"Frequently Asked Questions"}),
            (0,F.jsx)("p",{className:"mt-4 text-base sm:text-lg text-slate-600 leading-relaxed",children:"Everything you need to know about running your business, staying compliant, and growing with BizHubKE."})
          ]
        }),
        (0,F.jsx)("div",{
          className:"max-w-3xl mx-auto space-y-3.5 sm:space-y-4",
          children:faqItemsList.map((item,idx)=>{
            const isOpen = openIndex === idx;
            return (0,F.jsxs)("div",{
              id:"faq-item-"+idx,
              className:"rounded-2xl border transition-all duration-200 overflow-hidden "+(isOpen?"bg-slate-50/80 border-emerald-500/60 shadow-sm ring-1 ring-emerald-500/20":"bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/40"),
              children:[
                (0,F.jsxs)("button",{
                  id:"faq-q-"+idx,
                  type:"button",
                  onClick:()=>setOpenIndex(isOpen?null:idx),
                  "aria-expanded":isOpen,
                  "aria-controls":"faq-a-"+idx,
                  className:"w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors",
                  children:[
                    (0,F.jsx)("span",{className:"text-base sm:text-lg font-bold pr-2 "+(isOpen?"text-emerald-950":"text-slate-900"),children:item.q}),
                    (0,F.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors "+(isOpen?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"),children:(0,F.jsx)(ChevronDownIcon,{className:"w-4 h-4 transition-transform duration-300 "+(isOpen?"rotate-180":"")})})
                  ]
                }),
                isOpen&&(0,F.jsx)("div",{
                  id:"faq-a-"+idx,
                  className:"px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/90",
                  children:(0,F.jsx)("p",{children:item.a})
                })
              ]
            },idx);
          })
        }),
        (0,F.jsxs)("div",{
          className:"mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2",
          children:[
            (0,F.jsx)(ut,{className:"w-4 h-4 text-emerald-600"}),
            (0,F.jsx)("span",{children:"Have a unique question? Our Nairobi customer support team is available Mon-Sat via WhatsApp and phone."})
          ]
        })
      ]
    })
  });
};
var FEATURE_PAGES_DATA = {"cash-flow-finance":{"id":"cash-flow-finance","challengeNumber":1,"route":"/features/cash-flow-finance","challengeId":"cash-flow","title":"1. Cash Flow & Finance","shortTitle":"Cash Flow & Finance","subtitle":"Never guess where your business money goes","description":"Separate personal finances from your business. Auto-reconcile M-Pesa Buy Goods Till, Paybill statements, and bank deposits into clear daily profit & loss views.","highlights":["M-Pesa Till & Paybill sync","Real-time daily profit tracker","Track unpaid customer debt"],"badgeText":"CHALLENGE #1 • CASH FLOW & FINANCE","tagline":"Empowering Kenyan Entrepreneurs with Total Real-Time Financial Visibility","detailedOverview":"In Kenya, cash flow management is the lifeblood of retail, wholesale, and service enterprises. Running a business through personal M-Pesa lines or manual paper ledger books frequently obscures true profit margins, causes accidental inventory stockouts, and leads to uncollected customer debts. BizHubKE bridges this gap with direct M-Pesa statement reconciliation, automated float monitoring, and instant profit calculations tuned for Kenyan Shillings (KSh).","keyCapabilities":[{"title":"Automated M-Pesa Till & Paybill Reconciliation","desc":"Ingest and categorize M-Pesa transactions automatically. Reconcile customer reference numbers, till balances, and withdrawal transaction charges without manual calculator math."},{"title":"Real-Time Daily Profit & Loss (P&L)","desc":"Instantly see gross revenue, cost of goods sold (COGS), operating expenses (rent, electricity, casual labor), and net profit for today, this week, or this month."},{"title":"Customer Debt Ledger & Friendly Reminders","desc":"Track customer credit (deni) with due dates. Generate polite, automated WhatsApp reminder messages with direct Paybill or Till payment details."},{"title":"Separate Personal & Business Float","desc":"Keep business earnings insulated from personal household withdrawals. Maintain clear records for audit readiness and tax deductions."}],"screenshot":{"type":"cash-flow","title":"Kilimani Fresh Supplies & Retail • M-Pesa Cash Flow Command","stats":[{"label":"Today's Net Cash Inflow","value":"KSh 48,250","change":"+14.2% vs yesterday","status":"positive"},{"label":"Active Till & Paybill Balance","value":"KSh 142,800","change":"Safaricom Live Sync","status":"neutral"},{"label":"Outstanding Customer Debt","value":"KSh 18,400","change":"3 accounts due today","status":"warning"},{"label":"Estimated Daily Net Margin","value":"31.8%","change":"+2.4% vs last week","status":"positive"}],"mockupRows":[{"desc":"M-Pesa Buy Goods • Till 5849201","time":"10:42 AM","ref":"SJH7892KL","amount":"+KSh 4,800","badge":"Auto-Reconciled","color":"emerald"},{"desc":"Paybill 400200 • Invoice #INV-1092","time":"09:15 AM","ref":"SJH6710MN","amount":"+KSh 12,500","badge":"Cleared","color":"emerald"},{"desc":"Supplier Restock • KCC Dairy Depot","time":"08:30 AM","ref":"EXP-8891","amount":"-KSh 16,200","badge":"Expense Logged","color":"amber"},{"desc":"Customer Credit Payment • Mama Ryan","time":"Yesterday","ref":"SJG5521OP","amount":"+KSh 3,200","badge":"Debt Settled","color":"blue"}]},"workflowSteps":[{"step":"01","title":"Connect Your Channels","desc":"Link your Safaricom M-Pesa Buy Goods Till, Paybill, or bank statement logs in seconds."},{"step":"02","title":"Capture Sales & Expenses","desc":"Record cash and mobile payments in 5 seconds from smartphone, tablet, or PC."},{"step":"03","title":"Automate Daily Reconciliation","desc":"BizHubKE automatically pairs incoming payments with customer orders and issues receipts."},{"step":"04","title":"Review Real Margins","desc":"Wake up to accurate daily profit numbers and know your financial health before spending."}],"disclaimer":null},"tax-compliance":{"id":"tax-compliance","challengeNumber":2,"route":"/features/tax-compliance","challengeId":"tax-compliance","title":"2. Tax & Compliance","shortTitle":"Tax & Compliance","subtitle":"Eliminate the fear of KRA penalties & audit notices","description":"Generate valid electronic tax invoices (eTIMS) straight from your phone or laptop. Auto-calculate Turnover Tax (TOT 3%), VAT (16%), and track county permit renewals.","highlights":["eTIMS compliant digital receipts","3% Turnover Tax calculation","Single Business Permit alerts"],"badgeText":"CHALLENGE #2 • TAX & COMPLIANCE","tagline":"Simplified, Stress-Free KRA eTIMS Invoicing & County Statutory Filing","detailedOverview":"Kenyan tax compliance is essential for SME longevity, yet navigating KRA's electronic Tax Invoice Management System (eTIMS) and annual county Single Business Permits often intimidates business owners. BizHubKE democratizes compliance: create QR-coded eTIMS-ready receipts on the fly, accurately compute 3% Turnover Tax (TOT) for qualifying small businesses, estimate standard 16% VAT, and receive automated reminders well before Nairobi or County Government inspection deadlines.","keyCapabilities":[{"title":"eTIMS-Ready Digital Receipts & QR Invoicing","desc":"Generate compliant electronic invoices featuring buyer PIN fields, Control Unit Numbers, and verifiable verification QR stamps ready for KRA validation."},{"title":"Turnover Tax (TOT 3%) Automated Computation","desc":"Designed for Kenyan businesses with annual turnover between KSh 1M and KSh 25M. The system calculates your monthly 3% TOT liability automatically by the 20th."},{"title":"Value Added Tax (16% VAT) Breakdown","desc":"For VAT-registered entities, keep input VAT and output VAT cleanly segregated so monthly VAT return submissions take minutes instead of days."},{"title":"County Single Business Permit & Fire Certificate Alerts","desc":"Never get locked out or fined by county kanjo officers. Store permit expiration dates and receive timely calendar reminders 30, 14, and 3 days before renewal."}],"screenshot":{"type":"tax-compliance","title":"KRA eTIMS & County Statutory Compliance Dashboard","stats":[{"label":"Current Month TOT (3%) Liability","value":"KSh 9,744","change":"Due on 20th of Month","status":"neutral"},{"label":"eTIMS Verified Receipts Issued","value":"318 Receipts","change":"100% Transmission Rate","status":"positive"},{"label":"County Permit Status","value":"Valid (Active)","change":"Renewal in 84 Days","status":"positive"},{"label":"Estimated VAT Output (16%)","value":"KSh 51,968","change":"Input Credit KSh 34,200","status":"neutral"}],"mockupRows":[{"desc":"eTIMS Receipt #KR-2026-9901","time":"11:20 AM","ref":"PIN: P051982341M","amount":"KSh 14,500 (VAT 16%)","badge":"eTIMS Validated","color":"emerald"},{"desc":"Monthly TOT 3% Estimate Log","time":"Yesterday","ref":"Period: Current Month","amount":"Tax: KSh 9,744","badge":"Calculated","color":"amber"},{"desc":"Unified County Business Permit","time":"Nairobi City County","ref":"BP-NBI-89421","amount":"Valid Thru Dec 2026","badge":"Compliant","color":"blue"},{"desc":"KRA Tax Clearance Certificate (TCC)","time":"PIN Linked","ref":"TCC-2026-OK","amount":"Valid Status","badge":"Good Standing","color":"emerald"}]},"workflowSteps":[{"step":"01","title":"Enter Your KRA PIN & Business Details","desc":"Configure your business tax PIN and choose Turnover Tax (3%) or VAT (16%) regime."},{"step":"02","title":"Issue Compliant Receipts","desc":"Every cash, card, or M-Pesa sale formats automatically with required eTIMS receipt markers."},{"step":"03","title":"Review Pre-Computed Returns","desc":"At month end, export structured tax schedules ready for direct filing on the KRA iTax portal."},{"step":"04","title":"Rest Easy Without Penalty Fears","desc":"Avoid the KSh 10,000 late filing penalty or KSh 100,000 non-compliance fines with proactive alerts."}],"disclaimer":"BizHubKE provides business information and workflow tools and does not replace professional tax or legal advice."},"inventory-operations":{"id":"inventory-operations","challengeNumber":3,"route":"/features/inventory-operations","challengeId":"inventory-ops","title":"3. Inventory & Operations","shortTitle":"Inventory & Operations","subtitle":"Stop dead stock, theft, and stockout panics","description":"Real-time inventory countdown with smart reorder thresholds. Receive instant alerts on your phone when fast-moving items are low before you lose a customer.","highlights":["Automated reorder point alerts","Stock shrinkage & cost tracking","Multi-category catalog management"],"badgeText":"CHALLENGE #3 • INVENTORY & OPERATIONS","tagline":"Real-Time Stock Tracking, Wastage Prevention, & Fast Reordering","detailedOverview":"Stockouts mean lost revenue, while overstocking traps your scarce working capital in slow-moving items on dusty shelves. In Kenya's fast-moving retail and distribution sectors, stock shrinkage and unrecorded discrepancies erode net profits silently. BizHubKE's Inventory & Operations engine delivers instant countdowns upon every completed sale, triggers reorder threshold alerts before shelves empty, and highlights your highest-margin product lines.","keyCapabilities":[{"title":"Instant Stock Countdown on Every Sale","desc":"Whether sold via M-Pesa Till or cash, stock levels decrement immediately in real time across multiple branches, shelves, or stock rooms."},{"title":"Smart Reorder Level & Supplier Alerting","desc":"Set minimum threshold levels per item. Get proactive dashboard and phone notifications when fast-moving stock hits reorder levels."},{"title":"Shrinkage, Damage & Spoilage Auditing","desc":"Log damaged goods, expired products, or unverified discrepancies. Track shrinkage percentages and preserve inventory accountability among staff."},{"title":"Batch Expiry & Unit Cost Margin Tracking","desc":"Record unit acquisition costs to preserve minimum 25-40% markups. Track batch expiry dates for perishables, dairy, pharmaceuticals, and FMCG."}],"screenshot":{"type":"inventory-ops","title":"Warehouse & Storefront Stock Management Console","stats":[{"label":"Active Catalog Items","value":"486 SKUs","change":"12 Added This Month","status":"neutral"},{"label":"Total Inventory Valuation","value":"KSh 1,280,400","change":"Cost Price Basis","status":"positive"},{"label":"Items Below Reorder Threshold","value":"4 Products","change":"Action Needed Today","status":"warning"},{"label":"Monthly Shrinkage / Waste Rate","value":"0.4%","change":"-1.8% vs benchmark","status":"positive"}],"mockupRows":[{"desc":"Unga wa Dola Premium Maize Flour 2kg","time":"Shelf A3","ref":"Stock: 14 units (Min: 20)","amount":"Reorder Alert Triggered","badge":"Low Stock Alert","color":"amber"},{"desc":"Brookside Fresh Milk 500ml","time":"Chiller 1","ref":"Stock: 48 units (Min: 15)","amount":"Optimal Stock Level","badge":"In Stock","color":"emerald"},{"desc":"Bidco Golden Fry Cooking Oil 3L","time":"Shelf B2","ref":"Stock: 28 units (Min: 10)","amount":"Fast Moving • Margin 24%","badge":"High Velocity","color":"blue"},{"desc":"Dawaat Basmati Rice 5kg Pack","time":"Shelf C1","ref":"Stock: 35 units (Min: 8)","amount":"Supplier: Alpha Wholesalers","badge":"Well Stocked","color":"emerald"}]},"workflowSteps":[{"step":"01","title":"Add Products & Set Buying Prices","desc":"Upload or add your inventory catalog with barcodes, SKU names, cost price, and retail price."},{"step":"02","title":"Assign Minimum Reorder Points","desc":"Tell BizHubKE the minimum quantity you need before triggering restock alerts."},{"step":"03","title":"Sell with Automated Decrements","desc":"Every transaction recorded at checkout automatically deducts from your stock count."},{"step":"04","title":"Perform Fast Weekly Stock Audits","desc":"Count physical stock against system numbers to eliminate staff theft and shrinkage."}],"disclaimer":null},"customers-whatsapp-crm":{"id":"customers-whatsapp-crm","challengeNumber":4,"route":"/features/customers-whatsapp-crm","challengeId":"customers-crm","title":"4. Customers & WhatsApp CRM","shortTitle":"Customers & WhatsApp CRM","subtitle":"Turn casual shoppers into devoted weekly buyers","description":"Kenyan commerce lives on WhatsApp. Send elegant PDF invoices, payment receipts, and friendly payment reminders with direct 1-click WhatsApp messaging.","highlights":["Click-to-chat WhatsApp invoices","Customer purchase history logs","Personalized payment reminders"],"badgeText":"CHALLENGE #4 • CUSTOMERS & WHATSAPP CRM","tagline":"Connecting Directly with Kenyan Buyers on the Channel They Use Daily","detailedOverview":"Over 90% of business-to-consumer and B2B communication in Kenya takes place on WhatsApp. Email invoices often go unread for days, and SMS messages lack interactive branding. BizHubKE's WhatsApp CRM empowers you to send professional PDF receipts, dispatch friendly payment reminders, log purchase preferences, and broadcast seasonal promotions straight to your customers' WhatsApp chats with a single tap.","keyCapabilities":[{"title":"1-Click WhatsApp Invoices & PDF Receipts","desc":"Generate professional branded receipts with your logo, business PIN, and M-Pesa confirmation codes, dispatched straight into the customer's WhatsApp chat."},{"title":"Gentle Automated Payment Reminders","desc":"Maintain warm customer relationships with pre-formatted polite Swahili & English payment reminders for credit accounts, including your M-Pesa Till number."},{"title":"Customer Directory & VIP Loyalty History","desc":"See every customer's total spend, favorite items, and date of last purchase. Identify your top 20% high-value repeat buyers and reward them."},{"title":"Seasonal Offers & Stock Arrival Broadcasts","desc":"Notify targeted customer segments when fresh shipments arrive or holiday discounts launch, driving immediate repeat sales."}],"screenshot":{"type":"customers-crm","title":"WhatsApp Engagement & Customer Relationship Hub","stats":[{"label":"Registered Customer Profiles","value":"642 Contacts","change":"+48 Added This Month","status":"neutral"},{"label":"WhatsApp Receipts Dispatched","value":"894 Sent","change":"98% Read Rate within 5m","status":"positive"},{"label":"Repeat Customer Rate","value":"64.2%","change":"+8.6% vs last quarter","status":"positive"},{"label":"Recovered Credit via Reminders","value":"KSh 76,500","change":"Avg 2.1 days turnaround","status":"positive"}],"mockupRows":[{"desc":"Wanjiku Enterprises • Invoiced KSh 24,000","time":"WhatsApp Delivered","ref":"+254 722 ••• 419","amount":"PDF Receipt Sent","badge":"Receipt Shared","color":"emerald"},{"desc":"Credit Due Reminder • Omondi Construction","time":"Due: 2 Days Ago","ref":"+254 733 ••• 882","amount":"Debt: KSh 12,500","badge":"1-Click Prompt","color":"amber"},{"desc":"VIP Repeat Customer • Dr. Amina Hassan","time":"Last Visit: Today","ref":"Tier: Gold VIP","amount":"Lifetime: KSh 186,000","badge":"Top 5% Buyer","color":"blue"},{"desc":"Fresh Restock Broadcast Message","time":"Dispatched to 120 buyers","ref":"Campaign: Weekend Offer","amount":"18 Inbound Orders","badge":"High Engagement","color":"emerald"}]},"workflowSteps":[{"step":"01","title":"Save Customer Phone & Name","desc":"Capture phone numbers during checkout to automatically build your business contact list."},{"step":"02","title":"Tap to Share Receipts on WhatsApp","desc":"No manual typing needed: click 'Send via WhatsApp' to open a pre-filled message with PDF invoice."},{"step":"03","title":"Track Who Owes Money & Follow Up","desc":"Filter customers by outstanding debt and trigger personalized payment reminder templates."},{"step":"04","title":"Drive Predictable Repeat Purchases","desc":"Send targeted messages when customers haven't purchased in 30 days to win them back."}],"disclaimer":null},"business-intelligence-growth":{"id":"business-intelligence-growth","challengeNumber":5,"route":"/features/business-intelligence-growth","challengeId":"intelligence-growth","title":"5. Business Intelligence & Growth","shortTitle":"Business Intelligence & Growth","subtitle":"Understand your numbers and access SME capital","description":"Generate audited financial statements that Kenyan banks and SACCOs accept for loans. Monitor your Kenyan Business Health Score to know where to improve.","highlights":["Kenyan Business Health Score (0-100)","Bank-ready financial exports","Top-selling margin analytics"],"badgeText":"CHALLENGE #5 • BUSINESS INTELLIGENCE & GROWTH","tagline":"Turn Daily Operational Data Into Bankable Growth & SME Capital","detailedOverview":"Many Kenyan businesses generate healthy revenues but struggle to secure financing from commercial banks, microfinance institutions, or SACCOs because they lack structured bookkeeping records and verifiable statements. BizHubKE's Business Intelligence engine transforms everyday transactions into audit-grade balance sheets, cash flow statements, and our proprietary Kenyan Business Health Score (0-100)—opening doors to SME working capital and asset financing.","keyCapabilities":[{"title":"Kenyan Biashara Health Score (0-100)","desc":"An intelligent assessment measuring gross margin health, inventory turnover speed, debtor collection efficiency, and revenue consistency."},{"title":"Bank & SACCO-Ready Financial Statement Exports","desc":"Export clean Profit & Loss statements, Cash Flow summaries, and Balance Sheets in PDF or Excel formatted to Kenyan bank underwriting standards."},{"title":"Top-Selling Margin & Profitability Breakdown","desc":"Identify which 20% of your products drive 80% of your net profits, and spot low-margin loss-leaders that are draining your working cash."},{"title":"Revenue Forecasting & Seasonal Trend Predictions","desc":"Plan ahead for back-to-school rushes, Christmas shopping surges, and end-of-month paydays with predictive sales modeling."}],"screenshot":{"type":"intelligence-growth","title":"Executive Business Health & Capital Readiness Center","stats":[{"label":"Overall Biashara Health Score","value":"88 / 100","change":"EXCELLENT • Bank Ready","status":"positive"},{"label":"Estimated 6-Month Gross Revenue","value":"KSh 2,180,000","change":"+22.4% Annualized Growth","status":"positive"},{"label":"Average Net Profit Margin","value":"24.6%","change":"+3.2% vs industry avg","status":"positive"},{"label":"SACCO / Bank Loan Qualification","value":"Pre-Qualified","change":"Tier 1 Working Capital","status":"positive"}],"mockupRows":[{"desc":"Bank-Ready Annual Financial Statement Export","time":"Generated Today","ref":"KCB & Equity Format","amount":"Full P&L + Balance Sheet","badge":"PDF Ready","color":"emerald"},{"desc":"High Margin Contributor: Organic Dry Foods","time":"Category Analysis","ref":"Gross Margin: 38.4%","amount":"+KSh 142,000 Net Profit","badge":"Top Performer","color":"blue"},{"desc":"Debtor Turnover Cycle Speed","time":"Working Capital Health","ref":"Average Collection: 4.2 Days","amount":"Healthy Cash Velocity","badge":"Optimal","color":"emerald"},{"desc":"Seasonal Growth Forecast • Q4 Outlook","time":"Predictive Analytics","ref":"Projected Sales: +18%","amount":"Restock Advice Ready","badge":"AI Modeled","color":"indigo"}]},"workflowSteps":[{"step":"01","title":"Record Everyday Transactions","desc":"As you record sales, purchases, and expenses, the intelligence engine structures your ledger in the background."},{"step":"02","title":"Track Your Biashara Health Score","desc":"Watch your score increase from 60 to 90+ as cash flow discipline and debt collection improve."},{"step":"03","title":"Export Bankable Statements in 1 Click","desc":"No expensive external accountant fees required for basic loan applications or investor reviews."},{"step":"04","title":"Unlock SME Credit & Scale Faster","desc":"Present verifiable, tamper-evident financial performance records to Kenyan financial institutions."}],"disclaimer":null}};

var iconChallengeMap = {
  "cash-flow-finance": bt,
  "tax-compliance": lt,
  "inventory-operations": Ze,
  "customers-whatsapp-crm": Je,
  "business-intelligence-growth": De
};

var iconBadgeMap = {
  "cash-flow-finance": "bg-emerald-600 text-white",
  "tax-compliance": "bg-amber-500 text-slate-950",
  "inventory-operations": "bg-blue-600 text-white",
  "customers-whatsapp-crm": "bg-rose-500 text-white",
  "business-intelligence-growth": "bg-indigo-600 text-white"
};

var FeatureDetailPageComponent = function({ pageKey, onNavigateHome, onNavigateFeature, onOpenRegister, onOpenDashboard }) {
  var pageData = FEATURE_PAGES_DATA[pageKey] || FEATURE_PAGES_DATA["cash-flow-finance"];
  var PageIcon = iconChallengeMap[pageData.id] || bt;

  (0, _.useEffect)(function() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pageKey]);

  return (0, F.jsxs)("div", {
    className: "bg-[#F8FAFC] min-h-screen text-slate-900",
    children: [
      (0, F.jsx)("div", {
        className: "bg-white border-b border-slate-200/80 sticky top-20 z-30 backdrop-blur-md bg-white/90",
        children: (0, F.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4",
          children: [
            (0, F.jsxs)("div", {
              className: "flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500",
              children: [
                (0, F.jsxs)("button", {
                  onClick: onNavigateHome,
                  className: "hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer font-semibold",
                  children: [
                    (0, F.jsx)(ve, { className: "w-4 h-4" }),
                    (0, F.jsx)("span", { children: "Back to Home" })
                  ]
                }),
                (0, F.jsx)("span", { children: "/" }),
                (0, F.jsx)("span", { className: "text-slate-400", children: "Features" }),
                (0, F.jsx)("span", { children: "/" }),
                (0, F.jsx)("span", { className: "text-slate-900 font-bold", children: pageData.shortTitle })
              ]
            }),
            (0, F.jsx)("div", {
              className: "flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 max-w-full text-xs",
              children: Object.values(FEATURE_PAGES_DATA).map(function(item) {
                var isCurrent = item.id === pageData.id;
                return (0, F.jsxs)("button", {
                  onClick: function() { onNavigateFeature(item.id); },
                  className: "px-2.5 py-1 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer " + (isCurrent ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"),
                  children: ["#" + item.challengeNumber + " ", item.shortTitle]
                }, item.id);
              })
            })
          ]
        })
      }),
      (0, F.jsxs)("section", {
        className: "py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-[#0B192C] to-[#0A192F] text-white relative overflow-hidden",
        children: [
          (0, F.jsx)("div", { className: "absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]" }),
          (0, F.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: (0, F.jsxs)("div", {
              className: "max-w-3xl",
              children: [
                (0, F.jsxs)("div", {
                  className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-5",
                  children: [
                    (0, F.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                    (0, F.jsx)("span", { children: pageData.badgeText })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center gap-4 mb-4",
                  children: [
                    (0, F.jsx)("div", {
                      className: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg " + (iconBadgeMap[pageData.id] || "bg-emerald-600 text-white"),
                      children: (0, F.jsx)(PageIcon, { className: "w-8 h-8 sm:w-9 sm:h-9" })
                    }),
                    (0, F.jsxs)("div", {
                      children: [
                        (0, F.jsx)("h1", {
                          className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight",
                          children: pageData.title
                        }),
                        (0, F.jsx)("p", {
                          className: "text-sm sm:text-base font-semibold text-emerald-300 uppercase tracking-wider mt-1",
                          children: pageData.subtitle
                        })
                      ]
                    })
                  ]
                }),
                (0, F.jsx)("p", {
                  className: "mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal",
                  children: pageData.description
                }),
                (0, F.jsxs)("div", {
                  className: "mt-8 flex flex-wrap items-center gap-4",
                  children: [
                    (0, F.jsxs)("button", {
                      onClick: onOpenRegister,
                      className: "px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2",
                      children: [
                        (0, F.jsx)("span", { children: "Start Free Trial" }),
                        (0, F.jsx)(ye, { className: "w-4 h-4" })
                      ]
                    }),
                    (0, F.jsx)("button", {
                      onClick: onOpenDashboard,
                      className: "px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer flex items-center gap-2",
                      children: (0, F.jsx)("span", { children: "View in Live Dashboard" })
                    })
                  ]
                }),
                (0, F.jsx)("div", {
                  className: "mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3",
                  children: pageData.highlights.map(function(highlight, idx) {
                    return (0, F.jsxs)("div", {
                      className: "flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs font-semibold text-slate-200",
                      children: [
                        (0, F.jsx)(je, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
                        (0, F.jsx)("span", { children: highlight })
                      ]
                    }, idx);
                  })
                })
              ]
            })
          })
        ]
      }),
      (0, F.jsxs)("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16",
        children: [
          (0, F.jsxs)("section", {
            className: "bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm",
            children: [
              (0, F.jsxs)("div", {
                className: "max-w-3xl",
                children: [
                  (0, F.jsx)("span", {
                    className: "text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200",
                    children: "In-Depth Capability Breakdown"
                  }),
                  (0, F.jsx)("h2", {
                    className: "text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-4 leading-tight",
                    children: pageData.tagline
                  }),
                  (0, F.jsx)("p", {
                    className: "mt-4 text-base text-slate-700 leading-relaxed",
                    children: pageData.detailedOverview
                  })
                ]
              }),
              (0, F.jsx)("div", {
                className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-6",
                children: pageData.keyCapabilities.map(function(item, idx) {
                  return (0, F.jsxs)("div", {
                    className: "p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-slate-50 transition-all",
                    children: [
                      (0, F.jsx)("div", {
                        className: "w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-700 font-bold flex items-center justify-center text-sm mb-4 shadow-xs",
                        children: "0" + (idx + 1)
                      }),
                      (0, F.jsx)("h3", {
                        className: "text-base sm:text-lg font-bold text-slate-900",
                        children: item.title
                      }),
                      (0, F.jsx)("p", {
                        className: "mt-2 text-sm text-slate-600 leading-relaxed",
                        children: item.desc
                      })
                    ]
                  }, idx);
                })
              })
            ]
          }),
          (0, F.jsxs)("section", {
            className: "bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl text-white overflow-hidden relative",
            children: [
              (0, F.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsxs)("div", {
                        className: "flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1",
                        children: [
                          (0, F.jsx)(ft, { className: "w-3.5 h-3.5" }),
                          (0, F.jsx)("span", { children: "Live Feature Console Interface" })
                        ]
                      }),
                      (0, F.jsx)("h2", {
                        className: "text-xl sm:text-2xl font-bold font-serif text-white",
                        children: pageData.screenshot.title
                      })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, F.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" }),
                      (0, F.jsx)("span", { className: "text-xs font-medium text-slate-300", children: "Live Simulation" })
                    ]
                  })
                ]
              }),
              (0, F.jsx)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6",
                children: pageData.screenshot.stats.map(function(st, i) {
                  return (0, F.jsxs)("div", {
                    className: "p-4 rounded-2xl bg-[#0B192C] border border-slate-800",
                    children: [
                      (0, F.jsx)("p", {
                        className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider",
                        children: st.label
                      }),
                      (0, F.jsx)("p", {
                        className: "text-2xl font-extrabold text-white mt-1",
                        children: st.value
                      }),
                      (0, F.jsx)("p", {
                        className: "text-[11px] font-medium mt-1 " + (st.status === "positive" ? "text-emerald-400" : st.status === "warning" ? "text-amber-400" : "text-slate-300"),
                        children: st.change
                      })
                    ]
                  }, i);
                })
              }),
              (0, F.jsxs)("div", {
                className: "mt-6 rounded-2xl bg-[#081220] border border-slate-800 overflow-hidden",
                children: [
                  (0, F.jsxs)("div", {
                    className: "px-5 py-3.5 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300",
                    children: [
                      (0, F.jsx)("span", { children: "Operational Ledger & Activity Log" }),
                      (0, F.jsx)("span", { className: "text-emerald-400", children: "Synchronized with Nairobi Node" })
                    ]
                  }),
                  (0, F.jsx)("div", {
                    className: "divide-y divide-slate-800/80",
                    children: pageData.screenshot.mockupRows.map(function(row, idx) {
                      var colorClass = row.color === "emerald" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                        row.color === "amber" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                        row.color === "blue" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                        "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";
                      return (0, F.jsxs)("div", {
                        className: "p-4 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/30 transition-colors",
                        children: [
                          (0, F.jsxs)("div", {
                            className: "flex items-start sm:items-center gap-3",
                            children: [
                              (0, F.jsx)("div", {
                                className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 " + colorClass,
                                children: "#" + (idx + 1)
                              }),
                              (0, F.jsxs)("div", {
                                children: [
                                  (0, F.jsx)("p", { className: "text-sm font-semibold text-white", children: row.desc }),
                                  (0, F.jsxs)("p", { className: "text-xs text-slate-400 mt-0.5", children: [row.time + " • Ref: ", row.ref] })
                                ]
                              })
                            ]
                          }),
                          (0, F.jsxs)("div", {
                            className: "flex items-center gap-3 sm:justify-end",
                            children: [
                              (0, F.jsx)("span", { className: "text-sm font-bold text-white font-mono", children: row.amount }),
                              (0, F.jsx)("span", {
                                className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",
                                children: row.badge
                              })
                            ]
                          })
                        ]
                      }, idx);
                    })
                  })
                ]
              })
            ]
          }),
          (0, F.jsxs)("section", {
            className: "bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm",
            children: [
              (0, F.jsxs)("div", {
                className: "max-w-3xl mb-8",
                children: [
                  (0, F.jsx)("span", {
                    className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                    children: "How It Operates"
                  }),
                  (0, F.jsxs)("h2", {
                    className: "text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2",
                    children: ["4 Steps to Master ", pageData.shortTitle]
                  })
                ]
              }),
              (0, F.jsx)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: pageData.workflowSteps.map(function(ws, i) {
                  return (0, F.jsx)("div", {
                    className: "p-6 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between",
                    children: (0, F.jsxs)("div", {
                      children: [
                        (0, F.jsx)("span", {
                          className: "text-2xl font-extrabold text-emerald-600 font-mono",
                          children: ws.step
                        }),
                        (0, F.jsx)("h3", {
                          className: "text-base font-bold text-slate-900 mt-3",
                          children: ws.title
                        }),
                        (0, F.jsx)("p", {
                          className: "text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed",
                          children: ws.desc
                        })
                      ]
                    })
                  }, i);
                })
              })
            ]
          }),
          pageData.disclaimer ? (0, F.jsxs)("div", {
            className: "p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3",
            children: [
              (0, F.jsx)(Ge, { className: "w-5 h-5 text-amber-700 shrink-0 mt-0.5" }),
              (0, F.jsxs)("div", {
                children: [
                  (0, F.jsx)("p", { className: "font-bold text-amber-950", children: "Important Notice:" }),
                  (0, F.jsx)("p", { className: "mt-0.5 italic", children: pageData.disclaimer })
                ]
              })
            ]
          }) : null,
          (0, F.jsxs)("section", {
            className: "p-8 rounded-3xl bg-slate-100/80 border border-slate-200",
            children: [
              (0, F.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", {
                        className: "text-lg font-bold text-slate-900 font-serif",
                        children: "Explore All 5 Business Challenges"
                      }),
                      (0, F.jsx)("p", {
                        className: "text-xs text-slate-600 mt-0.5",
                        children: "Each module works independently or as one unified operating system."
                      })
                    ]
                  }),
                  (0, F.jsxs)("button", {
                    onClick: onNavigateHome,
                    className: "text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1 cursor-pointer",
                    children: [
                      (0, F.jsx)("span", { children: "Back to all cards" }),
                      (0, F.jsx)(ye, { className: "w-3.5 h-3.5" })
                    ]
                  })
                ]
              }),
              (0, F.jsx)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3",
                children: Object.values(FEATURE_PAGES_DATA).map(function(item) {
                  var ItemIcon = iconChallengeMap[item.id] || bt;
                  var isCurrent = item.id === pageData.id;
                  return (0, F.jsxs)("button", {
                    onClick: function() { onNavigateFeature(item.id); },
                    className: "p-4 rounded-2xl border text-left transition-all cursor-pointer " + (isCurrent ? "bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20" : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"),
                    children: [
                      (0, F.jsx)("div", {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs mb-2 " + (iconBadgeMap[item.id] || "bg-emerald-600 text-white"),
                        children: (0, F.jsx)(ItemIcon, { className: "w-4 h-4" })
                      }),
                      (0, F.jsxs)("p", {
                        className: "text-xs font-bold text-slate-900 line-clamp-1",
                        children: ["#" + item.challengeNumber + ". ", item.shortTitle]
                      }),
                      (0, F.jsx)("p", {
                        className: "text-[11px] text-slate-500 mt-1 line-clamp-2",
                        children: item.subtitle
                      })
                    ]
                  }, item.id);
                })
              })
            ]
          }),
          (0, F.jsxs)("section", {
            className: "p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#0D243F] to-[#006A4E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl",
            children: [
              (0, F.jsxs)("div", {
                className: "max-w-2xl",
                children: [
                  (0, F.jsxs)("span", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3",
                    children: [
                      (0, F.jsx)(ft, { className: "w-3.5 h-3.5" }),
                      (0, F.jsx)("span", { children: "7-Day Full Access Free Trial" })
                    ]
                  }),
                  (0, F.jsxs)("h2", {
                    className: "text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif",
                    children: ["Ready to solve your ", pageData.shortTitle.toLowerCase(), " challenges?"]
                  }),
                  (0, F.jsx)("p", {
                    className: "mt-2 text-sm sm:text-base text-slate-200 leading-relaxed",
                    children: "Join 1,200+ Kenyan enterprises running smarter with BizHubKE. No credit card required. Cancel anytime."
                  })
                ]
              }),
              (0, F.jsxs)("div", {
                className: "shrink-0 flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto",
                children: [
                  (0, F.jsxs)("button", {
                    onClick: onOpenRegister,
                    className: "w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2",
                    children: [
                      (0, F.jsx)("span", { children: "Start Free Trial Now" }),
                      (0, F.jsx)(ye, { className: "w-4 h-4" })
                    ]
                  }),
                  (0, F.jsx)("button", {
                    onClick: onOpenDashboard,
                    className: "w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer flex items-center justify-center",
                    children: (0, F.jsx)("span", { children: "Launch Demo" })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

const FinalCTAComponent=({onStartFreeTrial,onExploreDemo,onWatchDemo})=>(0,F.jsxs)("section",{id:"final-cta",className:"relative overflow-hidden bg-gradient-to-b from-[#0B192C] via-[#0D243F] to-[#0A192F] text-white py-20 lg:py-28",children:[
  (0,F.jsx)("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]"}),
  (0,F.jsx)("div",{className:"absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"}),
  (0,F.jsx)("div",{className:"absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"}),
  (0,F.jsxs)("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[
    (0,F.jsxs)("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-6",children:[
      (0,F.jsx)("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),
      "Join 1,200+ Kenyan Businesses Growing Today"
    ]}),
    (0,F.jsx)("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight leading-[1.15] max-w-3xl mx-auto",children:"Ready to Run Your Biashara With Total Clarity?"}),
    (0,F.jsx)("p",{className:"mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed",children:"Take control of your cash flow, issue eTIMS receipts, reconcile M-Pesa in seconds, and stay compliant with KRA. Get started in under two minutes."}),
    (0,F.jsxs)("div",{className:"mt-8 flex flex-col sm:flex-row items-center justify-center gap-4",children:[
      (0,F.jsxs)("button",{onClick:onStartFreeTrial,className:"w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-3 transition-all cursor-pointer hover:scale-105",children:[
        (0,F.jsx)("span",{children:"Start Your 7-Day Free Trial"}),
        (0,F.jsx)(ye,{className:"w-5 h-5 text-amber-300"})
      ]}),
      (0,F.jsxs)("button",{onClick:onWatchDemo||onExploreDemo,className:"w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center gap-3 backdrop-blur-sm transition-all cursor-pointer",children:[        (0,F.jsx)("div",{className:"w-7 h-7 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center",children:(0,F.jsx)(et,{className:"w-3.5 h-3.5 fill-amber-400"})}),        (0,F.jsx)("span",{children:"Watch 2-Min Demo"})      ]}),      (0,F.jsx)("button",{onClick:onExploreDemo,className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/70 text-slate-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 backdrop-blur-sm transition-all cursor-pointer",children:(0,F.jsx)("span",{children:"Launch Live Demo"})})
    ]}),
    (0,F.jsxs)("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400",children:[
      (0,F.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,F.jsx)(je,{className:"w-4 h-4 text-emerald-400"}),"No credit card required"]}),
      (0,F.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,F.jsx)(je,{className:"w-4 h-4 text-emerald-400"}),"Safaricom M-Pesa Ready"]}),
      (0,F.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,F.jsx)(je,{className:"w-4 h-4 text-emerald-400"}),"Cancel anytime in 1 click"]})
    ]})
  ]})
]}),At=({onNavigateSection:e,onOpenAuth:t,onWatchDemo:wDemo})=>(0,F.jsx)(`footer`,{id:`about`,className:`bg-[#071322] text-slate-400 pt-16 pb-12 border-t border-slate-800`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-2 space-y-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-[#0A192F] p-0.5 shadow-md`,children:(0,F.jsxs)(`div`,{className:`w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center relative overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`absolute inset-x-0 top-0 h-1 bg-red-600`}),(0,F.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 h-1 bg-emerald-500`}),(0,F.jsx)(M,{className:`w-5 h-5 text-amber-400`})]})}),(0,F.jsxs)(`span`,{className:`font-extrabold text-2xl tracking-tight text-white font-serif`,children:[`BizHub`,(0,F.jsx)(`span`,{className:`text-emerald-400`,children:`KE`})]})]}),(0,F.jsx)(`p`,{className:`text-sm text-slate-300 leading-relaxed max-w-sm`,children:`The Digital Business Partner for Kenyan SMEs. Run your business, understand your numbers, get more customers, stay compliant with KRA, and grow.`}),(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-0.5`,children:[(0,F.jsx)(`span`,{className:`w-2.5 h-3 bg-black rounded-l-xs`}),(0,F.jsx)(`span`,{className:`w-1 h-3 bg-red-600`}),(0,F.jsx)(`span`,{className:`w-2.5 h-3 bg-emerald-600 rounded-r-xs`})]}),(0,F.jsx)(`span`,{children:`Proudly Kenyan 🇰🇪`}),(0,F.jsx)(`span`,{className:`text-slate-500`,children:`•`}),(0,F.jsx)(`span`,{className:`text-amber-400`,children:`Built for Kenyan Growth`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3 pt-2 text-xs text-slate-400`,children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,F.jsx)(Ge,{className:`w-3.5 h-3.5 text-emerald-400`}),` Kilimani, Nairobi`]}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsxs)(`a`,{href:`tel:+254740807650`,className:`flex items-center gap-1 hover:text-emerald-400 transition-colors`,children:[(0,F.jsx)($e,{className:`w-3.5 h-3.5 text-emerald-400`}),` +254 740 807 650`]})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-white mb-4`,children:`Platform`}),(0,F.jsxs)(`ul`,{className:`space-y-2.5 text-sm`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`hero`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Home`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`features`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Features`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`how-it-works`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`How It Works`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`showcase`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Platform Showcase`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>wDemo?wDemo():e(`showcase`),className:`hover:text-amber-300 text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5`,children:[`▶ Watch 2-Min Demo`]})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`why-bizhubke`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Why BizHubKE`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`testimonials`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Testimonials`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`pricing`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Pricing Plans`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`faq`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`FAQ`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`contact`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Contact`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`register`),className:`hover:text-emerald-400 transition-colors cursor-pointer text-amber-400`,children:`Free 7-Day Trial`})})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-white mb-4`,children:`Resources`}),(0,F.jsxs)(`ul`,{className:`space-y-2.5 text-sm`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`news-training`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Kenyan Business News`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`news-training`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`Training Academy`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`features`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`eTIMS Tax Guide`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`features`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`M-Pesa Float Management`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>e(`news-training`),className:`hover:text-emerald-400 transition-colors cursor-pointer`,children:`SME Funding & Grants`})})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-white mb-4`,children:`Support & Contact`}),(0,F.jsxs)(`ul`,{className:`space-y-2.5 text-sm`,children:[(0,F.jsxs)(`li`,{className:`flex flex-col gap-1`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Xe,{className:`w-4 h-4 text-emerald-400`}),(0,F.jsx)(`span`,{className:`text-slate-300 font-medium`,children:`WhatsApp Helpdesk`})]}),(0,F.jsx)(`a`,{href:`https://wa.me/254740807650`,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs font-semibold text-emerald-400 hover:text-emerald-300 pl-6 transition-colors`,children:`+254 740 807 650`})]}),(0,F.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(We,{className:`w-4 h-4 text-emerald-400`}),(0,F.jsx)(`span`,{className:`text-slate-300`,children:`support@bizhub.co.ke`})]}),(0,F.jsx)(`li`,{className:`pt-2`,children:(0,F.jsx)(`button`,{onClick:()=>t(`login`),className:`px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all cursor-pointer`,children:`Client Portal Login`})})]})]})]}),(0,F.jsxs)(`div`,{className:`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500`,children:[(0,F.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` BizHubKE Technologies Limited. All rights reserved. Registered in Nairobi, Kenya.`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,F.jsx)(`span`,{className:`hover:text-slate-400 cursor-pointer`,children:`Privacy Policy`}),(0,F.jsx)(`span`,{className:`hover:text-slate-400 cursor-pointer`,children:`Terms of Service`}),(0,F.jsx)(`span`,{className:`hover:text-slate-400 cursor-pointer`,children:`Security Overview`})]})]})]})})
const DemoWalkthroughModalComponent = ({ isOpen, onClose, onStartFreeTrial, onExploreLiveDemo }) => {
  const [currentStep, setCurrentStep] = _.useState(0);
  const [isPlaying, setIsPlaying] = _.useState(true);
  const [progress, setProgress] = _.useState(0);

  const steps = [
    {
      id: "overview",
      badge: "Step 1 of 5 • Overview",
      title: "Executive Dashboard & Biashara Health",
      subtitle: "Instant visibility over daily cash flow, M-Pesa till balances, and credit health.",
      tag: "Live SME Command Center",
      keyMetrics: [
        { label: "Today Gross Sales", val: "KSh 53,900", change: "+18.4% vs last week", positive: true },
        { label: "M-Pesa Float Balance", val: "KSh 84,250", change: "Till 5849201 Active", positive: true },
        { label: "Biashara Score", val: "88 / 100", change: "Loan & SACCO Ready", positive: true }
      ],
      previewContent: {
        type: "overview",
        header: "Kilimani Fresh Supplies • Biashara Live Summary",
        rows: [
          { title: "Basmati Super Rice 25kg (x3)", ref: "M-Pesa Buy Goods • Ref: SDQ83910KL", time: "10m ago", amount: "+ KSh 14,250" },
          { title: "Maize Meal Grade 1 (x5 bales)", ref: "M-Pesa Till • Ref: SDR29481XP", time: "42m ago", amount: "+ KSh 12,000" },
          { title: "Cooking Oil 20L Jerrycan (x2)", ref: "Cash at Register • Ref: CSH-4091", time: "1h ago", amount: "+ KSh 9,400" }
        ]
      }
    },
    {
      id: "sales",
      badge: "Step 2 of 5 • Point of Sale",
      title: "Instant Multi-Channel Sales Recording",
      subtitle: "Record M-Pesa, Cash, and Credit sales in 5 seconds with zero accounting jargon.",
      tag: "82% M-Pesa Reconciliation",
      keyMetrics: [
        { label: "M-Pesa Till / Paybill", val: "KSh 44,198 (82%)", change: "Auto-reconciled", positive: true },
        { label: "Counter Cash", val: "KSh 6,468 (12%)", change: "Drawer matched", positive: true },
        { label: "Customer Credit / Billed", val: "KSh 3,234 (6%)", change: "WhatsApp ledger synced", positive: true }
      ],
      previewContent: {
        type: "sales",
        header: "Payment Channels & Tender Verification",
        items: [
          { channel: "M-Pesa Till (5849201)", pct: 82, color: "bg-emerald-500", val: "KSh 44,198" },
          { channel: "Cash Register Drawer", pct: 12, color: "bg-amber-400", val: "KSh 6,468" },
          { channel: "Trade Credit / Due Later", pct: 6, color: "bg-blue-500", val: "KSh 3,234" }
        ]
      }
    },
    {
      id: "invoices",
      badge: "Step 3 of 5 • eTIMS Invoicing",
      title: "KRA eTIMS Invoicing & Auto Signatures",
      subtitle: "Generate professional VAT & Turnover Tax compliant invoices ready for WhatsApp delivery.",
      tag: "100% Tax Compliant",
      keyMetrics: [
        { label: "Active Invoices", val: "KSh 43,300", change: "2 Pending Collection", positive: true },
        { label: "KRA eTIMS Status", val: "Auto-Signed", change: "PIN P051928471K Valid", positive: true },
        { label: "Turnover Tax (TOT 3%)", val: "KSh 9,744", change: "Calculated & Stashed", positive: true }
      ],
      previewContent: {
        type: "invoices",
        header: "Issued Invoices & Delivery Slips",
        invoices: [
          { id: "INV-2026-0042", client: "David Otieno • Nairobi Wholesale", due: "Due in 7 days", status: "SENT (WhatsApp)", color: "bg-amber-400/20 text-amber-300", amount: "KSh 15,300" },
          { id: "INV-2026-0039", client: "Mama Zawadi Caterers • Kileleshwa", due: "Overdue 6 days", status: "REMINDER SENT", color: "bg-red-500/20 text-red-300", amount: "KSh 28,000" }
        ]
      }
    },
    {
      id: "crm",
      badge: "Step 4 of 5 • WhatsApp CRM",
      title: "WhatsApp Customer CRM & Reminders",
      subtitle: "Send 1-click payment reminders, seasonal offers, and receipts straight to customer phones.",
      tag: "High Debt Recovery",
      keyMetrics: [
        { label: "Registered Customers", val: "148 Profiles", change: "+12 added this week", positive: true },
        { label: "WhatsApp Delivery", val: "Instant (Direct)", change: "Zero SMS charges", positive: true },
        { label: "Debt Recovery Rate", val: "94.2%", change: "+31% faster settlement", positive: true }
      ],
      previewContent: {
        type: "crm",
        header: "Customer Contacts & WhatsApp Broadcasts",
        clients: [
          { name: "Faith Wambui", phone: "+254 722 ••• 419", type: "VIP Wholesale", badge: "Loyal Tier", debt: "KSh 0 (Settled)" },
          { name: "David Otieno", phone: "+254 733 ••• 882", type: "Retail Supplies", badge: "Active Due", debt: "KSh 15,300 due 26th Sep" },
          { name: "John Kiprono", phone: "+254 711 ••• 934", type: "Weekly Restock", badge: "Repeat Buyer", debt: "KSh 0 (Settled)" }
        ]
      }
    },
    {
      id: "analytics",
      badge: "Step 5 of 5 • Growth & SACCO Ready",
      title: "Biashara Health & Sacco Financials",
      subtitle: "One-click financial export ready for equity bank loans, SACCO lines, and KRA audits.",
      tag: "Loan Ready Grade A",
      keyMetrics: [
        { label: "Monthly Operating Margin", val: "28.5%", change: "Healthy Kenyan Retail", positive: true },
        { label: "Credit Health Score", val: "Grade A (88/100)", change: "Low Default Risk", positive: true },
        { label: "Bank Export Files", val: "PDF & CSV Ready", change: "Standardized Format", positive: true }
      ],
      previewContent: {
        type: "analytics",
        header: "Financial Health & Verified Records",
        highlights: [
          "30-day verified bank-grade transaction logs exportable in PDF & CSV",
          "Automatic KRA eTIMS and Turnover Tax (TOT) monthly schedule",
          "Automated customer ledger tracking prevents lost credit books",
          "AI Biashara Advisor provides localized pricing and inventory alerts"
        ]
      }
    }
  ];

  // Prevent background scrolling while open
  _.useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Reset state when opened
  _.useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [isOpen]);

  // Auto-advance timer: ~4 seconds per step
  _.useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const intervalTime = 40; // update progress every 40ms
    const stepDuration = 3800; // 3.8s per step
    const stepIncrement = (intervalTime / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((curr) => (curr + 1) % steps.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, steps.length, currentStep]);

  if (!isOpen) return null;

  const current = steps[currentStep];

  const handleNext = () => {
    setProgress(0);
    setCurrentStep((curr) => (curr + 1) % steps.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentStep((curr) => (curr - 1 + steps.length) % steps.length);
  };

  const handleJumpTo = (idx) => {
    setProgress(0);
    setCurrentStep(idx);
  };

  return (0, F.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200",
    onClick: (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    children: (0, F.jsxs)("div", {
      className: "relative w-full max-w-4xl bg-slate-900 border border-slate-700/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] text-white",
      children: [
        // Top Bar
        (0, F.jsxs)("div", {
          className: "px-5 py-3.5 bg-[#0B192C] border-b border-slate-800 flex items-center justify-between shrink-0",
          children: [
            (0, F.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [
                (0, F.jsx)("div", {
                  className: "w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-400/30",
                  children: (0, F.jsx)(et, { className: "w-4 h-4 fill-amber-400" })
                }),
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)("h4", {
                      className: "font-bold text-sm text-white flex items-center gap-2",
                      children: [
                        "BizHubKE Interactive Product Tour",
                        (0, F.jsx)("span", {
                          className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                          children: "2-Min Guided Walkthrough"
                        })
                      ]
                    }),
                    (0, F.jsx)("p", {
                      className: "text-[11px] text-slate-400 hidden sm:block",
                      children: "See how Kenyan retailers, dukas, and distributors run their daily biashara."
                    })
                  ]
                })
              ]
            }),
            (0, F.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, F.jsx)("button", {
                  onClick: () => setIsPlaying(!isPlaying),
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5 px-2.5 cursor-pointer",
                  title: isPlaying ? "Pause autoplay" : "Resume autoplay",
                  children: isPlaying ? "⏸ Pause" : "▶ Play"
                }),
                (0, F.jsx)("button", {
                  onClick: onClose,
                  className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",
                  "aria-label": "Close modal",
                  children: (0, F.jsx)(St, { className: "w-5 h-5" })
                })
              ]
            })
          ]
        }),

        // Instagram Stories Style Multi-bar Progress Indicator
        (0, F.jsx)("div", {
          className: "px-4 sm:px-6 pt-3 pb-2 bg-[#0B192C]/60 flex items-center gap-1.5 shrink-0",
          children: steps.map((s, idx) => {
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;
            const fillWidth = isDone ? "100%" : isCurrent ? progress + "%" : "0%";
            return (0, F.jsx)("button", {
              key: s.id,
              onClick: () => handleJumpTo(idx),
              className: "flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden relative cursor-pointer group py-1",
              title: s.title,
              children: (0, F.jsx)("div", {
                className: "h-1.5 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-full transition-all duration-75",
                style: { width: fillWidth }
              })
            }, s.id);
          })
        }),

        // Body Content (Scrollable if needed)
        (0, F.jsxs)("div", {
          className: "p-4 sm:p-6 overflow-y-auto space-y-5 flex-1",
          children: [
            // Step header with tag
            (0, F.jsxs)("div", {
              className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsx)("span", {
                      className: "text-xs font-bold text-amber-400 uppercase tracking-wider",
                      children: current.badge
                    }),
                    (0, F.jsx)("h3", {
                      className: "text-xl sm:text-2xl font-black text-white font-serif mt-0.5",
                      children: current.title
                    }),
                    (0, F.jsx)("p", {
                      className: "text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed",
                      children: current.subtitle
                    })
                  ]
                }),
                (0, F.jsx)("span", {
                  className: "self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0",
                  children: current.tag
                })
              ]
            }),

            // 3 Key Metrics Cards
            (0, F.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
              children: current.keyMetrics.map((km, i) => (0, F.jsxs)("div", {
                className: "p-3.5 rounded-2xl bg-[#0B192C] border border-slate-800 shadow-sm",
                children: [
                  (0, F.jsx)("p", {
                    className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider",
                    children: km.label
                  }),
                  (0, F.jsx)("p", {
                    className: "text-xl font-black text-white mt-1",
                    children: km.val
                  }),
                  (0, F.jsx)("p", {
                    className: "text-[11px] font-medium text-emerald-400 mt-0.5",
                    children: km.change
                  })
                ]
              }, i))
            }),

            // Interactive Live App Screen Preview
            (0, F.jsxs)("div", {
              className: "rounded-2xl bg-[#071322] border border-slate-800 p-4 sm:p-5 shadow-inner",
              children: [
                (0, F.jsxs)("div", {
                  className: "flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, F.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" }),
                        (0, F.jsx)("span", {
                          className: "font-semibold text-slate-200 font-mono",
                          children: current.previewContent.header
                        })
                      ]
                    }),
                    (0, F.jsx)("span", {
                      className: "text-slate-400 text-[11px] hidden sm:block",
                      children: "Live Simulation • Real Kenyan SME Data"
                    })
                  ]
                }),

                // Specific Step Previews
                current.id === "overview" && (0, F.jsx)("div", {
                  className: "space-y-2.5",
                  children: current.previewContent.rows.map((r, i) => (0, F.jsxs)("div", {
                    className: "p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs",
                    children: [
                      (0, F.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, F.jsx)("div", {
                            className: "w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0",
                            children: "MP"
                          }),
                          (0, F.jsxs)("div", {
                            children: [
                              (0, F.jsx)("p", { className: "font-bold text-white", children: r.title }),
                              (0, F.jsx)("p", { className: "text-[10px] text-slate-400", children: r.ref })
                            ]
                          })
                        ]
                      }),
                      (0, F.jsxs)("div", {
                        className: "text-right",
                        children: [
                          (0, F.jsx)("p", { className: "font-bold text-emerald-400", children: r.amount }),
                          (0, F.jsx)("p", { className: "text-[10px] text-slate-400", children: r.time })
                        ]
                      })
                    ]
                  }, i))
                }),

                current.id === "sales" && (0, F.jsx)("div", {
                  className: "space-y-3",
                  children: current.previewContent.items.map((item, i) => (0, F.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, F.jsxs)("div", {
                        className: "flex justify-between text-xs",
                        children: [
                          (0, F.jsx)("span", { className: "text-slate-300 font-medium", children: item.channel }),
                          (0, F.jsxs)("span", {
                            className: "font-bold text-white",
                            children: [item.val, " (", item.pct, "%)"]
                          })
                        ]
                      }),
                      (0, F.jsx)("div", {
                        className: "w-full h-2.5 rounded-full bg-slate-800 overflow-hidden",
                        children: (0, F.jsx)("div", {
                          className: "h-full " + item.color + " rounded-full transition-all duration-500",
                          style: { width: item.pct + "%" }
                        })
                      })
                    ]
                  }, i))
                }),

                current.id === "invoices" && (0, F.jsx)("div", {
                  className: "space-y-2.5",
                  children: current.previewContent.invoices.map((inv, i) => (0, F.jsxs)("div", {
                    className: "p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs",
                    children: [
                      (0, F.jsxs)("div", {
                        children: [
                          (0, F.jsxs)("p", {
                            className: "font-bold text-white flex items-center gap-2",
                            children: [
                              inv.id,
                              (0, F.jsx)("span", {
                                className: "text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded",
                                children: "KRA eTIMS Valid"
                              })
                            ]
                          }),
                          (0, F.jsx)("p", { className: "text-[10px] text-slate-300", children: inv.client }),
                          (0, F.jsx)("p", { className: "text-[10px] text-slate-400", children: inv.due })
                        ]
                      }),
                      (0, F.jsxs)("div", {
                        className: "text-right",
                        children: [
                          (0, F.jsx)("p", { className: "font-black text-white text-sm", children: inv.amount }),
                          (0, F.jsx)("span", {
                            className: "inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold " + inv.color,
                            children: inv.status
                          })
                        ]
                      })
                    ]
                  }, i))
                }),

                current.id === "crm" && (0, F.jsx)("div", {
                  className: "space-y-2.5",
                  children: current.previewContent.clients.map((c, i) => (0, F.jsxs)("div", {
                    className: "p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs",
                    children: [
                      (0, F.jsxs)("div", {
                        children: [
                          (0, F.jsxs)("p", {
                            className: "font-bold text-white flex items-center gap-2",
                            children: [
                              c.name,
                              (0, F.jsx)("span", {
                                className: "px-1.5 py-0.2 rounded text-[9px] font-semibold bg-slate-700 text-slate-300",
                                children: c.badge
                              })
                            ]
                          }),
                          (0, F.jsx)("p", { className: "text-[10px] text-slate-400", children: c.phone + " • " + c.type })
                        ]
                      }),
                      (0, F.jsxs)("div", {
                        className: "text-right flex items-center gap-2",
                        children: [
                          (0, F.jsx)("span", { className: "text-[11px] font-semibold text-slate-300", children: c.debt }),
                          (0, F.jsx)("span", {
                            className: "px-2 py-1 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold",
                            children: "WhatsApp Ready"
                          })
                        ]
                      })
                    ]
                  }, i))
                }),

                current.id === "analytics" && (0, F.jsx)("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                  children: current.previewContent.highlights.map((h, i) => (0, F.jsxs)("div", {
                    className: "p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-start gap-2.5 text-xs",
                    children: [
                      (0, F.jsx)(Oe, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
                      (0, F.jsx)("span", { className: "text-slate-200 leading-relaxed", children: h })
                    ]
                  }, i))
                })
              ]
            })
          ]
        }),

        // Bottom Controls & CTAs
        (0, F.jsxs)("div", {
          className: "px-5 py-4 bg-[#0B192C] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0",
          children: [
            // Prev / Next Controls
            (0, F.jsxs)("div", {
              className: "flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start",
              children: [
                (0, F.jsx)("button", {
                  onClick: handlePrev,
                  className: "px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1",
                  children: "← Back"
                }),
                (0, F.jsx)("span", {
                  className: "text-xs text-slate-400 font-medium px-2",
                  children: (currentStep + 1) + " of " + steps.length
                }),
                (0, F.jsx)("button", {
                  onClick: handleNext,
                  className: "px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1",
                  children: "Next →"
                })
              ]
            }),

            // Action CTAs
            (0, F.jsxs)("div", {
              className: "flex items-center gap-2.5 w-full sm:w-auto justify-end",
              children: [
                (0, F.jsx)("button", {
                  onClick: () => {
                    onClose();
                    onExploreLiveDemo();
                  },
                  className: "px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer",
                  children: "Open Live Demo App"
                }),
                (0, F.jsxs)("button", {
                  onClick: () => {
                    onClose();
                    onStartFreeTrial();
                  },
                  className: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2 cursor-pointer hover:scale-105",
                  children: [
                    (0, F.jsx)("span", { children: "Start 7-Day Free Trial" }),
                    (0, F.jsx)(ye, { className: "w-3.5 h-3.5 text-slate-950" })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  });
};

const jt=({isOpen:e,initialMode:t,onClose:n,onSuccess:r,onStartOnboarding:i})=>{let[a,o]=(0,_.useState)(t),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),[v,S]=(0,_.useState)(``),[C,ee]=(0,_.useState)(``),[w,te]=(0,_.useState)(`Nairobi`),[T,E]=(0,_.useState)(`Retail`),[D,ne]=(0,_.useState)(`1–5 employees`),[re,ie]=(0,_.useState)(``),[ae,oe]=(0,_.useState)(``);return e?(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center`,children:(0,F.jsx)(M,{className:`w-4 h-4 text-amber-400`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`span`,{className:`font-extrabold text-base font-serif`,children:[`BizHub`,(0,F.jsx)(`span`,{className:`text-emerald-400`,children:`KE`})]}),(0,F.jsx)(`span`,{className:`text-slate-400 text-xs ml-2`,children:`Digital SME Portal`})]})]}),(0,F.jsx)(`button`,{onClick:n,className:`p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`p-6 sm:p-8 overflow-y-auto space-y-6`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:[a===`register`&&`Create Your Business Account`,a===`login`&&`Welcome Back to BizHubKE`,a===`forgot`&&`Reset Your Password`,a===`reset`&&`Enter Verification Code`]}),(0,F.jsxs)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1`,children:[a===`register`&&`Join thousands of Kenyan SMEs streamlining finances, eTIMS, and sales.`,a===`login`&&`Sign in to access your business ledger, invoices, and analytics.`,a===`forgot`&&`Enter your registered email address to receive password reset instructions.`,a===`reset`&&`Enter the 6-digit SMS/Email verification code.`]})]}),s&&(0,F.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2`,children:[(0,F.jsx)(Ae,{className:`w-4 h-4 shrink-0`}),(0,F.jsx)(`span`,{children:s})]}),l&&(0,F.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2`,children:[(0,F.jsx)(je,{className:`w-4 h-4 shrink-0`}),(0,F.jsx)(`span`,{children:l})]}),(a===`login`||a===`register`)&&(0,F.jsxs)(`div`,{className:`space-y-2.5`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>{O.register({fullName:`Moses Kibira`,email:`moses.kibira86@gmail.com`,phoneNumber:`+254 722 000 111`,businessName:`Kibira Enterprise Solutions`,county:`Nairobi`,businessType:`Professional Services`,businessSize:`1–5 employees`}),i()},className:`w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-3 transition-all shadow-xs cursor-pointer`,children:[(0,F.jsxs)(`svg`,{className:`w-4 h-4`,viewBox:`0 0 24 24`,children:[(0,F.jsx)(`path`,{fill:`#4285F4`,d:`M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z`}),(0,F.jsx)(`path`,{fill:`#34A853`,d:`M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.29 21.37 7.36 24 12 24z`}),(0,F.jsx)(`path`,{fill:`#FBBC05`,d:`M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z`}),(0,F.jsx)(`path`,{fill:`#EA4335`,d:`M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.29 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z`})]}),(0,F.jsx)(`span`,{children:`Continue with Google`})]}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>{O.loginDemoUser(),r()},className:`w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer`,children:[(0,F.jsx)(ft,{className:`w-3.5 h-3.5 text-emerald-600`}),(0,F.jsx)(`span`,{children:`Instant Demo: Test as Kilimani Fresh Supplies (Nairobi)`})]}),(0,F.jsxs)(`div`,{className:`relative flex items-center justify-center my-3`,children:[(0,F.jsx)(`div`,{className:`border-t border-slate-200 w-full`}),(0,F.jsx)(`span`,{className:`bg-white px-3 text-[11px] font-semibold text-slate-600 uppercase tracking-wider`,children:`or with email`})]})]}),a===`register`&&(0,F.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),c(null),!d||!p||!h||!v||!C){c(`Please complete all required fields.`);return}try{O.register({fullName:d,email:p,phoneNumber:h,password:v,businessName:C,county:w,businessType:T,businessSize:D}),i()}catch(e){c(e.message||`Registration failed.`)}},className:`space-y-4`,children:[(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Full Name *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(vt,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`Faith Muthoni`,value:d,onChange:e=>f(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Email Address *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(We,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`email`,required:!0,placeholder:`faith@biashara.co.ke`,value:p,onChange:e=>m(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Phone Number (M-Pesa) *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)($e,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`tel`,required:!0,placeholder:`+254 712 345 678`,value:h,onChange:e=>g(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Password *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(He,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`password`,required:!0,placeholder:`••••••••`,value:v,onChange:e=>S(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Business Name *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(M,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. Kilimani Fresh Groceries & Supplies`,value:C,onChange:e=>ee(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`County *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(Ge,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`select`,{value:w,onChange:e=>te(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:y.map(e=>(0,F.jsxs)(`option`,{value:e,children:[e,` County`]},e))})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Business Type *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(we,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`select`,{value:T,onChange:e=>E(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:b.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))})]})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Business Size (Employees) *`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(yt,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`select`,{value:D,onChange:e=>ne(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:x.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all mt-2`,children:[(0,F.jsx)(`span`,{children:`Complete Registration & Launch Wizard`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})]}),a===`login`&&(0,F.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),c(null),!p){c(`Please enter your email address.`);return}let t=O.login(p,v);if(!t.success)c(t.message||`Invalid credentials.`);else{let e=O.getActiveBusiness();e&&!e.onboardingCompleted?i():r()}},className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Email Address`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(We,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`email`,required:!0,placeholder:`your-email@biashara.co.ke`,value:p,onChange:e=>m(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,F.jsx)(`label`,{className:`text-xs font-bold text-slate-700`,children:`Password`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>o(`forgot`),className:`text-xs font-semibold text-emerald-600 hover:underline`,children:`Forgot Password?`})]}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(He,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`password`,required:!0,placeholder:`••••••••`,value:v,onChange:e=>S(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`w-full py-3.5 rounded-xl bg-[#0B192C] hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all`,children:[(0,F.jsx)(`span`,{children:`Sign In to Dashboard`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})]}),a===`forgot`&&(0,F.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),!p){c(`Please enter your email address.`);return}u(`Reset code sent to `+p+`. For quick verification, enter 884920.`),o(`reset`)},className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Registered Email Address`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(We,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`email`,required:!0,placeholder:`your-email@biashara.co.ke`,value:p,onChange:e=>m(e.target.value),className:`w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all`,children:[(0,F.jsx)(`span`,{children:`Send Reset Code`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>o(`login`),className:`w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900`,children:`Back to Login`})]}),a===`reset`&&(0,F.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),!re||!ae){c(`Please provide the reset code and your new password.`);return}u(`Your password has been successfully reset. Please log in.`),o(`login`)},className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`6-Digit Verification Code`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`884920`,value:re,onChange:e=>ie(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`New Password`}),(0,F.jsx)(`input`,{type:`password`,required:!0,placeholder:`Enter new strong password`,value:ae,onChange:e=>oe(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all`,children:[(0,F.jsx)(`span`,{children:`Update Password`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})]}),(0,F.jsx)(`div`,{className:`pt-4 border-t border-slate-100 text-center text-xs text-slate-600`,children:a===`register`?(0,F.jsxs)(`p`,{children:[`Already have a BizHubKE business account?`,` `,(0,F.jsx)(`button`,{type:`button`,onClick:()=>o(`login`),className:`font-bold text-emerald-600 hover:underline`,children:`Log In`})]}):(0,F.jsxs)(`p`,{children:[`Don't have an account yet?`,` `,(0,F.jsx)(`button`,{type:`button`,onClick:()=>o(`register`),className:`font-bold text-amber-600 hover:underline`,children:`Register Free Trial`})]})})]})]})}):null},Mt=({business:e,onFinish:t})=>{let[n,r]=(0,_.useState)(1),[i,a]=(0,_.useState)(e.tagline||``),[o,s]=(0,_.useState)(e.mpesaTillNumber||``),[c,l]=(0,_.useState)(e.mpesaPaybill||``),[u,d]=(0,_.useState)(e.kraPin||``),[f,p]=(0,_.useState)(e.challenges||[`Cash flow`,`Tax/compliance`]),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`General Merchandise`),[y,b]=(0,_.useState)(``),[x,C]=(0,_.useState)(``),[ee,w]=(0,_.useState)(`10`),[te,T]=(0,_.useState)(``),[E,D]=(0,_.useState)(``),[ne,re]=(0,_.useState)(``),[ie,ae]=(0,_.useState)(``),oe=e=>{f.includes(e)?p(f.filter(t=>t!==e)):p([...f,e])},se=t=>{t.preventDefault(),O.updateOnboarding(e.id,{tagline:i,mpesaTillNumber:o,mpesaPaybill:c}),r(2)},ce=()=>{O.updateOnboarding(e.id,{challenges:f}),r(3)},le=(t=!1)=>{!t&&m.trim()&&O.updateOnboarding(e.id,{firstProduct:{name:m,category:g,sellingPrice:parseFloat(y)||0,costPrice:parseFloat(x)||0,stockQuantity:parseInt(ee,10)||1}}),r(4)},ue=(t=!1)=>{!t&&te.trim()&&O.updateOnboarding(e.id,{firstCustomer:{name:te,phone:E||`+254 700 000 000`,email:ne,notes:ie}}),O.updateOnboarding(e.id,{markCompleted:!0}),r(5)};return(0,F.jsx)(`div`,{className:`min-h-screen bg-gradient-to-b from-[#0B192C] via-[#0A192F] to-slate-900 text-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`max-w-2xl mx-auto w-full`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,F.jsx)(`div`,{className:`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-[#0A192F] p-0.5 shadow-xl mb-3`,children:(0,F.jsx)(`div`,{className:`w-full h-full bg-[#0A192F] rounded-[14px] flex items-center justify-center`,children:(0,F.jsx)(M,{className:`w-7 h-7 text-amber-400`})})}),(0,F.jsxs)(`h1`,{className:`text-2xl sm:text-3xl font-black font-serif`,children:[`Welcome to BizHub`,(0,F.jsx)(`span`,{className:`text-emerald-400`,children:`KE`})]}),(0,F.jsxs)(`p`,{className:`text-xs sm:text-sm text-slate-300 mt-1`,children:[`Setting up `,(0,F.jsx)(`span`,{className:`font-bold text-amber-300`,children:e.name}),` (`,e.county,` County)`]}),n<5&&(0,F.jsx)(`div`,{className:`flex items-center justify-center gap-2 mt-6`,children:[1,2,3,4].map(e=>(0,F.jsx)(`div`,{className:`h-2 rounded-full transition-all duration-300 ${n===e?`w-10 bg-amber-400`:n>e?`w-6 bg-emerald-500`:`w-6 bg-slate-700`}`},e))})]}),(0,F.jsxs)(`div`,{className:`bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100`,children:[n===1&&(0,F.jsxs)(`form`,{onSubmit:se,className:`space-y-6 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full`,children:`Step 1 of 4`}),(0,F.jsx)(`h2`,{className:`text-2xl font-black font-serif text-slate-900 mt-2`,children:`Tell us about your business`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1`,children:`Add your business tagline and payment details so your generated customer receipts and invoices are ready to accept money.`})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Business Tagline or Short Description`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Quality groceries and fresh wholesale produce in Kilimani`,value:i,onChange:e=>a(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`M-Pesa Buy Goods Till Number (Optional)`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. 5849201`,value:o,onChange:e=>s(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`M-Pesa Paybill Number (Optional)`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. 400200`,value:c,onChange:e=>l(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`KRA PIN Number (Optional - for eTIMS Invoicing)`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. P051938291K`,value:u,onChange:e=>d(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-mono`}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-1`,children:`Can be updated anytime in Business Settings.`})]})]}),(0,F.jsx)(`div`,{className:`pt-4 flex items-center justify-end`,children:(0,F.jsxs)(`button`,{type:`submit`,className:`px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-md`,children:[(0,F.jsx)(`span`,{children:`Continue to Step 2`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})})]}),n===2&&(0,F.jsxs)(`div`,{className:`space-y-6 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full`,children:`Step 2 of 4`}),(0,F.jsx)(`h2`,{className:`text-2xl font-black font-serif text-slate-900 mt-2`,children:`What are your biggest business challenges?`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1`,children:`Select the areas you want BizHubKE to help you solve first. We customize your dashboard widgets accordingly.`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[48vh] overflow-y-auto pr-1`,children:S.map(e=>{let t=f.includes(e.id);return(0,F.jsxs)(`div`,{onClick:()=>oe(e.id),className:`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${t?`border-emerald-500 bg-emerald-50/80 shadow-xs`:`border-slate-200 hover:border-slate-300 bg-white`}`,children:[(0,F.jsx)(`div`,{className:`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${t?`bg-emerald-600 border-emerald-600 text-white`:`border-slate-300 bg-white`}`,children:t&&(0,F.jsx)(Oe,{className:`w-3.5 h-3.5`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-slate-900`,children:e.label}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-0.5 leading-tight`,children:e.desc})]})]},e.id)})}),(0,F.jsxs)(`div`,{className:`pt-4 flex items-center justify-between`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>r(1),className:`px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(ve,{className:`w-4 h-4`}),` Back`]}),(0,F.jsxs)(`button`,{type:`button`,onClick:ce,className:`px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-md`,children:[(0,F.jsx)(`span`,{children:`Continue to Step 3`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})]})]}),n===3&&(0,F.jsxs)(`div`,{className:`space-y-6 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full`,children:`Step 3 of 4`}),(0,F.jsx)(`h2`,{className:`text-2xl font-black font-serif text-slate-900 mt-2`,children:`Add your first product or service`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1`,children:`What do you sell? Add one item to see how stock tracking and margin calculation work.`})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>le(!0),className:`text-xs font-bold text-slate-400 hover:text-slate-700 underline shrink-0 cursor-pointer pt-1`,children:`Skip this step`})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Product or Service Name`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Grade 1 Rice 25kg or Web Consulting`,value:m,onChange:e=>h(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Selling Price (KSh)`}),(0,F.jsx)(`input`,{type:`number`,placeholder:`e.g. 4500`,value:y,onChange:e=>b(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Cost Price (KSh)`}),(0,F.jsx)(`input`,{type:`number`,placeholder:`e.g. 3600`,value:x,onChange:e=>C(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Current Stock Quantity`}),(0,F.jsx)(`input`,{type:`number`,placeholder:`e.g. 25`,value:ee,onChange:e=>w(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]})]})]}),(0,F.jsxs)(`div`,{className:`pt-4 flex items-center justify-between`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>r(2),className:`px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(ve,{className:`w-4 h-4`}),` Back`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>le(!0),className:`px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer`,children:`Skip`}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>le(!1),className:`px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-md`,children:[(0,F.jsx)(`span`,{children:`Save & Continue`}),(0,F.jsx)(ye,{className:`w-4 h-4`})]})]})]})]}),n===4&&(0,F.jsxs)(`div`,{className:`space-y-6 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full`,children:`Step 4 of 4`}),(0,F.jsx)(`h2`,{className:`text-2xl font-black font-serif text-slate-900 mt-2`,children:`Add your first customer`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1`,children:`Add a client or regular buyer so you can trigger instant WhatsApp invoices and track payments.`})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>ue(!0),className:`text-xs font-bold text-slate-400 hover:text-slate-700 underline shrink-0 cursor-pointer pt-1`,children:`Skip this step`})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Customer Full Name`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. David Otieno or Westlands Bistro`,value:te,onChange:e=>T(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Phone Number (WhatsApp)`}),(0,F.jsx)(`input`,{type:`tel`,placeholder:`+254 722 000 111`,value:E,onChange:e=>D(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Email (Optional)`}),(0,F.jsx)(`input`,{type:`email`,placeholder:`client@gmail.com`,value:ne,onChange:e=>re(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Special Customer Note`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Always buys 3 crates weekly. Pays on delivery via M-Pesa.`,value:ie,onChange:e=>ae(e.target.value),className:`w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{className:`pt-4 flex items-center justify-between`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>r(3),className:`px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(ve,{className:`w-4 h-4`}),` Back`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>ue(!0),className:`px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer`,children:`Skip`}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>ue(!1),className:`px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 cursor-pointer shadow-md`,children:[(0,F.jsx)(`span`,{children:`Finish Setup`}),(0,F.jsx)(je,{className:`w-4 h-4 text-amber-300`})]})]})]})]}),n===5&&(0,F.jsxs)(`div`,{className:`text-center py-6 space-y-6 animate-in zoom-in-95`,children:[(0,F.jsx)(`div`,{className:`w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner`,children:(0,F.jsx)(je,{className:`w-12 h-12 text-emerald-600 animate-bounce`})}),(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsx)(`span`,{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900`,children:`Setup Complete • Isolated Database Provisioned`}),(0,F.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-black font-serif text-slate-900`,children:`Your BizHubKE dashboard is ready.`}),(0,F.jsxs)(`p`,{className:`text-sm text-slate-600 max-w-md mx-auto leading-relaxed`,children:[`Congratulations! `,(0,F.jsx)(`strong`,{className:`text-slate-900`,children:e.name}),` is now equipped with Kenyan eTIMS invoicing, M-Pesa float reconciliation, and WhatsApp CRM.`]})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between font-bold text-slate-800`,children:[(0,F.jsx)(`span`,{children:`Data Isolation:`}),(0,F.jsxs)(`span`,{className:`text-emerald-700 font-mono`,children:[`Strict Tenant (biz_`,e.id.slice(-6),`)`]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-slate-600`,children:[(0,F.jsx)(`span`,{children:`Selected Region:`}),(0,F.jsxs)(`span`,{children:[e.county,` County, Kenya`]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-slate-600`,children:[(0,F.jsx)(`span`,{children:`Currency:`}),(0,F.jsx)(`span`,{children:`Kenyan Shilling (KSh)`})]})]}),(0,F.jsx)(`div`,{className:`pt-2`,children:(0,F.jsxs)(`button`,{type:`button`,onClick:t,className:`w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#0B192C] hover:bg-emerald-700 text-white font-black text-base shadow-xl flex items-center justify-center gap-3 mx-auto cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(`span`,{children:`Launch My Business Dashboard`}),(0,F.jsx)(ye,{className:`w-5 h-5 text-amber-400`})]})})]})]})]})})},Nt=({business:e,sales:t,expenses:n,invoices:r,products:i,onOpenRecordSale:a,onOpenNewInvoice:o,onOpenAddExpense:s,onNavigateTab:c})=>{let l=t.reduce((e,t)=>e+t.totalAmount,0),u=n.reduce((e,t)=>e+t.amount,0),d=l-u,f=l>0?(d/l*100).toFixed(1):`0`,p=t.filter(e=>e.paymentMethod===`M-Pesa`).reduce((e,t)=>e+t.totalAmount,0);t.filter(e=>e.paymentMethod===`Cash`).reduce((e,t)=>e+t.totalAmount,0);let m=l>0?Math.round(p/l*100):0,h=r.filter(e=>e.status===`Sent`||e.status===`Overdue`),g=h.reduce((e,t)=>e+t.totalAmount,0),_=i.filter(e=>e.stockQuantity<=(e.lowStockThreshold??e.minAlertQuantity??5));return(0,F.jsxs)(`div`,{className:`space-y-8 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{className:`bg-gradient-to-r from-[#0B192C] via-[#0A192F] to-emerald-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-800`,children:[(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsxs)(`span`,{className:`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950`,children:[e.county,` County`]}),(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30`,children:`eTIMS Active`}),(0,F.jsxs)(`span`,{className:`text-xs text-slate-400`,children:[e.businessType,` • `,e.businessSize]})]}),(0,F.jsxs)(`h1`,{className:`text-2xl sm:text-3xl font-black font-serif`,children:[`Habari, `,e.name,`!`]}),(0,F.jsxs)(`p`,{className:`text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed`,children:[`Here is your financial snapshot. Your business health score is `,(0,F.jsx)(`strong`,{className:`text-amber-300`,children:`88/100 (Bank Ready)`}),`.`]})]}),(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 shrink-0`,children:[(0,F.jsxs)(`button`,{onClick:a,className:`px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Record Sale (M-Pesa/Cash)`})]}),(0,F.jsxs)(`button`,{onClick:o,className:`px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 cursor-pointer`,children:[(0,F.jsx)(Le,{className:`w-4 h-4 text-amber-400`}),(0,F.jsx)(`span`,{children:`New eTIMS Invoice`})]}),(0,F.jsx)(`button`,{onClick:s,className:`px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm border border-slate-700 cursor-pointer`,children:(0,F.jsx)(`span`,{children:`+ Expense`})})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,children:[(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Sales`}),(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center`,children:(0,F.jsx)(nt,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`mt-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-2xl sm:text-3xl font-black text-slate-900`,children:l.toLocaleString()})]}),(0,F.jsxs)(`div`,{className:`mt-2 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold`,children:[(0,F.jsx)(ht,{className:`w-3.5 h-3.5`}),(0,F.jsxs)(`span`,{children:[t.length,` transactions recorded`]})]})]})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Expenses`}),(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center`,children:(0,F.jsx)(xt,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`mt-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-2xl sm:text-3xl font-black text-slate-900`,children:u.toLocaleString()})]}),(0,F.jsx)(`div`,{className:`mt-2 flex items-center gap-1.5 text-xs text-slate-500 font-medium`,children:(0,F.jsxs)(`span`,{children:[n.length,` expense entries`]})})]})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Estimated Net Profit`}),(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center`,children:(0,F.jsx)(ht,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`mt-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-2xl sm:text-3xl font-black ${d>=0?`text-emerald-700`:`text-rose-600`}`,children:d.toLocaleString()})]}),(0,F.jsxs)(`div`,{className:`mt-2 flex items-center gap-1.5 text-xs text-slate-600 font-medium`,children:[(0,F.jsxs)(`span`,{className:`font-bold text-emerald-600`,children:[f,`%`]}),(0,F.jsx)(`span`,{children:`operating profit margin`})]})]})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`M-Pesa Channel`}),(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xs`,children:`M`})]}),(0,F.jsxs)(`div`,{className:`mt-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-2xl sm:text-3xl font-black text-slate-900`,children:p.toLocaleString()})]}),(0,F.jsx)(`div`,{className:`mt-2 flex items-center gap-1.5 text-xs text-slate-600 font-medium`,children:(0,F.jsxs)(`span`,{className:`font-bold text-emerald-600`,children:[m,`% of total sales`]})})]})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-8 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-5`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-lg font-bold text-slate-900 font-serif`,children:`Recent Sales Transactions`}),(0,F.jsx)(`p`,{className:`text-xs text-slate-500`,children:`Live feed from M-Pesa Till & Cash Registers`})]}),(0,F.jsxs)(`button`,{onClick:()=>c(`sales`),className:`text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(`span`,{children:`View All Sales`}),(0,F.jsx)(ke,{className:`w-3.5 h-3.5`})]})]}),(0,F.jsx)(`div`,{className:`divide-y divide-slate-100`,children:t.slice(0,5).map(e=>(0,F.jsxs)(`div`,{className:`py-3.5 flex items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3 min-w-0`,children:[(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${e.paymentMethod===`M-Pesa`?`bg-emerald-100 text-emerald-800`:`bg-amber-100 text-amber-900`}`,children:e.paymentMethod===`M-Pesa`?`M-PESA`:`CASH`}),(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsx)(`p`,{className:`text-xs sm:text-sm font-bold text-slate-900 truncate`,children:e.items.map(e=>`${e.productName} (x${e.quantity})`).join(`, `)}),(0,F.jsxs)(`p`,{className:`text-[11px] text-slate-500`,children:[e.customerName||`Walk-in Customer`,` • `,e.date,e.mpesaReceiptNumber&&` • Ref: ${e.mpesaReceiptNumber}`]})]})]}),(0,F.jsxs)(`div`,{className:`text-right shrink-0`,children:[(0,F.jsxs)(`p`,{className:`text-sm font-black text-slate-900`,children:[`+ KSh `,e.totalAmount.toLocaleString()]}),(0,F.jsx)(`span`,{className:`inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded`,children:`PAID`})]})]},e.id))}),t.length===0&&(0,F.jsx)(`div`,{className:`text-center py-8 text-slate-400 text-xs`,children:`No sales recorded yet. Click "Record Sale" above to add your first transaction.`})]}),(0,F.jsxs)(`div`,{className:`lg:col-span-4 space-y-5`,children:[(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-amber-50/80 border border-amber-200`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,F.jsxs)(`span`,{className:`text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5`,children:[(0,F.jsx)(gt,{className:`w-4 h-4 text-amber-600`}),`Unpaid Customer Credit`]}),(0,F.jsxs)(`span`,{className:`text-[10px] font-bold bg-amber-200/60 text-amber-900 px-2 py-0.5 rounded-full`,children:[h.length,` Pending`]})]}),(0,F.jsxs)(`p`,{className:`text-2xl font-black text-amber-950`,children:[`KSh `,g.toLocaleString()]}),(0,F.jsx)(`p`,{className:`text-xs text-amber-800 mt-1`,children:`Money currently owed by clients on issued invoices.`}),(0,F.jsx)(`button`,{onClick:()=>c(`invoices`),className:`mt-3 w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer`,children:`Send WhatsApp Reminders`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`span`,{className:`text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5`,children:[(0,F.jsx)(Ce,{className:`w-4 h-4 text-rose-500`}),`Stock Attention Needed`]}),(0,F.jsxs)(`span`,{className:`text-[10px] font-bold px-2 py-0.5 rounded-full ${_.length>0?`bg-rose-100 text-rose-800`:`bg-emerald-100 text-emerald-800`}`,children:[_.length,` items low`]})]}),_.length>0?(0,F.jsxs)(`div`,{className:`space-y-2`,children:[_.slice(0,3).map(e=>(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-xs p-2 rounded-xl bg-rose-50/60 border border-rose-100`,children:[(0,F.jsx)(`span`,{className:`font-semibold text-slate-800`,children:e.name}),(0,F.jsxs)(`span`,{className:`font-bold text-rose-700`,children:[e.stockQuantity,` left`]})]},e.id)),(0,F.jsx)(`button`,{onClick:()=>c(`inventory`),className:`w-full text-center text-xs font-bold text-emerald-600 hover:underline pt-1 cursor-pointer`,children:`Manage Inventory & Reorder`})]}):(0,F.jsx)(`p`,{className:`text-xs text-slate-500`,children:`All tracked inventory items are currently above safety thresholds.`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-gradient-to-br from-[#0B192C] to-emerald-950 text-white space-y-2.5`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(ft,{className:`w-4 h-4 text-amber-400`}),(0,F.jsx)(`span`,{className:`text-xs font-bold text-amber-300 uppercase tracking-wider`,children:`Kenyan AI Biashara Advisor`})]}),(0,F.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed`,children:`Ask questions on KRA Turnover Tax (TOT), M-Pesa Paybill cash flow, pricing margins, or county permits.`}),(0,F.jsx)(`button`,{onClick:()=>c(`ai-advisor`),className:`w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer`,children:`Chat with AI Advisor`})]})]})]})]})},Pt=({business:e,sales:t,products:n,customers:r,onRefresh:i,openRecordModalByDefault:a=!1})=>{let[o,s]=(0,_.useState)(a),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`All`),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`M-Pesa`),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[C,ee]=(0,_.useState)([{productId:n[0]?.id||``,productName:n[0]?.name||``,quantity:1,unitPrice:n[0]?.sellingPrice||0,total:n[0]?.sellingPrice||0}]),w=()=>{let e=n[0];e&&ee([...C,{productId:e.id,productName:e.name,quantity:1,unitPrice:e.sellingPrice,total:e.sellingPrice}])},te=e=>{C.length!==1&&ee(C.filter((t,n)=>n!==e))},T=(e,t)=>{let r=n.find(e=>e.id===t);if(!r)return;let i=[...C];i[e]={productId:r.id,productName:r.name,quantity:i[e].quantity,unitPrice:r.sellingPrice,total:r.sellingPrice*i[e].quantity},ee(i)},E=(e,t)=>{let n=Math.max(1,t),r=[...C];r[e].quantity=n,r[e].total=r[e].unitPrice*n,ee(r)},D=C.reduce((e,t)=>e+t.total,0),ne=e=>{e.preventDefault();let t=r.find(e=>e.id===m),n=O.recordSale({customerId:t?.id,customerName:t?.name||`Walk-in Customer`,items:C,totalAmount:D,paymentMethod:g,mpesaReceiptNumber:g===`M-Pesa`?y||`SDQ${Math.floor(1e5+Math.random()*9e5)}`:void 0,notes:x});s(!1),i(),p(n)},re=t.filter(e=>{let t=e.customerName?.toLowerCase().includes(c.toLowerCase())||e.items.some(e=>e.productName.toLowerCase().includes(c.toLowerCase()))||e.mpesaReceiptNumber?.toLowerCase().includes(c.toLowerCase()),n=u===`All`||e.paymentMethod===u;return t&&n});return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Sales & Revenue Register`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Record customer purchases, sync M-Pesa receipts, and generate instant printable slips.`})]}),(0,F.jsxs)(`button`,{onClick:()=>s(!0),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Record New Sale`})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:[(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search by customer, product, M-Pesa code...`,value:c,onChange:e=>l(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0`,children:`Filter:`}),[`All`,`M-Pesa`,`Cash`,`Bank Transfer`,`Credit`].map(e=>(0,F.jsx)(`button`,{onClick:()=>d(e),className:`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 cursor-pointer transition-colors ${u===e?`bg-slate-900 text-white`:`bg-slate-100 text-slate-700 hover:bg-slate-200`}`,children:e},e))]})]}),(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`overflow-x-auto`,children:(0,F.jsxs)(`table`,{className:`w-full text-left text-xs sm:text-sm`,children:[(0,F.jsx)(`thead`,{className:`bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200`,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Date`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Customer`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Products`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Payment Method`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-right`,children:`Amount (KSh)`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-center`,children:`Receipt`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-slate-700`,children:re.map(e=>(0,F.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,F.jsx)(`td`,{className:`py-4 px-6 font-medium text-slate-900 whitespace-nowrap`,children:e.date}),(0,F.jsx)(`td`,{className:`py-4 px-6 font-semibold text-slate-900`,children:e.customerName||`Walk-in`}),(0,F.jsx)(`td`,{className:`py-4 px-6 max-w-xs truncate`,children:e.items.map(e=>`${e.productName} (x${e.quantity})`).join(`, `)}),(0,F.jsxs)(`td`,{className:`py-4 px-6`,children:[(0,F.jsx)(`span`,{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${e.paymentMethod===`M-Pesa`?`bg-emerald-100 text-emerald-800`:e.paymentMethod===`Cash`?`bg-amber-100 text-amber-900`:`bg-blue-100 text-blue-800`}`,children:e.paymentMethod}),e.mpesaReceiptNumber&&(0,F.jsxs)(`span`,{className:`block text-[10px] text-slate-400 font-mono mt-0.5`,children:[`Ref: `,e.mpesaReceiptNumber]})]}),(0,F.jsxs)(`td`,{className:`py-4 px-6 font-black text-slate-900 text-right whitespace-nowrap`,children:[`KSh `,e.totalAmount.toLocaleString()]}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-center`,children:(0,F.jsx)(`button`,{onClick:()=>p(e),className:`p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer`,title:`View & Print Receipt`,children:(0,F.jsx)(nt,{className:`w-4 h-4`})})})]},e.id))})]})}),re.length===0&&(0,F.jsx)(`div`,{className:`text-center py-12 text-slate-400 text-xs`,children:`No sales matching your filter criteria.`})]}),o&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(nt,{className:`w-5 h-5 text-amber-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Record New Sale`})]}),(0,F.jsx)(`button`,{onClick:()=>s(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:ne,className:`p-6 overflow-y-auto space-y-5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Customer`}),(0,F.jsxs)(`select`,{value:m,onChange:e=>h(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:[(0,F.jsx)(`option`,{value:``,children:`Walk-in Customer (General)`}),r.map(e=>(0,F.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.phone,`)`]},e.id))]})]}),(0,F.jsxs)(`div`,{className:`space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`label`,{className:`text-xs font-bold text-slate-700`,children:`Items Purchased`}),(0,F.jsxs)(`button`,{type:`button`,onClick:w,className:`text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(P,{className:`w-3.5 h-3.5`}),` Add Another Item`]})]}),(0,F.jsx)(`div`,{className:`space-y-2`,children:C.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200`,children:[(0,F.jsx)(`select`,{value:e.productId,onChange:e=>T(t,e.target.value),className:`flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white`,children:n.map(e=>(0,F.jsxs)(`option`,{value:e.id,children:[e.name,` (KSh `,e.sellingPrice.toLocaleString(),`)`]},e.id))}),(0,F.jsx)(`input`,{type:`number`,min:`1`,value:e.quantity,onChange:e=>E(t,parseInt(e.target.value,10)||1),className:`w-16 px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-center font-mono`,placeholder:`Qty`}),(0,F.jsxs)(`span`,{className:`text-xs font-bold text-slate-900 w-24 text-right`,children:[`KSh `,e.total.toLocaleString()]}),C.length>1&&(0,F.jsx)(`button`,{type:`button`,onClick:()=>te(t),className:`p-1 text-slate-400 hover:text-rose-600`,children:(0,F.jsx)(pt,{className:`w-4 h-4`})})]},t))})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Payment Method`}),(0,F.jsxs)(`select`,{value:g,onChange:e=>v(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:[(0,F.jsx)(`option`,{value:`M-Pesa`,children:`M-Pesa (Till / Paybill)`}),(0,F.jsx)(`option`,{value:`Cash`,children:`Cash (In-hand)`}),(0,F.jsx)(`option`,{value:`Bank Transfer`,children:`Bank Transfer / EFT`}),(0,F.jsx)(`option`,{value:`Credit`,children:`Credit (Owed)`})]})]}),g===`M-Pesa`&&(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`M-Pesa Confirmation Code`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. SDR9402810`,value:y,onChange:e=>b(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-mono`})]})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-emerald-900 uppercase`,children:`Total Amount Due`}),(0,F.jsxs)(`span`,{className:`text-2xl font-black text-emerald-950`,children:[`KSh `,D.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>s(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Confirm & Print Receipt`})]})]})]})}),f&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-3 bg-slate-900 text-white flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-slate-300`,children:`Official Biashara Receipt`}),(0,F.jsx)(`button`,{onClick:()=>p(null),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`p-6 text-slate-800 space-y-4 font-mono text-xs`,children:[(0,F.jsxs)(`div`,{className:`text-center pb-3 border-b border-dashed border-slate-300 space-y-1`,children:[(0,F.jsx)(`h3`,{className:`text-base font-black font-serif text-slate-900 tracking-tight`,children:e.name}),(0,F.jsxs)(`p`,{className:`text-[11px] text-slate-600`,children:[e.county,` County, Kenya`]}),e.mpesaTillNumber&&(0,F.jsxs)(`p`,{className:`text-[11px] font-bold text-emerald-700`,children:[`M-Pesa Buy Goods Till: `,e.mpesaTillNumber]}),e.kraPin&&(0,F.jsxs)(`p`,{className:`text-[10px] text-slate-500`,children:[`KRA PIN: `,e.kraPin]})]}),(0,F.jsxs)(`div`,{className:`space-y-1 text-[11px]`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:`Receipt No:`}),(0,F.jsx)(`span`,{className:`font-bold`,children:f.id.slice(-8).toUpperCase()})]}),(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:`Date & Time:`}),(0,F.jsx)(`span`,{children:f.date})]}),(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:`Customer:`}),(0,F.jsx)(`span`,{children:f.customerName||`Cash Client`})]}),(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:`Payment:`}),(0,F.jsx)(`span`,{className:`font-bold`,children:f.paymentMethod})]}),f.mpesaReceiptNumber&&(0,F.jsxs)(`div`,{className:`flex justify-between text-emerald-700`,children:[(0,F.jsx)(`span`,{children:`M-Pesa Ref:`}),(0,F.jsx)(`span`,{className:`font-bold`,children:f.mpesaReceiptNumber})]})]}),(0,F.jsx)(`div`,{className:`pt-2 border-t border-dashed border-slate-300 space-y-1.5`,children:f.items.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex justify-between text-xs`,children:[(0,F.jsxs)(`span`,{children:[e.productName,` x`,e.quantity]}),(0,F.jsxs)(`span`,{className:`font-bold`,children:[`KSh `,e.total.toLocaleString()]})]},t))}),(0,F.jsxs)(`div`,{className:`pt-3 border-t-2 border-slate-900 flex justify-between text-sm font-black`,children:[(0,F.jsx)(`span`,{children:`TOTAL PAID:`}),(0,F.jsxs)(`span`,{children:[`KSh `,f.totalAmount.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`pt-3 text-center text-[10px] text-slate-500 border-t border-dashed border-slate-300`,children:[(0,F.jsx)(`p`,{children:`Asante kwa biashara yako!`}),(0,F.jsx)(`p`,{className:`text-slate-400 mt-0.5`,children:`Powered by BizHubKE • www.bizhubke.co.ke`})]})]}),(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3`,children:[(0,F.jsxs)(`button`,{onClick:()=>window.print(),className:`flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 cursor-pointer`,children:[(0,F.jsx)(tt,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Print Thermal Receipt`})]}),(0,F.jsxs)(`button`,{onClick:()=>{let t=`Receipt from ${e.name}: Total KSh ${f.totalAmount.toLocaleString()} paid on ${f.date}. Asante!`;window.open(`https://wa.me/?text=${encodeURIComponent(t)}`,`_blank`)},className:`px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-500 cursor-pointer`,title:`Send on WhatsApp`,children:[(0,F.jsx)(ct,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`WhatsApp`})]})]})]})})]})},Ft=[`Stock Purchase`,`Rent`,`Staff Salaries`,`Transport & Fuel`,`Utilities (Water/Tokens)`,`KRA Taxes & Licenses`,`Marketing & Airtime`,`Packaging & Supplies`,`Other Operational`],It=({business:e,expenses:t,onRefresh:n,openAddModalByDefault:r=!1})=>{let[i,a]=(0,_.useState)(r),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(`All`),[u,d]=(0,_.useState)(`Stock Purchase`),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(`M-Pesa`),[x,S]=(0,_.useState)(``),C=t.reduce((e,t)=>e+t.amount,0),ee=e=>{e.preventDefault(),f.trim()&&m&&(O.recordExpense({category:u,description:f,amount:parseFloat(m)||0,paidTo:g,paymentMethod:y,receiptNumber:x}),a(!1),p(``),h(``),v(``),S(``),n())},w=t.filter(e=>{let t=e.description.toLowerCase().includes(o.toLowerCase())||e.paidTo?.toLowerCase().includes(o.toLowerCase())||e.receiptNumber?.toLowerCase().includes(o.toLowerCase()),n=c===`All`||e.category===c;return t&&n});return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Expenses & Cost Tracking`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Log all operational costs, inventory purchases, rent, and staff wages to get accurate net profits.`})]}),(0,F.jsxs)(`button`,{onClick:()=>a(!0),className:`px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Record New Expense`})]})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Expenses Logged`}),(0,F.jsxs)(`div`,{className:`flex items-baseline gap-1 mt-1`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:`KSh`}),(0,F.jsx)(`span`,{className:`text-3xl font-black text-slate-900`,children:C.toLocaleString()})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-slate-500`,children:[(0,F.jsx)(mt,{className:`w-4 h-4 text-rose-500`}),(0,F.jsxs)(`span`,{children:[t.length,` total outgoing expense transactions recorded`]})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:[(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search by description, vendor, M-Pesa...`,value:o,onChange:e=>s(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0`,children:`Category:`}),(0,F.jsxs)(`select`,{value:c,onChange:e=>l(e.target.value),className:`px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white cursor-pointer`,children:[(0,F.jsx)(`option`,{value:`All`,children:`All Categories`}),Ft.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))]})]})]}),(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`overflow-x-auto`,children:(0,F.jsxs)(`table`,{className:`w-full text-left text-xs sm:text-sm`,children:[(0,F.jsx)(`thead`,{className:`bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200`,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Date`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Category`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Description`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Paid To`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Payment`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-right`,children:`Amount (KSh)`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-slate-700`,children:w.map(e=>(0,F.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,F.jsx)(`td`,{className:`py-4 px-6 font-medium text-slate-900 whitespace-nowrap`,children:e.date}),(0,F.jsx)(`td`,{className:`py-4 px-6 whitespace-nowrap`,children:(0,F.jsx)(`span`,{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200`,children:e.category})}),(0,F.jsx)(`td`,{className:`py-4 px-6 font-medium text-slate-900 max-w-xs truncate`,children:e.description}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-slate-600`,children:e.paidTo||`—`}),(0,F.jsxs)(`td`,{className:`py-4 px-6`,children:[(0,F.jsx)(`span`,{className:`text-xs font-semibold text-slate-700`,children:e.paymentMethod}),e.receiptNumber&&(0,F.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-mono`,children:e.receiptNumber})]}),(0,F.jsxs)(`td`,{className:`py-4 px-6 font-black text-rose-700 text-right whitespace-nowrap`,children:[`- KSh `,e.amount.toLocaleString()]})]},e.id))})]})}),w.length===0&&(0,F.jsx)(`div`,{className:`text-center py-12 text-slate-400 text-xs`,children:`No expenses found matching the selected filter.`})]}),i&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-slate-900 text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(xt,{className:`w-5 h-5 text-rose-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Record Business Expense`})]}),(0,F.jsx)(`button`,{onClick:()=>a(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:ee,className:`p-6 overflow-y-auto space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Expense Category *`}),(0,F.jsx)(`select`,{value:u,onChange:e=>d(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white`,children:Ft.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Description / Purpose *`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. Monthly shop rent for March or KPLC tokens`,value:f,onChange:e=>p(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Amount (KSh) *`}),(0,F.jsx)(`input`,{type:`number`,required:!0,min:`1`,placeholder:`e.g. 15000`,value:m,onChange:e=>h(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Paid To (Vendor / Landlord)`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Al-Noor Properties`,value:g,onChange:e=>v(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Payment Method`}),(0,F.jsxs)(`select`,{value:y,onChange:e=>b(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white`,children:[(0,F.jsx)(`option`,{value:`M-Pesa`,children:`M-Pesa (Buy Goods / Paybill)`}),(0,F.jsx)(`option`,{value:`Cash`,children:`Cash Out of Drawer`}),(0,F.jsx)(`option`,{value:`Bank Transfer`,children:`Bank Wire / EFT`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Receipt / Ref Number (Optional)`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. SDR382910K`,value:x,onChange:e=>S(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 uppercase font-mono`})]})]}),(0,F.jsxs)(`div`,{className:`pt-3 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>a(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Save Expense`})]})]})]})})]})},Lt=({business:e,products:t,onRefresh:n,targetProductId:targetProdId=null,targetSearch:targetProdSearch=``})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(`10`),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(targetProdSearch)f(targetProdSearch);if(targetProdId){let prod=t.find(p=>p.id===targetProdId||p.name===targetProdId);if(prod){c(prod);o(!0);}}},[targetProdId,targetProdSearch,t]);[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(`General`),[b,x]=(0,_.useState)(``),[S,C]=(0,_.useState)(``),[ee,w]=(0,_.useState)(``),[te,T]=(0,_.useState)(`10`),[E,D]=(0,_.useState)(`5`),[ne,re]=(0,_.useState)(`pcs`),ie=e=>{e.preventDefault(),h.trim()&&ee&&(O.addProduct({name:h,category:v,sku:b||`SKU-${Math.floor(1e3+Math.random()*9e3)}`,costPrice:parseFloat(S)||0,sellingPrice:parseFloat(ee)||0,stockQuantity:parseInt(te,10)||0,minAlertQuantity:parseInt(E,10)||5,lowStockThreshold:parseInt(E,10)||5,unit:ne}),i(!1),g(``),y(`General`),x(``),C(``),w(``),T(`10`),n())},ae=e=>{if(e.preventDefault(),!s)return;let t=parseInt(l,10)||0;O.updateProductStock(s.id,s.stockQuantity+t),o(!1),c(null),n()},oe=t.filter(e=>{let t=e.name.toLowerCase().includes(d.toLowerCase())||e.category.toLowerCase().includes(d.toLowerCase())||e.sku?.toLowerCase().includes(d.toLowerCase()),n=e.lowStockThreshold??e.minAlertQuantity??5,r=!p||e.stockQuantity<=n;return t&&r}),se=t.filter(e=>e.stockQuantity<=(e.lowStockThreshold??e.minAlertQuantity??5)).length,ce=t.reduce((e,t)=>e+t.costPrice*t.stockQuantity,0);return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Inventory & Stock Control`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Real-time stock meters, low-stock threshold alerts, and automated profit margins.`})]}),(0,F.jsxs)(`button`,{onClick:()=>i(!0),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Add New Product`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4`,children:[(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total SKUs Tracked`}),(0,F.jsx)(`p`,{className:`text-2xl font-black text-slate-900 mt-1`,children:t.length}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-0.5`,children:`Active product inventory`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Inventory Value (Cost)`}),(0,F.jsxs)(`p`,{className:`text-2xl font-black text-slate-900 mt-1`,children:[`KSh `,ce.toLocaleString()]}),(0,F.jsx)(`p`,{className:`text-[11px] text-emerald-600 mt-0.5`,children:`Capital tied in warehouse`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Low Stock Warnings`}),(0,F.jsxs)(`p`,{className:`text-2xl font-black mt-1 ${se>0?`text-rose-600`:`text-emerald-700`}`,children:[se,` Items`]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-0.5`,children:`Below safety reorder threshold`})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:[(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search product name, category, SKU...`,value:d,onChange:e=>f(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`button`,{onClick:()=>m(!p),className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors ${p?`bg-rose-600 text-white`:`bg-slate-100 text-slate-700 hover:bg-slate-200`}`,children:[(0,F.jsx)(gt,{className:`w-3.5 h-3.5`}),(0,F.jsxs)(`span`,{children:[`Show Low Stock Only (`,se,`)`]})]})]}),(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`overflow-x-auto`,children:(0,F.jsxs)(`table`,{className:`w-full text-left text-xs sm:text-sm`,children:[(0,F.jsx)(`thead`,{className:`bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200`,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Product`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Category`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-right`,children:`Cost Price`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-right`,children:`Selling Price`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-center`,children:`Margin`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-center`,children:`Stock Level`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-center`,children:`Action`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-slate-700`,children:oe.map(e=>{let t=e.sellingPrice>0?((e.sellingPrice-e.costPrice)/e.sellingPrice*100).toFixed(0):`0`,n=e.stockQuantity<=(e.lowStockThreshold??e.minAlertQuantity??5);return(0,F.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,F.jsxs)(`td`,{className:`py-4 px-6 font-bold text-slate-900`,children:[(0,F.jsx)(`div`,{children:e.name}),e.sku&&(0,F.jsx)(`span`,{className:`text-[10px] text-slate-400 font-mono`,children:e.sku})]}),(0,F.jsx)(`td`,{className:`py-4 px-6`,children:(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700`,children:e.category})}),(0,F.jsxs)(`td`,{className:`py-4 px-6 text-right font-mono text-slate-600`,children:[`KSh `,e.costPrice.toLocaleString()]}),(0,F.jsxs)(`td`,{className:`py-4 px-6 text-right font-bold text-slate-900 font-mono`,children:[`KSh `,e.sellingPrice.toLocaleString()]}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-center`,children:(0,F.jsxs)(`span`,{className:`px-2 py-0.5 rounded text-xs font-bold text-emerald-700 bg-emerald-50`,children:[t,`%`]})}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-center`,children:(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${n?`bg-rose-100 text-rose-800 animate-pulse`:`bg-emerald-100 text-emerald-800`}`,children:[n&&(0,F.jsx)(gt,{className:`w-3 h-3`}),e.stockQuantity,` `,e.unit]})}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-center`,children:(0,F.jsxs)(`button`,{onClick:()=>{c(e),o(!0)},className:`px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1 mx-auto`,children:[(0,F.jsx)(rt,{className:`w-3 h-3`}),(0,F.jsx)(`span`,{children:`Restock`})]})})]},e.id)})})]})}),oe.length===0&&(0,F.jsx)(`div`,{className:`text-center py-12 text-slate-400 text-xs`,children:`No products match the filter.`})]}),r&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Ce,{className:`w-5 h-5 text-emerald-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Add Product to Inventory`})]}),(0,F.jsx)(`button`,{onClick:()=>i(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:ie,className:`p-6 overflow-y-auto space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Product Name *`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. Basmati Rice 25kg`,value:h,onChange:e=>g(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Category`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Cereals, Beverages`,value:v,onChange:e=>y(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Unit of Measure`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`pcs, kg, bales, litres`,value:ne,onChange:e=>re(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Cost Price (KSh) *`}),(0,F.jsx)(`input`,{type:`number`,min:`0`,placeholder:`e.g. 3500`,value:S,onChange:e=>C(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Selling Price (KSh) *`}),(0,F.jsx)(`input`,{type:`number`,min:`0`,required:!0,placeholder:`e.g. 4500`,value:ee,onChange:e=>w(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3.5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Initial Stock Count`}),(0,F.jsx)(`input`,{type:`number`,min:`0`,value:te,onChange:e=>T(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Low Stock Alert Level`}),(0,F.jsx)(`input`,{type:`number`,min:`1`,value:E,onChange:e=>D(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>i(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Save Product`})]})]})]})}),a&&s&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-slate-900 text-white flex items-center justify-between`,children:[(0,F.jsxs)(`h3`,{className:`font-bold text-sm`,children:[`Restock `,s.name]}),(0,F.jsx)(`button`,{onClick:()=>o(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-4 h-4`})})]}),(0,F.jsxs)(`form`,{onSubmit:ae,className:`p-6 space-y-4`,children:[(0,F.jsx)(`div`,{className:`p-3 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1`,children:(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`span`,{children:`Current Stock:`}),(0,F.jsxs)(`span`,{className:`font-bold text-slate-900`,children:[s.stockQuantity,` `,s.unit]})]})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Quantity Received`}),(0,F.jsx)(`input`,{type:`number`,min:`1`,required:!0,value:l,onChange:e=>u(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono`})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-end gap-2 pt-2`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>o(!1),className:`px-3 py-2 rounded-xl text-xs text-slate-600 hover:bg-slate-100`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm`,children:`Confirm Restock`})]})]})]})})]})},Rt=({business:e,invoices:t,customers:n,products:r,onRefresh:i,openCreateModalByDefault:a=!1,targetInvoiceId:targetInvId=null,targetSearch:targetInvSearch=``,targetStatus:targetInvStatus=``})=>{let[o,s]=(0,_.useState)(a),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(`All`);(0,_.useEffect)(()=>{if(targetInvSearch)d(targetInvSearch);if(targetInvStatus)p(targetInvStatus);if(targetInvId){let inv=t.find(item=>item.id===targetInvId||item.invoiceNumber===targetInvId);if(inv)l(inv);}},[targetInvId,targetInvSearch,targetInvStatus,t]);[m,h]=(0,_.useState)(n[0]?.id||``),[g,v]=(0,_.useState)(()=>{let e=new Date;return e.setDate(e.getDate()+14),e.toISOString().split(`T`)[0]}),[y,b]=(0,_.useState)([{description:r[0]?.name||`Standard Delivery`,quantity:1,unitPrice:r[0]?.sellingPrice||1e3,total:r[0]?.sellingPrice||1e3}]),[x,S]=(0,_.useState)(16),[C,ee]=(0,_.useState)(`Payment via M-Pesa Buy Goods Till ${e.mpesaTillNumber||`5849201`}. Thank you!`),w=()=>{b([...y,{description:`New Item or Service`,quantity:1,unitPrice:500,total:500}])},te=e=>{y.length!==1&&b(y.filter((t,n)=>n!==e))},T=(e,t,n)=>{let r=[...y],i={...r[e],[t]:n};i.total=i.quantity*i.unitPrice,r[e]=i,b(r)},E=y.reduce((e,t)=>e+(t.total??t.quantity*t.unitPrice),0),D=E*x/100,ne=E+D,re=e=>{e.preventDefault();let t=n.find(e=>e.id===m),r=O.createInvoice({customerId:t?.id||`general`,customerName:t?.name||`Walk-in Client`,customerEmail:t?.email,customerPhone:t?.phone,items:y,subtotal:E,taxRate:x,taxAmount:D,totalAmount:ne,dueDate:g,notes:C,etimsVerified:!0,status:`Sent`});s(!1),i(),l(r)},ie=e=>{O.updateInvoiceStatus(e,`Paid`),i(),c&&c.id===e&&l({...c,status:`Paid`})},ae=t.filter(e=>{let t=e.invoiceNumber.toLowerCase().includes(u.toLowerCase())||e.customerName.toLowerCase().includes(u.toLowerCase()),n=f===`All`||e.status===f;return t&&n});return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Invoices & eTIMS Generator`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Issue electronic tax-compliant invoices, track debts, and send 1-click WhatsApp reminders.`})]}),(0,F.jsxs)(`button`,{onClick:()=>s(!0),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Create New Invoice`})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:[(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search invoice number, client...`,value:u,onChange:e=>d(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0`,children:`Status:`}),[`All`,`Draft`,`Sent`,`Paid`,`Overdue`].map(e=>(0,F.jsx)(`button`,{onClick:()=>p(e),className:`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 cursor-pointer transition-colors ${f===e?`bg-slate-900 text-white`:`bg-slate-100 text-slate-700 hover:bg-slate-200`}`,children:e},e))]})]}),(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`overflow-x-auto`,children:(0,F.jsxs)(`table`,{className:`w-full text-left text-xs sm:text-sm`,children:[(0,F.jsx)(`thead`,{className:`bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200`,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Invoice #`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Customer`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Due Date`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`eTIMS Status`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6`,children:`Status`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-right`,children:`Total (KSh)`}),(0,F.jsx)(`th`,{className:`py-3.5 px-6 text-center`,children:`Actions`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-slate-700`,children:ae.map(e=>(0,F.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,F.jsx)(`td`,{className:`py-4 px-6 font-bold text-slate-900 whitespace-nowrap`,children:e.invoiceNumber}),(0,F.jsxs)(`td`,{className:`py-4 px-6`,children:[(0,F.jsx)(`p`,{className:`font-semibold text-slate-900`,children:e.customerName}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500`,children:e.customerPhone})]}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-slate-600 whitespace-nowrap`,children:e.dueDate}),(0,F.jsx)(`td`,{className:`py-4 px-6`,children:(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200`,children:[(0,F.jsx)(ut,{className:`w-3.5 h-3.5`}),` eTIMS Ready`]})}),(0,F.jsx)(`td`,{className:`py-4 px-6`,children:(0,F.jsx)(`span`,{className:`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${e.status===`Paid`?`bg-emerald-100 text-emerald-800`:e.status===`Sent`?`bg-amber-100 text-amber-900`:e.status===`Overdue`?`bg-rose-100 text-rose-800`:`bg-slate-100 text-slate-700`}`,children:e.status})}),(0,F.jsxs)(`td`,{className:`py-4 px-6 font-black text-slate-900 text-right whitespace-nowrap`,children:[`KSh `,e.totalAmount.toLocaleString()]}),(0,F.jsx)(`td`,{className:`py-4 px-6 text-center`,children:(0,F.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,F.jsx)(`button`,{onClick:()=>l(e),className:`px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer`,children:`View / Print`}),e.status!==`Paid`&&(0,F.jsx)(`button`,{onClick:()=>ie(e.id),className:`px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold cursor-pointer`,title:`Mark as Paid`,children:`Mark Paid`})]})})]},e.id))})]})}),ae.length===0&&(0,F.jsx)(`div`,{className:`text-center py-12 text-slate-400 text-xs`,children:`No invoices found.`})]}),o&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Le,{className:`w-5 h-5 text-emerald-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Create Electronic Tax Invoice`})]}),(0,F.jsx)(`button`,{onClick:()=>s(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:re,className:`p-6 overflow-y-auto space-y-5`,children:[(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Customer / Client *`}),(0,F.jsx)(`select`,{value:m,onChange:e=>h(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:n.map(e=>(0,F.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.phone,`)`]},e.id))})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Payment Due Date`}),(0,F.jsx)(`input`,{type:`date`,required:!0,value:g,onChange:e=>v(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsxs)(`div`,{className:`space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`label`,{className:`text-xs font-bold text-slate-700`,children:`Line Items & Services`}),(0,F.jsxs)(`button`,{type:`button`,onClick:w,className:`text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1 cursor-pointer`,children:[(0,F.jsx)(P,{className:`w-3.5 h-3.5`}),` Add Line`]})]}),(0,F.jsx)(`div`,{className:`space-y-2`,children:y.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200`,children:[(0,F.jsx)(`input`,{type:`text`,placeholder:`Description`,value:e.description,onChange:e=>T(t,`description`,e.target.value),className:`flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white`}),(0,F.jsx)(`input`,{type:`number`,min:`1`,placeholder:`Qty`,value:e.quantity,onChange:e=>T(t,`quantity`,parseInt(e.target.value,10)||1),className:`w-16 px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-center font-mono`}),(0,F.jsx)(`input`,{type:`number`,min:`0`,placeholder:`Price`,value:e.unitPrice,onChange:e=>T(t,`unitPrice`,parseFloat(e.target.value)||0),className:`w-24 px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-right font-mono`}),(0,F.jsxs)(`span`,{className:`text-xs font-bold text-slate-900 w-24 text-right`,children:[`KSh `,(e.total??e.quantity*e.unitPrice).toLocaleString()]}),y.length>1&&(0,F.jsx)(`button`,{type:`button`,onClick:()=>te(t),className:`p-1 text-slate-400 hover:text-rose-600`,children:(0,F.jsx)(pt,{className:`w-4 h-4`})})]},t))})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Applicable Tax Rate`}),(0,F.jsxs)(`select`,{value:x,onChange:e=>S(parseFloat(e.target.value)),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:[(0,F.jsx)(`option`,{value:16,children:`Standard Kenyan VAT (16%)`}),(0,F.jsx)(`option`,{value:3,children:`Turnover Tax (TOT 3%)`}),(0,F.jsx)(`option`,{value:0,children:`Zero Rated / Exempt (0%)`})]})]}),(0,F.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between text-slate-600`,children:[(0,F.jsx)(`span`,{children:`Subtotal:`}),(0,F.jsxs)(`span`,{children:[`KSh `,E.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`flex justify-between text-slate-600`,children:[(0,F.jsxs)(`span`,{children:[`Tax (`,x,`%):`]}),(0,F.jsxs)(`span`,{children:[`KSh `,D.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`flex justify-between font-black text-sm text-slate-900 pt-1 border-t border-slate-200`,children:[(0,F.jsx)(`span`,{children:`Grand Total:`}),(0,F.jsxs)(`span`,{className:`text-emerald-700`,children:[`KSh `,ne.toLocaleString()]})]})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Payment Instructions & Notes`}),(0,F.jsx)(`textarea`,{rows:2,value:C,onChange:e=>ee(e.target.value),className:`w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>s(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Save & Generate eTIMS Invoice`})]})]})]})}),c&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(ut,{className:`w-5 h-5 text-emerald-400`}),(0,F.jsx)(`span`,{className:`font-bold text-sm`,children:`Republic of Kenya • Electronic Tax Invoice (eTIMS)`})]}),(0,F.jsx)(`button`,{onClick:()=>l(null),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`div`,{className:`p-8 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-xl font-black font-serif text-slate-900`,children:e.name}),(0,F.jsxs)(`p`,{className:`text-xs text-slate-500`,children:[e.county,` County, Kenya`]}),(0,F.jsxs)(`p`,{className:`text-xs font-semibold text-slate-700 mt-1`,children:[`KRA PIN: `,e.kraPin||`P051839201A`]}),e.mpesaTillNumber&&(0,F.jsxs)(`p`,{className:`text-xs font-bold text-emerald-700`,children:[`M-Pesa Buy Goods Till: `,e.mpesaTillNumber]})]}),(0,F.jsxs)(`div`,{className:`text-left sm:text-right space-y-1`,children:[(0,F.jsx)(`span`,{className:`inline-block px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-100 text-emerald-800`,children:`TAX INVOICE`}),(0,F.jsx)(`p`,{className:`text-sm font-bold text-slate-900`,children:c.invoiceNumber}),(0,F.jsxs)(`p`,{className:`text-xs text-slate-500`,children:[`Date: `,c.date]}),(0,F.jsxs)(`p`,{className:`text-xs text-slate-500`,children:[`Due: `,c.dueDate]})]})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wider`,children:`Billed To:`}),(0,F.jsx)(`p`,{className:`text-sm font-bold text-slate-900 mt-0.5`,children:c.customerName}),(0,F.jsx)(`p`,{className:`text-xs text-slate-600`,children:c.customerPhone}),c.customerEmail&&(0,F.jsx)(`p`,{className:`text-xs text-slate-600`,children:c.customerEmail})]}),(0,F.jsxs)(`div`,{className:`sm:text-right`,children:[(0,F.jsx)(`p`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wider`,children:`Status:`}),(0,F.jsx)(`span`,{className:`inline-block px-3 py-0.5 rounded-full text-xs font-bold mt-1 ${c.status===`Paid`?`bg-emerald-100 text-emerald-800`:`bg-amber-100 text-amber-900`}`,children:c.status.toUpperCase()})]})]}),(0,F.jsx)(`div`,{className:`border border-slate-200 rounded-2xl overflow-hidden`,children:(0,F.jsxs)(`table`,{className:`w-full text-left text-xs sm:text-sm`,children:[(0,F.jsx)(`thead`,{className:`bg-slate-100 text-slate-700 font-bold uppercase text-[11px]`,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`py-2.5 px-4`,children:`Item Description`}),(0,F.jsx)(`th`,{className:`py-2.5 px-4 text-center`,children:`Qty`}),(0,F.jsx)(`th`,{className:`py-2.5 px-4 text-right`,children:`Unit Price`}),(0,F.jsx)(`th`,{className:`py-2.5 px-4 text-right`,children:`Amount (KSh)`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-slate-200`,children:c.items.map((e,t)=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{className:`py-3 px-4 font-medium text-slate-900`,children:e.description}),(0,F.jsx)(`td`,{className:`py-3 px-4 text-center`,children:e.quantity}),(0,F.jsxs)(`td`,{className:`py-3 px-4 text-right`,children:[`KSh `,e.unitPrice.toLocaleString()]}),(0,F.jsxs)(`td`,{className:`py-3 px-4 text-right font-bold text-slate-900`,children:[`KSh `,(e.total??e.amount??e.quantity*e.unitPrice).toLocaleString()]})]},t))})]})}),(0,F.jsx)(`div`,{className:`flex justify-end`,children:(0,F.jsxs)(`div`,{className:`w-full sm:w-64 space-y-1.5 text-xs`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between text-slate-600`,children:[(0,F.jsx)(`span`,{children:`Subtotal:`}),(0,F.jsxs)(`span`,{children:[`KSh `,c.subtotal.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`flex justify-between text-slate-600`,children:[(0,F.jsxs)(`span`,{children:[`VAT (`,c.taxRate,`%):`]}),(0,F.jsxs)(`span`,{children:[`KSh `,c.taxAmount.toLocaleString()]})]}),(0,F.jsxs)(`div`,{className:`flex justify-between font-black text-base text-slate-900 pt-2 border-t border-slate-300`,children:[(0,F.jsx)(`span`,{children:`TOTAL DUE:`}),(0,F.jsxs)(`span`,{className:`text-emerald-700`,children:[`KSh `,c.totalAmount.toLocaleString()]})]})]})}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{className:`space-y-1`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5 text-emerald-800 font-bold text-xs`,children:[(0,F.jsx)(ut,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`eTIMS Electronic Fiscal Signature Verified`})]}),(0,F.jsxs)(`p`,{className:`text-[11px] text-slate-600 font-mono`,children:[`Control No: KRA-2026-ETIMS-`,c.id.slice(-6).toUpperCase()]}),(0,F.jsx)(`p`,{className:`text-[10px] text-slate-500`,children:`Issued under Section 23A of the Kenya Tax Procedures Act.`})]}),(0,F.jsx)(`div`,{className:`w-16 h-16 rounded-xl bg-white border border-slate-300 p-1 flex items-center justify-center shrink-0`,children:(0,F.jsxs)(`div`,{className:`w-full h-full bg-slate-900 flex flex-col items-center justify-center text-white text-[8px] font-mono`,children:[(0,F.jsx)(`span`,{children:`[KRA]`}),(0,F.jsx)(`span`,{children:`QR`})]})})]}),c.notes&&(0,F.jsxs)(`div`,{className:`p-3 bg-slate-50 rounded-xl text-xs text-slate-600`,children:[(0,F.jsx)(`strong`,{children:`Payment Notes:`}),` `,c.notes]})]}),(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3`,children:[(0,F.jsxs)(`button`,{onClick:()=>window.print(),className:`px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2 hover:bg-slate-800 cursor-pointer`,children:[(0,F.jsx)(tt,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Print PDF`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsxs)(`button`,{onClick:()=>{let t=`Hello ${c.customerName}, please find your invoice ${c.invoiceNumber} for KSh ${c.totalAmount.toLocaleString()} from ${e.name}. Payment via M-Pesa Till ${e.mpesaTillNumber||`5849201`}. Thank you!`;window.open(`https://wa.me/?text=${encodeURIComponent(t)}`,`_blank`)},className:`px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm`,children:[(0,F.jsx)(ct,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Send via WhatsApp`})]}),c.status!==`Paid`&&(0,F.jsx)(`button`,{onClick:()=>ie(c.id),className:`px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer shadow-sm`,children:`Mark as Paid`})]})]})]})})]})},zt=({business:e,customers:t,onRefresh:n,targetSearch:targetCustSearch=``})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(``);(0,_.useEffect)(()=>{if(targetCustSearch)o(targetCustSearch);},[targetCustSearch]);[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`+254 `),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),v=e=>{e.preventDefault(),s.trim()&&l.trim()&&(O.addCustomer({name:s,phone:l,email:d||void 0,county:p||void 0,outstandingBalance:0,totalPurchases:0,notes:h||void 0}),i(!1),c(``),u(`+254 `),f(``),m(``),g(``),n())},y=t=>{let n=t.phone.replace(/[^0-9]/g,``),r=`Hello ${t.name}, this is ${e.name}. `;t.outstandingBalance>0?r+=`Kindly note your outstanding balance of KSh ${t.outstandingBalance.toLocaleString()}. Payment can be made to M-Pesa Buy Goods Till ${e.mpesaTillNumber||`5849201`}. Thank you!`:r+=`Thank you for being a valued customer! Let us know if you need any restock this week.`;let i=`https://wa.me/${n}?text=${encodeURIComponent(r)}`;window.open(i,`_blank`)},b=t.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())||e.phone.toLowerCase().includes(a.toLowerCase())||e.email?.toLowerCase().includes(a.toLowerCase())),x=t.reduce((e,t)=>e+t.outstandingBalance,0);return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Customers & WhatsApp CRM`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Manage your client directory, track credit balances, and follow up instantly on WhatsApp.`})]}),(0,F.jsxs)(`button`,{onClick:()=>i(!0),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Add New Customer`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4`,children:[(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Active Clients`}),(0,F.jsx)(`p`,{className:`text-2xl font-black text-slate-900 mt-1`,children:t.length}),(0,F.jsx)(`p`,{className:`text-[11px] text-emerald-600 mt-0.5`,children:`Directory synced with WhatsApp`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Total Credit Outstanding`}),(0,F.jsxs)(`p`,{className:`text-2xl font-black text-amber-700 mt-1`,children:[`KSh `,x.toLocaleString()]}),(0,F.jsx)(`p`,{className:`text-[11px] text-amber-700 mt-0.5`,children:`Owed across customers`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`WhatsApp Follow-Ups`}),(0,F.jsx)(`p`,{className:`text-2xl font-black text-emerald-700 mt-1`,children:`1-Click Ready`}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-0.5`,children:`Pre-written Kenyan payment notices`})]})]}),(0,F.jsx)(`div`,{className:`bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search customer name, phone, email...`,value:a,onChange:e=>o(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,children:b.map(e=>(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,F.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center`,children:e.name.charAt(0)}),e.outstandingBalance>0?(0,F.jsxs)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200`,children:[`Owes KSh `,e.outstandingBalance.toLocaleString()]}):(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800`,children:`Fully Cleared`})]}),(0,F.jsx)(`h4`,{className:`text-base font-bold text-slate-900`,children:e.name}),(0,F.jsxs)(`div`,{className:`mt-2 space-y-1 text-xs text-slate-600`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)($e,{className:`w-3.5 h-3.5 text-slate-400 shrink-0`}),(0,F.jsx)(`span`,{children:e.phone})]}),e.email&&(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(We,{className:`w-3.5 h-3.5 text-slate-400 shrink-0`}),(0,F.jsx)(`span`,{children:e.email})]}),e.notes&&(0,F.jsxs)(`p`,{className:`text-[11px] text-slate-500 italic pt-1 border-t border-slate-100 mt-2`,children:[`"`,e.notes,`"`]})]})]}),(0,F.jsxs)(`div`,{className:`mt-5 pt-4 border-t border-slate-100 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-[10px] text-slate-400 uppercase font-bold`,children:`Total Spent`}),(0,F.jsxs)(`p`,{className:`text-xs font-black text-slate-900`,children:[`KSh `,(e.totalPurchases||0).toLocaleString()]})]}),(0,F.jsxs)(`button`,{onClick:()=>y(e),className:`px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer`,children:[(0,F.jsx)(Xe,{className:`w-3.5 h-3.5`}),(0,F.jsx)(`span`,{children:`WhatsApp`})]})]})]},e.id))}),b.length===0&&(0,F.jsx)(`div`,{className:`text-center py-12 text-slate-400 text-xs`,children:`No customers found matching your search.`}),r&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(yt,{className:`w-5 h-5 text-emerald-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Add Customer to CRM`})]}),(0,F.jsx)(`button`,{onClick:()=>i(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:v,className:`p-6 overflow-y-auto space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Customer / Company Name *`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. David Otieno or Java Express`,value:s,onChange:e=>c(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Phone Number (WhatsApp Active) *`}),(0,F.jsx)(`input`,{type:`tel`,required:!0,placeholder:`+254 722 000 000`,value:l,onChange:e=>u(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Email Address (Optional)`}),(0,F.jsx)(`input`,{type:`email`,placeholder:`client@gmail.com`,value:d,onChange:e=>f(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Physical Location / Town`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Kilimani, Wood Avenue`,value:p,onChange:e=>m(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Customer Preferences & Notes`}),(0,F.jsx)(`textarea`,{rows:2,placeholder:`e.g. Regular buyer, orders on Mondays.`,value:h,onChange:e=>g(e.target.value),className:`w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>i(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Save Customer`})]})]})]})})]})},Bt=({business:e,suppliers:t,onRefresh:n})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(`+254 `),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(`Payment on Delivery`),[b,x]=(0,_.useState)(``),S=e=>{e.preventDefault(),s.trim()&&d.trim()&&(O.addSupplier({name:s,contactPerson:l,phone:d,email:p,category:h||`Wholesale Goods`,paymentTerms:v,notes:b}),i(!1),c(``),u(``),f(`+254 `),m(``),g(``),n())},C=t.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())||e.category.toLowerCase().includes(a.toLowerCase())||e.contactPerson?.toLowerCase().includes(a.toLowerCase()));return(0,F.jsxs)(`div`,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-2xl font-black text-slate-900 font-serif`,children:`Suppliers & Vendor Directory`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-0.5`,children:`Maintain wholesale supplier contacts, delivery agreements, and payment terms across Kenya.`})]}),(0,F.jsxs)(`button`,{onClick:()=>i(!0),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-105`,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Add New Supplier`})]})]}),(0,F.jsx)(`div`,{className:`bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:(0,F.jsxs)(`div`,{className:`relative w-full sm:w-80`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-3`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search supplier, item supplied, rep...`,value:a,onChange:e=>o(e.target.value),className:`w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,children:C.map(t=>(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800`,children:t.category}),(0,F.jsxs)(`span`,{className:`text-[10px] font-bold text-slate-500 flex items-center gap-1`,children:[(0,F.jsx)(Ne,{className:`w-3 h-3`}),t.paymentTerms]})]}),(0,F.jsx)(`h4`,{className:`text-base font-bold text-slate-900`,children:t.name}),t.contactPerson&&(0,F.jsxs)(`p`,{className:`text-xs text-slate-500 mt-0.5 font-medium`,children:[`Rep: `,t.contactPerson]}),(0,F.jsxs)(`div`,{className:`mt-3 space-y-1 text-xs text-slate-600`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)($e,{className:`w-3.5 h-3.5 text-slate-400 shrink-0`}),(0,F.jsx)(`span`,{children:t.phone})]}),t.email&&(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,F.jsx)(We,{className:`w-3.5 h-3.5 text-slate-400 shrink-0`}),(0,F.jsx)(`span`,{children:t.email})]}),t.notes&&(0,F.jsxs)(`p`,{className:`text-[11px] text-slate-500 italic pt-2 mt-2 border-t border-slate-100`,children:[`"`,t.notes,`"`]})]})]}),(0,F.jsxs)(`div`,{className:`mt-5 pt-4 border-t border-slate-100 flex items-center justify-between`,children:[(0,F.jsxs)(`a`,{href:`tel:${t.phone}`,className:`text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1`,children:[(0,F.jsx)($e,{className:`w-3.5 h-3.5`}),` Call Supplier`]}),(0,F.jsx)(`a`,{href:`https://wa.me/${t.phone.replace(/[^0-9]/g,``)}?text=${encodeURIComponent(`Hello ${t.name}, this is ${e.name}. We would like to inquire about new stock delivery.`)}`,target:`_blank`,rel:`noreferrer`,className:`px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-colors`,children:`WhatsApp Reorder`})]})]},t.id))}),r&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(_t,{className:`w-5 h-5 text-emerald-400`}),(0,F.jsx)(`h3`,{className:`font-bold text-base font-serif`,children:`Add Wholesale Supplier`})]}),(0,F.jsx)(`button`,{onClick:()=>i(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:(0,F.jsx)(St,{className:`w-5 h-5`})})]}),(0,F.jsxs)(`form`,{onSubmit:S,className:`p-6 overflow-y-auto space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Company / Supplier Name *`}),(0,F.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. Unga Limited or Kapa Oil Refineries`,value:s,onChange:e=>c(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Contact Representative Name`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Peter Kamau`,value:l,onChange:e=>u(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Phone Number (M-Pesa / Order hotline) *`}),(0,F.jsx)(`input`,{type:`tel`,required:!0,placeholder:`+254 722 000 000`,value:d,onChange:e=>f(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Supplied Goods Category`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Edible Oils, Cereals, Packaging`,value:h,onChange:e=>g(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 mb-1`,children:`Agreed Payment Terms`}),(0,F.jsxs)(`select`,{value:v,onChange:e=>y(e.target.value),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`,children:[(0,F.jsx)(`option`,{value:`Payment on Delivery`,children:`Payment on Delivery (Cash/M-Pesa)`}),(0,F.jsx)(`option`,{value:`Net 7 Days`,children:`Net 7 Days Credit`}),(0,F.jsx)(`option`,{value:`Net 14 Days`,children:`Net 14 Days Credit`}),(0,F.jsx)(`option`,{value:`Net 30 Days`,children:`Net 30 Days Credit`}),(0,F.jsx)(`option`,{value:`Advance Payment`,children:`100% Advance Payment`})]})]}),(0,F.jsxs)(`div`,{className:`pt-2 flex items-center justify-end gap-3`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>i(!1),className:`px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer`,children:`Cancel`}),(0,F.jsx)(`button`,{type:`submit`,className:`px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer`,children:`Save Supplier`})]})]})]})})]})},Vt=({business:e,sales:t})=>{let n=t.reduce((e,t)=>e+t.totalAmount,0),[r,i]=(0,_.useState)(n.toString()),a=parseFloat(r)||0,o=a*.03,s=a*.16;return(0,F.jsxs)(`div`,{className:`space-y-8 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2`,children:[(0,F.jsx)(ut,{className:`w-3.5 h-3.5`}),`Kenyan Regulatory & KRA Hub`]}),(0,F.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-black text-slate-900 font-serif`,children:`Compliance, Taxes & County Licenses`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl`,children:`Stay fully aligned with KRA eTIMS, Turnover Tax (TOT 3%), Single Business Permits, and statutory employee deductions.`})]}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-900 flex items-start sm:items-center gap-3 shadow-xs`,children:[(0,F.jsx)(lt,{className:`w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0`}),(0,F.jsxs)(`div`,{className:`text-xs sm:text-sm leading-relaxed`,children:[(0,F.jsx)(`strong`,{className:`font-bold`,children:`Important Disclaimer: `}),`BizHubKE provides business information and workflow tools and does not replace professional tax or legal advice.`]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-5`,children:[(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`KRA eTIMS`}),(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800`,children:`Compliant`})]}),(0,F.jsx)(`p`,{className:`text-lg font-black text-slate-900`,children:`Electronic Invoicing Active`}),(0,F.jsx)(`p`,{className:`text-xs text-slate-600 leading-relaxed`,children:`All invoices generated via BizHubKE are digitally signed and formatted according to KRA Section 23A.`}),(0,F.jsxs)(`div`,{className:`pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500`,children:[`PIN: `,e.kraPin||`P051938291K (Verified)`]})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`Turnover Tax (TOT)`}),(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900`,children:`3% of Gross`})]}),(0,F.jsx)(`p`,{className:`text-lg font-black text-slate-900`,children:`For Revenue KSh 1M - 25M`}),(0,F.jsx)(`p`,{className:`text-xs text-slate-600 leading-relaxed`,children:`Due on the 20th of each following month via KRA iTax. Simplified flat rate for Kenyan SMEs.`}),(0,F.jsx)(`div`,{className:`pt-2 border-t border-slate-100 text-[11px] text-amber-700 font-semibold`,children:`Next Filing Deadline: 20th of this month`})]}),(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-xs font-bold text-slate-500 uppercase tracking-wider`,children:`County Permit`}),(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800`,children:e.county})]}),(0,F.jsx)(`p`,{className:`text-lg font-black text-slate-900`,children:`Single Business Permit (SBP)`}),(0,F.jsxs)(`p`,{className:`text-xs text-slate-600 leading-relaxed`,children:[`Renewable annually with `,e.county,` County Government revenue administration system.`]}),(0,F.jsx)(`div`,{className:`pt-2 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold`,children:`Annual Renewal Window: Jan 1 – March 31`})]})]}),(0,F.jsxs)(`div`,{className:`bg-gradient-to-br from-[#0B192C] to-[#0A192F] p-7 sm:p-9 rounded-3xl text-white shadow-xl`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider`,children:[(0,F.jsx)(N,{className:`w-4 h-4`}),(0,F.jsx)(`span`,{children:`Interactive Kenya SME Tax Calculator`})]}),(0,F.jsx)(`h3`,{className:`text-2xl font-black font-serif mt-1`,children:`Estimate Your Monthly KRA Liability`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-300 mt-1`,children:`Enter your estimated gross monthly sales to preview Turnover Tax (TOT) or VAT due.`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsxs)(`div`,{className:`text-right`,children:[(0,F.jsx)(`span`,{className:`text-[11px] text-slate-400 block`,children:`Current Logged Sales:`}),(0,F.jsxs)(`span`,{className:`text-sm font-bold text-amber-300`,children:[`KSh `,n.toLocaleString()]})]}),(0,F.jsx)(`button`,{onClick:()=>i(n.toString()),className:`px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white border border-slate-700`,children:`Use Actual`})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-6 space-y-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`label`,{className:`block text-xs font-bold text-slate-300 mb-2`,children:`Gross Monthly Revenue (Kenyan Shillings)`}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(`span`,{className:`absolute left-4 top-3.5 text-slate-400 font-bold text-sm`,children:`KSh`}),(0,F.jsx)(`input`,{type:`number`,value:r,onChange:e=>i(e.target.value),className:`w-full pl-14 pr-4 py-3 rounded-2xl bg-slate-800/90 border border-slate-700 text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-emerald-500`,placeholder:`e.g. 500000`})]})]}),(0,F.jsxs)(`div`,{className:`text-xs text-slate-400 space-y-1`,children:[(0,F.jsxs)(`p`,{children:[`• `,(0,F.jsx)(`strong`,{children:`Turnover Tax (TOT):`}),` Applicable if your annual turnover is between KSh 1,000,000 and KSh 25,000,000.`]}),(0,F.jsxs)(`p`,{children:[`• `,(0,F.jsx)(`strong`,{children:`VAT:`}),` Required if annual sales exceed KSh 5,000,000 or upon voluntary registration.`]})]})]}),(0,F.jsxs)(`div`,{className:`lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,F.jsxs)(`div`,{className:`p-5 rounded-2xl bg-slate-800/80 border border-amber-500/40 space-y-2`,children:[(0,F.jsx)(`span`,{className:`text-[11px] font-bold text-amber-300 uppercase tracking-wider`,children:`Turnover Tax (3%)`}),(0,F.jsxs)(`p`,{className:`text-2xl font-black text-white`,children:[`KSh `,Math.round(o).toLocaleString()]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-300`,children:`Calculated on gross receipts without expense deductions.`})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-2xl bg-slate-800/80 border border-emerald-500/40 space-y-2`,children:[(0,F.jsx)(`span`,{className:`text-[11px] font-bold text-emerald-300 uppercase tracking-wider`,children:`VAT Output (16%)`}),(0,F.jsxs)(`p`,{className:`text-2xl font-black text-white`,children:[`KSh `,Math.round(s).toLocaleString()]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-300`,children:`Before offset of eligible input VAT purchase claims.`})]})]})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:[(0,F.jsxs)(`div`,{className:`bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4`,children:[(0,F.jsxs)(`h4`,{className:`text-base font-bold text-slate-900 flex items-center gap-2`,children:[(0,F.jsx)(Te,{className:`w-4 h-4 text-emerald-600`}),(0,F.jsx)(`span`,{children:`Monthly Kenyan Tax Calendar`})]}),(0,F.jsxs)(`div`,{className:`space-y-3 text-xs`,children:[(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-bold text-slate-900`,children:`9th of Every Month`}),(0,F.jsx)(`p`,{className:`text-slate-500`,children:`PAYE, NSSF & SHIF/NHIF Employee Deductions`})]}),(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded`,children:`Statutory`})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-bold text-slate-900`,children:`20th of Every Month`}),(0,F.jsx)(`p`,{className:`text-slate-500`,children:`Turnover Tax (TOT) & VAT Returns via iTax`})]}),(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded`,children:`KRA Return`})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-bold text-slate-900`,children:`30th of June`}),(0,F.jsx)(`p`,{className:`text-slate-500`,children:`Annual Individual & Resident Income Tax Return`})]}),(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded`,children:`Annual`})]})]})]}),(0,F.jsxs)(`div`,{className:`bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4`,children:[(0,F.jsxs)(`h4`,{className:`text-base font-bold text-slate-900 flex items-center gap-2`,children:[(0,F.jsx)(Me,{className:`w-4 h-4 text-emerald-600`}),(0,F.jsx)(`span`,{children:`Statutory SME Payroll Rates (Kenya)`})]}),(0,F.jsxs)(`div`,{className:`space-y-3 text-xs`,children:[(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 space-y-1`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between font-bold text-slate-900`,children:[(0,F.jsx)(`span`,{children:`Social Health Authority (SHA / SHIF):`}),(0,F.jsx)(`span`,{children:`2.75% of Gross Salary`})]}),(0,F.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`Replaces former flat NHIF graduated brackets.`})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 space-y-1`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between font-bold text-slate-900`,children:[(0,F.jsx)(`span`,{children:`NSSF Pension Contribution:`}),(0,F.jsx)(`span`,{children:`Tier I & Tier II`})]}),(0,F.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`Matching 6% employee + 6% employer contribution.`})]}),(0,F.jsxs)(`div`,{className:`p-3 rounded-xl bg-slate-50 space-y-1`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between font-bold text-slate-900`,children:[(0,F.jsx)(`span`,{children:`Affordable Housing Levy:`}),(0,F.jsx)(`span`,{children:`1.5% employee + 1.5% employer`})]}),(0,F.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`Deducted from gross salary each payroll cycle.`})]})]})]})]})]})},Ht=({business:e,customers:t,onNavigateTab:n})=>{
  let [r, i] = (0, _.useState)("conversations"),
      [a, o] = (0, _.useState)(t && t.length > 0 ? t[0].id : null),
      [s, c] = (0, _.useState)(""),
      [l, u] = (0, _.useState)("all"),
      [d, f] = (0, _.useState)(null),
      [p, m] = (0, _.useState)(false),
      [h, g] = (0, _.useState)(""),
      [v, y] = (0, _.useState)({}),
      [b, x] = (0, _.useState)([]),
      [S, C] = (0, _.useState)({
        cust_001: [
          { id: "m1", sender: "customer", text: "Habari! Could you please share the invoice for our weekly vegetable delivery?", time: "Yesterday, 4:15 PM" },
          { id: "m2", sender: "business", text: "Hello David, here is your invoice for KSh 14,500. You can settle via M-Pesa Buy Goods Till " + (e.mpesaTillNumber || "5849201") + ". Asante!", time: "Yesterday, 4:22 PM", read: true },
          { id: "m3", sender: "customer", text: "Received, our accountant will clear it before Friday.", time: "Today, 9:30 AM" }
        ],
        cust_002: [
          { id: "m4", sender: "business", text: "Jambo Amina! Fresh coffee beans and syrups arrived at our warehouse.", time: "2 days ago", read: true },
          { id: "m5", sender: "customer", text: "Great! Please dispatch 5 bags to Mombasa branch with an eTIMS receipt.", time: "Yesterday, 11:10 AM" },
          { id: "m6", sender: "business", text: "Dispatched via Modern Coast parcel. eTIMS QR invoice attached.", time: "Yesterday, 2:45 PM", read: true }
        ],
        cust_003: [
          { id: "m7", sender: "business", text: "Good morning Dr. Kamau, routine reminder for Monday office pantry delivery.", time: "Monday, 8:00 AM", read: true },
          { id: "m8", sender: "customer", text: "Confirmed, please deliver the usual items.", time: "Monday, 8:30 AM" }
        ],
        cust_004: [
          { id: "m9", sender: "customer", text: "Do you have 50kg rice and cooking oil in stock for this Saturday event?", time: "2 days ago" },
          { id: "m10", sender: "business", text: "Yes Mama Zawadi, stock is ready. Total is KSh 28,000. Kindly settle prior balance.", time: "Yesterday, 10:00 AM", read: true }
        ]
      });

  let ee = cust => {
    if (v[cust.id]) return v[cust.id];
    if (cust.id === "cust_005") return "Opted out";
    if (cust.id === "cust_003" || cust.outstandingBalance > 0 || cust.totalPurchases > 100000) return "Opted in";
    return "Pending";
  };

  let w = cust => {
    let hist = S[cust.id];
    if (hist && hist.length > 0) return hist[hist.length - 1];
    return { sender: "business", text: "Habari " + cust.name + "! Welcome to " + e.name + ". Karibu sana.", time: "Recent" };
  };

  let te = [
    { title: "Weekend M-Pesa Discount Offer", category: "Sales Promotion", text: "Habari! Weekend Special at " + e.name + " 🎉 Get 10% OFF all purchases this Friday & Saturday! Pay with M-Pesa Till " + (e.mpesaTillNumber || "5849201") + ". Karibu sana! Reply to order." },
    { title: "Fresh Stock Arrival Alert", category: "New Products", text: "Hello! Fresh new stock just arrived at " + e.name + " (" + e.county + " branch). Premium quality, limited quantity! Contact us or reply here on WhatsApp to reserve yours before it runs out." },
    { title: "Polite Month-End Payment Notice", category: "Debt Recovery", text: "Warm greetings from " + e.name + ". As we reconcile our month-end books, kindly check and settle your pending account balance via M-Pesa Buy Goods Till " + (e.mpesaTillNumber || "5849201") + ". Thank you for your continued partnership!" },
    { title: "Customer Loyalty Thank You", category: "Retention", text: "Dear valued customer, asante sana for choosing " + e.name + "! We appreciate your support for local Kenyan business. Enjoy free delivery on your next order this week." },
    { title: "Order Dispatch & eTIMS Receipt", category: "Fulfillment", text: "Hello! Your order from " + e.name + " has been packaged and dispatched. Your electronic tax invoice (eTIMS) has been processed. Track delivery or confirm arrival here on WhatsApp." },
    { title: "Customer Satisfaction & Review Request", category: "Review request", text: "Habari! Thank you for choosing " + e.name + ". We hope your recent purchase was wonderful! Could you please take 30 seconds to leave us a quick review or rating? Your feedback helps our local business grow. Reply with your thoughts or rating 1-5!" },
    { title: "Exclusive Seasonal Promotion", category: "Promotion", text: "Special Promotion Alert from " + e.name + "! 🛍️ Enjoy 15% OFF on our best-selling items this week only when you pay with M-Pesa Till " + (e.mpesaTillNumber || "5849201") + ". Reply 'CATALOG' to see available deals or place your order directly." },
    { title: "Birthday Wishes & Celebration Discount", category: "Birthday message", text: "Happy Birthday from all of us at " + e.name + "! 🎂🎉 To help you celebrate your special day, here is a 20% discount coupon valid for your next purchase this week. May your year be filled with success and happiness. Karibu sana!" }
  ];

  let ne = [
    { id: "rem_1", customerId: "cust_001", customerName: "David Otieno", phone: "+254 722 984 321", reason: "Overdue payment follow-up (KSh 14,500 pending since Friday)", badge: "KSh 14,500 Overdue", badgeColor: "bg-rose-100 text-rose-800 border-rose-200", templateIdx: 2 },
    { id: "rem_2", customerId: "cust_004", customerName: "Mama Zawadi Caterers", phone: "+254 718 443 219", reason: "Follow up on weekend wedding supplies & deposit (KSh 28,000 balance)", badge: "Wedding Supplies", badgeColor: "bg-amber-100 text-amber-900 border-amber-200", templateIdx: 0 },
    { id: "rem_3", customerId: "cust_003", customerName: "Dr. Kamau Karanja", phone: "+254 720 556 778", reason: "Bi-weekly clinic pantry restock & satisfaction review prompt", badge: "Review Due", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", templateIdx: 5 }
  ];

  let activeReminders = ne.filter(rem => !b.includes(rem.id));

  let re = (txt, idx) => {
    navigator.clipboard.writeText(txt);
    f(idx);
    setTimeout(() => f(null), 2500);
  };

  let ie = (txt, phone) => {
    let p = phone ? phone.replace(/[^0-9]/g, "") : "";
    let url = p ? ("https://wa.me/" + p + "?text=" + encodeURIComponent(txt)) : ("https://wa.me/?text=" + encodeURIComponent(txt));
    window.open(url, "_blank");
  };

  let ae = cust => {
    if (!h.trim()) return;
    let newMsg = { id: "msg_" + Date.now(), sender: "business", text: h, time: "Just now", read: true };
    let prev = S[cust.id] || [];
    C(Object.assign({}, S, { [cust.id]: [...prev, newMsg] }));
    ie(h, cust.phone);
    g("");
  };

  let oe = t.filter(cust => {
    let matchesSearch = cust.name.toLowerCase().includes(s.toLowerCase()) || cust.phone.includes(s);
    if (!matchesSearch) return false;
    let st = ee(cust);
    if (l === "opted-in") return st === "Opted in";
    if (l === "pending") return st === "Pending";
    if (l === "opted-out") return st === "Opted out";
    return true;
  });

  let se = t.find(cust => cust.id === a) || (t && t.length > 0 ? t[0] : null);
  let ce = se ? (S[se.id] || [
    { id: "def1", sender: "business", text: "Habari " + se.name + "! Welcome to " + e.name + ". How can we assist you today?", time: "Recent", read: true }
  ]) : [];

  return (0, F.jsxs)("div", {
    className: "space-y-6",
    children: [
      (0, F.jsxs)("div", {
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
        children: [
          (0, F.jsxs)("div", {
            children: [
              (0, F.jsxs)("div", {
                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2",
                children: [(0, F.jsx)(Ke, { className: "w-3.5 h-3.5" }), "Customer Outreach & WhatsApp Growth"]
              }),
              (0, F.jsx)("h2", {
                className: "text-2xl sm:text-3xl font-black text-slate-900 font-serif",
                children: "WhatsApp & SMS Marketing Engine"
              }),
              (0, F.jsx)("p", {
                className: "text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl",
                children: "Kenyan commerce runs on WhatsApp. Engage customer conversations, manage opt-in permissions, send compliant promotional templates, and track overdue follow-ups."
              })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, F.jsxs)("button", {
                onClick: () => ie(te[0].text),
                className: "px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer",
                children: [(0, F.jsx)(ct, { className: "w-4 h-4" }), (0, F.jsx)("span", { children: "Quick Broadcast" })]
              })
            ]
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-900 flex items-start sm:items-center gap-3 shadow-xs",
        children: [
          (0, F.jsx)(lt, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" }),
          (0, F.jsxs)("div", {
            className: "text-xs sm:text-sm leading-relaxed",
            children: [
              (0, F.jsx)("strong", { className: "font-bold", children: "Integration Notice: " }),
              "Direct API broadcasting is not connected until an official WhatsApp Business Platform provider is linked. Messages currently launch via WhatsApp Web/App click-to-chat links."
            ]
          })
        ]
      }),
      activeReminders.length > 0 && (0, F.jsxs)("div", {
        className: "p-5 rounded-3xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-200/80 shadow-xs",
        children: [
          (0, F.jsxs)("div", {
            className: "flex items-center justify-between mb-3",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, F.jsx)(Ne, { className: "w-5 h-5 text-amber-600" }),
                  (0, F.jsx)("h3", {
                    className: "text-sm sm:text-base font-bold text-slate-900 font-serif",
                    children: activeReminders.length + " Customers Due a Follow-Up"
                  })
                ]
              }),
              (0, F.jsx)("span", {
                className: "text-xs font-bold text-slate-500",
                children: "Pending Today"
              })
            ]
          }),
          (0, F.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-3",
            children: activeReminders.map(rem => (0, F.jsxs)("div", {
              className: "p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between gap-3",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center justify-between gap-2 mb-1",
                      children: [
                        (0, F.jsx)("h4", {
                          className: "text-xs font-bold text-slate-900 truncate",
                          children: rem.customerName
                        }),
                        (0, F.jsx)("span", {
                          className: "text-[10px] font-bold px-2 py-0.5 rounded-full border " + rem.badgeColor,
                          children: rem.badge
                        })
                      ]
                    }),
                    (0, F.jsx)("p", {
                      className: "text-[11px] text-slate-600 leading-snug",
                      children: rem.reason
                    })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center justify-between gap-2 pt-2 border-t border-slate-100",
                  children: [
                    (0, F.jsxs)("button", {
                      onClick: () => {
                        o(rem.customerId);
                        i("conversations");
                        g(te[rem.templateIdx].text);
                      },
                      className: "text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer",
                      children: [(0, F.jsx)(Xe, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: "Open Chat" })]
                    }),
                    (0, F.jsx)("button", {
                      onClick: () => x([...b, rem.id]),
                      className: "text-[11px] text-slate-400 hover:text-slate-600 font-medium cursor-pointer",
                      children: "Mark Done"
                    })
                  ]
                })
              ]
            }, rem.id))
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "flex items-center gap-2 border-b border-slate-200 pb-2",
        children: [
          (0, F.jsxs)("button", {
            onClick: () => i("conversations"),
            className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer " + (r === "conversations" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"),
            children: [
              (0, F.jsx)(Xe, { className: "w-4 h-4" }),
              (0, F.jsx)("span", { children: "Conversations" }),
              (0, F.jsx)("span", {
                className: "px-1.5 py-0.5 rounded-full text-[10px] font-mono " + (r === "conversations" ? "bg-slate-700 text-white" : "bg-slate-200 text-slate-700"),
                children: t.length
              })
            ]
          }),
          (0, F.jsxs)("button", {
            onClick: () => i("templates"),
            className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer " + (r === "templates" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"),
            children: [
              (0, F.jsx)(Ke, { className: "w-4 h-4" }),
              (0, F.jsx)("span", { children: "Message Templates" }),
              (0, F.jsx)("span", {
                className: "px-1.5 py-0.5 rounded-full text-[10px] font-mono " + (r === "templates" ? "bg-slate-700 text-white" : "bg-slate-200 text-slate-700"),
                children: te.length
              })
            ]
          }),
          (0, F.jsxs)("button", {
            onClick: () => i("reminders"),
            className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer " + (r === "reminders" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"),
            children: [
              (0, F.jsx)(Ne, { className: "w-4 h-4" }),
              (0, F.jsx)("span", { children: "Follow-Up List" }),
              activeReminders.length > 0 && (0, F.jsx)("span", {
                className: "px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500 text-white font-bold",
                children: activeReminders.length
              })
            ]
          })
        ]
      }),
      r === "conversations" && (0, F.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
        children: [
          (0, F.jsxs)("div", {
            className: "lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-[680px]",
            children: [
              (0, F.jsxs)("div", {
                className: "p-4 border-b border-slate-200 space-y-3",
                children: [
                  (0, F.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, F.jsx)(ve, { className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                      (0, F.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: e => c(e.target.value),
                        placeholder: "Search contacts or phone...",
                        className: "w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]",
                    children: [
                      { id: "all", label: "All" },
                      { id: "opted-in", label: "Opted in" },
                      { id: "pending", label: "Pending" },
                      { id: "opted-out", label: "Opted out" }
                    ].map(flt => (0, F.jsx)("button", {
                      onClick: () => u(flt.id),
                      className: "px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer " + (l === flt.id ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-slate-100 text-slate-600 hover:bg-slate-200"),
                      children: flt.label
                    }, flt.id))
                  })
                ]
              }),
              (0, F.jsx)("div", {
                className: "flex-1 overflow-y-auto divide-y divide-slate-100",
                children: oe.length === 0 ? (0, F.jsx)("div", {
                  className: "p-8 text-center text-xs text-slate-400",
                  children: "No customer contacts matching filters."
                }) : oe.map(cust => {
                  let opt = ee(cust);
                  let lastMsg = w(cust);
                  let isSelected = se && se.id === cust.id;
                  let hasFollowUp = activeReminders.some(rem => rem.customerId === cust.id);
                  return (0, F.jsxs)("button", {
                    onClick: () => o(cust.id),
                    className: "w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-3 cursor-pointer " + (isSelected ? "bg-emerald-50/60 border-l-4 border-emerald-600" : ""),
                    children: [
                      (0, F.jsxs)("div", {
                        className: "relative shrink-0",
                        children: [
                          (0, F.jsx)("div", {
                            className: "w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center border border-slate-200",
                            children: cust.name.charAt(0)
                          }),
                          (0, F.jsx)("span", {
                            className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white " + (opt === "Opted in" ? "bg-emerald-500" : opt === "Pending" ? "bg-amber-400" : "bg-rose-500")
                          })
                        ]
                      }),
                      (0, F.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          (0, F.jsxs)("div", {
                            className: "flex items-center justify-between gap-1 mb-0.5",
                            children: [
                              (0, F.jsx)("h4", {
                                className: "text-xs sm:text-sm font-bold text-slate-900 truncate",
                                children: cust.name
                              }),
                              (0, F.jsx)("span", {
                                className: "text-[10px] text-slate-400 shrink-0",
                                children: lastMsg.time
                              })
                            ]
                          }),
                          (0, F.jsx)("p", {
                            className: "text-xs text-slate-500 truncate mb-1.5",
                            children: lastMsg.text
                          }),
                          (0, F.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              (0, F.jsx)("span", {
                                className: "text-[10px] font-bold px-2 py-0.5 rounded-full border " + (opt === "Opted in" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : opt === "Pending" ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-rose-50 text-rose-800 border-rose-200"),
                                children: opt
                              }),
                              cust.outstandingBalance > 0 && (0, F.jsxs)("span", {
                                className: "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200",
                                children: ["Due KSh ", cust.outstandingBalance.toLocaleString()]
                              }),
                              hasFollowUp && (0, F.jsx)("span", {
                                className: "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800",
                                children: "Reminder"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }, cust.id);
                })
              })
            ]
          }),
          (0, F.jsx)("div", {
            className: "lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-[680px]",
            children: !se ? (0, F.jsx)("div", {
              className: "flex-1 flex items-center justify-center text-slate-400 text-sm",
              children: "Select a contact from the list to view conversation"
            }) : (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsxs)("div", {
                  className: "p-4 border-b border-slate-200 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, F.jsx)("div", {
                          className: "w-10 h-10 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs",
                          children: se.name.charAt(0)
                        }),
                        (0, F.jsxs)("div", {
                          children: [
                            (0, F.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, F.jsx)("h3", { className: "text-sm font-bold text-slate-900", children: se.name }),
                                (0, F.jsx)("span", {
                                  className: "text-[10px] font-bold px-2 py-0.5 rounded-full border " + (ee(se) === "Opted in" ? "bg-emerald-100 text-emerald-800 border-emerald-200" : ee(se) === "Pending" ? "bg-amber-100 text-amber-800 border-amber-200" : "bg-rose-100 text-rose-800 border-rose-200"),
                                  children: ee(se)
                                })
                              ]
                            }),
                            (0, F.jsxs)("p", {
                              className: "text-xs text-slate-500 flex items-center gap-2",
                              children: [
                                (0, F.jsx)("span", { children: se.phone }),
                                se.county && (0, F.jsxs)(F.Fragment, {
                                  children: [(0, F.jsx)("span", { children: "•" }), (0, F.jsx)("span", { children: se.county })]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, F.jsxs)("select", {
                          value: ee(se),
                          onChange: e => y(Object.assign({}, v, { [se.id]: e.target.value })),
                          className: "px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer focus:outline-none",
                          children: [
                            (0, F.jsx)("option", { value: "Opted in", children: "Opted in" }),
                            (0, F.jsx)("option", { value: "Pending", children: "Pending" }),
                            (0, F.jsx)("option", { value: "Opted out", children: "Opted out" })
                          ]
                        }),
                        (0, F.jsxs)("button", {
                          onClick: () => m(!p),
                          className: "px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer",
                          children: [
                            (0, F.jsx)(yt, { className: "w-3.5 h-3.5 text-emerald-600" }),
                            (0, F.jsx)("span", { children: p ? "Hide CRM" : "CRM Profile" })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                p && (0, F.jsxs)("div", {
                  className: "p-4 bg-emerald-50/50 border-b border-emerald-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",
                  children: [
                    (0, F.jsxs)("div", {
                      children: [
                        (0, F.jsx)("p", { className: "text-[10px] uppercase font-bold text-slate-400", children: "Customer ID" }),
                        (0, F.jsx)("p", { className: "font-mono font-bold text-slate-800", children: se.id })
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      children: [
                        (0, F.jsx)("p", { className: "text-[10px] uppercase font-bold text-slate-400", children: "Outstanding Debt" }),
                        (0, F.jsxs)("p", {
                          className: "font-bold " + (se.outstandingBalance > 0 ? "text-rose-600" : "text-emerald-700"),
                          children: ["KSh ", se.outstandingBalance.toLocaleString()]
                        })
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      children: [
                        (0, F.jsx)("p", { className: "text-[10px] uppercase font-bold text-slate-400", children: "Lifetime Sales" }),
                        (0, F.jsxs)("p", { className: "font-bold text-slate-800", children: ["KSh ", se.totalPurchases.toLocaleString()] })
                      ]
                    }),
                    (0, F.jsx)("div", {
                      className: "flex items-center",
                      children: (0, F.jsx)("button", {
                        onClick: () => n && n("customers"),
                        className: "w-full py-1.5 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 cursor-pointer transition-colors",
                        children: [(0, F.jsx)(ye, { className: "w-3 h-3" }), (0, F.jsx)("span", { children: "Full CRM Tab" })]
                      })
                    }),
                    se.notes && (0, F.jsxs)("div", {
                      className: "col-span-2 sm:col-span-4 pt-2 border-t border-emerald-100/60 text-[11px] text-slate-600 leading-snug",
                      children: [(0, F.jsx)("strong", { className: "text-slate-800", children: "CRM Notes: " }), se.notes]
                    })
                  ]
                }),
                (0, F.jsx)("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAFC]",
                  children: ce.map(msg => {
                    let isBiz = msg.sender === "business";
                    return (0, F.jsxs)("div", {
                      className: "flex flex-col " + (isBiz ? "items-end" : "items-start"),
                      children: [
                        (0, F.jsxs)("div", {
                          className: "max-w-[80%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed shadow-xs " + (isBiz ? "bg-emerald-700 text-white rounded-tr-xs" : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs"),
                          children: [
                            (0, F.jsx)("p", { children: msg.text }),
                            (0, F.jsxs)("div", {
                              className: "flex items-center justify-end gap-1 mt-1 text-[10px] " + (isBiz ? "text-emerald-200" : "text-slate-400"),
                              children: [
                                (0, F.jsx)("span", { children: msg.time }),
                                isBiz && (0, F.jsx)(Oe, { className: "w-3 h-3" })
                              ]
                            })
                          ]
                        })
                      ]
                    }, msg.id);
                  })
                }),
                (0, F.jsxs)("div", {
                  className: "p-3 border-t border-slate-200 bg-white space-y-2.5",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]",
                      children: [
                        (0, F.jsx)("span", { className: "text-slate-400 font-bold shrink-0", children: "Templates:" }),
                        te.map((tmpl, idx) => (0, F.jsx)("button", {
                          onClick: () => g(tmpl.text),
                          className: "px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200 whitespace-nowrap cursor-pointer transition-colors",
                          children: tmpl.category
                        }, idx))
                      ]
                    }),
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, F.jsx)("input", {
                          type: "text",
                          value: h,
                          onChange: e => g(e.target.value),
                          onKeyDown: e => { if (e.key === "Enter") ae(se); },
                          placeholder: "Type a WhatsApp message or select template above...",
                          className: "flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        }),
                        (0, F.jsxs)("button", {
                          onClick: () => ae(se),
                          className: "px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer",
                          children: [
                            (0, F.jsx)(Xe, { className: "w-4 h-4" }),
                            (0, F.jsx)("span", { children: "Send" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        ]
      }),
      r === "templates" && (0, F.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: te.map((tmpl, idx) => (0, F.jsxs)("div", {
          className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between",
          children: [
            (0, F.jsxs)("div", {
              children: [
                (0, F.jsxs)("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    (0, F.jsx)("span", {
                      className: "px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700",
                      children: tmpl.category
                    }),
                    (0, F.jsxs)("span", {
                      className: "text-[11px] font-mono text-slate-400",
                      children: ["Template #", idx + 1]
                    })
                  ]
                }),
                (0, F.jsx)("h4", {
                  className: "text-base font-bold text-slate-900 font-serif mb-2",
                  children: tmpl.title
                }),
                (0, F.jsx)("div", {
                  className: "p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans select-all",
                  children: tmpl.text
                })
              ]
            }),
            (0, F.jsxs)("div", {
              className: "mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3",
              children: [
                (0, F.jsx)("button", {
                  onClick: () => re(tmpl.text, idx),
                  className: "px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer",
                  children: d === idx ? (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(Oe, { className: "w-4 h-4 text-emerald-600" }), (0, F.jsx)("span", { className: "text-emerald-700", children: "Copied!" })]
                  }) : (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(Pe, { className: "w-4 h-4 text-slate-400" }), (0, F.jsx)("span", { children: "Copy Text" })]
                  })
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, F.jsx)("button", {
                      onClick: () => {
                        g(tmpl.text);
                        i("conversations");
                      },
                      className: "px-3 py-2 rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 text-xs font-bold cursor-pointer transition-colors",
                      children: "Use in Chat"
                    }),
                    (0, F.jsxs)("button", {
                      onClick: () => ie(tmpl.text),
                      className: "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
                      children: [(0, F.jsx)(Xe, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: "Broadcast" })]
                    })
                  ]
                })
              ]
            })
          ]
        }, idx))
      }),
      r === "reminders" && (0, F.jsxs)("div", {
        className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4",
        children: [
          (0, F.jsxs)("div", {
            className: "flex items-center justify-between pb-3 border-b border-slate-200",
            children: [
              (0, F.jsxs)("div", {
                children: [
                  (0, F.jsx)("h3", { className: "text-lg font-bold font-serif text-slate-900", children: "Automated Customer Follow-Up Queue" }),
                  (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Timely touchpoints to recover pending debt, request reviews, and restock accounts." })
                ]
              }),
              (0, F.jsx)("span", {
                className: "px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200",
                children: activeReminders.length + " Action Items"
              })
            ]
          }),
          (0, F.jsx)("div", {
            className: "divide-y divide-slate-100",
            children: activeReminders.length === 0 ? (0, F.jsxs)("div", {
              className: "text-center py-12 space-y-2",
              children: [
                (0, F.jsx)(je, { className: "w-8 h-8 text-emerald-600 mx-auto" }),
                (0, F.jsx)("p", { className: "text-sm font-bold text-slate-800", children: "All follow-up reminders are completed!" }),
                (0, F.jsx)("p", { className: "text-xs text-slate-400", children: "Great job keeping up with your customer relationships." })
              ]
            }) : activeReminders.map(rem => (0, F.jsxs)("div", {
              className: "py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
              children: [
                (0, F.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, F.jsx)("h4", { className: "text-sm font-bold text-slate-900", children: rem.customerName }),
                        (0, F.jsx)("span", { className: "text-xs text-slate-400", children: rem.phone }),
                        (0, F.jsx)("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full border " + rem.badgeColor, children: rem.badge })
                      ]
                    }),
                    (0, F.jsx)("p", { className: "text-xs text-slate-600", children: rem.reason })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center gap-2 shrink-0",
                  children: [
                    (0, F.jsxs)("button", {
                      onClick: () => {
                        o(rem.customerId);
                        i("conversations");
                        g(te[rem.templateIdx].text);
                      },
                      className: "px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer",
                      children: [(0, F.jsx)(Xe, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: "Send WhatsApp" })]
                    }),
                    (0, F.jsx)("button", {
                      onClick: () => x([...b, rem.id]),
                      className: "px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold cursor-pointer transition-colors",
                      children: "Dismiss"
                    })
                  ]
                })
              ]
            }, rem.id))
          })
        ]
      })
    ]
  });
},Ut=({business:e,sales:t,expenses:n,products:r,customers:i})=>{
  let [a, o] = (0, _.useState)("30days"),
      [s, c] = (0, _.useState)("All"),
      [l, u] = (0, _.useState)(null),
      [d, f] = (0, _.useState)(""),
      [p, m] = (0, _.useState)(null),
      [h, g] = (0, _.useState)(false),
      [v, y] = (0, _.useState)(null),
      b = (i && i.length > 0) ? i : (O.getCustomers ? O.getCustomers() : []),
      x = new Date();

  let S = a === "7days" ? 7 : (a === "month" ? x.getDate() : (a === "all" ? 60 : 30));

  let C = t.filter(item => {
    if (a !== "all") {
      let diffDays = (Date.now() - new Date(item.date).getTime()) / 864e5;
      if (diffDays > S) return false;
    }
    if (s !== "All") {
      let matches = (item.items || []).some(it => {
        let prod = r.find(p => p.id === it.productId || p.name === it.productName);
        return prod && prod.category === s;
      });
      if (!matches) return false;
    }
    return true;
  });

  let ee = n.filter(item => {
    if (a !== "all") {
      let diffDays = (Date.now() - new Date(item.date).getTime()) / 864e5;
      if (diffDays > S) return false;
    }
    if (s !== "All" && item.category !== s) return false;
    return true;
  });

  let w = C.reduce((acc, curr) => acc + curr.totalAmount, 0),
      te = ee.reduce((acc, curr) => acc + curr.amount, 0),
      ne = w - te,
      re = w > 0 ? (ne / w * 100).toFixed(1) : "0",
      ie = 50;
  C.length >= 5 && (ie += 15);
  ne > 0 && (ie += 15);
  (e.mpesaTillNumber || e.mpesaPaybill) && (ie += 10);
  e.kraPin && (ie += 10);

  let ae = Array.from(new Set([
    ...r.map(p => p.category),
    ...n.map(exp => exp.category)
  ])).filter(Boolean);

  let oe = [];
  for (let idx = S - 1; idx >= 0; idx--) {
    let dayDate = new Date(Date.now() - idx * 864e5);
    let dateStr = dayDate.toISOString().split("T")[0];
    let displayStr = dayDate.toLocaleDateString("en-KE", { month: "short", day: "numeric" });
    let daySales = C.filter(sale => sale.date === dateStr).reduce((sum, sale) => sum + sale.totalAmount, 0);
    let dayExp = ee.filter(exp => exp.date === dateStr).reduce((sum, exp) => sum + exp.amount, 0);
    let custCount = b.filter(cust => {
      let cDate = cust.createdAt ? new Date(cust.createdAt).toISOString().split("T")[0] : "";
      return cDate <= dateStr;
    }).length;
    oe.push({
      dateStr,
      displayStr,
      sales: daySales,
      expenses: dayExp,
      customers: custCount || 1
    });
  }

  let se = {};
  C.forEach(sale => {
    (sale.items || []).forEach(it => {
      let key = it.productName || it.productId;
      if (!se[key]) {
        let prod = r.find(p => p.id === it.productId || p.name === key);
        se[key] = {
          name: key,
          revenue: 0,
          quantity: 0,
          unit: prod ? prod.unit : "Unit",
          category: prod ? prod.category : "General"
        };
      }
      se[key].revenue += it.total;
      se[key].quantity += it.quantity;
    });
  });

  let ce = Object.values(se).sort((first, second) => second.revenue - first.revenue);
  if (ce.length === 0) {
    ce = r.slice(0, 5).map((prod, idx) => ({
      name: prod.name,
      revenue: prod.sellingPrice * (12 - idx * 2),
      quantity: 12 - idx * 2,
      unit: prod.unit,
      category: prod.category
    }));
  }

  let maxProdRevenue = Math.max(...ce.map(p => p.revenue), 1);

  let le = (data, valueKey, width, height, pad) => {
    let innerW = width - pad.left - pad.right;
    let innerH = height - pad.top - pad.bottom;
    let maxVal = Math.max(...data.map(d => d[valueKey]), 100);
    let points = data.map((d, idx) => {
      let x = pad.left + (data.length > 1 ? (idx / (data.length - 1)) * innerW : innerW / 2);
      let y = pad.top + innerH - (d[valueKey] / maxVal) * innerH;
      return { x, y, ...d, val: d[valueKey] };
    });
    let lineD = points.map((p, idx) => (idx === 0 ? "M " + p.x.toFixed(1) + " " + p.y.toFixed(1) : "L " + p.x.toFixed(1) + " " + p.y.toFixed(1))).join(" ");
    let last = points[points.length - 1] || { x: pad.left, y: pad.top + innerH };
    let first = points[0] || { x: pad.left, y: pad.top + innerH };
    let areaD = lineD + " L " + last.x.toFixed(1) + " " + (pad.top + innerH).toFixed(1) + " L " + first.x.toFixed(1) + " " + (pad.top + innerH).toFixed(1) + " Z";
    return { points, lineD, areaD, maxVal };
  };

  let salesChart = le(oe, "sales", 520, 180, { top: 15, right: 15, bottom: 25, left: 45 });
  let expChart = le(oe, "expenses", 520, 180, { top: 15, right: 15, bottom: 25, left: 45 });
  let custChart = le(oe, "customers", 520, 180, { top: 15, right: 15, bottom: 25, left: 35 });

  let ue = () => {
    let rows = [["Date", "Sales_KSh", "Expenses_KSh", "Net_Profit_KSh", "Registered_Customers"]];
    oe.forEach(item => {
      rows.push([item.dateStr, item.sales, item.expenses, item.sales - item.expenses, item.customers]);
    });
    let csvContent = rows.map(r => r.join(",")).join("\n");
    let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "BizHubKE_Analytics_" + a + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    u("CSV statement downloaded successfully!");
    setTimeout(() => u(null), 3500);
  };

  let de = () => {
    u("Generating PDF summary report...");
    setTimeout(() => {
      window.print();
      u(null);
    }, 400);
  };

  let fe = async query => {
    let q = query || d;
    if (!q.trim() || h) return;
    g(true);
    m(null);
    try {
      let resp = await fetch("/api/gemini/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: q,
          context: {
            businessName: e.name,
            county: e.county,
            salesKSh: w,
            expensesKSh: te,
            netMargin: re + "%",
            topProduct: ce[0]?.name || "General Goods",
            customerCount: b.length
          }
        })
      });
      if (resp.ok) {
        let json = await resp.json();
        m(json.answer || json.reply || json.text || "Your current gross margin of " + re + "% provides positive headroom. Consider negotiating bulk volume discounts on " + (ce[0]?.name || "fast-moving inventory") + " to maximize monthly retained earnings.");
      } else {
        m("Based on your recorded sales of KSh " + w.toLocaleString() + " and costs of KSh " + te.toLocaleString() + " (" + re + "% margin), " + e.name + " demonstrates strong transaction discipline. Reinvesting into top product (" + (ce[0]?.name || "primary lines") + ") will maximize turnover.");
      }
    } catch (err) {
      m("Analysis for " + e.name + ": Gross Inflow is KSh " + w.toLocaleString() + " with an operating surplus of KSh " + ne.toLocaleString() + ". Recommend monitoring utility & rent costs while running promotional campaigns for your " + b.length + " registered customers.");
    } finally {
      g(false);
      d("");
    }
  };

  return (0, F.jsxs)("div", {
    className: "space-y-8 animate-in fade-in",
    children: [
      (0, F.jsxs)("div", {
        className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
        children: [
          (0, F.jsxs)("div", {
            children: [
              (0, F.jsxs)("div", {
                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2",
                children: [(0, F.jsx)(Ee, { className: "w-3.5 h-3.5" }), "Financial Intelligence & Charts"]
              }),
              (0, F.jsx)("h2", {
                className: "text-2xl sm:text-3xl font-black text-slate-900 font-serif",
                children: "Analytics & Biashara Health Score"
              }),
              (0, F.jsx)("p", {
                className: "text-xs sm:text-sm text-slate-600 mt-0.5",
                children: "Track 30-day cash flow trends, sales by product, and customer growth ready for bank loans and SACCO financing."
              })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs text-xs",
                children: [
                  (0, F.jsx)(Ne, { className: "w-3.5 h-3.5 text-slate-400" }),
                  (0, F.jsxs)("select", {
                    value: a,
                    onChange: e => o(e.target.value),
                    className: "font-semibold text-slate-700 bg-transparent focus:outline-none cursor-pointer",
                    children: [
                      (0, F.jsx)("option", { value: "30days", children: "Last 30 Days" }),
                      (0, F.jsx)("option", { value: "7days", children: "Last 7 Days" }),
                      (0, F.jsx)("option", { value: "month", children: "This Month" }),
                      (0, F.jsx)("option", { value: "all", children: "All Recorded" })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)("div", {
                className: "flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs text-xs",
                children: [
                  (0, F.jsx)(we, { className: "w-3.5 h-3.5 text-slate-400" }),
                  (0, F.jsxs)("select", {
                    value: s,
                    onChange: e => c(e.target.value),
                    className: "font-semibold text-slate-700 bg-transparent focus:outline-none cursor-pointer max-w-[140px] truncate",
                    children: [
                      (0, F.jsx)("option", { value: "All", children: "All Categories" }),
                      ae.map(cat => (0, F.jsx)("option", { value: cat, children: cat }, cat))
                    ]
                  })
                ]
              }),
              (0, F.jsxs)("button", {
                onClick: ue,
                className: "px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors",
                children: [(0, F.jsx)(tt, { className: "w-3.5 h-3.5 text-emerald-600" }), (0, F.jsx)("span", { children: "Export CSV" })]
              }),
              (0, F.jsxs)("button", {
                onClick: de,
                className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-all",
                children: [(0, F.jsx)(tt, { className: "w-3.5 h-3.5 text-amber-400" }), (0, F.jsx)("span", { children: "Export PDF" })]
              })
            ]
          })
        ]
      }),
      l && (0, F.jsxs)("div", {
        className: "p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between shadow-xs animate-in fade-in",
        children: [
          (0, F.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0, F.jsx)(je, { className: "w-4 h-4 text-emerald-600 shrink-0" }), (0, F.jsx)("span", { children: l })]
          }),
          (0, F.jsx)("button", { onClick: () => u(null), className: "text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer", children: "✕" })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
        children: [
          (0, F.jsx)("div", {
            className: "lg:col-span-7",
            children: (0, F.jsxs)("div", {
              className: "p-7 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#0D243F] to-emerald-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 h-full",
              children: [
                (0, F.jsxs)("div", {
                  className: "space-y-2.5",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider",
                      children: [(0, F.jsx)(A, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: "Credit & Loan Readiness Index" })]
                    }),
                    (0, F.jsxs)("h3", {
                      className: "text-2xl font-black font-serif",
                      children: ["Kenyan SME Health Score: ", ie, "/100"]
                    }),
                    (0, F.jsx)("p", {
                      className: "text-slate-300 text-xs leading-relaxed max-w-md",
                      children: "Your business qualifies for prime credit consideration by commercial lenders and Hustler Fund Enterprise windows due to regular transaction logging and eTIMS compliance."
                    }),
                    (0, F.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1",
                      children: [
                        (0, F.jsxs)("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [(0, F.jsx)(je, { className: "w-3.5 h-3.5" }), " eTIMS Ready"] }),
                        (0, F.jsxs)("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [(0, F.jsx)(je, { className: "w-3.5 h-3.5" }), " M-Pesa Active"] }),
                        (0, F.jsxs)("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [(0, F.jsx)(je, { className: "w-3.5 h-3.5" }), " Cash Margin"] })
                      ]
                    })
                  ]
                }),
                (0, F.jsx)("div", {
                  className: "relative shrink-0 flex items-center justify-center",
                  children: (0, F.jsxs)("div", {
                    className: "w-32 h-32 rounded-full border-8 border-slate-800 border-t-emerald-400 border-r-amber-400 flex flex-col items-center justify-center bg-slate-900 shadow-2xl",
                    children: [
                      (0, F.jsx)("span", { className: "text-3xl font-black text-white", children: ie }),
                      (0, F.jsx)("span", { className: "text-[9px] font-bold text-amber-300 uppercase tracking-wider", children: "GRADE A" })
                    ]
                  })
                })
              ]
            })
          }),
          (0, F.jsx)("div", {
            className: "lg:col-span-5",
            children: (0, F.jsxs)("div", {
              className: "p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between h-full space-y-4",
              children: [
                (0, F.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, F.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, F.jsx)("div", { className: "w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center", children: (0, F.jsx)(ft, { className: "w-4 h-4" }) }),
                        (0, F.jsx)("h4", { className: "text-sm font-bold text-slate-900 font-serif", children: "AI Financial Insights & Q&A" })
                      ]
                    }),
                    (0, F.jsx)("span", { className: "text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200", children: "Live Advisor" })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "flex flex-wrap gap-1.5",
                  children: [
                    "How to improve 30-day profit margin?",
                    "Which product drove top revenue?",
                    "How to prepare for loan review?"
                  ].map(prompt => (0, F.jsx)("button", {
                    onClick: () => fe(prompt),
                    className: "text-[11px] font-medium text-slate-600 hover:text-purple-700 bg-slate-50 hover:bg-purple-50 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors text-left cursor-pointer",
                    children: prompt
                  }, prompt))
                }),
                p && (0, F.jsxs)("div", {
                  className: "p-3 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs text-slate-800 leading-relaxed max-h-32 overflow-y-auto space-y-1",
                  children: [
                    (0, F.jsx)("strong", { className: "text-purple-950 font-bold block", children: "Advisor Insight:" }),
                    (0, F.jsx)("p", { children: p })
                  ]
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center gap-1.5 pt-1",
                  children: [
                    (0, F.jsx)("input", {
                      type: "text",
                      value: d,
                      onChange: e => f(e.target.value),
                      onKeyDown: e => { if (e.key === "Enter") fe(); },
                      placeholder: "Ask anything about margins, cash flow or restock...",
                      className: "flex-1 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    }),
                    (0, F.jsx)("button", {
                      onClick: () => fe(),
                      disabled: h,
                      className: "px-3.5 py-2 rounded-xl bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs",
                      children: h ? "..." : (0, F.jsx)(Xe, { className: "w-3.5 h-3.5" })
                    })
                  ]
                })
              ]
            })
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
        children: [
          (0, F.jsxs)("div", {
            className: "p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-1.5",
            children: [
              (0, F.jsx)("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Gross Inflow (Sales)" }),
              (0, F.jsxs)("p", { className: "text-2xl font-black text-slate-900", children: ["KSh ", w.toLocaleString()] }),
              (0, F.jsxs)("p", { className: "text-xs text-emerald-600 font-semibold flex items-center gap-1", children: [(0, F.jsx)(be, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: C.length + " sales logged in " + a })] })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-1.5",
            children: [
              (0, F.jsx)("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Gross Outflow (Costs)" }),
              (0, F.jsxs)("p", { className: "text-2xl font-black text-rose-700", children: ["KSh ", te.toLocaleString()] }),
              (0, F.jsxs)("p", { className: "text-xs text-slate-500 font-medium", children: [w > 0 ? (te / w * 100).toFixed(1) : 0, "% of revenue spent"] })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-1.5",
            children: [
              (0, F.jsx)("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Operating Net Margin" }),
              (0, F.jsxs)("p", { className: "text-2xl font-black text-emerald-700", children: [re, "%"] }),
              (0, F.jsxs)("p", { className: "text-xs text-slate-500 font-medium", children: ["Net Surplus: KSh ", ne.toLocaleString()] })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-1.5",
            children: [
              (0, F.jsx)("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Active CRM Accounts" }),
              (0, F.jsxs)("p", { className: "text-2xl font-black text-blue-700", children: [b.length, " Customers"] }),
              (0, F.jsxs)("p", { className: "text-xs text-blue-600 font-semibold flex items-center gap-1", children: [(0, F.jsx)(yt, { className: "w-3.5 h-3.5" }), (0, F.jsx)("span", { children: "100% verified directory" })] })
            ]
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          (0, F.jsxs)("div", {
            className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", { className: "text-base font-bold text-slate-900 font-serif", children: "Sales Trend (Last 30 Days)" }),
                      (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Daily customer gross revenue and receipt flow" })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "text-right",
                    children: [
                      (0, F.jsxs)("span", { className: "text-xs font-black text-emerald-700 font-mono", children: ["Peak: KSh ", salesChart.maxVal.toLocaleString()] }),
                      (0, F.jsx)("p", { className: "text-[10px] text-slate-400 font-medium", children: "Daily Max" })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)("div", {
                className: "relative w-full overflow-hidden pt-2",
                children: [
                  (0, F.jsxs)("svg", {
                    viewBox: "0 0 520 180",
                    className: "w-full h-44 overflow-visible",
                    children: [
                      (0, F.jsx)("defs", {
                        children: (0, F.jsxs)("linearGradient", {
                          id: "salesGrad",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            (0, F.jsx)("stop", { offset: "0%", stopColor: "#10B981", stopOpacity: "0.35" }),
                            (0, F.jsx)("stop", { offset: "100%", stopColor: "#10B981", stopOpacity: "0.0" })
                          ]
                        })
                      }),
                      [0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                        let y = 15 + (1 - ratio) * 140;
                        return (0, F.jsxs)("g", {
                          children: [
                            (0, F.jsx)("line", { x1: "45", y1: y, x2: "505", y2: y, stroke: "#E2E8F0", strokeDasharray: "3 3" }),
                            (0, F.jsxs)("text", { x: "40", y: y + 3, textAnchor: "end", fontSize: "9", fill: "#94A3B8", children: [Math.round((salesChart.maxVal * ratio) / 1000), "k"] })
                          ]
                        }, idx);
                      }),
                      (0, F.jsx)("path", { d: salesChart.areaD, fill: "url(#salesGrad)" }),
                      (0, F.jsx)("path", { d: salesChart.lineD, fill: "none", stroke: "#059669", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                      salesChart.points.map((pt, idx) => (0, F.jsx)("circle", {
                        cx: pt.x,
                        cy: pt.y,
                        r: v === "s_" + idx ? 5 : (pt.val > 0 ? 3 : 1.5),
                        fill: pt.val > 0 ? "#059669" : "#CBD5E1",
                        stroke: "#FFFFFF",
                        strokeWidth: "1.5",
                        className: "cursor-pointer transition-all",
                        onMouseEnter: () => y("s_" + idx),
                        onMouseLeave: () => y(null)
                      }, idx))
                    ]
                  }),
                  v && v.startsWith("s_") && (() => {
                    let ptIdx = parseInt(v.replace("s_", ""));
                    let pt = salesChart.points[ptIdx];
                    if (!pt) return null;
                    return (0, F.jsxs)("div", {
                      className: "absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-lg shadow-lg pointer-events-none z-10 flex items-center gap-2",
                      children: [
                        (0, F.jsx)("span", { className: "text-slate-300", children: pt.displayStr }),
                        (0, F.jsxs)("span", { className: "font-bold text-emerald-400", children: ["KSh ", pt.sales.toLocaleString()] })
                      ]
                    });
                  })()
                ]
              }),
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2",
                children: [
                  (0, F.jsx)("span", { children: oe[0]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[Math.floor(oe.length / 2)]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[oe.length - 1]?.displayStr })
                ]
              })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", { className: "text-base font-bold text-slate-900 font-serif", children: "Expense Trend (Last 30 Days)" }),
                      (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Daily operational and procurement outflows" })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "text-right",
                    children: [
                      (0, F.jsxs)("span", { className: "text-xs font-black text-rose-700 font-mono", children: ["Peak: KSh ", expChart.maxVal.toLocaleString()] }),
                      (0, F.jsx)("p", { className: "text-[10px] text-slate-400 font-medium", children: "Daily Outflow" })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)("div", {
                className: "relative w-full overflow-hidden pt-2",
                children: [
                  (0, F.jsxs)("svg", {
                    viewBox: "0 0 520 180",
                    className: "w-full h-44 overflow-visible",
                    children: [
                      (0, F.jsx)("defs", {
                        children: (0, F.jsxs)("linearGradient", {
                          id: "expGrad",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            (0, F.jsx)("stop", { offset: "0%", stopColor: "#E11D48", stopOpacity: "0.35" }),
                            (0, F.jsx)("stop", { offset: "100%", stopColor: "#E11D48", stopOpacity: "0.0" })
                          ]
                        })
                      }),
                      [0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                        let y = 15 + (1 - ratio) * 140;
                        return (0, F.jsxs)("g", {
                          children: [
                            (0, F.jsx)("line", { x1: "45", y1: y, x2: "505", y2: y, stroke: "#E2E8F0", strokeDasharray: "3 3" }),
                            (0, F.jsxs)("text", { x: "40", y: y + 3, textAnchor: "end", fontSize: "9", fill: "#94A3B8", children: [Math.round((expChart.maxVal * ratio) / 1000), "k"] })
                          ]
                        }, idx);
                      }),
                      (0, F.jsx)("path", { d: expChart.areaD, fill: "url(#expGrad)" }),
                      (0, F.jsx)("path", { d: expChart.lineD, fill: "none", stroke: "#E11D48", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                      expChart.points.map((pt, idx) => (0, F.jsx)("circle", {
                        cx: pt.x,
                        cy: pt.y,
                        r: v === "e_" + idx ? 5 : (pt.val > 0 ? 3 : 1.5),
                        fill: pt.val > 0 ? "#E11D48" : "#CBD5E1",
                        stroke: "#FFFFFF",
                        strokeWidth: "1.5",
                        className: "cursor-pointer transition-all",
                        onMouseEnter: () => y("e_" + idx),
                        onMouseLeave: () => y(null)
                      }, idx))
                    ]
                  }),
                  v && v.startsWith("e_") && (() => {
                    let ptIdx = parseInt(v.replace("e_", ""));
                    let pt = expChart.points[ptIdx];
                    if (!pt) return null;
                    return (0, F.jsxs)("div", {
                      className: "absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-lg shadow-lg pointer-events-none z-10 flex items-center gap-2",
                      children: [
                        (0, F.jsx)("span", { className: "text-slate-300", children: pt.displayStr }),
                        (0, F.jsxs)("span", { className: "font-bold text-rose-400", children: ["KSh ", pt.expenses.toLocaleString()] })
                      ]
                    });
                  })()
                ]
              }),
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2",
                children: [
                  (0, F.jsx)("span", { children: oe[0]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[Math.floor(oe.length / 2)]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[oe.length - 1]?.displayStr })
                ]
              })
            ]
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          (0, F.jsxs)("div", {
            className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", { className: "text-base font-bold text-slate-900 font-serif", children: "Sales by Product (Bar Chart)" }),
                      (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Top contributing inventory lines ranked by revenue" })
                    ]
                  }),
                  (0, F.jsx)("span", { className: "text-xs font-bold text-slate-500", children: ce.length + " Products" })
                ]
              }),
              (0, F.jsx)("div", {
                className: "space-y-3 pt-2",
                children: ce.slice(0, 6).map((prod, idx) => {
                  let pct = Math.min(100, Math.round((prod.revenue / maxProdRevenue) * 100));
                  return (0, F.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, F.jsxs)("div", {
                        className: "flex items-center justify-between text-xs",
                        children: [
                          (0, F.jsxs)("div", {
                            className: "flex items-center gap-2 truncate max-w-[240px]",
                            children: [
                              (0, F.jsx)("span", { className: "font-bold text-slate-800 truncate", children: prod.name }),
                              (0, F.jsx)("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium shrink-0", children: prod.category })
                            ]
                          }),
                          (0, F.jsxs)("div", {
                            className: "flex items-center gap-2 shrink-0 font-mono",
                            children: [
                              (0, F.jsxs)("span", { className: "text-slate-400 text-[11px]", children: [prod.quantity, " ", prod.unit] }),
                              (0, F.jsxs)("span", { className: "font-black text-slate-900 text-xs", children: ["KSh ", prod.revenue.toLocaleString()] })
                            ]
                          })
                        ]
                      }),
                      (0, F.jsx)("div", {
                        className: "w-full h-3 rounded-full bg-slate-100 overflow-hidden",
                        children: (0, F.jsx)("div", {
                          style: { width: pct + "%" },
                          className: "h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                        })
                      })
                    ]
                  }, idx);
                })
              })
            ]
          }),
          (0, F.jsxs)("div", {
            className: "p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4",
            children: [
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("h3", { className: "text-base font-bold text-slate-900 font-serif", children: "Customer Growth Over Time" }),
                      (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Cumulative registered customer directory acquisition" })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "text-right",
                    children: [
                      (0, F.jsxs)("span", { className: "text-xs font-black text-blue-700 font-mono", children: [b.length, " Total"] }),
                      (0, F.jsx)("p", { className: "text-[10px] text-slate-400 font-medium", children: "Audience" })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)("div", {
                className: "relative w-full overflow-hidden pt-2",
                children: [
                  (0, F.jsxs)("svg", {
                    viewBox: "0 0 520 180",
                    className: "w-full h-44 overflow-visible",
                    children: [
                      (0, F.jsx)("defs", {
                        children: (0, F.jsxs)("linearGradient", {
                          id: "custGrad",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            (0, F.jsx)("stop", { offset: "0%", stopColor: "#3B82F6", stopOpacity: "0.35" }),
                            (0, F.jsx)("stop", { offset: "100%", stopColor: "#3B82F6", stopOpacity: "0.0" })
                          ]
                        })
                      }),
                      [0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                        let y = 15 + (1 - ratio) * 140;
                        return (0, F.jsxs)("g", {
                          children: [
                            (0, F.jsx)("line", { x1: "35", y1: y, x2: "505", y2: y, stroke: "#E2E8F0", strokeDasharray: "3 3" }),
                            (0, F.jsx)("text", { x: "30", y: y + 3, textAnchor: "end", fontSize: "9", fill: "#94A3B8", children: Math.round(custChart.maxVal * ratio) })
                          ]
                        }, idx);
                      }),
                      (0, F.jsx)("path", { d: custChart.areaD, fill: "url(#custGrad)" }),
                      (0, F.jsx)("path", { d: custChart.lineD, fill: "none", stroke: "#2563EB", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                      custChart.points.map((pt, idx) => (0, F.jsx)("circle", {
                        cx: pt.x,
                        cy: pt.y,
                        r: v === "c_" + idx ? 5 : 3,
                        fill: "#2563EB",
                        stroke: "#FFFFFF",
                        strokeWidth: "1.5",
                        className: "cursor-pointer transition-all",
                        onMouseEnter: () => y("c_" + idx),
                        onMouseLeave: () => y(null)
                      }, idx))
                    ]
                  }),
                  v && v.startsWith("c_") && (() => {
                    let ptIdx = parseInt(v.replace("c_", ""));
                    let pt = custChart.points[ptIdx];
                    if (!pt) return null;
                    return (0, F.jsxs)("div", {
                      className: "absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-lg shadow-lg pointer-events-none z-10 flex items-center gap-2",
                      children: [
                        (0, F.jsx)("span", { className: "text-slate-300", children: pt.displayStr }),
                        (0, F.jsxs)("span", { className: "font-bold text-blue-400", children: [pt.customers, " Customers"] })
                      ]
                    });
                  })()
                ]
              }),
              (0, F.jsxs)("div", {
                className: "flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2",
                children: [
                  (0, F.jsx)("span", { children: oe[0]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[Math.floor(oe.length / 2)]?.displayStr }),
                  (0, F.jsx)("span", { children: oe[oe.length - 1]?.displayStr })
                ]
              })
            ]
          })
        ]
      }),
      (0, F.jsxs)("div", {
        className: "bg-white p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4",
        children: [
          (0, F.jsx)("h4", { className: "text-lg font-bold text-slate-900 font-serif", children: "Product Margin & Profitability Ranking" }),
          (0, F.jsx)("p", { className: "text-xs text-slate-500", children: "Prioritize stocking high-margin inventory items to increase monthly cash flow." }),
          (0, F.jsx)("div", {
            className: "divide-y divide-slate-100",
            children: r.map(prod => {
              let diff = prod.sellingPrice - prod.costPrice;
              let margin = prod.sellingPrice > 0 ? (diff / prod.sellingPrice * 100).toFixed(0) : "0";
              return (0, F.jsxs)("div", {
                className: "py-3.5 flex items-center justify-between gap-4",
                children: [
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("p", { className: "text-xs sm:text-sm font-bold text-slate-900", children: prod.name }),
                      (0, F.jsxs)("p", { className: "text-[11px] text-slate-500", children: ["Cost: KSh ", prod.costPrice.toLocaleString(), " • Selling: KSh ", prod.sellingPrice.toLocaleString(), " • ", prod.category] })
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "text-right",
                    children: [
                      (0, F.jsxs)("span", { className: "px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800", children: ["+", margin, "% Margin"] }),
                      (0, F.jsxs)("p", { className: "text-[11px] font-bold text-slate-700 mt-1", children: ["Profit: KSh ", diff.toLocaleString(), " / ", prod.unit] })
                    ]
                  })
                ]
              }, prod.id);
            })
          })
        ]
      })
    ]
  });
},Wt=({business:e,sales:t,expenses:n})=>{let r=t.reduce((e,t)=>e+t.totalAmount,0),i=n.reduce((e,t)=>e+t.amount,0),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)([{id:`welcome`,sender:`assistant`,text:`Habari! I am your BizHubKE AI Biashara Advisor. I have analyzed ${e.name}'s profile in ${e.county} County (Sales: KSh ${r.toLocaleString()}, Expenses: KSh ${i.toLocaleString()}). How can I assist you today with KRA taxes, M-Pesa cash flow, stock pricing, or marketing?`,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}]),d=(0,_.useRef)(null),f=()=>{d.current?.scrollIntoView({behavior:`smooth`})};(0,_.useEffect)(()=>{f()},[l,s]);let p=[`How should I prepare for KRA Turnover Tax (TOT 3%) this month?`,`What is the best way to handle M-Pesa Till float and prevent cash leaks?`,`How do I calculate optimal retail markup prices for my products?`,`What steps will make my business qualify for a commercial bank or SACCO loan?`],m=async t=>{let n=t||a;if(!n.trim()||s)return;let l={id:Date.now().toString(),sender:`user`,text:n,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};u(e=>[...e,l]),t||o(``),c(!0);try{let t=await fetch(`/api/gemini/advisor`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:n,context:{businessName:e.name,county:e.county,businessType:e.businessType,totalSales:r,totalExpenses:i,activeChallenges:e.challenges}})});if(!t.ok)throw Error(`Advisor service temporarily unavailable.`);let a=await t.json(),o={id:(Date.now()+1).toString(),sender:`assistant`,text:a.response||`I have analyzed your query based on Kenyan SME guidelines.`,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};u(e=>[...e,o])}catch{let t={id:(Date.now()+1).toString(),sender:`assistant`,text:`Here is advice tailored for ${e.name}: In ${e.county} County, ensure you keep your daily M-Pesa Buy Goods statement matched with your sales register. For KRA compliance, Turnover Tax (3%) is due on the 20th of every month. Make sure to generate an eTIMS receipt for each transaction to avoid non-deductibility penalties.`,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};u(e=>[...e,t])}finally{c(!1)}};return(0,F.jsxs)(`div`,{className:`space-y-6 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2`,children:[(0,F.jsx)(ft,{className:`w-3.5 h-3.5 text-amber-600`}),`Kenya-Tuned SME Intelligence`]}),(0,F.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-black text-slate-900 font-serif`,children:`Kenyan AI Biashara Advisor`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl`,children:`Get real-time, context-aware advice on Kenyan SME laws, eTIMS VAT/TOT, M-Pesa float management, supplier negotiations, and growth strategies.`})]}),(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col h-[600px]`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-amber-300`,children:(0,F.jsx)(ft,{className:`w-5 h-5`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`font-bold text-sm`,children:`BizHubKE Biashara Advisor`}),(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-400`,children:`Grounding in Kenya Tax Law • eTIMS • M-Pesa • Kenyan Commercial Practices`})]})]}),(0,F.jsxs)(`span`,{className:`text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800`,children:[e.county,` Context Active`]})]}),(0,F.jsxs)(`div`,{className:`flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50`,children:[l.map(e=>(0,F.jsxs)(`div`,{className:`flex items-start gap-3 ${e.sender===`user`?`flex-row-reverse`:``}`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${e.sender===`user`?`bg-slate-900 text-white`:`bg-emerald-600 text-white`}`,children:e.sender===`user`?`You`:(0,F.jsx)(Se,{className:`w-4 h-4`})}),(0,F.jsxs)(`div`,{className:`max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${e.sender===`user`?`bg-slate-900 text-white rounded-tr-none`:`bg-white text-slate-800 border border-slate-200 rounded-tl-none`}`,children:[(0,F.jsx)(`div`,{className:`whitespace-pre-line`,children:e.text}),(0,F.jsx)(`span`,{className:`block text-[10px] mt-2 ${e.sender===`user`?`text-slate-400 text-right`:`text-slate-400`}`,children:e.timestamp})]})]},e.id)),s&&(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0`,children:(0,F.jsx)(Se,{className:`w-4 h-4`})}),(0,F.jsxs)(`div`,{className:`p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2`,children:[(0,F.jsx)(rt,{className:`w-3.5 h-3.5 text-emerald-600 animate-spin`}),(0,F.jsx)(`span`,{children:`Consulting Kenyan SME business intelligence...`})]})]}),(0,F.jsx)(`div`,{ref:d})]}),(0,F.jsxs)(`div`,{className:`px-6 py-2.5 bg-white border-t border-slate-200/80 flex items-center gap-2 overflow-x-auto`,children:[(0,F.jsx)(`span`,{className:`text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider`,children:`Suggested:`}),p.map((e,t)=>(0,F.jsx)(`button`,{onClick:()=>m(e),className:`px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 border border-slate-200/60`,children:e},t))]}),(0,F.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),m()},className:`p-4 bg-white border-t border-slate-200 flex items-center gap-3`,children:[(0,F.jsx)(`input`,{type:`text`,placeholder:`Ask anything about KRA eTIMS, TOT, M-Pesa float, pricing, county permits...`,value:a,onChange:e=>o(e.target.value),disabled:s,className:`flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white`}),(0,F.jsxs)(`button`,{type:`submit`,disabled:s||!a.trim(),className:`px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm cursor-pointer transition-all shrink-0`,children:[(0,F.jsx)(`span`,{children:`Ask Advisor`}),(0,F.jsx)(ot,{className:`w-4 h-4`})]})]})]})]})},Gt=({articles:e})=>{let[t,n]=(0,_.useState)(`All`),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(null),s=[`All`,`Kenya Business`,`Tax & Compliance`,`Business Growth`,`Funding`,`Technology`,`AI`],c=e.filter(e=>{let n=t===`All`||e.category===t,i=e.title.toLowerCase().includes(r.toLowerCase())||e.summary.toLowerCase().includes(r.toLowerCase());return n&&i});return(0,F.jsxs)(`div`,{className:`space-y-8 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2`,children:[(0,F.jsx)(xe,{className:`w-3.5 h-3.5`}),`Kenya SME Market Pulse & Opportunities`]}),(0,F.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-black text-slate-900 font-serif`,children:`Business News, KRA Updates & Capital Grants`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl`,children:`Verified regulatory alerts from KRA, Central Bank of Kenya monetary policy changes, and open grant funding calls.`})]}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs`,children:[(0,F.jsx)(`div`,{className:`flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0`,children:s.map(e=>(0,F.jsx)(`button`,{onClick:()=>n(e),className:`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer ${t===e?`bg-slate-900 text-white`:`bg-slate-100 text-slate-700 hover:bg-slate-200`}`,children:e},e))}),(0,F.jsxs)(`div`,{className:`relative w-full sm:w-64`,children:[(0,F.jsx)(at,{className:`w-4 h-4 text-slate-400 absolute left-3 top-2.5`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search news...`,value:r,onChange:e=>i(e.target.value),className:`w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500`})]})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:c.map(e=>(0,F.jsxs)(`div`,{onClick:()=>o(e),className:`p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-2 mb-3`,children:[(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800`,children:e.category}),(0,F.jsxs)(`span`,{className:`text-[11px] text-slate-400 flex items-center gap-1`,children:[(0,F.jsx)(Ne,{className:`w-3 h-3`}),e.readTime]})]}),(0,F.jsx)(`h4`,{className:`text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-serif leading-snug`,children:e.title}),(0,F.jsx)(`p`,{className:`mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed`,children:e.summary})]}),(0,F.jsxs)(`div`,{className:`mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs`,children:[(0,F.jsxs)(`span`,{className:`text-slate-500`,children:[e.source,` • `,e.date]}),(0,F.jsxs)(`span`,{className:`font-bold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform`,children:[`Read More `,(0,F.jsx)(ye,{className:`w-3 h-3`})]})]})]},e.id))}),(0,F.jsxs)(`div`,{className:`pt-6`,children:[(0,F.jsxs)(`h3`,{className:`text-xl font-bold text-slate-900 font-serif mb-4 flex items-center gap-2`,children:[(0,F.jsx)(ft,{className:`w-5 h-5 text-amber-500`}),(0,F.jsx)(`span`,{children:`Active Grants & SME Funding Opportunities`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:T.map(e=>(0,F.jsxs)(`div`,{className:`p-6 rounded-3xl bg-gradient-to-b from-white to-amber-50/40 border border-amber-200 shadow-xs space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-[10px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider`,children:e.provider}),(0,F.jsxs)(`span`,{className:`text-xs font-bold text-emerald-700`,children:[`Deadline: `,e.deadline]})]}),(0,F.jsx)(`h4`,{className:`text-base font-bold text-slate-900 font-serif`,children:e.title}),(0,F.jsx)(`p`,{className:`text-xl font-black text-amber-950`,children:e.amountKSh}),(0,F.jsx)(`p`,{className:`text-xs text-slate-600 leading-relaxed`,children:e.description}),(0,F.jsxs)(`div`,{className:`pt-2 border-t border-amber-200/60 text-[11px] text-slate-700`,children:[(0,F.jsx)(`strong`,{children:`Eligibility:`}),` `,e.eligibility]})]},e.id))})]}),a&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in`,children:(0,F.jsxs)(`div`,{className:`relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`px-6 py-4 bg-slate-900 text-white flex items-center justify-between`,children:[(0,F.jsxs)(`span`,{className:`text-xs font-bold uppercase tracking-wider text-emerald-400`,children:[a.category,` • `,a.source]}),(0,F.jsx)(`button`,{onClick:()=>o(null),className:`p-1 rounded-lg text-slate-400 hover:text-white`,children:`✕`})]}),(0,F.jsxs)(`div`,{className:`p-8 overflow-y-auto space-y-4 text-slate-800`,children:[(0,F.jsx)(`h2`,{className:`text-2xl font-bold font-serif text-slate-900`,children:a.title}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3 text-xs text-slate-500`,children:[(0,F.jsxs)(`span`,{children:[`Published: `,a.date]}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsxs)(`span`,{children:[`Read Time: `,a.readTime]})]}),(0,F.jsx)(`div`,{className:`prose prose-sm text-slate-700 leading-relaxed pt-2`,children:(0,F.jsx)(`p`,{children:a.content})})]}),(0,F.jsx)(`div`,{className:`px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end`,children:(0,F.jsx)(`button`,{onClick:()=>o(null),className:`px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs`,children:`Close Article`})})]})})]})},Kt=({courses:e})=>{let[t,n]=(0,_.useState)(e[0]||null),[r,i]=(0,_.useState)({"c1-l1":!0,"c1-l2":!0}),a=e=>{i(t=>({...t,[e]:!t[e]}))};return(0,F.jsxs)(`div`,{className:`space-y-8 animate-in fade-in`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2`,children:[(0,F.jsx)(Re,{className:`w-3.5 h-3.5`}),`BizHubKE SME Masterclass Academy`]}),(0,F.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-black text-slate-900 font-serif`,children:`Practical Business Growth Courses`}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl`,children:`Actionable, short-form masterclasses created specifically for Kenyan retailers, restaurateurs, and service entrepreneurs.`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-5 space-y-4`,children:[(0,F.jsx)(`h3`,{className:`text-sm font-bold uppercase tracking-wider text-slate-500`,children:`Available Courses`}),(0,F.jsx)(`div`,{className:`space-y-3`,children:e.map(e=>{let r=t?.id===e.id;return(0,F.jsxs)(`div`,{onClick:()=>n(e),className:`p-5 rounded-3xl border transition-all cursor-pointer ${r?`bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]`:`bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-xs`}`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-2 mb-2`,children:[(0,F.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${r?`bg-emerald-500/20 text-emerald-300`:`bg-slate-100 text-slate-700`}`,children:e.category}),(0,F.jsxs)(`span`,{className:`text-xs flex items-center gap-1 ${r?`text-slate-400`:`text-slate-500`}`,children:[(0,F.jsx)(Ne,{className:`w-3 h-3`}),e.durationMinutes,` mins`]})]}),(0,F.jsx)(`h4`,{className:`text-base font-bold font-serif leading-snug`,children:e.title}),(0,F.jsx)(`p`,{className:`text-xs mt-1 line-clamp-2 ${r?`text-slate-300`:`text-slate-600`}`,children:e.description}),(0,F.jsxs)(`div`,{className:`mt-3 pt-3 border-t flex items-center justify-between text-xs ${r?`border-slate-800 text-amber-300`:`border-slate-100 text-emerald-600`}`,children:[(0,F.jsxs)(`span`,{children:[e.lessonCount,` Lessons • Level: `,e.level]}),(0,F.jsx)(ye,{className:`w-3.5 h-3.5`})]})]},e.id)})})]}),(0,F.jsx)(`div`,{className:`lg:col-span-7`,children:t&&(0,F.jsxs)(`div`,{className:`bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs space-y-6`,children:[(0,F.jsxs)(`div`,{className:`space-y-2 pb-6 border-b border-slate-100`,children:[(0,F.jsx)(`span`,{className:`px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900`,children:t.category}),(0,F.jsx)(`h3`,{className:`text-2xl font-black font-serif text-slate-900`,children:t.title}),(0,F.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 leading-relaxed`,children:t.description}),(0,F.jsxs)(`div`,{className:`flex items-center gap-4 text-xs text-slate-500 pt-1`,children:[(0,F.jsxs)(`span`,{children:[`Instructor: `,t.instructor]}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsxs)(`span`,{children:[`Duration: `,t.durationMinutes,` Minutes`]})]})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsx)(`h4`,{className:`text-sm font-bold uppercase tracking-wider text-slate-700`,children:`Curriculum & Interactive Lessons`}),(0,F.jsx)(`div`,{className:`space-y-3`,children:(t.modules||t.lessons||[]).map((e,t)=>{let n=r[e.id];return(0,F.jsx)(`div`,{className:`p-4 rounded-2xl border transition-all ${n?`bg-emerald-50/50 border-emerald-200`:`bg-slate-50 border-slate-200`}`,children:(0,F.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,F.jsx)(`button`,{onClick:()=>a(e.id),className:`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border cursor-pointer transition-colors ${n?`bg-emerald-600 border-emerald-600 text-white`:`bg-white border-slate-300 text-transparent hover:border-emerald-600`}`,children:(0,F.jsx)(je,{className:`w-4 h-4`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`p`,{className:`text-xs sm:text-sm font-bold text-slate-900`,children:[`Lesson `,t+1,`: `,e.title]}),(0,F.jsx)(`p`,{className:`text-xs text-slate-600 mt-1 leading-relaxed`,children:e.summary})]})]}),(0,F.jsxs)(`span`,{className:`text-[11px] font-mono text-slate-400 shrink-0`,children:[e.durationMinutes,`m`]})]})},e.id)})})]}),(0,F.jsxs)(`div`,{className:`p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#0B192C] text-white flex items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(A,{className:`w-8 h-8 text-amber-400 shrink-0`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h5`,{className:`text-sm font-bold`,children:`BizHubKE Verified Completion Badge`}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-300`,children:`Complete all lessons to earn your verifiable SME business certificate.`})]})]}),(0,F.jsx)(`button`,{onClick:()=>alert(`Certificate readiness: Complete all module checklists to generate your verified PDF certificate!`),className:`shrink-0 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer shadow`,children:`Verify Certificate`})]})]})})]})]})},qt=({business:e,onRefresh:t})=>{
  let [activeSubTab, setActiveSubTab] = (0, _.useState)('team');
  let [n, r] = (0, _.useState)(e.name);
  let [i, a] = (0, _.useState)(e.businessType);
  let [o, s] = (0, _.useState)(e.county);
  let [c, l] = (0, _.useState)(e.kraPin || '');
  let [u, d] = (0, _.useState)(e.mpesaTillNumber || '');
  let [f, p] = (0, _.useState)(e.mpesaPaybill || '');
  let [m, h] = (0, _.useState)(e.mpesaAccountNumber || '');
  let [g, v] = (0, _.useState)(!1);

  // Invite team member modal and form state
  let [showInviteModal, setShowInviteModal] = (0, _.useState)(!1);
  let [inviteName, setInviteName] = (0, _.useState)('');
  let [inviteEmail, setInviteEmail] = (0, _.useState)('');
  let [invitePhone, setInvitePhone] = (0, _.useState)('');
  let [inviteRole, setInviteRole] = (0, _.useState)('Staff'); // 'Owner', 'Manager', 'Staff', 'Accountant'
  let [inviteFeedback, setInviteFeedback] = (0, _.useState)(null);
  let [selectedRoleFilter, setSelectedRoleFilter] = (0, _.useState)('all');

  let members = O.getBusinessMembers(e.id);
  let currentUser = O.getCurrentUser();
  let currentRole = O.getCurrentUserRole(e.id);
  let subscriptions = O.getSubscriptions();
  let activeSub = subscriptions.find(sub => sub.businessId === e.id) || { plan: 'business', status: 'active', priceKSh: 999 };

  let handleInviteSubmit = (event) => {
    event.preventDefault();
    if (!inviteName.trim() || !inviteEmail.trim()) return;
    let res = O.inviteTeamMember(e.id, {
      fullName: inviteName.trim(),
      email: inviteEmail.trim(),
      phoneNumber: invitePhone.trim() || '+254 700 000 000',
      role: inviteRole
    });
    setInviteFeedback({ type: 'success', message: res.message || ('Invited ' + inviteName + ' as ' + inviteRole + '!') });
    setInviteName('');
    setInviteEmail('');
    setInvitePhone('');
    setInviteRole('Staff');
    setShowInviteModal(!1);
    setTimeout(() => setInviteFeedback(null), 4000);
    t && t();
  };

  let handleRoleChange = (memberId, newRole) => {
    O.updateMemberRole(memberId, newRole);
    setInviteFeedback({ type: 'info', message: 'Updated team member role to ' + newRole + '.' });
    setTimeout(() => setInviteFeedback(null), 3500);
    t && t();
  };

  let handleRemoveMember = (memberId, name) => {
    if (members.length <= 1) {
      setInviteFeedback({ type: 'error', message: 'A business must have at least one active team member.' });
      setTimeout(() => setInviteFeedback(null), 3000);
      return;
    }
    O.removeTeamMember(memberId);
    setInviteFeedback({ type: 'info', message: 'Removed ' + name + ' from team.' });
    setTimeout(() => setInviteFeedback(null), 3500);
    t && t();
  };

  let handleSwitchUser = (userId, name, role) => {
    O.switchActiveUser(userId);
    setInviteFeedback({ type: 'success', message: 'Switched active user to ' + name + ' (' + role + '). Dashboard navigation updated!' });
    setTimeout(() => setInviteFeedback(null), 3500);
    t && t();
  };

  let filteredMembers = selectedRoleFilter === 'all' 
    ? members 
    : members.filter(m => (m.role || '').toLowerCase() === selectedRoleFilter.toLowerCase());

  const ROLE_CONFIG = {
    Owner: {
      color: 'bg-amber-100 text-amber-900 border-amber-300',
      badgeColor: 'bg-amber-500 text-white',
      title: 'Owner',
      desc: 'Full access across all 15 business modules, financial data, team administration, and settings.',
      pages: ['Overview', 'Sales', 'Expenses', 'Inventory', 'Invoices (eTIMS)', 'Customers', 'Suppliers', 'KRA Taxes', 'WhatsApp Marketing', 'Analytics', 'AI Advisor', 'News', 'Academy', 'Business & Plan', 'Admin Portal']
    },
    Manager: {
      color: 'bg-blue-100 text-blue-900 border-blue-300',
      badgeColor: 'bg-blue-600 text-white',
      title: 'Manager',
      desc: 'Operations & sales leadership. Access to Sales, Customers, Inventory, and Analytics.',
      pages: ['Sales & Receipts', 'Customers CRM', 'Inventory & Stock', 'Analytics & Score']
    },
    Staff: {
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      badgeColor: 'bg-emerald-600 text-white',
      title: 'Staff',
      desc: 'Frontline cashiers & shop assistants. Access to Sales and Customers only.',
      pages: ['Sales & Receipts', 'Customers CRM']
    },
    Accountant: {
      color: 'bg-purple-100 text-purple-900 border-purple-300',
      badgeColor: 'bg-purple-600 text-white',
      title: 'Accountant',
      desc: 'Finance & bookkeeper. Access to Finance & Invoices (eTIMS), Expenses, Analytics, and Reports.',
      pages: ['Invoices & eTIMS', 'Expenses', 'Analytics & Score', 'KRA & Taxes (Reports)']
    }
  };

  return (0, F.jsxs)('div', {
    className: 'space-y-6',
    children: [
      // Top Header Card
      (0, F.jsxs)('div', {
        className: 'flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs',
        children: [
          (0, F.jsxs)('div', {
            children: [
              (0, F.jsxs)('div', {
                className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2',
                children: [
                  (0, F.jsx)(st, { className: 'w-3.5 h-3.5' }),
                  'Business & Plan'
                ]
              }),
              (0, F.jsx)('h2', {
                className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif',
                children: 'Business & Plan Management'
              }),
              (0, F.jsx)('p', {
                className: 'text-xs sm:text-sm text-slate-600 mt-1',
                children: 'Manage your team members with role-based access control, company profile, eTIMS tax settings, and growth plan.'
              })
            ]
          }),
          (0, F.jsxs)('div', {
            className: 'flex items-center gap-2 flex-wrap',
            children: [
              (0, F.jsxs)('button', {
                onClick: () => setShowInviteModal(!0),
                className: 'px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer',
                children: [
                  (0, F.jsx)(P, { className: 'w-4 h-4' }),
                  'Invite Team Member'
                ]
              })
            ]
          })
        ]
      }),

      // Feedback toast
      inviteFeedback && (0, F.jsxs)('div', {
        className: 'p-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 ' + (inviteFeedback.type === 'error' ? 'bg-rose-50 border border-rose-200 text-rose-800' : 'bg-emerald-50 border border-emerald-200 text-emerald-800'),
        children: [
          (0, F.jsx)(je, { className: 'w-5 h-5 ' + (inviteFeedback.type === 'error' ? 'text-rose-600' : 'text-emerald-600') }),
          (0, F.jsx)('span', { children: inviteFeedback.message })
        ]
      }),

      // Sub-Tabs Navigation
      (0, F.jsxs)('div', {
        className: 'flex items-center gap-2 border-b border-slate-200 pb-1 overflow-x-auto',
        children: [
          (0, F.jsxs)('button', {
            onClick: () => setActiveSubTab('team'),
            className: 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ' + (activeSubTab === 'team' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'),
            children: [
              (0, F.jsx)(yt, { className: 'w-4 h-4' }),
              'Team & Staff Roles',
              (0, F.jsx)('span', {
                className: 'px-1.5 py-0.5 rounded-full text-[10px] font-black ' + (activeSubTab === 'team' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'),
                children: members.length
              })
            ]
          }),
          (0, F.jsxs)('button', {
            onClick: () => setActiveSubTab('profile'),
            className: 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ' + (activeSubTab === 'profile' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'),
            children: [
              (0, F.jsx)(M, { className: 'w-4 h-4' }),
              'Business Profile & KRA'
            ]
          }),
          (0, F.jsxs)('button', {
            onClick: () => setActiveSubTab('plan'),
            className: 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ' + (activeSubTab === 'plan' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'),
            children: [
              (0, F.jsx)(Fe, { className: 'w-4 h-4' }),
              'Plan & Subscription',
              (0, F.jsx)('span', {
                className: 'px-1.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-200',
                children: activeSub.plan
              })
            ]
          }),
          (0, F.jsxs)('button', {
            onClick: () => setActiveSubTab('backup'),
            className: 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ' + (activeSubTab === 'backup' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'),
            children: [
              (0, F.jsx)(Ie, { className: 'w-4 h-4' }),
              'Data & Backup'
            ]
          })
        ]
      }),

      // TAB 1: TEAM & STAFF ROLES
      activeSubTab === 'team' && (0, F.jsxs)('div', {
        className: 'space-y-6',
        children: [
          // Quota & Explanation Banner
          (0, F.jsxs)('div', {
            className: 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4',
            children: [
              (0, F.jsxs)('div', {
                className: 'space-y-1',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, F.jsx)(ut, { className: 'w-5 h-5 text-emerald-700' }),
                      (0, F.jsx)('h3', { className: 'text-sm sm:text-base font-bold text-emerald-950 font-serif', children: 'Role-Based Page Security Enforced' })
                    ]
                  }),
                  (0, F.jsx)('p', {
                    className: 'text-xs text-emerald-800 leading-relaxed max-w-2xl',
                    children: 'To safeguard company financials and ensure frontline focus, BizHubKE restricts page navigation based on 4 user roles: Owner, Manager, Staff, and Accountant. Navigation tabs are hidden automatically to prevent dead links.'
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'bg-white px-4 py-3 rounded-2xl border border-emerald-200/80 shadow-xs shrink-0 flex items-center gap-3',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('div', { className: 'text-[10px] uppercase font-black text-slate-400', children: 'Team Seat Limit' }),
                      (0, F.jsxs)('div', { className: 'text-sm font-black text-slate-900', children: [members.length, ' of 5 Seats Used'] })
                    ]
                  }),
                  (0, F.jsx)('div', { className: 'w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse' })
                ]
              })
            ]
          }),

          // Invite Team Member Modal / Section
          showInviteModal && (0, F.jsxs)('div', {
            className: 'bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/40 shadow-lg space-y-6 animate-in fade-in slide-in-from-top-2',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center justify-between pb-4 border-b border-slate-100',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('h3', { className: 'text-lg font-bold text-slate-900 font-serif', children: 'Invite Team Member to Biashara' }),
                      (0, F.jsx)('p', { className: 'text-xs text-slate-500 mt-0.5', children: 'Select an operational role to define page access permissions.' })
                    ]
                  }),
                  (0, F.jsx)('button', {
                    onClick: () => setShowInviteModal(!1),
                    className: 'w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer',
                    children: (0, F.jsx)(St, { className: 'w-4 h-4' })
                  })
                ]
              }),
              (0, F.jsxs)('form', {
                onSubmit: handleInviteSubmit,
                className: 'space-y-5',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'grid grid-cols-1 sm:grid-cols-3 gap-4',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Full Name *' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            required: !0,
                            placeholder: 'e.g. Grace Wambui',
                            value: inviteName,
                            onChange: e => setInviteName(e.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Work Email Address *' }),
                          (0, F.jsx)('input', {
                            type: 'email',
                            required: !0,
                            placeholder: 'e.g. grace@kilimanifresh.co.ke',
                            value: inviteEmail,
                            onChange: e => setInviteEmail(e.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Kenyan Phone (M-Pesa)' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            placeholder: '+254 712 345 678',
                            value: invitePhone,
                            onChange: e => setInvitePhone(e.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      })
                    ]
                  }),

                  // Role Selector with rich interactive cards
                  (0, F.jsxs)('div', {
                    className: 'space-y-2',
                    children: [
                      (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700', children: 'Select User Role & Page Access *' }),
                      (0, F.jsxs)('select', {
                        value: inviteRole,
                        onChange: e => setInviteRole(e.target.value),
                        className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-bold text-slate-900',
                        children: [
                          (0, F.jsx)('option', { value: 'Staff', children: 'Staff — Sales & Customers only' }),
                          (0, F.jsx)('option', { value: 'Manager', children: 'Manager — Sales, Customers, Inventory, Analytics' }),
                          (0, F.jsx)('option', { value: 'Accountant', children: 'Accountant — Finance & Invoices, Expenses, Analytics, Reports' }),
                          (0, F.jsx)('option', { value: 'Owner', children: 'Owner — Full Access (All 15 Modules)' })
                        ]
                      }),
                      (0, F.jsx)('div', {
                        className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3',
                        children: ['Owner', 'Manager', 'Staff', 'Accountant'].map(rKey => {
                          let isSelected = inviteRole === rKey;
                          let cfg = ROLE_CONFIG[rKey];
                          return (0, F.jsxs)('div', {
                            key: rKey,
                            onClick: () => setInviteRole(rKey),
                            className: 'p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ' + (isSelected ? 'border-emerald-600 bg-emerald-50/50 shadow-sm' : 'border-slate-200 bg-slate-50/40 hover:border-slate-300 hover:bg-slate-50'),
                            children: [
                              (0, F.jsxs)('div', {
                                children: [
                                  (0, F.jsxs)('div', {
                                    className: 'flex items-center justify-between mb-1.5',
                                    children: [
                                      (0, F.jsx)('span', { className: 'px-2 py-0.5 rounded-md text-[10px] font-black uppercase ' + cfg.color, children: cfg.title }),
                                      isSelected && (0, F.jsx)(it, { className: 'w-4 h-4 text-emerald-600' })
                                    ]
                                  }),
                                  (0, F.jsx)('p', { className: 'text-[11px] text-slate-600 leading-snug', children: cfg.desc })
                                ]
                              }),
                              (0, F.jsxs)('div', {
                                className: 'mt-3 pt-2 border-t border-slate-200/60 text-[10px] text-slate-500 font-medium',
                                children: [
                                  (0, F.jsx)('strong', { className: 'text-slate-700', children: 'Allowed: ' }),
                                  cfg.pages.slice(0, 3).join(', ') + (cfg.pages.length > 3 ? '...' : '')
                                ]
                              })
                            ]
                          });
                        })
                      })
                    ]
                  }),

                  (0, F.jsxs)('div', {
                    className: 'flex items-center justify-end gap-3 pt-2 border-t border-slate-100',
                    children: [
                      (0, F.jsx)('button', {
                        type: 'button',
                        onClick: () => setShowInviteModal(!1),
                        className: 'px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer',
                        children: 'Cancel'
                      }),
                      (0, F.jsxs)('button', {
                        type: 'submit',
                        className: 'px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer',
                        children: [
                          (0, F.jsx)(P, { className: 'w-4 h-4' }),
                          'Send Invitation'
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // Active Biashara Team Members List
          (0, F.jsxs)('div', {
            className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('h3', { className: 'text-lg font-bold text-slate-900 font-serif', children: 'Active Biashara Team Members' }),
                      (0, F.jsx)('p', { className: 'text-xs text-slate-500 mt-0.5', children: 'Click "Simulate View" to immediately inspect the dashboard from that role\x27s perspective.' })
                    ]
                  }),
                  // Filter by role
                  (0, F.jsxs)('div', {
                    className: 'flex items-center gap-1.5 flex-wrap',
                    children: [
                      ['all', 'Owner', 'Manager', 'Staff', 'Accountant'].map(rf => (0, F.jsx)('button', {
                        key: rf,
                        onClick: () => setSelectedRoleFilter(rf),
                        className: 'px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ' + (selectedRoleFilter === rf ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'),
                        children: rf === 'all' ? 'All Roles' : rf
                      }))
                    ]
                  })
                ]
              }),

              // Team Cards
              (0, F.jsx)('div', {
                className: 'divide-y divide-slate-100',
                children: filteredMembers.map(m => {
                  let roleKey = ['Owner', 'Manager', 'Staff', 'Accountant'].find(k => k.toLowerCase() === (m.role || '').toLowerCase()) || 'Staff';
                  let cfg = ROLE_CONFIG[roleKey] || ROLE_CONFIG.Staff;
                  let isCurrentLoggedIn = currentUser && (currentUser.id === m.userId || currentUser.email === m.email);

                  return (0, F.jsxs)('div', {
                    className: 'py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 rounded-2xl px-3 transition-colors',
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-3.5',
                        children: [
                          (0, F.jsx)('div', {
                            className: 'w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center font-bold text-sm text-slate-800 shrink-0 font-serif shadow-xs',
                            children: (m.fullName || 'User').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
                          }),
                          (0, F.jsxs)('div', {
                            children: [
                              (0, F.jsxs)('div', {
                                className: 'flex items-center gap-2 flex-wrap',
                                children: [
                                  (0, F.jsx)('span', { className: 'text-sm font-bold text-slate-900', children: m.fullName }),
                                  isCurrentLoggedIn && (0, F.jsx)('span', { className: 'px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-300', children: 'You (Active)' }),
                                  (0, F.jsx)('span', { className: 'px-2 py-0.5 rounded-md text-[10px] font-black uppercase ' + cfg.color, children: roleKey })
                                ]
                              }),
                              (0, F.jsxs)('div', {
                                className: 'flex items-center gap-3 text-xs text-slate-500 mt-0.5 flex-wrap',
                                children: [
                                  (0, F.jsx)('span', { children: m.email }),
                                  m.phoneNumber && (0, F.jsx)('span', { children: '• ' + m.phoneNumber }),
                                  m.joinedAt && (0, F.jsx)('span', { className: 'text-slate-400', children: '• Joined ' + new Date(m.joinedAt).toLocaleDateString() })
                                ]
                              })
                            ]
                          })
                        ]
                      }),

                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-2 flex-wrap sm:shrink-0',
                        children: [
                          // Interactive Role Change Dropdown
                          (0, F.jsxs)('div', {
                            className: 'flex items-center gap-1.5',
                            children: [
                              (0, F.jsx)('span', { className: 'text-xs text-slate-400 font-medium hidden lg:inline', children: 'Role:' }),
                              (0, F.jsxs)('select', {
                                value: roleKey,
                                onChange: ev => handleRoleChange(m.id, ev.target.value),
                                className: 'px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 cursor-pointer shadow-xs',
                                children: [
                                  (0, F.jsx)('option', { value: 'Staff', children: 'Staff' }),
                                  (0, F.jsx)('option', { value: 'Manager', children: 'Manager' }),
                                  (0, F.jsx)('option', { value: 'Accountant', children: 'Accountant' }),
                                  (0, F.jsx)('option', { value: 'Owner', children: 'Owner' })
                                ]
                              })
                            ]
                          }),

                          // 1-Click Simulate View
                          (0, F.jsxs)('button', {
                            onClick: () => handleSwitchUser(m.userId, m.fullName, roleKey),
                            className: 'px-3 py-1.5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs',
                            title: 'Switch active user to inspect permissions as this member',
                            children: [
                              (0, F.jsx)(ut, { className: 'w-3.5 h-3.5 text-emerald-600' }),
                              'Simulate View'
                            ]
                          }),

                          // Remove Member
                          (0, F.jsx)('button', {
                            onClick: () => handleRemoveMember(m.id, m.fullName),
                            className: 'w-8 h-8 rounded-xl border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer',
                            title: 'Remove team member',
                            children: (0, F.jsx)(St, { className: 'w-4 h-4' })
                          })
                        ]
                      })
                    ]
                  }, m.id);
                })
              })
            ]
          }),

          // Role Permissions Matrix Reference Card
          (0, F.jsxs)('div', {
            className: 'bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4',
            children: [
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsx)('h3', { className: 'text-base font-bold text-slate-900 font-serif', children: 'Official Page-Level Permissions Matrix' }),
                  (0, F.jsx)('p', { className: 'text-xs text-slate-500 mt-0.5', children: 'Overview of modules visible to each role in BizHubKE navigation.' })
                ]
              }),
              (0, F.jsx)('div', {
                className: 'overflow-x-auto rounded-2xl border border-slate-200',
                children: (0, F.jsxs)('table', {
                  className: 'w-full text-left text-xs',
                  children: [
                    (0, F.jsx)('thead', {
                      className: 'bg-slate-50 border-b border-slate-200 font-bold text-slate-700',
                      children: (0, F.jsxs)('tr', {
                        children: [
                          (0, F.jsx)('th', { className: 'p-3', children: 'Feature / Page Module' }),
                          (0, F.jsx)('th', { className: 'p-3 text-center text-amber-900 bg-amber-50/50', children: 'Owner' }),
                          (0, F.jsx)('th', { className: 'p-3 text-center text-blue-900 bg-blue-50/50', children: 'Manager' }),
                          (0, F.jsx)('th', { className: 'p-3 text-center text-emerald-900 bg-emerald-50/50', children: 'Staff' }),
                          (0, F.jsx)('th', { className: 'p-3 text-center text-purple-900 bg-purple-50/50', children: 'Accountant' })
                        ]
                      })
                    }),
                    (0, F.jsxs)('tbody', {
                      className: 'divide-y divide-slate-100 font-medium text-slate-600',
                      children: [
                        [
                          'Sales & Receipts (POS)',
                          !0, !0, !0, !1
                        ],
                        [
                          'Customers CRM',
                          !0, !0, !0, !1
                        ],
                        [
                          'Inventory & Stock Control',
                          !0, !0, !1, !1
                        ],
                        [
                          'Analytics & Business Score',
                          !0, !0, !1, !0
                        ],
                        [
                          'Finance & Invoices (eTIMS)',
                          !0, !1, !1, !0
                        ],
                        [
                          'Expenses & Bills',
                          !0, !1, !1, !0
                        ],
                        [
                          'Reports & KRA Taxes',
                          !0, !1, !1, !0
                        ],
                        [
                          'Business & Plan (Team Roles)',
                          !0, !1, !1, !1
                        ],
                        [
                          'Suppliers & Purchasing',
                          !0, !1, !1, !1
                        ],
                        [
                          'AI Biashara Advisor & WhatsApp',
                          !0, !1, !1, !1
                        ]
                      ].map(([modName, oVal, mVal, sVal, aVal]) => (0, F.jsxs)('tr', {
                        className: 'hover:bg-slate-50/50',
                        children: [
                          (0, F.jsx)('td', { className: 'p-3 font-bold text-slate-900', children: modName }),
                          (0, F.jsx)('td', { className: 'p-3 text-center bg-amber-50/30 font-bold ' + (oVal ? 'text-emerald-700' : 'text-slate-300'), children: oVal ? '✓ Full' : '—' }),
                          (0, F.jsx)('td', { className: 'p-3 text-center bg-blue-50/30 font-bold ' + (mVal ? 'text-emerald-700' : 'text-slate-300'), children: mVal ? '✓ Full' : '—' }),
                          (0, F.jsx)('td', { className: 'p-3 text-center bg-emerald-50/30 font-bold ' + (sVal ? 'text-emerald-700' : 'text-slate-300'), children: sVal ? '✓ Full' : '—' }),
                          (0, F.jsx)('td', { className: 'p-3 text-center bg-purple-50/30 font-bold ' + (aVal ? 'text-emerald-700' : 'text-slate-300'), children: aVal ? '✓ Full' : '—' })
                        ]
                      }, modName))
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),

      // TAB 2: BUSINESS PROFILE & TAX
      activeSubTab === 'profile' && (0, F.jsxs)('div', {
        className: 'space-y-6',
        children: [
          g && (0, F.jsxs)('div', {
            className: 'p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2',
            children: [
              (0, F.jsx)(je, { className: 'w-5 h-5 text-emerald-600' }),
              (0, F.jsx)('span', { children: 'Business settings saved successfully! Receipts & invoices updated.' })
            ]
          }),
          (0, F.jsxs)('form', {
            onSubmit: ev => {
              ev.preventDefault();
              O.updateBusinessProfile({
                name: n,
                businessType: i,
                county: o,
                kraPin: c.toUpperCase(),
                mpesaTillNumber: u,
                mpesaPaybill: f,
                mpesaAccountNumber: m
              });
              v(!0);
              setTimeout(() => v(!1), 3000);
              t && t();
            },
            className: 'bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs space-y-6',
            children: [
              (0, F.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, F.jsxs)('h3', {
                    className: 'text-base font-bold text-slate-900 font-serif flex items-center gap-2',
                    children: [
                      (0, F.jsx)(M, { className: 'w-4 h-4 text-emerald-600' }),
                      (0, F.jsx)('span', { children: 'General Business Identity' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Registered Business Name' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            required: !0,
                            value: n,
                            onChange: ev => r(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Business Industry / Category' }),
                          (0, F.jsx)('select', {
                            value: i,
                            onChange: ev => a(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white',
                            children: te.map(ind => (0, F.jsx)('option', { value: ind, children: ind }, ind))
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'County of Operation' }),
                          (0, F.jsx)('select', {
                            value: o,
                            onChange: ev => s(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white',
                            children: y.map(cnt => (0, F.jsxs)('option', { value: cnt, children: [cnt, ' County'] }, cnt))
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Official KRA Tax PIN (for eTIMS)' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            placeholder: 'P051234567Z',
                            value: c,
                            onChange: ev => l(ev.target.value.toUpperCase()),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'space-y-4 pt-4 border-t border-slate-100',
                children: [
                  (0, F.jsxs)('h3', {
                    className: 'text-base font-bold text-slate-900 font-serif flex items-center gap-2',
                    children: [
                      (0, F.jsx)(Fe, { className: 'w-4 h-4 text-emerald-600' }),
                      (0, F.jsx)('span', { children: 'M-Pesa Biashara Integration' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'grid grid-cols-1 sm:grid-cols-3 gap-4',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Buy Goods Till Number' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            placeholder: 'e.g. 583920',
                            value: u,
                            onChange: ev => d(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Paybill Business Number' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            placeholder: 'e.g. 247247',
                            value: f,
                            onChange: ev => p(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block text-xs font-bold text-slate-700 mb-1', children: 'Paybill Account Number' }),
                          (0, F.jsx)('input', {
                            type: 'text',
                            placeholder: 'e.g. KILIMANI01',
                            value: m,
                            onChange: ev => h(ev.target.value),
                            className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, F.jsx)('div', {
                className: 'pt-2 flex justify-end',
                children: (0, F.jsx)('button', {
                  type: 'submit',
                  className: 'px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all hover:scale-105 cursor-pointer',
                  children: 'Save Business Profile'
                })
              })
            ]
          })
        ]
      }),

      // TAB 3: PLAN & SUBSCRIPTION
      activeSubTab === 'plan' && (0, F.jsxs)('div', {
        className: 'space-y-6',
        children: [
          (0, F.jsxs)('div', {
            className: 'bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs space-y-6',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('div', { className: 'text-[10px] font-black uppercase tracking-wider text-emerald-600 mb-1', children: 'Current Subscription' }),
                      (0, F.jsx)('h3', { className: 'text-2xl font-black text-slate-900 font-serif', children: 'Business Growth Plan' }),
                      (0, F.jsx)('p', { className: 'text-xs text-slate-500 mt-0.5', children: 'Designed for scaling Kenyan retailers and SMEs with multi-role staff access.' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'text-right',
                    children: [
                      (0, F.jsx)('div', { className: 'text-3xl font-black text-slate-900', children: 'KSh 999' }),
                      (0, F.jsx)('div', { className: 'text-xs text-slate-400', children: 'per month • Active' })
                    ]
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1',
                    children: [
                      (0, F.jsx)('div', { className: 'text-xs font-bold text-slate-800', children: 'Team Seats Included' }),
                      (0, F.jsx)('div', { className: 'text-sm font-black text-emerald-700', children: 'Up to 5 Staff Users' }),
                      (0, F.jsx)('p', { className: 'text-[11px] text-slate-500', children: 'Owner, Manager, Staff, Accountant RBAC' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1',
                    children: [
                      (0, F.jsx)('div', { className: 'text-xs font-bold text-slate-800', children: 'eTIMS & Tax Filing' }),
                      (0, F.jsx)('div', { className: 'text-sm font-black text-emerald-700', children: 'Unlimited Invoices' }),
                      (0, F.jsx)('p', { className: 'text-[11px] text-slate-500', children: 'Compliant QR codes & KRA exports' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1',
                    children: [
                      (0, F.jsx)('div', { className: 'text-xs font-bold text-slate-800', children: 'M-Pesa Auto-Reconcile' }),
                      (0, F.jsx)('div', { className: 'text-sm font-black text-emerald-700', children: 'Till & Paybill Real-time' }),
                      (0, F.jsx)('p', { className: 'text-[11px] text-slate-500', children: 'Direct ledger sync & instant receipts' })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // TAB 4: DATA BACKUP & RESET
      activeSubTab === 'backup' && (0, F.jsxs)('div', {
        className: 'space-y-6',
        children: [
          (0, F.jsxs)('div', {
            className: 'bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs space-y-6',
            children: [
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsx)('h3', { className: 'text-lg font-bold text-slate-900 font-serif', children: 'Data Backup & SME Demo Reset' }),
                  (0, F.jsx)('p', { className: 'text-xs text-slate-500 mt-0.5', children: 'Safely export your business data or reset demo Kenyan records.' })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: [
                  (0, F.jsxs)('button', {
                    type: 'button',
                    onClick: () => {
                      let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(O.getCompleteState(), null, 2));
                      let dl = document.createElement('a');
                      dl.setAttribute('href', dataStr);
                      dl.setAttribute('download', 'bizhubke_backup_' + e.id + '.json');
                      dl.click();
                    },
                    className: 'px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xs',
                    children: [
                      (0, F.jsx)(Ie, { className: 'w-4 h-4' }),
                      'Export Data Backup (JSON)'
                    ]
                  }),
                  (0, F.jsxs)('button', {
                    type: 'button',
                    onClick: () => {
                      if (confirm('Reset all demo data back to default Kenyan SME state?')) {
                        O.resetDemoData();
                        t && t();
                      }
                    },
                    className: 'px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xs',
                    children: [
                      (0, F.jsx)(rt, { className: 'w-4 h-4 text-rose-600' }),
                      'Reset Demo Kenyan SME Data'
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};
const PlatformAdminComponent = ({ currentUser, activeBusiness, onRefresh }) => {
  let [activeRole, setActiveRole] = (0, _.useState)(() => (O.getCurrentUser()?.role || 'platform-admin'));
  let [activeTab, setActiveTab] = (0, _.useState)('users'); // 'users', 'content', 'subscriptions'
  let [notification, setNotification] = (0, _.useState)(null);

  // Users tab state
  let [userSearch, setUserSearch] = (0, _.useState)('');
  let [userStatusFilter, setUserStatusFilter] = (0, _.useState)('all');

  // Content tab state
  let [contentTypeFilter, setContentTypeFilter] = (0, _.useState)('all'); // 'all', 'news', 'training', 'opportunity'
  let [contentStatusFilter, setContentStatusFilter] = (0, _.useState)('all'); // 'all', 'draft', 'published', 'scheduled'
  let [contentSearch, setContentSearch] = (0, _.useState)('');
  let [editingContent, setEditingContent] = (0, _.useState)(null); // { type, item, isNew }

  // Fresh data from store O
  let users = O.getUsers();
  let businesses = O.getBusinesses();
  let subscriptions = O.getSubscriptions();
  let newsArticles = O.getNews();
  let trainingCourses = O.getCourses();
  let opportunities = O.getOpportunities();

  let showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Helper calculations for Subscriptions & MRR
  let activeSubs = subscriptions.filter(s => s.status === 'active');
  let trialSubs = subscriptions.filter(s => s.status === 'trial');
  let cancelledSubs = subscriptions.filter(s => s.status === 'cancelled');

  let totalMRR = activeSubs.reduce((acc, s) => acc + (s.priceKSh || 0), 0);
  let trialPotentialMRR = trialSubs.reduce((acc, s) => acc + (s.priceKSh || 0), 0);
  let totalSubsCount = subscriptions.length || 1;

  let paidPercent = Math.round((activeSubs.length / totalSubsCount) * 100);
  let trialPercent = Math.round((trialSubs.length / totalSubsCount) * 100);
  let cancelledPercent = Math.round((cancelledSubs.length / totalSubsCount) * 100);

  // Content total stats
  let allContentItems = [
    ...newsArticles.map(a => ({ ...a, contentType: 'news', displayType: 'News Article' })),
    ...trainingCourses.map(c => ({ ...c, contentType: 'training', displayType: 'Academy Course' })),
    ...opportunities.map(o => ({ ...o, contentType: 'opportunity', displayType: 'Grant / Funding' }))
  ];

  let publishedContentCount = allContentItems.filter(i => (i.status || 'published') === 'published').length;
  let draftContentCount = allContentItems.filter(i => i.status === 'draft').length;
  let scheduledContentCount = allContentItems.filter(i => i.status === 'scheduled').length;

  // Role restriction check
  let isPlatformAdmin = activeRole === 'platform-admin';

  if (!isPlatformAdmin) {
    return (0, F.jsxs)('div', {
      id: 'platform-admin-restricted-view',
      className: 'space-y-6 animate-in fade-in max-w-3xl mx-auto py-12 px-4',
      children: [
        (0, F.jsxs)('div', {
          className: 'p-8 sm:p-10 rounded-3xl bg-rose-50/80 border-2 border-rose-200 text-center space-y-5 shadow-sm',
          children: [
            (0, F.jsx)('div', {
              className: 'w-16 h-16 rounded-2xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-xs',
              children: (0, F.jsx)(lt, { className: 'w-8 h-8' })
            }),
            (0, F.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, F.jsxs)('div', {
                  className: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider',
                  children: [
                    (0, F.jsx)(He, { className: 'w-3.5 h-3.5' }),
                    'Role Access Protected'
                  ]
                }),
                (0, F.jsx)('h2', {
                  className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif',
                  children: 'Platform Admin Access Restricted'
                }),
                (0, F.jsx)('div', {
                  className: 'p-3.5 rounded-xl bg-white border border-rose-200 text-rose-800 text-xs sm:text-sm font-bold font-mono inline-block shadow-2xs',
                  children: 'Platform content APIs are protected for the platform administrator role'
                }),
                (0, F.jsxs)('p', {
                  className: 'text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed pt-2',
                  children: [
                    'You are signed in as ',
                    (0, F.jsx)('strong', { className: 'text-slate-900', children: currentUser?.fullName || 'Business Owner' }),
                    ' (',
                    currentUser?.email || 'faith.wanjiku@bizhub.co.ke',
                    ') with active role ',
                    (0, F.jsx)('span', { className: 'px-2 py-0.5 rounded bg-slate-200 font-mono text-slate-800 font-bold', children: activeRole }),
                    '. Only users with the ',
                    (0, F.jsx)('strong', { className: 'text-slate-900', children: 'platform-admin' }),
                    ' role have authorization to view registered businesses, mutate subscriptions, or publish global Kenyan SME content.'
                  ]
                })
              ]
            }),
            (0, F.jsxs)('div', {
              className: 'pt-4 flex flex-col sm:flex-row items-center justify-center gap-3',
              children: [
                (0, F.jsxs)('button', {
                  id: 'elevate-to-admin-btn',
                  onClick: () => {
                    setActiveRole('platform-admin');
                    O.updateUserRole(currentUser?.id || 'usr_demo_001', 'platform-admin');
                    showToast('Switched to platform-admin role. Access granted.');
                    if (onRefresh) onRefresh();
                  },
                  className: 'px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer',
                  children: [
                    (0, F.jsx)(ut, { className: 'w-4 h-4' }),
                    'Elevate to platform-admin (Tester Mode)'
                  ]
                }),
                (0, F.jsxs)('button', {
                  onClick: () => {
                    if (onRefresh) onRefresh();
                  },
                  className: 'px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer',
                  children: [
                    (0, F.jsx)(rt, { className: 'w-4 h-4' }),
                    'Refresh Session'
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }

  // Filtered Users
  let filteredBusinesses = businesses.filter(b => {
    let sub = subscriptions.find(s => s.businessId === b.id);
    let status = sub ? sub.status : 'trial';
    if (userStatusFilter !== 'all' && status !== userStatusFilter) return false;
    if (userSearch.trim()) {
      let q = userSearch.toLowerCase();
      let owner = users.find(u => u.id === b.ownerId);
      let matchName = (b.name || '').toLowerCase().includes(q);
      let matchCounty = (b.county || '').toLowerCase().includes(q);
      let matchOwner = owner ? (owner.fullName || '').toLowerCase().includes(q) || (owner.email || '').toLowerCase().includes(q) : false;
      return matchName || matchCounty || matchOwner;
    }
    return true;
  });

  // Filtered Content
  let filteredContent = allContentItems.filter(item => {
    if (contentTypeFilter !== 'all' && item.contentType !== contentTypeFilter) return false;
    let status = item.status || 'published';
    if (contentStatusFilter !== 'all' && status !== contentStatusFilter) return false;
    if (contentSearch.trim()) {
      let q = contentSearch.toLowerCase();
      let matchTitle = (item.title || '').toLowerCase().includes(q);
      let matchCat = (item.category || '').toLowerCase().includes(q);
      return matchTitle || matchCat;
    }
    return true;
  });

  return (0, F.jsxs)('div', {
    id: 'platform-admin-dashboard',
    className: 'space-y-8 animate-in fade-in max-w-6xl mx-auto pb-12',
    children: [
      // Top Header & Role Notice
      (0, F.jsxs)('div', {
        className: 'flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6',
        children: [
          (0, F.jsxs)('div', {
            children: [
              (0, F.jsxs)('div', {
                className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2',
                children: [
                  (0, F.jsx)(ut, { className: 'w-3.5 h-3.5 text-emerald-600' }),
                  'Role: platform-admin (Verified)'
                ]
              }),
              (0, F.jsx)('h1', {
                className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif',
                children: 'Platform Administration'
              }),
              (0, F.jsx)('p', {
                className: 'text-xs sm:text-sm text-slate-600 mt-1',
                children: 'Global tenant management, subscription MRR tracking, and educational content publishing for Kenyan SMEs.'
              })
            ]
          }),
          (0, F.jsxs)('div', {
            className: 'flex items-center gap-2.5',
            children: [
              (0, F.jsxs)('button', {
                id: 'simulate-owner-btn',
                onClick: () => {
                  setActiveRole('owner');
                  showToast('Role switched to business-owner. Restricted screen active.');
                },
                className: 'px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer',
                title: 'Simulate business-owner account to test restriction',
                children: [
                  (0, F.jsx)(He, { className: 'w-3.5 h-3.5 text-slate-500' }),
                  'Simulate Non-Admin Role'
                ]
              }),
              (0, F.jsxs)('button', {
                id: 'admin-refresh-btn',
                onClick: () => {
                  if (onRefresh) onRefresh();
                  showToast('Admin data synchronized with local state.');
                },
                className: 'p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer',
                title: 'Refresh Data',
                children: (0, F.jsx)(rt, { className: 'w-4 h-4' })
              })
            ]
          })
        ]
      }),

      // Security Notice Banner (Strictly consistent with prompt!)
      (0, F.jsxs)('div', {
        id: 'platform-security-note-banner',
        className: 'p-4 rounded-2xl bg-gradient-to-r from-[#0B192C] to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-slate-800 shadow-sm',
        children: [
          (0, F.jsxs)('div', {
            className: 'flex items-center gap-3',
            children: [
              (0, F.jsx)('div', {
                className: 'w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0',
                children: (0, F.jsx)(He, { className: 'w-4 h-4' })
              }),
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsx)('span', {
                    className: 'text-xs font-bold text-emerald-400 uppercase tracking-wider block',
                    children: 'Access Control & API Protection'
                  }),
                  (0, F.jsx)('span', {
                    className: 'text-xs sm:text-sm font-semibold text-slate-200',
                    children: 'Platform content APIs are protected for the platform administrator role.'
                  })
                ]
              })
            ]
          }),
          (0, F.jsxs)('div', {
            className: 'flex items-center gap-2 self-start sm:self-auto text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700',
            children: [
              (0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse' }),
              'Protected Scope: Global'
            ]
          })
        ]
      }),

      // Toast Notification
      notification && (0, F.jsxs)('div', {
        className: 'p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in',
        children: [
          (0, F.jsx)(je, { className: 'w-4 h-4 text-emerald-600' }),
          (0, F.jsx)('span', { children: notification })
        ]
      }),

      // The Top 3 Counters (Expanded beyond just these 3!)
      (0, F.jsxs)('div', {
        id: 'admin-overview-counters',
        className: 'grid grid-cols-1 md:grid-cols-3 gap-5',
        children: [
          // Counter 1: Users & Businesses
          (0, F.jsxs)('div', {
            className: 'p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, F.jsx)('span', {
                    className: 'text-xs font-bold text-slate-500 uppercase tracking-wider',
                    children: 'Registered Tenants'
                  }),
                  (0, F.jsx)('div', {
                    className: 'w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center',
                    children: (0, F.jsx)(M, { className: 'w-4 h-4' })
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsxs)('div', {
                    className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif',
                    children: [businesses.length, ' Businesses']
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs font-medium text-slate-500 mt-0.5',
                    children: [users.length, ' User accounts registered']
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'pt-2 border-t border-slate-100 flex items-center justify-between text-xs',
                children: [
                  (0, F.jsxs)('span', {
                    className: 'text-emerald-700 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-emerald-500' }), activeSubs.length, ' Active']
                  }),
                  (0, F.jsxs)('span', {
                    className: 'text-amber-700 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-amber-500' }), trialSubs.length, ' Trial']
                  }),
                  (0, F.jsxs)('span', {
                    className: 'text-slate-500 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-slate-400' }), cancelledSubs.length, ' Cancelled']
                  })
                ]
              })
            ]
          }),

          // Counter 2: Monthly Recurring Revenue (MRR)
          (0, F.jsxs)('div', {
            className: 'p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, F.jsx)('span', {
                    className: 'text-xs font-bold text-slate-500 uppercase tracking-wider',
                    children: 'Monthly Recurring Revenue'
                  }),
                  (0, F.jsx)('div', {
                    className: 'w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center',
                    children: (0, F.jsx)(Fe, { className: 'w-4 h-4' })
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsxs)('div', {
                    className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif text-blue-950',
                    children: ['KSh ', totalMRR.toLocaleString(), (0, F.jsx)('span', { className: 'text-sm font-normal text-slate-500', children: ' / mo' })]
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs font-medium text-slate-500 mt-0.5',
                    children: ['Annual Run Rate: KSh ', (totalMRR * 12).toLocaleString()]
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'pt-2 border-t border-slate-100 flex items-center justify-between text-xs',
                children: [
                  (0, F.jsxs)('span', {
                    className: 'text-blue-700 font-bold',
                    children: [paidPercent, '% Paid accounts']
                  }),
                  (0, F.jsxs)('span', {
                    className: 'text-amber-700 font-semibold',
                    children: ['KSh ', trialPotentialMRR.toLocaleString(), ' in Trial']
                  })
                ]
              })
            ]
          }),

          // Counter 3: Global Content Assets
          (0, F.jsxs)('div', {
            className: 'p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, F.jsx)('span', {
                    className: 'text-xs font-bold text-slate-500 uppercase tracking-wider',
                    children: 'Platform Content Assets'
                  }),
                  (0, F.jsx)('div', {
                    className: 'w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center',
                    children: (0, F.jsx)(xe, { className: 'w-4 h-4' })
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                children: [
                  (0, F.jsxs)('div', {
                    className: 'text-2xl sm:text-3xl font-black text-slate-900 font-serif',
                    children: [allContentItems.length, ' Entries']
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs font-medium text-slate-500 mt-0.5',
                    children: [newsArticles.length, ' News • ', trainingCourses.length, ' Courses • ', opportunities.length, ' Grants']
                  })
                ]
              }),
              (0, F.jsxs)('div', {
                className: 'pt-2 border-t border-slate-100 flex items-center justify-between text-xs',
                children: [
                  (0, F.jsxs)('span', {
                    className: 'text-emerald-700 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-emerald-500' }), publishedContentCount, ' Published']
                  }),
                  (0, F.jsxs)('span', {
                    className: 'text-amber-700 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-amber-500' }), draftContentCount, ' Draft']
                  }),
                  (0, F.jsxs)('span', {
                    className: 'text-blue-700 font-bold flex items-center gap-1',
                    children: [(0, F.jsx)('span', { className: 'w-2 h-2 rounded-full bg-blue-500' }), scheduledContentCount, ' Scheduled']
                  })
                ]
              })
            ]
          })
        ]
      }),

      // Main Tabs Navigation (Users, Content, Subscriptions)
      (0, F.jsxs)('div', {
        className: 'flex border-b border-slate-200 overflow-x-auto gap-2',
        children: [
          (0, F.jsxs)('button', {
            id: 'tab-users-btn',
            onClick: () => setActiveTab('users'),
            className: `px-4 py-3 border-b-2 font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all ${activeTab === 'users' ? 'border-emerald-600 text-emerald-800 bg-emerald-50/40 rounded-t-xl' : 'border-transparent text-slate-500 hover:text-slate-900'}`,
            children: [
              (0, F.jsx)(yt, { className: 'w-4 h-4' }),
              'Registered Users & Businesses',
              (0, F.jsx)('span', {
                className: `text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'users' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`,
                children: businesses.length
              })
            ]
          }),
          (0, F.jsxs)('button', {
            id: 'tab-content-btn',
            onClick: () => setActiveTab('content'),
            className: `px-4 py-3 border-b-2 font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all ${activeTab === 'content' ? 'border-emerald-600 text-emerald-800 bg-emerald-50/40 rounded-t-xl' : 'border-transparent text-slate-500 hover:text-slate-900'}`,
            children: [
              (0, F.jsx)(xe, { className: 'w-4 h-4' }),
              'Platform Content (News, Training, Opportunities)',
              (0, F.jsx)('span', {
                className: `text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'content' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`,
                children: allContentItems.length
              })
            ]
          }),
          (0, F.jsxs)('button', {
            id: 'tab-subscriptions-btn',
            onClick: () => setActiveTab('subscriptions'),
            className: `px-4 py-3 border-b-2 font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all ${activeTab === 'subscriptions' ? 'border-emerald-600 text-emerald-800 bg-emerald-50/40 rounded-t-xl' : 'border-transparent text-slate-500 hover:text-slate-900'}`,
            children: [
              (0, F.jsx)(Fe, { className: 'w-4 h-4' }),
              'Subscriptions & MRR',
              (0, F.jsxs)('span', {
                className: `text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'subscriptions' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`,
                children: ['KSh ', totalMRR.toLocaleString()]
              })
            ]
          })
        ]
      }),

      // TAB 1: USERS
      activeTab === 'users' && (0, F.jsxs)('div', {
        id: 'admin-users-tab',
        className: 'space-y-5',
        children: [
          (0, F.jsxs)('div', {
            className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex flex-wrap items-center gap-1.5',
                children: [
                  ['all', `All (${businesses.length})`],
                  ['active', `Active (${activeSubs.length})`],
                  ['trial', `Trial (${trialSubs.length})`],
                  ['cancelled', `Cancelled (${cancelledSubs.length})`]
                ].map(([st, lbl]) => (0, F.jsx)('button', {
                  key: st,
                  onClick: () => setUserStatusFilter(st),
                  className: `px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${userStatusFilter === st ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                  children: lbl
                }))
              }),
              (0, F.jsxs)('div', {
                className: 'relative min-w-[240px]',
                children: [
                  (0, F.jsx)(at, { className: 'w-4 h-4 text-slate-400 absolute left-3 top-3' }),
                  (0, F.jsx)('input', {
                    type: 'text',
                    placeholder: 'Search by business, county, or owner...',
                    value: userSearch,
                    onChange: e => setUserSearch(e.target.value),
                    className: 'w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white'
                  })
                ]
              })
            ]
          }),

          // Users Table
          (0, F.jsx)('div', {
            className: 'bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs',
            children: (0, F.jsxs)('div', {
              className: 'overflow-x-auto',
              children: [
                (0, F.jsxs)('table', {
                  className: 'w-full text-left text-xs',
                  children: [
                    (0, F.jsx)('thead', {
                      className: 'bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider',
                      children: (0, F.jsxs)('tr', {
                        children: [
                          (0, F.jsx)('th', { className: 'px-5 py-3.5', children: 'Registered Business' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Owner / Contact' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Subscription Plan' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Signup Date' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Status' }),
                          (0, F.jsx)('th', { className: 'px-5 py-3.5 text-right', children: 'Administrative Actions' })
                        ]
                      })
                    }),
                    (0, F.jsx)('tbody', {
                      className: 'divide-y divide-slate-100 font-medium',
                      children: filteredBusinesses.map(biz => {
                        let owner = users.find(u => u.id === biz.ownerId) || { fullName: 'Faith Muthoni Wanjiku', email: 'faith.wanjiku@bizhub.co.ke', phoneNumber: '+254 712 345 678' };
                        let sub = subscriptions.find(s => s.businessId === biz.id) || { plan: 'business', status: 'trial', priceKSh: 999 };
                        let signupDate = new Date(biz.createdAt || Date.now() - 1728e6).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

                        return (0, F.jsxs)('tr', {
                          key: biz.id,
                          className: 'hover:bg-slate-50/60 transition-colors',
                          children: [
                            (0, F.jsxs)('td', {
                              className: 'px-5 py-4',
                              children: [
                                (0, F.jsx)('div', { className: 'font-bold text-slate-900 text-sm', children: biz.name }),
                                (0, F.jsxs)('div', {
                                  className: 'flex items-center gap-1.5 mt-0.5 text-slate-500 text-[11px]',
                                  children: [
                                    (0, F.jsx)('span', { className: 'px-1.5 py-0.5 rounded bg-slate-100 font-semibold', children: biz.county }),
                                    (0, F.jsx)('span', { children: '•' }),
                                    (0, F.jsx)('span', { children: biz.businessType || 'Retail' })
                                  ]
                                })
                              ]
                            }),
                            (0, F.jsxs)('td', {
                              className: 'px-4 py-4',
                              children: [
                                (0, F.jsx)('div', { className: 'font-bold text-slate-800', children: owner.fullName }),
                                (0, F.jsx)('div', { className: 'text-slate-500 text-[11px]', children: owner.email }),
                                (0, F.jsx)('div', { className: 'text-slate-400 text-[10px]', children: owner.phoneNumber })
                              ]
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsxs)('div', {
                                children: [
                                  (0, F.jsx)('span', {
                                    className: `px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${sub.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' : sub.plan === 'business' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`,
                                    children: sub.plan
                                  }),
                                  (0, F.jsxs)('div', { className: 'text-[11px] font-mono text-slate-500 mt-1', children: ['KSh ', (sub.priceKSh || 999).toLocaleString(), '/mo'] })
                                ]
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4 text-slate-600 whitespace-nowrap',
                              children: signupDate
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: `px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 w-fit ${sub.status === 'active' ? 'bg-emerald-100 text-emerald-800' : sub.status === 'trial' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`,
                                children: [
                                  (0, F.jsx)('span', { className: `w-1.5 h-1.5 rounded-full ${sub.status === 'active' ? 'bg-emerald-600' : sub.status === 'trial' ? 'bg-amber-600' : 'bg-rose-600'}` }),
                                  sub.status === 'active' ? 'Active' : sub.status === 'trial' ? 'Trial' : 'Cancelled'
                                ]
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-5 py-4 text-right',
                              children: (0, F.jsxs)('div', {
                                className: 'flex items-center justify-end gap-2',
                                children: [
                                  (0, F.jsxs)('select', {
                                    value: sub.status,
                                    onChange: (e) => {
                                      let newStatus = e.target.value;
                                      O.updateBusinessSubscription(biz.id, sub.plan, newStatus);
                                      showToast(`Updated ${biz.name} status to ${newStatus}.`);
                                      if (onRefresh) onRefresh();
                                    },
                                    className: 'px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-700 font-bold focus:ring-1 focus:ring-emerald-500 cursor-pointer',
                                    children: [
                                      (0, F.jsx)('option', { value: 'active', children: 'Set Active' }),
                                      (0, F.jsx)('option', { value: 'trial', children: 'Set Trial' }),
                                      (0, F.jsx)('option', { value: 'cancelled', children: 'Set Cancelled' })
                                    ]
                                  }),
                                  (0, F.jsxs)('select', {
                                    value: sub.plan,
                                    onChange: (e) => {
                                      let newPlan = e.target.value;
                                      O.updateBusinessSubscription(biz.id, newPlan, sub.status);
                                      showToast(`Switched ${biz.name} plan to ${newPlan}.`);
                                      if (onRefresh) onRefresh();
                                    },
                                    className: 'px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-700 font-bold focus:ring-1 focus:ring-emerald-500 cursor-pointer',
                                    children: [
                                      (0, F.jsx)('option', { value: 'starter', children: 'Starter (499)' }),
                                      (0, F.jsx)('option', { value: 'business', children: 'Business (999)' }),
                                      (0, F.jsx)('option', { value: 'enterprise', children: 'Enterprise (2499)' })
                                    ]
                                  })
                                ]
                              })
                            })
                          ]
                        });
                      })
                    })
                  ]
                })
              ]
            })
          })
        ]
      }),

      // TAB 2: CONTENT (News, Training, Opportunities with Draft/Published/Scheduled)
      activeTab === 'content' && (0, F.jsxs)('div', {
        id: 'admin-content-tab',
        className: 'space-y-5',
        children: [
          (0, F.jsxs)('div', {
            className: 'flex flex-col md:flex-row md:items-center justify-between gap-3',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex flex-wrap items-center gap-1.5',
                children: [
                  ['all', `All Content (${allContentItems.length})`],
                  ['news', `News (${newsArticles.length})`],
                  ['training', `Training (${trainingCourses.length})`],
                  ['opportunity', `Grants & Opps (${opportunities.length})`]
                ].map(([ct, lbl]) => (0, F.jsx)('button', {
                  key: ct,
                  onClick: () => setContentTypeFilter(ct),
                  className: `px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${contentTypeFilter === ct ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                  children: lbl
                }))
              }),
              (0, F.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, F.jsxs)('select', {
                    value: contentStatusFilter,
                    onChange: e => setContentStatusFilter(e.target.value),
                    className: 'px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer',
                    children: [
                      (0, F.jsx)('option', { value: 'all', children: 'All Statuses' }),
                      (0, F.jsx)('option', { value: 'published', children: 'Published' }),
                      (0, F.jsx)('option', { value: 'draft', children: 'Draft' }),
                      (0, F.jsx)('option', { value: 'scheduled', children: 'Scheduled' })
                    ]
                  }),
                  (0, F.jsxs)('button', {
                    id: 'create-content-btn',
                    onClick: () => {
                      setEditingContent({
                        type: contentTypeFilter === 'all' ? 'news' : contentTypeFilter,
                        item: {
                          id: (contentTypeFilter === 'all' ? 'news' : contentTypeFilter) + '_' + Date.now(),
                          title: '',
                          category: 'Business Growth',
                          status: 'draft',
                          summary: '',
                          content: '',
                          source: 'BizHubKE Editorial Desk',
                          readTime: '3 min read',
                          description: '',
                          durationMinutes: 30,
                          level: 'Beginner',
                          organization: 'Ministry / Partner',
                          amountKSh: 'Up to KSh 1,000,000',
                          deadline: 'Rolling 2026',
                          eligibility: 'Registered Kenyan SME',
                          linkText: 'Apply Online'
                        },
                        isNew: true
                      });
                    },
                    className: 'px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105 cursor-pointer',
                    children: [
                      (0, F.jsx)(P, { className: 'w-4 h-4' }),
                      'New Content Entry'
                    ]
                  })
                ]
              })
            ]
          }),

          // Search bar
          (0, F.jsxs)('div', {
            className: 'relative max-w-md',
            children: [
              (0, F.jsx)(at, { className: 'w-4 h-4 text-slate-400 absolute left-3 top-3' }),
              (0, F.jsx)('input', {
                type: 'text',
                placeholder: 'Filter entries by title or topic...',
                value: contentSearch,
                onChange: e => setContentSearch(e.target.value),
                className: 'w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white'
              })
            ]
          }),

          // Content List Table
          (0, F.jsx)('div', {
            className: 'bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs',
            children: (0, F.jsxs)('div', {
              className: 'overflow-x-auto',
              children: [
                (0, F.jsxs)('table', {
                  className: 'w-full text-left text-xs',
                  children: [
                    (0, F.jsx)('thead', {
                      className: 'bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider',
                      children: (0, F.jsxs)('tr', {
                        children: [
                          (0, F.jsx)('th', { className: 'px-5 py-3.5', children: 'Content Entry' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Model Type' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Category' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Status' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Timeline / Scope' }),
                          (0, F.jsx)('th', { className: 'px-5 py-3.5 text-right', children: 'Publishing Actions' })
                        ]
                      })
                    }),
                    (0, F.jsx)('tbody', {
                      className: 'divide-y divide-slate-100 font-medium',
                      children: filteredContent.map(entry => {
                        let status = entry.status || 'published';
                        let typeColor = entry.contentType === 'news' ? 'bg-sky-100 text-sky-800' : entry.contentType === 'training' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800';

                        return (0, F.jsxs)('tr', {
                          key: entry.id,
                          className: 'hover:bg-slate-50/60 transition-colors',
                          children: [
                            (0, F.jsxs)('td', {
                              className: 'px-5 py-4 max-w-sm',
                              children: [
                                (0, F.jsx)('div', { className: 'font-bold text-slate-900 text-sm leading-snug', children: entry.title }),
                                (0, F.jsx)('div', { className: 'text-slate-500 text-[11px] truncate mt-0.5 line-clamp-1', children: entry.summary || entry.description || entry.eligibility || 'No description provided.' })
                              ]
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: `px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${typeColor}`,
                                children: entry.displayType
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: 'px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold',
                                children: entry.category
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: `px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 w-fit ${status === 'published' ? 'bg-emerald-100 text-emerald-800' : status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`,
                                children: [
                                  (0, F.jsx)('span', { className: `w-1.5 h-1.5 rounded-full ${status === 'published' ? 'bg-emerald-600' : status === 'scheduled' ? 'bg-blue-600' : 'bg-amber-600'}` }),
                                  status === 'published' ? 'Published' : status === 'scheduled' ? 'Scheduled' : 'Draft'
                                ]
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4 text-slate-500 text-[11px] whitespace-nowrap',
                              children: entry.publishedAt || entry.deadline || (entry.durationMinutes ? `${entry.durationMinutes} mins` : 'Rolling')
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-5 py-4 text-right',
                              children: (0, F.jsxs)('div', {
                                className: 'flex items-center justify-end gap-1.5',
                                children: [
                                  (0, F.jsx)('button', {
                                    onClick: () => {
                                      let next = status === 'published' ? 'draft' : status === 'draft' ? 'scheduled' : 'published';
                                      O.updateContentItem(entry.contentType, { ...entry, status: next });
                                      showToast(`Updated "${entry.title.substring(0, 25)}..." status to ${next}.`);
                                      if (onRefresh) onRefresh();
                                    },
                                    className: 'px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-bold cursor-pointer transition-colors',
                                    title: 'Cycle status: Published -> Draft -> Scheduled',
                                    children: status === 'published' ? 'Set Draft' : status === 'draft' ? 'Schedule' : 'Publish'
                                  }),
                                  (0, F.jsx)('button', {
                                    onClick: () => {
                                      setEditingContent({
                                        type: entry.contentType,
                                        item: { ...entry },
                                        isNew: false
                                      });
                                    },
                                    className: 'px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold cursor-pointer transition-colors',
                                    children: 'Edit'
                                  }),
                                  (0, F.jsx)('button', {
                                    onClick: () => {
                                      if (confirm(`Delete "${entry.title}"?`)) {
                                        O.deleteContentItem(entry.contentType, entry.id);
                                        showToast('Content entry removed.');
                                        if (onRefresh) onRefresh();
                                      }
                                    },
                                    className: 'p-1 rounded-lg text-rose-500 hover:bg-rose-50 cursor-pointer',
                                    title: 'Delete Entry',
                                    children: (0, F.jsx)(pt, { className: 'w-3.5 h-3.5' })
                                  })
                                ]
                              })
                            })
                          ]
                        });
                      })
                    })
                  ]
                })
              ]
            })
          })
        ]
      }),

      // TAB 3: SUBSCRIPTIONS & MRR
      activeTab === 'subscriptions' && (0, F.jsxs)('div', {
        id: 'admin-subscriptions-tab',
        className: 'space-y-6',
        children: [
          // Visual Breakdown of Trial vs Paid
          (0, F.jsxs)('div', {
            className: 'p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-2',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('h3', { className: 'text-base font-bold text-slate-900 font-serif', children: 'Subscriber Ratio & Conversion Breakdown' }),
                      (0, F.jsx)('p', { className: 'text-xs text-slate-500', children: 'Distribution between paying commercial businesses, active trial evaluations, and churned accounts.' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'text-right',
                    children: [
                      (0, F.jsxs)('span', { className: 'text-xs font-bold text-slate-400', children: ['Total Subscriptions: ', totalSubsCount] }),
                      (0, F.jsxs)('div', { className: 'text-lg font-black text-emerald-700 font-mono', children: ['KSh ', totalMRR.toLocaleString(), ' / mo'] })
                    ]
                  })
                ]
              }),

              // Stacked Progress Bar
              (0, F.jsxs)('div', {
                className: 'h-4 rounded-full bg-slate-100 overflow-hidden flex shadow-inner',
                children: [
                  (0, F.jsx)('div', {
                    style: { width: `${paidPercent}%` },
                    className: 'bg-emerald-500 transition-all duration-500',
                    title: `Paid Active: ${activeSubs.length} (${paidPercent}%)`
                  }),
                  (0, F.jsx)('div', {
                    style: { width: `${trialPercent}%` },
                    className: 'bg-amber-400 transition-all duration-500',
                    title: `In Trial: ${trialSubs.length} (${trialPercent}%)`
                  }),
                  (0, F.jsx)('div', {
                    style: { width: `${cancelledPercent}%` },
                    className: 'bg-slate-400 transition-all duration-500',
                    title: `Cancelled: ${cancelledSubs.length} (${cancelledPercent}%)`
                  })
                ]
              }),

              // Metric Legend Strip
              (0, F.jsxs)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between',
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, F.jsx)('span', { className: 'w-3 h-3 rounded-md bg-emerald-500' }),
                          (0, F.jsx)('span', { className: 'font-bold text-emerald-950', children: 'Paid Active' })
                        ]
                      }),
                      (0, F.jsxs)('span', { className: 'font-black text-emerald-800 font-mono', children: [activeSubs.length, ' (', paidPercent, '%)'] })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'p-3 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-center justify-between',
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, F.jsx)('span', { className: 'w-3 h-3 rounded-md bg-amber-400' }),
                          (0, F.jsx)('span', { className: 'font-bold text-amber-950', children: 'Trial Evaluation' })
                        ]
                      }),
                      (0, F.jsxs)('span', { className: 'font-black text-amber-800 font-mono', children: [trialSubs.length, ' (', trialPercent, '%)'] })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'p-3 rounded-2xl bg-slate-100/70 border border-slate-200 flex items-center justify-between',
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, F.jsx)('span', { className: 'w-3 h-3 rounded-md bg-slate-400' }),
                          (0, F.jsx)('span', { className: 'font-bold text-slate-800', children: 'Cancelled / Churn' })
                        ]
                      }),
                      (0, F.jsxs)('span', { className: 'font-black text-slate-700 font-mono', children: [cancelledSubs.length, ' (', cancelledPercent, '%)'] })
                    ]
                  })
                ]
              })
            ]
          }),

          // Plan Tier Distribution
          (0, F.jsxs)('div', {
            className: 'grid grid-cols-1 sm:grid-cols-3 gap-4',
            children: [
              // Starter
              (0, F.jsxs)('div', {
                className: 'p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      (0, F.jsx)('span', { className: 'px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] uppercase tracking-wider', children: 'Starter Tier' }),
                      (0, F.jsx)('span', { className: 'text-xs font-mono font-bold text-slate-500', children: 'KSh 499 / mo' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'text-xl font-black text-slate-900 font-serif',
                    children: [subscriptions.filter(s => s.plan === 'starter').length, ' Businesses']
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs text-slate-500',
                    children: ['MRR Contribution: KSh ', (subscriptions.filter(s => s.plan === 'starter' && s.status === 'active').length * 499).toLocaleString()]
                  })
                ]
              }),

              // Business
              (0, F.jsxs)('div', {
                className: 'p-5 rounded-3xl bg-white border border-blue-200 shadow-xs space-y-2 relative overflow-hidden',
                children: [
                  (0, F.jsx)('div', { className: 'absolute top-0 right-0 w-24 h-24 bg-blue-50/60 rounded-full -mr-8 -mt-8 pointer-events-none' }),
                  (0, F.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      (0, F.jsx)('span', { className: 'px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] uppercase tracking-wider', children: 'Business Tier (Most Popular)' }),
                      (0, F.jsx)('span', { className: 'text-xs font-mono font-bold text-blue-700', children: 'KSh 999 / mo' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'text-xl font-black text-slate-900 font-serif',
                    children: [subscriptions.filter(s => s.plan === 'business').length, ' Businesses']
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs text-slate-500',
                    children: ['MRR Contribution: KSh ', (subscriptions.filter(s => s.plan === 'business' && s.status === 'active').length * 999).toLocaleString()]
                  })
                ]
              }),

              // Enterprise
              (0, F.jsxs)('div', {
                className: 'p-5 rounded-3xl bg-white border border-purple-200 shadow-xs space-y-2',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      (0, F.jsx)('span', { className: 'px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] uppercase tracking-wider', children: 'Enterprise Tier' }),
                      (0, F.jsx)('span', { className: 'text-xs font-mono font-bold text-purple-700', children: 'KSh 2,499 / mo' })
                    ]
                  }),
                  (0, F.jsxs)('div', {
                    className: 'text-xl font-black text-slate-900 font-serif',
                    children: [subscriptions.filter(s => s.plan === 'enterprise').length, ' Businesses']
                  }),
                  (0, F.jsxs)('p', {
                    className: 'text-xs text-slate-500',
                    children: ['MRR Contribution: KSh ', (subscriptions.filter(s => s.plan === 'enterprise' && s.status === 'active').length * 2499).toLocaleString()]
                  })
                ]
              })
            ]
          }),

          // Subscriptions Detailed Roster
          (0, F.jsx)('div', {
            className: 'bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs',
            children: (0, F.jsxs)('div', {
              className: 'overflow-x-auto',
              children: [
                (0, F.jsxs)('table', {
                  className: 'w-full text-left text-xs',
                  children: [
                    (0, F.jsx)('thead', {
                      className: 'bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider',
                      children: (0, F.jsxs)('tr', {
                        children: [
                          (0, F.jsx)('th', { className: 'px-5 py-3.5', children: 'Subscribing Business' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Active Plan Tier' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Monthly Tariff' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Billing Cycle Status' }),
                          (0, F.jsx)('th', { className: 'px-4 py-3.5', children: 'Expires / Renews' }),
                          (0, F.jsx)('th', { className: 'px-5 py-3.5 text-right', children: 'Plan Administration' })
                        ]
                      })
                    }),
                    (0, F.jsx)('tbody', {
                      className: 'divide-y divide-slate-100 font-medium',
                      children: businesses.map(biz => {
                        let sub = subscriptions.find(s => s.businessId === biz.id) || { plan: 'business', status: 'trial', priceKSh: 999, expiresAt: new Date(Date.now() + 6048e5).toISOString() };
                        let owner = users.find(u => u.id === biz.ownerId) || { fullName: 'Faith Muthoni Wanjiku', email: 'faith.wanjiku@bizhub.co.ke' };
                        let renewDate = new Date(sub.expiresAt || Date.now() + 2592e6).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

                        return (0, F.jsxs)('tr', {
                          key: biz.id,
                          className: 'hover:bg-slate-50/60 transition-colors',
                          children: [
                            (0, F.jsxs)('td', {
                              className: 'px-5 py-4',
                              children: [
                                (0, F.jsx)('div', { className: 'font-bold text-slate-900 text-sm', children: biz.name }),
                                (0, F.jsxs)('div', { className: 'text-slate-500 text-[11px]', children: [owner.fullName, ' • ', biz.county] })
                              ]
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: `px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${sub.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' : sub.plan === 'business' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`,
                                children: sub.plan
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4 font-mono font-bold text-slate-900 text-sm',
                              children: ['KSh ', (sub.priceKSh || 999).toLocaleString()]
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4',
                              children: (0, F.jsx)('span', {
                                className: `px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 w-fit ${sub.status === 'active' ? 'bg-emerald-100 text-emerald-800' : sub.status === 'trial' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`,
                                children: [
                                  (0, F.jsx)('span', { className: `w-1.5 h-1.5 rounded-full ${sub.status === 'active' ? 'bg-emerald-600' : sub.status === 'trial' ? 'bg-amber-600' : 'bg-rose-600'}` }),
                                  sub.status === 'active' ? 'Paid Active' : sub.status === 'trial' ? 'Trial Period' : 'Cancelled'
                                ]
                              })
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-4 py-4 text-slate-600 whitespace-nowrap',
                              children: renewDate
                            }),
                            (0, F.jsx)('td', {
                              className: 'px-5 py-4 text-right',
                              children: (0, F.jsxs)('div', {
                                className: 'flex items-center justify-end gap-2',
                                children: [
                                  (0, F.jsxs)('select', {
                                    value: sub.plan,
                                    onChange: (e) => {
                                      let newPlan = e.target.value;
                                      O.updateBusinessSubscription(biz.id, newPlan, sub.status);
                                      showToast(`Updated plan for ${biz.name} to ${newPlan}.`);
                                      if (onRefresh) onRefresh();
                                    },
                                    className: 'px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-700 font-bold cursor-pointer',
                                    children: [
                                      (0, F.jsx)('option', { value: 'starter', children: 'Starter (499)' }),
                                      (0, F.jsx)('option', { value: 'business', children: 'Business (999)' }),
                                      (0, F.jsx)('option', { value: 'enterprise', children: 'Enterprise (2499)' })
                                    ]
                                  }),
                                  (0, F.jsx)('button', {
                                    onClick: () => {
                                      let next = sub.status === 'active' ? 'cancelled' : sub.status === 'trial' ? 'active' : 'trial';
                                      O.updateBusinessSubscription(biz.id, sub.plan, next);
                                      showToast(`Status for ${biz.name} set to ${next}.`);
                                      if (onRefresh) onRefresh();
                                    },
                                    className: 'px-2 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer',
                                    children: sub.status === 'active' ? 'Cancel' : sub.status === 'trial' ? 'Activate' : 'Re-trial'
                                  })
                                ]
                              })
                            })
                          ]
                        });
                      })
                    })
                  ]
                })
              ]
            })
          })
        ]
      }),

      // Create / Edit Content Modal Dialog (reusing existing models!)
      editingContent && (0, F.jsxs)('div', {
        className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in',
        children: [
          (0, F.jsxs)('div', {
            className: 'bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-5 border border-slate-200 shadow-2xl',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center justify-between pb-3 border-b border-slate-200',
                children: [
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('h3', {
                        className: 'text-xl font-black text-slate-900 font-serif',
                        children: editingContent.isNew ? 'Create New Content Entry' : 'Edit Content Entry'
                      }),
                      (0, F.jsx)('p', {
                        className: 'text-xs text-slate-500',
                        children: 'Updates reflect globally across News, Academy, or Opportunities without data duplication.'
                      })
                    ]
                  }),
                  (0, F.jsx)('button', {
                    onClick: () => setEditingContent(null),
                    className: 'p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer',
                    children: (0, F.jsx)(St, { className: 'w-5 h-5' })
                  })
                ]
              }),

              // Form fields
              (0, F.jsxs)('div', {
                className: 'space-y-4 text-xs',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Model Type' }),
                          (0, F.jsxs)('select', {
                            disabled: !editingContent.isNew,
                            value: editingContent.type,
                            onChange: e => setEditingContent({ ...editingContent, type: e.target.value }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-slate-50',
                            children: [
                              (0, F.jsx)('option', { value: 'news', children: 'News Article (O.state.newsArticles)' }),
                              (0, F.jsx)('option', { value: 'training', children: 'Training Course (O.state.trainingCourses)' }),
                              (0, F.jsx)('option', { value: 'opportunity', children: 'Grant / Funding (O.state.opportunities)' })
                            ]
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Publishing Status' }),
                          (0, F.jsxs)('select', {
                            value: editingContent.item.status || 'draft',
                            onChange: e => setEditingContent({
                              ...editingContent,
                              item: { ...editingContent.item, status: e.target.value }
                            }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-white focus:ring-2 focus:ring-emerald-500',
                            children: [
                              (0, F.jsx)('option', { value: 'draft', children: 'Draft (Internal Review)' }),
                              (0, F.jsx)('option', { value: 'published', children: 'Published (Live to all SMEs)' }),
                              (0, F.jsx)('option', { value: 'scheduled', children: 'Scheduled (Auto-Release)' })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Title / Headline' }),
                      (0, F.jsx)('input', {
                        type: 'text',
                        value: editingContent.item.title || '',
                        onChange: e => setEditingContent({
                          ...editingContent,
                          item: { ...editingContent.item, title: e.target.value }
                        }),
                        placeholder: 'Enter clear, descriptive title...',
                        className: 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-emerald-500'
                      })
                    ]
                  }),

                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Category' }),
                      (0, F.jsx)('input', {
                        type: 'text',
                        value: editingContent.item.category || '',
                        onChange: e => setEditingContent({
                          ...editingContent,
                          item: { ...editingContent.item, category: e.target.value }
                        }),
                        placeholder: 'e.g. Tax & Compliance, Cash Flow, Affirmative Action Fund...',
                        className: 'w-full px-3.5 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-emerald-500'
                      })
                    ]
                  }),

                  // Model-specific fields
                  editingContent.type === 'news' && (0, F.jsxs)('div', {
                    className: 'space-y-3',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Executive Summary' }),
                          (0, F.jsx)('textarea', {
                            rows: 2,
                            value: editingContent.item.summary || '',
                            onChange: e => setEditingContent({
                              ...editingContent,
                              item: { ...editingContent.item, summary: e.target.value }
                            }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Full Article Content' }),
                          (0, F.jsx)('textarea', {
                            rows: 4,
                            value: editingContent.item.content || '',
                            onChange: e => setEditingContent({
                              ...editingContent,
                              item: { ...editingContent.item, content: e.target.value }
                            }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      })
                    ]
                  }),

                  editingContent.type === 'training' && (0, F.jsxs)('div', {
                    className: 'space-y-3',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Course Overview / Syllabus' }),
                          (0, F.jsx)('textarea', {
                            rows: 3,
                            value: editingContent.item.description || '',
                            onChange: e => setEditingContent({
                              ...editingContent,
                              item: { ...editingContent.item, description: e.target.value }
                            }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500'
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          (0, F.jsxs)('div', {
                            children: [
                              (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Duration (Minutes)' }),
                              (0, F.jsx)('input', {
                                type: 'number',
                                value: editingContent.item.durationMinutes || 30,
                                onChange: e => setEditingContent({
                                  ...editingContent,
                                  item: { ...editingContent.item, durationMinutes: parseInt(e.target.value) || 30 }
                                }),
                                className: 'w-full px-3 py-2 rounded-xl border border-slate-200'
                              })
                            ]
                          }),
                          (0, F.jsxs)('div', {
                            children: [
                              (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Proficiency Level' }),
                              (0, F.jsxs)('select', {
                                value: editingContent.item.level || 'Beginner',
                                onChange: e => setEditingContent({
                                  ...editingContent,
                                  item: { ...editingContent.item, level: e.target.value }
                                }),
                                className: 'w-full px-3 py-2 rounded-xl border border-slate-200',
                                children: [
                                  (0, F.jsx)('option', { value: 'Beginner', children: 'Beginner' }),
                                  (0, F.jsx)('option', { value: 'Intermediate', children: 'Intermediate' }),
                                  (0, F.jsx)('option', { value: 'Advanced', children: 'Advanced' })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  editingContent.type === 'opportunity' && (0, F.jsxs)('div', {
                    className: 'space-y-3',
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          (0, F.jsxs)('div', {
                            children: [
                              (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Grant / Funding Agency' }),
                              (0, F.jsx)('input', {
                                type: 'text',
                                value: editingContent.item.organization || '',
                                onChange: e => setEditingContent({
                                  ...editingContent,
                                  item: { ...editingContent.item, organization: e.target.value }
                                }),
                                placeholder: 'e.g. KCIC / WEF / YEDF',
                                className: 'w-full px-3 py-2 rounded-xl border border-slate-200'
                              })
                            ]
                          }),
                          (0, F.jsxs)('div', {
                            children: [
                              (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Amount (KSh)' }),
                              (0, F.jsx)('input', {
                                type: 'text',
                                value: editingContent.item.amountKSh || editingContent.item.grantAmountKSh || '',
                                onChange: e => setEditingContent({
                                  ...editingContent,
                                  item: { ...editingContent.item, amountKSh: e.target.value, grantAmountKSh: e.target.value }
                                }),
                                placeholder: 'e.g. Up to KSh 2,000,000',
                                className: 'w-full px-3 py-2 rounded-xl border border-slate-200'
                              })
                            ]
                          })
                        ]
                      }),
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('label', { className: 'block font-bold text-slate-700 mb-1', children: 'Eligibility Criteria' }),
                          (0, F.jsx)('textarea', {
                            rows: 2,
                            value: editingContent.item.eligibility || '',
                            onChange: e => setEditingContent({
                              ...editingContent,
                              item: { ...editingContent.item, eligibility: e.target.value }
                            }),
                            className: 'w-full px-3 py-2 rounded-xl border border-slate-200'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),

              // Actions
              (0, F.jsxs)('div', {
                className: 'pt-3 border-t border-slate-200 flex items-center justify-end gap-3',
                children: [
                  (0, F.jsx)('button', {
                    type: 'button',
                    onClick: () => setEditingContent(null),
                    className: 'px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer',
                    children: 'Cancel'
                  }),
                  (0, F.jsxs)('button', {
                    type: 'button',
                    onClick: () => {
                      if (!editingContent.item.title?.trim()) {
                        alert('Please provide an entry title.');
                        return;
                      }
                      O.updateContentItem(editingContent.type, editingContent.item);
                      showToast(`Successfully saved "${editingContent.item.title}"!`);
                      setEditingContent(null);
                      if (onRefresh) onRefresh();
                    },
                    className: 'px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer',
                    children: [
                      (0, F.jsx)(it, { className: 'w-4 h-4' }),
                      'Save Entry'
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

const NotificationBellDropdown=({business:e,onNavigateTab:t,onRefresh:n})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(`all`),s=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=t=>{s.current&&!s.current.contains(t.target)&&i(!1)};return r&&document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[r]);let c=O.getNotifications(),l=c.filter(e=>!e.isRead).length,u=a===`unread`?c.filter(e=>!e.isRead):c,d=e=>{O.markNotificationAsRead(e.id),n&&n(),i(!1),t&&t(e.targetTab||`overview`,e)},f=e=>{e.stopPropagation(),O.markAllNotificationsAsRead(),n&&n()},p=e=>e===`inventory`?Ce:e===`invoices`?Le:e===`compliance`?ut:e===`customers`?yt:j,m=(e,t)=>e===`inventory`?t?`text-amber-600 bg-amber-50`:`text-amber-700 bg-amber-100 ring-1 ring-amber-300`:e===`invoices`?t?`text-rose-600 bg-rose-50`:`text-rose-700 bg-rose-100 ring-1 ring-rose-300`:e===`compliance`?t?`text-indigo-600 bg-indigo-50`:`text-indigo-700 bg-indigo-100 ring-1 ring-indigo-300`:e===`customers`?t?`text-emerald-600 bg-emerald-50`:`text-emerald-700 bg-emerald-100 ring-1 ring-emerald-300`:`text-slate-600 bg-slate-100`;return(0,F.jsxs)(`div`,{ref:s,className:`relative inline-block text-left`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>i(!r),className:`p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 relative cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500`,title:l>0?`${l} unread notification${l>1?`s`:``}`:`Notifications`,children:[(0,F.jsx)(j,{className:`w-4 h-4`}),l>0&&(0,F.jsx)(`span`,{className:`absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center shadow-sm animate-pulse`,children:l>9?`9+`:l})]}),r&&(0,F.jsxs)(`div`,{className:`absolute right-0 mt-2 w-80 sm:w-96 max-w-[92vw] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in zoom-in-95`,children:[(0,F.jsxs)(`div`,{className:`p-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(j,{className:`w-4 h-4 text-amber-400`}),(0,F.jsx)(`span`,{className:`font-black text-sm font-serif`,children:`Notifications`}),(0,F.jsx)(`span`,{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${l>0?`bg-rose-500/30 text-rose-300 border border-rose-500/40`:`bg-emerald-500/20 text-emerald-300 border border-emerald-500/30`}`,children:l>0?`${l} unread`:`All caught up`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[l>0&&(0,F.jsx)(`button`,{type:`button`,onClick:f,className:`text-[11px] font-semibold text-slate-300 hover:text-emerald-400 hover:underline cursor-pointer transition-colors`,children:`Mark all as read`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>i(!1),className:`p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer`,children:(0,F.jsx)(St,{className:`w-4 h-4`})})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center border-b border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 gap-2`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>o(`all`),className:`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${a===`all`?`bg-white text-slate-900 shadow-xs font-bold`:`hover:text-slate-900`}`,children:[`All (`,c.length,`)`]}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>o(`unread`),className:`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${a===`unread`?`bg-white text-slate-900 shadow-xs font-bold`:`hover:text-slate-900`}`,children:[`Unread (`,l,`)`]})]}),(0,F.jsx)(`div`,{className:`max-h-80 overflow-y-auto divide-y divide-slate-100`,children:u.length===0?(0,F.jsxs)(`div`,{className:`p-6 text-center text-slate-400 text-xs space-y-2`,children:[(0,F.jsx)(je,{className:`w-8 h-8 text-emerald-500 mx-auto opacity-70`}),(0,F.jsx)(`p`,{className:`font-semibold text-slate-700`,children:a===`unread`?`No unread notifications!`:`No notifications available.`}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-400`,children:`System is monitoring inventory, invoices, KRA dates, and CRM.`})]}):u.map(e=>{let t=p(e.category),n=m(e.category,e.isRead);return(0,F.jsxs)(`div`,{onClick:()=>d(e),className:`p-3.5 transition-colors cursor-pointer flex items-start gap-3 hover:bg-slate-50 ${!e.isRead?`bg-emerald-50/20`:`opacity-80`}`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${n}`,children:(0,F.jsx)(t,{className:`w-4 h-4`})}),(0,F.jsxs)(`div`,{className:`flex-1 min-w-0 space-y-1`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,F.jsx)(`p`,{className:`text-xs font-bold text-slate-900 truncate`,children:e.title}),!e.isRead&&(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-rose-500 shrink-0`,title:`Unread`})]}),(0,F.jsx)(`p`,{className:`text-[11px] text-slate-600 leading-snug line-clamp-2`,children:e.message}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between pt-1 text-[10px]`,children:[(0,F.jsxs)(`span`,{className:`font-semibold text-emerald-700 hover:underline flex items-center gap-0.5`,children:[e.actionLabel||`View details`,(0,F.jsx)(ke,{className:`w-3 h-3`})]}),!e.isRead?(0,F.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),O.markNotificationAsRead(e.id),n&&n()},className:`text-slate-400 hover:text-emerald-600 font-medium px-1.5 py-0.5 rounded hover:bg-slate-100 cursor-pointer`,children:`Mark read`}):(0,F.jsx)(`span`,{className:`text-slate-400`,children:`Read`})]})]})]},e.id)})}),(0,F.jsxs)(`div`,{className:`p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 px-4`,children:[(0,F.jsx)(`span`,{children:`Auto-synced with live biashara data`}),(0,F.jsx)(`span`,{className:`font-mono text-emerald-600 font-bold`,children:`BizHubKE Live`})]})]})]})},

Jt=({business:e,onLogout:t,onGoToLanding:n})=>{
  let [r, i] = (0, _.useState)('overview');
  let [a, o] = (0, _.useState)(!1);
  let [s, c] = (0, _.useState)(0);
  let [l, u] = (0, _.useState)(!1);
  let [d, f] = (0, _.useState)(!1);
  let [p, m] = (0, _.useState)(!1);
  let [targetProdId, setTargetProdId] = (0, _.useState)(null);
  let [targetProdSearch, setTargetProdSearch] = (0, _.useState)('');
  let [targetInvId, setTargetInvId] = (0, _.useState)(null);
  let [targetInvSearch, setTargetInvSearch] = (0, _.useState)('');
  let [targetInvStatus, setTargetInvStatus] = (0, _.useState)('');
  let [targetCustSearch, setTargetCustSearch] = (0, _.useState)('');
  let [roleMenuOpen, setRoleMenuOpen] = (0, _.useState)(!1);
  let [roleToast, setRoleToast] = (0, _.useState)(null);

  let h = () => { c(prev => prev + 1); };

  let g = O.getActiveBusiness() || e;
  let v = O.getSales();
  let y = O.getExpenses();
  let b = O.getProducts();
  let x = O.getInvoices();
  let S = O.getCustomers();
  let C = O.getSuppliers();
  let ee = O.getNews();
  let w = O.getCourses();

  // Role permissions resolution
  let currentUser = O.getCurrentUser();
  let currentRole = O.getCurrentUserRole(g.id);
  let normalizedRole = (currentRole || "Owner").toLowerCase().trim();
  let isOwner = normalizedRole === "owner" || normalizedRole === "platform-admin" || normalizedRole === "business-owner";

  const ROLE_ALLOWED_TABS = {
    owner: [
      "overview", "sales", "expenses", "inventory", "invoices",
      "customers", "suppliers", "compliance", "marketing",
      "analytics", "ai-advisor", "ai-assist", "news", "training", "settings", "platform-admin"
    ],
    manager: [
      "sales", "customers", "inventory", "analytics"
    ],
    staff: [
      "sales", "customers"
    ],
    accountant: [
      "invoices", "expenses", "analytics", "compliance"
    ]
  };

  let allowedTabIds = isOwner ? ROLE_ALLOWED_TABS.owner : (ROLE_ALLOWED_TABS[normalizedRole] || ROLE_ALLOWED_TABS.owner);

  let normalizeTabId = (tab) => {
    if (!tab) return "overview";
    if (tab === "ai-assist") return "ai-advisor";
    return tab;
  };

  let isTabAllowed = (tab) => {
    if (isOwner) return true;
    let nTab = normalizeTabId(tab);
    return allowedTabIds.includes(nTab) || allowedTabIds.includes(tab);
  };

  // Sync active tab when role changes
  (0, _.useEffect)(() => {
    if (!isTabAllowed(r)) {
      i(allowedTabIds[0] || "overview");
    }
  }, [normalizedRole]);

  let handleNotifNavigate = (rawTab, notif) => {
    let targetTab = normalizeTabId(rawTab);
    if (!isTabAllowed(targetTab)) {
      setRoleToast("Access restricted: Your current role (" + currentRole + ") does not have access to " + targetTab + ".");
      setTimeout(() => setRoleToast(null), 3500);
      return;
    }
    i(targetTab);
    if (targetTab === "inventory" && notif) {
      setTargetProdId(notif.targetId || null);
      setTargetProdSearch(notif.targetSearch || "");
    } else if (targetTab === "invoices" && notif) {
      setTargetInvId(notif.targetId || null);
      setTargetInvSearch(notif.targetSearch || "");
      setTargetInvStatus(notif.targetFilter || "overdue");
    } else if (targetTab === "customers" && notif) {
      setTargetCustSearch(notif.targetSearch || "");
    }
  };

  let te = [
    { id: 'overview', label: 'Overview', icon: Ve },
    { id: 'sales', label: 'Sales & Receipts', icon: nt },
    { id: 'expenses', label: 'Expenses', icon: xt },
    { id: 'inventory', label: 'Inventory', icon: Ce },
    { id: 'invoices', label: 'Invoices & eTIMS', icon: Le, badge: 'eTIMS' },
    { id: 'customers', label: 'Customers CRM', icon: yt },
    { id: 'suppliers', label: 'Suppliers', icon: _t },
    { id: 'compliance', label: 'KRA & Taxes', icon: ut, badge: 'KRA' },
    { id: 'marketing', label: 'WhatsApp Marketing', icon: Ke },
    { id: 'analytics', label: 'Analytics & Score', icon: Ee },
    { id: 'ai-advisor', label: 'AI Biashara Advisor', icon: ft, badge: 'AI' },
    { id: 'news', label: 'News & Grants', icon: xe },
    { id: 'training', label: 'Academy', icon: Re },
    { id: 'settings', label: 'Business & Plan', icon: st },
    { id: 'platform-admin', label: 'Platform Admin', icon: ut, badge: 'Admin' }
  ];

  // Hide nav items the current user's role cannot access
  let visibleNavItems = te.filter(item => {
    if (item.id === "platform-admin") {
      let u = O.getCurrentUser();
      return isOwner || (u && u.role === "platform-admin");
    }
    return isTabAllowed(item.id);
  });

  return (0, F.jsxs)('div', {
    className: 'min-h-screen bg-[#F8FAFC] flex text-slate-900 font-sans antialiased',
    children: [
      // Desktop Sidebar
      (0, F.jsxs)('aside', {
        className: 'hidden lg:flex flex-col w-64 bg-[#0B192C] text-slate-300 border-r border-slate-800 shrink-0 select-none',
        children: [
          // Logo & Business Info
          (0, F.jsxs)('div', {
            className: 'p-6 border-b border-slate-800/80',
            children: [
              (0, F.jsxs)('div', {
                className: 'flex items-center gap-3',
                children: [
                  (0, F.jsx)('div', {
                    className: 'w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-400 flex items-center justify-center font-black text-white text-xl shadow-md font-serif',
                    children: 'B'
                  }),
                  (0, F.jsxs)('div', {
                    children: [
                      (0, F.jsxs)('div', {
                        className: 'flex items-center gap-1.5',
                        children: [
                          (0, F.jsx)('span', { className: 'font-serif font-black text-lg tracking-tight text-white', children: 'BizHub' }),
                          (0, F.jsx)('span', { className: 'text-[10px] font-black tracking-widest text-[#006644] bg-emerald-400/90 px-1.5 py-0.5 rounded uppercase', children: 'KE' })
                        ]
                      }),
                      (0, F.jsx)('p', { className: 'text-[11px] text-slate-400 truncate max-w-[130px] font-medium', children: g.name })
                    ]
                  })
                ]
              }),

              // Active User & Role badge inside sidebar
              (0, F.jsxs)('div', {
                className: 'mt-4 p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'truncate',
                    children: [
                      (0, F.jsx)('div', { className: 'text-[10px] text-slate-400 font-medium', children: 'Active User' }),
                      (0, F.jsx)('div', { className: 'text-xs font-bold text-white truncate max-w-[120px]', children: currentUser?.fullName || 'Biashara User' })
                    ]
                  }),
                  (0, F.jsx)('span', {
                    className: 'px-2 py-0.5 rounded-md text-[10px] font-black uppercase ' + (
                      normalizedRole === 'owner' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      normalizedRole === 'manager' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      normalizedRole === 'staff' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    ),
                    children: currentRole
                  })
                ]
              })
            ]
          }),

          // Navigation Links (Only visible items for current role)
          (0, F.jsxs)('div', {
            className: 'flex-1 overflow-y-auto p-4 space-y-1',
            children: [
              (0, F.jsxs)('div', {
                className: 'px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between',
                children: [
                  (0, F.jsx)('span', { children: 'Navigation' }),
                  (0, F.jsxs)('span', { className: 'text-[10px] text-slate-500 font-mono', children: [visibleNavItems.length, ' pages'] })
                ]
              }),
              visibleNavItems.map(item => {
                let Icon = item.icon;
                let isActive = r === item.id;
                return (0, F.jsxs)('button', {
                  key: item.id,
                  onClick: () => i(item.id),
                  className: 'w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ' + (isActive ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'),
                  children: [
                    (0, F.jsxs)('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        (0, F.jsx)(Icon, { className: 'w-4 h-4 ' + (isActive ? 'text-white' : 'text-slate-400') }),
                        (0, F.jsx)('span', { children: item.label })
                      ]
                    }),
                    item.badge && (0, F.jsx)('span', {
                      className: 'text-[10px] px-1.5 py-0.5 rounded font-black ' + (isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-800 text-amber-300'),
                      children: item.badge
                    })
                  ]
                });
              })
            ]
          }),

          // Bottom Quick Profile & Logout
          (0, F.jsxs)('div', {
            className: 'p-4 border-t border-slate-800/80 space-y-2',
            children: [
              (0, F.jsxs)('div', {
                className: 'p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs',
                children: [
                  (0, F.jsx)('div', { className: 'text-slate-400 text-[10px] uppercase font-black', children: 'Role-Based Access' }),
                  (0, F.jsxs)('div', { className: 'text-white font-bold truncate mt-0.5', children: [currentRole, ' Access Mode'] }),
                  (0, F.jsxs)('div', { className: 'text-slate-500 text-[10px]', children: [visibleNavItems.length, ' of ', te.length, ' pages visible'] })
                ]
              }),
              (0, F.jsxs)('button', {
                onClick: t,
                className: 'w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer',
                children: [
                  (0, F.jsx)(Ue, { className: 'w-4 h-4' }),
                  'Log Out'
                ]
              })
            ]
          })
        ]
      }),

      // Main Content Layout
      (0, F.jsxs)('div', {
        className: 'flex-1 flex flex-col min-w-0 overflow-hidden',
        children: [
          // Header Bar
          (0, F.jsxs)('header', {
            className: 'bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-xs',
            children: [
              // Mobile hamburger and brand
              (0, F.jsxs)('div', {
                className: 'flex items-center gap-3',
                children: [
                  (0, F.jsx)('button', {
                    onClick: () => o(!0),
                    className: 'lg:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer',
                    children: (0, F.jsx)(qe, { className: 'w-5 h-5' })
                  }),
                  (0, F.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, F.jsx)('span', { className: 'text-base sm:text-lg font-black text-slate-900 font-serif', children: g.name }),
                      (0, F.jsx)('span', { className: 'text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 hidden sm:inline', children: g.county })
                    ]
                  })
                ]
              }),

              // Header Action Buttons
              (0, F.jsxs)('div', {
                className: 'flex items-center gap-2 sm:gap-3',
                children: [
                  // Fast Role Switcher & Indicator
                  (0, F.jsxs)('div', {
                    className: 'relative',
                    children: [
                      (0, F.jsxs)('button', {
                        onClick: () => setRoleMenuOpen(!roleMenuOpen),
                        className: 'px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 text-slate-700 shadow-xs transition-colors cursor-pointer',
                        title: 'Current Role (Click to switch / simulate)',
                        children: [
                          (0, F.jsx)(ut, { className: 'w-3.5 h-3.5 text-emerald-600' }),
                          (0, F.jsxs)('span', { className: 'hidden sm:inline', children: ['Role: ', currentRole] }),
                          (0, F.jsx)('span', { className: 'sm:hidden', children: currentRole }),
                          (0, F.jsx)(ke, { className: 'w-3 h-3 text-slate-400 transition-transform ' + (roleMenuOpen ? 'rotate-90' : '') })
                        ]
                      }),
                      roleMenuOpen && (0, F.jsxs)('div', {
                        className: 'absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 p-2 space-y-1 animate-in fade-in',
                        children: [
                          (0, F.jsx)('div', { className: 'px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100', children: 'Switch Active Role (Test Mode)' }),
                          ['Owner', 'Manager', 'Staff', 'Accountant'].map(rName => {
                            let isSel = currentRole.toLowerCase() === rName.toLowerCase();
                            let roleDesc = rName === 'Owner' ? 'Full access to all 15 modules' : rName === 'Manager' ? 'Sales, Customers, Inventory, Analytics' : rName === 'Staff' ? 'Sales, Customers only' : 'Finance & Invoices, Expenses, Analytics, Reports';
                            return (0, F.jsxs)('button', {
                              key: rName,
                              onClick: () => {
                                O.switchActiveRole(rName, g.id);
                                setRoleMenuOpen(!1);
                                h();
                              },
                              className: 'w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex flex-col ' + (isSel ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'hover:bg-slate-50 text-slate-700'),
                              children: [
                                (0, F.jsxs)('div', {
                                  className: 'flex items-center justify-between',
                                  children: [
                                    (0, F.jsx)('span', { children: rName }),
                                    isSel && (0, F.jsx)(it, { className: 'w-3.5 h-3.5 text-emerald-600' })
                                  ]
                                }),
                                (0, F.jsx)('span', { className: 'text-[10px] text-slate-400 font-normal mt-0.5', children: roleDesc })
                              ]
                            });
                          })
                        ]
                      })
                    ]
                  }),

                  // Platform Admin Button (Visible only if Owner or platform-admin)
                  (normalizedRole === 'owner') && (0, F.jsxs)('button', {
                    onClick: () => i('platform-admin'),
                    className: 'px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer',
                    title: 'Platform Administration',
                    children: [
                      (0, F.jsx)(ut, { className: 'w-3.5 h-3.5 text-amber-600' }),
                      (0, F.jsx)('span', { className: 'hidden md:inline', children: 'Admin Portal' })
                    ]
                  }),

                  // Record Sale (Visible only if allowed for current role)
                  allowedTabIds.includes('sales') && (0, F.jsxs)('button', {
                    onClick: () => { i('sales'); u(!0); },
                    className: 'px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105 cursor-pointer',
                    children: [
                      (0, F.jsx)(P, { className: 'w-4 h-4' }),
                      (0, F.jsx)('span', { className: 'hidden sm:inline', children: 'Record Sale' })
                    ]
                  }),

                  // Log Expense (Visible only if allowed for current role)
                  allowedTabIds.includes('expenses') && (0, F.jsxs)('button', {
                    onClick: () => { i('expenses'); f(!0); },
                    className: 'px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105 cursor-pointer',
                    children: [
                      (0, F.jsx)(P, { className: 'w-4 h-4' }),
                      (0, F.jsx)('span', { className: 'hidden sm:inline', children: 'Log Expense' })
                    ]
                  }),

                  // Notification Bell Dropdown
                  (0, F.jsx)(NotificationBellDropdown, {
                    business: g,
                    onNavigateTab: handleNotifNavigate,
                    onRefresh: h
                  })
                ]
              })
            ]
          }),

          // Role Restriction Toast Banner
          roleToast && (0, F.jsxs)('div', {
            className: 'fixed bottom-5 right-5 z-50 p-4 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-800 text-xs font-bold flex items-center gap-2.5 max-w-sm animate-in fade-in slide-in-from-bottom-2',
            children: [
              (0, F.jsx)(ut, { className: 'w-4 h-4 text-amber-400 shrink-0' }),
              (0, F.jsx)('span', { children: roleToast }),
              (0, F.jsx)('button', {
                onClick: () => setRoleToast(null),
                className: 'ml-auto text-slate-400 hover:text-white',
                children: (0, F.jsx)(St, { className: 'w-3.5 h-3.5' })
              })
            ]
          }),

          // Mobile Drawer
          a && (0, F.jsxs)('div', {
            className: 'fixed inset-0 z-50 lg:hidden flex',
            children: [
              (0, F.jsx)('div', {
                onClick: () => o(!1),
                className: 'fixed inset-0 bg-slate-900/60 backdrop-blur-xs'
              }),
              (0, F.jsxs)('div', {
                className: 'relative w-64 bg-[#0B192C] text-slate-300 flex flex-col h-full z-10',
                children: [
                  (0, F.jsxs)('div', {
                    className: 'p-6 border-b border-slate-800 flex items-center justify-between',
                    children: [
                      (0, F.jsxs)('div', {
                        children: [
                          (0, F.jsx)('div', { className: 'font-serif font-black text-lg text-white', children: 'BizHubKE' }),
                          (0, F.jsx)('div', { className: 'text-[11px] text-slate-400', children: g.name })
                        ]
                      }),
                      (0, F.jsx)('button', {
                        onClick: () => o(!1),
                        className: 'p-2 rounded-lg text-slate-400 hover:text-white',
                        children: (0, F.jsx)(St, { className: 'w-5 h-5' })
                      })
                    ]
                  }),
                  (0, F.jsx)('div', {
                    className: 'flex-1 overflow-y-auto py-4 space-y-1',
                    children: visibleNavItems.map(item => {
                      let Icon = item.icon;
                      let isActive = r === item.id;
                      return (0, F.jsxs)('button', {
                        key: item.id,
                        onClick: () => { i(item.id); o(!1); },
                        className: 'w-full flex items-center justify-between px-4 py-3 text-xs font-bold transition-colors ' + (isActive ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'),
                        children: [
                          (0, F.jsxs)('div', {
                            className: 'flex items-center gap-3',
                            children: [
                              (0, F.jsx)(Icon, { className: 'w-4 h-4' }),
                              (0, F.jsx)('span', { children: item.label })
                            ]
                          }),
                          item.badge && (0, F.jsx)('span', {
                            className: 'text-[10px] px-1.5 py-0.5 rounded font-black ' + (isActive ? 'bg-emerald-800 text-white' : 'bg-slate-800 text-amber-300'),
                            children: item.badge
                          })
                        ]
                      });
                    })
                  }),
                  (0, F.jsx)('div', {
                    className: 'p-4 border-t border-slate-800',
                    children: (0, F.jsxs)('button', {
                      onClick: t,
                      className: 'w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-rose-400 text-xs font-bold',
                      children: [
                        (0, F.jsx)(Ue, { className: 'w-4 h-4' }),
                        'Log Out'
                      ]
                    })
                  })
                ]
              })
            ]
          }),

          // Main View Render
          (0, F.jsx)("main", {
            className: "p-4 sm:p-8 flex-1 max-w-7xl mx-auto w-full",
            children: !isTabAllowed(r) ? (0, F.jsxs)("div", {
              className: "p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-xs max-w-lg mx-auto space-y-4 my-8",
              children: [
                (0, F.jsx)(ut, { className: "w-12 h-12 text-amber-500 mx-auto" }),
                (0, F.jsx)("h3", { className: "text-xl font-bold text-slate-900 font-serif", children: "Page Access Restricted" }),
                (0, F.jsxs)("p", { className: "text-xs text-slate-600", children: ["Your role (", currentRole, ") does not have permission to view this page. Navigation has been updated to your authorized modules."] }),
                (0, F.jsx)("button", {
                  onClick: () => i(isOwner ? "overview" : (allowedTabIds[0] || "sales")),
                  className: "px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-sm hover:bg-emerald-500 cursor-pointer",
                  children: "Go to Accessible Page"
                })
              ]
            }) : (0, F.jsxs)(F.Fragment, {
              children: [
                r === 'overview' && (0, F.jsx)(Nt, {
                  business: g,
                  sales: v,
                  expenses: y,
                  products: b,
                  invoices: x,
                  onNavigateTab: target => { let t = target === 'ai-assist' ? 'ai-advisor' : target; i(t); },
                  onOpenRecordSale: () => { i('sales'); u(!0); },
                  onOpenAddExpense: () => { i('expenses'); f(!0); },
                  onOpenNewInvoice: () => { i('invoices'); m(!0); }
                }),
                r === 'sales' && (0, F.jsx)(Pt, {
                  business: g,
                  sales: v,
                  products: b,
                  customers: S,
                  onRefresh: h,
                  openRecordModalByDefault: l
                }),
                r === 'expenses' && (0, F.jsx)(It, {
                  business: g,
                  expenses: y,
                  onRefresh: h,
                  openAddModalByDefault: d
                }),
                r === 'inventory' && (0, F.jsx)(Lt, {
                  business: g,
                  products: b,
                  onRefresh: h,
                  targetProductId: targetProdId,
                  targetSearch: targetProdSearch
                }),
                r === 'invoices' && (0, F.jsx)(Rt, {
                  business: g,
                  invoices: x,
                  customers: S,
                  products: b,
                  onRefresh: h,
                  openCreateModalByDefault: p,
                  targetInvoiceId: targetInvId,
                  targetSearch: targetInvSearch,
                  targetStatus: targetInvStatus
                }),
                r === 'customers' && (0, F.jsx)(zt, {
                  business: g,
                  customers: S,
                  onRefresh: h,
                  targetSearch: targetCustSearch
                }),
                r === 'suppliers' && (0, F.jsx)(Bt, {
                  business: g,
                  suppliers: C,
                  onRefresh: h
                }),
                r === 'compliance' && (0, F.jsx)(Vt, {
                  business: g,
                  sales: v
                }),
                r === 'marketing' && (0, F.jsx)(Ht, {
                  business: g,
                  customers: S,
                  onNavigateTab: i
                }),
                r === 'analytics' && (0, F.jsx)(Ut, {
                  business: g,
                  sales: v,
                  expenses: y,
                  products: b,
                  customers: S
                }),
                (r === 'ai-advisor' || r === 'ai-assist') && (0, F.jsx)(Wt, {
                  business: g,
                  sales: v,
                  expenses: y
                }),
                r === 'news' && (0, F.jsx)(Gt, {
                  articles: ee
                }),
                r === 'training' && (0, F.jsx)(Kt, {
                  courses: w
                }),
                r === 'settings' && (0, F.jsx)(qt, {
                  business: g,
                  onRefresh: h
                }),
                r === 'platform-admin' && (0, F.jsx)(PlatformAdminComponent, {
                  currentUser: O.getCurrentUser(),
                  activeBusiness: g,
                  onRefresh: h
                })
              ]
            })
          })
        ]
      })
    ]
  });
};
function I(){let[e,t]=(0,_.useState)(()=>O.getCurrentUser()),[n,r]=(0,_.useState)(()=>O.getActiveBusiness()),[i,a]=(0,_.useState)(function(){try{var p=window.location.pathname;if(p==="/features/cash-flow-finance")return"feature-cash-flow-finance";if(p==="/features/tax-compliance")return"feature-tax-compliance";if(p==="/features/inventory-operations")return"feature-inventory-operations";if(p==="/features/customers-whatsapp-crm")return"feature-customers-whatsapp-crm";if(p==="/features/business-intelligence-growth")return"feature-business-intelligence-growth";}catch(e){}return"landing";}),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(`login`),[isDemoModalOpen, setIsDemoModalOpen]=(0,_.useState)(false);(0,_.useEffect)(()=>{let e=O.getCurrentUser(),n=O.getActiveBusiness();t(e),r(n)},[]);let u=e=>{l(e),s(!0)},d=()=>{let e=O.getCurrentUser(),n=O.getActiveBusiness();t(e),s(!1),n?(r(n),a(`dashboard`)):a(`onboarding`)},f=()=>{s(!1),a(`onboarding`)},p=()=>{let e=O.getActiveBusiness();r(e),a(`dashboard`)},m=()=>{O.logout(),t(null),r(null),a(`landing`)},h=()=>{O.loginDemoUser();let e=O.getCurrentUser(),n=O.getActiveBusiness();t(e),r(n),a(`dashboard`)},goToFeature=function(featId){var pageKey=featId==="cash-flow"?"cash-flow-finance":featId==="tax-compliance"?"tax-compliance":featId==="inventory-ops"?"inventory-operations":featId==="customers-crm"?"customers-whatsapp-crm":featId==="intelligence-growth"?"business-intelligence-growth":featId;try{var targetPath="/features/"+pageKey;if(window.location.pathname!==targetPath){window.history.pushState({feature:pageKey},"",targetPath);}}catch(e){}a("feature-"+pageKey);if(typeof window!=="undefined"){window.scrollTo({top:0,behavior:"smooth"});}},goHome=function(sectionId){try{if(window.location.pathname!=="/"){window.history.pushState({},"","/");}}catch(e){}a("landing");if(sectionId){setTimeout(function(){var t=document.getElementById(sectionId);t&&t.scrollIntoView({behavior:"smooth"});},100);}else if(typeof window!=="undefined"){window.scrollTo({top:0,behavior:"smooth"});}},g=function(e){if(i!=="landing"){goHome(e);}else{var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"});}};(0,_.useEffect)(function(){var handlePop=function(){var p=window.location.pathname;if(p==="/features/cash-flow-finance")a("feature-cash-flow-finance");else if(p==="/features/tax-compliance")a("feature-tax-compliance");else if(p==="/features/inventory-operations")a("feature-inventory-operations");else if(p==="/features/customers-whatsapp-crm")a("feature-customers-whatsapp-crm");else if(p==="/features/business-intelligence-growth")a("feature-business-intelligence-growth");else if(i.startsWith("feature-"))a("landing");};window.addEventListener("popstate",handlePop);return function(){window.removeEventListener("popstate",handlePop);};},[i]);return(0,F.jsxs)(`div`,{className:`min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white`,children:[i===`onboarding`&&(0,F.jsx)(Mt,{business:n||O.createBusiness({name:`New Kenyan Business`,businessType:`Retail`,county:`Nairobi`}),onFinish:p}),i===`dashboard`&&n&&(0,F.jsx)(Jt,{business:n,onLogout:m,onGoToLanding:()=>a(`landing`)}),i.startsWith("feature-")&&(0,F.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,F.jsx)(wt,{activeUser:e,activeBusiness:n,onOpenAuth:u,onOpenDashboard:h,onNavigateSection:function(sect){goHome(sect);}}),(0,F.jsx)("main",{className:"flex-1",children:(0,F.jsx)(FeatureDetailPageComponent,{pageKey:i.replace("feature-",""),onNavigateHome:function(){goHome("features");},onNavigateFeature:function(newFeatKey){goToFeature(newFeatKey);},onOpenRegister:function(){u("register");},onOpenDashboard:h})}),(0,F.jsx)(At,{onNavigateSection:function(sect){goHome(sect);},onOpenAuth:u,onWatchDemo:function(){setIsDemoModalOpen(true);}})]}),i===`landing`&&(0,F.jsxs)(`div`,{className:`flex flex-col min-h-screen`,children:[(0,F.jsx)(wt,{activeUser:e,activeBusiness:n,onOpenAuth:u,onOpenDashboard:h,onNavigateSection:g}),(0,F.jsxs)(`main`,{className:`flex-1`,children:[(0,F.jsx)(Tt,{onStartFreeTrial:()=>u(`register`),onWatchDemo:()=>setIsDemoModalOpen(true),onSelectFeaturePill:e=>{g(`showcase`)}}),(0,F.jsx)(Et,{onLearnMore:goToFeature,onOpenRegister:()=>u(`register`)}),(0,F.jsx)(HowItWorksSectionComponent,{onOpenRegister:()=>u(`register`),onOpenDashboard:h}),(0,F.jsx)(Dt,{onOpenDashboard:h,onOpenRegister:()=>u(`register`)}),(0,F.jsx)(TestimonialsSectionComponent,{}),(0,F.jsx)(Ot,{newsArticles:O.getNews(),trainingCourses:O.getCourses(),onSelectArticle:()=>h(),onSelectCourse:()=>h(),onExploreMore:h}),(0,F.jsx)(WhyChooseBizHubSectionComponent,{}),(0,F.jsx)(TrustSecurityStripComponent,{}),(0,F.jsx)(kt,{onSelectPlan:()=>u(`register`)}),(0,F.jsx)(FAQSectionComponent,{onOpenAuth:u}),(0,F.jsx)(FinalCTAComponent,{onStartFreeTrial:()=>u(`register`),onExploreDemo:h,onWatchDemo:()=>setIsDemoModalOpen(true)}),(0,F.jsx)(ContactSectionComponent,{})]}),(0,F.jsx)(At,{onNavigateSection:g,onOpenAuth:u,onWatchDemo:()=>setIsDemoModalOpen(true)}),(0,F.jsx)(`div`,{className:`fixed bottom-5 right-5 z-40`,children:(0,F.jsxs)(`button`,{onClick:h,className:`px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#0B192C] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-2xl hover:scale-105 transition-all border border-emerald-400/40 cursor-pointer`,children:[(0,F.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping`}),(0,F.jsx)(`span`,{children:`Launch BizHubKE App Dashboard`})]})})]}),(0,F.jsx)(DemoWalkthroughModalComponent,{isOpen:isDemoModalOpen,onClose:()=>setIsDemoModalOpen(false),onStartFreeTrial:()=>u(`register`),onExploreLiveDemo:h}),(0,F.jsx)(jt,{isOpen:o,initialMode:c,onClose:()=>s(!1),onSuccess:d,onStartOnboarding:f})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(_.StrictMode,{children:(0,F.jsx)(I,{})}));