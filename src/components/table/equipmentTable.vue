<template>
    <el-table class="m-table" :data="state.data" border style="width: 100%">
        <el-table-column prop="deviceId" label="设备ID" />
        <el-table-column prop="deviceName" label="硬件名称" />
        <el-table-column prop="orgzName" label="归属企业" />
        <el-table-column prop="hard_version" label="硬件版本" />
        <el-table-column prop="soft_version" label="固件版本" />
        <el-table-column prop="iccid" label="ICCID" />
        <el-table-column prop="address" label="操作" width="180">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row)">编辑</el-button>
                    <router-link :to="{ path: `/${label}/details/${scope.row.deviceId}` }" class="u-table-more"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, watch, reactive } from "vue";

//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);

// 表格data数据
let state = reactive({
    data: [],
});

// 监控表格数据
watch(
    props,
    (obj) => {
        state.data = obj.table;
    },
    { deep: true }
);

//====== 交互 ======
// 提交企业id和弹窗类型
function handelClick(row, type) {
    emit("toDialog", { row, type });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
