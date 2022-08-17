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
                <el-form-item label="企业主账号" prop="accountName">
                    <el-input
                        v-model="state.form.accountName"
                        placeholder="2-16位的字母和数字的组合"
                        v-if="company.add"
                    />
                    <span v-else>{{ state.form.accountName || "-" }}</span>
                </el-form-item>
                <el-form-item label="企业名称" prop="orgzName">
                    <el-input v-if="company.add" v-model="state.form.orgzName" />
                    <span v-else>{{ state.form.orgzName }}</span>
                </el-form-item>
                <el-form-item label="企业/组织Logo">
                    <div class="m-box">
                        <UploadImage class="m-uploader" v-model:url="state.logoUrl" />
                        <div class="u-tips">
                            <span> 尺寸建议：宽180 x 高60</span>
                            <span> 格式建议：透明背景图片，PNG或gif,logo图形使用深色</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="联系人" prop="contact">
                    <el-input v-model="state.form.contact" />
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNum">
                    <el-input v-model="state.form.phoneNum" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span v-if="obj.dialogIsFooter" class="dialog-footer">
                    <el-button @click="resetForm">{{ obj.dialogCloseBtnText }}</el-button>
                    <el-button type="primary" @click="submitForm(formRef)">{{ obj.dialogSuccessBtnText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, reactive, ref, watch } from "vue";
import { ElMessage } from "element-plus";
import _ from "lodash";
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
    logoUrl: "",
});

// 表单规则
const formRef = ref("");
const rules = ref({
    orgzName: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
    contact: [{ required: true, message: "请输入企业联系人", trigger: "blur" }],
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
const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "企业信息",
        dialogWidth: props.dialogObject.width || "780px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "确定",
        dialogIsFooter: props.dialogObject.isFooter || true,
    };
});

// 监控传入值 form内容显示编辑或新建
watch(
    company,
    (obj) => {
        state.form = obj.add ? {} : _.cloneDeep(obj);
    },
    { deep: true, immediate: true }
);

//====== 交互 ======

// 关闭并重置校验
const resetForm = () => {
    emit("dialogClose");
    formRef.value.resetFields();
};
// 校验并提交
const submitForm = (form) => {
    if (!form) return;
    form.validate((valid, fields) => {
        if (valid) {
            if (state.logoUrl) state.form.orgzLogo = state.logoUrl;
            if (!state.form.phoneNum && !state.form.accountName) {
                ElMessage.error("主账号或手机必填一项");
            } else {
                // if (!company.value.add) delete state.form.orgzName;
                emit("dialogSuccess", state.form);
            }
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
