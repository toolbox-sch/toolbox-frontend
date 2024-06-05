import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';
import { Home, Login, NotFound, SignUp } from './pages';

interface RouteElement {
  path: string;
  element: ReactNode;
  errorElement: ReactNode;
  children: { path: string; element: ReactNode }[];
}

const routes: RouteElement[] = [
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
