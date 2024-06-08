import { AxiosError } from 'axios';

import axiosInstance from '.';

const postMerge = async (files: FileList) => {
  const formData = new FormData();

  Array.from(files).forEach((file) => {
    formData.append(`file`, file);
  });

  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axiosInstance.post('/tool/pdf/merge', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Merge Response', response.data);
    return response.data.filename;
  } catch (error) {
    if (error === AxiosError) {
      console.error(error);
    }
  }
};

export default postMerge;
