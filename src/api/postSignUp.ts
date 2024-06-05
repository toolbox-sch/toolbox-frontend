import { AxiosError } from 'axios';

import axiosInstance from '.';

interface SignUpData {
  email: string;
  password1: string;
  password2: string;
  nickname: string;
}

const postSignUp = async (data: SignUpData) => {
  try {
    const response = await axiosInstance.post('/user', data);
    console.log('SignUp Response', response.data);
    return response.data;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postSignUp;
