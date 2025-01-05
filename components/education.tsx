"use client"

import { motion } from "framer-motion"

const education = [
  {
    institution: "Daystar University",
    degree: "BSc, Actuarial Science",
    period: "August 2018 - November 2022",
    details: "3.39 GPA / cum laude / second class upper division",
    icon: "🎓"
  },
  {
    institution: "Phoenix Analytics",
    degree: "Data Engineering Certificate",
    period: "February 2024 - March 2024",
    details: "Passed",
    icon: "💻"
  },
  {
    institution: "Project Management Institute",
    degree: "Certified Associate in Project Management",
    period: "October 2022 - December 2022",
    details: "Passed",
    icon: "📊"
  },
  {
    institution: "Corporate Finance Institute",
    degree: "Financial Modelling and Valuation Analysis",
    period: "July 2022 - September 2022",
    details: "Passed",
    icon: "📈"
  }
]

export function Education() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center text-gray-900"
        >
          Education Timeline
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex items-start mb-12 last:mb-0"
            >
              {/* Connector Line */}
              <div className="absolute top-0 left-[2.5rem] bottom-0 w-px bg-gray-200 group-last:hidden" />

              {/* Timeline Icon */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md border border-gray-200">
                <span className="text-3xl">{edu.icon}</span>
              </div>

              {/* Content Card */}
              <motion.div
                className="ml-8 flex-1"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-gray-600">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-gray-600">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
