import * as axios from 'axios';

const instance = axios.default.create();

instance.defaults.baseURL = 'http://localhost:3000/';
instance.defaults.timeout = 20000;

export { instance as default };

// https://antics-code.herokuapp.com/