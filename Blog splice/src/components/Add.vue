<template>
  <div class="col-md-4">
    <form class="form-horizontal" @submit.prevent="submit">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="comment.user"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="comment.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-default pull-right">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    addComment: Function,
  },
  data() {
    return {
      comment: {
        user: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      console.log(111);
      const { comment } = this;
      this.addComment(comment);
      this.comment = {
        user: "",
        content: "",
      };
    },
  },
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
