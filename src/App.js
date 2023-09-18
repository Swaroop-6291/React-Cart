import React from 'react'
import "./styles/app.scss"
import {  BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/Home'
import Cart from "./components/Cart";
import Footer from './components/Footer'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
     <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
      <Toaster />
      
     </Router>
  )
}

export default App