# 基于 Vue+Express 的即时通讯聊天室项目

此处是[前端部分](https://github.com/funtogether2233/chatroom-vue)

[后端部分在这里](https://github.com/funtogether2233/chatroom-express)

使用技术栈:

- Vue3
- Socket.io

基于 Socket.io 生成 WebSocket 服务器，实现聊天消息的转发。暂时只做了群聊。
配置 Axios 拦截器，定义路由守卫，配合 JWT 验证实现登录鉴权模块
