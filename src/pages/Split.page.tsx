import styled from '@emotion/styled';
import { useRef } from 'react';

import getFile from '../api/getFile';
import postSplit from '../api/postSplit';
import Button from '../components/Button';
import useFormInput from '../hooks/useFormInput';

const Split = () => {
  const [input, handleInputChange] = useFormInput({ start: '', end: '' });
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
        const filename = await postSplit(file, input.start, input.end);
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
        console.error('Split Error:', error);
      }
    }
  };

  return (
    <>
      <TitleContainer>PDF 추출하기</TitleContainer>
      <SubTitleContainer>하나의 PDF 파일 중 원하는 부분만 잘라보세요.</SubTitleContainer>
      <InputContainer>
        <NumberInput placeholder="시작" name="start" value={input.start} onChange={handleInputChange} />
        <NumberInput placeholder="끝" name="end" value={input.end} onChange={handleInputChange} />
      </InputContainer>
      <Button onClick={handleButtonClick}>PDF 파일 선택</Button>
      <HiddenFileInput ref={fileInputRef} type="file" accept="application/pdf" multiple onChange={handleFileChange} />
    </>
  );
};

export default Split;

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

const InputContainer = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

const NumberInput = styled.input`
  min-width: 150px;
  min-height: 40px;
  margin: 0 15px;
  padding-left: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
