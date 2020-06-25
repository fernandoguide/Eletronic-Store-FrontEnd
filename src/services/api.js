import axios from 'axios';

const api = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    // baseURL: 'http://localhost:8080/',
    baseURL: 'https://eletronic-store.herokuapp.com/',
});

api.interceptors.request.use(async config => {
    const token = await localStorage.getItem('token');

    if (token != null) {
        config.headers.Authorization = token;
    }
    return config;
});

export default api;
