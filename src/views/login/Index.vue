<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <p>登陆</p>
      </div>
      <el-form ref="form" :model="userForm" class="user-form" :rules="rules">
        <el-form-item prop="account" label="账号">
          <el-input v-model="userForm.account" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            v-model="userForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="button">
          <el-form-item>
            <el-button type="primary" @click="login">登陆</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import useLoginStore from "@/store/login";

export default {
  name: "Login",
  setup() {
    // 账户和密码
    const userForm = reactive({
      account: "",
      password: "",
    });

    // 输入约束
    const rules = reactive({
      account: [
        {
          required: true,
          message: "请输入账号！",
          type: "string",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码！",
          type: "string",
        },
      ],
    });

    // 登陆路由跳转
    const form = ref();
    const router = useRouter();
    const useLogin = useLoginStore();
    const login = () => {
      form.value.validate((validate) => {
        if (validate) {
          useLogin.isLogin = true;
          router.push("/");
        } else {
          ElMessage.error("账号或密码不正确！");
        }
      });
    };
    return {
      userForm,
      form,
      rules,
      login,
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: @login-background-color;
  .container {
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    .header {
      padding: 20px 40px;
      border-radius: 5px;
      background-color: @login-header-color;
      p {
        font-weight: bold;
      }
    }
    .user-form {
      margin: 20px 40px 10px;
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
