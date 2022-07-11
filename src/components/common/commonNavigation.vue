<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:15:00
 * @LastEditTime: 2022-06-20 18:55:40
 * @Description: 公共侧边
-->
<template>
    <div class="m-navigation">
        <div class="m-navigation-logo">
            <img class="u-logo" :src="Logo" alt="深莓智能" />
            <span class="u-title">深莓智能运营管理平台</span>
        </div>
        <ul class="m-navigation-ul">
            <li class="u-item" v-for="item in router" :key="item.value">
                <router-link class="u-txt" :to="{ name: item.value }">
                    <component class="u-icon" :is="item.icon" />
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import Logo from "@deepberry/common/img/logo.svg";
const router = [
    {
        name: "企业管理",
        value: "company",
        icon: "Postcard",
    },
    {
        name: "用户管理",
        value: "customer",
        icon: "User",
    },
    {
        name: "设备管理",
        value: "equipment",
        icon: "SetUp",
    },
];
</script>

<style lang="less">
@import "@/assets/css/common/navigation.less";
</style>
