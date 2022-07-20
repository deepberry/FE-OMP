/*
 * @Description:
 * @Author: litthy
 * @Date: 2022-07-08 13:59:49
 * @LastEditTime: 2022-07-15 09:49:43
 * @LastEditors: litthy
 * @Reference:
 */
// 1.Dependency
import { defineStore } from "pinia";
import roleData from "@/assets/data/role.json";

export const deepBerryStore = defineStore("deepBerry", {
    state: () => {
        return {
            data: {},
            label: "",
            role: [],
            roleData,
        };
    },
    persist: {
        enabled: true,
        strategies: [{ storage: localStorage, paths: ["role", "data"] }],
    },
    getters: {},
    actions: {},
});
