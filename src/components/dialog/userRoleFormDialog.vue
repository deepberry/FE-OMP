<template>
    <div>
        <el-dialog
            v-model="dialogShow"
            :title="obj.dialogTitle"
            :width="obj.dialogWidth"
            :before-close="close"
            draggable
        >
            <el-form class="m-form-content" :model="obj.dialogForm" label-width="120px">
                <el-form-item label="姓名">
                    {{ obj.dialogForm.name || "-" }}
                </el-form-item>
                <el-form-item label="手机号码">
                    {{ obj.dialogForm.mobile || "-" }}
                </el-form-item>
                <el-form-item label="授权角色">
                    <el-select v-model="obj.dialogForm.roleIds" multiple placeholder="请选择角色">
                        <el-option v-for="(item, i) in roles" :key="i" :label="item.name" :value="item.roleId" />
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
import { defineProps, defineEmits, computed } from "vue";
import { useRouter } from "vue-router";
//====== 数据 ======
const router = useRouter();
// props
const props = defineProps({
    dialogObject: Object,
});
const emit = defineEmits();

// 如果没有token
if (!localStorage.getItem("token")) {
    router.push({
        name: "home",
    });
}

// 弹窗显示
const dialogShow = computed({
    get() {
        return props.dialogObject.dialogVisible;
    },
    set(val) {
        return val;
    },
});

// 显示数据
const roles = computed(() => props.dialogObject.role);

const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "角色权限",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
        dialogForm: props.dialogObject.member || {},
    };
});

//====== 互动 ======
// 取消关闭
const close = () => {
    emit("dialogClose");
};
// 成功
const success = () => {
    emit("dialogSuccess", obj.value.dialogForm);
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
