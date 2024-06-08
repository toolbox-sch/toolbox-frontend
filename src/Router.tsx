import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';
import {
  ConvertImage,
  Encrypt,
  Extract,
  Home,
  Login,
  Merge,
  MyPage,
  NotFound,
  PDFConvert,
  SignUp,
  Split,
} from './pages';

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
      { path: '/convert_image', element: <ConvertImage /> },
      { path: '/encrypt', element: <Encrypt /> },
      { path: '/extract', element: <Extract /> },
      { path: '/login', element: <Login /> },
      { path: '/merge', element: <Merge /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/pdf_to_png', element: <PDFConvert /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/split', element: <Split /> },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
