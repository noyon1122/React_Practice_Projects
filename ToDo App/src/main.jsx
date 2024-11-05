import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Today from './components/Today.jsx'
import Pending from './components/Pending.jsx'
import Overdue from './components/Overdue.jsx'

const router=createBrowserRouter([
           {
            path:'/',
            element:<App></App>,
            children:[
              {
                path:'/today',
                element:<Today></Today>
              },
              {
                path:'/pending',
                element:<Pending></Pending>
              },
              {
                path:'/overdue',
                element:<Overdue></Overdue>
              }
            ]
           }
])

createRoot(document.getElementById('root')).render(
 <div className='mx-[10%] bg-slate-200 mt-12 rounded-md'>
   <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
 </div>
)
