import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Vue.config.productionTip = false;

new Vue({
  // beforeCreate() {
  //   Vue.prototype.$bus = this;
  // },
  render: (h) => h(App),
  store,
}).$mount("#app");

// let a = 1;
