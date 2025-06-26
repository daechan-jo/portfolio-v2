"use client"

import Link from "next/link"
import {ArrowRight, Github, Linkedin, Mail, Twitter, Code, Database, Cloud, Wrench, Highlighter} from "lucide-react"

import {Button} from "@/components/ui/button"
import {ProjectCard} from "@/components/project-card"
import {SkillCategory} from "@/components/skill-category"
import {Timeline} from "@/components/timeline"
import {ContactForm} from "@/components/contact-form"
import {CreativeHero} from "@/components/creative-hero"
import {FloatingNav} from "@/components/floating-nav"
import {MouseFollower} from "@/components/mouse-follower"
import {ScrollProgress} from "@/components/scroll-progress"
import {SectionHeading} from "@/components/section-heading"
import {GlassmorphicCard} from "@/components/glassmorphic-card"
import "./globals.css"
import {motion} from "framer-motion"
import {useState} from "react";

export default function Portfolio() {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
			<MouseFollower/>
			<ScrollProgress/>
			{/*<FloatingNav/>*/}

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-20 left-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
					<div
						className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
					<div
						className="absolute bottom-20 left-1/3 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
				</div>

				<div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="inline-block">
							<div
								className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
								<span className="relative z-10">Growth-Oriented Backend Developer</span>
								<span
									className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-400/20 animate-pulse"></span>
							</div>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
							<span className="block">성장에 목마른 개발자,</span>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                조대찬 입니다.
              </span>
						</h1>
						<p className="text-xl text-gray-600 max-w-[600px]">
							탄탄한 백엔드 시스템 구축과 새로운 기술 학습을 즐기며 성장을 추구합니다. 팀 프로젝트에서 원할한 소통과
							효율적인 협업을 통해 시너지를 만들 수 있도록 노력합니다.
						</p>
						<div className="flex flex-wrap gap-4 pt-4">
							<Link href="#projects">
								<Button className="relative overflow-hidden group bg-gradient-to-r from-gray-600 to-gray-800 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                  </span>
									<span
										className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
								</Button>
							</Link>
						</div>
						<div className="flex gap-4 pt-4">
							<Link href="https://github.com/daechan-jo" target="_blank" rel="noopener noreferrer">
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full bg-white/80 hover:bg-gray-100 text-zinc-400 hover:text-gray-900"
								>
									<Github className="h-5 w-5"/>
									<span className="sr-only">GitHub</span>
								</Button>
							</Link>
							<Link href="mailto:daechan476@gmail.com">
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full bg-white/80 hover:bg-gray-100 text-zinc-400 hover:text-gray-900"
								>
									<Mail className="h-5 w-5"/>
									<span className="sr-only">Email</span>
								</Button>
							</Link>
						</div>
					</div>
					<div className="flex justify-center">
						<CreativeHero/>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
						<div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-32 relative">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
					<div
						className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
				</div>

				<div className="container relative z-10">
					<SectionHeading title="About Me" subtitle="My background and journey"/>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
						{/* 왼쪽 개인 정보 영역 */}
						<div className="lg:col-span-1">
							<GlassmorphicCard expandable={false} className="h-[400px] overflow-auto">
								<div className="flex flex-col justify-center items-center h-full">
									<div className="text-center space-y-6">
										<div className="space-y-6">
											<div className="space-y-1">
												<div className="text-sm text-gray-500">Name</div>
												<div className="font-semibold text-lg">조대찬</div>
											</div>

											<div className="space-y-1">
												<div className="text-sm text-gray-500">Email</div>
												<div className="font-medium text-gray-700">daechan476@gmail.com</div>
											</div>

											<div className="space-y-1">
												<div className="text-sm text-gray-500">Git</div>
												<div className="font-medium text-gray-700"><a
													href="https://github.com/daechan-jo">daechan-jo</a></div>
											</div>

											<div className="space-y-1">
												<div className="text-sm text-gray-500">Location</div>
												<div className="font-medium text-gray-700">서울/인천</div>
											</div>

											<div className="space-y-1">
												<div className="text-sm text-gray-500">Status</div>
												<div className="flex items-center justify-center gap-2">
													<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
													<span className="font-medium text-green-600">구직 중</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</GlassmorphicCard>
						</div>

						{/* 오른쪽 소개 텍스트 영역 */}
						<div className="lg:col-span-2">
							<GlassmorphicCard expandable={false} className="h-[400px] overflow-auto">
								<div className="flex flex-col justify-center h-full space-y-6 px-2">
									<p className="text-lg text-gray-700 leading-relaxed">
										탄탄한 백엔드 시스템 구축과 새로운 기술 학습을 즐기며 성장을 추구하는 개발자입니다. 팀 프로젝트에서
										원활한 소통과 효율적인 협업을 통해 시너지를 만들 수 있도록 노력합니다.
									</p>
									<p className="text-lg text-gray-700 leading-relaxed">
										저는 웹 서버 및 애플리케이션 구축부터 출시까지 경험이있는 열정적인 개발자입니다. Node.js환경의 NestJS를 주로 사용하지만 스프링 또는 프론트엔드 기술에도 관심이
										많습니다.
										다양한 팀에서 프로젝트를 경험하며 항상 더 나은 결과를 위해 새로운 기술을 탐색하고 적용했습니다.
									</p>
									<p>또한 작업이 없을 때는 시중에 있는 제품들의 불편한 점을 찾아 더 나은 제품을 만드는것을 구상하며 새로운 도전을 즐깁니다. 단순한 코딩을 넘어 가치있는 서비스를 만들어내는 것에
										열정을 가지고 있습니다.</p>
								</div>
							</GlassmorphicCard>
						</div>
					</div>

					{/* 더보기 버튼 - 카드 아래에 별도로 배치 */}
					<div className="mt-8 text-center">
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 group"
						>
              <span className="text-gray-400 group-hover:text-gray-400 transition-colors duration-1100 animate-pulse">
                {isExpanded ? "접기" : "View details"}
              </span>
							<motion.div animate={{rotate: isExpanded ? 180 : 0}} transition={{duration: 0.2}}>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
								</svg>
							</motion.div>
						</button>
					</div>

					{/* 확장 가능한 추가 정보 */}
					{isExpanded && (
						<motion.div
							initial={{opacity: 0, height: 0}}
							animate={{opacity: 1, height: "auto"}}
							exit={{opacity: 0, height: 0}}
							transition={{duration: 0.3}}
							className="mt-8"
						>
							<GlassmorphicCard expandable={false}>
								<div className="space-y-6">
									<h4 className="text-lg font-semibold text-gray-800">개발자를 선택하게된 계기</h4>
									<p className="text-gray-700 leading-relaxed">
										저는 8년간 헤어디자이너로 일하면서 손님들이 만족하는 모습을 보며 나름의 보람도 느꼈습니다. 하지만 경제적인 안정을 목
										적으로 시작한 일이었고, 시간이 지나면서 이 일이 저에게 진정한 성취감을 주지 못한다는 것을 깨닫게 되었습니다. 매일 반
										복되는 작업 속에서 창의적인 자극이나 내면의 성장은 점차 희미해졌고, 결국 어느 순간부터 저의 직업적 목표와 개인적인 욕
										구 사이에 큰 괴리감을 느끼기 시작했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										그러던 중 우연히 접하게 된 개발 강의가 저의 삶의 전환점이 되었습니다. 처음에는 그저 취미로 시작한 개발이였지만, 개발
										이라는 분야는 제게 완전히 새로운 세계를 열어주었습니다. 머릿속에서만 구상하던 것들을 코드로 구현해내는 과정은 성취감
										을 안겨주었습니다. 그동안 쳇바퀴 돌듯 반복되던 일상과는 전혀 다른 차원이었고 저는 매일 새로운 것을 배우며 성장하는 기
										쁨을 느꼈습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										이러한 흥미와 열정은 결국 저를 부트캠프로 이끌었고 본격적으로 개발을 하면서 문제를 해결하는 과정에서의 만족감과성취
										감은 더없이 컸습니다. 복잡한 문제를 하나씩 풀어갈 때마다 느끼는 짜릿함과, 내가 만든 프로그램이 실제로 작동할 때의감격
										은 제게 개발자로서의 전향을 확신하게 해주었습니다.
										저는 이제 단순한 안정적인 직업을 추구하는 것이 아닌, 매 순간 배우고 성장하며 창의적인 문제 해결을 통해 더 나은세상을
										만들어 나갈 수 있는 개발자로서의 길을 걷고자 합니다.
									</p>

									<br/>
									<br/>
									<h4 className="text-lg font-semibold text-gray-800">학습 과정</h4>
									<p className="text-gray-700 leading-relaxed">
										처음 개발을 시작했을 때 프론트엔드와 백엔드를 모두 다룰 수 있을 것이라는 욕심으로 Node.js 기반의 풀스택 트랙을 운영
										하는 부트캠프에 들어갔습니다. 하지만 곧 두 영역을 모두 깊이 있게 다루기에는 제 역량이 부족하다는 것을 깨달았고, 더 큰
										매력을 느낀 백엔드로 방향을 잡게 되었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										백엔드 개발의 매력은 단순히 사용자와의 상호작용을 넘어서 데이터를 처리하고 시스템의 근본적인 구조를 설계하는 데 있었
										습니다. 사용자들이 눈에 보이지 않는 곳에서 이루어지는 로직과 데이터 흐름을 설계하는 과정은 복잡하지만 그만큼 흥미로
										웠습니다. 데이터베이스와 서버 간의 원활한 연결을 구축하고 여러 클라이언트의 요청을 안정적으로 처리하는 백엔드의 역할
										은 마치 보이지 않는 다리와도 같았습니다. 그 다리가 탄탄해야만 프론트엔드에서 눈에 보이는 모든 것이 매끄럽게 작동할 수
										있음을 깨닫게 되었고, 저는 그러한 근본적인 부분을 다루는 백엔드에 더욱 매료되었습니다. 또 최적화된 시스템을 설계하고
										성능을 개선하는 과정에서 문제를 해결하는 쾌감은 그 자체로 매우 큰 동기부여가 되었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										부트캠프를 수료한 이후, 기존에 사용하던 Express에서 NestJS 로 프레임워크를 전환하여 보다 구조적이고 효율적인 백엔드
										개발을 추구했습니다. 또한 AWS 인프라 구축과 CI/CD의 필요성을 느껴, 클라우드 환경에서의 배포와 운영 자동화에 대해
										관심을 가지게 되었고, 백엔드 개발자는 단순히 서버를 구축하는 것을 넘어 시스템의 성능을 최적화하고 안정성을 유지하는
										것이 중요하다는 것을 느꼈습니다. 특히, 현업자들과 함께 진행한 프로젝트를 통해 프로덕션 환경에서 필요한 요구사항에 대
										한 이해를 쌓았습니다. 단순한 기능 구현을 넘어서, 실제 서비스에서 요구되는 성능, 보안, 확장성 등에 대해 고민하며 실질적
										인 문제들을 해결해 나갔습니다. 이러한 경험은 백엔드 개발자로서의 저의 성장에 큰 자양분이 되었고 경험을 통해 개발자로
										서 더욱 견고한 이해를 쌓아가고있습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										현재는 그동안 사용한 기술들을 다시 돌아보며 심도 있게 학습하고, 부족하다고 느낀 컴퓨터 과학 지식을 체계적으로 쌓기 위
										해 컴퓨터공학과에 입학해 학문적인 기반을 다지고 있습니다. 저는 끊임없이 배우고 성장을 즐기며 더 나은 백엔드개발자로
										나아가고자 합니다.
									</p>

									<br/>
									<br/>
									<h4 className="text-lg font-semibold text-gray-800">프로젝트 경험</h4>
									<p className="text-gray-700 leading-relaxed">
										저는 개발자로서 성장을 멈추지 않으려 노력해왔습니다. 부트캠프 수료 후 진행한 프로젝트들 역시 그 연장선에 있었습니
										다. 단순히 기술적인 숙련도 향상뿐만 아니라, 실제로 운영되는 가치 있는 서비스를 만들어보고 싶었습니다. 이를 위해 팀을구성
										하고 초기 기획 단계에서부터 프로덕션 환경과 유사한 환경에서 협업과 개발 협업을 직접 경험해보는 것이 목표였습니다. 더 나
										아가 개발자로서의 성취감을 느끼고 실사용자를 가진 서비스를 만드는 것이 프로젝트의 궁극적인 목적이였습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										팀 리더로서 초기 프로토타입 기획안을 작성하고, 팀원들을 모집 및 관리하는 역할을 맡아 팀원들 각각의 필요와 어려움을 파악
										하여 문제를 해결하려 노력했으며, 팀의 사기 유지와 프로젝트의 전반적인 흐름을 관리하며 프로젝트의 궁극적인 방향과 목표에
										대한 최종 결정권을 가지고 운영에 참여하면서 서버 및 인프라 환경 구축, 데이터베이스 설계 등 백엔드 개발은 전담했습니다. 실
										제로 서비스를 출시하는 것을 목표로 단순히 기술적인 구현 뿐만 애플리케이션 출시에 필요한 모든 관련 업무를 직접 처리한 경험을 가졌습
										니다.
									</p>

									<br/>
									<br/>
									<h4 className="text-lg font-semibold text-gray-800">장기적 목표</h4>
									<p className="text-gray-700 leading-relaxed">
										앞으로 단순한 기술적 능력만을 쌓는 것이 아닌 창의적이고 유연한 사고로 문제를 해결하는 개발자로 성장하고 싶습니다. 기술의
										가치는 그 자체보다 어떻게 활용하여 문제를 해결하는지에 따라 결정된다고 믿습니다. 이를 위해 언제나 문제의 본질을 깊이 이
										해하고 다양한 접근 방식을 고민하며 창의적인 해결책을 제시할 수 있는 능력을 키우고자 합니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										팀 내에서 신뢰받는 동료가 되는 것을 목표로 혼자만의 성장이 아닌 팀과 함께 성장하며 더 나은 결과를 만들어내는 개발자가 되
										고 싶습니다. 협업과 소통의 중요성을 염두에 두고 커뮤니케이션 능력을 지속적으로 향상시켜 서로의 의견을 존중하며 팀워크를
										극대화할 수 있는 환경을 만들어나갈 것입니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										끝으로 끊임없이 배우고 성장하는 자세를 유지할 것입니다. 개발자의 길은 평생 학습의 여정이라고 생각합니다. 새로운 기술과
										트렌드를 배우는 데 두려움 없이 제가 속한 조직과 프로젝트에 긍정적인 변화를 이끌어낼 수 있는 개발자가 되고자 합니다. 이러
										한 목표를 이루기 위해 매 순간 최선을 다하고 주저하지 않는 자세로 꾸준히 발전시킬 것입니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										읽어주셔서 감사합니다.
									</p>
								</div>
							</GlassmorphicCard>
						</motion.div>
					)}
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-32 relative">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-1/3 left-1/4 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
					<div
						className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
				</div>

				<div className="container relative z-10">
					<SectionHeading title="My Skills" subtitle="Technologies I work with"/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
						<SkillCategory
							title="Languages"
							icon={<Code className="w-5 h-5"/>}
							skills={[
								{name: "JavaScript"},
								{name: "TypeScript"},
								{name: "Java"},
								{name: "HTML/CSS"},
							]}
						/>

						<SkillCategory
							title="Backend & Frameworks"
							icon={<Wrench className="w-5 h-5"/>}
							skills={[
								{name: "Express"},
								{name: "NestJS"},
								{name: "Spring WebFlux"},
							]}
						/>

						<SkillCategory
							title="Database & Messaging"
							icon={<Database className="w-5 h-5"/>}
							skills={[
								{name: "PostgreSQL"},
								{name: "TypeORM"},
								{name: "R2DBC"},
								{name: "RabbitMQ"},
								{name: "Redis"},
							]}
						/>

						<SkillCategory
							title="DevOps & Tools"
							icon={<Cloud className="w-5 h-5"/>}
							skills={[
								{name: "Docker"},
								{name: "AWS"},
								{name: "k8s"},
								{name: "ELK"},
								{name: "Jenkins"},
							]}
						/>
					</div>
				</div>
			</section>


			{/* Projects Section */}
			<section id="projects" className="py-32 relative">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-1/4 left-1/3 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
					<div
						className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
				</div>

				<div className="container relative z-10 mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Some of my recent work</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<ProjectCard
							title="상호작용 제한 에세이 공유 플랫폼"
							description="좋아요와 댓글 없이 순수한 글쓰기에 집중할 수 있는 에세이 공유 플랫폼"
							tags={["NestJS", "AWS", "TypeORM", "PostgreSQL", "Redis"]}
							image="/linkedout-img.png?height=400&width=600"
							demoUrl="/projects/linkedout"
							repoUrl="https://github.com/team-echoist/server"
						/>
						<ProjectCard
							title="스마트 스토어 자동화"
							description="주문 처리부터 배송까지, 쿠팡과 네이버 스마트스토어 운영을 위한 종합 자동화 솔루션"
							tags={["NestJS", "Puppeteer", "MSA", "K8s"]}
							image="/store-img.png?height=400&width=600"
							demoUrl="/projects/store-automation"
							repoUrl="https://github.com/daechan-jo/auto-store"
							disabled={false}
						/>
						<ProjectCard
							title="Spring WebFlux MSA Architecture"
							description="리액티브 프로그래밍과 마이크로서비스 아키텍처를 활용한 고성능 백엔드 시스템"
							tags={["Spring WebFlux", "R2DBC", "RabbitMQ", "MSA"]}
							image="/webflux-img.png?height=400&width=600"
							demoUrl="/projects/webflux-msa"
							repoUrl="https://github.com/daechan-jo/webflux-msa"
							disabled={true}
						/>
					</div>
				</div>
			</section>

			{/* Learning Section */}
			<section id="experience" className="py-32 relative">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-1/3 right-1/3 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
					<div
						className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
				</div>

				<div className="container relative z-10">
					<SectionHeading title="Learning Journey" subtitle="My Path to Development"/>

					<div className="mt-16">
						<Timeline/>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-32 relative">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
					<div
						className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
				</div>

				<div className="container relative z-10">
					<SectionHeading title="Get In Touch" subtitle="Let's work together"/>
					<div className="flex justify-center mt-16">
						<div className="w-full max-w-xl">
							<ContactForm/>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-zinc-800 py-12">
				<div className="container flex flex-col md:flex-row justify-between items-center gap-6">
					<div>
						<Link href="/public" className="font-bold text-xl">
							<span
								className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Daechan Jo</span>
						</Link>
						<p className="text-sm text-zinc-500 mt-2">
							© {new Date().getFullYear()} Daechan Jo. All rights reserved.
						</p>
					</div>
					<div className="flex gap-4">
						<Link href="https://github.com/daechan-jo" target="_blank" rel="noopener noreferrer">
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900"
							>
								<Github className="h-5 w-5"/>
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>

						<Link href="mailto:daechan476@gmail.com">
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900"
							>
								<Mail className="h-5 w-5"/>
								<span className="sr-only">Email</span>
							</Button>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
