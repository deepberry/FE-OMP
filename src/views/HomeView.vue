<template>
    <div class="v-home">HOME</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() =>
    router.push({
        name: "company",
    })
);
</script>

<script setup></script>
