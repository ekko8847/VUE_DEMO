<template>
  <div class="container">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger" @click="test">警告按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "APP",
  methods: {
    test() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        // confirmButtonText: "确定",
        // cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style></style>
