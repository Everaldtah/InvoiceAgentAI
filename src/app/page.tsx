import { FileText, Zap, Bell, BarChart2, ArrowRight, CheckCircle, DollarSign, Clock, Shield } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: FileText, title: 'Generate Invoices', desc: 'Create professional invoices in seconds with AI assistance' },
    { icon: Zap, title: 'Extract Data', desc: 'Parse and extract line items from any invoice PDF or image' },
    { icon: Bell, title: 'Payment Reminders', desc: 'Automated follow-ups sent at the right time, every time' },
    { icon: BarChart2, title: 'Revenue Tracking', desc: 'Real-time dashboard for outstanding and paid invoices' },
  ]

  const steps = [
    { number: '01', title: 'Upload or Describe', desc: 'Paste invoice details or upload an existing document' },
    { number: '02', title: 'AI Processes It', desc: 'Our AI extracts, validates, and structures all data' },
    { number: '03', title: 'Send & Track', desc: 'Send to clients and monitor payment status automatically' },
  ]

  const pricing = [
    { name: 'Starter', price: '$29', features: ['25 invoices/mo', 'AI extraction', 'Email reminders', 'PDF export'] },
    { name: 'Pro', price: '$79', features: ['200 invoices/mo', 'Bulk processing', 'Custom branding', 'Priority support', 'Analytics dashboard'] },
    { name: 'Enterprise', price: '$199', features: ['Unlimited invoices', 'API access', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] },
  ]

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">InvoiceAgent AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
            ⚡ AI-Powered Invoicing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Invoice Smarter with <span className="text-blue-400">AI Automation</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Generate, extract, send, and track invoices automatically. Stop chasing payments —
            let InvoiceAgent AI handle the entire billing cycle for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-colors">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-medium transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
            <div className="text-gray-400">Faster Invoice Processing</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
            <div className="text-gray-400">Faster Payment Collection</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
            <div className="text-gray-400">Businesses Automated</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Everything You Need</h2>
          <p className="text-gray-400 text-center mb-12">One AI agent that handles your entire invoicing workflow</p>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <f.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-400 text-center mb-12">Three simple steps to automate your billing</p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-blue-500/30 mb-4">{s.number}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features Banner */}
      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <Shield className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Bank-Grade Security</h3>
              <p className="text-gray-400 text-sm">All invoice data is encrypted in transit and at rest.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <Clock className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Smart Reminders</h3>
              <p className="text-gray-400 text-sm">Automated follow-ups 7, 3, and 1 day before due dates.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <Zap className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Instant Extraction</h3>
              <p className="text-gray-400 text-sm">Extract line items from PDFs and images in under 3 seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-gray-400 text-center mb-12">Start free, scale as your business grows</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${
                  i === 1
                    ? 'bg-blue-600/20 border-2 border-blue-500'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {i === 1 && (
                  <div className="text-xs font-semibold text-blue-400 bg-blue-500/20 rounded-full px-3 py-1 inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}<span className="text-lg text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    i === 1
                      ? 'bg-blue-600 hover:bg-blue-500'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoicing?</h2>
          <p className="text-gray-400 mb-8">Join 1,200+ businesses that never chase a payment manually again.</p>
          <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-xl font-medium text-lg flex items-center gap-2 mx-auto transition-colors">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 InvoiceAgent AI. Built for TheClawVault.</p>
        </div>
      </footer>
    </main>
  )
}
