<template>
    <div class="m-pagination" v-if="pageTotal !== 0">
        <el-pagination
            v-model:currentPage="pageIndex"
            v-model:page-size="pageLimit"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="pageTotal"
        />
    </div>
</template>
<script setup>
import { defineProps, computed, ref } from "vue";
const props = defineProps({
    page: Number,
    per: Number,
    total: Number,
});
const pageIndex = computed(() => props.page || 1);
const pageLimit = computed(() => props.per || 10);
const pageTotal = computed(() => props.total || 0);
const background = ref(true);
</script>
