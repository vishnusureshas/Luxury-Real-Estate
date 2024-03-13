import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'
import AboutUs from './components/About/AboutUs'
import SingleVillas from './components/Villas/SingleVillas'
import Villas from './components/Villas/Villas'

const App = () => {
  return (
    <>
    <Router >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/villas' element={<Villas/>}/>
        <Route path='/villas/:id' element={<SingleVillas/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App