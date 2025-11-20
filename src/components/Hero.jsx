import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Petal = ({ delay = 0 }) => (
  <motion.span
    initial={{ y: -100, opacity: 0, rotate: 0 }}
    animate={{ y: ['-10%', '110%'], opacity: [0, 1, 1, 0.8], rotate: [0, 45, -20, 60] }}
    transition={{ duration: 14, repeat: Infinity, delay, ease: 'easeInOut' }}
    className="pointer-events-none absolute top-0 text-[18px] md:text-[22px]"
    style={{ left: `${Math.random() * 100}%` }}
  >
    🌸
  </motion.span>
)

export default function Hero() {
  return (
    <section className="relative w-full h-[110vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dreamy gradient + bokeh overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-ivory/40 to-lavender/50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,192,203,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(230,210,255,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bokeh" />
      </div>

      {/* floating petals */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <Petal key={i} delay={i * 0.6} />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* neon heart behind names */}
          <div className="relative mx-auto mb-8 w-60 h-60 md:w-72 md:h-72">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full drop-shadow-[0_0_35px_rgba(255,105,180,0.7)]">
              <path d="M100 170 C 20 120, 20 60, 60 50 C 85 45, 100 70, 100 70 C 100 70, 115 45, 140 50 C 180 60, 180 120, 100 170 Z" fill="none" stroke="url(#grad)" strokeWidth="6" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffb0c7" />
                  <stop offset="50%" stopColor="#ffd580" />
                  <stop offset="100%" stopColor="#c7b7ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="text-2xl md:text-3xl tracking-wide text-rose-700/90">
            We’re Getting Engaged!
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1 }} className="mt-2 text-rose-500">
            Celebrate the beginning of our forever.
          </motion.p>

          <motion.h1 initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6 }} className="mt-6 text-4xl md:text-6xl font-serif font-semibold text-rose-900 drop-shadow-[0_2px_0_rgba(255,255,255,0.7)]">
            <span className="font-[cursive]">Stephen Raj</span> ✨❤️✨ <span className="font-[cursive]">Epsy Millaniya</span>
          </motion.h1>

          {/* photo glass card with golden rim + heartbeat */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative mx-auto mt-10 w-full max-w-md">
            <div className="absolute inset-0 rounded-[28px] border-2 border-amber-300/80 shadow-[0_0_35px_rgba(255,215,0,0.35)] heartbeat" />
            <div className="relative rounded-[28px] p-1 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl shadow-2xl">
              <div className="rounded-[24px] overflow-hidden ring-2 ring-amber-200/60">
                <img src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1400&auto=format&fit=crop" alt="Stephen & Epsy" className="w-full h-[360px] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* shimmer floral edges */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(255,182,193,0.35),transparent_60%)]" />
    </section>
  )
}
