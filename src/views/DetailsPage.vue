<template>
    <div class="m-details">
        <h2 class="m-title">
            <el-page-header title="返回" @back="goBack" />
            {{ title }}详情
        </h2>
        <!-- tab切换 -->
        <el-tabs v-model="activeName" class="m-tabs">
            <el-tab-pane :label="`${title}信息`" name="info"></el-tab-pane>
            <el-tab-pane :label="`${title}操作日志`" name="logs"></el-tab-pane>
        </el-tabs>
        <component :is="myComponent"></component>
    </div>
</template>
<script>
import companyDetail from "@/components/detail/companyDetail.vue";
import customerDetail from "@/components/detail/customerDetail.vue";
import equipmentDetail from "@/components/detail/equipmentDetail.vue";
export default {
    name: "DetailsPage",
    components: { companyDetail, customerDetail, equipmentDetail },
    data: function () {
        return {
            loading: false,
            activeName: "info",
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
            return this.type + "Detail";
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
