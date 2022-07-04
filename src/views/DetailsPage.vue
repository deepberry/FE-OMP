<template>
    <div class="m-details">
        <h2 class="m-title" v-if="type !== 'my'">
            <el-page-header title="返回" @back="goBack" />
            {{ key_name }}详情
        </h2>
        <!-- tab切换 -->
        <el-tabs v-model="activeName" class="m-tabs">
            <el-tab-pane :label="`${key_name}信息`" name="info"></el-tab-pane>
            <el-tab-pane :label="`${key_name}操作日志`" name="logs" v-if="hasLogs"></el-tab-pane>
        </el-tabs>
        <component :is="state.component" :data="state.data"></component>
        <common-pagination v-if="hasLogs" :page="state.page" :per="state.per" :total="state.total" />
    </div>
</template>
<script setup>
import { reactive, markRaw, toRaw, computed, ref, watch } from "vue";
import { deepBerryStore } from "@/store/index";
import { useRoute, useRouter } from "vue-router";
import companyDetail from "@/components/detail/companyDetail.vue";
import customerDetail from "@/components/detail/customerDetail.vue";
import equipmentDetail from "@/components/detail/equipmentDetail.vue";
import myDetail from "@/components/detail/myDetail.vue";
import commonLogs from "@/components/detail/commonLogs.vue";
const store = deepBerryStore();
const route = useRoute();
const router = useRouter();
const { type, id } = toRaw(route).params.value;
const { deepBerry } = store;
const key_name = deepBerry[type]?.key_name || "用户";
id;

// tabs切换name
const activeName = ref("info");

// 自定义数据
const state = reactive({
    loading: false,

    page: 1,
    per: 1,
    total: 0,

    data: [],
    component_name: "commonLogs",
    component: null,
});

// 动态组件
const myComponent = reactive({
    companyDetail: markRaw(companyDetail),
    customerDetail: markRaw(customerDetail),
    equipmentDetail: markRaw(equipmentDetail),
    myDetail: markRaw(myDetail),
    commonLogs: markRaw(commonLogs),
});

// 是否有记录日志
const hasLogs = computed(() => {
    if (type == "company" || type == "my") return false;
    return true;
});

// 监控tab切换组件
watch(
    activeName,
    (val) => {
        state.component_name = val == "logs" ? ref("commonLogs") : ref(`${type}Detail`);
        state.component = myComponent[state.component_name];
    },
    { deep: true, immediate: true }
);

// 返回列表
function goBack() {
    router.go(-1);
}
</script>
<style lang="less">
@import "@/assets/css/views/details.less";
</style>
