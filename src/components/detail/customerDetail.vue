<template>
    <div class="m-detail m-customer-detail">
        <div class="m-info">
            <el-descriptions class="m-user" title="用户基本信息" :column="2">
                <el-descriptions-item label="用户ID">kooriookami</el-descriptions-item>
                <el-descriptions-item label="手机号码">18100000000</el-descriptions-item>
                <el-descriptions-item label="用户帐号状态">已启用</el-descriptions-item>
                <el-descriptions-item label="最新登录时间">2022/4/6 11:11:23</el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="m-info m-table">
            <h4>用户所在组织信息</h4>
            <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="id" label="所在企业ID" width="180" />
                <el-table-column prop="name" label="所在企业名称" />
                <el-table-column prop="amount1" label="姓名" />
                <el-table-column prop="amount2" label="所属角色" />
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: "customerDetail",
    props: [],
    components: {
        //demo
    },
    data: function () {
        return {
            loading: false,
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>
