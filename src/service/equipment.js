import { $admin } from "./axios.js";

// 设备列表
function getEquipmentList(params) {
    return $admin().get(`/api/Device`, { params });
}
// 添加设备
function addEquipment(data) {
    return $admin().post(`/api/Device`, data);
}
// 编辑设备
function editEquipment(data) {
    return $admin().put(`/api/Device`, data);
}

export { getEquipmentList, addEquipment, editEquipment };
