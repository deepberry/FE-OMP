/*
 * @Author: iRuxu
 * @Date: 2022-06-20 17:26:26
 * @LastEditTime: 2022-06-24 19:50:21
 * @Description:
 */
// 1.Dependency
import {
    createRouter,
    // createWebHistory,
    createWebHashHistory,
} from "vue-router";

// 2.Components
const Home = () => import("../views/Home.vue");
const CompanyList = () => import("../views/CompanyList.vue");
const CustomerList = () => import("../views/CustomerList.vue");
const EquipmentList = () => import("../views/EquipmentList.vue");
const DetailsPage = () => import("../views/DetailsPage.vue");
const RolePermission = () => import("../views/RolePermission.vue");
const MemberList = () => import("../views/MemberList.vue");

// 3.Routes
const routes = [
    { name: "home", path: "/", component: Home, redirect: { name: "company" } },
    {
        name: "company",
        path: "/company",
        component: CompanyList,
        meta: {},
    },
    {
        name: "customer",
        path: "/customer",
        component: CustomerList,
        meta: {},
    },
    {
        name: "equipment",
        path: "/equipment",
        component: EquipmentList,
        meta: {},
    },
    {
        name: "details",
        path: "/:type/details/:id",
        component: DetailsPage,
        meta: {},
    },
    {
        name: "role",
        path: "/role",
        component: RolePermission,
        meta: {},
    },
    {
        name: "member",
        path: "/member",
        component: MemberList,
        meta: {},
    },
];

// 4.Build An Instance
const router = createRouter({
    history: createWebHashHistory(), //hash
    // history: createWebHistory(), //history api
    // base: "/omp",
    routes,
});

export default router;
