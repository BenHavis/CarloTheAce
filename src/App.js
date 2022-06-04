import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import React from 'react'
import Contact from './components/Contact'
import Container from './UI/Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

function App () {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
