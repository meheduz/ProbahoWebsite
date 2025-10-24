import { Globe, Smartphone, Settings, Palette, Link, MessageSquare } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern, responsive websites and web applications.",
      features: ["Business websites", "Web applications", "Admin dashboards", "Content management"],
      tech: "React, Next.js, Tailwind CSS, Node.js"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Create mobile experiences for iOS and Android.",
      features: ["Cross-platform apps", "iOS and Android", "Mobile interfaces", "App backends"],
      tech: "React Native, Expo, Node.js"
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Build software tailored to your specific business needs.",
      features: ["Business tools", "Booking systems", "Internal dashboards", "Data management"],
      tech: "Full-stack development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design clean, intuitive interfaces that users enjoy.",
      features: ["Interface design", "Wireframing", "User experience", "Design systems"],
      tech: "Figma, modern design"
    },
    {
      icon: Link,
      title: "API Development",
      description: "Connect different systems and build APIs.",
      features: ["RESTful APIs", "Third-party integration", "Payment gateways", "System connectivity"],
      tech: "Node.js, Express, PostgreSQL"
    },
    {
      icon: MessageSquare,
      title: "Technical Consulting",
      description: "Get guidance on your technical decisions.",
      features: ["Technology selection", "Architecture planning", "Code review", "Feasibility assessment"],
      tech: "Expert guidance"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive software development services using modern technology stacks
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group floating">
                  <IconComponent className="w-8 h-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">What We Build:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-xs text-primary-600 font-medium">
                    {service.tech}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}