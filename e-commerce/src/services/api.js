import axios from 'axios';

const api = axios.create({
    baseURL: 'https://eletronic-store-dot-bandtec.appspot.com',
});

api.interceptors.request.use(async config => {
    const token = await localStorage.getItem('token');

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
