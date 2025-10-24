'use client'

import { useState, useEffect } from 'react'
import { Zap, Brain, Cpu } from 'lucide-react'

export default function SmartFeatures() {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    { icon: Brain, title: "AI-Powered Development", desc: "Smart code generation & optimization" },
    { icon: Zap, title: "Auto-Scaling Solutions", desc: "Intelligent resource management" },
    { icon: Cpu, title: "Performance Analytics", desc: "Real-time optimization insights" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Smart Development Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className={`p-6 rounded-lg transition-all duration-500 ${
                  currentFeature === index 
                    ? 'bg-white/20 scale-105 shadow-2xl' 
                    : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <IconComponent className={`w-12 h-12 mx-auto mb-4 transition-all duration-500 ${
                  currentFeature === index ? 'animate-pulse scale-110' : ''
                }`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}