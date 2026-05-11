import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>⚡ Florida's E-Bike Insurance Specialists</span>
          <a href="tel:800-616-1418" className="hover:text-green-200">📞 800-616-1418</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">E-Bike<span className="text-green-600">Ins</span>.com</h1>
            <p className="text-xs text-slate-500">Florida E-Bike Coverage Specialists</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hidden sm:inline text-green-700 font-semibold hover:text-green-900 transition text-sm">Blog</Link>
            <div className="relative">
              <button
                onClick={() => setShowNavMenu(!showNavMenu)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
              >
                Get a Quote {showNavMenu ? '▲' : '▼'}
              </button>
              {showNavMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-green-100 overflow-hidden" style={{zIndex:9999}}>
                  <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition border-b border-gray-100"
                    onClick={() => setShowNavMenu(false)}>
                    <span className="text-xl">⚡</span>
                    <div className="text-left">
                      <div className="font-bold text-green-900 text-sm">Quick Quote</div>
                      <div className="text-xs text-gray-500">2 mins • Auto-fill</div>
                    </div>
                  </a>
                  <a href="https://hoinsurance.wufoo.com/forms/mkvskv1159ehnz/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition border-b border-gray-100"
                    onClick={() => setShowNavMenu(false)}>
                    <span className="text-xl">📝</span>
                    <div className="text-left">
                      <div className="font-bold text-green-900 text-sm">Full Quote Form</div>
                      <div className="text-xs text-gray-500">E-Bike details • 2 mins</div>
                    </div>
                  </a>
                  <a href="tel:800-616-1418"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition"
                    onClick={() => setShowNavMenu(false)}>
                    <span className="text-xl">📞</span>
                    <div className="text-left">
                      <div className="font-bold text-green-900 text-sm">Call Us</div>
                      <div className="text-xs text-gray-500">800-616-1418</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-16 md:py-24 px-4 text-white">
        <style>{`
          @keyframes kenBurnsEB{0%{transform:scale(1.0) translate(0%,0%)}25%{transform:scale(1.08) translate(-1.5%,-1%)}50%{transform:scale(1.12) translate(1%,-1.5%)}75%{transform:scale(1.08) translate(1.5%,1%)}100%{transform:scale(1.0) translate(0%,0%)}}
          .hero-bg-eb{animation:kenBurnsEB 30s ease-in-out infinite;will-change:transform;}
        `}</style>
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-bg-eb absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/hero-ebike.jpg')",opacity:0.4}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-green-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-semibold mb-2 uppercase tracking-wider">Florida E-Bike Insurance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your E-Bike Deserves Real Protection
          </h2>
          <p className="text-slate-300 text-xl mb-4 max-w-2xl mx-auto">
            Standard home & auto policies don't cover e-bikes. Theft, accidents, liability — get the right coverage in minutes.
          </p>
          <p className="text-green-300 text-lg font-semibold mb-8">Florida specialists · All Class 1, 2 & 3 e-bikes · Licensed since 1966</p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">⚡</span>
              Quick Quote
              <span className="block text-xs font-normal opacity-75">2 mins • Auto-fill</span>
            </a>
            <a href="https://hoinsurance.wufoo.com/forms/mkvskv1159ehnz/" target="_blank" rel="noopener noreferrer"
              className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📝</span>
              E-Bike Quote Form
              <span className="block text-xs font-normal opacity-75">Tell us about your ride</span>
            </a>
            <a href="tel:800-616-1418"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📞</span>
              Call Us
              <span className="block text-xs font-normal opacity-75">800-616-1418</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why You Need It */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-4">Why Your Current Policy Isn't Enough</h3>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">Most Florida homeowners & renters policies exclude or severely limit e-bike coverage. Here's what you're risking:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-100 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🔓</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Theft</h4>
              <p className="text-slate-600">E-bike theft is rampant in Florida. Your homeowners policy likely won't cover it — or limits payout to pennies on the dollar.</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🚑</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Liability</h4>
              <p className="text-slate-600">If you injure a pedestrian or cause a car accident, you could face a lawsuit. Standard policies often exclude motorized bikes.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🔋</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Battery Damage</h4>
              <p className="text-slate-600">E-bike battery fires and damage are an emerging risk. Make sure you're covered for repairs, replacement, and fire damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Bike Classes */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">We Cover All E-Bike Classes</h3>
          <p className="text-center text-slate-400 mb-12">Florida recognizes 3 classes of e-bikes — each with different coverage needs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="text-green-400 text-xl font-bold mb-2">Class 1</div>
              <h4 className="font-bold text-lg mb-2">Pedal Assist</h4>
              <p className="text-slate-300 text-sm">Motor assists while pedaling. Max 20 mph. Treated like a bicycle in most Florida counties.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="text-yellow-400 text-xl font-bold mb-2">Class 2</div>
              <h4 className="font-bold text-lg mb-2">Throttle Assist</h4>
              <p className="text-slate-300 text-sm">Has a throttle — no pedaling required. Max 20 mph. Popular for commuters and delivery riders.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-xl border-2 border-orange-400">
              <div className="text-orange-400 text-xl font-bold mb-2">Class 3 ⚡</div>
              <h4 className="font-bold text-lg mb-2">Speed Pedelec</h4>
              <p className="text-slate-300 text-sm">Up to 28 mph. Most powerful class — and most important to insure. Often treated like a moped by carriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get Your E-Bike Insurance Quote</h3>
          <p className="text-green-100 text-lg mb-8">Fast, easy, and Florida-specific. Tell us about your ride and we'll find the right coverage.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl py-4 px-8 rounded-xl shadow-lg transition text-center">
              <span className="block text-xl mb-0.5">⚡</span>
              Quick Quote
              <span className="block text-xs font-normal opacity-75">2 mins • Auto-fill</span>
            </a>
            <a href="https://hoinsurance.wufoo.com/forms/mkvskv1159ehnz/" target="_blank" rel="noopener noreferrer"
              className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 font-bold text-xl py-4 px-8 rounded-xl shadow-lg transition text-center">
              <span className="block text-xl mb-0.5">📝</span>
              E-Bike Quote Form
              <span className="block text-xs font-normal opacity-75">Tell us about your ride</span>
            </a>
            <a href="tel:800-616-1418"
              className="bg-white hover:bg-green-50 text-green-700 font-bold text-xl py-4 px-8 rounded-xl shadow-lg transition text-center">
              <span className="block text-xl mb-0.5">📞</span>
              Call Us
              <span className="block text-xs font-normal opacity-60">800-616-1418</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">TRUSTED BY FLORIDA RIDERS SINCE 1966</p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-600">
            <span>✅ All e-bike classes covered</span>
            <span>✅ Theft & liability protection</span>
            <span>✅ Battery & damage coverage</span>
            <span>✅ Florida licensed specialists</span>
            <span>✅ Multiple carriers</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <h4 className="text-white font-bold text-xl mb-2">E-BikeIns.com</h4>
        <p className="text-sm">A Tomlinson & Co Agency · Florida Licensed Since 1966</p>
        <p className="text-xs mt-2">📞 800-616-1418 · <a href="mailto:quotes@ebikeins.com" className="hover:text-white">quotes@ebikeins.com</a></p>
        <div className="mt-6 border-t border-slate-700 pt-5">
          <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Also from Tomlinson &amp; Co</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="https://tomlinsonandco.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition underline">Tomlinson &amp; Co (Parent Agency)</a>
            <a href="https://hoinsurance.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition underline">Florida Home Insurance</a>
            <a href="https://floridauto.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition underline">Florida Auto Insurance</a>
          </div>
        </div>
        <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
