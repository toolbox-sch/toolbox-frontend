import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderLogo onClick={() => navigate('/')}>Toolbox</HeaderLogo>
      {localStorage.getItem('accessToken') !== null ? (
        <HeaderRight onClick={() => navigate('/mypage')}>마이 페이지</HeaderRight>
      ) : (
        <HeaderRight onClick={() => navigate('/login')}>로그인</HeaderRight>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(50, 50, 50, 0.3);
`;

const HeaderLogo = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const HeaderRight = styled.div`
  font-weight: 600;
`;
