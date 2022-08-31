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
const Home = () => import("../views/HomeView.vue");
const CompanyList = () => import("../views/CompanyList.vue");
const CustomerList = () => import("../views/CustomerList.vue");
const EquipmentList = () => import("../views/EquipmentList.vue");
const DetailsPage = () => import("../views/DetailsPage.vue");
const RolePermission = () => import("../views/RolePermission.vue");
const MemberList = () => import("../views/MemberList.vue");

// 3.Routes
const routes = [
    { name: "home", path: "/", component: Home },
    {
        name: "company",
        path: "/company",
        component: CompanyList,
        meta: { keepAlive: true },
    },
    {
        name: "customer",
        path: "/customer",
        component: CustomerList,
        meta: { keepAlive: true },
    },
    {
        name: "equipment",
        path: "/equipment",
        component: EquipmentList,
        meta: { keepAlive: true },
    },
    {
        name: "details",
        path: "/:type/details/:id",
        component: DetailsPage,
        meta: { keepAlive: false },
    },
    {
        name: "role",
        path: "/role/:id?",
        component: RolePermission,
        meta: { keepAlive: false },
    },
    {
        name: "member",
        path: "/role/member",
        component: MemberList,
        meta: { keepAlive: true },
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
