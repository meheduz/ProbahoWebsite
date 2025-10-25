'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 fade-in ${isVisible ? 'visible' : ''}`}>
            <span className="floating">Innovate</span> <span className="floating" style={{animationDelay: '1s'}}>Build</span> <span className="floating" style={{animationDelay: '2s'}}>Deliver</span>
            <span className="block text-primary-600 animate-pulse">Let's Build Your Software Together</span>
          </h1>
          
          <p className={`text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto fade-in ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
            A fresh software development team ready to turn your ideas into reality. 
            We bring modern technology, clean code, and dedicated attention to every project.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-in ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#services" className="btn-secondary">View Our Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}