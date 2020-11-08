import * as axios from 'axios';

var instance = axios.default.create();

instance.defaults.baseURL = 'https://antics-code.herokuapp.com/';
instance.defaults.timeout = 20000;

export { instance as default };