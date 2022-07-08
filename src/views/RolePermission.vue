<template>
    <div class="m-roles">
        <!-- 标题 -->
        <h2 class="m-title">角色权限</h2>
        <!-- 内容 -->
        <div class="m-content">
            <!-- 左侧角色 -->
            <div class="m-role" :style="`height: ${roleHeight}px`">
                <el-button class="u-add" type="success" @click="showDialog('form')"> + 新建角色 </el-button>
                <!-- 角色 -->
                <div class="u-row" v-for="(item, i) in roles" :key="i">
                    <span class="u-label">{{ item.name }}</span>
                    <div class="u-button">
                        <Edit class="u-icon u-edit" @click="showDialog('form')" />
                        <CloseBold class="u-icon u-del" @click="showDialog('tips')" />
                    </div>
                </div>
            </div>
            <!-- 右侧权限 -->
            <div class="m-user-role" :style="`height: ${roleHeight}px`">
                <h4>
                    <span>功能权限</span>
                    <el-button class="u-add" type="success">复制权限并新建角色</el-button>
                </h4>
                <div class="m-tree">
                    <el-tree :data="dataSource" show-checkbox node-key="id" default-expand-all>
                        <template #default="{ node, data }">
                            <span class="custom-tree-node">
                                <span>{{ node.label }}</span>
                                <span class="u-button">
                                    <a class="u-add" @click="append(data)"> 新增 </a>
                                    <a class="u-del" style="margin-left: 8px" @click="remove(node, data)"> 删除 </a>
                                </span>
                            </span>
                        </template>
                    </el-tree>
                </div>
                <div class="m-button">
                    <el-button>取消</el-button>
                    <el-button type="primary">保存</el-button>
                </div>
            </div>
        </div>
        <!-- 提示弹窗 -->
        <tipsDialog
            class="m-tips"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'tips'"
        >
            <div class="m-tips-content">
                <span class="u-title">角色还存在授权成员</span>
                <span class="u-title">请转移成员后再删除角色</span>
            </div>
        </tipsDialog>
        <!-- 新建/编辑角色 弹窗 -->
        <roleFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onDialogSuccess"
            v-if="dialogType == 'form'"
        />
    </div>
</template>
<script setup>
import roleFormDialog from "@/components/dialog/roleFormDialog";
import { ref, onMounted, reactive } from "vue";
let clientHeight = ref("");
let roleHeight = ref("");

// role内容高度
onMounted(() => {
    clientHeight.value = `${document.documentElement.clientHeight}`;
    roleHeight.value = clientHeight.value - 84 - 120;

    window.onresize = function () {
        clientHeight.value = `${document.documentElement.clientHeight}`;
        roleHeight.value = clientHeight.value - 84 - 120;
    };
});

const roles = [
    {
        name: "管理员",
        role: "admin",
    },
    {
        name: "普通用户",
        role: "user",
    },
    {
        name: "技术人员",
        role: "programmer",
    },
    {
        name: "市场人员",
        role: "marketing",
    },
];
//

const dataSource = ref([
    {
        id: 1,
        label: "客户管理",
        children: [
            {
                id: 2,
                label: "查看客户列表",
            },
            {
                id: 3,
                label: "企业开户",
            },
            {
                id: 4,
                label: "停用企业账户",
            },
            {
                id: 5,
                label: "启用账户",
            },
            {
                id: 6,
                label: "查看客户详情",
                children: [
                    {
                        id: 7,
                        label: "修改客户信息",
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        label: "用户管理",
        children: [
            {
                id: 9,
                label: "查看用户列表",
            },
            {
                id: 10,
                label: "停用用户帐号",
            },
            {
                id: 11,
                label: "启用用户帐号",
            },
            {
                id: 12,
                label: "查看用户详情",
            },
        ],
    },
    {
        id: 13,
        label: "设备管理",
        children: [
            {
                id: 14,
                label: "查看设备列表",
            },
            {
                id: 15,
                label: "添加设备信息",
            },
            {
                id: 16,
                label: "删除设备信息",
            },
            {
                id: 17,
                label: "查看设备详情",
                children: [
                    {
                        id: 18,
                        label: "修改设备信息",
                    },
                ],
            },
        ],
    },
    {
        id: 19,
        label: "设置",
        children: [
            {
                id: 20,
                label: "当前帐号",
            },
            {
                id: 21,
                label: "成员列表",
            },
            {
                id: 22,
                label: "删除设备信息",
            },
            {
                id: 23,
                label: "角色权限",
                children: [
                    {
                        id: 24,
                        label: "修改角色权限",
                    },
                ],
            },
        ],
    },
]);

let id = 1000;
// 添加
const append = (data) => {
    const newChild = { id: id++, label: "新增", children: [] };
    if (!data.children) {
        data.children = [];
    }
    data.children.push(newChild);
    dataSource.value = [...dataSource.value];
};
// 移除
const remove = (node, data) => {
    const parent = node.parent;
    const children = parent.data.children || parent.data;
    const index = children.findIndex((d) => d.id === data.id);
    children.splice(index, 1);
    dataSource.value = [...dataSource.value];
};

//

const dialogType = ref("tips");
function showDialog(val) {
    dialogObject.dialogVisible = true;
    dialogType.value = val;
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
<style lang="less">
@import "@/assets/css/views/role.less";
</style>
