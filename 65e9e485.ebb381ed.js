(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(113)),i={id:"updating-to-new-releases",title:"Updating to New Releases"},c={unversionedId:"updating-to-new-releases",id:"updating-to-new-releases",isDocsHomePage:!1,title:"Updating to New Releases",description:"Create React App is divided into two packages:",source:"@site/../docs/updating-to-new-releases.md",slug:"/updating-to-new-releases",permalink:"/cra-docs/docs/updating-to-new-releases",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/updating-to-new-releases.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615709742,sidebar:"docs",previous:{title:"Supported Browsers and Features",permalink:"/cra-docs/docs/supported-browsers-features"},next:{title:"Setting Up Your Editor",permalink:"/cra-docs/docs/setting-up-your-editor"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create React App is divided into two packages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create-react-app")," is a global command-line utility that you use to create new projects."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"react-scripts")," is a development dependency in the generated projects (including this one).")),Object(o.b)("p",null,"When you run ",Object(o.b)("inlineCode",{parentName:"p"},"npx create-react-app my-app")," it automatically installs the latest version of Create React App.  "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", please visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/cra-docs/docs/getting-started"}),"Getting Started")," to learn about current installation steps. ")),Object(o.b)("p",null,"Create React App creates the project with the latest version of ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts")," so you\u2019ll get all the new features and improvements in newly created apps automatically."),Object(o.b)("p",null,"To update an existing project to a new version of ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md"}),"open the changelog"),", find the version you\u2019re currently on (check ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in this folder if you\u2019re not sure), and apply the migration instructions for the newer versions."),Object(o.b)("p",null,"In most cases bumping the ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts")," version in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and running ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install"),") in this folder should be enough, but it\u2019s good to consult the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md"}),"changelog")," for potential breaking changes."),Object(o.b)("p",null,"We commit to keeping the breaking changes minimal so you can upgrade ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts")," painlessly."))}l.isMDXComponent=!0}}]);