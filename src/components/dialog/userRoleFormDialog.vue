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
                <el-form-item label="姓名">
                    {{ form.name || "-" }}
                </el-form-item>
                <el-form-item label="手机号码">
                    {{ form.phone || "-" }}
                </el-form-item>
                <el-form-item label="授权角色">
                    <el-select v-model="form.role" placeholder="请选择角色">
                        <el-option v-for="(item, i) in roles" :key="i" :label="item.name" :value="item.role" />
                    </el-select>
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
const form = reactive({
    name: "",
    role: "",
    phone: "",
});
const roles = [
    {
        name: "管理员",
        role: "admin",
    },
    {
        name: "普通用户",
        role: "user",
    },
    {
        name: "技术人员",
        role: "programmer",
    },
    {
        name: "市场人员",
        role: "marketing",
    },
];

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

const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "角色权限",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
    };
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
