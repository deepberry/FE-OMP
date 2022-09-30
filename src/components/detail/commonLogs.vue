<template>
    <div class="m-detail m-commonLogs" v-if="type == 'equipment'">
        <el-table class="m-table" :data="table_data" border style="width: 100%">
            <el-table-column prop="createdAt" label="创建时间" width="180" />
            <el-table-column label="操作者" width="180">
                <template #default="scope">
                    {{ scope.row.userName ? scope.row.userName + "（id：" + scope.row.userId + "）" : "-" }}
                </template>
            </el-table-column>
            <el-table-column prop="operationTypeName" label="行为" />
            <!-- <el-table-column prop="address" label="对象类型" />
            <el-table-column prop="address" label="对象" /> -->
            <el-table-column prop="operationDetail" label="详情记录" />
        </el-table>
    </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
    data: Array,
    type: String,
});
console.log(props.type);

const table_data = computed(() => props.data);
</script>
