'use client'

import { useState } from 'react'
import { Code, Smartphone, Globe, Database } from 'lucide-react'

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('web')

  const demos = {
    web: { icon: Globe, title: "Web Apps", code: "const app = NextJS + TypeScript\napp.deploy('production')" },
    mobile: { icon: Smartphone, title: "Mobile Apps", code: "const app = ReactNative\napp.buildFor(['iOS', 'Android'])" },
    api: { icon: Database, title: "APIs", code: "const api = Express + PostgreSQL\napi.secure().scale()" },
    ui: { icon: Code, title: "UI/UX", code: "const design = Figma + TailwindCSS\ndesign.responsive().beautiful()" }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Interactive Development</h2>
          <p className="text-gray-600 dark:text-gray-300">See our tech stack in action</p>
        </div>

        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(demos).map(([key, demo]) => {
              const IconComponent = demo.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-primary-600 text-white scale-105' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <IconComponent size={16} />
                  {demo.title}
                </button>
              )
            })}
          </div>

          <div className="bg-black rounded-lg p-4 font-mono text-green-400 min-h-[120px] relative overflow-hidden">
            <div className="absolute top-2 left-2 flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-8">
              <div className="text-gray-500">// {demos[activeTab as keyof typeof demos].title} Development</div>
              <pre className="text-green-400 mt-2 animate-pulse">
                {demos[activeTab as keyof typeof demos].code}
              </pre>
              <div className="text-primary-400 mt-2">✓ Ready to deploy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}