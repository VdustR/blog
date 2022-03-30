"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7678],{2597:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(9496);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(f,i(i({ref:e},c),{},{components:a})):n.createElement(f,i({ref:e},c))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5482:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(4584),o=a(9229),r=(a(9496),a(2597)),i=["components"],l={description:"\u56e0\u70ba\u756b\u5716\u7684\u9700\u8981\uff0c\u505a\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u7b49\u6bd4\u4f8b\u8a08\u7b97\u6a5f\u3002\u9019\u7bc7\u9664\u4e86\u5c55\u793a\u6210\u679c\u4e4b\u5916\u4e5f\u6703\u5c31\u4f7f\u7528\u7684 Jotai \u7684\u5fc3\u5f97\u505a\u4e00\u4e9b\u7c21\u55ae\u7684\u8a0e\u8ad6\uff0c\u4e5f\u5305\u542b\u548c zustand \u548c React context \u7684\u6bd4\u8f03\u3002",authors:["ViPro"],tags:["react","jotai","zustand","context","react"]},u="Aspect Ratio Calculator with Jotai \ud83d\udc7b",s={permalink:"/blog/2022/03/30/aspect-ratio-calculator",source:"@site/blog/2022/03/30/aspect-ratio-calculator.mdx",title:"Aspect Ratio Calculator with Jotai \ud83d\udc7b",description:"\u56e0\u70ba\u756b\u5716\u7684\u9700\u8981\uff0c\u505a\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u7b49\u6bd4\u4f8b\u8a08\u7b97\u6a5f\u3002\u9019\u7bc7\u9664\u4e86\u5c55\u793a\u6210\u679c\u4e4b\u5916\u4e5f\u6703\u5c31\u4f7f\u7528\u7684 Jotai \u7684\u5fc3\u5f97\u505a\u4e00\u4e9b\u7c21\u55ae\u7684\u8a0e\u8ad6\uff0c\u4e5f\u5305\u542b\u548c zustand \u548c React context \u7684\u6bd4\u8f03\u3002",date:"2022-03-30T00:00:00.000Z",formattedDate:"2022\u5e743\u670830\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"jotai",permalink:"/blog/tags/jotai"},{label:"zustand",permalink:"/blog/tags/zustand"},{label:"context",permalink:"/blog/tags/context"}],readingTime:5.29,truncated:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"\u56e0\u70ba\u756b\u5716\u7684\u9700\u8981\uff0c\u505a\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u7b49\u6bd4\u4f8b\u8a08\u7b97\u6a5f\u3002\u9019\u7bc7\u9664\u4e86\u5c55\u793a\u6210\u679c\u4e4b\u5916\u4e5f\u6703\u5c31\u4f7f\u7528\u7684 Jotai \u7684\u5fc3\u5f97\u505a\u4e00\u4e9b\u7c21\u55ae\u7684\u8a0e\u8ad6\uff0c\u4e5f\u5305\u542b\u548c zustand \u548c React context \u7684\u6bd4\u8f03\u3002",authors:["ViPro"],tags:["react","jotai","zustand","context","react"]},nextItem:{title:"unplugin-transform-imports",permalink:"/blog/2022/03/26/unplugin-transform-imports"}},c={authorsImageUrls:[void 0]},p=[{value:"Aspect Ratio Calculator",id:"aspect-ratio-calculator",level:2},{value:"Zustand",id:"zustand",level:2},{value:"Jotai",id:"jotai",level:2},{value:"\u6bd4\u8f03",id:"\u6bd4\u8f03",level:2},{value:"\u500b\u4eba\u7e3d\u7d50",id:"\u500b\u4eba\u7e3d\u7d50",level:2}],m={toc:p};function d(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u56e0\u70ba\u756b\u5716\u7684\u9700\u8981\uff0c\u505a\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u7b49\u6bd4\u4f8b\u8a08\u7b97\u6a5f\u3002"),(0,r.kt)("p",null,"\u9019\u7bc7\u9664\u4e86\u5c55\u793a\u6210\u679c\u4e4b\u5916\u4e5f\u6703\u5c31\u4f7f\u7528\u7684 Jotai \u7684\u5fc3\u5f97\u505a\u4e00\u4e9b\u7c21\u55ae\u7684\u8a0e\u8ad6\uff0c\u4e5f\u5305\u542b\u548c zustand \u548c React context \u7684\u6bd4\u8f03\u3002"),(0,r.kt)("h2",{id:"aspect-ratio-calculator"},"Aspect Ratio Calculator"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/aspect-ratio-calculator-77cxz7?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:500,border:0,borderRadius:4,overflow:"hidden"},title:"Aspect Ratio Calculator",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://77cxz7.csb.app/"},"\ud83d\udc49 Open preview")),(0,r.kt)("h2",{id:"zustand"},"Zustand"),(0,r.kt)("p",null,"\u5728\u9019\u4e4b\u524d\u6211\u500b\u4eba\u6bd4\u8f03\u5e38\u4f7f\u7528\u7684 state management \u662f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand"},"zustand")," \u3002\u7576\u521d\u5148\u5617\u8a66 zustand \u7684\u52d5\u6a5f\uff0c\u5176\u5be6\u662f\u4f86\u81ea\u4e00\u5c01 ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildable.dev/"},"Buildable.dev")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/spataroinc"},"Daniel Spataro")," \u7684\u4fe1\uff0c\u88e1\u9762\u4ecb\u7d39\u4e86\u4ed6\u5011\u5bb6\u7684\u7522\u54c1\uff0c\u53e6\u5916\u4e5f\u63a8\u85a6\u6211\u5617\u8a66\u4f7f\u7528 zustand \u3002\u7814\u7a76\u4e86\u4e00\u4e0b\u6587\u4ef6\u4e4b\u5f8c\u89ba\u5f97 zustand \u7684 API \u975e\u5e38\u7c21\u55ae\uff0c bundle size \u4e5f\u975e\u5e38\u5c0f\uff0c\u4e26\u4e14\u53ef\u4ee5\u8f15\u6613\u5730\u548c React tree \u4e4b\u5916\u7684\u6771\u897f\u4e92\u52d5\uff0c\u4f8b\u5982\uff1a\u6211\u5011\u4e4b\u524d\u5c31\u6709\u5728 axios instance \u7684 interceptors \u88e1\u9762\u66f4\u65b0 request token \uff0c\u800c\u9019\u500b token \u6b63\u597d\u5c31\u80fd\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand#using-zustand-without-react"},"zustand/vallina")," \u4f86\u7ba1\u7406\uff0c\u4f7f react \u5916\u7684\u8cc7\u6599\u53ef\u4ee5\u548c react components \u4e92\u52d5\u3002\u4e3b\u8981\u662f\u5728 refresh token \u5931\u6557\u7684\u6642\u5019\u6703\u5c07\u8a72 store \u6e05\u7a7a\uff0c\u89f8\u767c react component \u986f\u793a\u5df2\u767b\u51fa\u7684\u63d0\u793a\u3002"),(0,r.kt)("h2",{id:"jotai"},"Jotai"),(0,r.kt)("p",null,"\u4e00\u958b\u59cb\u662f\u60f3\u627e zustand memo computed \u7684\u65b9\u6cd5\uff0c\u5f8c\u4f86\u627e\u5230\u9019\u7bc7: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand/issues/132"},"Using getter to calculate computed values #132")," \uff0c\u6c7a\u5b9a\u5617\u8a66\u4f7f\u7528 Jotai \u3002"),(0,r.kt)("h2",{id:"\u6bd4\u8f03"},"\u6bd4\u8f03"),(0,r.kt)("p",null,"\u5efa\u8b70\u53ef\u4ee5\u5148\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dai-shi"},"dai-shi")," \u5beb\u7684\u6bd4\u8f03\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai/issues/13"},"How is jotai different from zustand? #13")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jotai.org/docs/basics/comparison#how-is-jotai-different-from-zustand?"},"How is Jotai different from Zustand?"))),(0,r.kt)("p",null,"\u5169\u8005\u7684\u8a2d\u8a08\u65b9\u5411\u5b8c\u5168\u4e0d\u4e00\u6a23\uff0c\u89e3\u6c7a\u4e0d\u4e00\u6a23\u7684\u554f\u984c\u3002\u6211\u500b\u4eba\u662f\u8a8d\u70ba\u8996\u60c5\u6cc1\u5169\u500b\u90fd\u4f7f\u7528\u4e5f\u6c92\u4ec0\u9ebc\u554f\u984c\u3002\u6211\u4e3b\u8981\u6703\u63d0\u4e00\u4e9b\u5728\u4e0a\u9762\u6587\u7ae0\u4ee5\u5916\u7684\u60f3\u6cd5\u3002"),(0,r.kt)("p",null,"\u5148\u5f9e\u6211\u4e00\u958b\u59cb\u7684\u9700\u6c42\u958b\u59cb\u8aaa\u8d77\u3002"),(0,r.kt)("p",null,"\u5728 zustand \u4e2d\u5982\u679c\u8981 memo computed value \uff0c\u4e00\u822c\u6703\u9019\u6a23\u505a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Memoizing selectors\n * https://github.com/pmndrs/zustand#memoizing-selectors\n */\nconst selector: Parameters<typeof useStore>[0] = ({ myValue }) => ({ myValue });\n\nfunction MyComponent() {\n  const { myValue } = useStore(selector);\n  const computedValue = useMemo(() => heavyComputeFn(myValue), [myValue]);\n  /* ... */\n}\n")),(0,r.kt)("p",null,"\u50cf\u9019\u6a23\u7684\u60c5\u6cc1\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"MyComponent")," \u88ab\u62ff\u4f86\u4e00\u6b21\u6e32\u67d3\u591a\u500b Node \u6216\u662f\u6709\u5176\u4ed6 component \u4f7f\u7528\u540c\u6a23\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"heavyComputeFn()")," \uff0c\u76f8\u540c\u7684\u8a08\u7b97\u5c31\u6703\u88ab\u91cd\u8907\u57f7\u884c\uff1b"),(0,r.kt)("p",null,"Jotai \u7684\u65b9\u5f0f\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const derivedAtom = atom((get) => heavyComputeFn(get(myAtom)));\n\nfunction MyComponent() {\n  const computedValue = useAtomValue(derivedAtom);\n  /* ... */\n}\n")),(0,r.kt)("p",null,"\u76f8\u540c\u7684\u60c5\u6cc1\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"heavyComputeFn()")," \u5c31\u53ea\u6703\u57f7\u884c\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u89e3\u6c7a\u4e0a\u9762\u7684\u9700\u6c42\u5916\uff0c Jotai \u9084\u6709\u4ee5\u4e0b\u512a\u9ede\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jotai \u4e0d\u9700\u8981\u505a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand#memoizing-selectors"},"zustand Memoizing selectors")," \u7684\u512a\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"Jotai atom \u53ef\u4ee5\u81ea\u8a02 update function \uff0c\u901a\u5e38\u6703\u8a2d\u8a08\u5f97\u6709\u9ede\u50cf reducer \uff0c\u9019\u500b\u90e8\u5206\u96d6\u7136\u6211\u6bd4\u8f03\u559c\u6b61 zustand \u7684\u5beb\u6cd5\uff0c\u4f46\u4e00\u822c\u7684\u4f7f\u7528\u60c5\u6cc1\u4e0b zustand \u53ea\u80fd\u4f7f\u7528\u540c\u4e00\u500b store \u5167\u7684\u8cc7\u6599\uff0c\u800c jotai \u53ef\u4ee5\u81ea\u7531\u5730\u4f9d\u8cf4\u5176\u4ed6 atom\u3002\u500b\u4eba\u5341\u5206\u5efa\u8b70\u628a\u908f\u8f2f\u53ef\u80fd\u6703\u88ab\u5171\u7528\u7684\u90e8\u5206\u90fd\u4f7f\u7528 atom \u4f86\u8655\u7406\uff0c\u6c92\u7528\u5230\u7684\u6642\u5019\u90fd\u4e0d\u6703\u88ab\u57f7\u884c\uff0c\u57f7\u884c\u7684\u6642\u5019\u6700\u591a\u4e5f\u53ea\u6709\u4e00\u6b21\uff0c\u800c\u56e0\u70ba atom \u90fd\u662f\u540c\u4e00\u500b instance \u6240\u4ee5 atom props \u7684\u50b3\u905e\u4e5f\u4e0d\u6703\u9020\u6210 re-render \u3002")),(0,r.kt)("p",null,"\u5169\u8005\u7684 Provider \u90fd\u7121\u6cd5\u53d6\u4ee3 Context Provider \uff0c\u4ed6\u5011\u7684 props \u90fd\u662f initial value \u800c\u4e0d\u80fd always computed \u3002 \u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/aspect-ratio-calculator-77cxz7"},"Aspect Ratio Calculator")," \u5167\u6211\u5c07 atom \u5168\u90e8\u90fd\u4e1f\u9032 Context Provider \u4e2d\uff0c\u96d6\u7136\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\u6c92\u6709\u660e\u986f\u7684\u6548\u679c\uff0c\u4f46\u5982\u679c\u76f8\u540c computed atom value \u5982\u679c\u5728\u591a\u500b component \u88ab\u91cd\u8907\u4f7f\u7528\u4e00\u6a23\u53ea\u6703\u8a08\u7b97\u4e00\u6b21\u3002\u6211\u8a8d\u70ba\u9019\u6a23\u4f7f\u7528\u662f\u6c92\u4ec0\u9ebc\u5927\u554f\u984c\u7684\uff0c\u4f46\u8981\u8a18\u5f97\u4f86\u81ea Provider Props \u7684\u503c\u5fc5\u9808\u5728\u66f4\u65b0\u7684\u6642\u5019\u4e5f\u540c\u6b65\u5230\u5c0d\u61c9\u7684 atom \uff0c\u800c\u4e14\u6642\u9593\u4e0a\u4e5f\u665a\u4e00\u500b tick \u3002\u5982\u679c\u4e0d\u662f\u9ad8\u5ea6\u91cd\u8907 heavy compute functon \u771f\u7684\u9700\u8981\u6e1b\u5c11\u547c\u53eb\u6b21\u6578\u7684\u6975\u7aef\u8907\u96dc\u7684\u60c5\u6cc1\u5efa\u8b70\u9084\u662f\u4f7f\u7528\u4e00\u822c\u7684 Context Provider \u5373\u53ef\u3002\u53ef\u4ee5\u53c3\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/jotai/discussions/973"},"Can Jotai be used in order to replace the React Context API? #973")," \u3002"),(0,r.kt)("h2",{id:"\u500b\u4eba\u7e3d\u7d50"},"\u500b\u4eba\u7e3d\u7d50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global / page context\uff1a jotai \u548c zustand \u90fd\u4e0d\u932f\uff0c\u500b\u4eba\u8a8d\u70ba jotai \u66f4\u52dd\u4e00\u7c4c\uff0c\u4e3b\u8981\u662f derivedAtom \u7684\u90e8\u5206\u53ef\u4ee5\u907f\u514d\u91cd\u8907\u8a08\u7b97\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u548c React tree \u4e4b\u5916\u7684\u8cc7\u6599\u4e92\u52d5\u7684\u72c0\u614b\uff1a \u76f4\u63a5 zustand \u3002"),(0,r.kt)("li",{parentName:"ul"},"Local Context / Nested Context \uff1a \u76ee\u524d\u500b\u4eba\u89ba\u5f97\u9084\u662f React Context + Provider \u6bd4\u8f03\u5bb9\u6613\u7dad\u8b77\uff0c ",(0,r.kt)("strong",{parentName:"li"},"\u771f\u7684\u6709\u5fc5\u8981\u6e1b\u5c11\u91cd\u8907\u76f8\u540c\u8a08\u7b97\u7684\u8a71")," \u518d\u8003\u616e\u5728 provider \u5167\u585e atom \u3002")),(0,r.kt)("p",null,"\u6211\u8a8d\u70ba\u6c92\u6709\u54ea\u500b\u6bd4\u8f03\u597d\uff0c\u90fd\u5404\u81ea\u6709\u9069\u5408\u4ed6\u5011\u7684\u5730\u65b9\u3002\u7528\uff01\u90fd\u7528\u7206\u5427\uff01"))}d.isMDXComponent=!0}}]);