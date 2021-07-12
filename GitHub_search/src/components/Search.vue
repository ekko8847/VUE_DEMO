<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.trim="searchInfo"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Seach",
  data() {
    return {
      searchInfo: "",
    };
  },
  methods: {
    search() {
      const { searchInfo } = this;
      if (searchInfo) {
        this.$bus.$emit("search", searchInfo);
        this.searchInfo = "";
      }
    },
  },
};
</script>

<style scoped></style>
