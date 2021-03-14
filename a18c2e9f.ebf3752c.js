(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||p;return a?r.a.createElement(d,c(c({ref:t},o),{},{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<p;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),p=(a(0),a(113)),l={id:"custom-templates",title:"Custom Templates"},c={unversionedId:"custom-templates",id:"custom-templates",isDocsHomePage:!1,title:"Custom Templates",description:"Note: this feature is available with react-scripts@3.3.0 and higher.",source:"@site/../docs/custom-templates.md",slug:"/custom-templates",permalink:"/cra-docs/docs/custom-templates",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/custom-templates.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615709742,sidebar:"docs",previous:{title:"Deployment",permalink:"/cra-docs/docs/deployment"},next:{title:"Can I Use Decorators?",permalink:"/cra-docs/docs/can-i-use-decorators"}},i=[{value:"Finding custom templates",id:"finding-custom-templates",children:[]},{value:"Building a template",id:"building-a-template",children:[{value:"Testing a template",id:"testing-a-template",children:[]},{value:"The <code>template</code> folder",id:"the-template-folder",children:[]},{value:"The <code>template.json</code> file",id:"the-templatejson-file",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(p.b)("inlineCode",{parentName:"p"},"react-scripts@3.3.0")," and higher.")),Object(p.b)("p",null,"Custom Templates enable you to select a template to create your project from, while still retaining all of the features of Create React App."),Object(p.b)("p",null,"You'll notice that Custom Templates are always named in the format ",Object(p.b)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),", however you only need to provide the ",Object(p.b)("inlineCode",{parentName:"p"},"[template-name]")," to the creation command."),Object(p.b)("p",null,"Scoped templates are also supported, under the name ",Object(p.b)("inlineCode",{parentName:"p"},"@[scope-name]/cra-template")," or ",Object(p.b)("inlineCode",{parentName:"p"},"@[scope-name]/cra-template-[template-name]"),", which can be installed via ",Object(p.b)("inlineCode",{parentName:"p"},"@[scope]")," and ",Object(p.b)("inlineCode",{parentName:"p"},"@[scope]/[template-name]")," respectively."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template [template-name]\n")),Object(p.b)("h2",{id:"finding-custom-templates"},"Finding custom templates"),Object(p.b)("p",null,"We ship two templates by default:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template"}),Object(p.b)("inlineCode",{parentName:"a"},"cra-template"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"}),Object(p.b)("inlineCode",{parentName:"a"},"cra-template-typescript")))),Object(p.b)("p",null,"However, you can find many great community templates by searching for ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=cra-template-*"}),'"cra-template-',"*",'"')," on npm."),Object(p.b)("h2",{id:"building-a-template"},"Building a template"),Object(p.b)("p",null,"If you're interested in building a custom template, first take a look at how we've built ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template"}),Object(p.b)("inlineCode",{parentName:"a"},"cra-template")),"."),Object(p.b)("p",null,"A template must have the following structure:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),"cra-template-[template-name]/\n  README.md (for npm)\n  template.json\n  package.json\n  template/\n    README.md (for projects created from this template)\n    gitignore\n    public/\n      index.html\n    src/\n      index.js (or index.tsx)\n")),Object(p.b)("h3",{id:"testing-a-template"},"Testing a template"),Object(p.b)("p",null,"To test a template locally, pass the file path to the directory of your template source using the ",Object(p.b)("inlineCode",{parentName:"p"},"file:")," prefix."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]\n")),Object(p.b)("h3",{id:"the-template-folder"},"The ",Object(p.b)("inlineCode",{parentName:"h3"},"template")," folder"),Object(p.b)("p",null,"This folder is copied to the user's app directory as Create React App installs. During this process, the file ",Object(p.b)("inlineCode",{parentName:"p"},"gitignore")," is renamed to ",Object(p.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(p.b)("p",null,"You can add whatever files you want in here, but you must have at least the files specified above."),Object(p.b)("h3",{id:"the-templatejson-file"},"The ",Object(p.b)("inlineCode",{parentName:"h3"},"template.json")," file"),Object(p.b)("p",null,"This is the configuration file for your template. As this is a new feature, more options will be added over time. For now, only a ",Object(p.b)("inlineCode",{parentName:"p"},"package")," key is supported."),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"package")," key lets you provide any keys/values that you want added to the new project's ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),", such as dependencies and any custom scripts that your template relies on."),Object(p.b)("p",null,"Below is an example ",Object(p.b)("inlineCode",{parentName:"p"},"template.json")," file:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "package": {\n    "dependencies": {\n      "eslint-plugin-jsx-a11y": "^6.2.3",\n      "serve": "^11.2.0"\n    },\n    "scripts": {\n      "serve": "serve -s build",\n      "build-and-serve": "npm run build && npm run serve"\n    },\n    "eslintConfig": {\n      "extends": ["react-app", "plugin:jsx-a11y/recommended"],\n      "plugins": ["jsx-a11y"]\n    }\n  }\n}\n')),Object(p.b)("p",null,"Any values you add for ",Object(p.b)("inlineCode",{parentName:"p"},'"dependencies"')," and ",Object(p.b)("inlineCode",{parentName:"p"},'"scripts"')," will be merged with the Create React App defaults. Values for any other keys will be used as-is, replacing any matching Create React App defaults."),Object(p.b)("p",null,"For convenience, we always replace ",Object(p.b)("inlineCode",{parentName:"p"},"npm run")," with ",Object(p.b)("inlineCode",{parentName:"p"},"yarn")," in your custom ",Object(p.b)("inlineCode",{parentName:"p"},'"scripts"'),", as well as in your ",Object(p.b)("inlineCode",{parentName:"p"},"README")," when projects are initialized with yarn."))}s.isMDXComponent=!0}}]);