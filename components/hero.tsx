"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Angela Gitonga
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data Analytics Specialist
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming complex data into actionable insights for impactful
            decision-making
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-purple-100 transition duration-300"
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/angela2.jpeg"
              alt="Angela Gitonga"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
      <DataAnalyticsBackground />
    </section>
  );
}

function DataAnalyticsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated data points */}
        {[...Array(10)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 3 + 2}
            fill="white"
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Animated line graph */}
        <motion.path
          d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Animated bar chart */}
        {[...Array(5)].map((_, i) => (
          <motion.rect
            key={i}
            x={100 + i * 50}
            y={200}
            width="30"
            height="0"
            fill="white"
            initial={{ height: 0 }}
            animate={{ height: Math.random() * 100 + 50 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Animated pie chart */}
        <motion.path
          d="M600,150 L600,50 A100,100 0 0,1 679,79 Z"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Animated scatter plot */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={i + "scatter"}
            cx={400 + Math.random() * 200}
            cy={300 + Math.random() * 100}
            r="3"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
