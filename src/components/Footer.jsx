import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 border border-white/60 shadow-xl">
          <Heart className="text-amber-600" fill="#fbbf24" />
        </motion.div>
        <p className="mt-6 text-rose-800">With Endless Love, Stephen Raj & Epsy Millaniya</p>
      </div>

      {/* fireflies */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span key={i} className="absolute w-1.5 h-1.5 rounded-full bg-amber-300" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2 + Math.random()*2 }} style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, boxShadow: '0 0 12px rgba(251,191,36,0.8)' }} />
        ))}
      </div>

      {/* lavender lace border */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-[repeating-linear-gradient(90deg,#e9d5ff,transparent_10px)] opacity-60" />
    </footer>
  )
}
