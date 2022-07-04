<template>
    <div class="m-member">
        <h2 class="m-title">成员列表</h2>
        <div class="m-search-box">
            <search-bar :data="member_data" @toQuery="toSearch" />
        </div>
        <memberTable :table="table" :label="label" />
        <common-pagination :pagination="{ page: state.page, per: state.per, total: state.total }" />
    </div>
</template>
<script setup>
import { reactive } from "vue";
import memberTable from "@/components/table/memberTable";

// 搜索
const member_data = {
    uid: "",
    placeholder: `按姓名、手机号码查找`,
    status_title: "-- 状态 --",
    status: [
        {
            label: "正常",
            value: 1,
        },
        {
            label: "已停用",
            value: 0,
        },
    ],
    role_title: "-- 角色 --",
    role: [
        {
            label: "管理员",
            value: 0,
        },
        {
            label: "普通用户",
            value: 1,
        },
        {
            label: "生产人员",
            value: 2,
        },
    ],
};
// 翻页
const state = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch() {}
</script>
