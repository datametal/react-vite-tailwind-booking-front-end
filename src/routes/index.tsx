import { RouteObject } from 'react-router'
import Home from '../pages/Home'
import Layout from '../layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [{ path: '', element: <Home /> }],
      },
    ],
  },
]

export default routes

//   { path: '/', element: <Navigate to='/dashboard' /> },
//   { path: 'dashboard', element: <Dashboard /> },
//   { path: 'settings', element: <Settings /> },
// ],
//   children: [
// },
// { path: 'login', element: <Login /> },
// { path: 'register', element: <Register /> },
// { path: '404', element: <NotFound /> },
// { path: '*', element: <Navigate to='/404' /> },
