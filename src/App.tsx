// import React from 'react'
import './App.css'
import AboutUs from './sections/AboutUs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Products from './sections/Products'

function App() {
  return (
    <div className={`bg-cream min-h-screen text-espresso`}>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
