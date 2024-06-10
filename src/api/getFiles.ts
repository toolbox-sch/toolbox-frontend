import { AxiosError } from 'axios';

import axiosInstance from '.';

const getFiles = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.get('/user/files/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Get Files Response:', response.data);
    return response.data;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default getFiles;
