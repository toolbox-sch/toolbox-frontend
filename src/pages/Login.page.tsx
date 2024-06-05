import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import postLogin from '../api/postLogin';
import useFormInput from '../hooks/useFormInput';

const Login = () => {
  const [input, handleInputChange] = useFormInput({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const data = {
      email: input.email,
      password: input.password,
    };

    console.log(data);

    try {
      const response = await postLogin(data);
      console.log('Login API Response:', response);
      navigate('/');
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <>
      <LoginTextContainer>로그인</LoginTextContainer>
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
        <Button onClick={handleLoginClick}>로그인</Button>
      </Container>
      <Container>
        <Button onClick={() => navigate('/signup')}>회원가입</Button>
      </Container>
    </>
  );
};

export default Login;

const LoginTextContainer = styled.div`
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
