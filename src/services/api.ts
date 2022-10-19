import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
})

export default instance