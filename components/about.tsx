"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('.skill-card')
    const totalCards = cards.length
    const radius = window.innerWidth < 768 ? 150 : 200 // Reduce radius on mobile
    const angleOffset = -90

    const updateCardPositions = () => {
      cards.forEach((card, index) => {
        const angle = angleOffset + (index * (360 / totalCards))
        const radian = (angle * Math.PI) / 180
        const x = radius * Math.cos(radian)
        const y = radius * Math.sin(radian)

        ;(card as HTMLElement).style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      })
    }

    // Initial positioning
    updateCardPositions()

    // Update positions on resize
    window.addEventListener('resize', updateCardPositions)

    // Cleanup
    return () => window.removeEventListener('resize', updateCardPositions)
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 text-purple-200 transform rotate-45"
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 19 21 12 17 5 21 12 2"/>
        </svg>
      </motion.div>

      <div className="absolute bottom-40 left-20 text-blue-200 text-4xl font-bold">+</div>

      <motion.div
        className="absolute top-40 left-1/4 text-purple-200 text-2xl"
        animate={{
          y: [0, -20, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute left-20 top-1/3 text-indigo-200 text-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >
        ◇
      </motion.div>

      <motion.div
        className="absolute left-40 bottom-1/3 text-pink-200 text-2xl"
        animate={{
          x: [0, 20, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        ⚬
      </motion.div>

      <div className="absolute right-1/3 bottom-20 w-12 h-12 text-indigo-200">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 19h20L12 2z"/>
        </svg>
      </div>

      <motion.div
        className="absolute left-1/4 bottom-20 text-blue-200 text-4xl font-bold"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        +
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 min-h-[500px] flex items-center justify-center "
            >
              <div ref={containerRef} className="relative h-0 w-0">
                <motion.div
                  className="skill-card absolute h-40 w-40 transition-all duration-500 hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="h-full w-full rounded-xl bg-white p-4 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-spin-slow rounded-xl" />
                    <div className="h-full w-full flex flex-col items-center justify-center relative">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-center text-gray-900">Data Analysis</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="skill-card absolute h-40 w-40 transition-all duration-500 hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-full w-full rounded-xl bg-white p-4 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-spin-slow rounded-xl" />
                    <div className="h-full w-full flex flex-col items-center justify-center relative">
                      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-center text-gray-900">Engineering</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="skill-card absolute h-40 w-40 transition-all duration-500 hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="h-full w-full rounded-xl bg-white p-4 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent animate-spin-slow rounded-xl" />
                    <div className="h-full w-full flex flex-col items-center justify-center relative">
                      <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                        <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-center text-gray-900">Leadership</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-5xl font-bold text-gray-900">
                About Me
              </h2>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  I'm a passionate data professional with a keen eye for producing impactful insights in a simple and efficient way. With a background in Actuarial Science and Data Engineering, I bring a unique blend of analytical skills and business acumen to every project.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  As a natural leader and change maker, I champion for empathy and effectiveness in all my endeavors. My goal is to leverage data to drive meaningful decisions and create positive change in organizations.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">5+ Years<br/>Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">50+<br/>Projects</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
