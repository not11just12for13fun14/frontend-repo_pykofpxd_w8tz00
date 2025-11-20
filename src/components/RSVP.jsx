import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RSVP() {
  const [burst, setBurst] = useState(false)
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.button
          onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 800) }}
          whileHover={{ scale: 1.05 }}
          className="relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold shadow-[0_10px_30px_rgba(255,182,193,0.5)]"
          style={{ background: 'linear-gradient(90deg,#e9a7a7,#ffc3a0)' }}
        >
          <span className="absolute inset-0 rounded-full border border-white/40" />
          <span className="relative">RSVP for Stephen & Epsy ❤️</span>
        </motion.button>

        {burst && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span key={i} className="absolute text-xl" initial={{ opacity: 1, scale: 0 }} animate={{ opacity: 0, scale: 1, x: (Math.random()-0.5)*300, y: (Math.random()-0.5)*180, rotate: Math.random()*360 }} transition={{ duration: 0.8 }} style={{ left: '50%', top: '50%' }}>💖</motion.span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
