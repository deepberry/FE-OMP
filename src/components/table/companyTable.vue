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
                <el-button link type="primary" size="small">停用</el-button>
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button link type="primary" size="small" @click="toDetail(scope.row.id)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: "companyTable",
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
