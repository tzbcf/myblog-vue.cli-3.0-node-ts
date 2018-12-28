/*
 * FileName    : 404.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 14:39:31
 * Description :
 * -----
 * Last Modified: 2018-12-28 15:29:42
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
<template>
  <div class="content">
    <div class="error-main">
      <div class="error-box">
        <h1>404</h1>
        <h3>PAGE NOT FOUND !</h3>
        <h5>YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</h5>
        <router-link to="/" class="btn">GO TO HOME PAGE</router-link>
      </div>
      <footers class="footer"></footers>
    </div>
  </div>
</template>
<script>
import Footer from '../components/common/footer.vue'
export default {
  data () {
    return {}
  },
  components: {
    footers: Footer
  }
}
</script>
<style lang="stylus" scoped>
.content {
  height: 100%;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  background: #f5f5f5;
  line-height: 1.4 !important;
  letter-spacing: -0.1px !important;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  .error-main {
    width: 100%;
    padding: 20px 10px;

    .error-box {
      h1 {
        margin: 22px 0 11px;
        font-size: 128px;
        font-weight: bold;
        color: #424242;
      }

      h3 {
        margin: 0 0 30px;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        color: #757575;
      }

      h5 {
        margin: 0 0 25px;
        font-size: 14px;
        font-weight: 700;
        color: #a9afb5;
        font-family:'Pacifico', cursive;
      }

      .btn {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12);
        background-color: #039be5;
        color: #fff;
        box-sizing: border-box;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        outline: 0;
        border: none;
        -webkit-tap-highlight-color: transparent;
        display: inline-block;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        margin: 0;
        min-width: 64px;
        line-height: 36px;
        padding: 0 16px;
        border-radius: 4px;
        overflow: visible;
      }
    }

    .footer {
      margin-top: 60px;
    }
  }
}
</style>
