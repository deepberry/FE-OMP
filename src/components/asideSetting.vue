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
<script setup>
import { computed } from "vue";
import { deepBerryStore } from "@/store/index";
import { storeToRefs } from "pinia";
//====== 数据 ======
// store
const store = deepBerryStore();
const { role, roleData } = storeToRefs(store);

const manageData = {
    path: "/role",
    label: "角色权限",
};
const userData = {
    path: "/role/member",
    label: "成员列表",
};

// 权限过滤
const list = computed(() => {
    let arr = [
        {
            path: "/role/details/1",
            label: "当前账号",
        },
    ];
    const { manage, user } = roleData.value;
    role.value.forEach((id) => {
        if (user[id]) arr[1] = userData;
        if (manage[id]) arr[2] = manageData;
    });
    return arr.filter(Boolean);
});
</script>

<style lang="less">
@import "@/assets/css/components/asideSetting.less";
</style>
