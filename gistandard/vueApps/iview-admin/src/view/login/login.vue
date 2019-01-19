<template>
  <div>
    <div>
      <div class="wrapper" style="background-color: white;">
        <div class="login-top">
          <div style="height: 60px;background-color: white;">
            <div style="margin-left: 160px;">
              <img style="width: 350px" src="../../../public/static/index/img/log_1.jpg" />
            </div>
            <div style="float:right;margin-top: -34px;width: 360px;font-size: 12px;">
              <span>帮助</span>&nbsp;
              <span>|</span>&nbsp;
              <span>关于</span>
            </div>
          </div>

          <div class="login-topBg">
            <div class="login-topBg1">
              <div class="login-topStyle">
                <div class="login-topStyle3" style="margin-top: 40px;margin-right: -60px;width: 300px;">
                  <Card icon="log-in" :bordered="false" style="background: url(../img/login_bg_white.png) center repeat;">
                    <p slot="title" style="color:white;text-align: right;">欢迎登录</p>
                    <div class="form-con">
                      <login-form @on-success-valid="handleSubmit" :loading='loading'></login-form>
                      <p class="login-tip" style="text-align:right;font-size: 11pt">IBCAP 武汉市东西湖体育中心</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="loginCen" style="margin-top: 55px;">
        <div class="login-center">
          <div class="loginCenter-moudle">
            <div class="loginCenter-moudleLeft" style="margin-right: 60px;">
              &nbsp;
            </div>
            <div class="loginCenter-moudleRight" style="  width: 1067px;">
              <!--第一个-->
              <a class="loginCenter-mStyle loginCenter-moudle1" id="moudleRemove" style=" display:block;width: 340px;">
                <span class="moudle-img"><img src="../../../public/static/index/img/login_bg_01.png" /></span>
                <span class="moudle-text">
                  <span class="moudle-text1" style="font-family:'微软雅黑'">一体化集成管理</span>
                  <span class="moudle-text2" style="font-family:'微软雅黑'">Integrated management</span>
                </span>
              </a>
              <!--第二个-->
              <a class="loginCenter-mStyle loginCenter-moudle2" style=" display:block; width: 357px;" id="moudleRemove2">
                <span class="moudle-img"><img src="../../../public/static/index/img/login_bg_02.png" /></span>
                <span class="moudle-text">
                  <span class="moudle-text1" style="font-family:'微软雅黑'">
                    精细化物业办公</span>
                  <span class="moudle-text2" style="font-family:'微软雅黑'">Fine property office</span>
                </span>
              </a>
              <!--第三个-->
              <a class="loginCenter-mStyle loginCenter-moudle3" style=" display:block;" id="moudleRemove3">
                <span class="moudle-img"><img src="../../../public/static/index/img/login_bg_03.png" /></span>
                <span class="moudle-text">
                  <span class="moudle-text">
                    <span class="moudle-text1" style="font-family:'微软雅黑'">独立化场景应用</span>
                    <span class="moudle-text2" style="font-family:'微软雅黑'">Independent scene application</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <span class="footerText">Copyright © 2019-2020 爱投斯智能技术（深圳）有限公司
          粤ICP备：18072544号</span>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import LoginForm from "_c/login-form";
  import {
    mapActions
  } from "vuex";
  export default {
    components: {
      LoginForm
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      ...mapActions(["handleLogin", "getUserInfo"]),
      handleSubmit({
        userName,
        password
      }) {
        this.loading = true
        this.handleLogin({
          userName,
          password
        }).then(res => {
          this.getUserInfo().then(res => {
            this.$router.push({
              name: this.$config.homeName
            });
          });
        });
      }
    }
  };

</script>

<style scoped>
  @import "../../../public/static/index/css/less.css";
  @import "../../../public/static/index/css/basic.css";
  @import "../../../public/static/index/css/myself.css";

</style>
