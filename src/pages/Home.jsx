import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import AboutSection from '../components/AboutSection'
import Portfolio from '../components/Portfolio'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesSection />
      <Portfolio />
      <Testimonials />
      <AboutSection />
    </div>
  )
}

export default Home
