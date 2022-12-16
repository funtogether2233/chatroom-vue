import http from "./request";

const REQUEST_URL = {
  groupMessage: "/group_message",
};

// 获取group历史聊天记录
export const getGroupMessage = async (groupId) => {
  try {
    const res = await http.post(REQUEST_URL.groupMessage, {
      groupId,
    });
    return res.data;
  } catch (message) {
    console.log(message);
  }
};
