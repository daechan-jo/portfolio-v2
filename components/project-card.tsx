"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Github, ArrowUpRight} from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
	title: string
	description: string
	tags: string[]
	image: string
	demoUrl?: string
	repoUrl?: string
	disabled?: boolean
}

export function ProjectCard({title, description, tags, image, demoUrl, repoUrl, disabled = false}: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			whileInView={{opacity: 1, y: 0}}
			transition={{duration: 0.5}}
			viewport={{once: true}}
			className={`group ${disabled ? "pointer-events-none" : ""}`}
		>
			<div
				className={`relative h-full overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 transition-all duration-300 ${
					disabled ? "blur-[1.5px] opacity-80 cursor-not-allowed" : "group-hover:border-gray-400"
				}`}
				onMouseEnter={() => !disabled && setIsHovered(true)}
				onMouseLeave={() => !disabled && setIsHovered(false)}
			>
				<div
					className={`absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 transition duration-1000 ${
						!disabled && "group-hover:opacity-100 group-hover:duration-200"
					}`}
				></div>

				<div className="relative h-full flex flex-col">
					<div className="relative overflow-hidden h-48">
						<div
							className={`absolute inset-0 bg-gradient-to-b from-gray-400/20 to-gray-500/20 opacity-0 transition-opacity duration-300 z-10 ${
								!disabled && "group-hover:opacity-100"
							}`}
						></div>
						<img
							src={image || "/placeholder.svg"}
							alt={title}
							className={`w-full h-full object-cover transition-transform duration-700 ${
								!disabled && isHovered ? "scale-110" : "scale-100"
							}`}
						/>
					</div>

					<div className="p-6 flex-grow">
						<h3 className="text-xl font-bold mb-2">{title}</h3>
						<p className="text-gray-600 mb-4">{description}</p>

						<div className="flex flex-wrap gap-2 mb-6">
							{tags.map((tag, index) => (
								<Badge
									key={index}
									variant="secondary"
									className={`bg-gray-100 text-gray-700 ${!disabled && "hover:bg-gray-200"}`}
								>
									{tag}
								</Badge>
							))}
						</div>

						<div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/50">
							{disabled ? (
								<>
									<div className="text-gray-400 text-sm flex items-center">
										<Github className="mr-2 h-4 w-4"/>
										Code
									</div>
									<div className="text-gray-400 text-sm flex items-center">
										포트폴리오
										<ArrowUpRight className="ml-2 h-4 w-4"/>
									</div>
								</>
							) : (
								<>
									<Button
										variant="ghost"
										size="sm"
										className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
										asChild
									>
										<Link href={repoUrl || "#"} target="_blank" rel="noopener noreferrer">
											<Github className="mr-2 h-4 w-4"/>
											Code
										</Link>
									</Button>
									<Button
										size="sm"
										className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900 border-0"
										asChild
									>
										<Link href={demoUrl || "#"}>
											포트폴리오
											<ArrowUpRight className="ml-2 h-4 w-4"/>
										</Link>
									</Button>
								</>
							)}
						</div>
					</div>

					<div className="absolute top-3 right-3 z-20">
						<div
							className={`w-3 h-3 rounded-full transition-colors duration-300 ${
								disabled ? "bg-red-500" : isHovered ? "bg-green-500" : "bg-zinc-500"
							}`}
						></div>
					</div>

					{disabled && (
						<div className="absolute inset-0 flex items-center justify-center z-30">
							<div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
								<span className="text-white font-medium">Coming Soon</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	)
}
