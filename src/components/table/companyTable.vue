<template>
    <el-table class="m-table" :data="state.data" border style="width: 100%">
        <el-table-column prop="organizationId" label="企业ID" width="120" />
        <el-table-column prop="orgzName" label="企业名称" />
        <el-table-column label="企业Logo">
            <template #default="scope">
                <div class="u-table-img">
                    <img :src="scope.row.orgzLogo || logo" />
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="userName" label="联系人" width="200" />
        <el-table-column prop="phoneNum" label="手机号码" width="200" />
        <el-table-column label="企业状态" width="120">
            <template #default="scope">
                <span :class="scope.row.status === '禁用' ? 'u-table-disabled' : 'u-table-normal'">
                    {{ scope.row.status }}</span
                >
            </template>
        </el-table-column>
        <el-table-column prop="createAt" label="账户创建时间" width="240" />
        <el-table-column label="操作" width="240">
            <template #default="scope">
                <div class="u-table-button">
                    <el-button link type="primary" size="small" @click="handelClick(scope.row, 'close')">{{
                        scope.row.status == "正常" ? "停用" : "启用"
                    }}</el-button>
                    <el-button link type="primary" size="small" @click="handelClick(scope.row, 'edit')">编辑</el-button>
                    <router-link :to="{ path: `/${label}/details/${scope.row.organizationId}` }" class="u-table-more"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, reactive, watch } from "vue";
//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);
// 表格data数据
let state = reactive({
    data: [],
});
// 默认企业logo
const logo = "https://www.deepberry.cn/images/placeholders/logo.png";
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
