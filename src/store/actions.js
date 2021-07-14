import axios from "axios";
export default {
  searchUsers({ commit }, searchInfo) {
    //actions里面函数默认接受commit方法
    commit("requesting");
    axios
      .get(" https://api.github.com/search/users", {
        params: {
          q: searchInfo,
        },
      })
      .then((res) => {
        const data = res.data;
        const users = data.items.map((item) => ({
          username: item.login,
          avatar_url: item.avatar_url,
          url: item.html_url,
        }));
        commit("succeed", { users }); //触发对应的mutation调用,更新state
      })
      .catch((err) => {
        commit("error", { esg: err.message });
      });
  },
};
