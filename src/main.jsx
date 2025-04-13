import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path: "/mobiles", Component:Mobiles},
      {path: "/laptops", Component:Laptops}
    ]
  },
  {
    path: "/about",
    element: <div>This is About section here</div>
  },
  {
    path: "/blogs",
    element: <div>This is Blogs section here</div>
  },
  {
    path: "/login",
    element: <div>this is login page</div>
  },
  // {
  //   path:"/app",
  //   Component:App
  // },
  {
    path:"/app",
    element: <App></App>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
