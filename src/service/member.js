import { $admin } from "./axios.js";

function getMemberList(params) {
    return $admin().get(`/api/Manage/user`, { params });
}
// 设置用户停用、启用
function setUserEnabled({ userId, enabled }) {
    return $admin().put(`/api/Manage/user/${userId}/enabled/${enabled}`);
}
// 设置用户角色
function setUserPermission({ userId, roleIds }) {
    return $admin().post(`/api/Manage/user/${userId}/role`, { roleIds });
}

export { getMemberList, setUserEnabled, setUserPermission };
