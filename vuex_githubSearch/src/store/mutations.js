export default {
  //mutation中默认接受的参数就是state
  requesting(state) {
    state.searchView = false;
    state.loading = true;
  },
  succeed(state, { users }) {
    //如果传入的是对象那么也必须以对象形式接受,否则state里面数据更新不了
    state.loading = false;
    state.users = users;
  },
  error(state, { esg }) {
    state.loading = false;
    state.errmsg = esg;
  },
};
