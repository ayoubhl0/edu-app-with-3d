import axios from 'axios'
// Use /api/* during dev to leverage Vite proxy -> Django http://127.0.0.1:8000
const API = axios.create({ baseURL: '/api' })

export const getWords = () => API.get('/words/')
export const getRewards = () => API.get('/rewards/')
