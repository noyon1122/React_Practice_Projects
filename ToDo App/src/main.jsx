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
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
