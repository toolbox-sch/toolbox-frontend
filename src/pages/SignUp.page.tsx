import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import postSignUp from '../api/postSignUp';
import useFormInput from '../hooks/useFormInput';

const SignUp = () => {
  const [input, handleInputChange] = useFormInput({ email: '', password: '', confirmPassword: '', nickname: '' });
  const navigate = useNavigate();

  const handleSignUpClick = async () => {
    const data = {
      email: input.email,
      password1: input.password,
      password2: input.confirmPassword,
      nickname: input.nickname,
    };

    console.log(data);

    try {
      const response = await postSignUp(data);
      console.log('SignUp API Response:', response);
      navigate('/login');
    } catch (error) {
      console.error('SignUp Error:', error);
    }
  };

  return (
    <>
      <SignUpTextContainer>회원가입</SignUpTextContainer>
      <Container>
        <Input placeholder="이메일" type="email" name="email" value={input.email} onChange={handleInputChange} />
      </Container>
      <Container>
        <Input
          placeholder="비밀번호"
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
      </Container>
      <Container>
        <Input
          placeholder="비밀번호 확인"
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleInputChange}
        />
      </Container>
      <Container>
        <Input placeholder="닉네임" type="text" name="nickname" value={input.nickname} onChange={handleInputChange} />
      </Container>
      <Container>
        <Button onClick={handleSignUpClick}>가입하기</Button>
      </Container>
    </>
  );
};

export default SignUp;

const SignUpTextContainer = styled.div`
  padding-top: 6rem;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Container = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 15rem;
  height: 2rem;
  padding-left: 0.5rem;
  border: 1px solid;
  border-radius: 6px;
`;

const Button = styled.button`
  width: 15rem;
  height: 2rem;
  border: 1px solid;
  border-radius: 6px;
`;
