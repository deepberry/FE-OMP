<!--
 * @Description: 
 * @Author: litthy
 * @Date: 2022-07-08 13:59:49
 * @LastEditTime: 2022-07-15 14:31:21
 * @LastEditors: litthy
 * @Reference: 
-->
<template>
    <div class="v-home">
        <img class="logo" :src="Logo" alt="深莓智能" />
        <span class="title">深莓智能运营管理平台</span>
        <a :href="path" class="button">点击进入</a>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "@deepberry/common/img/logo.svg";
import { getUserLogin } from "@/service/index.js";

//====== 数据 ======
const router = useRouter();

// 跳转链接数据
const APPID = "ww5429d07e97752284";
const REDIRECT_URI = encodeURIComponent("https://admin.deepberry.cn/omp/");
const path = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;

const code = ref(document.location.search.split("&")[0]);
if (code.value && !localStorage.getItem("token")) {
    getUserLogin(code.value)
        .then((res) => {
            console.log("getUserLogin获取的res:", res);
            const _code = "Bearer " + res.data.data.accessToken;
            localStorage.setItem("token", _code);
            router.push({
                name: "details",
                params: {
                    type: "role",
                    id: 0,
                    code,
                },
            });
        })
        .catch((err) => {
            console.log(err);
        });
} else {
    router.push({
        name: "details",
        params: {
            type: "role",
            id: 0,
            code,
        },
    });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/views/home.less";
</style>
