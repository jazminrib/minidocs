"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:15},i="Consensus, Forks and Immutable Protocols",s={unversionedId:"learn/minimawhitepaper/consensusforksandimmutableprotocols",id:"learn/minimawhitepaper/consensusforksandimmutableprotocols",title:"Consensus, Forks and Immutable Protocols",description:"In decentralized blockchain systems all full users need to agree on the rules. If there is no agreement on the rules there can be no consensus on the ordering and eventual outcome of actions. Current blockchain systems have 2 types of consensus changes available. This is because there are 2 types of \u2018full\u2019 user. The first helps in the construction and validation of the chain - Complete nodes (the miners). The second only helps in the validation of the chain - Full nodes (the validators). We ignore Wallet users, by far the largest group on these chains (unlike Minima), who neither validate nor construct, and are simply swept along, whether they agree or not.",source:"@site/docs/learn/minimawhitepaper/consensusforksandimmutableprotocols.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/consensusforksandimmutableprotocols",permalink:"/docs/learn/minimawhitepaper/consensusforksandimmutableprotocols",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/consensusforksandimmutableprotocols.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Block Speed",permalink:"/docs/learn/minimawhitepaper/blockspeed"},next:{title:"Conclusion",permalink:"/docs/learn/minimawhitepaper/conclusion"}},l={},c=[],u={toc:c};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consensus-forks-and-immutable-protocols"},"Consensus, Forks and Immutable Protocols"),(0,r.kt)("p",null,"In decentralized blockchain systems all full users need to agree on the rules. If there is no agreement on the rules there can be no consensus on the ordering and eventual outcome of actions. Current blockchain systems have 2 types of consensus changes available. This is because there are 2 types of \u2018full\u2019 user. The first helps in the construction and validation of the chain - Complete nodes (the miners). The second only helps in the validation of the chain - Full nodes (the validators). We ignore Wallet users, by far the largest group on these chains (unlike Minima), who neither validate nor construct, and are simply swept along, whether they agree or not."),(0,r.kt)("p",null,"A soft fork is when the Complete nodes change the rules in ways that are still valid to the Full nodes. A soft-fork is a reduction in the chains\u2019 abilities. All Full nodes still see a valid block, just with a reduced solution space. Permanent censorship of a transaction or address is a soft-fork, since only those involved in the construction of the chain have any say. On fixed block size blockchains, a reduction in block size is a soft fork, as it still appears valid to all the Full nodes, just a smaller block. A hard fork is when all nodes need to agree to an increase in capabilities, adding an ability that was not there before. On fixed block size blockchains, an increase in the block size requires everyone to agree, as it is invalid to Full nodes given the old rules, that specified a lower maximum block size. Adding a new function or feature is a hard fork. Upgrading or fundamentally changing the protocol is a hard fork."),(0,r.kt)("p",null,"Soft forks are much easier to implement than hard forks since only a majority of the much smaller group of Complete nodes needs to agree. Soft forks can be imposed. The Complete nodes do not need the Full nodes\u2019 permission. Hard forks are much harder to implement. The larger the network the harder it gets. A decentralized protocol can only grow in adoption once it has stopped being updated, since it is impossible to update once deployed at scale. This is why the ossification of truly decentralized protocols occurs."),(0,r.kt)("p",null,"On Minima :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Everyone runs a Complete node."),(0,r.kt)("li",{parentName:"ul"},"Everyone is involved in the construction and validation of the chain."),(0,r.kt)("li",{parentName:"ul"},"Everyone needs to agree on everything because everyone is involved in everything."),(0,r.kt)("li",{parentName:"ul"},"There are no soft forks, only hard forks. ")),(0,r.kt)("p",null,"The Minima Protocol is complete from inception, containing all the scaling and functionality it will ever have or need. No soft forks allowed. No hard forks required - ever. No limit on the size of the network that can use it. POP3, SMTP, UDP and TCP/IP are examples of ossified global decentralized protocols. They don't change. That's the point. That\u2019s why they are the back-bone of the Internet."))}h.isMDXComponent=!0}}]);