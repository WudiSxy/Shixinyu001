<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-login">
        <div class="header-top-left">
          <p>尚品汇欢迎您！</p>
          <p>
            请
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="header-top-zc">注册</router-link>
          </p>
        </div>
        <div class="header-top-right">
          <a href="">我的订单</a>
          <a href="">我的购物车</a>
          <a href="">我的尚品汇</a>
          <a href="">尚品汇会员</a>
          <a href="">企业采购</a>
          <a href="">关注尚品汇</a>
          <a href="">合作招商</a>
          <a href="" style="border: 0">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-logo">
      <router-link to="/">
        <img src="./images/logo.png" alt="" />
      </router-link>
      <div class="header-logo-input">
        <form action="" @submit.prevent="search">
          <input type="text" v-model="searchText" />
          <button type="submit">搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      const { searchText } = this;
      const location = {
        name: "search",
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      this.$router.push(location);
    },
  },
};
</script>

<style lang="less" scoped>
.header-top {
  width: 100%;
  height: 30px;
  background-color: #eaeaea;
}
.header-top-zc {
  padding-left: 5px;
}
.header-top-login {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
p {
  display: inline;
}
.header-top-right a {
  padding-left: 5px;
  padding-right: 5px;
  border-right: 1px solid #b3aeae;
}
.header-logo {
  width: 1200px;
  height: 67px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.header-logo-input {
  height: 67px;
}
.header-logo-input input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
}
.header-logo-input button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
}
form {
  margin-top: 35px;
  overflow: hidden;
  display: flex;
}
</style>
