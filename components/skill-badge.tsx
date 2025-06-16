"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 p-6 h-full transition-all duration-300 hover:border-gray-400">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="text-center mb-4 font-medium text-lg">{name}</div>

          <div className="relative h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-gray-600">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
