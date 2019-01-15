<template>
  <div class="home">
    <Header class="header"></Header>
    <main class="hm-main">
      <section class="section">
        <router-view></router-view>
      </section>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from '../components/common/footer.vue'
import Header from '../components/common/header.vue'
export default {
  name: 'home',
  components: {
    Footer,Header
  }
}
</script>
<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  overflow auto
  .header
    width 100%
    position fixed
    top 0
  .hm-main
    width 1300px
    margin 0 auto
    padding-top 80px
</style>
