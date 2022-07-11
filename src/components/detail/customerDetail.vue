<template>
    <div class="m-detail m-customer-detail">
        <div class="m-info">
            <el-descriptions class="m-user" title="用户基本信息" :column="2">
                <el-descriptions-item label="用户ID">{{ state.data.userId }}</el-descriptions-item>
                <el-descriptions-item label="手机号码">{{ state.data.phoneNum }}</el-descriptions-item>
                <el-descriptions-item label="用户帐号状态">{{ state.data.status }}</el-descriptions-item>
                <el-descriptions-item label="最新登录时间">{{ state.data.updateAt }}</el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="m-info m-table">
            <h4>用户所在组织信息</h4>
            <el-table :data="state.data.items" border style="width: 100%">
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
});

//======  axios ======
// 初始加载
onMounted(() => {
    getCustomerInfo(id).then((res) => {
        state.data = res.data.data;
    });
});
</script>
