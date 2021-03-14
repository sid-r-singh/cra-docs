(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),s=(n(0),n(113)),o={id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},i={unversionedId:"adding-css-reset",id:"adding-css-reset",isDocsHomePage:!1,title:"Adding a CSS Reset",description:"This project setup uses [PostCSS Normalize] for adding a [CSS Reset].",source:"@site/../docs/adding-css-reset.md",slug:"/adding-css-reset",permalink:"/cra-docs/docs/adding-css-reset",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-css-reset.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615709742,sidebar_label:"Adding CSS Reset",sidebar:"docs",previous:{title:"Adding a Sass Stylesheet",permalink:"/cra-docs/docs/adding-a-sass-stylesheet"},next:{title:"Post-Processing CSS",permalink:"/cra-docs/docs/post-processing-css"}},c=[{value:"<code>index.css</code>",id:"indexcss",children:[]},{value:"Browser support",id:"browser-support",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This project setup uses ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/csstools/postcss-normalize"}),"PostCSS Normalize")," for adding a ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cssreset.com/what-is-a-css-reset/"}),"CSS Reset"),"."),Object(s.b)("p",null,"To start using it, add ",Object(s.b)("inlineCode",{parentName:"p"},"@import-normalize;")," anywhere in your CSS file(s). You only need to include it once and duplicate imports are automatically removed. Since you only need to include it once, a good place to add it is ",Object(s.b)("inlineCode",{parentName:"p"},"index.css")," or ",Object(s.b)("inlineCode",{parentName:"p"},"App.css"),"."),Object(s.b)("h2",{id:"indexcss"},Object(s.b)("inlineCode",{parentName:"h2"},"index.css")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"@import-normalize; /* bring in normalize.css styles */\n\n/* rest of app styles */\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Tip"),': If you see an "',Object(s.b)("em",{parentName:"p"},"Unknown at rule @import-normalize css(unknownAtRules)"),'" warning in VSCode, change the ',Object(s.b)("inlineCode",{parentName:"p"},"css.lint.unknownAtRules")," setting to ",Object(s.b)("inlineCode",{parentName:"p"},"ignore"),".")),Object(s.b)("p",null,"You can control which parts of ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/csstools/normalize.css"}),"normalize.css")," to use via your project's ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist"),"."),Object(s.b)("p",null,"Results when ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(s.b)("inlineCode",{parentName:"p"},"last 3 versions"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(s.b)("p",null,"Results when ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(s.b)("inlineCode",{parentName:"p"},"last 2 versions"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(s.b)("h2",{id:"browser-support"},"Browser support"),Object(s.b)("p",null,"Browser support is dictated by what normalize.css ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/csstools/normalize.css#browser-support"}),"supports"),". As of this writing, it includes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Chrome (last 3)"),Object(s.b)("li",{parentName:"ul"},"Edge (last 3)"),Object(s.b)("li",{parentName:"ul"},"Firefox (last 3)"),Object(s.b)("li",{parentName:"ul"},"Firefox ESR"),Object(s.b)("li",{parentName:"ul"},"Opera (last 3)"),Object(s.b)("li",{parentName:"ul"},"Safari (last 3)"),Object(s.b)("li",{parentName:"ul"},"iOS Safari (last 2)"),Object(s.b)("li",{parentName:"ul"},"Internet Explorer 9+")))}p.isMDXComponent=!0}}]);