<template>
  <div class="card">
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div class="wrap">
      <p class="name text-small text-ellipsis">{{ nickname }}</p>
      <div class="bubble">
        {{ bubbleContent }}
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
  props: {
    message: Object,
  },
  setup(props) {
    const message = props.message;
    const nickname = message.fromId;
    const bubbleContent = message.content;

    return {
      props,
      nickname,
      bubbleContent,
    };
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
      padding: 10px;
      border-radius: 8px;
      background-color: @bubble-background-color;
      line-height: 150%;
    }
  }
}
</style>
