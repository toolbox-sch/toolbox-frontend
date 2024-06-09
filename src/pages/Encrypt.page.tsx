import styled from '@emotion/styled';
import { useRef } from 'react';

import getFile from '../api/getFile';
import postEncrypt from '../api/postEncrypt';
import Button from '../components/Button';
import useFormInput from '../hooks/useFormInput';

const Encrypt = () => {
  const [input, handleInputChange] = useFormInput({ password: '' });
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
        const filename = await postEncrypt(input.password, files[0]);
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
        console.error('Encrypt Error:', error);
      }
    }
  };

  return (
    <>
      <TitleContainer>PDF 암호화</TitleContainer>
      <SubTitleContainer>PDF 파일을 암호화하여 보안을 강화하세요.</SubTitleContainer>
      <PasswordContainer>
        <PasswordInput
          placeholder="원하는 암호를 입력하세요"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
      </PasswordContainer>
      <Button onClick={handleButtonClick}>PDF 파일 선택</Button>
      <HiddenFileInput ref={fileInputRef} type="file" accept="application/pdf" multiple onChange={handleFileChange} />
    </>
  );
};

export default Encrypt;

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

const PasswordContainer = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

const PasswordInput = styled.input`
  min-width: 340px;
  min-height: 40px;
  padding-left: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
