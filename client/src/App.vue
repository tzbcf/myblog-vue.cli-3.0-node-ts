<template>
  <div id="app">
    <router-view></router-view>
    <Toast></Toast>
  </div>
</template>
<script>
// g1i0fci7zy2uondbkh7i6a4xwwfo1gpnzyu2yfvdvm9t3rg0
import Toast from "./components/common/toast.vue";
export default {
  components: {
    Toast
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  overflow hidden
  text-align: center;
  color: #2c3e50;  
}

.login-btn {
  display: block;
  background-color: #039be5;
  color: #fff;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border-radius: 4px;
  overflow: visible;
  line-height: 35px;
}

.col-red {
  color: red;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-80 {
  margin-bottom: 80px;
}

.pb-20 {
  padding-bottom: 20px;
}
</style>
