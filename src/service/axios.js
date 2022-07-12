import axios from "axios";
import qs from "qs";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
function loadPop(msg, popType = "message") {
    switch (popType) {
        case "message":
            ElMessage({
                type: "error",
                message: msg,
            });
            break;
        case "alert":
            ElMessageBox.confirm(msg, "错误", {
                confirmButtonText: "确定",
                type: "warning",
            });
            break;
        case "notify":
            ElNotification({
                title: "错误",
                message: msg,
                type: "error",
            });
            break;
        default:
            break;
    }
}
function installCmsInterceptors(target, options) {
    let popType = (options && options.popType) || "message";
    target["interceptors"]["response"].use(
        function (response) {
            if (response.data.code) {
                if (!options || !options.mute) {
                    response.data.msg && loadPop(`[${response.data.code}]${response.data.msg}`, popType);
                }
                return Promise.reject(response);
            }
            return response;
        },
        function (err) {
            if (!options || !options.mute) {
                loadPop(`[${err.response.data.statusCode}]${err.response.data.message}`, popType);
            }
            return PopNextworkError(err);
        }
    );
}
function PopNextworkError(err) {
    return Promise.reject(err);
}

function $admin(options) {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + (localStorage && localStorage.getItem("token")) || "",
            Accept: "text/pain",
        },
    };
    config.data = qs.stringify(config.data);
    // 创建实例
    const ins = axios.create(config);

    // 指定拦截器
    installCmsInterceptors(ins, options);

    return ins;
}

export { $admin };
