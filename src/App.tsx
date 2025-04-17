// import React from 'react'
import './App.css'
import AboutUs from './sections/AboutUs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'

function App() {
  return (
    <div className={`bg-cream min-h-screen text-espresso`}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
