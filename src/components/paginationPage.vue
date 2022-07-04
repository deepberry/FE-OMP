<template>
    <div class="m-pagination" v-if="pageTotal !== 0">
        <el-pagination
            v-model:currentPage="page"
            v-model:page-size="per"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="total"
        />
    </div>
</template>
<script setup>
import { defineProps, computed, ref } from "vue";
const props = defineProps({
    pagination: Object,
});
const { page, per, total } = computed(() => props.pagination);
const background = ref(true);
</script>
