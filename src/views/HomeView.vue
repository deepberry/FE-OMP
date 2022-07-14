<template>
    <div class="v-home">
        <img class="logo" :src="Logo" alt="深莓智能" />
        <span class="title">深莓智能运营管理平台</span>
        <a :href="path" class="button">点击进入</a>
        <span class="desc" v-if="state.fail"><Warning class="icon" />连接失败，请再次尝试，或联系管理人员</span>
    </div>
</template>

<script setup>
import { watch, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Logo from "@deepberry/common/img/logo.svg";
import { getUserInfo, getUserPermission } from "@/service/index.js";
import { storeToRefs } from "pinia";
import { deepBerryStore } from "@/store/index";
//====== 数据 ======
const route = useRoute();
const router = useRouter();
const store = deepBerryStore();
let { role } = storeToRefs(store);

// 跳转链接数据
const APPID = "ww5429d07e97752284";
const REDIRECT_URI = encodeURI("https://admin.deepberry.cn:444/");
const path = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;

const code = ref("");
const state = reactive({
    fail: false,
});

router.push({
    name: "company",
});
// 监控路由，获取code
watch(
    route,
    (res) => {
        code.value = res.query.code;
    },
    { deep: true, immediate: true }
);

// 监控code获取用户token并跳转
watch(
    code,
    (code) => {
        if (code)
            getUserInfo({ code })
                .then((res) => {
                    state.fail = false;
                    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
                    getUserPermission(res.data.userId).then((res) => {
                        role = res.data.viewPermissoins;
                        store.role = role;
                        router.push({
                            name: "company",
                        });
                    });
                })
                .catch((err) => {
                    console.log(err);
                    state.fail = true;
                });
    },
    { deep: true, immediate: true }
);
</script>
<style lang="less" scoped>
@import "@/assets/css/views/home.less";
</style>
