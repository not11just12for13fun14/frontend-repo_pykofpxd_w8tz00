import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Details() {
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="relative rounded-[28px] p-1 bg-gradient-to-br from-amber-200 via-rose-100 to-lavender-100">
          <div className="rounded-[26px] p-8 md:p-12 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="rounded-2xl p-8 bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl">
              <motion.h3 variants={item} className="text-center text-4xl font-serif text-amber-700 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">Save the Date</motion.h3>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <motion.div variants={item} whileHover={{ scale: 1.03 }} className="group rounded-xl p-5 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-xl border border-amber-200/60 shadow-xl">
                  <Calendar className="mx-auto text-amber-600 group-hover:animate-bounce" />
                  <p className="mt-3 text-center text-rose-700 font-medium">Date</p>
                  <p className="text-center text-slate-800">25/01/2026</p>
                </motion.div>
                <motion.div variants={item} whileHover={{ scale: 1.03 }} className="group rounded-xl p-5 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-xl border border-amber-200/60 shadow-xl">
                  <Clock className="mx-auto text-amber-600 group-hover:animate-bounce" />
                  <p className="mt-3 text-center text-rose-700 font-medium">Time</p>
                  <p className="text-center text-slate-800">From 6 PM</p>
                </motion.div>
                <motion.div variants={item} whileHover={{ scale: 1.03 }} className="group rounded-xl p-5 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-xl border border-amber-200/60 shadow-xl">
                  <MapPin className="mx-auto text-amber-600 group-hover:animate-bounce" />
                  <p className="mt-3 text-center text-rose-700 font-medium">Venue</p>
                  <p className="text-center text-slate-800">Hotel Rajsbhojanam, Hosur</p>
                </motion.div>
              </div>
            </div>
          </div>
          {/* floating flowers */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.span key={i} className="absolute text-2xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 + i }} style={{ top: `${10 + i * 12}%`, left: `${5 + i * 15}%` }}>🌺</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
