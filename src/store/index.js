// 1.Dependency
import { defineStore } from "pinia";

export const deepBerryStore = defineStore("deepBerry", {
    state: () => {
        return {
            data: {},
            label: "",
        };
    },
    getters: {},
    actions: {},
});
