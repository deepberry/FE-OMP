"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[365],{1365:function(e,a,l){l.r(a),l.d(a,{default:function(){return q}});var o=l(6252),t=l(2262),s=l(3577),i=l(4239);const n={class:"u-table-img"},r=["src"],u={class:"u-table-button"},d=(0,o.Uk)("编辑"),c=(0,o.Uk)("查看详情 ");var m={__name:"companyTable",props:{table:Array,label:String},emits:["toDialog"],setup(e,{emit:a}){const l=e;let i=(0,t.qj)({data:[]});const m="https://www.deepberry.cn/images/placeholders/logo.png";function g(e,l){a("toDialog",{row:e,type:l})}return(0,o.YP)(l,(e=>{i.data=e.table}),{deep:!0}),(a,l)=>{const p=(0,o.up)("el-table-column"),b=(0,o.up)("el-button"),f=(0,o.up)("router-link"),w=(0,o.up)("el-table");return(0,o.wg)(),(0,o.j4)(w,{class:"m-table",data:(0,t.SU)(i).data,border:"",style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{prop:"organizationId",label:"企业ID",width:"120"}),(0,o.Wm)(p,{prop:"orgzName",label:"企业名称"}),(0,o.Wm)(p,{label:"企业Logo"},{default:(0,o.w5)((e=>[(0,o._)("div",n,[(0,o._)("img",{src:e.row.orgzLogo||m},null,8,r)])])),_:1}),(0,o.Wm)(p,{prop:"userName",label:"联系人",width:"200"}),(0,o.Wm)(p,{prop:"phoneNum",label:"手机号码",width:"200"}),(0,o.Wm)(p,{label:"企业状态",width:"120"},{default:(0,o.w5)((e=>[(0,o._)("span",{class:(0,s.C_)("禁用"===e.row.status?"u-table-disabled":"u-table-normal")},(0,s.zw)(e.row.status),3)])),_:1}),(0,o.Wm)(p,{prop:"createAt",label:"账户创建时间",width:"240"}),(0,o.Wm)(p,{label:"操作",width:"240"},{default:(0,o.w5)((a=>[(0,o._)("div",u,[(0,o.Wm)(b,{link:"",type:"primary",size:"small",onClick:e=>g(a.row,"close")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)("正常"==a.row.status?"停用":"启用"),1)])),_:2},1032,["onClick"]),(0,o.Wm)(b,{link:"",type:"primary",size:"small",onClick:e=>g(a.row,"edit")},{default:(0,o.w5)((()=>[d])),_:2},1032,["onClick"]),(0,o.Wm)(f,{to:{path:`/${e.label}/details/${a.row.organizationId}`},class:"u-table-more"},{default:(0,o.w5)((()=>[c])),_:2},1032,["to"])])])),_:1})])),_:1},8,["data"])}}},g=l(3744);const p=(0,g.Z)(m,[["__scopeId","data-v-6dac76f9"]]);var b=p;const f={class:"m-box"},w=["src"],_={key:1,class:"u-box"},h=(0,o._)("div",{class:"u-tips"},[(0,o._)("span",null," 尺寸建议：宽180 x 高60"),(0,o._)("span",null," 格式建议：透明背景图片，PNG或gif,logo图形使用深色")],-1),U={key:0,class:"dialog-footer"},y={emits:["dialogClose","dialogSuccess"]};var S=Object.assign(y,{__name:"companyFormDialog",props:{dialogObject:Object},setup(e,{emit:a}){const l=e,i=(0,o.Fl)((()=>l.dialogObject.company));let n=(0,t.qj)({form:{}});const r=(0,t.iH)(""),u=(0,t.iH)({phoneNum:[{required:!0,message:"请输入联系人手机号码",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号码格式不正确",trigger:"blur"}],orgzName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],userName:[{required:!0,message:"请输入企业联系人",trigger:"blur"}]}),d=(0,o.Fl)({get(){return l.dialogObject.dialogVisible},set(e){return e}}),c={dialogTitle:l.dialogObject.title||"企业信息",dialogWidth:l.dialogObject.width||"780px",dialogCloseBtnText:l.dialogObject.closeBtnText||"取消",dialogSuccessBtnText:l.dialogObject.successBtnText||"确定",dialogIsFooter:l.dialogObject.isFooter||!0};(0,o.YP)(i,(e=>n.form=e),{deep:!0,immediate:!0});const m=e=>{a("dialogClose",!1,"close"),e.resetFields()},g=e=>{e&&e.validate(((e,l)=>{e?a("dialogSuccess",n.form):console.log("error submit!",l)}))},p=(e,a)=>{n.form.orgzLogo=URL.createObjectURL(a.raw)},b=e=>"image/jpeg"!==e.type?(console.log("Avatar picture must be JPG format!"),!1):!(e.size/1024/1024>2)||(console.log("Avatar picture size can not exceed 2MB!"),!1);return(e,a)=>{const l=(0,o.up)("el-input"),i=(0,o.up)("el-form-item"),y=(0,o.up)("Picture"),S=(0,o.up)("el-upload"),v=(0,o.up)("el-form"),k=(0,o.up)("el-button"),z=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(z,{modelValue:(0,t.SU)(d),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,t.dq)(d)?d.value=e:null),title:c.dialogTitle,width:c.dialogWidth,"before-close":m,draggable:""},{footer:(0,o.w5)((()=>[c.dialogIsFooter?((0,o.wg)(),(0,o.iD)("span",U,[(0,o.Wm)(k,{onClick:a[3]||(a[3]=e=>m(r.value))},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(c.dialogCloseBtnText),1)])),_:1}),(0,o.Wm)(k,{type:"primary",onClick:a[4]||(a[4]=e=>g(r.value))},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(c.dialogSuccessBtnText),1)])),_:1})])):(0,o.kq)("",!0)])),default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"m-form-content",ref_key:"formRef",ref:r,model:(0,t.SU)(n).form,rules:u.value,"label-width":"120px"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{label:"企业名称",prop:"orgzName"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{modelValue:(0,t.SU)(n).form.orgzName,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.SU)(n).form.orgzName=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"企业/组织Logo"},{default:(0,o.w5)((()=>[(0,o._)("div",f,[(0,o.Wm)(S,{class:"m-uploader",action:"#","show-file-list":!1,"on-success":p,"before-upload":b},{default:(0,o.w5)((()=>[(0,t.SU)(n).form.logo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:(0,t.SU)(n).form.logo,class:"avatar"},null,8,w)):((0,o.wg)(),(0,o.iD)("div",_,[(0,o.Wm)(y,{class:"u-icon"})]))])),_:1}),h])])),_:1}),(0,o.Wm)(i,{label:"联系人",prop:"userName"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{modelValue:(0,t.SU)(n).form.userName,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,t.SU)(n).form.userName=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"手机号码",prop:"phoneNum"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{modelValue:(0,t.SU)(n).form.phoneNum,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,t.SU)(n).form.phoneNum=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","width"])])}}});const v=S;var k=v,z=l(5550),W=l(6461);const j={class:"v-company"},N={class:"m-title"},C={class:"m-search-box"},V=(0,o.Uk)("企业开户"),D={class:"m-tips-content"},x=(0,o._)("span",{class:"u-title"},"是否启用/停用企业账户",-1);var I={__name:"CompanyList",setup(e){const a=(0,i.t)(),{label:l,deepBerry:n}=a,{title:r,icon:u}=n[l],d={placeholder:"请输入企业ID/企业名称/联系人/联系电话",status_title:"-- 企业账户状态 --",status:[{label:"全部",value:-1},{label:"正常",value:0},{label:"已停用",value:1}]};let c=(0,t.qj)({loading:!1,table:[],pagination:{page:1,per:20,total:0},search:{input:null,status:null},form:{}});const m=(0,o.Fl)((()=>({pageIndex:c.pagination.page-1,pageSize:c.pagination.per,Condition:c.search.input,Status:c.search.status}))),g={organizationId:"",orgzLogo:"",orgzName:"",phoneNum:"",userId:"",userName:""};let p=(0,t.iH)("form"),f=(0,t.qj)({dialogVisible:!1,company:g});function w({input_txt:e,status_id:a}){c.search.input=e,c.search.status=-1==a?null:a,c.pagination.page=1,v()}function _(e){c.pagination.page=e,v()}function h({row:e,type:a}){f.dialogVisible=!0,f.company=e||g,p.value="close"==a?"tips":"form"}const U=()=>{f.dialogVisible=!1},y=()=>{const{organizationId:e,status:a}=f.company,l="正常"==a?1:0,o=0==l?"启用":"停用";(0,z.mz)(e,l).then((()=>{f.dialogVisible=!1,v(),(0,W.bM)({title:"成功",message:`${o}企业成功`,type:"success"})}))},S=e=>{f.dialogVisible=!1,e.logo=e.orgzLogo,e.organizationId?(0,z.ji)(e).then((()=>{(0,W.bM)({title:"成功",message:"修改企业信息成功",type:"success"})})):(0,z.lQ)(e).then((()=>{(0,W.bM)({title:"成功",message:"添加企业成功",type:"success"})}))};function v(){c.loading=!0,(0,z.m_)(m.value).then((e=>{if("200"==e.status){const a=e.data.data;c.table=a.datas,c.pagination.total=a.totalCount}})).finally((()=>c.loading=!1))}return(0,o.bv)((()=>v())),(e,a)=>{const i=(0,o.up)("search-bar"),n=(0,o.up)("el-button"),m=(0,o.up)("commonPagination"),g=(0,o.up)("tipsDialog"),v=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("h2",N,[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,t.SU)(u)),{class:"u-title-icon"})),(0,o.Uk)((0,s.zw)((0,t.SU)(r)),1)]),(0,o._)("div",C,[(0,o.Wm)(i,{data:d,onToSearch:w}),(0,o.Wm)(n,{class:"u-add",type:"primary",onClick:h},{default:(0,o.w5)((()=>[V])),_:1})]),(0,o.wy)((0,o.Wm)((0,t.SU)(b),{table:(0,t.SU)(c).table,label:(0,t.SU)(l),onToDialog:h},null,8,["table","label"]),[[v,(0,t.SU)(c).loading]]),(0,o.Wm)(m,{pagination:(0,t.SU)(c).pagination,onToParams:_},null,8,["pagination"]),"tips"==(0,t.SU)(p)?((0,o.wg)(),(0,o.j4)(g,{key:0,class:"m-tips","dialog-object":(0,t.SU)(f),onDialogClose:U,onDialogSuccess:y},{default:(0,o.w5)((()=>[(0,o._)("div",D,[x,(0,o._)("span",null,(0,s.zw)((0,t.SU)(f).company.orgzName),1),(0,o._)("span",null,"企业ID: "+(0,s.zw)((0,t.SU)(f).company.organizationId),1)])])),_:1},8,["dialog-object"])):(0,o.kq)("",!0),"form"==(0,t.SU)(p)?((0,o.wg)(),(0,o.j4)((0,t.SU)(k),{key:1,class:"m-form","dialog-object":(0,t.SU)(f),onDialogClose:U,onDialogSuccess:S},null,8,["dialog-object"])):(0,o.kq)("",!0)])}}};const T=I;var q=T}}]);
//# sourceMappingURL=365.d61e6b1c.js.map