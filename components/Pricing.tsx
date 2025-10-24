import AnimatedSection from './AnimatedSection'

export default function Pricing() {
  const pricingTiers = [
    {
      title: "Simple Website",
      description: "Landing pages, business websites, portfolios",
      timeline: "1-2 weeks",
      price: "BDT 30,000 - 80,000"
    },
    {
      title: "Web Application", 
      description: "Custom web apps, dashboards, platforms",
      timeline: "1-3 months",
      price: "BDT 1,00,000 - 5,00,000"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile applications", 
      timeline: "2-4 months",
      price: "BDT 2,00,000 - 8,00,000"
    },
    {
      title: "Custom Software",
      description: "Tailored business solutions",
      timeline: "Varies by complexity", 
      price: "Based on requirements"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Honest, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project is different, but here&apos;s what to expect
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Timeline:</div>
                  <div className="font-medium text-gray-900">{tier.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Starting from:</div>
                  <div className="font-semibold text-primary-600">{tier.price}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Rate</h3>
            <p className="text-gray-600 mb-3">For smaller tasks or ongoing work</p>
            <div className="text-xl font-semibold text-primary-600">BDT 1,500 - 2,500/hour</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Terms</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Typically 40% upfront, 30% at midpoint, 30% on completion</li>
              <li>• Milestone-based payments for larger projects</li>
              <li>• Flexible terms for the right projects</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-primary">Request Quote</button>
          <p className="text-gray-600 text-sm mt-4">
            Share your project details and we&apos;ll provide a detailed, honest estimate
          </p>
        </div>
      </div>
    </section>
  )
}