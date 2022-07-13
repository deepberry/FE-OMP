<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="close"
            draggable
        >
            <el-form class="m-form-content" ref="formRef" :model="obj.dialogForm" :rules="rules" label-width="120px">
                <el-form-item label="角色名称" prop="name">
                    <el-input v-model="obj.dialogForm.name" />
                </el-form-item>
                <el-form-item label="角色描述" prop="desc">
                    <el-input v-model="obj.dialogForm.description" type="textarea" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span v-if="obj.dialogIsFooter" class="dialog-footer">
                    <el-button @click="close">{{ obj.dialogCloseBtnText }}</el-button>
                    <el-button type="primary" @click="success(formRef)">{{ obj.dialogSuccessBtnText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, reactive, ref } from "vue";
//====== 数据 ======

// props
const props = defineProps({
    dialogObject: Object,
});
const emit = defineEmits();
console.log(props.dialogObject);

// 弹窗显示
const dialogShow = computed({
    get() {
        return props.dialogObject.dialogVisible;
    },
    set(val) {
        return val;
    },
});

// dialog默认显示
const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "新建角色",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
        dialogForm: props.dialogObject.form || state.form,
    };
});

// 表单
const state = reactive({
    form: {
        name: "",
        description: "",
    },
});
// 验证
const formRef = ref("");
const rules = ref({
    name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
});

//====== 交互 ======

// 关闭并清空
const close = () => {
    emit("dialogClose");
    formRef.value.resetFields();
};
const success = (form) => {
    if (!form) return;
    form.validate((valid, fields) => {
        if (valid) {
            const form = {
                id: obj.value.dialogForm.roleId,
                description: obj.value.dialogForm.description,
                name: obj.value.dialogForm.name,
            };
            emit("dialogSuccess", form);
        } else {
            console.log("error submit!", fields);
        }
    });
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
