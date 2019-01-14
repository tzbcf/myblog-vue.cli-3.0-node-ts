<template>
  <div class="home">
    <Nav class="nav"></Nav>
    <router-view></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from '../components/common/footer.vue'
import Nav from '../components/common/nav.vue'
export default {
  name: 'home',
  components: {
    Footer,Nav
  }
}
</script>
<style lang="stylus" scoped>

</style>
