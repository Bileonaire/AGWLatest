"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Jubilee Insurance Ltd",
    position: "Data Analytics Specialist",
    period: "September 2023 - Present",
    description: "Designed and implemented numerous dashboards across various departments, developed data collection and integration solutions, and led business support and training initiatives.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-400",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    textColor: "text-blue-600",
    hoverText: "group-hover:text-blue-600"
  },
  {
    company: "Kwality Caterers",
    position: "Financial Consultant",
    period: "January 2021 - February 2022",
    description: "Advised on new competitive marketing strategies, initiated execution of new revenue-making ideas, and accelerated profits by 50% over a period of 6 months.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-400",
    bgColor: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-100",
    textColor: "text-emerald-600",
    hoverText: "group-hover:text-emerald-600"
  },
  {
    company: "Daystar University",
    position: "Events & Projects Liaison",
    period: "January 2020 - February 2022",
    description: "Mobilized peers to plan and execute events, spearheaded community-building programs, and managed administrative responsibilities for student organizations.",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-400",
    bgColor: "bg-amber-50",
    hoverBg: "group-hover:bg-amber-100",
    textColor: "text-amber-600",
    hoverText: "group-hover:text-amber-600"
  }
]

export function Experience() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 relative inline-block"
          >
            Professional Journey
            <span className="absolute -right-8 top-0 text-4xl">✨</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mt-4 text-xl"
          >
            Milestones that shaped my career path
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white h-full rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                <div className={`p-4 rounded-xl ${exp.bgColor} ${exp.hoverBg} transition-colors duration-300 w-fit`}>
                  {exp.icon}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 ${exp.hoverText} transition-colors duration-300`}>
                      {exp.position}
                    </h3>
                    <h4 className={`text-lg font-medium ${exp.textColor}`}>
                      {exp.company}
                    </h4>
                  </div>

                  <div className={`px-3 py-1.5 ${exp.bgColor} ${exp.textColor} rounded-full text-sm font-medium w-fit`}>
                    {exp.period}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
