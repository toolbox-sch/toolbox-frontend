import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://jiyong.xyz:8000/api/v1',
  timeout: 5000,
});

export default axiosInstance;
