<template>
  <div>
    <p>click{{ count }}times,count is {{ numIs }}</p>
    <button @click="add">加</button>
    <button @click="sub">减</button>
    <button @click="addIf">偶数加</button>
    <button @click="addSync">异步加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["numIs"]),
  },
  methods: {
    ...mapMutations(["add", "sub"]),
    ...mapActions(["addIf", "addSync"]),
  },
};
</script>

<style></style>
