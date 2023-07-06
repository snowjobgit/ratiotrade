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

export default api