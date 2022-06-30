<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:22
 * @LastEditTime: 2022-06-20 18:58:39
 * @Description:设备管理
-->
<template>
    <div class="v-equipment">
        <h2 class="m-title">{{ title }}</h2>
        <search-bar @toSearch="toSearch" />
        <equipmentTable :table="table" />
        <common-pagination :pagination="pagination" />
    </div>
</template>

<script>
import equipmentTable from "@/components/table/equipmentTable";
export default {
    name: "EquipmentManage",
    props: [],
    components: { equipmentTable },
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
@import "@/assets/css/views/equipment.less";
</style>
