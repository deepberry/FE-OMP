"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[306],{5306:function(a,e,l){l.r(e),l.d(e,{default:function(){return Oa}});var t=l(6252),n=l(2262),o=l(8825),s=l(2201),i=l(3577),r=l(2941);const d={class:"m-detail m-company-detail"},c={class:"m-info"},u={class:"u-label"},m=["src"],p={class:"u-label"},v={class:"u-info-items"},w={class:"u-label"},g={class:"u-value"};var _={__name:"companyDetail",setup(a){const e=(0,s.yj)(),{id:l}=e.params;let o=(0,n.qj)({info:{},loading:!1});const _={createAt:"创建时间",organizationId:"企业ID",orgzLogo:"企业LOGO",orgzName:"企业名称",accountName:"企业主账号",phoneNum:"企业负责人手机",status:"企业状态",contact:"企业负责人",items:"企业成员"};function b(a){(0,r.Ge)(l).then((e=>{const l=e.data.data.accessToken,t="new"==a?`https://titan.deepberry.cn/insights/nodes?__token=${l}`:`https://io.deepberry.cn/login?__token=${l}`;window.open(`${t}`,"_blank")}))}return(0,t.bv)((()=>{o.loading=!0,(0,r.oS)(l).then((a=>{let e=a.data.data;delete e.userId,o.info=e})).finally((()=>o.loading=!1))})),(a,e)=>{const l=(0,t.Q2)("loading");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("div",c,[(0,t._)("span",{class:"u-login",onClick:e[0]||(e[0]=a=>b("new"))},"一次性登录(新版)"),(0,t._)("span",{class:"u-login",onClick:e[1]||(e[1]=a=>b("old"))},"一次性登录(旧版)"),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(o).info,((a,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"m-row",key:e},["orgzLogo"==e?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("span",u,(0,i.zw)(_[e]),1),(0,t._)("img",{src:a},null,8,m)],64)):"items"==e?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t._)("span",p,(0,i.zw)(_[e]),1),(0,t._)("div",v,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a,((a,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"u-item",key:e},[(0,t._)("span",null,"状态："+(0,i.zw)(a.enabled),1),(0,t._)("span",null,"姓名："+(0,i.zw)(a.userName||"-"),1),(0,t._)("span",null,"用户帐号："+(0,i.zw)(a.accountName||"-"),1),(0,t._)("span",null,"手机号码："+(0,i.zw)(a.phoneNum||"-"),1)])))),128))])],64)):((0,t.wg)(),(0,t.iD)(t.HY,{key:2},[(0,t._)("span",w,(0,i.zw)(_[e]),1),(0,t._)("span",g,(0,i.zw)(a||"-"),1)],64))])))),128))])])),[[l,(0,n.SU)(o).loading]])}}};const b=_;var y=b,k=l(999);const f={class:"m-detail m-customer-detail"},D={class:"m-info"},h={class:"u-label"},z={class:"u-value"},I={class:"m-info"},U=(0,t._)("div",{class:"u-title"},"用户所在组织信息",-1);var S={__name:"customerDetail",setup(a){const e=(0,s.yj)(),{id:l}=(0,n.IU)(e).params.value;let o=(0,n.qj)({data:{},loading:!1});const r={userId:"用户ID",accountName:"用户帐号",phoneNum:"手机号码",status:"用户帐号状态",updateAt:"最新登录时间"};return(0,t.bv)((()=>{o.loading=!0,(0,k.O3)(l).then((a=>{o.data=a.data.data})).finally((()=>o.loading=!1))})),(a,e)=>{const l=(0,t.up)("el-table-column"),s=(0,t.up)("el-table"),d=(0,t.Q2)("loading");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",f,[(0,t._)("div",D,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(r,((a,e)=>(0,t._)("div",{class:"m-row",key:e},[(0,t._)("span",h,(0,i.zw)(a),1),(0,t._)("span",z,(0,i.zw)((0,n.SU)(o).data[e]),1)]))),64))]),(0,t._)("div",I,[U,(0,t.Wm)(s,{class:"m-table",data:(0,n.SU)(o).data.items,border:"","row-key":"orgzId",style:{width:"100%"},"cell-style":{borderColor:"#787878",textAlign:"center"},"header-cell-style":{borderColor:"#787878",textAlign:"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{prop:"orgzId",label:"所在企业ID",width:"180"}),(0,t.Wm)(l,{prop:"orgzName",label:"所在企业名称"}),(0,t.Wm)(l,{prop:"userName",label:"姓名"}),(0,t.Wm)(l,{prop:"role",label:"所属角色"})])),_:1},8,["data"])])])),[[d,(0,n.SU)(o).loading]])}}};const W=S;var H=W,N=l(3727);const q={class:"m-detail m-equipment-detail"},j={class:"m-card"},A={class:"m-info"},C={class:"u-label"},L={class:"u-value"},T={class:"m-info"},Y={class:"u-label"},$={class:"u-value"},P={class:"m-card m-noBackground"},V={class:"m-info"},x=(0,t._)("div",{class:"u-title"},"设备跟踪记录",-1),K={class:"u-time"},X=(0,t.Uk)(),E={class:"u-title"},Q={class:"m-info"},B=(0,t._)("div",{class:"u-title"},"用户列表",-1);var O={__name:"equipmentDetail",setup(a){const e=(0,s.yj)(),{id:l}=(0,n.IU)(e).params.value;let o=(0,n.qj)({data:{},loading:!1,trackList:[]});(0,t.bv)((()=>{o.loading=!0,(0,N.Q$)(l).then((a=>{const e=a.data.data;let l=[[],[],[]];e.users.forEach((a=>{switch(a.role){case"超级管理员":l[0].push(a);break;case"管理员":l[1].push(a);break;default:l[2].push(a);break}})),e.users=[...l[0],...l[1],...l[2]],o.data=e})).finally((()=>o.loading=!1)),(0,N.wk)(l).then((a=>{const e=a.data.data;o.trackList=e.length?e:[{createTime:null,information:"暂无设备追踪记录"}]}))}));const r={deviceId:"设备ID",deviceType:"设备类型",orgzName:"归属客户",hardVer:"硬件版本",softVer:"固件版本",value:"绑定状态",name:"备注"},d={iccid:"ICCID",createAt:"创建时间",updateAd:"最后更新"};return(a,e)=>{const l=(0,t.up)("el-card"),s=(0,t.up)("el-timeline-item"),c=(0,t.up)("el-timeline"),u=(0,t.up)("el-table-column"),m=(0,t.up)("el-table"),p=(0,t.Q2)("loading");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",q,[(0,t._)("div",j,[(0,t._)("div",A,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(r,((a,e)=>(0,t._)("div",{class:"m-row",key:e},[(0,t._)("span",C,(0,i.zw)(a),1),(0,t._)("span",L,(0,i.zw)((0,n.SU)(o).data[e]||"-"),1)]))),64))]),(0,t._)("div",T,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(d,((a,e)=>(0,t._)("div",{class:"m-row",key:e},[(0,t._)("span",Y,(0,i.zw)(a),1),(0,t._)("span",$,(0,i.zw)((0,n.SU)(o).data[e]),1)]))),64))])]),(0,t._)("div",P,[(0,t._)("div",V,[x,(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(o).trackList,((a,e)=>((0,t.wg)(),(0,t.j4)(s,{timestamp:a.createTime,placement:"top",color:"#047de0",key:e},{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t._)("p",K,[(0,t._)("span",null,(0,i.zw)(a.createTime),1),X,(0,t._)("b",null,(0,i.zw)(a.creator),1)]),(0,t._)("p",E,(0,i.zw)(a.information),1)])),_:2},1024)])),_:2},1032,["timestamp"])))),128))])),_:1})]),(0,t._)("div",Q,[B,(0,t.Wm)(m,{class:"m-table",data:(0,n.SU)(o).data.users,border:"","row-key":"userId",style:{width:"100%","max-width":"1000px"},"cell-style":{borderColor:"#787878",textAlign:"center"},"header-cell-style":{borderColor:"#787878",textAlign:"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{prop:"userId",label:"ID",width:"80"}),(0,t.Wm)(u,{label:"用户账号"},{default:(0,t.w5)((a=>[(0,t.Uk)((0,i.zw)(a.row.accountName?a.row.accountName:"-"),1)])),_:1}),(0,t.Wm)(u,{prop:"userName",label:"姓名"}),(0,t.Wm)(u,{label:"手机号码"},{default:(0,t.w5)((a=>[(0,t.Uk)((0,i.zw)(a.row.phone?a.row.phone:"-"),1)])),_:1}),(0,t.Wm)(u,{prop:"role",label:"用户角色"})])),_:1},8,["data"])])])])),[[p,(0,n.SU)(o).loading]])}}};const M=O;var R=M,G=l(6146);function J(){return(0,G.u)().get("/api/Work/userInfo")}function F(a){return(0,G.u)().get(`/api/Work/login${a}`)}function Z(a){return(0,G.u)().get(`/api/Manage/user/${a}/permission`)}var aa=l(1575);const ea={class:"m-detail m-customer-detail"},la={class:"m-info"},ta={class:"m-row m-row-user"},na=["src","alt"],oa={class:"m-row"},sa=(0,t._)("span",{class:"u-label"},"userId",-1),ia={class:"u-value"},ra={class:"m-row"},da=(0,t._)("span",{class:"u-label"},"手机",-1),ca={class:"u-value"},ua={class:"m-row"},ma=(0,t._)("span",{class:"u-label"},"邮箱",-1),pa={class:"u-value"},va={class:"m-row"},wa=(0,t._)("span",{class:"u-label"},"创建时间",-1),ga={class:"u-value"},_a={class:"m-row"},ba=(0,t._)("span",{class:"u-label"},"账号状态",-1),ya={class:"u-value"};var ka={__name:"roleDetail",setup(a){let e=(0,n.qj)({data:{},loading:!1});const l=(0,o.t)();let{role:s}=(0,aa.Jk)(l);const r=(0,n.iH)(document.location.search.split("&")[0]);return(0,t.bv)((()=>{if(e.loading=!0,localStorage.getItem("token")){let a=localStorage.getItem("token");-1==a.indexOf("Bearer")&&(a="Bearer "+a,localStorage.setItem("token",a)),J().then((a=>{e.data=a.data.data,console.log("获取个人信息：",e.data),Z(a.data.data.userId).then((a=>{s=a.data.data,l.role=s,console.log("获取权限：",s)}))})).catch((()=>{localStorage.removeItem("token"),location.reload()})).finally((()=>{e.loading=!1}))}else F(r.value).then((a=>{const e="Bearer "+a.data.data.accessToken;localStorage.setItem("token",e),location.reload()})).catch((a=>{console.log(a)})).finally((()=>{e.loading=!1}))})),(a,l)=>{const o=(0,t.Q2)("loading");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",ea,[(0,t._)("div",la,[(0,t._)("div",ta,[(0,t._)("img",{class:"u-info-avatar",src:(0,n.SU)(e).data.avatar,alt:(0,n.SU)(e).data.name},null,8,na),(0,t.Uk)((0,i.zw)((0,n.SU)(e).data.name||"-"),1)]),(0,t._)("div",oa,[sa,(0,t._)("span",ia,(0,i.zw)((0,n.SU)(e).data.userId||"-"),1)]),(0,t._)("div",ra,[da,(0,t._)("span",ca,(0,i.zw)((0,n.SU)(e).data.mobile||"-"),1)]),(0,t._)("div",ua,[ma,(0,t._)("span",pa,(0,i.zw)((0,n.SU)(e).data.email||"-"),1)]),(0,t._)("div",va,[wa,(0,t._)("span",ga,(0,i.zw)((0,n.SU)(e).data.updatedAt||"-"),1)]),(0,t._)("div",_a,[ba,(0,t._)("span",ya,(0,i.zw)("0"==(0,n.SU)(e).data.disabled?"正常":"停用"),1)])])])),[[o,(0,n.SU)(e).loading]])}}};const fa=ka;var Da=fa,ha=(l(6699),l(393));const za={class:"m-detail m-node-detail"},Ia={key:0,class:"m-node-props"},Ua={class:"u-prop-header"},Sa={key:0,class:"u-prop-icon"},Wa=["src","alt","onError"],Ha={class:"u-prop-name"},Na={class:"u-prop-data"},qa={class:"u-prop-switch"},ja={key:0,class:"u-prop-value"},Aa={key:1,class:"m-no-node"};var Ca={__name:"nodeDetail",setup(a){const e=(0,s.yj)(),{id:l}=e.params,o=(0,n.iH)([]),r=(0,n.iH)(["INPUT","CAMERA"]),d=()=>{(0,N.v$)(l).then((a=>{o.value=a.data.data.nodeProperies||[]}))},c=a=>{a.icon="default"},u=(a="default")=>(0,ha.CJ)(`img/common/node-props/${a}.svg`);return(0,t.bv)((()=>{d()})),(a,e)=>{const l=(0,t.up)("el-switch"),n=(0,t.up)("el-alert");return(0,t.wg)(),(0,t.iD)("div",za,[o.value&&o.value.length?((0,t.wg)(),(0,t.iD)("div",Ia,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value,((a,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e,class:"m-node-prop"},[(0,t._)("div",Ua,[r.value.includes(a.type)?((0,t.wg)(),(0,t.iD)("i",Sa,[(0,t._)("img",{src:"CAMERA"==a.type?u("camera"):u(a.icon||"default"),alt:a.name,onError:e=>c(a)},null,40,Wa)])):(0,t.kq)("",!0),(0,t._)("span",Ha,(0,i.zw)(a.displayName),1)]),(0,t._)("div",Na,[(0,t._)("div",qa,["SWITCH"==a.type?((0,t.wg)(),(0,t.j4)(l,{key:0,modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,"active-value":"true","inactive-value":"false",disabled:""},null,8,["modelValue","onUpdate:modelValue"])):(0,t.kq)("",!0)]),"INPUT"==a.type?((0,t.wg)(),(0,t.iD)("div",ja,[(0,t._)("b",null,(0,i.zw)(a.value||0),1),(0,t.Uk)(" "+(0,i.zw)(a.unit),1)])):(0,t.kq)("",!0)])])))),128))])):((0,t.wg)(),(0,t.iD)("div",Aa,[(0,t.Wm)(n,{title:"暂无节点数据",type:"info","show-icon":"",center:"",closable:!1})]))])}}},La=l(3744);const Ta=(0,La.Z)(Ca,[["__scopeId","data-v-23a2cb8e"]]);var Ya=Ta;const $a={key:0,class:"m-detail m-commonLogs"},Pa=(0,t._)("br",null,null,-1),Va={key:0};var xa={__name:"commonLogs",props:{data:Array,type:String},setup(a){const e=a;console.log(e.type);const l=(0,t.Fl)((()=>e.data));return(e,o)=>{const s=(0,t.up)("el-table-column"),r=(0,t.up)("el-table");return"equipment"==a.type?((0,t.wg)(),(0,t.iD)("div",$a,[(0,t.Wm)(r,{class:"m-table",data:(0,n.SU)(l),border:"",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{prop:"createdAt",label:"创建时间",width:"180"}),(0,t.Wm)(s,{label:"操作者",width:"180"},{default:(0,t.w5)((a=>[(0,t._)("span",null,(0,i.zw)(a.row.userName?a.row.userName+" / 用户ID："+a.row.userId:"-"),1),Pa,a.row.operationTypeId?((0,t.wg)(),(0,t.iD)("span",Va,"平台用户ID："+(0,i.zw)(a.row.operationTypeId),1)):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(s,{prop:"operationTypeName",label:"行为"}),(0,t.Wm)(s,{prop:"operationDetail",label:"详情记录"})])),_:1},8,["data"])])):(0,t.kq)("",!0)}}};const Ka=xa;var Xa=Ka;const Ea={class:"m-details v-page"};var Qa={__name:"DetailsPage",setup(a){var e;const l=(0,o.t)(),i=(0,s.yj)(),r=(0,n.qj)((0,s.tv)()),{type:d,id:c}=(0,n.IU)(i).params.value,u=(0,n.iH)(null===(e=l.data[d])||void 0===e?void 0:e.key_name),m=(0,n.iH)("info"),p=(0,n.iH)(d),v=(0,n.qj)({pagination:{page:1,per:20,total:0},data:[],component_name:"commonLogs",component:null,params:{PageNumber:1,PageSize:10,deviceId:c}}),w=(0,n.qj)({companyDetail:(0,n.Xl)(y),customerDetail:(0,n.Xl)(H),equipmentDetail:(0,n.Xl)(R),roleDetail:(0,n.Xl)(Da),commonLogs:(0,n.Xl)(Xa),nodeDetail:(0,n.Xl)(Ya)}),g=(0,n.iH)(!0),_=(0,n.iH)(!1),b=()=>{g.value=!0,_.value=!0,(0,N.hf)(v.params).then((a=>{v.data=a.data.data.datas}))};return(0,t.YP)(m,(a=>{v.component_name="node"==a?(0,n.iH)("nodeDetail"):"logs"==a?(0,n.iH)("commonLogs"):(0,n.iH)(`${p.value}Detail`),v.component=w[v.component_name]}),{deep:!0,immediate:!0}),(0,t.YP)(r,(a=>{g.value=!1,m.value="info";const e=a.currentRoute.params.type;p.value=e,"company"!=e&&"role"!=e||(g.value=!1),"role"==e&&(u.value="账号"),"equipment"==e&&b(),v.component_name=(0,n.iH)(`${e}Detail`),v.component=w[v.component_name]}),{deep:!0,immediate:!0}),(a,e)=>{const l=(0,t.up)("el-tab-pane"),o=(0,t.up)("el-tabs"),s=(0,t.up)("commonPagination");return(0,t.wg)(),(0,t.iD)("div",Ea,[(0,t.Wm)(o,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a),class:"m-tabs"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{label:`${u.value}信息`,name:"info"},null,8,["label"]),g.value?((0,t.wg)(),(0,t.j4)(l,{key:0,label:`${u.value}操作日志`,name:"logs"},null,8,["label"])):(0,t.kq)("",!0),_.value?((0,t.wg)(),(0,t.j4)(l,{key:1,label:"节点属性",name:"node"})):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),((0,t.wg)(),(0,t.j4)((0,t.LL)(v.component),{type:(0,n.SU)(d),data:v.data},null,8,["type","data"])),g.value?((0,t.wg)(),(0,t.j4)(s,{key:0,pagination:v.pagination},null,8,["pagination"])):(0,t.kq)("",!0)])}}};const Ba=Qa;var Oa=Ba}}]);
//# sourceMappingURL=306.7e124e4f.js.map