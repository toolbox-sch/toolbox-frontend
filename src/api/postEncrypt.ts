import { AxiosError } from 'axios';

import axiosInstance from '.';

const postEncrypt = async (password: string, file: File) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('key', password);

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/pdf/encrypt', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Encrypt Response', response.data);
    return response.data.filename;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postEncrypt;
