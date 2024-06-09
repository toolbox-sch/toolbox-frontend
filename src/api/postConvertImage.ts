import { AxiosError } from 'axios';

import axiosInstance from '.';

const postConvertImage = async (file: File, targetType: string) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('target', targetType);

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/image/convert', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Convert Image Response', response.data);
    return response.data.filename;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postConvertImage;
