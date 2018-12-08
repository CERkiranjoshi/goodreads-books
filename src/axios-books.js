import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://goodreads-books-search.herokuapp.com/'
});

export default instance;