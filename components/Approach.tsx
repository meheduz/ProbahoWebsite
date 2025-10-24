export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Identify Real Problems",
      description: "We start by understanding genuine pain points. Our products solve problems that people actually face, not problems we imagine they have."
    },
    {
      number: "2", 
      title: "Design Simple Solutions",
      description: "Complexity is easy. Simplicity is hard. We work tirelessly to make our products intuitive, accessible, and delightful to use."
    },
    {
      number: "3",
      title: "Build with Quality", 
      description: "We use modern technologies and best practices. Our code is clean, our architecture is scalable, and our products are reliable."
    },
    {
      number: "4",
      title: "Iterate and Improve",
      description: "We listen to users, gather feedback, and continuously refine our products. Launch is just the beginning."
    },
    {
      number: "5",
      title: "Scale Responsibly",
      description: "We grow sustainably, ensuring quality isn't compromised as we expand. Every feature, every user, every decision is made thoughtfully."
    }
  ]

  return (
    <section id="approach" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            How we work to build products that make a real difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}