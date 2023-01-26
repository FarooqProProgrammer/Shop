import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Product'
import SingleProuduct from './pages/SingleProduct'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



export default function App() {
 
  return (
  
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Single/:id' element={<SingleProuduct/>}/>

          </Routes>
        <Footer/>
      </BrowserRouter>
      
 
  )
}
