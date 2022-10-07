"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,p=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return n?a.createElement(p,i(i({ref:t},h),{},{components:n})):a.createElement(p,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:9},i="A Cascading Chain",c={unversionedId:"learn/minimawhitepaper/ acascadingchain",id:"learn/minimawhitepaper/ acascadingchain",title:"A Cascading Chain",description:"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 50 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty...",source:"@site/docs/learn/minimawhitepaper/ acascadingchain.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/ acascadingchain",permalink:"/docs/learn/minimawhitepaper/ acascadingchain",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/ acascadingchain.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Energy",permalink:"/docs/learn/minimawhitepaper/energy"},next:{title:"Storage-less MMR UTXO",permalink:"/docs/learn/minimawhitepaper/storagelessmmrutxo"}},l={},s=[],h={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-cascading-chain"},"A Cascading Chain"),(0,o.kt)("p",null,"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 50 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty..."),(0,o.kt)("p",null,"Every block references its direct parent and the last Super Block. Now a Tx-PoW has 3 possible levels, Transaction, Block and Super Block. If the Block hash difficulty is high enough it becomes a Super Block (which is also a valid block). Eventually, all blocks and data are discarded and only a chain of Super Block headers is kept as a long term store of the total PoW in the chain. Now instead of only 1 Super Block Level, let us use 256. 1 for each bit in a 32-byte hash. Each level is twice the difficulty of the level below. These are the only difficulty values for each block, each linking back to its Super Block Level parent."),(0,o.kt)("p",null,"The proof chain grows logarithmically, so that an almost limitless amount of PoW can be stored in a finite chain of headers, since every level stores blocks that are twice as difficult as the level below. Thus, an exponentially shorter unbroken chain of more PoWerful blocks is kept in place of a longer unbroken chain of less PoWerful ones. Due to the nature of randomised hash mining, the sum of the Tx-PoW difficulty of the higher-level blocks will on average equal the sum of the Tx-PoW difficulty of the lower level blocks."),(0,o.kt)("p",null,"The cascading chain allows each user to keep the total cumulative PoW without requiring the storage of every block. Only certain lucky blocks are kept, all of which reference each other, to keep a short unbroken chain of ever-increasing total PoW."),(0,o.kt)("p",null,"Almost all blocks and transactions are pruned. Pruning has no effect on the security of the user doing-the-pruning. Once a transaction has been checked by a user, that transaction need never be checked again, a simple reference will suffice. Blocks are kept for a certain period of time, a week would be fine, before being pruned. This way any user that logs on to the network can always catch up a weeks' worth of blocks. So as long as a user logs on to the network once a week he can validate every transaction on layer 1 and run a Complete node, full validating and full TxPoW mining, without needing increasing amounts of storage."),(0,o.kt)("p",null,"For a new user, who has no previous history of the chain and no coins, Nakamoto Consensus can objectively and independently tell which chain is the current valid chain - the Cascading Chain with the most PoW."))}u.isMDXComponent=!0}}]);