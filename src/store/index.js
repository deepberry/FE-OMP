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
            deepBerry: {},
            label: "",
            // TODO:测试数据
            // role: [7, 6, 5, 24, 25,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],
            role: [],
            roleData,
        };
    },
    getters: {},
    actions: {},
});
