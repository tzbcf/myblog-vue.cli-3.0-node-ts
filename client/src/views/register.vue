/*
 * FileName    : register.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:27:57
 * Description :
 * -----
 * Last Modified: 2019-01-04 17:19:45
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <a class="btn"></a>
        </div>
        <div>
          已由账户
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
    width 100%
    height 100%
    color #fff
    background-color rgba(33,33,33,.6)
    .reg-main 
        display: block;
        width: 100%;
        .reg-top
            h1
                font-weight normal!important
                
    
.mb-20
    margin-bottom 20px
</style>
