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
// const dataUrl =  'https://api.cenguigui.cn/api/music';
const dataUrl='http://118.178.184.13:8080'
// const dataUrl='http://127.0.0.1:8080'

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
      // const token=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiMjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzMiLCJhcHBfc2VjcmV0IjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJleHAiOjE3MjUyMDc2NzQsImlzcyI6ImJsb2ctc2VydmljZSJ9.rDX3HZ90qkxN1eYSYvD84Hz6XAOuL-R2ETgaindqBaU`
      const token=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiMjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzMiLCJhcHBfc2VjcmV0IjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJleHAiOjE3MjUyNzcyMTQsImlzcyI6ImJsb2ctc2VydmljZSJ9.OAGyKf3l-cEnwlT7Ncd3C5mqJxhHH7s1MvgdhJh0CYI`
      config.headers.Authorization = token;
    }
    
    return config;
  },
  (error) => {
    
    if (error.response) {
      
      
    }
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
    
    return Promise.reject(error);
  }
);

export default {
  get(url: string, params: GetParams = {},config:GetConfig={}): Promise<any> {
    
    return instance.get(dataUrl + url, {...config,...params} )
      .then(response => response.data)
      .catch(error => {
        
        return Promise.reject(error);
      });
  },
  post(url: string, params: PostParams = {}, config: PostConfig = { signal:undefined }): Promise<any> {
    return instance.post(dataUrl + url, params, {...config,signal:config.signal})
      .then(response => response.data)
      .catch(error => {
        
        return Promise.reject(error);
      });
  },
};