(this["webpackJsonpelizaveta-portfolio"]=this["webpackJsonpelizaveta-portfolio"]||[]).push([[0],{19:function(e,t,a){"use strict";var r=a(3);t.a=function(e){let{title:t}=e;return Object(r.jsx)("button",{children:t})}},22:function(e,t,a){"use strict";var r=a(0);t.a=()=>{const[e,t]=Object(r.useState)(localStorage.theme),a="dark"===e?"light":"dark";return Object(r.useEffect)((()=>{const t=window.document.documentElement;t.classList.remove(a),t.classList.add(e),localStorage.setItem("theme",e)}),[e,a]),[a,t]}},25:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);a(25);var r=a(38),s=a(0),l=a(18),i=a(4);var n=()=>{const{pathname:e}=Object(i.m)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},c=a(8),d=a(3);var o=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/elizaveta-ra",target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-rosa-600 dark:hover:text-rosa-300 ml-1 duration-500",children:"Elizaveta Ragozina"})]})})};const m=[{id:1,icon:Object(d.jsx)(c.d,{}),url:"https://github.com/elizavetaRa"},{id:2,icon:Object(d.jsx)(c.e,{}),url:"https://www.linkedin.com/in/elizaveta-ra"}];var x=()=>Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((e=>Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-rosa-500 dark:hover:text-rosa-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)))})]}),Object(d.jsx)(o,{})]})}),j=a(22),b=a(37),h=a(19);const g=["Web Application","UI/UX Design","Other"];var u=e=>{let{onClose:t,onRequest:a}=e;return Object(d.jsxs)(b.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"Contact Form"}),Object(d.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(d.jsx)(c.m,{className:"text-3xl"})})]}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:"max-w-xl m-4 text-left",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("select",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category",children:g.map((e=>Object(d.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Your message"})}),Object(d.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(d.jsx)("span",{onClick:t,type:"submit",className:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-rosa-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(d.jsx)(h.a,{title:"Send Request"})})})]})})]})})})]})};var O=()=>{const[e,t]=Object(s.useState)(!1),[a,r]=Object(s.useState)(!1),[i,n]=Object(j.a)();function o(){a?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),r(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),r(!0))}return Object(d.jsxs)(b.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{className:"w-7",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",className:"w-7 rounded-lg",alt:"Logo"})})}),Object(d.jsx)("div",{onClick:()=>n(i),"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===i?Object(d.jsx)(c.i,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(c.k,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){t(!e)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:e?Object(d.jsx)(c.m,{className:"text-3xl"}):Object(d.jsx)(c.h,{className:"text-3xl"})})})})]}),Object(d.jsx)("div",{className:e?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:o,className:"font-general-medium sm:hidden block text-left text-md bg-rosa-500 hover:bg-rosa-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Contact Me Button",children:Object(d.jsx)(h.a,{title:"Contact Me"})})})}),Object(d.jsx)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"}),Object(d.jsx)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:o,className:"text-md font-general-medium bg-rosa-500 hover:bg-rosa-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Contact me Button",children:Object(d.jsx)(h.a,{title:"Contact me"})})})})]}),Object(d.jsxs)("div",{children:[a?Object(d.jsx)(u,{onClose:o,onRequest:o}):null,a?o:null]})]})};a(34);var p=()=>{const[e,t]=Object(s.useState)(!1);Object(s.useEffect)((()=>(window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)})));const a=()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)};return window.addEventListener("scroll",a),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(c.b,{className:"scrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:e?"flex":"none",padding:5}})})};const f=Object(s.lazy)((()=>a.e(7).then(a.bind(null,78)))),w=Object(s.lazy)((()=>a.e(8).then(a.bind(null,77)))),y=Object(s.lazy)((()=>a.e(3).then(a.bind(null,80)))),k=Object(s.lazy)((()=>a.e(4).then(a.bind(null,75)))),v=Object(s.lazy)((()=>Promise.all([a.e(5),a.e(6)]).then(a.bind(null,79))));var A=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(n,{}),Object(d.jsx)(O,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(i.a,{path:"projects",element:Object(d.jsx)(k,{})}),Object(d.jsx)(i.a,{path:"projects/:projectId",element:Object(d.jsx)(v,{})}),Object(d.jsx)(i.a,{path:"about",element:Object(d.jsx)(f,{})}),Object(d.jsx)(i.a,{path:"contact",element:Object(d.jsx)(w,{})})]})}),Object(d.jsx)(x,{})]}),Object(d.jsx)(p,{})]})})};var E=e=>{e&&e instanceof Function&&a.e(9).then(a.bind(null,76)).then((t=>{let{getCLS:a,getFID:r,getFCP:s,getLCP:l,getTTFB:i}=t;a(e),r(e),s(e),l(e),i(e)}))},N=a(24);const B=document.getElementById("root");Object(N.createRoot)(B).render(Object(d.jsx)(A,{})),E()}},[[35,1,2]]]);
//# sourceMappingURL=main.b6a6f270.chunk.js.map