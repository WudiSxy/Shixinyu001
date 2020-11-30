<template>
  <div>
    login.........
    <el-button type="primary" @click="login">登录</el-button>
    <button>登录</button>
  </div>
</template>

<script>
import { reqLogin } from "../../api/use";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "11111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
