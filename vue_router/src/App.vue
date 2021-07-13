<template>
  <div>
    <div class="row">
      <div class="col-md-offset-2 page-header">
        <h2>Router Test</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-offset-2 col-md-2 list-group">
        <router-link
          active-class="myActiveLink"
          class="list-group-item"
          to="/about"
          >About</router-link
        >
        <router-link class="list-group-item" to="/home">Home</router-link>
      </div>
      <div class="panel col-md-8">
        <router-view msg="ekko"> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
