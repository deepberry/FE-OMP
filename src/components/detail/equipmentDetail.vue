<template>
    <div class="m-detail m-equipment-detail" v-loading="state.loading">
        <div class="m-info">
            <div class="m-row" v-for="(item, key) in info" :key="key">
                <span class="u-label">{{ item }}</span>
                <span class="u-value">{{ state.data[key] }}</span>
            </div>
        </div>
        <div class="m-info">
            <div class="m-row" v-for="(item, key) in network" :key="key">
                <span class="u-label">{{ item }}</span>
                <span class="u-value">{{ state.data[key] }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getEquipmentId } from "@/service/equipment";
import { useRoute } from "vue-router";
import { onMounted, reactive, toRaw } from "vue";
//====== 数据 ======
// 路由传值
const route = useRoute();
const { id } = toRaw(route).params.value;
// 数据
let state = reactive({
    data: {},
    loading: false,
});

//======  axios ======
// 初始加载
onMounted(() => {
    state.loading = true;
    getEquipmentId(id)
        .then((res) => {
            state.data = res.data.data;
        })
        .finally(() => (state.loading = false));
});

// 自定
const info = {
    deviceId: "设备ID",
    name: "硬件名称",
    orgzName: "归属客户",
    hardVer: "硬件版本",
    softVer: "固件版本",
    value: "已绑定",
};
// 自定
const network = {
    iccid: "ICCID",
    createAt: "开始时间",
    updateAd: "更新时间",
};
</script>
