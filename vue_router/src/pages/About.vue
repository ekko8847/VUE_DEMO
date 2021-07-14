<template>
  <div>
    <h2>About</h2>
    <h2>{{ msg }}</h2>
    <input type="text" />
    <div class="nav nav-tabs">
      <router-link to="/about/userInfo">Users</router-link>
    </div>
    <div>
      <router-link to="/home/message">messages</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["msg"],
  mounted() {
    console.log("About mounted()");
  },
};
</script>

<style></style>
