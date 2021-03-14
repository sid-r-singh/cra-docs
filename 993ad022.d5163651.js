(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(113)),s={id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},i={unversionedId:"adding-a-sass-stylesheet",id:"adding-a-sass-stylesheet",isDocsHomePage:!1,title:"Adding a Sass Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-sass-stylesheet.md",slug:"/adding-a-sass-stylesheet",permalink:"/cra-docs/docs/adding-a-sass-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-a-sass-stylesheet.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615709742,sidebar_label:"Adding Sass Stylesheets",sidebar:"docs",previous:{title:"Adding a CSS Modules Stylesheet",permalink:"/cra-docs/docs/adding-a-css-modules-stylesheet"},next:{title:"Adding a CSS Reset",permalink:"/cra-docs/docs/adding-css-reset"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(r.b)("p",null,"Generally, we recommend that you don\u2019t reuse the same CSS classes across different components. For example, instead of using a ",Object(r.b)("inlineCode",{parentName:"p"},".Button")," CSS class in ",Object(r.b)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<RejectButton>")," components, we recommend creating a ",Object(r.b)("inlineCode",{parentName:"p"},"<Button>")," component with its own ",Object(r.b)("inlineCode",{parentName:"p"},".Button")," styles, that both ",Object(r.b)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<RejectButton>")," can render (but ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/composition-vs-inheritance.html"}),"not inherit"),")."),Object(r.b)("p",null,"Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable."),Object(r.b)("p",null,"To use Sass, first install ",Object(r.b)("inlineCode",{parentName:"p"},"node-sass"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install node-sass --save\n$ # or\n$ yarn add node-sass\n")),Object(r.b)("p",null,"Now you can rename ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.css")," to ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss")," and update ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.js")," to import ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss"),".\nThis file and any other file will be automatically compiled if imported with the extension ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," or ",Object(r.b)("inlineCode",{parentName:"p"},".sass"),"."),Object(r.b)("p",null,"To share variables between Sass files, you can use Sass imports. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.scss")," and other component style files could include ",Object(r.b)("inlineCode",{parentName:"p"},'@import "./shared.scss";')," with variable definitions."),Object(r.b)("p",null,"This will allow you to do imports like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/_colors.scss'; // assuming a styles directory under src/\n@import '~nprogress/nprogress'; // importing a css file from the nprogress node module\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," You must prefix imports from ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," with ",Object(r.b)("inlineCode",{parentName:"p"},"~")," as displayed above.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"node-sass")," also supports the ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH")," variable."),Object(r.b)("p",null,"To use imports relative to a path you specify, and from ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," without adding the ",Object(r.b)("inlineCode",{parentName:"p"},"~")," prefix, you can add a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env"}),Object(r.b)("inlineCode",{parentName:"a"},".env")," file")," at the project root with the variable ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),". To specify more directories you can add them to ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH")," separated by a ",Object(r.b)("inlineCode",{parentName:"p"},":")," like ",Object(r.b)("inlineCode",{parentName:"p"},"path1:path2:path3"),"."),Object(r.b)("p",null,"If you set ",Object(r.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),", this will allow you to do imports like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/colors'; // assuming a styles directory under src/, where _colors.scss partial file exists.\n@import 'nprogress/nprogress'; // importing a css file from the nprogress node module\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," For windows operating system, use below syntax"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"SASS_PATH=./node_modules;./src\n"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Tip:")," You can opt into using this feature with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cra-docs/docs/adding-a-css-modules-stylesheet"}),"CSS modules")," too!")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," If you're using Flow, override the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org/en/docs/config/options/#toc-module-file-ext-string"}),"module.file_ext")," setting in your ",Object(r.b)("inlineCode",{parentName:"p"},".flowconfig")," so it'll recognize ",Object(r.b)("inlineCode",{parentName:"p"},".sass")," or ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," files. You will also need to include the ",Object(r.b)("inlineCode",{parentName:"p"},"module.file_ext")," default settings for ",Object(r.b)("inlineCode",{parentName:"p"},".js"),", ",Object(r.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(r.b)("inlineCode",{parentName:"p"},".mjs")," and ",Object(r.b)("inlineCode",{parentName:"p"},".json")," files."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[options]\nmodule.file_ext=.js\nmodule.file_ext=.jsx\nmodule.file_ext=.mjs\nmodule.file_ext=.json\nmodule.file_ext=.sass\nmodule.file_ext=.scss\n"))))}p.isMDXComponent=!0}}]);