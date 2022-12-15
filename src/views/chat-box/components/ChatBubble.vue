<template>
  <div class="card">
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div class="wrap">
      <p class="name text-small text-ellipsis">{{ nickname }}</p>
      <div ref="bubbleRef" class="bubble">
        {{ bubbleContent }}
      </div>
    </div>
  </div>
</template>

<script>
import CircleAvatar from "@/components/CircleAvatar.vue";
import { ref, onMounted } from "vue";
import useUserStore from "@/store/user";

export default {
  name: "ChatBubble",
  components: {
    CircleAvatar,
  },
  props: {
    message: Object,
  },
  setup(props) {
    // 消息内容
    const message = props.message;
    const nickname = message.fromId;
    const bubbleContent = message.content;

    // user气泡框单独颜色
    const bubbleRef = ref(null);
    const useUser = useUserStore();
    onMounted(() => {
      if (nickname === useUser.userId) {
        bubbleRef.value.style.backgroundColor = "#d1e3ff";
      }
    });

    return {
      props,
      nickname,
      bubbleContent,
      bubbleRef,
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
