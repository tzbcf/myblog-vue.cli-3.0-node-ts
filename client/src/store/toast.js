/**
 * FileName    : toast.js
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-10 14:42:34
 * Description : -----
 * Last Modified: 2019-01-10 16:30:00
 * Modified By  : -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

const state = {
  toastObj: {
    'showTime': 3000
  },
  toastType: ''
}

const actions = {

}

const mutations = {
  SET_TOAST_DATA (state, obj) {
    state.toastObj = obj
    if (obj.type.includes('msg')) {
      state.toastType = 'msg'
    } else {
      state.toastType = obj.type
    }
    setTimeout(() => {
      state.toastType = ''
    }, state.toastObj.showTime)
  },
  CLOSE_TOAST (state, toastType) {
    state.toastType = toastType
  }
}

const getters = {

}

export default {
  state, actions, mutations, getters
}
