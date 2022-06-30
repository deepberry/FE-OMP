<template>
    <div class="m-searchBar">
        <el-input v-model="user" class="u-input" :placeholder="placeholder" />

        <el-select v-model="status" class="u-select" placeholder="用户帐号状态">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
        </el-select>

        <el-button type="primary" class="u-button" @click="onSubmit">查询</el-button>
    </div>
</template>
<script>
export default {
    name: "search-bar",
    data: function () {
        return {
            user: "",
            status: "",
        };
    },
    computed: {
        placeholder() {
            return `请输入${this.title}ID/用户姓名/手机号码/${this.title}名称`;
        },
        title() {
            return "企业";
        },
    },
    watch: {},
    methods: {
        onSubmit() {},
    },
};
</script>
<style lang="less">
@import "@/assets/css/components/searchBar.less";
</style>
