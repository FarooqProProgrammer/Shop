import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import About from './About'
import Header from './components/Header'
import Contact from './Contact'
import { GlobalStyle } from './GlobalStyle'
import Home from './Home'
import Products from './Products'
import SingleProuduct from './SingleProuduct'

export default function App() {
  const theme = {
    colors:{
      bg:"#f6f8fa",
      black:"#000",
      footer_bg:"#0a1435",
      btn:"rgb(98,84,243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#fff",
      gradient:"linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px"

    },
    media:{
      mobile:"768px",
      tab:"998px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Single/:id' element={<SingleProuduct/>}/>

          </Routes>
        
      </BrowserRouter>
      
    </ThemeProvider>
  )
}
