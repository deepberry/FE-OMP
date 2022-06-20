<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:15:00
 * @LastEditTime: 2022-06-20 18:55:40
 * @Description: 公共侧边
-->
<template>
    <header class="m-navigation">
        <ul>
            <li><router-link :to="{ name: 'company' }">企业管理</router-link></li>
            <li><router-link :to="{ name: 'customer' }">用户管理</router-link></li>
            <li><router-link :to="{ name: 'equipment' }">设备管理</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "CommonNav",
    props: [],
    components: {},
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
@import "@/assets/css/navigation.less";
</style>
