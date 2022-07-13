import { $admin } from "./axios.js";

function getMemberList(params) {
    return $admin().get(`/api/Manage/user`, { params });
}
// 设置用户停用、启用
function setUserEnabled({ userId, enabled }) {
    return $admin().put(`/api/Manage/uer/${userId}/enabled/${enabled}`);
}
export { getMemberList, setUserEnabled };
