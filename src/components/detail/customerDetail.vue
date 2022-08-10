<template>
    <div class="m-detail m-customer-detail" v-loading="state.loading">
        <div class="m-info">
            <div class="m-row" v-for="(item, key) in info" :key="key">
                <span class="u-label">{{ item }}</span>
                <span class="u-value">{{ state.data[key] }}</span>
            </div>
        </div>
        <div class="m-info">
            <div class="u-title">用户所在组织信息</div>
            <el-table
                class="m-table"
                :data="state.data.items"
                border
                style="width: 100%"
                :cell-style="{ borderColor: '#787878', textAlign: 'center' }"
                :header-cell-style="{ borderColor: '#787878', textAlign: 'center' }"
            >
                <el-table-column prop="orgzId" label="所在企业ID" width="180" />
                <el-table-column prop="orgzName" label="所在企业名称" />
                <el-table-column prop="userName" label="姓名" />
                <el-table-column prop="role" label="所属角色" />
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, toRaw } from "vue";
import { getCustomerInfo } from "@/service/customer";
//====== 数据 ======
// 路由传值
const route = useRoute();
const { id } = toRaw(route).params.value;
// 数据
let state = reactive({
    data: {},
    loading: false,
});

// 自定
const info = {
    userId: "用户ID",
    phoneNum: "手机号码",
    status: "用户帐号状态",
    updateAt: "最新登录时间",
};

//======  axios ======
// 初始加载
onMounted(() => {
    state.loading = true;
    getCustomerInfo(id)
        .then((res) => {
            state.data = res.data.data;
        })
        .finally(() => (state.loading = false));
});
</script>
