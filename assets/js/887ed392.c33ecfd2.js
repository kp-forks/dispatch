"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8733],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(a),y=l,u=g["".concat(c,".").concat(y)]||g[y]||p[y]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(8168),l=(a(6540),a(5680));const i={},r="Cost Model",o={unversionedId:"administration/settings/cost_model",id:"administration/settings/cost_model",title:"Cost Model",description:"Our Cost Model is a feature that enables teams to estimate response cost for each incident based on the incident type. Users can opt in to create and use personalized cost calculations for each type of incident based on participant activity. The cost models are automatically applied to each incident based on the incident type.",source:"@site/docs/administration/settings/cost_model.mdx",sourceDirName:"administration/settings",slug:"/administration/settings/cost_model",permalink:"/dispatch/docs/administration/settings/cost_model",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/cost_model.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Team",permalink:"/dispatch/docs/administration/settings/contact/team"},next:{title:"Data",permalink:"/dispatch/docs/administration/settings/data/"}},c={},s=[{value:"Key Features",id:"key-features",level:2},{value:"Customizable Cost Models",id:"customizable-cost-models",level:3},{value:"Plugin-Based Tracking",id:"plugin-based-tracking",level:3},{value:"Effort Assignment",id:"effort-assignment",level:3},{value:"Incident Cost Calculation",id:"incident-cost-calculation",level:3},{value:"Currently Supported Plugin Events",id:"currently-supported-plugin-events",level:2},{value:"Slack: Channel Activity",id:"slack-channel-activity",level:3},{value:"Slack: Thread Activity",id:"slack-thread-activity",level:3},{value:"Cost Calculation Examples",id:"cost-calculation-examples",level:2},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4}],d={toc:s},g="wrapper";function p(e){let{components:t,...i}=e;return(0,l.yg)(g,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"cost-model"},"Cost Model"),(0,l.yg)("p",null,"Our Cost Model is a feature that enables teams to estimate response cost for each incident based on the incident type. Users can opt in to create and use personalized cost calculations for each type of incident based on participant activity. The cost models are automatically applied to each incident based on the incident type."),(0,l.yg)("p",null,"If an incident type does not have a specific cost model assigned, the default classic cost model will be used when calculating the incident costs. See ",(0,l.yg)("a",{parentName:"p",href:"/dispatch/docs/administration/settings/incident/incident-cost-type###calculating-incident-cost"},"Incident Cost Type"),"."),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("p",null,(0,l.yg)("img",{src:a(9299).A,width:"1369",height:"529"}))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("h3",{id:"customizable-cost-models"},"Customizable Cost Models"),(0,l.yg)("p",null,"Users have the flexibility to define their unique cost models based on their organization's workflow and tools. This customization can be tailored to each incident type, providing a versatile approach to cost calculation. The cost model for an incident type can be changed at any time. When cost model changes are made to the incident type or an incident changes its type, all participant activity costs moving forward will be calculated using the new cost model."),(0,l.yg)("h3",{id:"plugin-based-tracking"},"Plugin-Based Tracking"),(0,l.yg)("p",null,"Users can track costs from their existing tools by using our plugin-based tracking system. Users have the flexibility to select which plugins and specific plugin events they want to track, offering a targeted approach to cost calculation."),(0,l.yg)("h3",{id:"effort-assignment"},"Effort Assignment"),(0,l.yg)("p",null,"For each tracked activity, users can assign a quantifiable measure of effort, represented in seconds of work time. This feature provides a more accurate representation of the cost of an incident."),(0,l.yg)("h3",{id:"incident-cost-calculation"},"Incident Cost Calculation"),(0,l.yg)("p",null,"Incident cost calculation is based on the cost model and effort assignment for each tracked participant activity. This helps in understanding resource utilization and cost of an incident."),(0,l.yg)("h2",{id:"currently-supported-plugin-events"},"Currently Supported Plugin Events"),(0,l.yg)("h3",{id:"slack-channel-activity"},"Slack: Channel Activity"),(0,l.yg)("p",null,"This event tracks activity within a specific Slack channel. By periodically polling channel messages, this gathers insights into the activity and engagement levels of each participant."),(0,l.yg)("h3",{id:"slack-thread-activity"},"Slack: Thread Activity"),(0,l.yg)("p",null,"This event tracks activity within a specific Slack thread. By periodically polling thread replies, this gathers insights into the activity and engagement levels of each participant."),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("p",null,(0,l.yg)("img",{src:a(6300).A,width:"595",height:"537"}))),(0,l.yg)("h2",{id:"cost-calculation-examples"},"Cost Calculation Examples"),(0,l.yg)("p",null,"Below, we illustrate the use of the cost model through two examples. These are based on the following values:"),(0,l.yg)("b",null,"Cost Model 1"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Plugin Event"),(0,l.yg)("th",{parentName:"tr",align:null},"Response Time (seconds)"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"300")))),(0,l.yg)("p",null,"The employee hourly rate can be adjusted by modifying the ",(0,l.yg)("inlineCode",{parentName:"p"},"Annual Employee Cost")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"Business Year Hours")," fields in the ",(0,l.yg)("a",{parentName:"p",href:"/dispatch/docs/administration/settings/project"},"project settings"),". In these examples, we will use the following value:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"hourly_rate = 100\n")),(0,l.yg)("h4",{id:"example-1"},"Example 1"),(0,l.yg)("p",null,"Consider the following Slack channel activity for ",(0,l.yg)("inlineCode",{parentName:"p"},"Incident 1"),":"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Slack Channel Activity Timestamp"),(0,l.yg)("th",{parentName:"tr",align:null},"Participant"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"Nate Flex")))),(0,l.yg)("p",null,"The resulting recorded participant activity will be:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Participant"),(0,l.yg)("th",{parentName:"tr",align:null},"started_at"),(0,l.yg)("th",{parentName:"tr",align:null},"ended_at"),(0,l.yg)("th",{parentName:"tr",align:null},"Plugin Event"),(0,l.yg)("th",{parentName:"tr",align:null},"Incident"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"Incident 1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nate Flex"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"Incident 1")))),(0,l.yg)("p",null,"The incident cost is then calculated as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"( (400 - 100) + (500 - 200) ) / SECONDS_IN_HOUR * hourly_rate = $16.67\n")),(0,l.yg)("h4",{id:"example-2"},"Example 2"),(0,l.yg)("p",null,"Consider the following Slack channel activity for ",(0,l.yg)("inlineCode",{parentName:"p"},"Incident 2"),":"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Slack Channel Activity Timestamp"),(0,l.yg)("th",{parentName:"tr",align:null},"Participant"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"150"),(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"Nate Flex")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe")))),(0,l.yg)("p",null,"The resulting recorded participant activity will be:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Participant"),(0,l.yg)("th",{parentName:"tr",align:null},"started_at"),(0,l.yg)("th",{parentName:"tr",align:null},"ended_at"),(0,l.yg)("th",{parentName:"tr",align:null},"Plugin Event"),(0,l.yg)("th",{parentName:"tr",align:null},"Incident"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"450"),(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"Incident 2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nate Flex"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"Incident 2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Cookie Doe"),(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"800"),(0,l.yg)("td",{parentName:"tr",align:null},"Slack Channel Activity"),(0,l.yg)("td",{parentName:"tr",align:null},"Incident 2")))),(0,l.yg)("p",null,"The incident cost is then calculated as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"( (450 - 100) + (500 - 200) + (800 - 500) ) / SECONDS_IN_HOUR * hourly_rate = $26.39\n")))}p.isMDXComponent=!0},9299:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/admin-ui-cost-model-dfcb1ffe19e0193b24612982a9f0091e.png"},6300:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/admin-ui-edit-cost-model-50e45a9e53fc1869a5f353d0dfcff406.png"}}]);