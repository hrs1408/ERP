import Login from '@/pages/Authentication/Login';
import RootLayout from '@/layouts/root.layout';
import Cashier from '@/pages/Cashier';

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/cashier',
        element: <Cashier />,
      },
    ],
  },
];
