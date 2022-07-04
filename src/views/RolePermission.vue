<template>
    <div class="m-role">
        <h2 class="m-title">角色权限</h2>
        <div class="m-content">
            <div class="u-roles">
                <div class="u-row" v-for="(item, i) in roles" :key="i">
                    <span>{{ item.name }}</span>
                    <div class="u-button">
                        <Edit class="u-icon u-edit" />
                        <CloseBold class="u-icon u-del" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const roles = [
    {
        name: "管理员",
    },
    {
        name: "普通用户",
    },
    {
        name: "技术人员",
    },
    {
        name: "市场人员",
    },
];
</script>
<style lang="less">
@import "@/assets/css/views/role.less";
</style>
