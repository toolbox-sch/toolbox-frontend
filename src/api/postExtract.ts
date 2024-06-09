import { AxiosError } from 'axios';

import axiosInstance from '.';

const postExtract = async (file: File) => {
  const formData = new FormData();

  formData.append(`file`, file);

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/pdf/extract', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Extract Response', response.data);
    return response.data.text;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postExtract;
