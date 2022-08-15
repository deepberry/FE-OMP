// 1.Create APP
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 2.Components
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);

import DeepBerryUI from "@deepberry/vue3-element-extend";
app.use(DeepBerryUI);

import router from "./router/index";
app.use(router);

import pinia from "./store/store";
app.use(pinia);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

import VConsole from "vconsole";
const vConsole = new VConsole();
app.use(vConsole);

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

import myComponents from "@/components/components";
app.use(myComponents);

// 3.Mount DOM
app.mount("#app");
