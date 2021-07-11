<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
        :dt="deltetComment"
      />
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
  props: {
    comments: Array,
    deltetComment: Function,
  },
};
</script>

<style></style>
