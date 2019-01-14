/*
 * FileName    : common
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-11 16:26:35
 * Description : ee
 * -----
 * Last Modified: eee
 * Modified By  : eee
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Axios } from '../http'

const state = {
  token: '',
  userData: {}
}

const actions = {
  login ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      Axios.post(data.loginUrl, data.userData).then((result) => {
        commit('SET_TOKEN', result.token)
        commit('SET_USERDATA', data.userData)
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_USERDATA (state, userData) {
    state.userData = userData
  }
}

const getters = {

}

export default {
  state, actions, mutations, getters
}
