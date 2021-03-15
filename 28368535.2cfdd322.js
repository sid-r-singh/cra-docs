(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(h,c(c({ref:t},p),{},{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(113)),i={id:"pre-rendering-into-static-html-files",title:"Pre-Rendering into Static HTML Files",sidebar_label:"Pre-Rendering Static HTML"},c={unversionedId:"pre-rendering-into-static-html-files",id:"pre-rendering-into-static-html-files",isDocsHomePage:!1,title:"Pre-Rendering into Static HTML Files",description:"If you\u2019re hosting your build with a static hosting provider you can use react-snapshot or react-snap to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or \u201chydrated\u201d, when the JavaScript bundle has loaded.",source:"@site/../docs/pre-rendering-into-static-html-files.md",slug:"/pre-rendering-into-static-html-files",permalink:"/cra-docs/docs/pre-rendering-into-static-html-files",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/pre-rendering-into-static-html-files.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615778286,sidebar_label:"Pre-Rendering Static HTML",sidebar:"docs",previous:{title:"Can I Use Decorators?",permalink:"/cra-docs/docs/can-i-use-decorators"},next:{title:"Advanced Configuration",permalink:"/cra-docs/docs/advanced-configuration"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you\u2019re hosting your ",Object(o.b)("inlineCode",{parentName:"p"},"build")," with a static hosting provider you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-snapshot"}),"react-snapshot")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stereobooster/react-snap"}),"react-snap")," to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or \u201chydrated\u201d, when the JavaScript bundle has loaded."),Object(o.b)("p",null,"There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes."),Object(o.b)("p",null,"The primary benefit of pre-rendering is that you get the core content of each page ",Object(o.b)("em",{parentName:"p"},"with")," the HTML payload\u2014regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines."),Object(o.b)("p",null,"You can read more about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319"}),"zero-configuration pre-rendering (also called snapshotting) here"),"."))}l.isMDXComponent=!0}}]);