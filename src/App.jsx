import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Details from './components/Details'
import Timeline from './components/Timeline'
import Quotes from './components/Quotes'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-ivory/50 to-lavender-50 text-slate-800">
      {/* floating love bubbles background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="absolute w-6 h-6 rounded-full bg-rose-200/40 blur-sm" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animation: `float ${10 + i}s ease-in-out infinite` }} />
        ))}
      </div>

      <Hero />
      <Carousel />
      <Details />
      <Timeline />
      <Quotes />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
