<template>
    <el-table class="m-table" :data="table" border style="width: 100%">
        <el-table-column prop="id" label="序号" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="手机号码" />
        <el-table-column prop="address" label="部门" />
        <el-table-column prop="address" label="角色" />
        <el-table-column prop="address" label="状态" />
        <el-table-column prop="address" label="操作">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id, 'close')"
                        >停用</el-button
                    >
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id, 'role')"
                        >授权角色权限
                    </el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
    table: Array,
});
const emit = defineEmits(["toDialog"]);
props;
function handelClick(id, type) {
    emit("toDialog", { id, type });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
