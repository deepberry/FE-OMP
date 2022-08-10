<template>
    <el-table class="m-table" :data="state.data" border fit style="width: 100%">
        <el-table-column prop="deviceId" label="设备ID" />
        <el-table-column label="设备类型">
            <template #default="scope">{{ scope.row.deviceType }}</template>
        </el-table-column>
        <el-table-column prop="orgzName" label="归属企业" />
        <el-table-column prop="hard_version" label="硬件版本" />
        <el-table-column prop="soft_version" label="固件版本" />
        <el-table-column prop="iccid" label="ICCID" />
        <el-table-column prop="status" label="连接状态" />
        <el-table-column label="绑定状态">
            <template #default="scope">
                <span :class="scope.row.isBindNode == '未绑定' ? 'u-table-disabled' : 'u-table-normal'">{{
                    scope.row.isBindNode
                }}</span></template
            >
        </el-table-column>
        <el-table-column prop="deviceName" label="备注" />
        <el-table-column prop="tracking" label="最新跟踪" />
        <el-table-column label="操作" width="240" v-if="hasOperate">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row)" v-if="hasEdit"
                        >编辑</el-button
                    >
                    <router-link
                        :to="{ path: `/${label}/details/${scope.row.deviceId}` }"
                        class="u-table-more"
                        v-if="hasInfo && scope.row.deviceId"
                        >查看详情
                    </router-link>
                    <el-button link type="primary" size="small" @click="handelClick(scope.row, 'track')" v-if="hasEdit"
                        >设备跟踪</el-button
                    >
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, watch, reactive, computed } from "vue";
import { deepBerryStore } from "@/store/index";

//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);

// store
const store = deepBerryStore();

// 权限判断
// 编辑权限
const hasEdit = computed(() => store.role.includes(21));
// 查看详情权限
const hasInfo = computed(() => store.role.includes(20));
// 操作权限
const arr = [20, 21];
const hasOperate = computed(() => store.role.map((item) => arr.includes(item)).filter(Boolean).length);

// 表格data数据
let state = reactive({
    data: [],
});

// 监控表格数据
watch(
    props,
    (obj) => {
        state.data = obj.table;
    },
    { deep: true }
);

//====== 交互 ======
// 提交企业id和弹窗类型
function handelClick(row, type) {
    emit("toDialog", { row, type });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
