import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const quotes = [
  'Two souls, one heart.',
  'Love brought us together forever.',
  'Every moment with you feels like magic.',
]

export default function Quotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 bg-[radial-gradient(circle_at_top_left,rgba(255,182,193,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(230,210,255,0.25),transparent_60%)]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-block">
          <motion.p key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl text-rose-800">
            {quotes[index]}
          </motion.p>
          <div className="mt-2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
