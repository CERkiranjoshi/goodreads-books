import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://goodreads-node-api.herokuapp.com/'
});

export default instance;