<template>
    <div class="m-detail m-company-detail" v-loading="state.loading">
        <div class="m-info">
            <span class="u-login" @click="onceLogin">一次性登录</span>
            <div class="m-row" v-for="(item, k) in state.info" :key="k">
                <template v-if="k == 'orgzLogo'">
                    <span class="u-label">{{ toName[k] }}</span>
                    <img :src="item" />
                </template>
                <template v-else-if="k == 'items'">
                    <span class="u-label">{{ toName[k] }}</span>
                    <div class="u-info-items">
                        <div class="u-item" v-for="(user, i) in item" :key="i">
                            <span>状态：{{ user.enabled }}</span>
                            <span>姓名：{{ user.userName || "-" }}</span>
                            <span>用户帐号：{{ user.accountName || "-" }}</span>
                            <span>手机号码：{{ user.phoneNum || "-" }}</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <span class="u-label">{{ toName[k] }}</span>
                    <span class="u-value">{{ item || "-" }}</span>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getCompanyInfo, loginOrgzOnce } from "@/service/company";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
//====== 数据 ======

// 路由传值
const route = useRoute();
const { id } = route.params;
let state = reactive({
    info: {},
    loading: false,
});

// 字段替换中文
const toName = {
    createAt: "创建时间",
    organizationId: "企业ID",
    orgzLogo: "企业LOGO",
    orgzName: "企业名称",
    accountName: "企业主账号",
    phoneNum: "企业负责人手机",
    status: "企业状态",
    contact: "企业负责人",
    items: "企业成员",
};

//====== axios数据 ======

// 初始加载
onMounted(() => {
    state.loading = true;
    getCompanyInfo(id)
        .then((res) => {
            let info = res.data.data;
            delete info.userId;
            state.info = info;
        })
        .finally(() => (state.loading = false));
});
// 一次性登录
function onceLogin() {
    loginOrgzOnce(id).then((res) => {
        const token = res.data.data.accessToken;
        const path = window.open("_blank");
        path.location = `https://io.deepberry.cn/insights?token=${token}`;
    });
}
</script>
