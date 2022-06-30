<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:51
 * @LastEditTime: 2022-06-20 18:59:41
 * @Description:客户管理
-->
<template>
    <div class="v-customer">
        <h2 class="m-title">{{ title }}</h2>
        <search-bar @toSearch="toSearch" />
        <customerTable :table="table" />
        <common-pagination :pagination="pagination" />
    </div>
</template>

<script>
import customerTable from "@/components/table/customerTable.vue";
export default {
    name: "CustomerManage",
    props: [],
    components: { customerTable },
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
            return deepBerry[this.$route.name].title;
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
@import "@/assets/css/views/customer.less";
</style>
