import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './Add/Addplaces.jsx'
import Get from './Get/Getstate.jsx'
import Getd from './Get/Getdistrict/getd.jsx'
import Getkk from './Get/Getdistrict/Getdatakanyakumari/Getdkk.jsx'
import Getm from './Get/Getdistrict/GetDatamadurai/getdm.jsx'
import Getds from './Get/Getdistrict/GetDatasivaganga/getds.jsx'
import Gettiru from './Get/Getdistrict/Getdatatirunelveli/getdtiru.jsx'
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
        {
          path:"/getkk",
          element:<Getkk/>
        },
        {
          path:"/getm",
          element:<Getm/>
        },
        {
          path:"/getds",
          element:<Getds/>
        },
        {
          path:"/gettiru",
          element:<Gettiru/>
        }

]);
createRoot(document.getElementById('root')).render(
   <RouterProvider router={route}></RouterProvider>
)
