<template>
    <el-table class="m-table" :data="state.data" border row-key="organizationId" fit style="width: 100%">
        <el-table-column prop="organizationId" label="企业ID" width="120" />
        <el-table-column prop="orgzName" label="企业名称" />
        <el-table-column label="企业Logo">
            <template #default="scope">
                <div class="u-table-img">
                    <img :src="getImg(scope.row.orgzLogo) || logo" />
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="contact" label="联系人" width="200" />
        <el-table-column prop="accountName" label="企业主账号" width="200" />
        <el-table-column prop="phoneNum" label="手机号码" width="200" />
        <el-table-column label="企业状态" width="120">
            <template #default="scope">
                <span :class="scope.row.status === '禁用' ? 'u-table-disabled' : 'u-table-normal'">
                    {{ scope.row.status === "禁用" ? "已停用" : scope.row.status }}</span
                >
            </template>
        </el-table-column>
        <el-table-column prop="createAt" label="账户创建时间" width="240" />
        <el-table-column label="操作" width="280" v-if="hasOperate">
            <template #default="scope">
                <div class="u-table-button">
                    <span @click="handelClick(scope.row, 'close')" v-if="hasEnabled">{{
                        scope.row.status == "正常" ? "停用" : "启用"
                    }}</span>
                    <span @click="handelClick(scope.row, 'edit')" v-if="hasEdit">编辑</span>
                    <router-link
                        :to="{ path: `/${label}/details/${scope.row.organizationId}` }"
                        class="u-table-more"
                        v-if="hasInfo && scope.row.organizationId"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, reactive, watch, computed } from "vue";
import { deepBerryStore } from "@/store/index";
import { getCdnLink } from "@deepberry/common/js/utils";
//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);
const getImg = getCdnLink;
// store
const store = deepBerryStore();

// 权限判断
// 编辑权限
const hasEdit = computed(() => store.role.includes(13));
// 查看详情权限
const hasInfo = computed(() => store.role.includes(12));
// 启用停用权限
const hasEnabled = computed(() => store.role.includes(10));
// 操作权限
const arr = [10, 12, 13];
const hasOperate = computed(() => store.role.map((item) => arr.includes(item)).filter(Boolean).length);

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
