import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Banner from './Components/Banner/Banner.jsx'
import State from './Components/State/State.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Navbar></Navbar>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
