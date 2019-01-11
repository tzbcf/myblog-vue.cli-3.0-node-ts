/**
 * FileName    : toast.js
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-10 14:42:34
 * Description : -----
 * Last Modified: 2019-01-11 10:14:35
 * Modified By  : -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

const state = {
  toastObj: {},
  toastType: ''
}

const actions = {

}

const mutations = {
  SET_TOAST_DATA (state, obj) {
    if (state.toastObj.clearTime) {
      clearTimeout(state.toastObj.clearTime)
      state.toastType = ''
    }
    state.toastObj = obj
    if (!obj.showTime) {
      state.toastObj.showTime = 3000
    }
    if (obj.type.includes('msg')) {
      state.toastType = 'msg'
    } else {
      state.toastType = obj.type
    }
    state.toastObj.clearTime = setTimeout(() => {
      state.toastType = ''
    }, state.toastObj.showTime)
  },
  CLOSE_TOAST (state) {
    clearTimeout(state.toastObj.clearTime)
    state.toastObj = { showTime: 3000 }
    state.toastType = ''
  }
}

const getters = {

}

export default {
  state, actions, mutations, getters
}
