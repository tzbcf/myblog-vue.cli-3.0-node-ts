<template>
  <div class="home">
    <router-view></router-view>
    <footers class="footer"></footers>
  </div>
</template>

<script>
import Footer from '../components/common/footer.vue'
export default {
  name: 'home',
  components: {
    'footers': Footer
  }
}
</script>
<style lang="stylus" scoped>

</style>
