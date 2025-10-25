import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Technology from '@/components/Technology'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
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
        <Approach />
        <Technology />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}