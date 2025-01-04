"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-6">
            I'm a passionate data professional with a keen eye for producing impactful insights in a simple and efficient way. With a background in Actuarial Science and Data Engineering, I bring a unique blend of analytical skills and business acumen to every project.
          </p>
          <p className="text-lg">
            As a natural leader and change maker, I champion for empathy and effectiveness in all my endeavors. My goal is to leverage data to drive meaningful decisions and create positive change in organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

