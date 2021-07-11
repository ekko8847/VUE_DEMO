<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :toggleTodo="toggleTodo" />
      <Footer
        :todos="todos"
        :selectAll="selectAll"
        :removeTodos="removeTodos"
      />

      <hr />
      <!-- <props-test name="tom" :myAge="-1"/> -->
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [],
    };
  },
  //模拟异步加载
  mounted() {
    setTimeout(() => {
      this.todos = JSON.parse(localStorage.getItem("todos_id")) || [];
    }, 1000);
    this.$bus.$on("keyup", this.addTodo);
  },
  watch: {
    todos: {
      handler(value) {
        localStorage.setItem("todos_id", JSON.stringify(value));
      },
      deep: true, //深度监视
    },
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    selectAll(ischeck) {
      this.todos.forEach((todo) => (todo.completed = ischeck));
    },
    removeTodos() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    //不通过v-model直接修改复选框的bool值
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
