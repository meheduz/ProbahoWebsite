import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Products from '@/components/Products'
import SmartFeatures from '@/components/SmartFeatures'
import InteractiveDemo from '@/components/InteractiveDemo'
import Approach from '@/components/Approach'
import Technology from '@/components/Technology'


import Contact from '@/components/Contact'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
export default function Home() {
  return (
    <main className="relative">
      <FloatingElements />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <SmartFeatures />
        <InteractiveDemo />
        <Products />
        <Approach />
        <Technology />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}