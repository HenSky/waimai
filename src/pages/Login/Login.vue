<template>
  <div class="loginContain">
    <van-icon name="arrow-left" class="go_back" @click="$router.back()" />
    <div class="loginInner">
      <div class="login-header">
        <h2 class="login-logo">硅谷外卖</h2>
        <van-tabs v-model="active" class="login-title">
          <van-tab title="密码登录" class="on">
            <div class="login-content">
              <van-cell-group class="login-user">
                <van-field v-model="num" placeholder="手机/邮箱/用户名" />
              </van-cell-group>
              <van-cell-group class="login-mima">
                <van-field
                  v-model="mima"
                  placeholder="密码"
                  right-icon="question-o"
                  @click-right-icon="$toast('question')"
                />
              </van-cell-group>
              <van-cell-group>
                <van-field v-model="yzm1" placeholder="验证码">
                  <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
              </van-cell-group>
              <van-button type="primary" size="large">登录</van-button>
              <a href="javascript:;" class="about_us">关于我们</a>
            </div>
          </van-tab>
          <van-tab title="短信登录">
            <div class="login-con">
              <van-cell-group>
                <van-field v-model="phone" placeholder="手机号">
                  <van-button slot="button" size="small" type="primary" @click="getCode">获取验证码</van-button>
                </van-field>
              </van-cell-group>
              <van-cell-group>
                <van-field v-model="yzm2" placeholder="验证码" />
              </van-cell-group>
              <section class="login-hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
              <van-button type="primary" size="large">登录</van-button>
              <a href="javascript:;" class="about-u">关于我们</a>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {
      num: "",
      mima: "",
      yzm1: "",
      phone: "",
      yzm2: "",
      active: 2
    };
  },
  methods: {
    getCode() {
      alert(1111);
    }
  }
};
</script>
<style lang='less' >
.loginContain {
  width: 100%;
  height: 100%;
  background: #fff;
  .go_back {
    padding-left: 10px;
    margin-top: 10px;
  }
  .loginInner {
    width: 80%;
    padding-top: 60px;
    margin: 0 auto;
    .login-header {
      .login-logo {
        font-size: 40px;
        font-weight: 600;
        color: #02a774;
        text-align: center;
      }
      .login-title {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        .about_us {
          display: block;
          font-size: 12px;
          margin-top: 20px;
          text-align: center;
          color: #999;
        }
        .login-con {
          .login-hint {
            font-size: 14px;
            line-height: 20px;
            margin-top: 15px;
            margin-bottom: 15px;
            color: #999;
            a {
              color: #02a774;
            }
          }
          .about-u {
            display: block;
            font-size: 12px;
            margin-top: 20px;
            text-align: center;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
