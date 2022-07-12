import { $admin } from "./axios.js";

// 获取用户信息（本账号）
function getUserInfo() {
    return $admin().get(`/api/Work/userInfo`);
}

// 添加角色
function addRole(data) {
    return $admin().post(`/api/Manage/role`, data);
}

// 更新角色
function editRole(data) {
    return $admin().put(`/api/Manage/role`, data);
}

// 删除角色
function delRole(id) {
    return $admin().put(`/api/Manage/role/${id}`);
}

// 获取所有角色
function getRoles() {
    return $admin().get(`/api/Manage/role`);
}

// 获取指定角色
function getRoleId(id) {
    return $admin().get(`/api/Manage/role/${id}`);
}

// 设置角色权限
function setRolePermission(id) {
    return $admin().post(`/api/Manage/role/${id}/permission`);
}

// 获取所有权限
function getRolePermission() {
    return $admin().get(`/api/Manage/permission`);
}

// 获取指定权限
function getRolePermissionId(id) {
    return $admin().get(`/api/Manage/permission/${id}`);
}

// 设置用户角色
function setUserPermission(id) {
    return $admin().get(`/api/Manage/uer/${id}/role`);
}

// 设置用户停用、启用
function setUserEnabled({ userId, enabled }) {
    return $admin().put(`/api/Manage/uer/${userId}/enabled/${enabled}`);
}

export {
    getUserInfo,
    addRole,
    editRole,
    delRole,
    getRoles,
    getRoleId,
    setRolePermission,
    getRolePermission,
    getRolePermissionId,
    setUserPermission,
    setUserEnabled,
};
