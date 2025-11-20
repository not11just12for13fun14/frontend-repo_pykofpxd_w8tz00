import { motion } from 'framer-motion'

const entries = [
  { title: 'How Stephen first met Epsy', text: 'A serendipitous moment that felt like destiny.' },
  { title: 'Their sweetest memories', text: 'Sunset strolls, shared laughter, and promises softly spoken.' },
  { title: 'Their emotional bonding', text: 'Through highs and lows, they grew inseparable.' },
  { title: 'The proposal moment', text: 'A heartfelt yes under the stars.' },
  { title: 'Forever starts on 25/01/2026', text: 'Join us as we celebrate a forever love.' },
]

export default function Timeline() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-8 shadow-2xl">
          <h3 className="text-center text-3xl md:text-4xl font-serif text-rose-800">Our Love Story</h3>
          <div className="relative mt-10">
            {/* connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-rose-300 to-lavender-300">
              <motion.div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400" animate={{ y: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            </div>

            <ul className="space-y-10">
              {entries.map((e, i) => (
                <motion.li key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.05 }} className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`${i % 2 ? 'md:order-2' : ''}`}>
                    <h4 className="text-xl font-semibold text-amber-700">{e.title}</h4>
                    <p className="mt-2 text-slate-700">{e.text}</p>
                  </div>
                  <div className="flex justify-center">
                    <motion.div className="w-28 h-28 rounded-full bg-gradient-to-br from-rose-200 to-amber-100 border border-white/60 shadow-xl" whileHover={{ scale: 1.05 }} />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
