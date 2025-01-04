"use client"

import { motion } from "framer-motion"

const skills = [
  "Power BI", "Tableau", "Power Automate", "Power Apps", "SharePoint",
  "SQL", "Python", "Project Management", "Data Strategy Development",
  "Stakeholder Management", "Data Governance", "Data Analytics",
  "Business Intelligence", "Data Modelling", "Data Visualization"
]

export function Skills() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-full px-4 py-2 text-purple-600 font-semibold shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

