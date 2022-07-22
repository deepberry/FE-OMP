<template>
    <div class="m-roles v-page">
        <!-- 内容 -->
        <div class="m-content">
            <h4>
                <span>当前角色</span>
                <el-select v-model="roleId" placeholder="请选择角色">
                    <el-option v-for="(item, i) in state.roles" :key="i" :label="item.name" :value="item.roleId" />
                </el-select>
                <el-button class="u-add" type="success" @click="showDialog" v-if="hasAdd"> + 新建角色 </el-button>
                <el-button class="u-add" type="success" @click="copyAdd" v-if="hasCopyAdd"
                    >复制权限并新建角色</el-button
                >
                <template v-if="roleId">
                    <el-button class="u-add" type="info" @click="onEditRole(roleId)" v-if="hasEdit">
                        编辑角色
                    </el-button>
                    <el-button class="u-add" type="danger" @click="onDelRole(roleId)" v-if="hasDel">
                        删除角色
                    </el-button>
                </template>
            </h4>
            <div v-show="roleId">
                <div class="m-tree" v-loading="state.loading">
                    <el-tree
                        ref="tree"
                        :data="state.dataSource"
                        show-checkbox
                        :check-on-click-node="true"
                        :expand-on-click-node="false"
                        :default-checked-keys="state.defaultRole"
                        node-key="id"
                        default-expand-all
                        @check-change="handleCheckChange"
                    >
                    </el-tree>
                </div>
                <div class="m-button" v-if="hasEditManage">
                    <el-button type="primary" @click="setChangeRole">保存</el-button>
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
import { onMounted, reactive, ref, watch, computed } from "vue";
import { ElNotification } from "element-plus";
import { deepBerryStore } from "@/store/index";
import { storeToRefs } from "pinia";
import { ElMessageBox } from "element-plus";

//====== 数据 ======

// 获取store公共数据
const store = deepBerryStore();
const { role } = storeToRefs(store);

//设置数据
let state = reactive({
    loading: true,
    clientHeight: "",
    roleHeight: "",
    roles: [],
    dataSource: [],
    copy: false,
    defaultRole: [],
    changeRole: [],
});
const tree = ref("");
const roleId = ref("");

// 弹窗显示
const dialogObject = reactive({
    dialogVisible: false,
    title: "",
    form: {},
});

// 权限判断
// 编辑角色信息权限
const hasEdit = computed(() => role.value.includes(33));
// 删除权限
const hasDel = computed(() => role.value.includes(34));
// 新建角色权限
const hasAdd = computed(() => role.value.includes(32));
// 复制权限并新建角色权限
const hasCopyAdd = computed(() => role.value.includes(37));
// 编辑角色权限权限
const hasEditManage = computed(() => role.value.includes(36));

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

//  获取全部角色
const loadRoles = () => {
    state.loading = true;
    getRoles()
        .then((res) => {
            state.roles = res.data.data;
        })
        .finally(() => (state.loading = false));
};

//
watch(roleId, (id) => {
    if (id) {
        // 显示对应角色的权限
        tree.value.setCheckedKeys([]);
        state.loading = true;
        getRoleId(id)
            .then((res) => {
                const data = res.data.data[0];
                if (data) state.defaultRole = data.viewPermissoins;
            })
            .finally(() => (state.loading = false));
    }
});

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
    dialogObject.form = {
        prmIds: state.changeRole,
    };
    dialogObject.title = "复制权限并新建角色";
};

// 编辑角色
const onEditRole = (id) => {
    dialogObject.dialogVisible = true;
    dialogObject.form = state.roles.filter((item) => item.roleId == id)[0];
    dialogObject.title = "编辑角色";
};

// 删除角色
const onDelRole = (id) => {
    ElMessageBox.confirm("删除角色后，所有赋予该角色用户的权限将全部移除！！", "警告！！", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(() => {
        delRole(id)
            .then(() => {
                ElNotification({
                    type: "success",
                    title: "成功",
                    message: `删除角色成功`,
                });
                loadRoles();
                roleId.value = "";
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

// 更改对应角色权限
const setChangeRole = () => {
    setRolePermission({ id: roleId.value, prmIds: state.changeRole }).then(() => {
        ElNotification({
            type: "success",
            title: "成功",
            message: `修改角色权限成功`,
        });
    });
};
</script>
<style lang="less">
@import "@/assets/css/views/role.less";
</style>
