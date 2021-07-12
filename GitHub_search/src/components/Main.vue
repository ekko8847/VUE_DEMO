<template>
  <div>
    <h2 v-if="searchView">请输入关键字搜索</h2>
    <h2 v-else-if="loading">正在加载....</h2>
    <h2 v-else-if="errmsg">{{ errmsg }}</h2>

    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      searchView: true,
      loading: false,
      users: [],
      errmsg: "",
    };
  },
  mounted() {
    this.$bus.$on("search", this.searchUsers);
  },
  methods: {
    searchUsers(searchInfo) {
      this.searchView = false;
      this.loading = true;
      axios
        .get(" https://api.github.com/search/users", {
          params: {
            q: searchInfo,
          },
        })
        .then((res) => {
          this.loading = false;
          const data = res.data;
          const users = data.items.map((item) => ({
            username: item.login,
            avatar_url: item.avatar_url,
            url: item.html_url,
          }));
          this.users = users;
        })
        .catch((err) => {
          this.loading = false;
          this.errmsg = err.message;
        });
    },
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
