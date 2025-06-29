import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Button } from "vant";
import Antd from "ant-design-vue";
import "vant/lib/index.css";
import "./assets/css/index.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Antd);
app.mount("#app");
