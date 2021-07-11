<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <slot :row="todo" :$index="index" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
};
</script>

<style></style>
