/*
 * FileName    : home.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-14 18:02:03
 * Description : 
 * -----
 * Last Modified: 2019-01-17 09:48:10
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

<template>
  <header>
    <div id="header">
      <div class="hd-lf">
        <router-link to>
          <img src="img/logo.png" alt="terrorblade">
        </router-link>
        <router-link to>
          <span>Terrorblade</span>
        </router-link>
      </div>
      <div class="hd-rt">
        <nav>
          <ul>
            <li>
              <router-link to>首页</router-link>
            </li>
            <li>
              <router-link to>分享</router-link>
            </li>
            <li>
              <router-link to>杂记</router-link>
            </li>
            <li>
              <router-link to="/about">关于</router-link>
            </li>
            <li>
              <router-link to="/">留言</router-link>
            </li>
            <li>
              <router-link to class="fa fa-user-circle fa-2x"></router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
#header {
  width: 100%;
  height: 80px;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #039be5;

  .hd-lf {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    a {
      height: 60px;
      line-height: 60px;
      margin-right: 10px;
      color: #039be5;

      img {
        display: inline-block;
        border-radius: 100%;
        width: 60px;
        height: 60px;
      }

      span {
        font-family: 'Pacifico', cursive;
      }
    }
  }

  .hd-rt {
    nav {
      height: 100%;

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        line-height: 1;

        li {
          padding: 20px;

          a {
            color: #039be5;
          }
        }
      }
    }
  }
}
</style>