/**
 * FileName    : http.js
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-02 17:06:57
 * Description : 
 * -----
 * Last Modified: 2019-01-02 18:01:12
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import axios from 'axios'
import store from './store/store'
const config = require('../config/config.json')
axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//  http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export class http {
  constructor () {}
  /**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
  /**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/
  put (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
}
