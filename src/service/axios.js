import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";

function installCmsInterceptors(target, options) {
    options;
    target.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            if (err.response.data)
                ElMessage({
                    type: "error",
                    message: "code:" + err.response.data.httpCode + "=>" + err.response.data.msg,
                });
            return Promise.reject(err);
        }
    );
}

function $admin(options) {
    let config = {
        baseURL: "https://admin.deepberry.cn:444",
        headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: (localStorage && localStorage.getItem("token")) || "",
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

function $io(options) {
    let config = {
        baseURL: "https://io.deepberry.cn",
        headers: {
            Authorization: (localStorage && localStorage.getItem("token")) || "",
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

export { $admin, $io };
