<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:22
 * @LastEditTime: 2022-06-20 18:58:39
 * @Description:设备管理
-->
<template>
    <div class="v-equipment">
        <!-- 标题 -->
        <h2 class="m-title"><component class="u-title-icon" :is="icon" />{{ title }}</h2>
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="equipment_data" @toSearch="toSearch" />
            <el-button class="u-add" type="primary" @click="addEquipment">添加设备</el-button>
        </div>
        <!-- 表单 -->
        <equipmentTable :table="table" :label="label" @toDialog="onToDialog" />
        <!-- 分页 -->
        <commonPagination :pagination="pagination" />
        <!-- 创建/编辑 弹窗 -->
        <equipmentFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
        />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { deepBerryStore } from "@/store/index";
import equipmentTable from "@/components/table/equipmentTable";
import equipmentFormDialog from "@/components/dialog/equipmentFormDialog";
const store = deepBerryStore();
const { label, deepBerry } = store;
const { title, icon } = deepBerry[label];

// 搜索
const equipment_data = {
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
const pagination = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch(e) {
    console.log(e, "设备");
}

// 打开弹窗
function onToDialog({ id }) {
    dialogObject.dialogVisible = true;
    id;
}

const dialogObject = reactive({
    dialogVisible: false,
});
// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};
// 确定
const onDialogSuccess = () => {
    dialogObject.dialogVisible = false;
};

function addEquipment() {
    dialogObject.dialogVisible = true;
}
</script>
