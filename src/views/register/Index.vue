<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <p>注册</p>
      </div>

      <!-- 注册表单 -->
      <el-form ref="form" :model="userForm" class="user-form" :rules="rules">
        <el-form-item prop="userId" label="账号">
          <el-input v-model="userForm.userId" placeholder="请输入账号" />
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
            <el-button type="primary" @click="register">确定</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="returnBack">返回</el-button>
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
import { registerUser } from "@/api/user";

export default {
  name: "Login",
  setup() {
    // 账户和密码
    const userForm = reactive({
      userId: "",
      password: "",
    });

    // 输入约束
    const rules = reactive({
      userId: [
        {
          type: "string",
          required: true,
          message: "请输入6-16位字母或数字！",
          min: 6,
          max: 16,
          pattern: /^[a-zA-Z\d]{6,16}$/,
        },
      ],
      password: [
        {
          type: "string",
          required: true,
          message: "请输入6-16位字母或数字！",
          min: 6,
          max: 16,
          pattern: /^[a-zA-Z\d]{6,16}$/,
        },
      ],
    });

    // 表单
    const form = ref();
    // 路由
    const router = useRouter();

    // 注册
    const register = () => {
      form.value.validate(async (validate) => {
        if (validate) {
          const res = await registerUser(userForm.userId, userForm.password);
          const { code, msg } = res;
          if (code === 200) {
            userForm.account = "";
            userForm.password = "";
            ElMessage({
              message: `${msg}`,
              type: "success",
            });
          } else {
            ElMessage.error(`${msg}`);
          }
        }
      });
    };

    // 返回登陆页面
    const returnBack = () => {
      router.push("/login");
    };

    return {
      userForm,
      rules,
      form,
      register,
      returnBack,
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
