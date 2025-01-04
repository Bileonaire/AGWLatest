"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-purple-600 mr-4 text-xl" />
              <a href="mailto:Angelagitonga3@gmail.com" className="text-lg hover:text-purple-600 transition-colors">
                Angelagitonga3@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaLinkedin className="text-purple-600 mr-4 text-xl" />
              <a href="https://www.linkedin.com/in/angelagitonga" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-purple-600 transition-colors">
                linkedin.com/in/angelagitonga
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-purple-600 mr-4 text-xl" />
              <a href="tel:+254708196456" className="text-lg hover:text-purple-600 transition-colors">
                +254 708 196 456
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-purple-600 mr-4 text-xl" />
              <span className="text-lg">Syokimau, Machakos, Kenya</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

