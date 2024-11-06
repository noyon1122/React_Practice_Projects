import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
           {
            path:'/',
            element:<App></App>,
           }
])

createRoot(document.getElementById('root')).render(
 <div className='mx-[10%] '>
   <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
 </div>
)
