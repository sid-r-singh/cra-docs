(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,s(s({ref:t},p),{},{components:a})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(113)),i={id:"making-a-progressive-web-app",title:"Making a Progressive Web App"},s={unversionedId:"making-a-progressive-web-app",id:"making-a-progressive-web-app",isDocsHomePage:!1,title:"Making a Progressive Web App",description:"The production build has all the tools necessary to generate a first-class",source:"@site/../docs/making-a-progressive-web-app.md",slug:"/making-a-progressive-web-app",permalink:"/cra-docs/docs/making-a-progressive-web-app",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/making-a-progressive-web-app.md",version:"current",lastUpdatedBy:"sid-r-singh",lastUpdatedAt:1615709742,sidebar:"docs",previous:{title:"Adding Custom Environment Variables",permalink:"/cra-docs/docs/adding-custom-environment-variables"},next:{title:"Measuring Performance",permalink:"/cra-docs/docs/measuring-performance"}},c=[{value:"Why Opt-in?",id:"why-opt-in",children:[]},{value:"Customization",id:"customization",children:[]},{value:"Offline-First Considerations",id:"offline-first-considerations",children:[]},{value:"Progressive Web App Metadata",id:"progressive-web-app-metadata",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The production build has all the tools necessary to generate a first-class\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/progressive-web-apps/"}),"Progressive Web App"),",\nbut ",Object(o.b)("strong",{parentName:"p"},"the offline/cache-first behavior is opt-in only"),"."),Object(o.b)("p",null,"Starting with Create React App 4, you can add a ",Object(o.b)("inlineCode",{parentName:"p"},"src/service-worker.js")," file to\nyour project to use the built-in support for\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/"}),"Workbox"),"'s\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest"}),Object(o.b)("inlineCode",{parentName:"a"},"InjectManifest")),"\nplugin, which will\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/guides/using-bundlers"}),"compile"),"\nyour service worker and inject into it a list of URLs to\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/guides/precache-files"}),"precache"),"."),Object(o.b)("p",null,"If you start a new project using one of the PWA ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/custom-templates/"}),"custom\ntemplates"),", you'll get a\n",Object(o.b)("inlineCode",{parentName:"p"},"src/service-worker.js")," file that serves as a good starting point for an\noffline-first service worker:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template cra-template-pwa\n")),Object(o.b)("p",null,"The TypeScript equivalent is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template cra-template-pwa-typescript\n")),Object(o.b)("p",null,"If you know that you won't be using service workers, or if you'd prefer to use a\ndifferent approach to creating your service worker, don't create a\n",Object(o.b)("inlineCode",{parentName:"p"},"src/service-worker.js")," file. The ",Object(o.b)("inlineCode",{parentName:"p"},"InjectManifest")," plugin won't be run in that\ncase."),Object(o.b)("p",null,"In addition to creating your local ",Object(o.b)("inlineCode",{parentName:"p"},"src/service-worker.js")," file, it needs to be\nregistered before it will be used. In order to opt-in to the offline-first\nbehavior, developers should look for the following in their\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/index.js"}),Object(o.b)("inlineCode",{parentName:"a"},"src/index.js")),"\nfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://cra.link/PWA\nserviceWorker.unregister();\n")),Object(o.b)("p",null,"As the comment states, switching ",Object(o.b)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," to\n",Object(o.b)("inlineCode",{parentName:"p"},"serviceWorker.register()")," will opt you in to using the service worker."),Object(o.b)("h2",{id:"why-opt-in"},"Why Opt-in?"),Object(o.b)("p",null,"Offline-first Progressive Web Apps are faster and more reliable than traditional\nweb pages, and provide an engaging mobile experience:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All static site assets that are a part of your ",Object(o.b)("inlineCode",{parentName:"li"},"webpack")," build are cached so\nthat your page loads fast on subsequent visits, regardless of network\nconnectivity (such as 2G or 3G). Updates are downloaded in the background."),Object(o.b)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means\nyour users will be able to use your app at 10,000 feet and on the subway."),Object(o.b)("li",{parentName:"ul"},"On mobile devices, your app can be added directly to the user's home screen,\napp icon and all. This eliminates the need for the app store.")),Object(o.b)("p",null,"However, they ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2398"}),"can make debugging deployments more\nchallenging"),"."),Object(o.b)("p",null,"The\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin"}),Object(o.b)("inlineCode",{parentName:"a"},"workbox-webpack-plugin")),"\nis integrated into production configuration, and it will take care of compiling\na service worker file that will automatically precache all of your\n",Object(o.b)("inlineCode",{parentName:"p"},"webpack"),"-generated assets and keep them up to date as you deploy updates. The\nservice worker will use a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"}),"cache-first\nstrategy"),"\nfor handling all requests for ",Object(o.b)("inlineCode",{parentName:"p"},"webpack"),"-generated assets, including ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"}),"navigation\nrequests"),"\nfor your HTML, ensuring that your web app is consistently fast, even on a slow\nor unreliable network."),Object(o.b)("p",null,"Note: Resources that are not generated by ",Object(o.b)("inlineCode",{parentName:"p"},"webpack"),", such as static files that are\ncopied over from your local\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/"}),Object(o.b)("inlineCode",{parentName:"a"},"public/")," directory"),"\nor third-party resources, will not be precached. You can optionally set up Workbox\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/guides/route-requests"}),"routes"),"\nto apply the runtime caching strategy of your choice to those resources."),Object(o.b)("h2",{id:"customization"},"Customization"),Object(o.b)("p",null,"Starting with Create React App 4, you have full control over customizing the\nlogic in this service worker, by creating your own ",Object(o.b)("inlineCode",{parentName:"p"},"src/service-worker.js")," file,\nor customizing the one added by the ",Object(o.b)("inlineCode",{parentName:"p"},"cra-template-pwa")," (or\n",Object(o.b)("inlineCode",{parentName:"p"},"cra-template-pwa-typescript"),") template. You can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/modules"}),"additional\nmodules")," from the\nWorkbox project, add in a push notification library, or remove some of the\ndefault caching logic. The one requirement is that you keep ",Object(o.b)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST"),"\nsomewhere in your file, as the Workbox compilation plugin checks for this value\nwhen generating a manifest of URLs to precache. If you would prefer not to use\nprecaching, you can assign ",Object(o.b)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST")," to a variable that will be\nignored, like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// eslint-disable-next-line no-restricted-globals\nconst ignored = self.__WB_MANIFEST;\n\n// Your custom service worker code goes here.\n")),Object(o.b)("h2",{id:"offline-first-considerations"},"Offline-First Considerations"),Object(o.b)("p",null,"If you do decide to opt-in to service worker registration, please take the\nfollowing into account:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After the initial caching is done, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"}),"service worker lifecycle"),"\ncontrols when updated content ends up being shown to users. In order to guard against\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430"}),"race conditions with lazy-loaded content"),',\nthe default behavior is to conservatively keep the updated service worker in the "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting"}),"waiting"),'"\nstate. This means that users will end up seeing older content until they close (reloading is not\nenough) their existing, open tabs. See ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jeffy.info/2018/10/10/sw-in-c-r-a.html"}),"this blog post"),"\nfor more details about this behavior.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Users aren't always familiar with offline-first web apps. It can be useful to\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption"}),"let the user know"),'\nwhen the service worker has finished populating your caches (showing a "This web\napp works offline!" message) and also let them know when the service worker has\nfetched the latest updates that will be available the next time they load the\npage (showing a "New content is available once existing tabs are closed." message). Showing\nthese messages is currently left as an exercise to the developer, but as a\nstarting point, you can make use of the logic included in ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/serviceWorker.js"}),Object(o.b)("inlineCode",{parentName:"a"},"src/serviceWorker.js")),", which\ndemonstrates which service worker lifecycle events to listen for to detect each\nscenario, and which as a default, only logs appropriate messages to the\nJavaScript console.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Service workers ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https"}),"require HTTPS"),",\nalthough to facilitate local testing, that policy\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385"}),"does not apply to ",Object(o.b)("inlineCode",{parentName:"a"},"localhost")),".\nIf your production web server does not support HTTPS, then the service worker\nregistration will fail, but the rest of your web app will remain functional.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The service worker is only enabled in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/cra-docs/docs/deployment"}),"production environment"),",\ne.g. the output of ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build"),". It's recommended that you do not enable an\noffline-first service worker in a development environment, as it can lead to\nfrustration when previously cached assets are used and do not include the latest\nchanges you've made locally.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you ",Object(o.b)("em",{parentName:"p"},"need")," to test your offline-first service worker locally, build\nthe application (using ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build"),") and run a standard http server from your\nbuild directory. After running the build script, ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," will give\ninstructions for one way to test your production build locally and the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/cra-docs/docs/deployment"}),"deployment instructions")," have\ninstructions for using other methods. ",Object(o.b)("em",{parentName:"p"},"Be sure to always use an\nincognito window to avoid complications with your browser cache."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By default, the generated service worker file will not intercept or cache any\ncross-origin traffic, like HTTP ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/cra-docs/docs/integrating-with-an-api-backend"}),"API requests"),",\nimages, or embeds loaded from a different domain. Starting with Create\nReact App 4, this can be customized, as explained above."))),Object(o.b)("h2",{id:"progressive-web-app-metadata"},"Progressive Web App Metadata"),Object(o.b)("p",null,"The default configuration includes a web app manifest located at\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/manifest.json"}),Object(o.b)("inlineCode",{parentName:"a"},"public/manifest.json")),", that you can customize with\ndetails specific to your web application."),Object(o.b)("p",null,"When a user adds a web app to their homescreen using Chrome or Firefox on\nAndroid, the metadata in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/public/manifest.json"}),Object(o.b)("inlineCode",{parentName:"a"},"manifest.json"))," determines what\nicons, names, and branding colors to use when the web app is displayed.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"}),"The Web App Manifest guide"),"\nprovides more context about what each field means, and how your customizations\nwill affect your users' experience."),Object(o.b)("p",null,"Progressive web apps that have been added to the homescreen will load faster and\nwork offline when there's an active service worker. That being said, the\nmetadata from the web app manifest will still be used regardless of whether or\nnot you opt-in to service worker registration."))}l.isMDXComponent=!0}}]);