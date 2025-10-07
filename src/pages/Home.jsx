import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import AboutSection from '../components/AboutSection'
import Portfolio from '../components/Portfolio'
import Features from '../components/Features'
import AboutSnapshot from '../components/AboutSnapshot'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSnapshot />
      <Features />
      <ServicesSection />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <AboutSection />
    </div>
  )
}

export default Home
