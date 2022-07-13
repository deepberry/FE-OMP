<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="close"
            draggable
        >
            <slot />
            <template #footer>
                <span v-if="obj.dialogIsFooter" class="dialog-footer">
                    <el-button @click="close">{{ obj.dialogCloseBtnText }}</el-button>
                    <el-button type="primary" @click="success">{{ obj.dialogSuccessBtnText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
//====== 数据 ======
// props
const props = defineProps({
    dialogObject: Object,
});
const emit = defineEmits();

// 弹窗显示
const dialogShow = computed({
    get() {
        return props.dialogObject.dialogVisible;
    },
    set(val) {
        return val;
    },
});

// 弹窗默认样式
const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "Tips",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "确定",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
    };
});

//====== 交互 ======

// 关闭
const close = () => {
    emit("dialogClose");
};
// 成功
const success = () => {
    emit("dialogSuccess");
};
</script>
<script>
export default {
    emits: ["dialogClose", "dialogSuccess"],
};
</script>
<style lang="less">
@import "@/assets/css/components/dialog.less";
</style>
