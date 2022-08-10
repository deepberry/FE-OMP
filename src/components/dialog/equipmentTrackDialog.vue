<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="resetForm"
            draggable
        >
            <el-form class="m-form-content" :model="form" label-width="120px">
                <el-form-item label="设备ID" prop="DeviceId">
                    {{ form.deviceId }}
                </el-form-item>
                <el-form-item label="设备归属" prop="DeviceTypeId">
                    {{ form.orgzName }}
                </el-form-item>
                <el-form-item label="跟踪记录">
                    <el-input v-model="track" :rows="2" type="textarea" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span v-if="obj.dialogIsFooter" class="dialog-footer">
                    <el-button @click="resetForm">{{ obj.dialogCloseBtnText }}</el-button>
                    <el-button type="primary" @click="submitForm">{{ obj.dialogSuccessBtnText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
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

// 跟踪记录
const form = computed(() => props.dialogObject.equipment);
const track = ref("");

// dialog默认显示
const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "设备信息",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "确定",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
    };
});

//====== 交互 ======

// 关闭
const resetForm = () => {
    emit("dialogClose");
};

// 提交
const submitForm = () => {
    if (track.value) {
        const data = { information: track.value, deviceId: form.value.deviceId };
        emit("dialogSuccess", data);
    } else {
        emit("dialogClose");
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
