
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Login from './Components/authantication/Login';
import Signin from './Components/authantication/Signin';
import Sidebarh from './Components/Home/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
]);



function App() {
  return (
    <div>
      <RouterProvider router={Router}/>
      {/* <Login/> */}
      {/* <Signin/> */} 
      {/* <Sidebarh/> */}
    </div>
  );
}

export default App;
