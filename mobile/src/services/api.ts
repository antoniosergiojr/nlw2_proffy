import axios from 'axios';

// url expo = exp://192.168.0.104:19000
const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',
});

export default api;