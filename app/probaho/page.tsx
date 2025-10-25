import Link from 'next/link'
import { ArrowLeft, Smartphone, Shield, Globe, Users, Zap, CheckCircle, AlertTriangle, Clock, Target } from 'lucide-react'

export default function ProbahoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
              <ArrowLeft size={20} />
              <span>Back to Main Site</span>
            </Link>
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Probaho Documentation</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Probaho
            <span className="block text-primary-600 dark:text-primary-400">Product Documentation</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive documentation for our unified digital wallet prototype - demonstrating the future of mobile financial services in Bangladesh.
          </p>
          <div className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-lg font-medium">
            📋 Prototype/Demonstration Phase
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Executive Summary</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">What is Probaho?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Probaho is a prototype unified digital wallet application that demonstrates a solution to Bangladesh's mobile financial services (MFS) fragmentation. It showcases how a single interface could enable users to manage multiple MFS accounts (bKash, Nagad, Rocket, Upay) and potentially enable cross-platform money transfers.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Current Status</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>Development Phase:</strong> Prototype/Demonstration<br/>
                  • Functional UI/UX demonstration<br/>
                  • Technical architecture designed<br/>
                  • Not connected to real MFS APIs<br/>
                  • Not licensed for financial services
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">The Concept</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create a digital wallet that connects to multiple MFS platforms through their APIs, allowing users to send money across platforms without the current cash-out/cash-in workaround.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Purpose</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>• Demonstrate technical feasibility</li>
                  <li>• Showcase user experience design</li>
                  <li>• Validate concept with potential users</li>
                  <li>• Present to partners and investors</li>
                  <li>• Guide future development decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Current Market Situation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Bangladesh's mobile financial services landscape includes multiple independent platforms that operate without direct interoperability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 dark:text-gray-300">Platform isolation - no direct transfers between MFS providers</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 dark:text-gray-300">Time-consuming cash-out/cash-in workaround required</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 dark:text-gray-300">Multiple apps needed for account management</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 dark:text-gray-300">Fragmented transaction history across platforms</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Current Workaround</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-4">To transfer money across platforms, users must:</p>
                <ol className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>1. Cash out from Platform A</li>
                  <li>2. Physically handle cash or use agent services</li>
                  <li>3. Cash in to Platform B</li>
                </ol>
                <p className="text-red-600 dark:text-red-400 mt-4 font-medium">
                  This process is time-consuming, requires physical presence, involves multiple fees, and is inconvenient outside business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">The Solution</h2>
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-lg font-semibold">
              One Interface → Multiple MFS Connections → Unified Experience
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Zap className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Connect Multiple MFS</h3>
              <p className="text-gray-600 dark:text-gray-300">Link existing bKash, Nagad, Rocket, and Upay accounts through official APIs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Users className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Unified Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Single balance view, consolidated transaction history, simplified management</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Globe className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Cross-Platform Transfers</h3>
              <p className="text-gray-600 dark:text-gray-300">Enable direct money transfers between different MFS platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Technical Architecture</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Current Stack</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Next.js 14 with TypeScript</li>
                    <li>• React Native with Expo</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Planned Backend</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Node.js with Express</li>
                    <li>• PostgreSQL database</li>
                    <li>• Redis for caching</li>
                    <li>• JWT authentication</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Security Design</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">TLS/HTTPS encryption for all communications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">PIN and OTP verification for transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">Encrypted data storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">Secure API authentication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Business Model Concept</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Revenue Model</h3>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Transaction Fees (Conceptual)</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 1.5% per send transaction</li>
                  <li>• Free for receiving money</li>
                  <li>• Free for adding money</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Examples:</strong><br/>
                    Send ৳100 = ৳1.50 fee<br/>
                    Send ৳1,000 = ৳15 fee<br/>
                    Send ৳10,000 = ৳150 fee
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Future Opportunities</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Premium Features</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Higher limits, priority support, advanced analytics, business accounts</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Additional Services</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Bill payments, merchant services, API access, white-label solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Development Status</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Completed ✅</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• Web application UI/UX</li>
                <li>• Mobile application UI/UX</li>
                <li>• Core screen designs</li>
                <li>• User flow demonstrations</li>
                <li>• Multi-language support</li>
                <li>• Technical documentation</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <Clock className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">In Progress ⏳</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• Backend API architecture</li>
                <li>• Database schema refinement</li>
                <li>• Authentication system</li>
                <li>• Market research</li>
                <li>• Partnership discussions</li>
                <li>• Business plan refinement</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Target className="w-8 h-8 text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Planned ⬜</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• Real MFS API integration</li>
                <li>• Regulatory licensing</li>
                <li>• MFS partnerships</li>
                <li>• Security certifications</li>
                <li>• Production infrastructure</li>
                <li>• Beta testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Next Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Immediate (3 months)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Complete backend API</li>
                <li>• Implement authentication</li>
                <li>• Finalize business plan</li>
                <li>• Research regulations</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Short-term (6 months)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Begin license application</li>
                <li>• Partnership discussions</li>
                <li>• User testing</li>
                <li>• Security implementation</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Medium-term (12 months)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Regulatory approval</li>
                <li>• MFS partnerships</li>
                <li>• Beta testing</li>
                <li>• Security audits</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Long-term (12+ months)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Public launch</li>
                <li>• User acquisition</li>
                <li>• Scale operations</li>
                <li>• Feature expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Probaho?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            This documentation represents our current understanding and plans. For questions, partnership inquiries, or investment discussions, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <Link href="/" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Back to Main Site
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm opacity-75">
            <p>Last Updated: October 2024 | Status: Prototype/Demonstration Phase | Version: 0.1.0</p>
          </div>
        </div>
      </section>
    </div>
  )
}