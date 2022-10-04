<template>
    <div class="m-detail m-node-detail">
        <template v-if="list && list.length">
            <div class="m-node-props">
                <!-- <div class="u-title">节点： {{ item.name }}</div> -->
                <div v-for="(element, k) in list" :key="k" class="m-node-prop">
                    <div class="u-prop-header">
                        <!-- 图标 -->
                        <i class="u-prop-icon" v-if="typesWhichHaveIcon.includes(element.type)">
                            <img
                                :src="
                                    element.type == 'CAMERA'
                                        ? getIconUrl('camera')
                                        : getIconUrl(element.icon || 'default')
                                "
                                :alt="element.name"
                                @error="loadDefaultIcon(element)"
                            />
                        </i>
                        <!-- 名称 -->
                        <span class="u-prop-name">{{ element.displayName }}</span>
                    </div>
                    <!-- 数据 -->
                    <div class="u-prop-data">
                        <div class="u-prop-switch">
                            <el-switch
                                v-if="element.type == 'SWITCH'"
                                v-model="element.value"
                                active-value="true"
                                inactive-value="false"
                                disabled
                            />
                        </div>
                        <div class="u-prop-value" v-if="element.type == 'INPUT'">
                            <b>{{ element.value || 0 }}</b> {{ element.unit }}
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="m-no-node" v-else>
            <el-alert title="暂无节点数据" type="info" show-icon center :closable="false" />
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getNodes } from "@/service/equipment";
import { getCdnLink } from "@deepberry/common/js/utils";
// 路由传值
const route = useRoute();
const { id } = route.params;
const list = ref([]);
const typesWhichHaveIcon = ref(["INPUT", "CAMERA"]);

// 获取节点属性
const loadNodes = () => {
    getNodes(id).then((res) => {
        list.value = res.data.data.nodeProperies || [];
        console.log(list.value, res);
    });
};

// 旧废弃图标兼容
const loadDefaultIcon = (prop) => {
    prop.icon = "default";
};
const getIconUrl = (icon = "default") => {
    return getCdnLink(`img/common/node-props/${icon}.svg`);
};

onMounted(() => {
    loadNodes();
});
</script>
<style scoped lang="less">
@import "~@/assets/css/components/node.less";
</style>
