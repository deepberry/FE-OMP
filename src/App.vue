<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-07-08 19:13:21
 * @Description: 企业微信运营平台
-->
<template>
    <!-- <CommonHeader /> -->

    <div class="m-container">
        <aside class="m-aside">
            <Navigation />
            <AsideSetting />
        </aside>
        <main class="m-main">
            <!-- 标题 -->
            <h2 class="m-title" v-if="label == 'details'">
                <span class="u-title-txt"> <el-page-header title="返回" @back="goBack" /> {{ detailName }}详情</span>
            </h2>
            <h2 class="m-title" v-else>
                <span class="u-title-txt">
                    <component class="u-title-icon" :is="state.view.icon" v-if="state.view.title" />{{
                        state.view.title
                    }}
                </span>
            </h2>

            <router-view />
        </main>
    </div>

    <CommonFooter />
</template>

<script setup>
// import CommonHeader from "@/components/common/header.vue";
import CommonFooter from "@/components/common/footer.vue";
import Navigation from "@/components/common/commonNavigation.vue";
import AsideSetting from "@/components/asideSetting.vue";
import project from "../project.json";
import { storeToRefs } from "pinia";
import { reactive, toRaw, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { deepBerryStore } from "@/store/index";
// 公共store
const store = deepBerryStore();
const route = useRoute();
const router = reactive(useRouter());
let { label, deepBerry } = storeToRefs(store);
label = toRaw(route).name;
deepBerry = project.pages;
store.label = label;
store.deepBerry = deepBerry;
const state = reactive({
    view: {
        icon: "",
        title: "",
    },
});

// 标题
watch(
    label,
    (val) => {
        state.view.icon = deepBerry[val]?.icon || "Notebook";
        state.view.title = deepBerry[val]?.title || "成员列表";
    },
    {
        immediate: true,
    }
);
const detailName = computed(() => deepBerry[route.params.type].key_name);
// 返回列表
function goBack() {
    router.go(-1);
}
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
