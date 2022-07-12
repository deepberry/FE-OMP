import { $admin } from "./axios.js";

function getUserLogin(params) {
    return $admin().get(`/api/Work/login`, params);
}

export { getUserLogin };
