(this["webpackJsonpelizaveta-portfolio"]=this["webpackJsonpelizaveta-portfolio"]||[]).push([[7],{61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(62);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function u(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,a,s,o=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(i=a.call(n)).done)&&(o.push(i.value),o.length!==e);u=!0);}catch(t){l=!0,r=t}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw r}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function m(t){var e=i.useRef(t);return f((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],b={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},g=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==p(t,2)[1]}))),n=i.useMemo((function(){return s(s({},b),e)}),[t]),a=n.ref,o=n.startOnMount,u=n.enableReinitialize,l=n.delay,d=n.onEnd,f=n.onStart,g=n.onPauseResume,y=n.onReset,v=n.onUpdate,j=c(n,h),O=i.useRef(),x=i.useRef(),V=i.useRef(!1),w=m((function(){return function(t,e){var n=e.decimal,i=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,p=e.separator,d=e.start,f=e.suffix,m=e.useEasing,h=e.useGrouping,b=e.useIndianSeparators,g=e.enableScrollSpy,y=e.scrollSpyDelay,v=e.scrollSpyOnce,j=e.plugin;return new r.CountUp(t,o,{startVal:d,duration:a,decimal:n,decimalPlaces:i,easingFn:s,formattingFn:u,numerals:l,separator:p,prefix:c,suffix:f,plugin:j,useEasing:m,useIndianSeparators:b,useGrouping:h,enableScrollSpy:g,scrollSpyDelay:y,scrollSpyOnce:v})}("string"===typeof a?a:a.current,j)})),E=m((function(t){var e=O.current;if(e&&!t)return e;var n=w();return O.current=n,n})),S=m((function(){var t=function(){return E(!0).start((function(){null===d||void 0===d||d({pauseResume:F,reset:C,start:P,update:N})}))};l&&l>0?x.current=setTimeout(t,1e3*l):t(),null===f||void 0===f||f({pauseResume:F,reset:C,update:N})})),F=m((function(){E().pauseResume(),null===g||void 0===g||g({reset:C,start:P,update:N})})),C=m((function(){E().el&&(x.current&&clearTimeout(x.current),E().reset(),null===y||void 0===y||y({pauseResume:F,start:P,update:N}))})),N=m((function(t){E().update(t),null===v||void 0===v||v({pauseResume:F,reset:C,start:P})})),P=m((function(){C(),S()})),A=m((function(t){o&&(t&&C(),S())}));return i.useEffect((function(){V.current?u&&A(!0):(V.current=!0,A())}),[u,V,A,l,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){C()}}),[C]),{start:P,pauseResume:F,reset:C,update:N,getCountUp:E}},y=["className","redraw","containerProps","children","style"];e.default=function(t){var e=t.className,n=t.redraw,r=t.containerProps,a=t.children,o=t.style,u=c(t,y),p=i.useRef(null),d=i.useRef(!1),f=g(s(s({},u),{},{ref:p,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),h=f.start,b=f.reset,v=f.update,j=f.pauseResume,O=f.getCountUp,x=m((function(){h()})),V=m((function(e){t.preserveValue||b(),v(e)})),w=m((function(){"function"!==typeof t.children||p.current instanceof Element?O():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){w()}),[w]),i.useEffect((function(){d.current&&V(t.end)}),[t.end,V]);var E=n&&t;return i.useEffect((function(){n&&d.current&&x()}),[x,n,E]),i.useEffect((function(){!n&&d.current&&x()}),[x,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect((function(){d.current=!0}),[]),"function"===typeof a?a({countUpRef:p,start:h,reset:b,update:v,pauseResume:j,getCountUp:O}):i.createElement("span",l({className:e,ref:p,style:o},r),"undefined"!==typeof t.start?O().formattingFn(t.start):"")},e.useCountUp=g},62:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return r}));var i=function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,i,a,s=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){a="";for(var u=3,l=0,c=0,p=n.length;c<p;++c)r.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(a=r.options.separator+a),l++,a=n[p-c-1]+a;n=a}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),s+r.options.prefix+n+i+r.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+window.pageYOffset,r=n.top+n.height+window.pageYOffset;r<e&&r>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>r||i>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},78:function(t,e,n){"use strict";n.r(e);var i=n(3);var r=()=>Object(i.jsx)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20"}),a=n(61),s=n(0);var o=t=>{let{title:e,counter:n,measurement:r}=t;return Object(i.jsxs)("div",{className:"mb-20 sm:mb-0",children:[Object(i.jsxs)("h2",{className:"text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2",children:[n," ",r]}),Object(i.jsx)("span",{className:"font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light",children:e})]})};var u=()=>(Object(a.useCountUp)({ref:"experienceCounter",end:12,duration:2}),Object(a.useCountUp)({ref:"githubStarsCounter",end:20,duration:2}),Object(a.useCountUp)({ref:"feedbackCounter",end:92,duration:2}),Object(a.useCountUp)({ref:"projectsCounter",end:77,duration:2}),Object(i.jsx)("div",{className:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",children:Object(i.jsxs)("div",{className:"font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center",children:[Object(i.jsx)(o,{title:"Years of experience",counter:Object(i.jsx)("span",{id:"experienceCounter"}),measurement:""}),Object(i.jsx)(o,{title:"Stars on GitHub",counter:Object(i.jsx)("span",{id:"githubStarsCounter"}),measurement:"k+"}),Object(i.jsx)(o,{title:"Positive feedback",counter:Object(i.jsx)("span",{id:"feedbackCounter"}),measurement:"%"}),Object(i.jsx)(o,{title:"Projects completed",counter:Object(i.jsx)("span",{id:"projectsCounter"}),measurement:"%"})]})}));const l=[{id:1,bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"}],c=Object(s.createContext)(),p=t=>{let{children:e}=t;const[n,r]=Object(s.useState)(l);return Object(i.jsx)(c.Provider,{value:{aboutMe:n,setAboutMe:r},children:e})};var d=c;var f=t=>{let{title:e,image:n}=t;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("img",{src:n,className:"w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer",alt:e})})};var m=()=>{const{clientsData:t,clientsHeading:e}=Object(s.useContext)(d);return Object(i.jsxs)("div",{className:"mt-10 sm:mt-20",children:[Object(i.jsx)("p",{className:"font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light",children:e}),Object(i.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2",children:t.map((t=>Object(i.jsx)(f,{title:t.title,image:t.img},t.id)))})]})},h=n(37);e.default=()=>Object(i.jsxs)(p,{children:[Object(i.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(i.jsx)(r,{})}),Object(i.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},children:Object(i.jsx)(u,{})}),Object(i.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(i.jsx)(m,{})})]})}}]);
//# sourceMappingURL=7.c102c130.chunk.js.map