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
        this.$store.dispatch("searchUsers", searchInfo); //调用actions里面的方法时以this.$store.dispatch()
      }
      this.searchInfo = "";
    },
  },
};
</script>

<style scoped></style>
