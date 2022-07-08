<template>
    <div class="m-setting">
        <el-popover popper-class="m-popper-setting" placement="top" width="180px" trigger="hover">
            <template #reference>
                <Setting class="u-setting" />
            </template>
            <div class="m-list">
                <router-link :to="item.path" class="u-item" v-for="(item, i) in list" :key="i">
                    {{ item.label }}
                </router-link>
            </div>
        </el-popover>
    </div>
</template>
<script>
export default {
    name: "aside-setting",
    data: function () {
        return {
            list: [
                {
                    path: "/my/details/1",
                    label: "当前账号",
                },
                {
                    path: "/member",
                    label: "成员列表",
                },
                {
                    path: "/role",
                    label: "角色权限",
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
@import "@/assets/css/components/asideSetting.less";
</style>
