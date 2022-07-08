<template>
    <el-table class="m-table" :data="table" border style="width: 100%">
        <el-table-column prop="id" label="用户ID" width="180" />
        <el-table-column prop="name" label="手机号码" width="180" />
        <el-table-column prop="address" label="所在企业" />
        <el-table-column prop="address" label="帐号状态" />
        <el-table-column prop="address" label="最近登录" />
        <el-table-column prop="address" label="操作">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row.id)">停用</el-button>
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
