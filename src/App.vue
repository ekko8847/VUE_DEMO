<template>
  <div class="container">
    <Search></Search>
    <Main></Main>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Main from "./components/Main.vue";
export default {
  name: "APP",
  components: {
    Search,
    Main,
  },
  /* data() {
    return {
      repoName: "",
      repoUrl: "",
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/search/users")
      .then((res) => {
        const result = res.data;
        const { name, html_Url } = result.items[0];
        this.repoUrl = html_Url;
        this.repoName = name;
      })
      .catch((err) => {
        alert(err.message);
      });
  }, */
};
</script>

<style></style>
