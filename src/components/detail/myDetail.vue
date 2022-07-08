<template>
    <div class="m-detail m-customer-detail">
        <div class="m-info">
            <div class="m-row" v-for="(item, i) in user" :key="i">
                <span class="u-label">{{ item.label }}</span>
                <span class="u-value">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
const user = [
    {
        label: "姓名",
        value: "张三",
    },
    {
        label: "手机号码",
        value: "18100000000",
    },
    {
        label: "邮箱",
        value: "1234556@qq.com",
    },
    {
        label: "公司",
        value: "苏州深莓智能科技有限公司",
    },
    {
        label: "部门",
        value: "技术部",
    },
    {
        label: "角色",
        value: "技术人员；生产人员",
    },
];
</script>
