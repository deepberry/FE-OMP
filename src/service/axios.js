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
    console.log(err.response);
    return Promise.reject(err);
}

const __admin = "https://admin.deepberry.cn:444";

function $admin(options) {
    let domain = (options && options.domain) || __admin;
    let config = {
        // 同时发送cookie和basic auth
        withCredentials: true,
        auth: {
            username: (localStorage && localStorage.getItem("token")) || "",
            password: "cms common request",
        },
        baseURL: process.env.NODE_ENV === "production" ? domain : "/",
        headers: { "Content-Type": "multipart/form-data" },
    };
    config.data = qs.stringify(config.data);
    // 创建实例
    const ins = axios.create(config);

    // 指定拦截器
    installCmsInterceptors(ins, options);

    return ins;
}

export { $admin };
