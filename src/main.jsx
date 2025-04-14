import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Posts from './Components/Posts/Posts.jsx'

const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const router = createBrowserRouter([
  {
    path :'/',
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path: "/mobiles", Component:Mobiles},
      {path: "/laptops", Component:Laptops},
      {
        path: "/users", 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path: "/posts",
        element: <Suspense fallback={<small>Loading....</small>}>
          <Posts postPromise = {postPromise}></Posts>
        </Suspense>
      }
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
