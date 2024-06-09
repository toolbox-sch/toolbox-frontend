import styled from '@emotion/styled';
import { useRef } from 'react';

import getFile from '../api/getFile';
import postPDFConvert from '../api/postPDFConvert';
import Button from '../components/Button';

const PDFConvert = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      try {
        const file = files[0];
        const filenames = await postPDFConvert(file);
        if (filenames && filenames.length) {
          for (const filename of filenames) {
            const response = await getFile(filename);
            const url = window.URL.createObjectURL(new Blob([response]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();

            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(url);
          }
        }
      } catch (error) {
        console.error('PDF Convert Error:', error);
      }
    }
  };

  return (
    <>
      <TitleContainer>PDF TO PNG</TitleContainer>
      <SubTitleContainer>PDF 파일을 PNG 파일로 변환하세요.</SubTitleContainer>
      <Button onClick={handleButtonClick}>PDF 파일 선택</Button>
      <HiddenFileInput ref={fileInputRef} type="file" accept="application/pdf" onChange={handleFileChange} />
    </>
  );
};

export default PDFConvert;

const TitleContainer = styled.div`
  padding-top: 4rem;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
`;

const SubTitleContainer = styled.div`
  padding-top: 1rem;
  font-size: 20px;
  font-weight: 400;
  color: #828282;
  text-align: center;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
