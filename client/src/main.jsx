import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './Add/Addplaces.jsx'
import Get from './Get/Getstate.jsx'
import Getd from './Get/Getdistrict/getd.jsx'
// import UpdateUser from './updateuser/Update.jsx'
const route = createBrowserRouter([
  {
  path:"/",
  element: <App />,},
  
    {
      path:"/addplaces",
      element: <Add/>,
        },
        {
          path:"/getstate",
          element:<Get />,

        },
        {
          path:"/getdistrict",
          element:<Getd />,
        },
    //     {
    //       path:"/update/:id",
    //       element:<UpdateUser />,
    //     }
]);
createRoot(document.getElementById('root')).render(
   <RouterProvider router={route}></RouterProvider>
)
