"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5664],{5680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>f});var n=i(6540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),u=a,f=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return i?n.createElement(f,r(r({ref:t},c),{},{components:i})):n.createElement(f,r({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6213:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(8168),a=(i(6540),i(5680));const o={},r="Filter",l={unversionedId:"administration/settings/signal/filter",id:"administration/settings/signal/filter",title:"Filter",description:"Signal Filters are used to define how Signals should be grouped together or when they should be snoozed.",source:"@site/docs/administration/settings/signal/filter.mdx",sourceDirName:"administration/settings/signal",slug:"/administration/settings/signal/filter",permalink:"/dispatch/docs/administration/settings/signal/filter",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/signal/filter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Entity Type",permalink:"/dispatch/docs/administration/settings/signal/entity-type"},next:{title:"Contact",permalink:"/dispatch/docs/administration/settings/contact/"}},s={},d=[{value:"Snooze Filter",id:"snooze-filter",level:2},{value:"Creating a Snooze Filter",id:"creating-a-snooze-filter",level:3},{value:"Deduplication Filter",id:"deduplication-filter",level:2},{value:"Creating a Deduplication Filter",id:"creating-a-deduplication-filter",level:3}],c={toc:d},p="wrapper";function g(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"filter"},"Filter"),(0,a.yg)("p",null,"Signal Filters are used to define how Signals should be grouped together or when they should be snoozed."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To create a Signal Filter, you must first define the Entity Types that will be used to deduplicate or snooze Signals.")),(0,a.yg)("h2",{id:"snooze-filter"},"Snooze Filter"),(0,a.yg)("p",null,"Snooze filters make use of entities extracted from signals to define when a signal should be snoozed. This feature is useful when an influx of signals is expected for a given period of time (e.g. some known administration activities) and you want to temporarily stop cases from being created. Even when a signal is snoozed it will still be processed and associated entities will be created."),(0,a.yg)("p",null,"For example, you can create a ",(0,a.yg)("inlineCode",{parentName:"p"},"Snooze Filter")," that will snooze all incoming signals that contain a specific JA3 hash."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You also have the option to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"Snooze Filter")," without specifying any entities, which will snooze all incoming signals matching that filter.")),(0,a.yg)("h3",{id:"creating-a-snooze-filter"},"Creating a Snooze Filter"),(0,a.yg)("p",null,"To create an Snooze Filter, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Navigate to a Signal Definition edit page."),(0,a.yg)("li",{parentName:"ol"},"Click on the '+' icon adjacent to the 'Signal Filter(s)' dropdown menu."),(0,a.yg)("li",{parentName:"ol"},"Select the ",(0,a.yg)("inlineCode",{parentName:"li"},"Snooze")," radio button under the ",(0,a.yg)("inlineCode",{parentName:"li"},"BASIC")," tab.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(3982).A,width:"804",height:"545"})),(0,a.yg)("h2",{id:"deduplication-filter"},"Deduplication Filter"),(0,a.yg)("p",null,"In order to perform signal duplication, a duplication filter must be created. Deduplication filters leverage extracted signal entity types and a sliding time window in order to determine if a signal should be marked as a duplicate. If a match is found, the current signal is marked as duplicate and it is associated with the existing case."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"By default, all Signals are deduplicated over a one hour window unless a custom Deduplication Filter is defined.")),(0,a.yg)("h3",{id:"creating-a-deduplication-filter"},"Creating a Deduplication Filter"),(0,a.yg)("p",null,"To create an Deduplication Filter, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Navigate to a Signal Definition edit page."),(0,a.yg)("li",{parentName:"ol"},"Click on the '+' icon adjacent to the 'Signal Filter(s)' dropdown menu."),(0,a.yg)("li",{parentName:"ol"},"Select the ",(0,a.yg)("inlineCode",{parentName:"li"},"Deduplication")," radio button under the ",(0,a.yg)("inlineCode",{parentName:"li"},"BASIC")," tab.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(1065).A,width:"802",height:"541"})))}g.isMDXComponent=!0},1065:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/admin-ui-signal-filter-dedupe-728412be554a1c6996af5414ac4b2dd8.png"},3982:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/admin-ui-signal-filter-snooze-7a57fa5e39c99e74c83a88e5d0277c0b.png"}}]);