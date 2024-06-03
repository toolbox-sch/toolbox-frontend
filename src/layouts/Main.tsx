import styled from '@emotion/styled';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from './Header';

const Main = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <ScrollRestoration />
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  margin: 60px auto 0 auto;
  padding: 0 20px;
`;
