// 1.Create APP
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 2.Components
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);

import router from "./router/index";
app.use(router);

import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

import myComponents from "@/components/components";
app.use(myComponents);

// 3.Mount DOM
app.mount("#app");
