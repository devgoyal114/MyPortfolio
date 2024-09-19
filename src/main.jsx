import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './components/About.jsx'
import Homepage from './components/Homepage.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

const router=  createBrowserRouter([{
  path:"/", element:<App/>, children:[
    {path:"/", element:<Homepage/>},
    {path:"/about", element:<About/>},
    {path:"/contact", element:<Contact/>},
    {path:"/skills", element:<Skills/>},
    {path:"/projects", element:<Projects/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
