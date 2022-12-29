import { createApp } from "vue";
import axios from "@/plugins/axios";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import installElementPlus from "@/plugins/element"; // 引入element全局组件
import elementIcon from "@/plugins/svgicon";
import permission from "@/plugins/permission";
import mock from "@/plugins/mock";
import directives from "@/directives";
import veBaseComponents from "@/components/veBaseComponents";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "normalize.css/normalize.css";
import "nprogress/nprogress.css";
import "@/styles/common.scss";
const app = createApp(App); //createApp() 创建vue 应用实例
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component);
// }
app.config.globalProperties.msg = "hello"; //全局组件内都可以访问的属性对象msg
app.use(mock)
    .use(elementIcon)
    .use(veBaseComponents)
    .use(store)
    .use(router)
    .use(installElementPlus)
    .use(axios, { router, store, opt: "VE_API" })
    .use(permission, { router, store })
    .use(directives, { router, store })
    .provide("message", "hello") //提供一个值,后代组件中都可以使用这个值
    .mount("#app"); //将应用实例挂载到容器元素中
