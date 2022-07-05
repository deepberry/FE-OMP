<template>
    <div class="m-searchBar">
        <el-input v-model="uid" class="u-input" :placeholder="data.placeholder">
            <template #prepend v-if="data.role">
                <Search class="u-icon" />
            </template>
        </el-input>

        <!-- 账户状态 -->
        <template v-if="data.status">
            <el-select v-model="status_id" class="u-select" :placeholder="data.status_title">
                <el-option v-for="(item, i) in data.status" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 绑定状态 -->
        <template v-if="data.bind">
            <el-select v-model="bind_id" class="u-select" :placeholder="data.bind_title">
                <el-option v-for="(item, i) in data.bind" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 连接状态 -->
        <template v-if="data.connect">
            <el-select v-model="connect_id" class="u-select" :placeholder="data.connect_title">
                <el-option v-for="(item, i) in data.connect" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 角色 -->
        <template v-if="data.role">
            <el-select v-model="role_id" class="u-select" :placeholder="data.role_title">
                <el-option v-for="(item, i) in data.role" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <el-button type="primary" class="u-button" @click="toQuery">查询</el-button>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
    data: Object,
});
props;

const uid = ref("");
const status_id = ref("");
const bind_id = ref("");
const connect_id = ref("");
const role_id = ref("");

function toQuery() {}
</script>
<style lang="less">
@import "@/assets/css/components/searchBar.less";
</style>
