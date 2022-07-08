<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="close"
            draggable
        >
            <el-form class="m-form-content" :model="form" label-width="120px">
                <el-form-item label="设备ID">
                    <el-input v-model="form.id" />
                </el-form-item>
                <el-form-item label="硬件名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="归属客户">
                    <el-input v-model="form.user" />
                </el-form-item>
            </el-form>
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
import { defineProps, defineEmits, computed, reactive } from "vue";
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
    dialogTitle: props.dialogObject.title || "设备信息",
    dialogWidth: props.dialogObject.width || "760px",
    dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
    dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
    dialogIsFooter: props.dialogObject.isFooter || true,
    dialogContent: props.dialogObject.content || "是否停用",
};

const form = reactive({
    id: "",
    name: "",
    user: "",
});

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
