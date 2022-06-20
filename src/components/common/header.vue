<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:15:00
 * @LastEditTime: 2022-06-20 18:51:16
 * @Description: 公共头
-->
<template>
    <header class="m-header">
        <h1 class="m-header-title">
            <img class="u-logo" :src="Logo" alt="深莓智能" />
            <span class="u-title">深莓智能运营管理平台</span>
        </h1>
    </header>
</template>

<script>
import Logo from "@deepberry/common/img/logo.svg";
export default {
    name: "CommonHeader",
    props: [],
    components: {},
    data: function () {
        return {
            Logo,
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/header.less";
</style>
