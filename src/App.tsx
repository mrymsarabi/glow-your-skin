// import React from 'react'
import './App.css'
import AboutUs from './sections/AboutUs'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import OurStory from './sections/OurStory'
import Products from './sections/Products'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <div className={`bg-cream min-h-screen text-espresso`}>
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <OurStory />
      <AboutUs />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
