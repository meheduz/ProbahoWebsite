import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Work</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What we're building to demonstrate our capabilities
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-in-left" delay={200}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Our In-House Project
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Probaho - Digital Wallet Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A unified digital wallet concept for Bangladesh's mobile financial services. 
                  Built with Next.js, React Native, and modern backend architecture.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This is our proof of concept—showing what we can build with modern technology.
                </p>
                
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Prototype/Demonstration Project
                </div>
                
                <Link href="/probaho" className="btn-primary">Learn About Probaho</Link>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Technologies Used:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Next.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">React Native</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">PostgreSQL</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={400}>
          <div className="text-center bg-primary-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Your Project Could Be Next</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're actively building our portfolio with projects that showcase our capabilities. 
              If you have an interesting project, let's talk.
            </p>
            <button className="btn-primary">Start a Project</button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}