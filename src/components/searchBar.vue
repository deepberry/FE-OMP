<template>
    <div class="m-searchBar">
        <el-input
            v-model.lazy="state.input_txt"
            class="u-input"
            :placeholder="data.placeholder"
            @keyup.enter="toSearch"
        >
            <template #prepend v-if="data.role">
                <Search class="u-icon" />
            </template>
        </el-input>

        <!-- 账户状态 -->
        <template v-if="data.status">
            <el-select v-model="state.status_id" class="u-select" :placeholder="data.status_title">
                <el-option v-for="(item, i) in data.status" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 设备分类 -->
        <template v-if="data.type">
            <el-select v-model="state.type_id" class="u-select" :placeholder="data.type_title">
                <el-option v-for="(item, i) in data.type" :key="i" :label="item.name" :value="item.id" />
            </el-select>
        </template>

        <!-- 绑定状态 -->
        <template v-if="data.bind">
            <el-select v-model="state.bind_id" class="u-select" :placeholder="data.bind_title">
                <el-option v-for="(item, i) in data.bind" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 连接状态 -->
        <template v-if="data.connect">
            <el-select v-model="state.connect_id" class="u-select" :placeholder="data.connect_title">
                <el-option v-for="(item, i) in data.connect" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <!-- 角色 -->
        <template v-if="data.role">
            <el-select v-model="state.role_id" class="u-select" :placeholder="data.role_title">
                +
                <el-option v-for="(item, i) in data.role" :key="i" :label="item.label" :value="item.value" />
            </el-select>
        </template>

        <el-button type="primary" class="u-button" @click="toSearch">查询</el-button>
        <el-button type="info" plain class="u-button" @click="toDefault">重置</el-button>
    </div>
</template>
<script setup>
import { defineProps, reactive, defineEmits } from "vue";
//====== 数据 ======
// props
const props = defineProps({
    data: Object,
});
props;
const emit = defineEmits(["toSearch"]);

// 自定数据
const state = reactive({
    input_txt: "",
    status_id: "",
    bind_id: "",
    connect_id: "",
    role_id: "",
    type_id: "",
});
// 重置
function toDefault() {
    state.input_txt = "";
    state.status_id = "";
    state.bind_id = "";
    state.connect_id = "";
    state.role_id = "";
    state.type_id = "";
    console.log(state);
    toSearch();
}

// 提交搜索数据
function toSearch() {
    let query = {};
    Object.keys(state).forEach((item) => {
        const key = state[item];
        const isNull = key === "" || key === null || key === undefined;
        if (!isNull) {
            query[item] = key;
        }
    });
    emit("toSearch", query);
}
</script>
<style lang="less">
@import "@/assets/css/components/searchBar.less";
</style>
