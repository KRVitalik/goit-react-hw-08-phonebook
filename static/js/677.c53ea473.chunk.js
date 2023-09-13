"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[677],{7677:function(n,e,t){t.r(e),t.d(e,{default:function(){return Tn}});var o=t(2791),r=t(4942),a=t(9439),i=t(1413);function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=t(3433);function l(n){var e,t,o="";if("string"==typeof n||"number"==typeof n)o+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=l(n[e]))&&(o&&(o+=" "),o+=t);else for(e in n)n[e]&&(o&&(o+=" "),o+=e);return o}var u=function(){for(var n,e,t=0,o="";t<arguments.length;)(n=arguments[t++])&&(e=l(n))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],f=["delay","staleId"],p=function(n){return"number"==typeof n&&!isNaN(n)},m=function(n){return"string"==typeof n},h=function(n){return"function"==typeof n},g=function(n){return m(n)||h(n)?n:null},v=function(n){return(0,o.isValidElement)(n)||m(n)||h(n)||p(n)};function y(n){var e=n.enter,t=n.exit,r=n.appendPosition,a=void 0!==r&&r,i=n.collapse,s=void 0===i||i,l=n.collapseDuration,u=void 0===l?300:l;return function(n){var r=n.children,i=n.position,l=n.preventExitTransition,d=n.done,f=n.nodeRef,p=n.isIn,m=a?"".concat(e,"--").concat(i):e,h=a?"".concat(t,"--").concat(i):t,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var n,e=f.current,t=m.split(" "),o=function n(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,c.Z)(t)))};(n=e.classList).add.apply(n,(0,c.Z)(t)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,o.useEffect)((function(){var n=f.current,e=function e(){n.removeEventListener("animationend",e),s?function(n,e,t){void 0===t&&(t=300);var o=n.scrollHeight,r=n.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,t)}))}))}(n,d,u):d()};p||(l?e():(g.current=1,n.className+=" ".concat(h),n.addEventListener("animationend",e)))}),[p]),o.createElement(o.Fragment,null,r)}}function x(n,e){return null!=n?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}var b={list:new Map,emitQueue:new Map,on:function(n,e){return this.list.has(n)||this.list.set(n,[]),this.list.get(n).push(e),this},off:function(n,e){if(e){var t=this.list.get(n).filter((function(n){return n!==e}));return this.list.set(n,t),this}return this.list.delete(n),this},cancelEmit:function(n){var e=this.emitQueue.get(n);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(n)),this},emit:function(n){var e=arguments,t=this;this.list.has(n)&&this.list.get(n).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,c.Z)([].slice.call(e,1)))}),0);t.emitQueue.has(n)||t.emitQueue.set(n,[]),t.emitQueue.get(n).push(r)}))}},T=function(n){var e=n.theme,t=n.type,r=s(n,d);return o.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(t,")")},r))},E={info:function(n){return o.createElement(T,(0,i.Z)({},n),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return o.createElement(T,(0,i.Z)({},n),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return o.createElement(T,(0,i.Z)({},n),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return o.createElement(T,(0,i.Z)({},n),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function Z(n){var e=(0,o.useReducer)((function(n){return n+1}),0),t=(0,a.Z)(e,2)[1],r=(0,o.useState)([]),l=(0,a.Z)(r,2),u=l[0],d=l[1],y=(0,o.useRef)(null),T=(0,o.useRef)(new Map).current,Z=function(n){return-1!==u.indexOf(n)},C=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:n,containerId:null,isToastActive:Z,getToast:function(n){return T.get(n)}}).current;function P(n){var e=n.containerId;!C.props.limit||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function I(n){d((function(e){return null==n?[]:e.filter((function(e){return e!==n}))}))}function _(){var n=C.queue.shift();O(n.toastContent,n.toastProps,n.staleId)}function w(n,e){var r=e.delay,c=e.staleId,l=s(e,f);if(v(n)&&!function(n){return!y.current||C.props.enableMultiContainer&&n.containerId!==C.props.containerId||T.has(n.toastId)&&null==n.updateId}(l)){var u=l.toastId,d=l.updateId,Z=l.data,P=C.props,w=function(){return I(u)},L=null==d;L&&C.count++;var k,N,R=(0,i.Z)((0,i.Z)((0,i.Z)({},P),{},{style:P.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(l).filter((function(n){var e=(0,a.Z)(n,2);e[0];return null!=e[1]})))),{},{toastId:u,updateId:d,data:Z,closeToast:w,isIn:!1,className:g(l.className||P.toastClassName),bodyClassName:g(l.bodyClassName||P.bodyClassName),progressClassName:g(l.progressClassName||P.progressClassName),autoClose:!l.isLoading&&(k=l.autoClose,N=P.autoClose,!1===k||p(k)&&k>0?k:N),deleteToast:function(){var n=x(T.get(u),"removed");T.delete(u),b.emit(4,n);var e=C.queue.length;if(C.count=null==u?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){var o=null==u?C.props.limit:1;if(1===e||1===o)C.displayedToast++,_();else{var r=o>e?e:o;C.displayedToast=r;for(var a=0;a<r;a++)_()}}else t()}});R.iconOut=function(n){var e=n.theme,t=n.type,r=n.isLoading,a=n.icon,i=null,s={theme:e,type:t};return!1===a||(h(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):m(a)||p(a)?i=a:r?i=E.spinner():function(n){return n in E}(t)&&(i=E[t](s))),i}(R),h(l.onOpen)&&(R.onOpen=l.onOpen),h(l.onClose)&&(R.onClose=l.onClose),R.closeButton=P.closeButton,!1===l.closeButton||v(l.closeButton)?R.closeButton=l.closeButton:!0===l.closeButton&&(R.closeButton=!v(P.closeButton)||P.closeButton);var F=n;(0,o.isValidElement)(n)&&!m(n.type)?F=(0,o.cloneElement)(n,{closeToast:w,toastProps:R,data:Z}):h(n)&&(F=n({closeToast:w,toastProps:R,data:Z})),P.limit&&P.limit>0&&C.count>P.limit&&L?C.queue.push({toastContent:F,toastProps:R,staleId:c}):p(r)?setTimeout((function(){O(F,R,c)}),r):O(F,R,c)}}function O(n,e,t){var o=e.toastId;t&&T.delete(t);var r={content:n,props:e};T.set(o,r),d((function(n){return[].concat((0,c.Z)(n),[o]).filter((function(n){return n!==t}))})),b.emit(4,x(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return C.containerId=n.containerId,b.cancelEmit(3).on(0,w).on(1,(function(n){return y.current&&I(n)})).on(5,P).emit(2,C),function(){T.clear(),b.emit(3,C)}}),[]),(0,o.useEffect)((function(){C.props=n,C.isToastActive=Z,C.displayedToast=u.length})),{getToastToRender:function(e){var t=new Map,o=Array.from(T.values());return n.newestOnTop&&o.reverse(),o.forEach((function(n){var e=n.props.position;t.has(e)||t.set(e,[]),t.get(e).push(n)})),Array.from(t,(function(n){return e(n[0],n[1])}))},containerRef:y,isToastActive:Z}}function C(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientX:n.clientX}function P(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientY:n.clientY}function I(n){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),r=t[0],i=t[1],s=(0,o.useState)(!1),c=(0,a.Z)(s,2),l=c[0],u=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(n),m=n.autoClose,g=n.pauseOnHover,v=n.closeToast,y=n.onClick,x=n.closeOnClick;function b(e){if(n.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",_),document.addEventListener("touchmove",I),document.addEventListener("touchend",_);var t=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=t.getBoundingClientRect(),t.style.transition="",f.x=C(e.nativeEvent),f.y=P(e.nativeEvent),"x"===n.draggableDirection?(f.start=f.x,f.removalDistance=t.offsetWidth*(n.draggablePercent/100)):(f.start=f.y,f.removalDistance=t.offsetHeight*(80===n.draggablePercent?1.5*n.draggablePercent:n.draggablePercent/100))}}function T(e){if(f.boundingRect){var t=f.boundingRect,o=t.top,r=t.bottom,a=t.left,i=t.right;"touchend"!==e.nativeEvent.type&&n.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():E()}}function E(){i(!0)}function Z(){i(!1)}function I(e){var t=d.current;f.canDrag&&t&&(f.didMove=!0,r&&Z(),f.x=C(e),f.y=P(e),f.delta="x"===n.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),t.style.transform="translate".concat(n.draggableDirection,"(").concat(f.delta,"px)"),t.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",_);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void n.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(n.draggableDirection,"(0)"),e.style.opacity="1"}}(0,o.useEffect)((function(){p.current=n})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),h(n.onOpen)&&n.onOpen((0,o.isValidElement)(n.children)&&n.children.props),function(){var n=p.current;h(n.onClose)&&n.onClose((0,o.isValidElement)(n.children)&&n.children.props)}}),[]),(0,o.useEffect)((function(){return n.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",E),window.addEventListener("blur",Z)),function(){n.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",Z))}}),[n.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&g&&(w.onMouseEnter=Z,w.onMouseLeave=E),x&&(w.onClick=function(n){y&&y(n),f.canCloseOnClick&&v()}),{playToast:E,pauseToast:Z,isRunning:r,preventExitTransition:l,toastRef:d,eventHandlers:w}}function _(n){var e=n.closeToast,t=n.theme,r=n.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(n){n.stopPropagation(),e(n)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(n){var e=n.delay,t=n.isRunning,a=n.closeToast,s=n.type,c=void 0===s?"default":s,l=n.hide,d=n.className,f=n.style,p=n.controlledProgress,m=n.progress,g=n.rtl,v=n.isIn,y=n.theme,x=l||p&&0===m,b=(0,i.Z)((0,i.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:t?"running":"paused",opacity:x?0:1});p&&(b.transform="scaleX(".concat(m,")"));var T=u("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":g}),E=h(d)?d({rtl:g,type:c,defaultClassName:T}):u(T,d);return o.createElement("div",(0,r.Z)({role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:E,style:b},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){v&&a()}))}var O=function(n){var e=I(n),t=e.isRunning,r=e.preventExitTransition,a=e.toastRef,s=e.eventHandlers,c=n.closeButton,l=n.children,d=n.autoClose,f=n.onClick,p=n.type,m=n.hideProgressBar,g=n.closeToast,v=n.transition,y=n.position,x=n.className,b=n.style,T=n.bodyClassName,E=n.bodyStyle,Z=n.progressClassName,C=n.progressStyle,P=n.updateId,O=n.role,L=n.progress,k=n.rtl,N=n.toastId,R=n.deleteToast,F=n.isIn,D=n.isLoading,j=n.iconOut,A=n.closeOnClick,z=n.theme,M=u("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":A}),B=h(x)?x({rtl:k,position:y,type:p,defaultClassName:M}):u(M,x),S=!!L||!d,q={closeToast:g,type:p,theme:z},H=null;return!1===c||(H=h(c)?c(q):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,q):_(q)),o.createElement(v,{isIn:F,done:R,position:y,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,i.Z)((0,i.Z)({id:N,onClick:f,className:B},s),{},{style:b,ref:a}),o.createElement("div",(0,i.Z)((0,i.Z)({},F&&{role:O}),{},{className:h(T)?T({type:p}):u("Toastify__toast-body",T),style:E}),null!=j&&o.createElement("div",{className:u("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},j),o.createElement("div",null,l)),H,o.createElement(w,(0,i.Z)((0,i.Z)({},P&&!S?{key:"pb-".concat(P)}:{}),{},{rtl:k,theme:z,delay:d,isRunning:t,isIn:F,closeToast:g,hide:m,type:p,style:C,className:Z,controlledProgress:S,progress:L||0}))))},L=function(n,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(n,"-enter"),exit:"Toastify--animate Toastify__".concat(n,"-exit"),appendPosition:e}},k=y(L("bounce",!0)),N=(y(L("slide",!0)),y(L("zoom")),y(L("flip")),(0,o.forwardRef)((function(n,e){var t=Z(n),r=t.getToastToRender,a=t.containerRef,s=t.isToastActive,c=n.className,l=n.style,d=n.rtl,f=n.containerId;function p(n){var e=u("Toastify__toast-container","Toastify__toast-container--".concat(n),{"Toastify__toast-container--rtl":d});return h(c)?c({position:n,rtl:d,defaultClassName:e}):u(e,g(c))}return(0,o.useEffect)((function(){e&&(e.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:f},r((function(n,e){var t=e.length?(0,i.Z)({},l):(0,i.Z)((0,i.Z)({},l),{},{pointerEvents:"none"});return o.createElement("div",{className:p(n),style:t,key:"container-".concat(n)},e.map((function(n,t){var r=n.content,a=n.props;return o.createElement(O,(0,i.Z)((0,i.Z)({},a),{},{isIn:s(a.toastId),style:(0,i.Z)((0,i.Z)({},a.style),{},{"--nth":t+1,"--len":e.length}),key:"toast-".concat(a.key)}),r)})))})))})));N.displayName="ToastContainer",N.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:_,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,F=new Map,D=[],j=1;function A(){return""+j++}function z(n){return n&&(m(n.toastId)||p(n.toastId))?n.toastId:A()}function M(n,e){return F.size>0?b.emit(0,n,e):D.push({content:n,options:e}),e.toastId}function B(n,e){return(0,i.Z)((0,i.Z)({},e),{},{type:e&&e.type||n,toastId:z(e)})}function S(n){return function(e,t){return M(e,B(n,t))}}function q(n,e){return M(n,B("default",e))}q.loading=function(n,e){return M(n,B("default",(0,i.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},q.promise=function(n,e,t){var o,r=e.pending,a=e.error,s=e.success;r&&(o=m(r)?q.loading(r,t):q.loading(r.render,(0,i.Z)((0,i.Z)({},t),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(n,e,r){if(null!=e){var a=(0,i.Z)((0,i.Z)((0,i.Z)({type:n},c),t),{},{data:r}),s=m(e)?{render:e}:e;return o?q.update(o,(0,i.Z)((0,i.Z)({},a),s)):q(s.render,(0,i.Z)((0,i.Z)({},a),s)),r}q.dismiss(o)},u=h(n)?n():n;return u.then((function(n){return l("success",s,n)})).catch((function(n){return l("error",a,n)})),u},q.success=S("success"),q.info=S("info"),q.error=S("error"),q.warning=S("warning"),q.warn=q.warning,q.dark=function(n,e){return M(n,B("default",(0,i.Z)({theme:"dark"},e)))},q.dismiss=function(n){F.size>0?b.emit(1,n):D=D.filter((function(e){return null!=n&&e.options.toastId!==n}))},q.clearWaitingQueue=function(n){return void 0===n&&(n={}),b.emit(5,n)},q.isActive=function(n){var e=!1;return F.forEach((function(t){t.isToastActive&&t.isToastActive(n)&&(e=!0)})),e},q.update=function(n,e){void 0===e&&(e={}),setTimeout((function(){var t=function(n,e){var t=e.containerId,o=F.get(t||R);return o&&o.getToast(n)}(n,e);if(t){var o=t.props,r=t.content,a=(0,i.Z)((0,i.Z)((0,i.Z)({delay:100},o),e),{},{toastId:e.toastId||n,updateId:A()});a.toastId!==n&&(a.staleId=n);var s=a.render||r;delete a.render,M(s,a)}}),0)},q.done=function(n){q.update(n,{progress:1})},q.onChange=function(n){return b.on(4,n),function(){b.off(4,n)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b.on(2,(function(n){R=n.containerId||n,F.set(R,n),D.forEach((function(n){b.emit(0,n.content,n.options)})),D=[]})).on(3,(function(n){F.delete(n.containerId||n),0===F.size&&b.off(0).off(1).off(5)}));var H,Q,V,K,Y,G,U,W,X,J,$,nn=t(9434),en=t(168),tn=t(5867),on=tn.ZP.form(H||(H=(0,en.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap:16px;\n  "]))),rn=(tn.ZP.label(Q||(Q=(0,en.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 250px;\n  /* margin: 0 auto; */\n  text-align: left;\n  "]))),tn.ZP.input(V||(V=(0,en.Z)(["\n  /* height: 24px;\n  border: 1px solid black;\n  border-radius: 8px;\n  padding: 2px 16px; */\n  width: 451px;\nheight: 57px;\nflex-shrink: 0;\nborder-radius: 9px;\nborder: 1px solid #ADADAD;\nbackground: #FFF;\ncolor: #808080;\nfont-family: Poppins;\nfont-size: 14px;\nfont-style: normal;\nfont-weight: 300;\nline-height: normal;\npadding: 19px 25px;\n&:focus{\nborder: 1px solid #4285F4;\nbackground: #FFF;}\n  "])))),an=tn.ZP.button(K||(K=(0,en.Z)(["\nwidth: 150px;\nheight: 42px;\nborder-radius: 10px;\nbackground: #779341;\nbox-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);\nborder: 0;\nalign-self: center;\ncursor: pointer;\ncolor: #FFF;\nfont-family: Poppins;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 500;\nline-height: normal;\n    &:hover {\n    background-color: #a756c5;\n  }\n  "]))),sn=t(238),cn=t(940),ln=t(184),un=function(){var n=(0,nn.I0)();return(0,ln.jsxs)(cn.Sn,{children:["Find contact by name",(0,ln.jsx)(rn,{onChange:function(e){return n((0,sn.fW)(e.target.value))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},dn=t(2121),fn=function(){var n=(0,o.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,o.useState)(""),s=(0,a.Z)(i,2),c=s[0],l=s[1],u=(0,nn.v9)((function(n){return n.myContact.contacts})),d=(0,nn.I0)(),f=function(n){"name"===n.target.name?r(n.target.value):l(n.target.value)};return(0,ln.jsx)("div",{children:(0,ln.jsxs)(on,{onSubmit:function(n){n.preventDefault(),u.items.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?q.error("".concat(t," is already in contact !"),{position:q.POSITION.TOP_CENTER}):(d((0,dn.uK)({name:t,number:c})),q.success("You add contact ".concat(t," to your phonebook."),{position:q.POSITION.TOP_CENTER}),n.target.reset())},children:[(0,ln.jsxs)(cn.Sn,{children:["Name",(0,ln.jsx)(rn,{type:"text",placeholder:"Name",name:"name",title:"Name",required:!0,onChange:f})]}),(0,ln.jsxs)(cn.Sn,{children:["Number",(0,ln.jsx)(rn,{type:"tel",name:"phone",placeholder:"Number",pattern:"\\+?[0-9\\s\\-\\(\\)]+",title:"Phone number",required:!0,onChange:f})]}),(0,ln.jsx)(an,{type:"submit",children:"Add contact"})]})})},pn=tn.ZP.ul(Y||(Y=(0,en.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\npadding:0;\n"]))),mn=tn.ZP.li(G||(G=(0,en.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nborder: 1px solid grey;\nborder-radius: 4px;\npadding: 4px;\nwidth: 451px;\n"]))),hn=tn.ZP.div(U||(U=(0,en.Z)(["\ndisplay:flex;\njustify-content: space-around;\nmargin: 0;\n\n"]))),gn=tn.ZP.p(W||(W=(0,en.Z)(["\nmargin: 0;\n"]))),vn=tn.ZP.p(X||(X=(0,en.Z)(["\nmargin: 0;\n"]))),yn=tn.ZP.button(J||(J=(0,en.Z)(["\n  cursor: pointer;\n    padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  background-color: #D8D8D8;\n\n    &:hover {\n    background-color: #a756c5;\n    color: white;\n  }\n  "]))),xn=function(){var n=(0,nn.v9)((function(n){return n.myContact.contacts})),e=(0,nn.v9)((function(n){return n.myContact.filter})),t=(0,nn.I0)();(0,o.useEffect)((function(){t((0,dn.yF)())}),[t]);var r=(0,c.Z)(n.items);r.sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,ln.jsx)(ln.Fragment,{children:(0,ln.jsx)(pn,{children:r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){var e=n.id;return(0,ln.jsxs)(mn,{children:[(0,ln.jsxs)(hn,{children:[(0,ln.jsx)(gn,{children:n.name}),(0,ln.jsxs)(vn,{children:[" : ",n.phone]})]}),(0,ln.jsx)(yn,{onClick:function(){return function(n){t((0,dn.GK)(n)),q.warn("You deleted contact from your phonebook.",{position:q.POSITION.TOP_CENTER})}(e)},children:"delete"})]},n.id)}))})})},bn=tn.ZP.div($||($=(0,en.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap:16px;\n  "]))),Tn=function(){return(0,ln.jsxs)(cn.KD,{children:[(0,ln.jsxs)(bn,{children:[(0,ln.jsxs)(cn.cL,{children:["My Very Own ",(0,ln.jsx)(cn.Pr,{children:"Phone Book"})]}),(0,ln.jsx)(fn,{}),(0,ln.jsx)(cn.cL,{children:"Contacts"}),(0,ln.jsx)(un,{}),(0,ln.jsx)(xn,{})]}),(0,ln.jsx)(N,{})]})}},940:function(n,e,t){t.d(e,{B2:function(){return Z},C5:function(){return x},H0:function(){return v},KD:function(){return g},Pr:function(){return T},Sn:function(){return C},TY:function(){return E},cL:function(){return y},kx:function(){return b},xO:function(){return P}});var o,r,a,i,s,c,l,u,d,f,p=t(168),m=t(5867),h=t(1087),g=m.ZP.div(o||(o=(0,p.Z)(["\nposition: absolute;\ntop: 80px;\nright: 118px;\nwidth: 539px;\nheight: auto;\nmax-height: 85vh;\nborder-radius: 40px;\nbackground: rgba(255, 255, 255, 0.75);\npadding: 44px;\noverflow: auto;\n"]))),v=m.ZP.button(r||(r=(0,p.Z)(["\nwidth: 236px;\nheight: 54px;\nborder-radius: 10px;\nbackground: #779341;\nbox-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);\nborder: 0;\nalign-self: flex-end;\ncursor: pointer;\ncolor: #FFF;\nfont-family: Poppins;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 500;\nline-height: normal;\n"]))),y=m.ZP.p(a||(a=(0,p.Z)(["\ndisplay: inline-block;\ncolor: #000;\nfont-family: Poppins;\nfont-size: 21px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n"]))),x=m.ZP.p(i||(i=(0,p.Z)(["\nposition: absolute;\ntop: 50px;\nright: 44px;\ncolor: #8D8D8D;\nfont-family: Poppins;\nfont-size: 13px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n"]))),b=(0,m.ZP)(h.rU)(s||(s=(0,p.Z)(["\ncolor: #779341;\nfont-family: Poppins;\nfont-size: 13px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n"]))),T=m.ZP.b(c||(c=(0,p.Z)(["\ncolor: #779341;\nfont-family: Poppins;\nfont-size: 21px;\nfont-style: normal;\nfont-weight: 600;\nline-height: normal;\n"]))),E=m.ZP.h1(l||(l=(0,p.Z)(["\ncolor: #000;\nfont-family: Poppins;\nfont-size: 55px;\nfont-style: normal;\nfont-weight: 500;\nline-height: normal;\n"]))),Z=m.ZP.form(u||(u=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 35px;\n"]))),C=m.ZP.label(d||(d=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ncolor: #000;\nfont-family: Poppins;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n"]))),P=m.ZP.input(f||(f=(0,p.Z)(["\nwidth: 451px;\nheight: 57px;\nflex-shrink: 0;\nborder-radius: 9px;\nborder: 1px solid #ADADAD;\nbackground: #FFF;\ncolor: #808080;\nfont-family: Poppins;\nfont-size: 14px;\nfont-style: normal;\nfont-weight: 300;\nline-height: normal;\npadding: 19px 25px;\n&:focus{\nborder: 1px solid #4285F4;\nbackground: #FFF;\n}\n"])))}}]);
//# sourceMappingURL=677.c53ea473.chunk.js.map