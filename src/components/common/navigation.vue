<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:15:00
 * @LastEditTime: 2022-06-20 18:55:40
 * @Description: 公共侧边
-->
<template>
    <header class="m-navigation">
        <ul class="u-navigation">
            <li class="u-item" v-for="item in router" :key="item.value">
                <router-link :to="{ name: item.value }">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    name: "CommonNav",
    props: [],
    components: {},
    data: function () {
        return {
            router: [
                {
                    name: "企业管理",
                    value: "company",
                },
                {
                    name: "用户管理",
                    value: "customer",
                },
                {
                    name: "设备管理",
                    value: "equipment",
                },
            ],
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
@import "@/assets/css/common/navigation.less";
</style>
