<template>
    <el-table class="m-table" :data="table" border style="width: 100%">
        <el-table-column prop="id" label="设备ID" width="180" />
        <el-table-column prop="name" label="硬件名称" width="180" />
        <el-table-column prop="address" label="归属客户" />
        <el-table-column prop="address" label="硬件版本" />
        <el-table-column prop="address" label="固件版本" />
        <el-table-column prop="address" label="ICCID" />
        <el-table-column prop="address" label="剩余流量" />
        <el-table-column prop="address" label="绑定状态" />
        <el-table-column prop="address" label="连接状态" />
        <el-table-column prop="address" label="操作">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id)">编辑</el-button>
                    <router-link :to="{ path: `/${label}/details/${scope.row.id}` }" class="u-table-more"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);
props;
function handelClick(id) {
    emit("toDialog", { id });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
