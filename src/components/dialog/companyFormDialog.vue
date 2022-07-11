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
                <el-form-item label="企业名称" prop="orgzName">
                    <el-input v-model="state.form.orgzName" />
                </el-form-item>
                <el-form-item label="企业/组织Logo">
                    <div class="m-box">
                        <UploadImage class="m-uploader" />
                        <div class="u-tips">
                            <span> 尺寸建议：宽180 x 高60</span>
                            <span> 格式建议：透明背景图片，PNG或gif,logo图形使用深色</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="联系人" prop="userName">
                    <el-input v-model="state.form.userName" />
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNum">
                    <el-input v-model="state.form.phoneNum" />
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

// 表单
const company = computed(() => props.dialogObject.company);
let state = reactive({
    form: {},
});

// 表单规则
const formRef = ref("");
const rules = ref({
    phoneNum: [
        { required: true, message: "请输入联系人手机号码", trigger: "blur" },
        { pattern: /^1[3456789]\d{9}$/, message: "手机号码格式不正确", trigger: "blur" },
    ],
    orgzName: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
    userName: [{ required: true, message: "请输入企业联系人", trigger: "blur" }],
});

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
    dialogTitle: props.dialogObject.title || "企业信息",
    dialogWidth: props.dialogObject.width || "780px",
    dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
    dialogSuccessBtnText: props.dialogObject.successBtnText || "确定",
    dialogIsFooter: props.dialogObject.isFooter || true,
};

// 监控传入值 form内容显示编辑或新建
watch(
    company,
    (obj) => {
        state.form = obj.add ? {} : obj;
    },
    { deep: true, immediate: true }
);

//====== 交互 ======

// 关闭并重置校验
const resetForm = (form) => {
    emit("dialogClose");
    if (!form.validate) return;
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
