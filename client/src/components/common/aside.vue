/*
 * FileName    : aticle.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-15 11:46:16
 * Description : -
 * -----
 * Last Modified: 2019-03-18 16:20:18
 * Modified By  : -
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

<template>
  <div class="aside">
    <div class="logo">
      <img src="/img/logo.png" alt="">
    </div>
    <div class="name">
      <h1>Terrorblade</h1>
    </div>
    <div class="login">
      <el-form ref="login" :model="login" :rules="loginRules">
        <el-input v-model="login.userName" placeholder="username"></el-input>
        <el-input v-model="login.password" placeholder="password"></el-input>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.aside
  width 100%
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
  background #333
  .name
    color #ffffff
    font-family 'Pacifico', cursive
    font-size 0.4rem
  .login
    padding 0 0.2rem
</style>
