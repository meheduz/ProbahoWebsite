import { Code, DollarSign, Users, Zap, MessageCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're a new software development company founded by developers who believe in 
              building quality solutions with modern technology and honest communication.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team has experience building web applications, mobile apps, and custom software. 
              Now we're bringing that expertise to help businesses and entrepreneurs bring their ideas to life.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 floating">
                <Code className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Modern Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Latest tools & frameworks</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 floating">
                <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-bounce" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Transparent & Honest</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">No hidden costs</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 floating">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-pulse" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Hands-On Approach</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Direct developer access</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 floating">
                <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Competitive Pricing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Lower overhead rates</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}