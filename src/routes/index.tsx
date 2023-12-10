import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/home',
    element: <Main />,
  },
]);

export default router;
