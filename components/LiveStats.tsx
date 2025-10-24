'use client'

import { useState, useEffect } from 'react'

export default function LiveStats() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    code: 0,
    uptime: 0
  })

  useEffect(() => {
    const targets = { projects: 25, clients: 50, code: 100000, uptime: 99.9 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const counters = Object.keys(targets).map(key => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(counters[Object.keys(targets).indexOf(key)])
        }
        setStats(prev => ({ ...prev, [key]: current }))
      }, stepTime)
    })

    return () => counters.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">
              {Math.floor(stats.projects)}+
            </div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">
              {Math.floor(stats.clients)}+
            </div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">
              {Math.floor(stats.code / 1000)}K+
            </div>
            <div className="text-gray-300">Lines of Code</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">
              {stats.uptime.toFixed(1)}%
            </div>
            <div className="text-gray-300">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}