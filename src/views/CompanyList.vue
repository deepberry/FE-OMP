<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:41:52
 * @LastEditTime: 2022-06-20 18:57:56
 * @Description:企业管理
-->
<template>
    <div class="v-company">
        <!-- 标题 -->
        <h2 class="m-title">{{ title }}</h2>
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="company_data" @toQuery="toSearch" />
            <el-button class="u-add" type="primary" @click="createCompany">企业开户</el-button>
        </div>
        <!-- 表格 -->
        <companyTable :table="table" :label="label" @toDialog="onToDialog" />
        <!-- 分页 -->
        <commonPagination :pagination="pagination" />
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'tips'"
        >
            <div class="m-tips-content">
                <span class="u-title">是否启用/停用企业账户</span>
                <span>湖南XXXXXXXXXX公司</span>
                <span>(vfnjkehgnjkedhbngjk)</span>
            </div>
        </tipsDialog>
        <!-- 创建/编辑 弹窗 -->
        <companyFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'form'"
        />
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { deepBerryStore } from "@/store/index";
import companyTable from "@/components/table/companyTable";
import companyFormDialog from "@/components/dialog/companyFormDialog";
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
const pagination = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch() {}

let dialogType = ref("tips");

// 打开弹窗
function onToDialog({ id, type }) {
    dialogObject.dialogVisible = true;
    dialogType.value = type == "edit" ? "form" : "tips";
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

function createCompany() {
    dialogObject.dialogVisible = true;
    dialogType.value = "form";
}
</script>
