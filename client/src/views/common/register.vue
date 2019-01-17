/*
 * FileName    : register.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:27:57
 * Description :
 * -----
 * Last Modified: 2019-01-17 09:47:08
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
<template>
  <div class="content">
    <div class="container">
      <div class="reg-main">
        <div class="reg-top">
          <h1 class="mb-20">注册</h1>
          <p>欢迎您成为一员</p>
        </div>
        <div class="ipt-from">
          <div class="ipt-from-item" v-for="(list,index) in nameList">
            <div class="ipt-text">
              <div class="ipt-label">
                <label :for="index" :class="{'inpt-focus-animate':list.flag || list.value.length}">
                  {{list.name}}
                  <span class="col-red">&nbsp;*</span>
                </label>
              </div>
              <input
                :type="index<2?'text':'password'"
                :id="index"
                v-model="list.value"
                v-on:focus="list.flag=true"
                v-on:blur="list.flag=false"
                autocomplete="off"
              >
            </div>
          </div>
        </div>
        <div class="mb-20">
          <a class="login-btn" @click="submit">注册</a>
        </div>
        <div class="mb-80">已有账户
          <router-link to="/login">登录</router-link>
        </div>
        <footers class="footer"></footers>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/common/footer.vue";
import md5 from "md5";
export default {
  components: {
    footers: Footer
  },
  data() {
    return {
      nameList: [
        {
          name: "Name",
          flag: false,
          value: ""
        },
        {
          name: "Email",
          flag: false,
          value: ""
        },
        {
          name: "Password",
          flag: false,
          value: ""
        },
        {
          name: "Retype Password",
          flag: false,
          value: ""
        }
      ]
    };
  },
  methods: {
    submit() {
      const self = this;
      for (let i = 0; i < self.nameList.length; i++) {
        if (self.nameList[i].value.length < 6) {
          self.$store.commit("SET_TOAST_DATA", {
            type: "msg-error",
            msg: `${self.nameList[i].name}长度不够`
          });
          return;
        }
      }
      if (!self.base.isNumberOrLetter(self.nameList[0].value)) {
        self.$store.commit("SET_TOAST_DATA", {
          type: "msg-error",
          msg: `账号不符合规则`
        });
        return;
      }
      if (!self.base.isEmail(self.nameList[1].value)) {
        self.$store.commit("SET_TOAST_DATA", {
          type: "msg-error",
          msg: `邮箱不合法`
        });
        return;
      }
      if (!self.base.isNumberOrLetter(self.nameList[2].value)) {
        self.$store.commit("SET_TOAST_DATA", {
          type: "msg-error",
          msg: `密码不符合规则`
        });
        return;
      }
      if (self.nameList[2].value !== self.nameList[3].value) {
        self.$store.commit("SET_TOAST_DATA", {
          type: "msg-error",
          msg: `两次输入密码不一致`
        });
        return;
      }
      self.$store.commit("SET_TOAST_DATA", {
        type: "loading",
        showTime: 999999
      });
      const reqData = {
        userName: self.nameList[0].value,
        email: self.nameList[1].value,
        password: md5(self.nameList[2].value)
      };
      self.axios
        .post(self.apiJson.addUser, reqData)
        .then(result => {
          self.$store.commit("SET_TOAST_DATA", {
            type: "done",
            msg: `${result.msg}`,
            showTime: 1500
          });
          self.$router.push({ path: "/login" });
        })
        .catch(err => {
          self.$store.commit("SET_TOAST_DATA", {
            type: "msg-error",
            msg: `${err.msg}`
          });
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
.inpt-focus-animate {
  color: #039be5 !important;
  transform: translate(-2.8em, -1.2em) scale(0.75) perspective(100px) translateZ(0.0016px);
}

.content {
  width: 100%;
  height: 100%;
  background-image: url('../../../public/img/hd.jpg');

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(33, 33, 33, 0.6);

    .reg-main {
      display: block;
      width: 400px;
      padding: 20px;
      box-sizing: border-box;

      .reg-top {
        h1 {
          font-weight: normal !important;
        }
      }

      .ipt-from {
        padding-top: 20px;
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
    }
  }
}
</style>