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
                        <UploadImage
                            class="m-uploader"
                            :url="state.logoUrl"
                            width="180px"
                            height="120px"
                            @update="upload"
                        />
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
                    <el-input v-model="state.form.phoneNum" placeholder="手机号码和用户账号可以二选一填写" />
                </el-form-item>
                <el-form-item label="企业主账号" prop="accountName">
                    <el-input v-model="state.form.accountName" placeholder="2-16位的字符串（必须含字母）" />
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
import _ from "lodash";
import { uploadLogo } from "@/service/cms";
import { getCdnLink } from "@deepberry/common/js/utils";
import { ElNotification } from "element-plus";
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
// 自定义手机号码验证
const checkNum = (rule, value, callback) => {
    if (value) {
        const num = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!num.test(value)) {
            callback(new Error("请输入正确的手机号"));
        } else {
            callback();
        }
    } else {
        if (!state.form.phoneNum && !state.form.accountName) {
            callback(new Error("主账号或手机必填一项"));
        } else {
            callback();
        }
    }
};
// 自定义企业主账号校验
const checkName = (rule, value, callback) => {
    if (value) {
        if (value.length < 2) {
            callback(new Error("请输入至少2-16位数的账号"));
        } else {
            const regString = /[a-zA-Z]+/;
            if (regString.test(value)) {
                callback();
            } else {
                callback(new Error("主账号必须包含字母"));
            }
        }
    } else {
        if (!state.form.phoneNum && !state.form.accountName) {
            callback(new Error("主账号或手机必填一项"));
        } else {
            callback();
        }
    }
};

// 表单规则
const formRef = ref("");
const rules = ref({
    orgzName: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
    contact: [{ required: true, message: "请输入企业联系人", trigger: "blur" }],
    accountName: [{ validator: checkName, trigger: "blur" }],
    phoneNum: [{ validator: checkNum, trigger: "blur" }],
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
    state.form = {};
};
// 校验并提交
const submitForm = (form) => {
    if (!form) return;
    form.validate((valid, fields) => {
        if (valid) {
            if (state.logoUrl) state.form.orgzLogo = state.logoUrl;
            emit("dialogSuccess", state.form);
        } else {
            console.log("error submit!", fields);
        }
    });
};
// 上传logo
const upload = (file) => {
    if (file) {
        let formdata = new FormData();
        formdata.append("file", file);
        formdata.append("path", "logos");
        uploadLogo(formdata).then((res) => {
            state.logoUrl = getCdnLink(res.data.data.name);
            ElNotification({
                title: "成功",
                message: `上传成功`,
                type: "success",
            });
        });
    }
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
