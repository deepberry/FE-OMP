<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:41:52
 * @LastEditTime: 2022-06-20 18:57:56
 * @Description:企业管理
-->
<template>
    <div class="v-company v-page">
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="company_data" @toSearch="onToSearch" />
            <el-button class="u-add" type="primary" @click="onToDialog({ type: 'add' })" v-if="hasAdd"
                >企业开户</el-button
            >
        </div>
        <!-- 表格 -->
        <companyTable :table="state.table" :label="store.label" @toDialog="onToDialog" v-loading="state.loading" />
        <!-- 分页 -->
        <commonPagination :pagination="state.pagination" @toParams="onToParams" />
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onTipsSuccess"
            v-if="dialogType == 'tips'"
        >
            <div class="m-tips-content">
                <span class="u-title">是否启用/停用企业账户</span>
                <span>{{ dialogObject.company.orgzName }}</span>
                <span>企业ID: {{ dialogObject.company.organizationId }}</span>
            </div>
        </tipsDialog>
        <!-- 创建/编辑 弹窗 -->
        <companyFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onFormSuccess"
            v-if="dialogType == 'form'"
        />
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import { deepBerryStore } from "@/store/index";
import companyTable from "@/components/table/companyTable";
import companyFormDialog from "@/components/dialog/companyFormDialog";
import { getCompanyList, addCompany, editCompany, enabledCompany } from "@/service/company";
import { ElNotification } from "element-plus";

//====== 数据 ======

// 获取store公共数据
const store = deepBerryStore();

// 搜索 默认选项数据
const company_data = {
    placeholder: `请输入企业ID/企业名称/联系人/联系电话`,
    status_title: "-- 企业账户状态 --",
    status: [
        {
            label: "全部",
            value: -1,
        },
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

// 表格 翻页 企业id 企业名称 弹窗表格
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
const company = {
    organizationId: "",
    orgzLogo: "",
    orgzName: "",
    phoneNum: "",
    userId: "",
    userName: "",
};

// 弹窗
let dialogType = ref("form");
let dialogObject = reactive({
    dialogVisible: false,
    company: company,
});

// 企业开户权限判断
const hasAdd = computed(() => store.role.includes(9));

//====== 交互 ======

// 搜索查询
function onToSearch({ input_txt, status_id }) {
    state.search.input = input_txt;
    state.search.status = status_id == -1 ? null : status_id;
    state.pagination.page = 1;
    loadCompanyList();
}

// 翻页页码并搜索新的列表
function onToParams(e) {
    state.pagination.page = e;
    loadCompanyList();
}

// 打开弹窗
function onToDialog({ row, type }) {
    dialogObject.dialogVisible = true;
    const _row = row ? row : company;
    if (type == "add") _row.add = true;
    dialogObject.company = _row;
    dialogType.value = type == "close" ? "tips" : "form";
}

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};

// 确定 tips弹窗 - 企业停用或启用
const onTipsSuccess = () => {
    const { organizationId, status } = dialogObject.company;
    const enabled = status == "正常" ? 1 : 0;
    const msg = enabled == 0 ? "启用" : "停用";
    enabledCompany(organizationId, enabled).then(() => {
        dialogObject.dialogVisible = false;
        loadCompanyList();
        ElNotification({
            title: "成功",
            message: `${msg}企业成功`,
            type: "success",
        });
    });
};
// 确定 form弹窗
const onFormSuccess = (form) => {
    dialogObject.dialogVisible = false;
    form.logo = form.orgzLogo;
    !form.organizationId
        ? addCompany(form).then(() => {
              ElNotification({
                  title: "成功",
                  message: "添加企业成功",
                  type: "success",
              });
          })
        : editCompany(form).then(() => {
              ElNotification({
                  title: "成功",
                  message: "修改企业信息成功",
                  type: "success",
              });
          });
};

//====== axios数据 ======

// 初始加载
onMounted(() => loadCompanyList());

// 获取企业列表
function loadCompanyList() {
    state.loading = true;
    getCompanyList(params.value)
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
