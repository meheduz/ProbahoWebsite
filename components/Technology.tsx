import AnimatedSection from './AnimatedSection'

export default function Technology() {
  const techStack = {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Native'],
    backend: ['Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    infrastructure: ['AWS/GCP', 'Docker', 'CI/CD', 'Monitoring'],
    security: ['End-to-end encryption', 'Security audits', 'Compliance-first']
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Technology</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We build with cutting-edge technologies that enable fast, secure, and scalable products
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-400 border border-transparent">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Frontend</h3>
            <ul className="space-y-2">
              {techStack.frontend.map((tech, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{tech}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-400 border border-transparent">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Backend</h3>
            <ul className="space-y-2">
              {techStack.backend.map((tech, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{tech}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-400 border border-transparent">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Infrastructure</h3>
            <ul className="space-y-2">
              {techStack.infrastructure.map((tech, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{tech}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-400 border border-transparent">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Security</h3>
            <ul className="space-y-2">
              {techStack.security.map((tech, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}