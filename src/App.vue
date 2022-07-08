<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-07-08 19:13:21
 * @Description: 企业微信运营平台
-->
<template>
    <CommonHeader />

    <div class="m-container">
        <aside class="m-aside">
            <Navigation />
            <asideSetting />
        </aside>
        <main class="m-main">
            <router-view />
        </main>
    </div>

    <CommonFooter />
</template>

<script setup>
import CommonHeader from "@/components/common/header.vue";
import CommonFooter from "@/components/common/footer.vue";
import Navigation from "@/components/common/navigation.vue";
import asideSetting from "@/components/asideSetting.vue";
import project from "../project.json";
import { storeToRefs } from "pinia";
import { toRaw } from "vue";
import { useRoute } from "vue-router";
import { deepBerryStore } from "@/store/index";
const store = deepBerryStore();
const route = useRoute();
let { label, deepBerry } = storeToRefs(store);
label = toRaw(route).name;
deepBerry = project.pages;
store.label = label;
store.deepBerry = deepBerry;
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
