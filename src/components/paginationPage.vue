<template>
    <div class="m-pagination">
        <el-pagination
            :hide-on-single-page="state.single"
            v-model:currentPage="state.page"
            v-model:page-size="state.per"
            background
            layout="total, prev, pager, next, jumper"
            :total="state.total"
            @current-change="handleCurrentChange"
        />
    </div>
</template>
<script setup>
import { defineProps, reactive, watch, defineEmits } from "vue";
//====== 数据 ======
// props
const props = defineProps({
    pagination: Object,
});
const emit = defineEmits(["toParams"]);
// 初始数据
const state = reactive({
    page: 1,
    per: 10,
    total: 0,
    single: true,
});
// 监控变化数据
watch(
    props.pagination,
    (obj) => {
        state.page = obj.page;
        state.per = obj.per;
        state.total = obj.total;
        state.single = state.total > state.per ? false : true;
    },
    { deep: true, immediate: true }
);

//====== 交互 ======
// 提交改变页码
function handleCurrentChange(page) {
    emit("toParams", page);
}
</script>
