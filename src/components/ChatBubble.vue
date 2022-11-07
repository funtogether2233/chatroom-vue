<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <div class="warp">
      <p class="name">userX</p>
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
export default {
  name: "ChatBubble",
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  margin: 20px 0;
  width: 100%;
  .avatar {
    .avatar-img();
    margin: 0 10px 0 20px;
  }
  .warp {
    .name {
      .text-ellipsis();
      font-size: 12px;
    }
    .bubble {
      margin: 10px 180px 0 0;
      padding: 16px;
      border-radius: 8px;
      background-color: @chat-bubble-background-color;
      line-height: 150%;
    }
  }
}
</style>
