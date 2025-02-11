import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000/api',
  timeout: 5000,
});
export default instance;