import {default as api} from 'axios';

api.defaults.baseURL = process.env.REACT_APP_URL_API;
api.defaults.headers = {"Authorization" : `Bearer ${process.env.REACT_APP_TOKEN}`}

export default api;