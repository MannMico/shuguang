import axios from 'axios';
import store from '@/store';
import router from '@/router';

const fetch = axios.create({
  baseURL: `${process.env.VUE_APP_APIURL}`,
  transformRequest: [
    function(data, headers) {
      console.log('headers');
      console.log(headers);
      if (headers['Content-Type'] === 'application/json') {
        return JSON.stringify(data);
      }
      return data;
    }
  ]
});

fetch.defaults.headers['Content-Type'] = 'application/json';
fetch.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['AUTHORIZATION'] = 'Bearer ' + store.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

fetch.interceptors.response.use(
  resp => {
    const json = resp.data;
    if (json.en === 200) {
      return json.data;
    } else {
      return Promise.reject(new Error(json.em));
    }
  },
  err => {
    console.log(err);
    if (err.response && err.response.status) {
      if (err.response.status === 401 || err.response.status === 400) {
        router.push({
          path: '/'
        });
      }
    }
    return Promise.reject(err);
  }
);

export default fetch;
