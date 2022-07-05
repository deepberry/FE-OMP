<template>
    <div class="m-pagination">
        <el-pagination
            v-model:currentPage="page"
            v-model:page-size="per"
            background
            layout="prev, pager, next, jumper"
            :total="total"
        />
    </div>
</template>
<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
    pagination: Object,
});
const { page, per, total } = reactive(props.pagination);
console.log(page, per, total, props.pagination);
</script>
