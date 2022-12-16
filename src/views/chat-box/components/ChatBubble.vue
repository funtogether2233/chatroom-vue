<template>
  <div class="card">
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div class="wrap">
      <div class="header text-small text-ellipsis">
        <div class="name">{{ nickname }}</div>
        <div class="time">{{ messageTime }}</div>
      </div>
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
import dayjs from "dayjs";

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
    const nickname = message.fromId || message.member_id;
    const bubbleContent = message.content;
    const messageTime = dayjs(message.time).format("YYYY-MM-DD HH:mm");

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
      messageTime,
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .header {
      display: flex;
      .name {
        font-weight: bolder;
      }
      .time {
        color: gray;
        white-space: pre-wrap;
        &::before {
          content: "    ";
        }
      }
    }
    .bubble {
      margin-top: 10px;
      padding: 10px;
      border-radius: 8px;
      background-color: @bubble-background-color;
      line-height: 150%;
      white-space: pre-wrap;
    }
  }
}
</style>
