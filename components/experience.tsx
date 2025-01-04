"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Jubilee Insurance Ltd",
    position: "Data Analytics Specialist",
    period: "September 2023 - Present",
    description: "Designed and implemented numerous dashboards across various departments, developed data collection and integration solutions, and led business support and training initiatives."
  },
  {
    company: "Kwality Caterers",
    position: "Financial Consultant",
    period: "January 2021 - February 2022",
    description: "Advised on new competitive marketing strategies, initiated execution of new revenue-making ideas, and accelerated profits by 50% over a period of 6 months."
  },
  {
    company: "Daystar University",
    position: "Events & Projects Liaison",
    period: "January 2020 - February 2022",
    description: "Mobilized peers to plan and execute events, spearheaded community-building programs, and managed administrative responsibilities for student organizations."
  }
]

export function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-gray-100 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
              <h4 className="text-lg text-purple-600 mb-2">{exp.company}</h4>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

