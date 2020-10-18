(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(93)),o=n(97),c={id:"skip",slug:"skip"},l={unversionedId:"commands/skip",id:"commands/skip",isDocsHomePage:!1,title:"skip",description:"| Command | Default key binding | Alias |",source:"@site/docs/commands/skip.md",slug:"/commands/skip",permalink:"/docs/commands/skip",editUrl:"https://github.com/nguyenquangminh0711/ruby_jard/edit/master/website/docs/commands/skip.md",version:"current",sidebar:"docs",previous:{title:"list",permalink:"/docs/commands/list"},next:{title:"exit",permalink:"/docs/commands/exit"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Command"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default key binding"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Alias"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"skip [-a -all]")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"Continue the execution of your program to the end, and skip one or more next breakpoints along the way. This command is useful when you put the ",Object(i.b)("inlineCode",{parentName:"p"},"jard")," command in an iteration or a nested method call."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:"),"\nRuby Jard resets the skip list in the next attachment or when your program exits. If you are running a web server or a background job that prevents your program from stopping (and you have already skipped all breakpoints), your program may not stop and may require a restart to attach again."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"skip      # Continue and skip the first breakpoint\n")),Object(i.b)(o.a,{link:"/img/commands/skip.gif",alt:"Skip example",mdxType:"LinkedImage"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"skip 2    # Continue and skip the first 2 breakpoints\n")),Object(i.b)(o.a,{link:"/img/commands/skip-2.gif",alt:"Multiple skip example",mdxType:"LinkedImage"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"skip -a    # Continue and skip all breakpoints\nskip --all # Continue and skip all breakpoints\n")),Object(i.b)(o.a,{link:"/img/commands/skip-all.gif",alt:"Skip all example",mdxType:"LinkedImage"}))}s.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},95:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(94),a=n(96);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},96:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),i=n(95),o=function(e){var t=e.link,n=e.alt;return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{target:"_blank",href:Object(i.a)(t),style:{display:"block"}},a.a.createElement("div",{style:{lineHeight:0,display:"inline-block"}},a.a.createElement("img",{alt:n,src:Object(i.a)(t),style:{borderRadius:"7px"}}),a.a.createElement("div",{className:"alert alert--secondary",style:{padding:"1.5rem"}},n,". Click to enlarge."))),a.a.createElement("br",null))}}}]);