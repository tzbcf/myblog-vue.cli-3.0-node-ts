/*
 * FileName : Home.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-19 12:01:00
 * Description : 
 * -----
 * Last Modified: 2019-03-22 11:33:21
 * Modified By : 
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */

<template>
  <div class="home">
    <aside>
      <Aside></Aside>
    </aside>
    <section>
      <router-view/>
    </section>
    <footer>
       <Footer></Footer>  
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/common/Footer.vue';
import Aside from '@/components/gateway/Aside.vue';

@Component({
  components: {
    Footer, Aside,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.home
  display flex
  justify-content center
  height 100%
  aside
    width 20rem
  footer 
    width 100%  
</style>
