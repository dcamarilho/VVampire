import axios from './axiosInstance';

export const login = async (credentials) => {
  return await axios.post('/auth/login', credentials);
};

export const getUsers = async () => {
  return await axios.get('/users');
};