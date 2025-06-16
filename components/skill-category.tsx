"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SkillItem {
  name: string
  icon?: ReactNode
}

interface SkillCategoryProps {
  title: string
  skills: SkillItem[]
  icon: ReactNode
}

export function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 p-6 h-full transition-all duration-300 hover:border-gray-400">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          {/* 카테고리 헤더 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>

          {/* 스킬 목록 */}
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {skill.icon && (
                  <div className="w-5 h-5 flex items-center justify-center text-gray-600">
                    {skill.icon}
                  </div>
                )}
                <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
