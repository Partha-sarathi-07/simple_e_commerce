import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import AddProduct from './pages/AddProduct/AddProduct'

const router = createBrowserRouter([
    // {
    //     path : '/', 
    //     element: <Home />
    // },
    // {
    //     // path: '/',
    //     // element: <ProductInfo />
    // },
    {
        path: '/',
        element: <AddProduct />

    }
])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
