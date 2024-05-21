import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <ScrollRestoration />
      <Outlet />
    </main>
  );
};

export default Main;
