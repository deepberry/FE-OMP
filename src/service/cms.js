import { $cms } from "@deepberry/common/js/https";

const $ = $cms({
    headers: {
        Authorization: localStorage.getItem("token"),
    },
});

export function uploadLogo(formdata) {
    return $.post("/api/cms/system/upload/via/omp", formdata);
}
