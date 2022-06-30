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
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button link type="primary" size="small" @click="toDetail(scope.row.id)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: "equipmentTable",
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
