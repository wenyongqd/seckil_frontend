import axios from 'axios'
import qs from 'qs'

// axios.defaults.baseURL = 'http://127.0.0.1:8081'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.withCredentials = true
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.responseType = 'json';    //类型动态设置
// axios.defaults.transformRequest = function (data) {
//     //data = Qs.stringify(data);
//     data = JSON.stringify(data);
//       return data;
//     };


axios.interceptors.response.use(response => {
    //只拿到响应主体信息
    return response.data;
}, error => {
    if (error.response) {
        switch ( (error.response.status)) {
            //错误状态码处理
        }
    } else {
        if (!window.navigator.status) {
            //断网处理
            return;
        }
        return Promise.reject(error);
    }
});

export default axios;