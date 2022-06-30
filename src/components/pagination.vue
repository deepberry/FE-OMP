<template>
    <div class="m-pagination">
        <el-pagination
            v-model:currentPage="page"
            v-model:page-size="per"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="total"
        />
    </div>
</template>
<script>
export default {
    name: "common-pagination",
    props: ["pagination"],

    data: function () {
        return {
            page: this.pagination.page,
            per: this.pagination.per,
            total: this.pagination.total,
            background: true,
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>
