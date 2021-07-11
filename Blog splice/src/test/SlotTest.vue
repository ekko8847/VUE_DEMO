<template>
  <div>
    <h2>SlotTest</h2>
    <slot name="first"></slot>
    <p>其他内容</p>
    <slot name="second"></slot>
    <p>其他内容</p>
    <slot>
      <span>默认内容</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SlotTest",
};
</script>

<style></style>
