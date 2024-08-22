import axios from 'axios';
import { message } from 'antd';
// import { apiCode, baseApiPrefix } from '@src/public-constants';

interface GetParams {
    [key: string]: any;
}

interface  GetConfig {
    signal?: AbortSignal;
}       

interface PostParams {
    [propName: string]: any;
    
}

interface PostConfig {
    signal?: AbortSignal;
}

// const dataUrl = process.env.NODE_ENV === 'development' ? `/apps` : '';
const dataUrl =  'https://api.cenguigui.cn/api/music';
// const dataUrl='http://118.178.184.13:8080'

const instance = axios.create({
  withCredentials: false,
  transformResponse: [
    function (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    },
  ],
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    console.log('config:',config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code && response.data.code !== 200) {
      message.info('错误:',response.data.message);
    }
    return response;
  },
  (error) => {
    console.log('status:',error);
    return Promise.reject(error);
  }
);

export default {
  get(url: string, params: GetParams = {},config:GetConfig={}): Promise<any> {
    console.log('params',params);
    return instance.get(dataUrl + url, {...config,params})
      .then(response => response.data)
      .catch(error => {
        console.log(error.message || "An error occurred");
        return Promise.reject(error);
      });
  },
  post(url: string, params: PostParams = {}, config: PostConfig = { signal:undefined }): Promise<any> {
    return instance.post(dataUrl + url, params, {...config,signal:config.signal})
      .then(response => response.data)
      .catch(error => {
        console.log(error.message || "An error occurred");
        return Promise.reject(error);
      });
  },
};