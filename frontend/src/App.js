import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/Homepage'
import AboutPage from './landing_page/about/AboutPage'
import SignupPage from './landing_page/sign-up/Signup'
import ProductPage from './landing_page/product/ProductPage'
import SupportPage from './landing_page/support/SupportPage'
import PricingPage from './landing_page/pricing/PricingPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App