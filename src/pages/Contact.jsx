import React from 'react'
import ContactHero from '../components/ContactHero'
import FormSection from '../components/FormSection'
import InfoSection from '../components/InfoSection'

const Contact = () => {
  return (
    <div className="bg-white-900 text-black">
      <ContactHero />
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <FormSection />
        <InfoSection />
      </div>
    </div>
  )
}

export default Contact