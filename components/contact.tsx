"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export function Contact() {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-500/5" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Let's transform your data into actionable insights together. Reach out through any of these channels:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
           
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:Angelagitonga3@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-gray-700/50 hover:bg-purple-600/20 p-6 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-300">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-purple-300 text-sm mb-1">Email</div>
                  <div className="text-white group-hover:text-purple-200 transition-colors">Angelagitonga3@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/angelagitonga"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-gray-700/50 hover:bg-purple-600/20 p-6 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-300">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-purple-300 text-sm mb-1">LinkedIn</div>
                  <div className="text-white group-hover:text-purple-200 transition-colors">Connect with me</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+254708196456"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-gray-700/50 hover:bg-purple-600/20 p-6 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-300">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-purple-300 text-sm mb-1">Phone</div>
                  <div className="text-white group-hover:text-purple-200 transition-colors">+254 708 196 456</div>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 bg-gray-700/50 p-6 rounded-2xl">
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-300">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-purple-300 text-sm mb-1">Location</div>
                  <div className="text-white">Syokimau, Machakos, Kenya</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 text-lg mb-6">
                Available for freelance opportunities and collaborations
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors duration-300"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
