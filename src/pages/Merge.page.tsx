import styled from '@emotion/styled';
import { useRef } from 'react';

import getFile from '../api/getFile';
import postMerge from '../api/postMerge';
import Button from '../components/Button';

const Merge = () => {
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
        const filename = await postMerge(files);
        if (filename) {
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
      } catch (error) {
        console.error('Merge Error:', error);
      }
    }
  };

  return (
    <>
      <TitleContainer>PDF 합치기</TitleContainer>
      <SubTitleContainer>여러 PDF 파일을 하나로 합쳐보세요.</SubTitleContainer>
      <Button onClick={handleButtonClick}>여러 PDF 파일 선택</Button>
      <HiddenFileInput ref={fileInputRef} type="file" accept="application/pdf" multiple onChange={handleFileChange} />
    </>
  );
};

export default Merge;

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
