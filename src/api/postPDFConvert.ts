import { AxiosError } from 'axios';

import axiosInstance from '.';

const postPDFConvert = async (file: File) => {
  const formData = new FormData();

  formData.append(`file`, file);

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/pdf/convert_to_png', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Convert Response', response.data);
    return response.data.filenames;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postPDFConvert;
