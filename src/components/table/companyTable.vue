<template>
    <el-table class="m-table" :data="table" border style="width: 100%">
        <el-table-column prop="id" label="企业ID" width="180" />
        <el-table-column prop="name" label="企业名称" width="180" />
        <el-table-column prop="address" label="企业Logo" />
        <el-table-column prop="address" label="联系人" />
        <el-table-column prop="address" label="手机号码" />
        <el-table-column prop="address" label="企业状态" />
        <el-table-column prop="address" label="账户创建时间" />
        <el-table-column prop="address" label="操作">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id, 'close')"
                        >停用</el-button
                    >
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id, 'edit')"
                        >编辑</el-button
                    >
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
function handelClick(id, type) {
    emit("toDialog", { id, type });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
