import axios, { CancelToken } from 'axios';
// import { apiCode, baseApiPrefix } from '@src/public-constants';

interface GetParams {
    params?: object;
    cancelToken?: CancelToken;
}

interface PostParams {
    [propName: string]: any;
}

interface PostConfig {
    cancelToken?: CancelToken;
}

const dataUrl = process.env.NODE_ENV === 'development' ? `/apps` : '';

const instance = axios.create({
    withCredentials: true,
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
            config.headers.Authorization = `Bearer ${window.__TOKEN__}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        if (response.data.code && response.data.code !== 200) {
            console.log(response.data.message);
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    get(url: string, params: GetParams = { cancelToken: null }): Promise<any> {
        return instance.get(dataUrl + url, params)
            .then(response => response.data)
            .catch(error => {
                Toast.info(error.message || "An error occurred");
                return Promise.reject(error);
            });
    },
    post(url: string, params: PostParams = null, config: PostConfig = { cancelToken: null }): Promise<any> {
        return instance.post(dataUrl + url, params, config)
            .then(response => response.data)
            .catch(error => {
                Toast.info(error.message || "An error occurred");
                return Promise.reject(error);
            });
    },
};