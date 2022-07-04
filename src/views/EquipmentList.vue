<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:22
 * @LastEditTime: 2022-06-20 18:58:39
 * @Description:设备管理
-->
<template>
    <div class="v-equipment">
        <h2 class="m-title">{{ title }}</h2>
        <div class="m-search-box">
            <search-bar :data="company_data" @toQuery="toSearch" />
            <el-button class="u-add" type="primary">添加设备</el-button>
        </div>
        <equipmentTable :table="table" :label="label" />
        <common-pagination :page="page" :per="per" :total="total" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { deepBerryStore } from "@/store/index";
import equipmentTable from "@/components/table/equipmentTable";
const store = deepBerryStore();
const { label, deepBerry } = store;
const { title } = deepBerry[label];

// 搜索
const company_data = {
    uid: "",
    placeholder: `请输入设备ID/硬件名称/ICCID/归属客户`,
    bind_title: "-- 绑定状态 --",
    bind: [
        {
            label: "已绑定",
            value: 1,
        },
        {
            label: "未绑定",
            value: 0,
        },
    ],
    connect_title: "-- 连接状态 --",
    connect: [
        {
            label: "在线",
            value: 1,
        },
        {
            label: "离线",
            value: 0,
        },
    ],
};

// 表格
const table = [{ id: 1 }];
// 翻页
const page = ref(1);
const per = ref(1);
const total = ref(0);

// 搜索查询
function toSearch() {}
</script>
