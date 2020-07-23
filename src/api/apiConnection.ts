import axios from 'axios'
import { token } from './token'

const requestOptions = (config: any) => ({
  ...config,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token.get(),
  },
})

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

// Request interceptor for API calls
API.interceptors.request.use(requestOptions)

// Response interceptor for API calls
API.interceptors.response.use(
  res => res,
  async err => {
    const req = err.config

    if (
      err.response?.status === 401 &&
      req.url.includes('/users/refresh-token')
    )
      return Promise.reject(err)

    if (err.response?.status === 401 && !req._retry) {
      req._retry = true
      await token.refresh()
      return API(req)
    }

    return Promise.reject(err)
  }
)

export { API }
