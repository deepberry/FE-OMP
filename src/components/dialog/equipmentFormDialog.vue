<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="resetForm"
            draggable
        >
            <el-form class="m-form-content" ref="formRef" :model="state.form" :rules="rules" label-width="120px">
                <el-form-item label="设备ID" prop="deviceId">
                    <el-input v-model="state.form.deviceId" />
                </el-form-item>
                <el-form-item label="硬件名称" prop="deviceName">
                    <el-input v-model="state.form.deviceName" />
                </el-form-item>
                <el-form-item label="归属客户" prop="orgzId">
                    <el-input v-model="state.form.orgzId" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span v-if="obj.dialogIsFooter" class="dialog-footer">
                    <el-button @click="resetForm(formRef)">{{ obj.dialogCloseBtnText }}</el-button>
                    <el-button type="primary" @click="submitForm(formRef)">{{ obj.dialogSuccessBtnText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, reactive, ref, watch } from "vue";
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

// dialog默认显示
const obj = {
    dialogTitle: props.dialogObject.title || "设备信息",
    dialogWidth: props.dialogObject.width || "760px",
    dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
    dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
    dialogIsFooter: props.dialogObject.isFooter || true,
    dialogContent: props.dialogObject.content || "是否停用",
};

// 表单
const equipment = computed(() => props.dialogObject.equipment);
let state = reactive({
    form: {},
});

// 表单规则
const formRef = ref("");
const rules = ref({
    orgzId: [{ required: true, message: "请选择企业", trigger: "blur" }],
    deviceName: [{ required: true, message: "请输入设备名称", trigger: "blur" }],
    deviceId: [{ required: true, message: "请输入设备ID", trigger: "blur" }],
});

// 监控传入值 form内容显示编辑或新建
watch(equipment, (obj) => (state.form = obj), { deep: true, immediate: true });

//====== 交互 ======

// 关闭并重置校验
const resetForm = (form) => {
    emit("dialogClose");
    form.resetFields();
};

// 校验并提交
const submitForm = (form) => {
    if (!form) return;
    form.validate((valid, fields) => {
        if (valid) {
            emit("dialogSuccess", state.form);
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
