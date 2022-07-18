import { $admin } from "./axios.js";

function getWorkUser() {
    return $admin().get(`/api/Work/userInfo`);
}
function getUserLogin(code) {
    return $admin().get(`/api/Work/login${code}`);
}
function getUserPermission(userId) {
    return $admin().get(`/api/Manage/user/${userId}/permission`);
}

export { getWorkUser, getUserPermission, getUserLogin };
