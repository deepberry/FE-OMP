<template>
    <div class="m-detail m-equipment-detail" v-loading="state.loading">
        <!-- 设备信息 -->
        <div class="m-card">
            <div class="m-info">
                <div class="m-row" v-for="(item, key) in info" :key="key">
                    <span class="u-label">{{ item }}</span>
                    <span class="u-value">{{ state.data[key] || "-" }}</span>
                </div>
            </div>
            <div class="m-info">
                <div class="m-row" v-for="(item, key) in network" :key="key">
                    <span class="u-label">{{ item }}</span>
                    <span class="u-value">{{ state.data[key] }}</span>
                </div>
            </div>
        </div>
        <div class="m-card m-noBackground">
            <!-- 设备追踪 -->
            <div class="m-info">
                <div class="u-title">设备跟踪记录</div>
                <el-timeline>
                    <el-timeline-item
                        :timestamp="item.createTime"
                        placement="top"
                        color="#047de0"
                        v-for="(item, key) in state.trackList"
                        :key="key"
                    >
                        <el-card>
                            <p>{{ item.createTime }}</p>
                            <p class="u-title">{{ item.information }}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <!-- 设备绑定人员 -->
            <div class="m-info">
                <div class="u-title">用户列表</div>
                <el-table
                    class="m-table"
                    :data="state.data.users"
                    border
                    row-key="userId"
                    style="width: 100%; max-width: 1000px"
                    :cell-style="{ borderColor: '#787878', textAlign: 'center' }"
                    :header-cell-style="{ borderColor: '#787878', textAlign: 'center' }"
                >
                    <el-table-column prop="userId" label="ID" width="80" />
                    <el-table-column prop="userName" label="姓名" />
                    <el-table-column prop="phone" label="手机号码" />
                    <el-table-column prop="role" label="用户角色" />
                </el-table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getEquipmentId, getEquipmentTrack } from "@/service/equipment";
import { useRoute } from "vue-router";
import { onMounted, reactive, toRaw } from "vue";
//====== 数据 ======
// 路由传值
const route = useRoute();
const { id } = toRaw(route).params.value;
// 数据
let state = reactive({
    data: {},
    loading: false,
    trackList: [],
});

//======  axios ======
// 初始加载
onMounted(() => {
    state.loading = true;
    getEquipmentId(id)
        .then((res) => {
            const data = res.data.data;
            let list = [[], [], []];
            data.users.forEach((item) => {
                switch (item.role) {
                    case "超级管理员":
                        list[0].push(item);
                        break;
                    case "管理员":
                        list[1].push(item);
                        break;
                    default:
                        list[2].push(item);
                        break;
                }
            });
            data.users = [...list[0], ...list[1], ...list[2]];
            state.data = data;
        })
        .finally(() => (state.loading = false));

    getEquipmentTrack(id).then((res) => {
        const list = res.data.data;
        state.trackList = list.length ? list : [{ createTime: null, information: "暂无设备追踪记录" }];
    });
});

// 自定
const info = {
    deviceId: "设备ID",
    deviceType: "设备类型",
    orgzName: "归属客户",
    hardVer: "硬件版本",
    softVer: "固件版本",
    value: "绑定状态",
    name: "备注",
};
// 自定
const network = {
    iccid: "ICCID",
    createAt: "创建时间",
    updateAd: "最后更新",
};
</script>
