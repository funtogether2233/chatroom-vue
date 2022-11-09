<template>
  <div class="card">
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div class="wrap">
      <p class="name text-small text-ellipsis">userX</p>
      <div class="bubble">
        Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript
        框架。它基于标准 HTML、CSS 和 JavaScript
        构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue
        都可以胜任。
      </div>
    </div>
  </div>
</template>

<script>
import CircleAvatar from "@/components/CircleAvatar.vue";

export default {
  name: "ChatBubble",
  components: {
    CircleAvatar,
  },
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  margin: 10px;
  .avatar-img {
    margin: 0 10px;
  }
  .wrap {
    .bubble {
      margin-top: 10px;
      padding: 16px;
      border-radius: 8px;
      background-color: @bubble-background-color;
      line-height: 150%;
    }
  }
}
</style>
