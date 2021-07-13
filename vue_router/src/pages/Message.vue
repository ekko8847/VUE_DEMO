<template>
  <div>
    <ul>
      <li v-for="xxx in messages" :key="xxx.id">
        <!-- <router-link :to="`/home/message/detail/${xxx.id}?id=${xxx.id}&title=${xxx.title}`">{{ xxx.title }}</router-link> -->
        <router-link
          :to="{
            name: 'Details',
            params: { id: xxx.id },
            query: { id2: xxx.id, title: xxx.title },
          }"
          >{{ xxx.title }}</router-link
        >
        <button @click="pushShown(xxx)">PUSH</button>
        <button @click="replaceShown(xxx)">REPLACE</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: "Message00001" },
        { id: 3, title: "Message00003" },
        { id: 5, title: "Message00005" },
      ];
      this.messages = messages;
    }, 1000);
  },
  methods: {
    //编程式路由导航 点两次就会报错 vue3更新了promise写法错误处理
    pushShown(xxx) {
      this.$router.push({
        name: "Details",
        params: { id: xxx.id },
        query: { id2: xxx.id, title: xxx.title },
      });
    },
    replaceShown(xxx) {
      this.$router.replace(
        `/home/message/detail/${xxx.id}?id=${xxx.id}&title=${xxx.title}`
      );
    },
  },
};
</script>

<style></style>
