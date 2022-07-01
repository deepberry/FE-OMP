<template>
    <div class="m-details">
        <h2 class="m-title">
            <el-page-header title="返回" @back="goBack" />
            {{ title }}详情
        </h2>
        <!-- tab切换 -->
        <el-tabs v-model="activeName" class="m-tabs">
            <el-tab-pane :label="`${title}信息`" name="info"></el-tab-pane>
            <el-tab-pane :label="`${title}操作日志`" name="logs" v-if="type !== 'company'"></el-tab-pane>
        </el-tabs>
        <component :is="myComponent"></component>
        <common-pagination v-if="hasPage" :pagination="pagination" />
    </div>
</template>
<script>
import companyDetail from "@/components/detail/companyDetail.vue";
import customerDetail from "@/components/detail/customerDetail.vue";
import equipmentDetail from "@/components/detail/equipmentDetail.vue";
import commonLogs from "@/components/detail/commonLogs.vue";
export default {
    name: "DetailsPage",
    components: { companyDetail, customerDetail, equipmentDetail, commonLogs },
    data: function () {
        return {
            loading: false,
            activeName: "info",

            page: 1,
            per: 1,
            total: 0,
        };
    },
    computed: {
        title() {
            let deepBerry = this.$store.state.deepBerry;
            return deepBerry?.[this.type]?.key_name;
        },
        type() {
            return this.$route.params.type;
        },
        myComponent() {
            if (this.activeName == "logs") return "commonLogs";
            return this.type + "Detail";
        },
        pagination() {
            return {
                page: this.page,
                per: this.per,
                total: this.total,
            };
        },
        hasPage() {
            if (this.activeName == "logs" && this.type !== "company") return true;
            return false;
        },
    },
    watch: {},
    methods: {
        goBack() {
            this.$router.back(-1);
        },
    },

    mounted: function () {},
};
</script>
<style lang="less">
@import "@/assets/css/views/details.less";
</style>
