"use strict";(self["webpackChunkomp"]=self["webpackChunkomp"]||[]).push([[897],{2617:function(e,t,n){n.d(t,{FU:function(){return a},VA:function(){return r},WO:function(){return s}});var o=n(6146);function a(){return(0,o.u)().get("/api/Work/userInfo")}function r(e){return(0,o.u)().get(`/api/Work/login${e}`)}function s(e){return(0,o.u)().get(`/api/Manage/user/${e}/permission`)}},2897:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(6252),a=n(2262),r=n(2201),s=n(2908),c=n(2617);const i=e=>((0,o.dD)("data-v-02ea8f97"),e=e(),(0,o.Cn)(),e),u={class:"v-home"},p=["src"],l=i((()=>(0,o._)("span",{class:"title"},"深莓智能运营管理平台",-1)));var d={__name:"HomeView",setup(e){const t=(0,r.tv)(),n="ww5429d07e97752284",i=encodeURIComponent("https://admin.deepberry.cn/omp/"),d=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${n}&redirect_uri=${i}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`,m=(0,a.iH)(document.location.search.split("&")[0]);return m.value&&!localStorage.getItem("token")?(0,c.VA)(m.value).then((e=>{console.log("getUserLogin获取的res:",e);const n="Bearer "+e.data.data.accessToken;localStorage.setItem("token",n),t.push({name:"details",params:{type:"role",id:0,code:m}})})).catch((e=>{console.log(e)})):t.push({name:"details",params:{type:"role",id:0,code:m}}),(e,t)=>((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{class:"logo",src:(0,a.SU)(s),alt:"深莓智能"},null,8,p),l,(0,o._)("a",{href:d,class:"button"},"点击进入")]))}},m=n(3744);const f=(0,m.Z)(d,[["__scopeId","data-v-02ea8f97"]]);var g=f}}]);
//# sourceMappingURL=897.004ea420.js.map