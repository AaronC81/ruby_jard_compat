(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(93)),c={id:"frame",slug:"frame"},i={unversionedId:"commands/frame",id:"commands/frame",isDocsHomePage:!1,title:"frame",description:"| Command | Default key binding | Alias |",source:"@site/docs/commands/frame.md",slug:"/commands/frame",permalink:"/docs/commands/frame",editUrl:"https://github.com/nguyenquangminh0711/ruby_jard/edit/master/website/docs/commands/frame.md",version:"current",sidebar:"docs",previous:{title:"down",permalink:"/docs/commands/down"},next:{title:"list",permalink:"/docs/commands/list"}},m=[],p={rightToc:m};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Command"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default key binding"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Alias"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"frame [-h] [frame_id]")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(o.b)("p",null,"Explore a particular frame with id ",Object(o.b)("inlineCode",{parentName:"p"},"<frame_id>"),". This is faster than ",Object(o.b)("inlineCode",{parentName:"p"},"up")," and ",Object(o.b)("inlineCode",{parentName:"p"},"down"),". See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/commands/up"}),"up docs")," for more information."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/commands/up"}),"up"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/commands/down"}),"down"),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/commands/frame"}),"frame")," commands respect ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/filter"}),"filter"),". All hidden frames are ignored, all C frames are ignored too."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"frame 0     # Jump to frame 0\nframe 7     # Jump to frame 7\n")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,s=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return n?a.a.createElement(s,i(i({ref:t},p),{},{components:n})):a.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);