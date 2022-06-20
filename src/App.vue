<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-06-20 18:21:26
 * @Description: 企业微信运营平台
-->
<template>
    <CommonHeader />

    <router-view />

    <CommonFooter />
</template>

<script>
import CommonHeader from "@/components/common/header.vue";
import CommonFooter from "@/components/common/footer.vue";
export default {
    name: "App",
    components: {
        CommonHeader,
        CommonFooter,
    },
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
