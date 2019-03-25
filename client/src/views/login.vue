/*
 * FileName : login.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 14:49:45
 * Description : 
 * -----
 * Last Modified: 2019-03-22 15:59:50
 * Modified By : 
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */

<template>
  <div class="content">
    <div class="ct-login">
      <div class="ctt-login">
        <div class="login-main">
          <div class="login-title">
            <h3>登录</h3>
            <p>登录您的页面帐户</p>
          </div>
          <div class="login-from">
            <div class="ipt-from-item" v-for="(list,index) in nameList" :key="index">
              <div class="ipt-text">
                <div class="ipt-label">
                  <label
                    :for="index"
                    :class="{'inpt-focus-animate':list.flag || list.value.length}"
                  >
                    {{list.name}}
                    <span class="col-red">&nbsp;*</span>
                  </label>
                </div>
                <input
                  :type="index<1?'text':'password'"
                  :id="index"
                  v-model="list.value"
                  v-on:focus="list.flag=true"
                  v-on:blur="list.flag=false"
                  autocomplete="off"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"
                >
              </div>
            </div>
          </div>
          <div class="lg-btn mb-80">
            <div class="btn-top">
              <div class="remember-btn">
                <input type="checkbox" @click="rememberFlag=!rememberFlag" :checked="rememberFlag">
                <span>记住密码</span>
              </div>
              <div class="foget-ben">
                <router-link to>忘记密码?</router-link>
              </div>
            </div>
            <a class="login-btn" @click="submit">提交</a>
          </div>
        </div>
        <Footer class="footer"></Footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/common/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {
  private nameList: object[] = [
    {
        name: 'Name',
        flag: false,
        value: '',
    },
    {
        name: 'Password',
        flag: false,
        value: '',
    },
  ];
  private rememberFlag: boolean = false;
  private submit(): void {
    const self = this;
  }
}
</script>


<style lang="stylus" scoped>
.inpt-focus-animate {
  color: #039be5 !important;
  transform: translate(-2.8em, -1.2em) scale(0.75) perspective(100px) translateZ(0.0016px);
}

.content {
  width: 100%;
  height: 100%;
  background-image: url('/img/hd.jpg');
}

.ct-login {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.6);

  .ctt-login {
    width: 400px;
    padding: 30px;
    box-sizing: border-box;

    .login-from {
      padding-top: 10px;
      box-sizing: border-box;
      position: relative;

      .ipt-from-item {
        padding-bottom: 20px;

        .ipt-text {
          border-bottom: 1px solid #fff;
          position: relative;
          padding-top: 20px;
          box-sizing: border-box;

          input {
            position: relative;
            width: 100%;
            color: #fff;
            border: none;
            border-redius: none;
            background: 0 0;
            text-align: left;
            visibility-align: bottom;
            outline: 0;
            overflow: visible;
            line-height: 18px;
            margin-bottom: 6px;
          }

          .ipt-label {
            display: block;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0px;
            margin-bottom: 6px;

            label {
              display: block;
              width: 100%;
              font: 400 16px / 1.125 Roboto, 'Helvetica Neue', sans-serif;
              text-align: left;
              color: #ddd;
              transition: transform 0.4s;
            }
          }
        }
      }
    }

    .login-title {
      h3 {
        font-size: 36px;
        text-align: center;
        line-height: 1;
        margin-bottom: 5px;
      }
    }

    .lg-btn {
      .btn-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size 0.8rem
        .remember-btn{
            display flex
            align-items center
            span {
                margin-left 0.1rem
            }   
        }
        .foget-ben {
          a {
            color: #039be5;
          }
        }
      }
    }
  }
}
</style>
