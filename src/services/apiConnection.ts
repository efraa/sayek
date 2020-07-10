import axios from 'axios'

const requestOptions = (config: {}) => ({
  ...config,
  headers: {
    'Content-Type': 'application/json',
    // TODO: this shouldn't work like this
    Authorization: localStorage.token,
  },
})

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL })
API.interceptors.request.use(requestOptions);

export { API }
