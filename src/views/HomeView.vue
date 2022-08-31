<template>
    <div class="v-home"></div>
</template>

<script setup>
const APPID = "ww5429d07e97752284";
const REDIRECT_URI = encodeURIComponent("https://admin.deepberry.cn/omp/#/role/details/0");
const path = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;

window.location.href = path;
</script>
<style lang="less" scoped>
@import "@/assets/css/views/home.less";
</style>
