import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Let's Discuss Your Project</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're eager to hear about your ideas and explore how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h3>
            <a href="mailto:hello@yourcompany.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm">
              hello@yourcompany.com
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Phone</h3>
            <a href="tel:+880XXXXXXXXX" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm">
              +880-XXX-XXXXXXX
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">WhatsApp</h3>
            <a href="https://wa.me/880XXXXXXXXX" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm">
              +880-XXX-XXXXXXX
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Sylhet, Bangladesh</p>
          </div>
        </div>

        <div className="bg-primary-50 dark:bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Quick Contact Form</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}