import axios from 'axios';

const cep = axios.create({
    baseURL: 'http://api.postmon.com.br/v1/cep/',
});

export default cep;
