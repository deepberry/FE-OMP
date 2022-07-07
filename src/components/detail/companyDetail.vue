<template>
    <div class="m-detail m-company-detail">
        <div class="m-info">
            <!-- <div class="m-row" v-for="(item, i) in state.info" :key="i">
                <span class="u-label">{{ item.label }}</span>
                <span class="u-value">{{ item.value }}</span>
            </div> -->
        </div>
    </div>
</template>
<script setup>
import { getCompanyInfo } from "@/service/company";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
const route = useRoute();
const { id } = route.params;
let state = reactive({
    info: {},
});
onMounted(() =>
    getCompanyInfo(id).then((res) => {
        state.info = res.data.data;
        console.log(state.info);
    })
);
</script>
