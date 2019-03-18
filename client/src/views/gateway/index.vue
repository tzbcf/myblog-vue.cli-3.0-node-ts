/*
 * FileName : index.vue
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-03 16:48:53
 * Description : 1
 * -----
 * Last Modified: 2019-03-18 15:56:03
 * Modified By : 1
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */
<template>
  <div class="container">
    <aside>
        <Aside></Aside>
    </aside>
    <section>
        <main></main>
        <footer>
            <Footer></Footer>
        </footer>
    </section>
  </div>
</template>

<script>
import Footer from '@/components/common/footer.vue'
import Aside from '@/components/common/aside.vue'
export default {
  name: 'index',
  components: {
    Footer,
    Aside
  },
  data () {
    return {
      a: true,
      b: true
    }
  },
  mounted () {},
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    width 100%
    height 100%
    display flex
    background #fff
    aside
        width 6rem
    section
        width 100%
</style>
