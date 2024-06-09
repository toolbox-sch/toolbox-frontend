import { AxiosError } from 'axios';

import axiosInstance from '.';

const postSplit = async (file: File, start: string, end: string) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('start', start);
  formData.append('end', end);

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/pdf/split', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Split Response', response.data);
    return response.data.filename;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postSplit;
