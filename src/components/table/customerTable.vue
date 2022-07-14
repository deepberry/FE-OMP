<template>
    <el-table class="m-table" :data="state.data" border style="width: 100%">
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column prop="userName" label="用户名" width="180" />
        <el-table-column prop="phoneNum" label="手机号码" width="180" />
        <el-table-column prop="orgzName" label="所在企业" />
        <el-table-column prop="status" label="帐号状态" width="120">
            <template #default="scope">
                <span :class="scope.row.status === '禁用' ? 'u-table-disabled' : 'u-table-normal'">
                    {{ scope.row.status }}</span
                >
            </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="最近登录" width="240" />
        <el-table-column prop="address" label="操作" width="180" v-if="hasOperate">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row)" v-if="hasEnabled">{{
                        scope.row.status == "正常" ? "停用" : "启用"
                    }}</el-button>
                    <router-link
                        :to="{ path: `/${label}/details/${scope.row.userId}` }"
                        class="u-table-more"
                        v-if="hasInfo"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, watch, reactive, computed } from "vue";
import { deepBerryStore } from "@/store/index";
import { storeToRefs } from "pinia";

//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);

// store
const store = deepBerryStore();
const { role } = storeToRefs(store);

// 表格data数据
let state = reactive({
    data: [],
});

// 权限判断
// 查看详情权限
const hasInfo = computed(() => role.value.includes(17));
// 启用停用权限
const hasEnabled = computed(() => role.value.includes(15));
// 操作权限
const arr = [17, 15];
const hasOperate = computed(() => role.value.map((item) => arr.includes(item)).filter(Boolean).length);

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
