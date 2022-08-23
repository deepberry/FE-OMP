import { $admin } from "./axios.js";

// 获取用户列表
function getCustomerList(params) {
    return $admin().get(`/api/User`, { params });
}

// 用户停用/启用
function enabledCustomer(UserId, enabled) {
    return $admin().put(`/api/User/${UserId}/enabled/${enabled}`);
}
// 用户详情
function getCustomerInfo(UserId) {
    return $admin().get(`/api/User/${UserId}`);
}

// 重置密码
function resetPassword(id) {
    return $admin().put(`/api/User/${id}/reset`);
}
export { getCustomerList, enabledCustomer, getCustomerInfo, resetPassword };
