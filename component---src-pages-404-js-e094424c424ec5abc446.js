(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{U4Ha:function(e){e.exports=JSON.parse('{"en":13,"es":10,"fi":13,"fr":3,"ptbr":4,"zh":13}')},XFRJ:function(e,a,t){"use strict";t("m4Pe");var r=t("jsr+"),n=t("Wbzz"),l=t("q1tI"),o=t.n(l),c=t("u1fg");const s=e=>{let{className:a,wrapperClassName:t,link:l,content:s,stack:i,bold:p,thickBorder:m,upperCase:u,...g}=e;const k=o.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},s.map((e,a)=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return o.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),o.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(m?"arrow__rectangle--thick-border":""),style:t},e.link?o.a.createElement(n.Link,{to:e.link},u?e.text.toUpperCase():e.text):u?e.text.toUpperCase():e.text),o.a.createElement("div",{className:"arrow__point "+(m?"arrow__point--thick-border":""),style:t}))}));let d;return i||l?!i&&l?d=o.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},o.a.createElement(n.Link,{to:l,style:{display:"inline-block"}},k)):i&&(d=o.a.createElement("div",{className:"col-10 spacing--after "+t},o.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(e=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return o.a.createElement(n.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},g),o.a.createElement(r.a,{flex:!0,className:"arrow__rectangle",style:t},o.a.createElement("p",{className:"arrow--stacked-title"},o.a.createElement("span",null,e.text))),o.a.createElement("div",{className:"arrow__point",style:t}))})))):d=o.a.createElement("div",{className:"col-10 spacing--after"},k),d};s.defaultProps={className:"",wrapperClassName:""},a.a=s},m4Pe:function(e,a,t){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2","pale-pink":"#F9B9D3","sqlgreen":"#C5FF73"}')},w2l6:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),l=t("9Koi"),o=t("XFRJ"),c=t("jsr+"),s=t("Bl7J"),i=t("vrFN"),p=t("u1fg"),m=t("xB9W");a.default=()=>{const{i18n:e,t:a}=Object(l.a)(),t=a("notFoundPage:title"),r=e.language;return n.a.createElement(s.a,null,n.a.createElement(i.a,{title:t+" | Full stack open",lang:r}),n.a.createElement(c.a,{className:"container spacing--large spacing--after"},n.a.createElement("h1",null,"404 - ",t),n.a.createElement("p",{className:"col-10 spacing--small spacing--after"},"Uncaught ReferenceError: unknown is not defined"),n.a.createElement(o.a,{className:"col-10 arrow__container--with-link",bold:!0,thickBorder:!0,link:Object(m.a)(r,"/"),content:[{backgroundColor:p.main,text:"Go back home"}]})))}},xB9W:function(e,a,t){"use strict";var r=t("U4Ha");a.a=function(e,a,t){return void 0===t&&(t=""),r[e]<a?"/en/part"+a+t:"fi"===e?"/osa"+a+t:"/"+e+"/part"+a+t}}}]);
//# sourceMappingURL=component---src-pages-404-js-e094424c424ec5abc446.js.map