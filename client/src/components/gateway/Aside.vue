/*
 * FileName : aside.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-19 15:01:09
 * Description : 
 * -----
 * Last Modified: 2019-03-22 14:26:41
 * Modified By : 
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */

<template>
    <div class="container">
        <div class="logo">
            <img src="/img/logo.png" alt="">
        </div>
        <div class="title mb10">
            <h1>Terrorblade</h1>
        </div>
        <div class="intro">
            <p>本是青灯不归客,却因浊酒留风尘.</p>
            <p>星光不问赶路人,岁月不负有心人.</p>
        </div>
        <div class="info">
            <p>
                <i class="fa fa-mars" style="color: rgb(73, 169, 238);"></i>
                <span>姓名: 陈志强,92年单身狗</span>
            </p>
            <p>
                <i class="fa fa-user-secret" style="color: rgb(247, 142, 61);"></i>
                <span>职业: 15年安徽工程大学毕业,js开发</span>    
            </p>
            <p>
                <i class="fa fa-heart" style="color: rgb(244, 110, 101);"></i>
                <span>爱好: 曾经喜欢魔兽争霸,魔域,英雄联盟,DOTA自走棋.现在喜欢发呆,看电影</span>
            </p>
            <p>
                <i class="fa fa-html5" style="color: rgb(61, 184, 193);"></i>
                <span>技能:HTML5 CSS3 js ts</span>
            </p>
            <p>
                <i class="fa fa-github" style="color: rgb(255, 255, 0);"></i>
                <span>
                    <a
                        href="https://github.com/tzbcf"
                        target="_blank"
                        style="color: #ffffff;"
                    >https://github.com/tzbcf</a>
                </span>
            </p>
             <p>
                <i class="fa fa-qq" style="color: rgb(255, 255, 255);"></i>
                <span>714953218</span>
            </p>
            <p>
                <i class="fa fa-tags" style="color: rgb(61, 189, 125);"></i>
                <span>标签: 呆,反映慢,情商低,口才差</span>
            </p>
            <p>
                <i class="fa fa-map-marker" style="color: rgb(148, 138, 236);"></i>
                <span>现地址: 湖南--长沙;原地址: 湖南--衡阳</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Aside extends Vue {}
</script>


<style lang="stylus" scoped>
.container
    height 100%
    display flex
    flex-direction column
    align-items center
    justify-content center
    color #fff
    font-size 0.8rem
    background #333
    height 100%
    .title
        font-family: 'Pacifico', cursive;
        color #fff
    .logo
        width 4rem
        height 4rem
        img 
            display block
            width 100%
            height 100%
            max-width 100%
            border-radius 100%
    .intro
        width 100%
        padding 0.5rem 0
        background #F66A25  
    .info
        padding 1rem 0.5rem
        p
            margin-bottom 0.5rem
            text-align left
            i 
                margin-right 0.1rem
</style>




