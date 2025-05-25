import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { lazy, Suspense } from 'react'
import Home from './components/Home.jsx'
import Loading from './components/Loading.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const Cart = lazy(()=> import("./components/Cart.jsx"));
const NotFound = lazy(()=>import("./components/NotFound.jsx"));
const ProductDetails = lazy(()=>import("./components/ProductDetails.jsx"));
const Products = lazy(()=>import("./components/Products.jsx"));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/cart",
        element:<Suspense fallback={<Loading/>}><Cart/></Suspense>,
      },
      {
        path:"/products",
        element:<Suspense fallback={<Loading/>}><Products/></Suspense>,
      },
      {
        path:"/contact",
        element:<Suspense fallback={<Loading/>}><Contact/></Suspense>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<Loading/>}><About/></Suspense>,
      },
      {
        path:"/products/:id",
        element:<Suspense fallback={<Loading/>}><ProductDetails/></Suspense>,
      }
    ],
    errorElement: <Suspense fallback={<Loading/>}><NotFound/></Suspense>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
