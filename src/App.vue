<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-07-08 19:13:21
 * @Description: 企业微信运营平台
-->
<template>
    <!-- 首页 -->
    <router-view v-if="route.name == 'home'" />
    <!-- 其它页面 -->
    <div class="m-container" v-else>
        <aside class="m-aside">
            <Navigation />
            <AsideSetting />
        </aside>
        <main class="m-main">
            <!-- 标题 -->
            <h2 class="m-title" v-if="label == 'details'">
                <span class="u-title-txt">
                    <el-page-header title="返回" @back="goBack" v-if="!hasArr" /> {{ detailName }}详情</span
                >
            </h2>
            <h2 class="m-title" v-else>
                <span class="u-title-txt">
                    <component class="u-title-icon" :is="state.view.icon" v-if="state.view.title" />{{
                        state.view.title
                    }}
                </span>
            </h2>

            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </main>
    </div>
    <!-- 公共底部 -->
    <CommonFooter />
</template>

<script setup>
import CommonFooter from "@/components/common/footer.vue";
import Navigation from "@/components/common/commonNavigation.vue";
import AsideSetting from "@/components/asideSetting.vue";
import company from "@/views/CompanyList.vue";
import customer from "@/views/CustomerList.vue";
import equipment from "@/views/EquipmentList.vue";

import project from "../project.json";
import { storeToRefs } from "pinia";
import { reactive, toRaw, watch, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { deepBerryStore } from "@/store";
// 公共store
const store = deepBerryStore();
const route = useRoute();
const router = reactive(useRouter());
let { label, data, role } = storeToRefs(store);
// 存储store
label = toRaw(route).name;
data = project.pages;
store.label = label;
store.data = data;
store.role = role;
// 自定数据
const state = reactive({
    view: {
        icon: "",
        title: "",
    },
});
const Component = ref("");

// 防止报错，组件
company;
customer;
equipment;
// 标题
watch(
    label,
    (val) => {
        Component.value = val;
        state.view.icon = data[val]?.icon || "Notebook";
        state.view.title = data[val]?.title || "成员列表";
    },
    {
        immediate: true,
    }
);
// 返回箭头
const hasArr = computed(() => route.params.type == "role" && route.params.id == 0);
// 标题
const detailName = computed(() => data[route.params.type].key_name);
// 返回列表
function goBack() {
    router.go(-1);
}
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
