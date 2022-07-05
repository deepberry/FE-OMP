import searchBar from "@/components/searchBar.vue";
import pagination from "@/components/paginationPage.vue";
import tipsDialog from "@/components/dialog/tipsDialog.vue";

export default {
    install: function (Vue) {
        Vue.component("searchBar", searchBar);
        Vue.component("commonPagination", pagination);
        Vue.component("tipsDialog", tipsDialog);
    },
};
