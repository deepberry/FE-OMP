import { $admin } from "./axios.js";

function getMemberList(params) {
    return $admin().get(`/api/Manage/user`, { params });
}

export { getMemberList };
