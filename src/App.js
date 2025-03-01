import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

import Home from './pages/Home/index.js'
import About from './pages/About/index.js'
import Collection from './pages/Collection/index.js'
import  Login from './pages/Login/index.js'
import Cart from './pages/Cart/index.js'
import Contact  from './pages/Contact/index.js'
import Orders from './pages/Orders/index.js'
import Product from './pages/Product/index.js'
import Placeorder from './pages/Placeorder/index.js'

import Navbar from './component/Navbar/index.js'
import Footer from './component/Footer/index.jsx'
import SearchBar from './component/SearchBar/index.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS



const App = () => {

 
  return (
    <div>
   
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/place-order' element={<Placeorder/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>


     
      

    </div>
  )
}

export default App

