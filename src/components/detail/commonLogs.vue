<template>
    <div class="m-detail m-commonLogs">
        <el-table class="m-table" :data="table_data" border style="width: 100%">
            <el-table-column prop="id" label="时间" width="180" />
            <el-table-column prop="name" label="操作者" width="180" />
            <el-table-column prop="address" label="行为" />
            <el-table-column prop="address" label="对象类型" />
            <el-table-column prop="address" label="对象" />
            <el-table-column prop="address" label="详情记录" />
        </el-table>
    </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
    data: Array,
});

const table_data = computed(() => props.data);
</script>
