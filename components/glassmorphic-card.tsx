"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useState } from "react"

interface GlassmorphicCardProps {
	children: ReactNode
	expandedContent?: ReactNode
	expandable?: boolean
	className?: string
}

export function GlassmorphicCard({
																	 children,
																	 expandedContent,
																	 expandable = true,
																	 className = "",
																 }: GlassmorphicCardProps) {
	const [isExpanded, setIsExpanded] = useState(false)

	const handleClick = () => {
		if (expandable) {
			setIsExpanded(!isExpanded)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
		>
			<div
				className={`relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 hover:border-gray-400 ${expandable ? "cursor-pointer" : ""} ${className} min-h-full`}
				onClick={expandable ? handleClick : undefined}
			>
				<div className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

				{expandable && (
					<div className="absolute top-4 right-4 z-10">
						<div
							className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-300"
							style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
						>
							<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</div>
				)}

				<div className="relative flex flex-col justify-center min-h-full">
					{children}
					{isExpanded && expandedContent && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="mt-6 pt-6 border-t border-gray-200"
						>
							{expandedContent}
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	)
}
