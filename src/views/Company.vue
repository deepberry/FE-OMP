<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:41:52
 * @LastEditTime: 2022-06-20 18:57:56
 * @Description:企业管理
-->
<template>
    <div class="v-company">
        <h2 class="m-title">{{ title }}</h2>
        <search-bar @toSearch="toSearch" />
        <companyTable :table="table" />
        <common-pagination :pagination="pagination" />
    </div>
</template>

<script>
import companyTable from "@/components/table/companyTable";
export default {
    name: "CompanyManage",
    props: [],
    components: { companyTable },
    data: function () {
        return {
            page: 1,
            per: 1,
            total: 0,
            table: [{ id: 1 }],
        };
    },
    computed: {
        title() {
            let deepBerry = this.$store.state.deepBerry;
            return deepBerry[this.$route.name]?.title;
        },
        pagination() {
            return {
                page: this.page,
                per: this.per,
                total: this.total,
            };
        },
    },
    watch: {},
    methods: { toSearch() {} },
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/views/company.less";
</style>
