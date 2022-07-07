<template>
    <div class="m-member">
        <!-- 标题 -->
        <h2 class="m-title">成员列表</h2>
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="member_data" @toSearch="toSearch" />
        </div>
        <!-- 表格 -->
        <memberTable :table="table" @toDialog="onToDialog" />
        <!-- 分页 -->
        <common-pagination :pagination="pagination" />
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'tips'"
        >
            <div class="m-tips-content">
                <span class="u-title">是否启用/停用成员帐号</span>
                <span>张三</span>
                <span>管理员</span>
                <span>13875984562</span>
            </div>
        </tipsDialog>
        <!-- 授权 弹窗 -->
        <userRoleFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'role'"
        />
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import memberTable from "@/components/table/memberTable";
import userRoleFormDialog from "@/components/dialog/userRoleFormDialog";

const table = [{ id: 1 }];
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
const pagination = reactive({
    page: 1,
    per: 1,
    total: 0,
});

// 搜索查询
function toSearch(e) {
    console.log(e, "成员");
}

let dialogType = ref("tips");

// 打开弹窗
function onToDialog({ id, type }) {
    dialogObject.dialogVisible = true;
    dialogType.value = type == "role" ? "role" : "tips";
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
