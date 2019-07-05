/*
 * FileName : home.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 14:30:23
 * Description : 
 * -----
 * Last Modified: 2019-05-13 15:29:37
 * Modified By : 
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */


<template>
    <div class="container">
        <header>
            <Header></Header>
        </header>
        <section class="main">
            <aside>
                <Aside></Aside>
            </aside>
            <section>
                 <router-view/>
                <Footer></Footer>
            </section>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/common/Footer.vue';
import Aside from '@/views/admin/Aside.vue';
import Header from '@/views/admin/Header.vue';

@Component({
  components: {
    Footer, Aside, Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.container
    width 100%
    height 100%
    overflow hidden
    .main
        width 100%
        height 100%
        display flex
        align-items center
        aside
            width 15rem
            height 100%
        section 
            width 100%
            height 100%
            overflow-y auto    
</style>




