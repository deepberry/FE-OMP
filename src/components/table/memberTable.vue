<template>
    <el-table class="m-table" :data="table" border row-key="userId" fit style="width: 100%">
        <el-table-column prop="userId" label="userId" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="mobile" label="手机号码" width="180" />
        <el-table-column prop="address" label="部门" />
        <el-table-column prop="roleNames" label="角色" />
        <el-table-column prop="disabled" label="状态" width="120">
            <template #default="scope">
                <span :class="scope.row.disabled === '正常' ? 'u-table-normal' : 'u-table-disabled'">
                    {{ scope.row.disabled }}</span
                >
            </template>
        </el-table-column>
        <el-table-column label="操作" v-if="hasOperate" width="180">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button
                        link
                        type="primary"
                        size="small"
                        @click="handelClick(scope.row, 'close')"
                        v-if="hasEnabled"
                        >停用</el-button
                    >
                    <el-button link type="primary" size="small" @click="handelClick(scope.row, 'role')" v-if="hasEdit"
                        >授权角色权限
                    </el-button>
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
});
const emit = defineEmits(["toDialog"]);

// store
const store = deepBerryStore();

// 权限判断
// 编辑权限
const hasEdit = computed(() => store.role.includes(31));
// 启用停用权限
const hasEnabled = computed(() => store.role.includes(30));
// 操作权限
const arr = [30, 31];
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
