<template>
  <ul>
    <li>props id:{{ id }}</li>
    <li>props name:{{ name }}</li>
    <li>props title:{{ title }}</li>
    <br />
    <li>query ID:{{ $route.query.id }}--TITLE:{{ $route.query.title }}</li>
    <li>ID: {{ $route.params.id }}</li>
    <li>TITLE: {{ detail.title }}</li>
    <li>CONTENT: {{ detail.content }}</li>
  </ul>
</template>

<script>
const allDetails = [
  { id: 1, title: "Message00001", content: "Message Content001" },
  { id: 3, title: "Message00003", content: "Message Content003" },
  { id: 5, title: "Message00005", content: "Message Content005" },
];
export default {
  name: "Detail",
  props: ["id", "name", "title"],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.updateUI(this.$route);
  },
  watch: {
    $route: function(value) {
      this.updateUI(value);
    },
  },
  methods: {
    updateUI(route) {
      const id = route.params.id * 1;
      setTimeout(() => {
        const detail = allDetails.find((item) => item.id === id);
        this.detail = detail;
      }, 1000);
    },
  },
};
</script>

<style></style>
