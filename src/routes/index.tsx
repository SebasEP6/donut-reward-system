import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Main />,
  },
]);

export default router;
