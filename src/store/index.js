// 1.Dependency
import { defineStore } from "pinia";
import roleData from "@/assets/data/role.json";

export const deepBerryStore = defineStore("deepBerry", {
    state: () => {
        return {
            deepBerry: {},
            label: "",
            // TODO:测试数据
            role: [7, 6, 5, 24, 25],
            roleData,
        };
    },
    getters: {},
    actions: {},
});
