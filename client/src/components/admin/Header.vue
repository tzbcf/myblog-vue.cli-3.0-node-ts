/*
 * FileName : header.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 16:08:39
 * Description : 
 * -----
 * Last Modified: 2019-03-26 17:56:37
 * Modified By : 
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */

<template>
    <el-row 
    :gutter="24"
    type="flex"
    align="center"
    justify="space-between"
    class="header">
        <el-col :span="5" :offset="1" class="logo">
            <img src="/img/logo.png" alt="" @click="routerPage">                
            <span class="ml10">{{title}}</span>
        </el-col>
        <el-col :pull="1" class="setting">
            <div class="mr20">
                <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                    <i class="el-icon-rank el-tooltip" style="transform:rotate(45deg);"></i>
                </el-tooltip>
            </div>
            <div class="mr20">
                <el-tooltip class="item" effect="dark" :content="message" placement="bottom">
                    <el-badge is-dot class="item">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </el-tooltip>
            </div>
            <div class="mr10">
                <img :src="user.imgUrl" alt="" class="user-img">
            </div>
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >关于作者</el-dropdown-item>
                    <el-dropdown-item >项目仓库</el-dropdown-item>
                    <el-dropdown-item divided>退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>     
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private title: string = '后台管理系统';
  private count: number = 1;
  private message: string = `有${this.count}条未读消息`;
  private user: object = {
      userName: 'terrorbladessadad',
      imgUrl: '/img/none.png',
  };
  private routerPage() {
      this.$router.push('/admin');
  }
}
</script>

<style lang="stylus" scoped>
.header
    height 3rem
    background #242f42
    color #fff
    .logo
        display flex
        align-items center
        img 
            display inline-block
            width 2.5rem
            height 2.5rem
            border-radius 50%
            cursor pointer
        .ml10
            cursor text
    .setting
        height 100%
        display flex
        align-items center
        justify-content flex-end
        .mr10
            cursor text
        .mr20
        .el-dropdown-link
            cursor pointer
        .user-img
            display inline-block
            width 2rem
            height 2rem
            border-radius 100%
</style>




