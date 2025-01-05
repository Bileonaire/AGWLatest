"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Code, LightbulbIcon, Users, Cog } from 'lucide-react'
import React from "react"

const skillCategories = {
  "Data Visualization": ["Power BI", "Tableau", "Data Visualization"],
  "Development": ["SQL", "Python", "Power Automate", "Power Apps"],
  "Strategy": ["Data Strategy Development", "Data Governance", "Business Intelligence"],
  "Leadership": ["Project Management", "Stakeholder Management"],
  "Technical": ["SharePoint", "Data Analytics", "Data Modelling"]
} as const

const categoryIcons = {
  "Data Visualization": BarChart3,
  "Development": Code,
  "Strategy": LightbulbIcon,
  "Leadership": Users,
  "Technical": Cog
}

const categoryColors = {
  "Data Visualization": "text-blue-500",
  "Development": "text-green-500",
  "Strategy": "text-purple-500",
  "Leadership": "text-red-500",
  "Technical": "text-yellow-500"
}

export function Skills() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Skills & Expertise
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging a diverse skill set to drive data-driven solutions and strategic insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full bg-white/80 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      {React.createElement(categoryIcons[category as keyof typeof categoryIcons], {
                        className: `w-6 h-6 ${categoryColors[category as keyof typeof categoryColors]}`
                      })}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge variant="secondary" className="text-sm font-medium">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
