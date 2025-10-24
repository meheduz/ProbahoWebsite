'use client'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-20 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary-200 rounded-full opacity-30 rotating"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-100 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary-400 rounded-full opacity-10 floating" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-500 rounded-full opacity-20 rotating" style={{animationDelay: '1.5s'}}></div>
    </div>
  )
}