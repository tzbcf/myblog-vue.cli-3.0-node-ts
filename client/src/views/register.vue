/*
 * FileName : register.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 14:52:46
 * Description : 
 * -----
 * Last Modified: 2019-03-22 16:00:32
 * Modified By : 
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
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
          <div class="ipt-from-item" v-for="(list,index) in nameList" :key="index">
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
          <a class="login-btn mb10" @click="submit">注册</a>
        </div>
        <div class="mb-80">已有账户
          <router-link to="/login">登录</router-link>
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
          name: 'Email',
          flag: false,
          value: '',
        },
        {
          name: 'Password',
          flag: false,
          value: '',
        },
        {
          name: 'Retype Password',
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

