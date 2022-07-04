<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:51
 * @LastEditTime: 2022-06-20 18:59:41
 * @Description:客户管理
-->
<template>
    <div class="v-customer">
        <h2 class="m-title">{{ title }}</h2>
        <div class="m-search-box">
            <search-bar :data="customer_data" @toQuery="toSearch" />
        </div>
        <customerTable :table="table" :label="label" />
        <common-pagination :pagination="{ page: state.page, per: state.per, total: state.total }" />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { deepBerryStore } from "@/store/index";
import customerTable from "@/components/table/customerTable";
const store = deepBerryStore();
const { label, deepBerry } = store;
const { title } = deepBerry[label];

// 搜索
const customer_data = {
    uid: "",
    placeholder: `请输入用户ID/用户姓名/手机号码/所在企业名称`,
    status_title: "-- 用户帐号状态 --",
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
};

// 表格
const table = [{ id: 1 }];
// 翻页
const state = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch() {}
</script>
