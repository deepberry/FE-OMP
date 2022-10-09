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
// 获取设备详情
function getEquipmentId(deviceId) {
    return $admin().get(`/api/Device/${deviceId}`);
}
// 获取设备类型
function getEquipmentType() {
    return $admin().get(`/api/Device/type`);
}
// 获取设备追踪
function getEquipmentTrack(id) {
    return $admin().get(`/api/Device/tracking?deviceId=${id}`);
}
// 添加设备追踪
function addEquipmentTrack(data) {
    return $admin().post(`/api/Device/tracking`, data);
}
// 获取设备日志
function getEquipmentLogs(params) {
    return $admin().get(`/api/Device/operationLogPage`, { params });
}

// 获取所有节点
function getNodes(id) {
    return $admin().get(`/api/Device/${id}`);
}
export {
    getEquipmentList,
    addEquipment,
    editEquipment,
    getEquipmentId,
    getEquipmentType,
    getEquipmentTrack,
    addEquipmentTrack,
    getEquipmentLogs,
    getNodes,
};
