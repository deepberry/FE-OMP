import { $admin, $io } from "./axios.js";

// 获取企业列表
function getCompanyList(params) {
    return $admin().get(`/api/Orgz`, { params });
}
// 新增企业
function addCompany(data) {
    return $admin().post(`/api/Orgz`, data);
}
// 修改企业信息
function editCompany(data) {
    return $admin().put(`/api/Orgz`, data);
}
// 获取企业logo
function getCompanyLogo(path) {
    return $admin().get(`/api/Orgz/logo/${path}`);
}
// 企业停用/启用
function enabledCompany(OrgzId, enabled) {
    return $admin().put(`/api/Orgz/${OrgzId}/enabled/${enabled}`);
}
// 企业详情
function getCompanyInfo(OrgzId) {
    return $admin().get(`/api/Orgz/${OrgzId}`);
}
// 获取所有企业
function getAllOrgz() {
    return $admin().get(`/api/Orgz/total`);
}

// 获取所有企业
function getNodes(id) {
    return $io().get(`/api/dashboard/${id}/nodes`);
}

// 企业一次登录
function loginOrgzOnce(id) {
    return $admin().get(`/api/Work/user/onelogin/${id}`);
}
export {
    getCompanyList,
    addCompany,
    editCompany,
    getCompanyLogo,
    enabledCompany,
    getCompanyInfo,
    getAllOrgz,
    loginOrgzOnce,
    getNodes,
};
