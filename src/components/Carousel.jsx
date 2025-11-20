import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const photos = [
  { url: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1400&auto=format&fit=crop', caption: 'Our Journey Begins' },
  { url: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b010?q=80&w=1400&auto=format&fit=crop', caption: 'Moments of Love' },
  { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop', caption: 'Together Forever' },
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop', caption: 'Stephen ❤️ Epsy' },
  { url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop', caption: 'A Love Written in the Stars' },
]

function Card({ src, caption, i }) {
  return (
    <motion.div
      className="relative w-64 h-80 rounded-xl overflow-hidden select-none"
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-xl border border-white/50 shadow-2xl" />
      <img src={src} alt={caption} className="absolute inset-0 w-full h-full object-cover mix-blend-normal" />
      {/* reflection */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-white/15 to-white/50 opacity-60" />
      {/* light scratch texture */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-1.png')] opacity-30 mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-center font-semibold text-amber-600 drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]" style={{ fontFamily: 'cursive' }}>{caption}</p>
      </div>
    </motion.div>
  )
}

export default function Carousel() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    let x = 0
    const loop = () => {
      x -= 0.3
      controls.start({ x, transition: { duration: 0.2, ease: 'linear' } })
      requestAnimationFrame(loop)
    }
    loop()
  }, [controls])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300 animate-ping"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDuration: `${3 + Math.random() * 3}s` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center text-3xl md:text-4xl font-serif text-rose-800">Rolling Photocard Carousel</h3>
        <div className="mt-10 perspective-[1200px]">
          <motion.div ref={ref} animate={controls} className="flex gap-8 will-change-transform">
            {[...photos, ...photos].map((p, i) => (
              <motion.div key={i} className="will-change-transform" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}>
                <Card src={p.url} caption={p.caption} i={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
