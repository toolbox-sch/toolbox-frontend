import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import getFile from '../api/getFile';
import postConvertImage from '../api/postConvertImage';
import Button from '../components/Button';

const ConvertImage = () => {
  const [targetType, setTargetType] = useState('PNG');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeTargetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetType(e.target.value);
  };

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
        const filename = await postConvertImage(file, targetType);
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
        console.error('Convert Image Error:', error);
      }
    }
  };

  return (
    <>
      <TitleContainer>이미지 변환</TitleContainer>
      <SubTitleContainer>이미지 파일을 다양한 형식으로 변환하세요.</SubTitleContainer>
      <SelectTargetContainer>
        <SelectTarget onChange={onChangeTargetType}>
          <option value={'PNG'}>PNG</option>
          <option value={'JPEG'}>JPEG</option>
          <option value={'GIF'}>GIF</option>
          <option value={'BMP'}>BMP</option>
          <option value={'PPM'}>PPM</option>
          <option value={'DIB'}>DIB</option>
        </SelectTarget>
      </SelectTargetContainer>
      <Button onClick={handleButtonClick}>PDF 파일 선택</Button>
      <HiddenFileInput ref={fileInputRef} type="file" onChange={handleFileChange} />
    </>
  );
};

export default ConvertImage;

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

const SelectTargetContainer = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

const SelectTarget = styled.select`
  min-width: 50px;
  border: 1px solid #000000;
  border-radius: 4px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
