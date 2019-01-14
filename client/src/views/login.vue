/*
 * FileName    : login.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:26:37
 * Description :
 * -----
 * Last Modified: 2019-01-14 11:47:04
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
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
            <div class="ipt-from-item" v-for="(list,index) in nameList">
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
        <footers class="footer"></footers>
      </div>
    </div>
  </div>
</template>
<script>
import footers from '../components/common/footer.vue'
import md5 from 'md5'
export default {
  components: {
    footers
  },
  data () {
    return {
      nameList: [
        {
          name: 'Name',
          flag: false,
          value: ''
        },
        {
          name: 'Password',
          flag: false,
          value: ''
        }
      ],
      rememberFlag: false
    }
  },
  methods: {
    submit () {
      const self = this
      if (!self.nameList[0].value || self.nameList[0].value.length < 6) {
        self.$store.commit('SET_TOAST_DATA', {
          type: 'msg-error',
          msg: `userName不能为空且长度大于6位`
        })
        return
      }
      if (!self.nameList[1].value || self.nameList[1].value.length < 6) {
        self.$store.commit('SET_TOAST_DATA', {
          type: 'msg-error',
          msg: `password不能为空且长度大于6位`
        })
        return
      }
      self.$store.commit('SET_TOAST_DATA', {
        type: 'loading',
        showTime: 999999
      })
      if (self.nameList[1].value.length <= 18) {
        self.nameList[1].value = md5(self.nameList[1].value)
      }
      const userData = {
        userName: self.nameList[0].value,
        password: self.nameList[1].value
      }
      const loginUrl = self.apiJson.login
      self.$store
        .dispatch('login', { loginUrl, userData })
        .then(result => {
          if (self.rememberFlag) {
            window.localStorage.setItem('userData', JSON.stringify(userData))
            window.localStorage.setItem('rememberFlag', self.rememberFlag)
          }
          window.localStorage.setItem('token', result.token)
          self.$store.commit('SET_TOAST_DATA', {
            type: 'done',
            msg: `${result.msg}`,
            showTime: 1500
          })
          self.$router.push({ path: '/home' })
        })
        .catch(err => {
          self.$store.commit('SET_TOAST_DATA', {
            type: 'msg-error',
            msg: `${err.msg}`
          })
        })
    },
    getStorage () {
      let userData = ''

      let rememberFlag = ''
      try {
        userData = JSON.parse(window.localStorage.getItem('userData'))
        rememberFlag = window.localStorage.getItem('rememberFlag')
      } catch (e) {
        userData = ''
      }
      if (userData) {
        this.nameList[0].value = userData.userName
        this.nameList[1].value = userData.password
      }
      if (rememberFlag) {
        this.rememberFlag = rememberFlag
      }
    }
  },
  mounted () {
    this.getStorage()
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
  position: relative;
  background-image: url('../../public/img/hd.jpg');
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
