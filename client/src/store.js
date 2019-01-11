import Vue from 'vue'
import Vuex from 'vuex'
import toast from './store/toast'
import common from './store/common'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast,
    common
  }
})
