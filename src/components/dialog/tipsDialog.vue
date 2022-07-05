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
const props = defineProps({
    dialogObject: Object,
});

const dialogShow = computed({
    get() {
        return props.dialogObject.dialogVisible;
    },
    set(val) {
        return val;
    },
});
const emit = defineEmits();
const obj = {
    dialogTitle: props.dialogObject.title || "Tips",
    dialogWidth: props.dialogObject.width || "760px",
    dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
    dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
    dialogIsFooter: props.dialogObject.isFooter || true,
    dialogContent: props.dialogObject.content || "是否停用",
};
const close = () => {
    emit("dialogClose", false, "close");
};
const success = () => {
    emit("dialogSuccess", false, "success");
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
