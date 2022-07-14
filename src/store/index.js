// 1.Dependency
import { defineStore } from "pinia";
import roleData from "@/assets/data/role.json";

export const deepBerryStore = defineStore("deepBerry", {
    state: () => {
        return {
            deepBerry: {},
            label: "",
            role: [5, 6, 7, 31],
            roleData,
        };
    },
    getters: {},
    actions: {},
});
