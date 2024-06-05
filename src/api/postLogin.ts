import { AxiosError } from 'axios';

import axiosInstance from '.';

interface LoginData {
  email: string;
  password: string;
}

const postLogin = async (data: LoginData) => {
  try {
    const response = await axiosInstance.post('/user/login', data);
    console.log('Login Response:', response.data);
    return response.data;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postLogin;
