import{g as p,h as v,r as o,o as d,c as m,a as t,w as n,u as s,b as h,d as u,K as S,n as g}from"../app.886702bd.js";const k=u("\u4E2D\u6587"),x=u("autoInsertSpace"),y=p({setup(f){const e=v({autoInsertSpace:!0});return(l,c)=>{const a=o("el-button"),r=o("el-config-provider"),_=o("el-checkbox");return d(),m("div",null,[t(r,{button:s(e)},{default:n(()=>[t(a,null,{default:n(()=>[k]),_:1})]),_:1},8,["button"]),h("div",null,[t(_,{modelValue:s(e).autoInsertSpace,"onUpdate:modelValue":c[0]||(c[0]=i=>s(e).autoInsertSpace=i)},{default:n(()=>[x]),_:1},8,["modelValue"])])])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));const C=u("open"),j=p({setup(f){const e=v({max:3}),l=()=>{S("this is a message.")};return(c,a)=>{const r=o("el-button"),_=o("el-config-provider");return d(),m("div",null,[t(_,{message:s(e)},{default:n(()=>[t(r,{onClick:l},{default:n(()=>[C]),_:1})]),_:1},8,["message"])])}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O=u(" Switch Lang "),V=p({setup(f){const e=g({name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"}}}),l=g({name:"en",el:{colorpicker:{confirm:"Confirm",clear:"Clear"}}}),c=()=>{const a=e.value;e.value=l.value,l.value=a};return(a,r)=>{const _=o("el-color-picker"),i=o("el-config-provider"),b=o("el-button");return d(),m("div",null,[t(i,{locale:l.value},{default:n(()=>[t(_,{"model-value":"",style:{"vertical-align":"middle"}})]),_:1},8,["locale"]),t(b,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:c},{default:n(()=>[O]),_:1})])}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{z as _,B as a,I as b};
