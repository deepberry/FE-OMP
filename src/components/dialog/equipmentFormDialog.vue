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
                <el-form-item label="设备ID" prop="DeviceId">
                    <el-input v-model="state.form.DeviceId" />
                </el-form-item>
                <el-form-item label="设备类型" prop="DeviceTypeId">
                    <el-select v-model="state.form.DeviceTypeId" placeholder="- 请选择 -">
                        <el-option v-for="(item, key) in options" :key="key" :label="item.name" :value="item.id" />
                    </el-select>
                </el-form-item>
                <el-form-item label="归属客户" prop="Orgzid">
                    <el-autocomplete
                        v-model="state.form.Orgzid"
                        :fetch-suggestions="queryCompanyList"
                        value-key="orgzName"
                        placeholder=""
                        @select="handleSelect"
                    />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="state.form.Name" />
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
const links = JSON.parse(localStorage.getItem("orgs"));
const options = JSON.parse(localStorage.getItem("types"));

// dialog默认显示
const obj = computed(() => {
    return {
        dialogTitle: props.dialogObject.title || "设备信息",
        dialogWidth: props.dialogObject.width || "760px",
        dialogCloseBtnText: props.dialogObject.closeBtnText || "取消",
        dialogSuccessBtnText: props.dialogObject.successBtnText || "成功",
        dialogIsFooter: props.dialogObject.isFooter || true,
        dialogContent: props.dialogObject.content || "是否停用",
    };
});

// 表单
let state = reactive({
    form: {},
    handleSelect: {},
    add: false,
});
const form = {
    DeviceId: "",
    DeviceTypeId: "",
    Orgzid: "",
    Name: "",
};

// 表单规则
const orgIdRule = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("请输入企业名称"));
    } else if (!links.filter((item) => item.orgzName == state.form.Orgzid).length) {
        callback(new Error("没有这个企业"));
    } else {
        callback();
    }
};
const formRef = ref("");
const rules = ref({
    DeviceId: [{ required: true, message: "请输入设备ID", trigger: "blur" }],
    DeviceTypeId: [{ required: true, message: "请选择设备类型", trigger: "change" }],
    Orgzid: [{ required: true, validator: orgIdRule }],
});
// 监控传入值 form内容显示编辑或新建
watch(
    props,
    ({ dialogObject }) => {
        const { equipment } = dialogObject;
        if (!equipment) return;
        const { id, deviceId, deviceName, deviceType, orgzId, orgzName, add } = equipment;
        if (add) {
            state.form = { ...form };
            state.add = true;
        } else {
            state.form.id = id;
            state.form.DeviceId = deviceId;
            state.form.DeviceTypeId = deviceType == "未知" ? "" : deviceType;
            state.form.Orgzid = orgzName;
            state.form.Name = deviceName;
            state.add = false;
        }
    },
    { deep: true, immediate: true }
);

//====== 交互 ======

// 关闭并重置校验
const resetForm = () => {
    formRef.value.resetFields();
    emit("dialogClose");
};

// 校验并提交
const submitForm = (form) => {
    if (!form) return;
    form.validate((valid, fields) => {
        if (valid) {
            let _form = { ...state.form };
            _form.Orgzid = links
                .map((item) => (item.orgzName == state.form.Orgzid ? item : false))
                .filter(Boolean)[0].orgzId;

            _form.DeviceTypeId =
                options.filter((item) => item.name == state.form.DeviceTypeId)[0]?.id || state.form.DeviceTypeId;
            _form.add = state.add;
            emit("dialogSuccess", _form);
        } else {
            console.log("error submit!", fields);
        }
    });
};

// 查询企业列表
const queryCompanyList = (queryString, cb) => {
    const results = queryString ? links.filter((item) => item.orgzName.includes(queryString)) : links;
    cb(results);
};
// 选中的企业id和名称
const handleSelect = (item) => {
    state.handleSelect = item;
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
