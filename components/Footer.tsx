export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 dark:text-primary-300 mb-4">Probaho Solutions</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
              A fresh software development team ready to turn your ideas into reality. 
              We bring modern technology, clean code, and dedicated attention to every project.
            </p>
            <p className="text-primary-400 dark:text-primary-300 font-medium">
              Innovate. Build. Deliver.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Probaho Project</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Probaho Solutions. All rights reserved.</p>
          <p className="text-sm mt-2">Innovate. Build. Deliver.</p>
        </div>
      </div>
    </footer>
  )
}