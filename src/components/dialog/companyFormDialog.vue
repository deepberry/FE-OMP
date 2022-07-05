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
                <el-form-item label="企业名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="企业/组织Logo">
                    <div class="m-box">
                        <el-upload
                            class="m-uploader"
                            action="#"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
                            <div v-else class="u-box">
                                <Picture class="u-icon" />
                            </div>
                        </el-upload>
                        <div class="u-tips">
                            <span> 尺寸建议：宽180 x 高60</span>
                            <span> 格式建议：透明背景图片，PNG或gif,logo图形使用深色</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input v-model="form.user" />
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="form.phone" />
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
const form = reactive({
    name: "",
    imageUrl: "",
    user: "",
    phone: "",
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
    dialogTitle: props.dialogObject.title || "企业信息",
    dialogWidth: props.dialogObject.width || "780px",
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

const handleAvatarSuccess = (response, uploadFile) => {
    form.imageUrl = URL.createObjectURL(uploadFile.raw);
};

const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== "image/jpeg") {
        console.log("Avatar picture must be JPG format!");
        return false;
    } else if (rawFile.size / 1024 / 1024 > 2) {
        console.log("Avatar picture size can not exceed 2MB!");
        return false;
    }
    return true;
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
