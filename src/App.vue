<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-06-20 19:01:37
 * @Description: 企业微信运营平台
-->
<template>
    <CommonHeader />

    <div class="m-container">
        <aside class="m-aside">
            <Navigation />
        </aside>
        <main class="m-main">
            <h2 class="m-title">{{ title }}</h2>
            <router-view />
        </main>
    </div>

    <CommonFooter />
</template>

<script>
import CommonHeader from "@/components/common/header.vue";
import CommonFooter from "@/components/common/footer.vue";
import Navigation from "./components/common/navigation.vue";
export default {
    name: "App",
    components: {
        CommonHeader,
        CommonFooter,
        Navigation,
    },
    props: [],
    data: function () {
        return {};
    },
    computed: {
        title: function () {
            return this.$route.meta.title;
        },
    },
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
