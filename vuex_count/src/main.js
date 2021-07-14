import Vue from "vue";
import App from "./App.vue";
import store from "./store";
new Vue({
  render: (h) => h(App),
  store, //通过$store 获取属性和方法
}).$mount("#app");
