<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:07:22
 * @LastEditTime: 2022-06-20 18:58:39
 * @Description:设备管理
-->
<template>
    <div class="v-equipment v-page">
        <!-- 搜索 -->
        <div class="m-search-box">
            <search-bar :data="equipment_data" @toSearch="onToSearch" />
            <el-button class="u-add" type="primary" @click="onToDialog({ type: 'add' })" v-if="hasAdd"
                >添加设备</el-button
            >
        </div>
        <!-- 表单 -->
        <equipmentTable :table="state.table" :label="label" @toDialog="onToDialog" v-loading="state.loading" />
        <!-- 分页 -->
        <commonPagination :pagination="state.pagination" @toParams="onToParams" />
        <!-- 创建/编辑 弹窗 -->
        <equipmentFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onFormSuccess"
        />
    </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { deepBerryStore } from "@/store/index";
import equipmentTable from "@/components/table/equipmentTable";
import equipmentFormDialog from "@/components/dialog/equipmentFormDialog";
import { getEquipmentList, addEquipment, editEquipment, getEquipmentType } from "@/service/equipment";
import { getAllOrgz } from "@/service/company";
import { ElNotification } from "element-plus";
import { storeToRefs } from "pinia";

//====== 数据 ======

// 获取公共数据
const store = deepBerryStore();
const { label, role } = storeToRefs(store);

// 搜索 默认选项数据
let equipment_data = reactive({
    uid: "",
    placeholder: `请输入设备ID/硬件名称/ICCID/归属客户`,
    type_title: "-- 设备分类 --",
    type: JSON.parse(sessionStorage.getItem("types")) || [],
    // bind_title: "-- 绑定状态 --",
    // bind: [
    //     {
    //         label: "已绑定",
    //         value: 1,
    //     },
    //     {
    //         label: "未绑定",
    //         value: 0,
    //     },
    // ],
    // connect_title: "-- 连接状态 --",
    // connect: [
    //     {
    //         label: "在线",
    //         value: 1,
    //     },
    //     {
    //         label: "离线",
    //         value: 0,
    //     },
    // ],
});

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
        Condition: null,
        DeviceTypeId: null,
    },
    form: {},
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
const equipment = {};

// 弹窗
let dialogObject = reactive({
    dialogVisible: false,
    equipment: equipment,
});

// 添加设备权限判断
const hasAdd = computed(() => role.value.includes(19));

//====== 交互 ======

// 搜索查询
function onToSearch({ input_txt, type_id }) {
    state.search.Condition = input_txt;
    state.search.DeviceTypeId = type_id;
    // state.search.status = status_id == -1 ? null : status_id;
    state.pagination.page = 1;
    loadEquipmentList();
}

// 翻页页码并搜索新的列表
function onToParams(e) {
    state.pagination.page = e;
    loadEquipmentList();
}

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};

// 打开弹窗
function onToDialog({ row, type }) {
    dialogObject.dialogVisible = true;
    const _row = row ? row : equipment;
    if (type == "add") _row.add = true;
    dialogObject.equipment = _row;
}

const onFormSuccess = (form) => {
    dialogObject.dialogVisible = false;
    if (form.add) {
        addEquipment(form).then(() => {
            ElNotification({
                title: "成功",
                message: "添加设备成功",
                type: "success",
            });
            loadEquipmentList();
        });
    } else {
        editEquipment(form).then(() => {
            ElNotification({
                title: "成功",
                message: "修改设备信息成功",
                type: "success",
            });
            loadEquipmentList();
        });
    }
};

//====== axios数据 ======

// 初始加载
onMounted(() => loadEquipmentList());

// 获取成员列表
function loadEquipmentList() {
    state.loading = true;
    getEquipmentList(params.value)
        .then((res) => {
            if (res.status == "200") {
                const data = res.data.data;
                state.table = data.datas;
                state.pagination.total = data.totalCount;
            }
        })
        .finally(() => (state.loading = false));
}

if (!sessionStorage.getItem("types"))
    getEquipmentType().then((res) => {
        const list = res.data.data;
        equipment_data.type = list.reverse();
        sessionStorage.setItem("types", JSON.stringify(list));
    });

if (!sessionStorage.getItem("orgs"))
    getAllOrgz().then((res) => {
        const list = res.data.data;
        sessionStorage.setItem("orgs", JSON.stringify(list));
    });
</script>
