<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:41:52
 * @LastEditTime: 2022-06-20 18:57:56
 * @Description:企业管理
-->
<template>
    <div class="v-company">
        <h2 class="m-title">{{ title }}</h2>
        <div class="m-search-box">
            <search-bar :data="company_data" @toQuery="toSearch" />
            <el-button class="u-add" type="primary">企业开户</el-button>
        </div>
        <companyTable :table="table" :label="label" />
        <common-pagination :pagination="{ page: state.page, per: state.per, total: state.total }" />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { deepBerryStore } from "@/store/index";
import companyTable from "@/components/table/companyTable";
const store = deepBerryStore();
const { label, deepBerry } = store;
const { title } = deepBerry[label];

// 搜索
const company_data = {
    uid: "",
    placeholder: `请输入企业ID/企业名称/联系人/联系电话`,
    status_title: "-- 企业账户状态 --",
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
