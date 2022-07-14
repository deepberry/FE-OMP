<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:51
 * @LastEditTime: 2022-06-20 18:59:41
 * @Description:客户管理
-->
<template>
    <div class="v-customer v-page">
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="customer_data" @toSearch="onToSearch" />
        </div>
        <!-- 表单 -->
        <customerTable :table="state.table" :label="label" @toDialog="onToDialog" v-loading="state.loading" />
        <!-- 分页 -->
        <commonPagination :pagination="state.pagination" @toParams="onToParams" />
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onTipsSuccess"
        >
            <div class="m-tips-content">
                <span class="u-title">是否启用/停用用户帐号</span>
                <span class="u-label">{{ dialogObject.customer.orgzName }}</span>
                <span class="u-value">({{ dialogObject.customer.phoneNum }})</span>
            </div>
        </tipsDialog>
    </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from "vue";
import { deepBerryStore } from "@/store/index";
import customerTable from "@/components/table/customerTable";
import { getCustomerList, enabledCustomer } from "@/service/customer";
import { ElNotification } from "element-plus";
import { storeToRefs } from "pinia";

//====== 数据 ======

// 获取公共数据
const store = deepBerryStore();
const { label } = storeToRefs(store);

// 搜索 默认选项数据
const customer_data = {
    uid: "",
    placeholder: `请输入用户ID/用户姓名/手机号码/所在成员名称`,
    status_title: "-- 用户帐号状态 --",
    status: [
        {
            label: "正常",
            value: 0,
        },
        {
            label: "已停用",
            value: 1,
        },
    ],
};

// 表格 翻页 成员id 成员名称 弹窗表格
let state = reactive({
    loading: false,
    table: [],
    pagination: {
        page: 1,
        per: 20,
        total: 0,
    },
    search: {
        input: null,
        status: null,
    },
    form: {},
});

// axios查询数据
const params = computed(() => {
    return {
        pageIndex: state.pagination.page - 1,
        pageSize: state.pagination.per,
        Condition: state.search.input,
        Status: state.search.status,
    };
});

// 默认表单
const customer = {};

// 弹窗
let dialogType = ref("form");
let dialogObject = reactive({
    dialogVisible: false,
    customer: customer,
});

//====== 交互 ======

// 搜索查询
function onToSearch({ input_txt, status_id }) {
    state.search.input = input_txt;
    state.search.status = status_id == -1 ? null : status_id;
    state.pagination.page = 1;
    loadCustomerList();
}

// 翻页页码并搜索新的列表
function onToParams(e) {
    state.pagination.page = e;
    loadCustomerList();
}

// 打开弹窗
function onToDialog({ row, type }) {
    dialogObject.dialogVisible = true;
    dialogObject.customer = row ? row : customer;
    dialogType.value = type == "close" ? "tips" : "form";
}

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};
// 确定 tips弹窗 - 成员停用或启用
const onTipsSuccess = () => {
    const { userId, status } = dialogObject.customer;
    const enabled = status == "正常" ? 1 : 0;
    const msg = enabled == 1 ? "启用" : "停用";
    enabledCustomer(userId, enabled).then(() => {
        dialogObject.dialogVisible = false;
        loadCustomerList();
        ElNotification({
            title: "成功",
            message: `${msg}成员成功`,
            type: "success",
        });
    });
};

//====== axios数据 ======

// 初始加载
onMounted(() => loadCustomerList());

// 获取成员列表
function loadCustomerList() {
    state.loading = true;
    getCustomerList(params.value)
        .then((res) => {
            if (res.status == "200") {
                const data = res.data.data;
                state.table = data.datas;
                state.pagination.total = data.totalCount;
            }
        })
        .finally(() => (state.loading = false));
}
</script>
