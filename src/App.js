import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Login from './Components/authantication/Login';
import Signin from './Components/authantication/Signin';
import Home from './Components/Home/Home';
import Sidebarh from './Components/Home/Sidebar';
import CreatePost from './Components/Post/Createpost';
import Explore from './Components/Explore/Explore';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebarh /> 
      <main style={{ flexGrow: 1 }}>
      
        <Outlet />
      </main>
    </div>
  );
};


const Router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/', 
    element: <Layout />, 
    children: [
      {
        path: 'home',
        element: <Home />, 
      },
      {
        path: 'createpost',
        element: <CreatePost/>, 
      },
      {
        path: 'explore',
        element: <Explore/>, 
      },
    ],
  },
  {
    path: '*',
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
