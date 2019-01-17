import Vue from 'vue'
import Vuex from 'vuex'
import toast from './store/toast'
import common from './store/common'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast,
    common
  },
  plugins: [createPersistedState({//  数据持久化，刷新不消失
    storage: window.sessionStorage
  })]
})
