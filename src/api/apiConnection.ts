import axios from 'axios'
import { token } from './token'

const requestOptions = (config: {}) => ({
  ...config,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token.get(),
  },
})

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL, withCredentials: true })
API.interceptors.request.use(requestOptions);

export { API }
