import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'



export default function App() {
 
  return (
  
      <BrowserRouter>
    
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Single/:id' element={<SingleProuduct/>}/>

          </Routes>
        
      </BrowserRouter>
      
 
  )
}
