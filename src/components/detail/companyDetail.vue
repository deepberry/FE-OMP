<template>
    <div class="m-detail m-company-detail">
        <div class="m-info">
            <div class="m-row" v-for="(item, i) in info" :key="i">
                <span class="u-label">{{ item.label }}</span>
                <span class="u-value">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "companyDetail",
    data: function () {
        return {
            info: [
                {
                    label: "企业ID",
                    value: "kooriookami",
                },
                {
                    label: "企业名称",
                    value: "湖南XXX公司",
                },
                {
                    label: "企业/组织Logo",
                    value: "logo",
                },
                {
                    label: "联系人",
                    value: "张三",
                },
                {
                    label: "手机号码",
                    value: "13612361232",
                },
                {
                    label: "账户创建时间",
                    value: "20220202 10：02：12",
                },
                {
                    label: "账户创建者",
                    value: "张先生（15615631235）",
                },
                {
                    label: "企业账户状态",
                    value: "正常",
                },
            ],
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>
<style lang="less">
//@import '@/assets/css/demo.less';
</style>
