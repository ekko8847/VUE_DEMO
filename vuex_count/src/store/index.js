import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  count: 0,
};
const mutations = {
  add(state) {
    state.count++;
  },
  sub(state) {
    state.count--;
  },
};
const actions = {
  addIf({ commit, state }) {
    if (state.count % 2 === 0) {
      commit("add");
    }
  },
  addSync({ commit }) {
    setTimeout(() => {
      commit("add");
    }, 1000);
  },
};
const getters = {
  numIs(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数";
  },
};
export default new Vuex.Store({
  //这里的Store是构造函数
  state,
  mutations,
  actions,
  getters,
});
