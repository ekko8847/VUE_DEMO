<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll" />
    </label>
    <span>
      <span>已完成{{ completeSize }}</span> / 全部{{ todos.length }}
    </span>
    <button
      class="btn btn-danger"
      @click="clearCompletedTodos"
      v-show="completeSize"
    >
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    todos: Array,
    selectAll: Function,
    removeTodos: Function,
  },
  computed: {
    completeSize() {
      return this.todos.reduce(
        (pre, todo) => pre + (todo.completed ? 1 : 0),
        0
      );
    },
    isSelectAll: {
      get() {
        return this.todos.length === this.completeSize && this.completeSize;
      },
      set(value) {
        this.selectAll(value);
      },
    },
  },
  methods: {
    clearCompletedTodos() {
      const { todos, completeSize, removeTodos } = this;
      if (completeSize === todos.length) {
        if (confirm(`确定删除所有吗?`)) {
          removeTodos();
        }
        return;
      }
      removeTodos();
    },
  },
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
