<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-06-24 20:09:54
 * @Description: 企业微信运营平台
-->
<template>
    <CommonHeader />

    <div class="m-container">
        <aside class="m-aside">
            <Navigation />
        </aside>
        <main class="m-main">
            <router-view />
        </main>
    </div>

    <CommonFooter />
</template>

<script>
import CommonHeader from "@/components/common/header.vue";
import CommonFooter from "@/components/common/footer.vue";
import Navigation from "./components/common/navigation.vue";
import { pages } from "../project.json";
export default {
    name: "App",
    components: {
        CommonHeader,
        CommonFooter,
        Navigation,
    },
    data: function () {
        return {};
    },
    computed: {
        type() {
            return this.$route.name;
        },
    },
    watch: {
        type(val) {
            this.$store.commit("CHANGETYPE", val);
        },
    },
    mounted: function () {
        this.$store.commit("SETDEEPBERRY", pages);
    },
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
