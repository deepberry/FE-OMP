<template>
    <div class="m-detail m-equipment-detail">
        <div class="m-info">
            <div class="m-row" v-for="(item, i) in info" :key="i">
                <span class="u-label">{{ item.label }}</span>
                <span class="u-value">{{ item.value }}</span>
            </div>
        </div>
        <div class="m-info">
            <div class="m-row" v-for="(item, i) in network" :key="i">
                <span class="u-label">{{ item.label }}</span>
                <span class="u-value">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "equipmentDetail",
    data: function () {
        return {
            info: [
                {
                    label: "设备ID",
                    value: "003D00163138510938343335",
                },
                {
                    label: "硬件名称",
                    value: "水肥机控制器",
                },
                {
                    label: "归属客户",
                    value: "云南xxx公司",
                },
                {
                    label: "硬件版本",
                    value: "1.0.1",
                },
                {
                    label: "固件版本",
                    value: "1.0.13",
                },
                {
                    label: "绑定状态",
                    value: "已绑定",
                },
                {
                    label: "连接状态",
                    value: "已连接",
                },
            ],
            network: [
                {
                    label: "ICCID",
                    value: "898604940121C1313172",
                },
                {
                    label: "网络类型",
                    value: "LTE",
                },
                {
                    label: "剩余流量",
                    value: "1024M",
                },
                {
                    label: "套餐总流量",
                    value: "2048M",
                },
                {
                    label: "已使用流量",
                    value: "1024M",
                },
                {
                    label: "使用率",
                    value: "50%",
                },
                {
                    label: "开始时间",
                    value: "2022-04-8 21:49:20",
                },
                {
                    label: "过期时间",
                    value: "2024-04-8 21:49:20",
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
