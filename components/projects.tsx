"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Customer Service Dashboard",
    description: "Designed and implemented a comprehensive dashboard for the Customer Service department, providing real-time insights and improving decision-making processes.",
    technologies: ["Power BI", "SQL", "SharePoint"]
  },
  {
    title: "Marketing Campaign Analytics",
    description: "Developed a data-driven marketing dashboard to track and analyze the performance of various marketing campaigns, resulting in a 30% increase in campaign effectiveness.",
    technologies: ["Tableau", "Google Analytics", "Python"]
  },
  {
    title: "Health Insurance Claims Predictor",
    description: "Created a machine learning model to predict health insurance claims, helping the company optimize its risk assessment and pricing strategies.",
    technologies: ["Python", "Scikit-learn", "Jupyter Notebooks"]
  },
  {
    title: "Automated Reporting System",
    description: "Implemented an automated reporting system using Power Automate and SharePoint, reducing manual reporting time by 40% and improving data accuracy.",
    technologies: ["Power Automate", "SharePoint", "Power Apps"]
  }
]

export function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

