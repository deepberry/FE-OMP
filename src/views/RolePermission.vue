<template>
    <div class="m-roles v-page">
        <!-- 内容 -->
        <div class="m-content">
            <!-- 左侧角色 -->
            <div class="m-role" :style="`height: ${state.roleHeight}px`">
                <el-button class="u-add" type="success" @click="showDialog"> + 新建角色 </el-button>
                <!-- 角色 -->
                <div class="u-row" v-for="(item, i) in state.roles" :key="i" @click="showRole(item)">
                    <span class="u-label">{{ item.name }}</span>
                    <div class="u-button">
                        <Edit class="u-icon u-edit" @click.stop="onEditRole(item)" />
                        <CloseBold class="u-icon u-del" @click.stop="onDelRole(item)" />
                    </div>
                </div>
            </div>
            <!-- 右侧权限 -->
            <div class="m-user-role" :style="`height: ${state.roleHeight}px`">
                <h4>
                    <span
                        >功能权限 -【<b>{{ state.roleName ? state.roleName : "暂无角色" }}</b
                        >】</span
                    >
                    <el-button class="u-add" type="success" @click="copyAdd">复制权限并新建角色</el-button>
                </h4>
                <div class="m-tree">
                    <el-tree
                        ref="tree"
                        :data="state.dataSource"
                        show-checkbox
                        :check-on-click-node="true"
                        :expand-on-click-node="false"
                        :default-checked-keys="state.defaultRole"
                        :current-node-key="state.currentRole"
                        node-key="id"
                        default-expand-all
                        @check-change="handleCheckChange"
                    >
                    </el-tree>
                </div>
                <div class="m-button" v-if="state.roleName">
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="changeRole">保存</el-button>
                </div>
            </div>
        </div>
        <!-- 新建/编辑角色 弹窗 -->
        <roleFormDialog
            class="m-form"
            :dialog-object="dialogObject"
            @dialogClose="onDialogClose"
            @dialogSuccess="onAddRole"
        />
    </div>
</template>
<script setup>
import roleFormDialog from "@/components/dialog/roleFormDialog";
import {
    addRole,
    editRole,
    delRole,
    getRoles,
    getRoleId,
    getRolePermission,
    setRolePermission,
} from "@/service/manage";
import { onMounted, reactive, ref } from "vue";
import { ElNotification } from "element-plus";
//====== 数据 ======
//设置数据
let state = reactive({
    clientHeight: "",
    roleHeight: "",
    roles: [],
    dataSource: [],
    copy: false,
    defaultRole: [],
    changeRole: [],
    roleName: "",
    roleId: "",
});
const tree = ref("");

// 弹窗显示
const dialogObject = reactive({
    dialogVisible: false,
    title: "",
    form: {},
});

// 初始加载
onMounted(() => {
    // 设置页面高度
    styleHeight();
    // 加载全部角色
    loadRoles();
    // 加载全部功能权限
    getRolePermission().then((res) => {
        let data = res.data.data;
        state.dataSource = toChildren(data);
    });
});

//====== 处理数据 ======
// 获取并设置高度
const styleHeight = () => {
    state.clientHeight = `${document.documentElement.clientHeight}`;
    state.roleHeight = state.clientHeight - 130;

    window.onresize = () => {
        state.clientHeight = `${document.documentElement.clientHeight}`;
        state.roleHeight = state.clientHeight - 130;
    };
};

// 递归将数据转为label children
const toChildren = (data) => {
    data = data.map((item) => {
        item.label = item.name;
        if (item.childs.length) item.children = toChildren(item.childs);
        return item;
    });
    return data;
};

// 递归获取id
const toRoleId = (arr) => {
    let _arr = [];
    arr.forEach((item) => {
        _arr.push(item.id);
        if (item.childs && item.childs.length) _arr.push(...toRoleId(item.childs));
    });
    return _arr;
};

//  获取全部角色
const loadRoles = () => {
    getRoles().then((res) => {
        state.roles = res.data.data;
    });
};

const handleCheckChange = (data, checked) => {
    if (state.changeRole.includes(data.id)) {
        if (!checked) state.changeRole = state.changeRole.filter((item) => item !== data.id);
    } else {
        if (checked) state.changeRole.push(data.id);
    }
};

//====== 交互 ======

//
const showDialog = () => {
    dialogObject.dialogVisible = true;
    dialogObject.form = {};
    dialogObject.title = "新建角色";
};

// 关闭弹窗
const onDialogClose = () => {
    dialogObject.dialogVisible = false;
};
// 添加角色
const onAddRole = (data) => {
    data.id
        ? editRole(data).then(() => {
              ElNotification({
                  type: "success",
                  title: "成功",
                  message: `修改角色【${data.name}】成功`,
              });
              loadRoles();
          })
        : addRole(data).then(() => {
              ElNotification({
                  type: "success",
                  title: "成功",
                  message: `添加角色【${data.name}】成功`,
              });
              loadRoles();
          });
    onDialogClose();
};
// 复制并新建
const copyAdd = () => {
    dialogObject.dialogVisible = true;
    dialogObject.form = {};
    dialogObject.title = "复制权限并新建角色";
};

// 编辑角色
const onEditRole = (data) => {
    dialogObject.dialogVisible = true;
    dialogObject.form = data;
    dialogObject.title = "编辑角色";
};

// 删除角色
const onDelRole = (data) => {
    delRole(data.roleId)
        .then(() => {
            ElNotification({
                type: "success",
                title: "成功",
                message: `删除${data.name}成功`,
            });
            loadRoles();
        })
        .catch((err) => {
            console.log(err);
        });
};

// 显示对应角色的权限
const showRole = ({ roleId, name }) => {
    tree.value.setCheckedKeys([]);
    state.roleName = name;
    state.roleId = roleId;
    getRoleId(roleId).then((res) => {
        const data = res.data.data[0];
        if (data) state.defaultRole = toRoleId(data.viewPermissoins);
    });
};

// 更改对应角色权限
const changeRole = () => {
    setRolePermission({ id: state.roleId, prmIds: state.changeRole }).then((res) => {
        console.log(res);
        ElNotification({
            type: "success",
            title: "成功",
            message: `修改${state.roleName}权限成功`,
        });
    });
};
</script>
<style lang="less">
@import "@/assets/css/views/role.less";
</style>
