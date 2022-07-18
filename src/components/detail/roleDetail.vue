<template>
    <div class="m-detail m-customer-detail" v-loading="state.loading">
        <div class="m-info">
            <div class="m-row m-row-user">
                <img class="u-info-avatar" :src="state.data.avatar" :alt="state.data.name" />{{
                    state.data.name || "-"
                }}
            </div>
            <div class="m-row">
                <span class="u-label">userId</span>
                <span class="u-value">{{ state.data.userId || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">手机</span>
                <span class="u-value">{{ state.data.mobile || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">邮箱</span>
                <span class="u-value">{{ state.data.email || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">创建时间</span>
                <span class="u-value">{{ state.data.updatedAt || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">状态</span>
                <span class="u-value">{{ state.data.disabled == "0" ? "正常" : "停用" }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getWorkUser, getUserPermission } from "@/service/index";
import { onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { deepBerryStore } from "@/store/index";
//====== 数据 ======
// 数据
let state = reactive({
    data: {},
    loading: false,
});
const store = deepBerryStore();
let { role } = storeToRefs(store);

//======  axios ======
// 初始加载

onMounted(() => {
    state.loading = true;
    getWorkUser()
        .then((res) => {
            state.data = res.data.data;
            getUserPermission(res.data.data.userId).then((res) => {
                role = res.data.data;
                store.role = role;
            });
        })
        .finally(() => {
            state.loading = false;
        });
});
</script>
