import axios from './axios'
export default {
    register(options = {}) {
        console.log("进来了")
        return axios.post('/api/registerAPI', options);
    }
}