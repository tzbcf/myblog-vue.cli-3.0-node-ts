import axios from 'axios';
// import store from '../store';
const token = '';
axios.defaults.timeout = 1000;

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '';
}

// http request 拦截器
axios.interceptors.request.use(
  (config: any): object => {
    config.data = JSON.stringify(config.data);
    if (!config.headers) {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
    }
    if (token) {
      config.headers.Authorization = `token:${token}`;
    }
    return config;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  },
);
//  http response 拦截器
axios.interceptors.response.use(
  (response: any): any => {
    return response;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  },
);
/**
 * @name 封装get方法
 * @url url
 * @param params
 * @return {Promise}
 */
export const get = (
  url: string = '',
  params: object = {},
  ) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    })
      .then((response: any): void => {
        resolve(response.data);
      })
      .catch((err: any): void => {
        reject(err);
      });
  });
};

/**
 * @name 封装post方法
 * @url url
 * @data data
 * @param params
 * @return {Promise}
 */
export const post = (
  url: string = '',
  data: object = {},
  params: object = {},
  ) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response: any): void => {
        resolve(response.data);
      }, (err: any): void => {
        reject(err);
      });
  });
};
