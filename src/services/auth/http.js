import axios from 'axios'
import config from '../../config'

const api = axios.create({
  // this must be set to true when CORS settings will not use "*"
  withCredentials: true,
  baseURL: config.all.apis.users,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    // prevent cycle requests
    originalRequest._isRetry = true

    try {
      const response = await axios.get(`${config.all.apis.users}/refresh`, { withCredentials: true })
      localStorage.setItem('token', response.data.accessToken)
      return api.request(originalRequest)
    } catch (e) {
      console.log('response interceptor error', e)
    }
  }

  // go on top level if another error
  throw error
})

export default api