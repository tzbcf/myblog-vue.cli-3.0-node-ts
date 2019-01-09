/*
 * FileName    : register.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:27:57
 * Description :
 * -----
 * Last Modified: 2019-01-08 10:54:30
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
          <div class="ipt-from-item" v-for="(list,index) in nameList" >
            <div class="ipt-text">
              <div class="ipt-label">
                <label :for="index">{{list.name}}<span class="col-red">&nbsp;*</span></label>
              </div>
              <input type="text" :id="index">
            </div>
          </div>
        </div>
        <div class="mb-20">
          <a class="login-btn">注册</a>
        </div>
        <div class="mb-80">
          已有账户
          <router-link to="">登录</router-link>
        </div>
        <footers class="footer"></footers>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "../components/common/footer.vue";
export default {
  components: {
    footers: Footer
  },
  data(){
    return {
      nameList:[
        {
          'name':'Name',
          'value':''
        },
        {
          'name':'Email',
          'value':''
        },
        {
          'name':'Password',
          'value':''
        },
        {
          'name':'Retype Password',
          'value':''
        }
      ]
    }
  }
};
</script>
<style lang="stylus" scoped>
.content 
  width: 100%;
  height: 100%;
  background-image: url('../../public/img/hd.jpg');
  .container
    display: flex;
    align-items: center;
    justify-content center
    width 100%
    height 100%
    color #fff
    background-color rgba(33,33,33,.6)
    .reg-main 
      display: block;
      width: 400px;
      padding 20px
      box-sizing border-box
      .reg-top
        h1
          font-weight normal!important
      .ipt-from
        padding-top 20px
        box-sizing border-box
        position relative
        .ipt-from-item
          padding-bottom 20px          
          .ipt-text
            border-bottom 1px solid #fff
            position relative
            padding-top 20px
            box-sizing border-box
            input
              position relative 
              width 100%
              color #fff
              border none 
              border-redius none
              background 0 0
              text-align left
              visibility-align bottom
              outline 0
              overflow visible
              line-height 18px
              margin-bottom 6px
            .ipt-label
              display block
              width 100%
              position absolute
              left 0
              bottom  0px
              margin-bottom 6px
              label
                display block
                width 100% 
                font: 400 16px/1.125 Roboto,"Helvetica Neue",sans-serif;
                text-align left
                color #ddd
      
.mb-20
  margin-bottom 20px
.mb-80
  margin-bottom 80px
.pb-20
  padding-bottom 20px
</style>
