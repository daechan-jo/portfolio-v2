"use client"

import {motion} from "framer-motion"
import {useMobile} from "@/hooks/use-mobile"

const experiences = [
	{
		title: "부트캠프",
		company: "Elice - AI Track",
		period: "2023 - 2024",
		description:
			"JavaScript를 기반으로 하는 풀스택 웹 개발 과정을 수료했습니다. 프론트엔드와 백엔드 아키텍처, 데이터 처리, NoSQL/SQL 데이터베이스 등 다양한 웹 개발 기술을 학습하고 프로젝트에 적용했습니다.",
	},
	{
		title: "LinkedOut",
		company: "Team Project",
		period: "2024 - 2025",
		description:
			"처음으로 프로젝트 기획부터 배포까지 전체 과정을 경험한 프로젝트였습니다. 백엔드와 인프라를 단독으로 구현했으며 실제 서비스 운영 환경을 경험했습니다.",
	},
	{
		title: "스마트 스토어 자동화",
		company: "Personal project",
		period: "2024 - current",
		description:
			"온라인 스토어와 도매 사이트 간의 업무를 자동화한 프로젝트입니다. 외부 API 연동 및 Puppeteer를 활용한 자동화 구현, k8s 기반 마이크로서비스 아키텍처 설계와 RabbitMQ를 활용한 MSA 내부 통신을 구현했습니다.",
	},
	{
		title: "스프링 웹플럭스 아키텍처",
		company: "Personal project",
		period: "2025 - 2025",
		description: "스프링 웹플럭스와 R2DBC를 활용하여 완전한 비동기 논블로킹 서버 아키텍처를 구현했습니다. 서비스 간 통신에는 RabbitMQ를 활용하여 비동기 이벤트 기반 통신을 구현했으며, 모든 데이터 처리 및 외부 통신을 논블로킹으로 처리하여 높은 확장성과 처리량을 달성했습니다.",
	},
]

export function Timeline() {
	const isMobile = useMobile()

	return (
		<div
			className={`space-y-12 relative ${
				!isMobile
					? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-gray-300 before:h-full before:z-0"
					: ""
			}`}
		>
			{experiences.map((experience, index) => (
				<div
					key={index}
					className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
				>
					<motion.div
						className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
						initial={{opacity: 0, x: index % 2 === 0 ? 50 : -50}}
						whileInView={{opacity: 1, x: 0}}
						transition={{duration: 0.5}}
						viewport={{once: true}}
					>
						<div
							className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 hover:border-gray-400">
							<div
								className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

							<div className="relative">
								<h3 className="text-xl font-bold">{experience.title}</h3>
								<div className="text-gray-600 mb-4">
									{experience.company} | {experience.period}
								</div>
								<p className="text-gray-700">{experience.description}</p>
							</div>
						</div>
					</motion.div>

					{!isMobile && (
						<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
							<motion.div
								className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 z-10 flex items-center justify-center"
								initial={{scale: 0}}
								whileInView={{scale: 1}}
								transition={{duration: 0.3}}
								viewport={{once: true}}
							>
								<div className="w-2 h-2 rounded-full bg-white"></div>
							</motion.div>
						</div>
					)}
				</div>
			))}
		</div>
	)
}
