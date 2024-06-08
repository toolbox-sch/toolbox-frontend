import { AxiosError } from 'axios';

import axiosInstance from '.';

const getFile = async (filename: string) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.get(`/download/${filename}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      responseType: 'blob',
    });
    console.log('Get File Response:', response.data);
    return response.data;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default getFile;
