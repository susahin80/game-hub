import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '41f7cc3e746f40f09082a9d554618517',
    },
});

export { CanceledError };
