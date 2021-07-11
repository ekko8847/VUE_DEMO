<template>
  <li
    :style="{ background: bgColor }"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      class="btn btn-danger"
      v-show="isShow"
      @click="confirmDelete(index)"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
    toggleTodo: Function,
  },
  data() {
    return {
      bgColor: "white",
      isShow: false,
    };
  },
  computed: {
    isCheck: {
      get() {
        return this.todo.completed;
      },
      set() {
        this.toggleTodo(this.todo);
      },
    },
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = "#008c8c";
        this.isShow = true;
      } else {
        this.bgColor = "white";
        this.isShow = false;
      }
    },
    confirmDelete() {
      const {
        deleteTodo,
        index,
        todo: { title, completed },
      } = this;
      if (!completed) {
        if (confirm(`确定要删除未完成的${title}吗?`)) {
          deleteTodo(index);
        }
        return;
      }
      deleteTodo(index);
    },
  },
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;

  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
