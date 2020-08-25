import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //Vue只能识别router 否则报错
import store from "./store";

Vue.config.productionTip = false;

//在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV == "development") {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
