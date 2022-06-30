<template>
    <el-table class="m-table" :data="table" border style="width: 100%">
        <el-table-column prop="id" label="用户ID" width="180" />
        <el-table-column prop="name" label="手机号码" width="180" />
        <el-table-column prop="address" label="所在企业" />
        <el-table-column prop="address" label="帐号状态" />
        <el-table-column prop="address" label="最近登录" />
        <el-table-column prop="address" label="操作">
            <template #default="scope">
                <el-button link type="primary" size="small">停用</el-button>
                <el-button link type="primary" size="small" @click="toDetail(scope.row.id)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: "customerTable",
    props: ["table"],
    data: function () {
        return {
            loading: false,
        };
    },
    computed: {
        type() {
            return this.$store.state.type;
        },
    },
    watch: {},
    methods: {
        toDetail(id) {
            this.$router.push(`/${this.type}/details/${id}`);
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>
<style lang="less">
//@import '@/assets/css/demo.less';
</style>
