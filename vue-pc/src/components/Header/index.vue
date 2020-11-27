<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-login">
        <div class="header-top-left">
          <p>尚品汇欢迎您！</p>
          <p>
            请
            <a href="" class="header-top-dl">登录</a>
            <a href="" class="header-top-zc">注册</a>
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
      <img src="./images/logo.png" alt="" />
      <div class="header-logo-input">
        <form action="">
          <input type="text" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header-top {
  width: 100%px;
  height: 30px;
  background-color: #eaeaea;
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
.header-top-dl {
  padding-right: 5px;
  border-right: 1px solid #b3aeae;
}
.header-top-zc {
  padding-left: 5px;
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
