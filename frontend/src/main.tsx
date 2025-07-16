import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import AddProduct from './pages/AddProduct/AddProduct'
import UpdateProduct from './pages/UpdateProduct/UpdateProduct'
const router = createBrowserRouter([
    {
        path : '/', 
        element: <Home />
    },
    {
        path: '/productInfo',
        element: <ProductInfo />
    },
    {
        path: '/addProduct',
        element: <AddProduct />
    },
    {
        path: '/updateProduct',
        element: <UpdateProduct />
    }
])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
