<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:51
 * @LastEditTime: 2022-06-20 18:59:41
 * @Description:客户管理
-->
<template>
    <div class="v-customer">
        <!-- 标题 -->
        <h2 class="m-title"><component class="u-title-icon" :is="icon" />{{ title }}</h2>
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="customer_data" @toQuery="toSearch" />
        </div>
        <!-- 表单 -->
        <customerTable :table="table" :label="label" @toDialog="onToDialog" />
        <!-- 分页 -->
        <commonPagination :pagination="pagination" />
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
        >
            <div class="m-content">
                <span class="u-title">是否启用/停用用户帐号</span>
                <span class="u-label">13666222212</span>
                <span class="u-value">(vfnjkehgnjkedhbngjk)</span>
            </div>
        </tipsDialog>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { deepBerryStore } from "@/store/index";
import customerTable from "@/components/table/customerTable";
const store = deepBerryStore();
const { label, deepBerry } = store;
const { title, icon } = deepBerry[label];

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
const pagination = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch() {}

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
</script>
