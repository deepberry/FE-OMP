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
export { getCustomerList, enabledCustomer, getCustomerInfo };
