import { $admin } from "./axios.js";

function getUserInfo() {
    return $admin().get(`/api/Work/userInfo`);
}

function getUserPermission(userId) {
    return $admin().get(`/api/Manage/uer/${userId}/role`);
}

export { getUserInfo, getUserPermission };
