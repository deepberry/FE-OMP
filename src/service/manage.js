import { $admin } from "./axios.js";

function getUserInfo() {
    return $admin().get(`/api/Work/userInfo`);
}

export { getUserInfo };
