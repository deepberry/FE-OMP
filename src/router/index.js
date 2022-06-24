/*
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-06-24 19:17:02
 * @Description:
 */
// 1.Dependency
import {
    createRouter,
    createWebHistory,
    // createWebHashHistory,
} from "vue-router";

// 2.Components
const Home = () => import("../views/Home.vue");
const Company = () => import("../views/Company.vue");
const Customer = () => import("../views/Customer.vue");
const Equipment = () => import("../views/Equipment.vue");

// 3.Routes
const routes = [
    { name: "home", path: "/", component: Home, redirect: { name: "company" } },
    {
        name: "company",
        path: "/company",
        component: Company,
        meta: {
            title: "企业管理",
        },
    },
    {
        name: "customer",
        path: "/customer",
        component: Customer,
        meta: {
            title: "用户管理",
        },
    },
    {
        name: "equipment",
        path: "/equipment",
        component: Equipment,
        meta: {
            title: "设备管理",
        },
    },
];

// 4.Build An Instance
const router = createRouter({
    // history: createWebHashHistory(), //hash
    history: createWebHistory(), //history api
    base: "/omp",
    routes,
});

export default router;
