<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div id="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :deltetComment="deleteComment" />
      <!-- <SlotTest>
        <template slot="second">
          <h3>{{ title }}</h3>
        </template>
        <h2 slot="first">atguigu</h2>
      </SlotTest>
      <hr />
      <TodoList :todos="todos">
        <template v-slot="scoped">
          <span :style="{ color: scope.row.completed ? 'green' : '' }">{{
            scope.row.title
          }}</span>
        </template>
      </TodoList>
      <h2>效果二:显示TODO列表,带序号,TODO的颜色为蓝绿搭配</h2>
      <TodoList>
        <h3>yyyy</h3>
        <template>
          <span :style="{ color: $index % 2 === 1 ? 'green' : 'red' }"
            >{{ $index + 1 }}--{row.title}</span
          >
        </template>
      </TodoList> -->
    </div>
  </div>
</template>

<script>
import Add from "./components/Add.vue";
import List from "./components/List.vue";
// import SlotTest from "./test/SlotTest.vue";

export default {
  name: "App",
  components: {
    Add,
    List,
    // SlotTest,
  },
  data() {
    return {
      // title: "abcd",
      // todos: [],
      comments: [
        { id: 1, user: "laowang", content: "有点难" },
        { id: 2, user: "kiko", content: "还好吧" },
        { id: 3, user: "ekko", content: "太tm难了" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      comment.id = Date.now();
      this.comments.unshift(comment);
    },
    deleteComment(id) {
      // const index = this.comments.findIndex((comment) => comment.id === id);
      // this.comments.splice(index, 1);
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
};
</script>

<style></style>
