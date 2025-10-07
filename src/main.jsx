import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Banner from './Components/Banner/Banner.jsx'
import State from './Components/State/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <State></State>
    <Footer></Footer>
  </StrictMode>,
)
