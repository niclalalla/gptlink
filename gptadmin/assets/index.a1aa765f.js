var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,d=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&s(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{a as r,M as c,E as p,d as u,h as m,i as b,s as h,w as f,b as v,f as g,u as w,g as y,v as V,x as P,m as k,o as _,c as x,az as I,P as q,Q as C,av as D,t as j,bx as U,by as N,aA as O,a0 as S}from"./vendor.e53bfd87.js";import{a as L,_ as G}from"./index.5213a1a2.js";import{c as T,d as z}from"./index.3226b1eb.js";import{u as B}from"./useDialog.380f1d15.js";import{u as E}from"./useBasicForm.6685fd70.js";const R=()=>{const e=r({packageList:[],page:{page:1,per_page:199}}),l=async()=>{try{const{data:l}=await L().chatGPT.packageList(d({},e.page));e.packageList=l}catch(l){}};return i(d({},c(e)),{onGetPackageList:l,onCreatePackage:async(e,l)=>{try{const a=!!e.id,{err_code:t}=await L().chatGPT[a?"putPackage":"savePackage"](d({},e));t||(p.success(a?"修改成功":"新增成功"),l&&l())}catch(a){}},onPackageShow:async e=>{try{const{err_code:a}=await L().chatGPT.putPackageShow({id:e.id});a||l()}catch(a){}},onCheckInputValue:e=>{}})};const F=e=>(V("data-v-13a1dcd2"),e=e(),P(),e),A={class:"package"},H=y(" ￥ "),M=F((()=>v("div",{class:"text"},"购买后展示到个人中心的名称",-1))),Q=F((()=>v("div",{class:"text"},[v("p",null,"支持输入0-10000的整数"),v("p",null,"按天数：购买后几天有效，输入0时表示有效期至2099年"),v("p",null,"按次数：购买后可使用几次对话")],-1))),J=F((()=>v("div",{class:"text"},"有多个套餐时等级越高，则优先扣费",-1)));var K=G(u({__name:"ListCreateDialog",props:{modelValue:{type:[Boolean],default:!1},editData:{type:[Array],default:()=>null}},emits:["update:modelValue","reload"],setup(e,{emit:l}){var a;const t=e,{register:o,validate:n,setFieldsValue:s,resetFields:r,setProps:c}=E({schemas:(null==(a=t.editData)||a.id,[{field:"name",component:"Input",label:"套餐名称",required:!0,componentProps:{maxlength:"20",placeholder:"售卖时的名称"}},{field:"show_name",component:"Input",label:"显示名称",required:!0,slot:"show_name",componentProps:{placeholder:"请输入展示名称"}},{field:"code",component:"Select",label:"类型",componentProps:{style:{width:"100%"},options:[{label:"按次数",value:"num"},{label:"按天数",value:"date"}]},defaultValue:"num",required:!0},{field:"num",component:"InputNumber",label:"有效数量",required:!0,slot:"num"},{field:"price",component:"Input",label:"价格",required:!0,slot:"price"},{field:"level",component:"InputNumber",label:"扣费等级",required:!0,slot:"level"},{field:"sort",component:"InputNumber",label:"排序",required:!0,componentProps:{style:{width:"100%"},min:0},defaultValue:0},{field:"show",component:"Input",label:"是否展示",required:!0,defaultValue:"0",show:!1}])}),{getEditId:p,getEdit:u,handlePopup:y}=B({props:t,emit:l,watchShow:e=>{if(t.editData){const{identity:e,type:l,show:a,id:o}=t.editData;c({schemas:[{field:"name",component:"Input",label:"套餐名称",required:!0,componentProps:{maxlength:"20",placeholder:"售卖时的名称"}},{field:"show_name",component:"Input",label:"显示名称",required:!0,slot:"show_name",componentProps:{placeholder:"请输入展示名称"}},{field:"code",component:"Select",label:"类型",componentProps:{style:{width:"100%"},options:[{label:"按次数",value:"num"},{label:"按天数",value:"date"}]},defaultValue:"num",required:!0},{field:"num",component:"InputNumber",label:"有效数量",required:!0,slot:"num"},{field:"price",component:"Input",label:"价格",required:!0,slot:"price"},{field:"level",component:"InputNumber",label:"扣费等级",required:!0,slot:"level"},{field:"sort",component:"InputNumber",label:"排序",required:!0,componentProps:{style:{width:"100%"},min:0},defaultValue:0},{field:"show",component:"Input",label:"是否展示",required:!0,defaultValue:"0",show:!1}]}),s(i(d({},t.editData),{identity:e+"",type:l+"",show:a+""}))}else c({schemas:[{field:"name",component:"Input",label:"套餐名称",required:!0,componentProps:{maxlength:"20",placeholder:"售卖时的名称"}},{field:"show_name",component:"Input",label:"显示名称",required:!0,slot:"show_name",componentProps:{placeholder:"请输入展示名称"}},{field:"code",component:"Select",label:"类型",componentProps:{style:{width:"100%"},options:[{label:"按次数",value:"num"},{label:"按天数",value:"date"}]},defaultValue:"num",required:!0},{field:"num",component:"InputNumber",label:"有效数量",required:!0,slot:"num"},{field:"price",component:"Input",label:"价格",required:!0,slot:"price"},{field:"level",component:"InputNumber",label:"扣费等级",required:!0,slot:"level"},{field:"sort",component:"InputNumber",label:"排序",required:!0,componentProps:{style:{width:"100%"},min:0},defaultValue:0},{field:"show",component:"Input",label:"是否展示",required:!0,defaultValue:"0",show:!1}]})}}),{onCreatePackage:V,onCheckInputValue:P}=R(),k=async()=>{const e=await n(),a=t.editData?i(d({},e),{id:t.editData.id}):e;V(a,(()=>{y(),l("reload")}))},_=()=>{y(!1),r()};return(l,a)=>{const t=m("el-input-number"),n=m("el-input");return b(),h(w(z),{"dialog-props":{title:"套餐新增",modelValue:e.modelValue,showClose:!0,width:"800px"},scrollBarProps:{maxHeight:500},center:"",top:"10vh",onCancel:_,onSubmit:k},{default:f((()=>[v("div",A,[g(w(T),{onRegister:w(o)},{price:f((({model:e,field:l})=>[g(t,{modelValue:e[l],"onUpdate:modelValue":a=>e[l]=a,placeholder:"请输入价格",precision:2,step:.1,min:.01,style:{width:"100%"},"controls-position":"right",class:"input-with-select"},{append:f((()=>[H])),_:2},1032,["modelValue","onUpdate:modelValue","step","min"])])),show_name:f((({model:e,field:l})=>[g(n,{modelValue:e[l],"onUpdate:modelValue":a=>e[l]=a,placeholder:"请输入展示名称",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"]),M])),num:f((({model:e,field:l})=>[g(t,{modelValue:e[l],"onUpdate:modelValue":a=>e[l]=a,placeholder:"请输入数量",type:"number",max:1e4,min:0,style:{width:"100%"},"controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"]),Q])),level:f((({model:e,field:l})=>[g(t,{modelValue:e[l],"onUpdate:modelValue":a=>e[l]=a,placeholder:"请输入套餐等级",min:"0",precision:0,style:{width:"100%"},"controls-position":"right",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"]),J])),_:1},8,["onRegister"])])])),_:1},8,["dialog-props"])}}}),[["__scopeId","data-v-13a1dcd2"]]);const W={class:"cb-page package"},X={class:"package-head cb-m-b-20"},Y={class:"cb-flex"},Z=v("span",{class:"cb-p-t-2"},"新增",-1),$={key:0,class:"package-list cb-flex"},ee=["onClick"],le={class:"box cb-flex cb-m-b-6"},ae={class:"box-left cb-m-r-10"},te={class:"box-right"},oe={class:"name"},ne={class:"name"},se={class:"name"},de={class:"name"},ie={class:"buttom cb-flex"},re={class:"cb-flex"},ce={class:"cb-m-r-20"},pe={class:"cb-m-r-10"},ue=u({__name:"index",setup(e){const l=k(),{openEdit:a,editData:t,showDialog:o}=B({}),{onGetPackageList:n,packageList:s,onPackageShow:d}=R();_((()=>{n()}));return(e,i)=>{const r=m("el-icon"),c=m("el-button"),u=m("el-switch"),V=m("el-empty"),P=m("el-card");return b(),x("div",W,[g(P,null,{default:f((()=>[v("div",X,[g(c,{type:"primary",onClick:i[0]||(i[0]=e=>w(a)(null))},{default:f((()=>[v("div",Y,[g(r,{size:20,class:"cb-m-r-2"},{default:f((()=>[g(w(I))])),_:1}),Z])])),_:1})]),w(s).length>0?(b(),x("div",$,[(b(!0),x(q,null,C(w(s),(e=>(b(),x("div",{class:"package-list-item cb-p-15",key:e.id},[v("div",{class:"del-icon",onClick:l=>{return a=e,void S.confirm("确定删除吗？",{confirmButtonText:"确认",cancelButtonText:"取消",type:"error"}).then((async()=>{await L().chatGPT.delPackage(a.id),p.success("删除成功"),n()}));var a}},[g(r,null,{default:f((()=>[g(w(D))])),_:1})],8,ee),v("div",le,[v("div",ae," ￥"+j(e.price),1),v("div",te,[v("div",oe,"名称："+j(e.name),1),v("div",ne,"套餐次数："+j(-1===e.num?"不限次数":e.num+"次"),1),v("div",se,"有效时间："+j(0===e.expired_day?"不限时间":e.expired_day+"天"),1),v("div",de,[y("价格："+j(e.price)+" ",1),g(r,{size:20,color:"var(--el-color-primary)",onClick:l=>w(a)(e)},{default:f((()=>[g(w(U))])),_:2},1032,["onClick"])])])]),v("div",ie,[v("div",re,[v("span",ce," 已支付总金额："+j(e.order_sum_payment||"0.00"),1),v("span",pe,"购买数量："+j(e.order_count||0),1),g(r,{size:20,color:"var(--el-color-primary)",onClick:a=>(({id:e})=>{l.push({path:"/operate/member/order",query:{id:e}})})(e)},{default:f((()=>[g(w(N))])),_:2},1032,["onClick"])]),g(u,{modelValue:e.show,"onUpdate:modelValue":l=>e.show=l,onClick:l=>(({id:e})=>{d({id:e})})(e),"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue","onClick"])])])))),128))])):(b(),h(V,{key:1,"image-size":200}))])),_:1}),g(K,{modelValue:w(o),"onUpdate:modelValue":i[1]||(i[1]=e=>O(o)?o.value=e:null),editData:w(t),onReload:w(n)},null,8,["modelValue","editData","onReload"])])}}});export{ue as default};