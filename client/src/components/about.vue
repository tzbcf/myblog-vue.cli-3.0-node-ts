/*
 * FileName    : about.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-15 10:55:16
 * Description : 
 * -----
 * Last Modified: 2019-01-15 16:11:59
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

<template>
  <div class="ct-main">
    <div class="ab-info">
      <h3>My info</h3>
      <ul>
        <li>
          <p>
            <i class="fa fa-mars" style="color: rgb(73, 169, 238);"></i>
            <span>姓名: 陈志强,92年单身狗</span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-user-secret" style="color: rgb(247, 142, 61);"></i>
            <span>职业: 15年安徽工程大学毕业,从事node后端开发</span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-heart" style="color: rgb(244, 110, 101);"></i>
            <span>爱好: 曾经喜欢乒乓球,魔兽争霸,魔域.现在喜欢发呆,看电影</span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-html5" style="color: rgb(61, 184, 193);"></i>
            <span>技能: 前端开发,小程序开发,node后端开发</span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-github" style="color: rgb(0, 0, 0);"></i>
            <span><a href="https://github.com/tzbcf" target="_blank" style="color: #565656;">https://github.com/tzbcf</a></span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-tags" style="color: rgb(61, 189, 125);"></i>
            <span>标签: 呆,反映慢,情商低,口才差</span>
          </p>
        </li>
        <li>
          <p>
            <i class="fa fa-map-marker" style="color: rgb(148, 138, 236);"></i>
            <span>现地址: 深圳--宝安;原地址: 湖南--衡阳</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="ab-play">
        <h3>Play tour</h3>
        <div class="tour-icon">
            <div>
                <img src="img/wxfd.png" alt="微信">
            </div>
            <div>
                <img src="img/wxfd.png" alt="支付宝">
            </div>
        </div>
    </div>
    <div class="ab-leave">
        <h3>leave word</h3>
        <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="stylus" scoped>
.ct-main 
  height: 1800px;
  background: #fff;
  box-sizing: border-box;
  color: #565656;

  .ab-info,.ab-play
    margin-bottom 30px
    h3
        font-weight bold
        font-size 46px
    ul 
      li 
        padding: 20px 0;

        p 
          i 
            margin-right: 5px;
  .ab-play
    h3
        margin-bottom 10px
    .tour-icon
        display flex
        justify-content center
        align-items center
        div
            padding 0 10px
</style>




