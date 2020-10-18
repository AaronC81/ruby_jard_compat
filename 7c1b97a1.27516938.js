(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{131:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/256-e5124b0d78dd15326926598d3fc697ed.png"},132:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/256-light-c72d6d75e2c259a5a37f78579945cd06.png"},133:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deep-space-f166cc11f5e83b828a32f667d98f2d86.png"},134:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gruvbox-00824956933cc66397ebebd0f0977b25.png"},135:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/one-half-dark-9b03495e2d454d1113ec4ba616057954.png"},136:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/one-half-light-ecfe3678b159888a4331ceb3aeda45ac.png"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(6),o=(n(0),n(93)),a={id:"Color schemes",slug:"color-schemes"},i={unversionedId:"guides/Color schemes",id:"guides/Color schemes",isDocsHomePage:!1,title:"Color schemes",description:"Ruby Jard bundles 6 built-in schemes: 4 dark ones and 2 light ones. You can use color scheme commands to set the current scheme, or define in configuration file.",source:"@site/docs/guides/color_schemes.md",slug:"/guides/color-schemes",permalink:"/docs/guides/color-schemes",editUrl:"https://github.com/nguyenquangminh0711/ruby_jard/edit/master/website/docs/guides/color_schemes.md",version:"current",sidebar:"docs",previous:{title:"Key bindings",permalink:"/docs/guides/key-bindings"},next:{title:"Configurations",permalink:"/docs/guides/configurations"}},s=[{value:"256",id:"256",children:[]},{value:"256-light",id:"256-light",children:[]},{value:"Deep space",id:"deep-space",children:[]},{value:"Gruvbox",id:"gruvbox",children:[]},{value:"One half dark",id:"one-half-dark",children:[]},{value:"One half light",id:"one-half-light",children:[]},{value:"Your custom theme",id:"your-custom-theme",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ruby Jard bundles 6 built-in schemes: 4 dark ones and 2 light ones. You can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/commands/color-scheme"}),"color scheme commands")," to set the current scheme, or define in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/configurations"}),"configuration file"),"."),Object(o.b)("h3",{id:"256"},"256"),Object(o.b)("p",null,"Default scheme. 256 basic colors, supported by all terminals"),Object(o.b)("p",null,Object(o.b)("img",{alt:"256 Color scheme",src:n(131).default})),Object(o.b)("h3",{id:"256-light"},"256-light"),Object(o.b)("p",null,"Light 256 basic colors"),Object(o.b)("p",null,Object(o.b)("img",{alt:"256-light Color scheme",src:n(132).default})),Object(o.b)("h3",{id:"deep-space"},"Deep space"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Deep space color scheme",src:n(133).default})),Object(o.b)("h3",{id:"gruvbox"},"Gruvbox"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Gruvbox color scheme",src:n(134).default})),Object(o.b)("h3",{id:"one-half-dark"},"One half dark"),Object(o.b)("p",null,Object(o.b)("img",{alt:"One half dark color scheme",src:n(135).default})),Object(o.b)("h3",{id:"one-half-light"},"One half light"),Object(o.b)("p",null,Object(o.b)("img",{alt:"One half light color scheme",src:n(136).default})),Object(o.b)("h3",{id:"your-custom-theme"},"Your custom theme"),Object(o.b)("p",null,"Add these lines into your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/configurations"}),"configuration file"),". Ruby Jard supports two types of colors: 24-bit color and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ANSI_escape_code"}),"ANSI 8-bit color"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class MyColorScheme < ColorScheme\n  GRAY1      = '#1b202a'\n  GRAY2      = '#232936'\n  GRAY3      = '#323c4d'\n  GRAY4      = '#51617d'\n  GRAY5      = '#9aa7bd'\n  WHITE      = '#fff'\n  RED        = '#b15e7c'\n  GREEN      = '#80b57b'\n  YELLOW     = '#e8cb6b'\n  BLUE       = '#78b5ff'\n  PURPLE     = '#b08aed'\n  CYAN       = '#56adb7'\n  ORANGE     = '#f28d5e'\n  PINK       = '#c47ebd'\n\n  BACKGROUND = GRAY1\n  STYLES = {\n    background:        [WHITE, BACKGROUND],\n    border:            [GRAY3, BACKGROUND],\n    title:             [GRAY2, BLUE],\n    title_secondary:   [WHITE, GRAY3],\n    title_background:  [GRAY2, GRAY2],\n    text_primary:      [GRAY5, BACKGROUND],\n    text_dim:          [GRAY4, BACKGROUND],\n    text_highlighted:  [BLUE, BACKGROUND],\n    text_special:      [ORANGE, BACKGROUND],\n    text_selected:     [GREEN, BACKGROUND],\n    keyword:           [BLUE, BACKGROUND],\n    method:            [YELLOW, BACKGROUND],\n    comment:           [GRAY4, BACKGROUND],\n    literal:           [RED, BACKGROUND],\n    string:            [GREEN, BACKGROUND],\n    local_variable:    [PURPLE, BACKGROUND],\n    instance_variable: [PURPLE, BACKGROUND],\n    constant:          [BLUE, BACKGROUND],\n    normal_token:      [GRAY5, BACKGROUND],\n    object:            [CYAN, BACKGROUND]\n  }.freeze\nend\n\nRubyJard::ColorSchemes.add_color_scheme('my-color', MyColorScheme)\nconfig.color_scheme = \"my-color\"\n")))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(a,".").concat(p)]||d[p]||b[p]||o;return n?c.a.createElement(f,i(i({ref:t},l),{},{components:n})):c.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);