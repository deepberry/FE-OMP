<template>
    <div class="m-member v-page">
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="member_data" @toSearch="onToSearch" />
        </div>
        <!-- 表格 -->
        <memberTable :table="state.table" @toDialog="onToDialog" v-loading="state.loading" />
        <!-- 分页 -->
        <common-pagination :pagination="state.pagination" @toParams="onToParams" />
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
import { reactive, ref, computed, onMounted } from "vue";
import memberTable from "@/components/table/memberTable";
import userRoleFormDialog from "@/components/dialog/userRoleFormDialog";
import { getMemberList } from "@/service/member";
import { getRoles } from "@/service/manage";
//====== 数据 ======

// 搜索 默认选项数据
const member_data = computed(() => {
    return {
        uid: "",
        placeholder: `按姓名、手机号码查找`,
        status_title: "-- 状态 --",
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
        role_title: "-- 角色 --",
        role: [
            {
                label: "全部",
                value: -1,
            },
            ...state.role,
        ],
    };
});

// 表格 翻页
let state = reactive({
    loading: false,
    table: [],
    pagination: {
        page: 1,
        per: 20,
        total: 0,
    },
    search: {
        Condition: null,
        Status: null,
        RoleId: null,
    },
    form: {},
    role: [],
});

// axios查询数据
const params = computed(() => {
    return {
        pageIndex: state.pagination.page - 1,
        pageSize: state.pagination.per,
        ...state.search,
    };
});

// 默认表单
const member = {};

// 弹窗
let dialogType = ref("form");
let dialogObject = reactive({
    dialogVisible: false,
    member: member,
});
//====== 交互 ======

// 搜索查询
function onToSearch({ input_txt, status_id, role_id }) {
    state.search.Condition = input_txt;
    state.search.Status = status_id == -1 ? null : status_id;
    state.search.RoleId = role_id == -1 ? null : role_id;
    state.pagination.page = 1;
    loadEMemberList();
}

// 翻页页码并搜索新的列表
function onToParams(e) {
    state.pagination.page = e;
    loadEMemberList();
}

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};

// 打开弹窗
function onToDialog({ row, type }) {
    dialogObject.dialogVisible = true;
    console.log(row);
    // const _row = row ? row : member;
    // if (type == "add") _row.add = true;
    // dialogObject.member = _row;
    dialogType.value = type == "tips" ? "tips" : "role";
}

// const onFormSuccess = (form) => {
//     dialogObject.dialogVisible = false;

//     form.add
//         ? addEquipment(form).then(() => {
//               ElNotification({
//                   title: "成功",
//                   message: "添加设备成功",
//                   type: "success",
//               });
//           })
//         : editEquipment(form).then(() => {
//               ElNotification({
//                   title: "成功",
//                   message: "修改设备信息成功",
//                   type: "success",
//               });
//           });
// };

//====== axios数据 ======

// 初始加载
onMounted(() => loadData());

// 获取初始数据
function loadData() {
    loadEMemberList();
    loadRole();
}
// 获取成员列表
function loadEMemberList() {
    state.loading = true;
    getMemberList(params.value)
        .then((res) => {
            if (res.status == "200") {
                const data = res.data.data;
                state.table = data.datas;
                state.pagination.total = data.totalCount;
            }
        })
        .finally(() => (state.loading = false));
}
// 加载role列表
function loadRole() {
    getRoles().then((res) => {
        state.role = res.data.data.map((item) => {
            item.label = item.name;
            item.value = item.roleId;
            return item;
        });
    });
}
</script>
