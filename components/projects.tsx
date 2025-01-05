"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Customer Service Dashboard",
    description: "Designed and implemented a comprehensive dashboard for the Customer Service department, providing real-time insights and improving decision-making processes.",
    technologies: ["Power BI", "SQL", "SharePoint"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "blue"
  },
  {
    title: "Marketing Campaign Analytics",
    description: "Developed a data-driven marketing dashboard to track and analyze the performance of various marketing campaigns, resulting in a 30% increase in campaign effectiveness.",
    technologies: ["Tableau", "Google Analytics", "Python"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "emerald"
  },
  {
    title: "Health Insurance Claims Predictor",
    description: "Created a machine learning model to predict health insurance claims, helping the company optimize its risk assessment and pricing strategies.",
    technologies: ["Python", "Scikit-learn", "Jupyter Notebooks"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "purple"
  },
  {
    title: "Automated Reporting System",
    description: "Implemented an automated reporting system using Power Automate and SharePoint, reducing manual reporting time by 40% and improving data accuracy.",
    technologies: ["Power Automate", "SharePoint", "Power Apps"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: "amber"
  }
]

export function Projects() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-80" />

      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 relative inline-block"
          >
            Featured Projects
            <motion.div
              className="absolute -right-8 -top-8 w-16 h-16"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)",
                borderRadius: "50%"
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${project.color}-500 to-${project.color}-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                <div className={`p-4 rounded-xl bg-${project.color}-50 group-hover:bg-${project.color}-100 transition-colors duration-300 w-fit mb-6`}>
                  <div className={`text-${project.color}-600`}>{project.icon}</div>
                </div>

                <h3 className={`text-2xl font-bold text-gray-900 group-hover:text-${project.color}-600 transition-colors duration-300 mb-4`}>
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-${project.color}-50 text-${project.color}-600 px-4 py-2 rounded-xl text-sm font-medium border border-${project.color}-100 hover:border-${project.color}-300 transition-all duration-300`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
