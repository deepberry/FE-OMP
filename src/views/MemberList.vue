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
            @dialogSuccess="onTipsSuccess"
            v-if="dialogType == 'tips'"
        >
            <div class="m-tips-content">
                <span class="u-title">是否启用/停用成员帐号</span>
                <span>{{ dialogObject.member.name }}</span>
                <span>{{ dialogObject.member.role }}</span>
                <span>{{ dialogObject.member.mobile }}</span>
            </div>
        </tipsDialog>
        <!-- 授权 弹窗 -->
        <userRoleFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onFormSuccess"
            v-if="dialogType == 'role'"
        />
    </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import memberTable from "@/components/table/memberTable";
import userRoleFormDialog from "@/components/dialog/userRoleFormDialog";
import { getMemberList, setUserEnabled, setUserPermission } from "@/service/member";
import { getRoles } from "@/service/manage";
import { ElNotification } from "element-plus";
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
    role: [],
});

//====== 交互 ======

// 搜索查询
const onToSearch = ({ input_txt, status_id, role_id }) => {
    state.search.Condition = input_txt;
    state.search.Status = status_id == -1 ? null : status_id;
    state.search.RoleId = role_id == -1 ? null : role_id;
    state.pagination.page = 1;
    loadEMemberList();
};

// 翻页页码并搜索新的列表
const onToParams = (e) => {
    state.pagination.page = e;
    loadEMemberList();
};

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};

// 打开弹窗
const onToDialog = ({ row, type }) => {
    dialogObject.dialogVisible = true;
    const _row = row ? row : member;
    if (type == "add") _row.add = true;
    dialogObject.member = _row;
    dialogObject.role = state.role;
    dialogType.value = type == "close" ? "tips" : "role";
};
// 表单弹窗确定
const onFormSuccess = (form) => {
    dialogObject.dialogVisible = false;
    const { role, userId } = form;
    setUserPermission({ userId, roleIds: role }).then(() => {
        loadData();
        ElNotification({
            title: "成功",
            message: "设置权限成功",
            type: "success",
        });
    });
    // form.add
    //     ? addEquipment(form).then(() => {
    //           ElNotification({
    //               title: "成功",
    //               message: "添加设备成功",
    //               type: "success",
    //           });
    //       })
    //     : editEquipment(form).then(() => {
    //           ElNotification({
    //               title: "成功",
    //               message: "修改设备信息成功",
    //               type: "success",
    //           });
    //       });
};
// 提示弹窗确定
const onTipsSuccess = () => {
    const enabled = dialogObject.member.disabled == "正常" ? 1 : 0;
    setUserEnabled({ userId: dialogObject.member.userId, enabled }).then(() => {
        dialogObject.dialogVisible = false;
        loadData();
    });
};

//====== axios数据 ======

// 初始加载
onMounted(() => loadData());

// 获取初始数据
const loadData = () => {
    loadEMemberList();
    loadRole();
};
// 获取成员列表
const loadEMemberList = () => {
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
};
// 加载role列表
const loadRole = () => {
    getRoles().then((res) => {
        state.role = res.data.data.map((item) => {
            item.label = item.name;
            item.value = item.roleId;
            return item;
        });
    });
};
</script>
