"use client"

import { motion } from "framer-motion"

const education = [
  {
    institution: "Daystar University",
    degree: "BSc, Actuarial Science",
    period: "August 2018 - November 2022",
    details: "3.39 GPA / cum laude / second class upper division"
  },
  {
    institution: "Phoenix Analytics",
    degree: "Data Engineering Certificate",
    period: "February 2024 - March 2024",
    details: "Passed"
  },
  {
    institution: "Project Management Institute",
    degree: "Certified Associate in Project Management",
    period: "October 2022 - December 2022",
    details: "Passed"
  },
  {
    institution: "Corporate Finance Institute",
    degree: "Financial Modelling and Valuation Analysis",
    period: "July 2022 - September 2022",
    details: "Passed"
  }
]

export function Education() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-purple-600 mb-2">{edu.institution}</h4>
              <p className="text-gray-600 mb-2">{edu.period}</p>
              <p>{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

