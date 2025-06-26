"use client"

import Link from "next/link"
import {
	ArrowLeft,
	Github,
	ExternalLink,
	Calendar,
	Users,
	Code2,
	MonitorSmartphone,
	Heart,
	Highlighter,
	ShoppingCart,
	EyeOff,
	Truck,
	ArrowUpFromLine,
	BadgePercent,
	BadgeAlert
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {GlassmorphicCard} from "@/components/glassmorphic-card"
import {SectionHeading} from "@/components/section-heading"
import {motion} from "framer-motion"
import {useState} from "react";

export default function LinkedOutPortfolio() {
	const [isExpanded, setIsExpanded] = useState(false)

	// @ts-ignore
	// @ts-ignore
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
			{/* 헤더 네비게이션 */}
			<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
				<div className="container py-4 flex items-center justify-between">
					<Link key={"Projects"} href={"/#projects"}>
						<Button variant="ghost" size="sm" className="gap-2">
							<ArrowLeft className="h-4 w-4"/>
							돌아가기
						</Button>
					</Link>
					<div className="flex gap-4">
						<Link href="https://github.com/daechan-jo/auto-store" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm" className="gap-2">
								<Github className="h-4 w-4"/>
								코드 보기
							</Button>
						</Link>
					</div>
				</div>
			</header>

			{/* 히어로 섹션 */}
			<section className="relative py-20 overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute top-20 left-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
					<div
						className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
				</div>

				<div className="container relative z-10">
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.5}}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                스마트 스토어 자동화
              </span>
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							주문 처리부터 배송까지, 쿠팡과 네이버 스마트스토어 운영을 위한 종합 자동화 솔루션
						</p>

						<div className="flex flex-wrap gap-2 justify-center mb-8">
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">NestJS</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">TypeScript</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">PostgreSQL</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">TypeORM</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Redis</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">K8s</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">RabbitMQ</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">ELK</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Puppeteer</Badge>
						</div>

						<div className="flex gap-4 justify-center">
							<div className="flex items-center gap-2 text-gray-600">
								<Calendar className="h-4 w-4"/>
								<span>24.12 ~ 현재</span>
							</div>
							<div className="flex items-center gap-2 text-gray-600">
								<Users className="h-4 w-4"/>
								<span>개인 프로젝트</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 프로젝트 이미지 갤러리 */}
			{/*<section className="py-16">*/}
			{/*	<div className="container">*/}
			{/*		<div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">*/}
			{/*			<div className="relative rounded-xl overflow-hidden shadow-2xl">*/}
			{/*				<img*/}
			{/*					src="/island1.gif"*/}
			{/*					alt="intro1"*/}
			{/*					className="w-full h-auto"*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*			<div className="relative rounded-xl overflow-hidden shadow-2xl">*/}
			{/*				<img*/}
			{/*					src="/island2.gif"*/}
			{/*					alt="intro2"*/}
			{/*					className="w-full h-auto"*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*			<div className="relative rounded-xl overflow-hidden shadow-2xl">*/}
			{/*				<img*/}
			{/*					src="/island3.gif"*/}
			{/*					alt="intro3"*/}
			{/*					className="w-full h-auto"*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*			<div className="relative rounded-xl overflow-hidden shadow-2xl">*/}
			{/*				<img*/}
			{/*					src="/island4.gif"*/}
			{/*					alt="intro4"*/}
			{/*					className="w-full h-auto"*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}


			{/* 프로젝트 개요 */}
			<section className="py-16">
				<div className="container">
					<SectionHeading title="프로젝트 개요" subtitle="Project Overview"/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">배경 및 목적</h3>
							<p className="text-gray-700 leading-relaxed">
								온라인 스토어 운영은 주문 처리, 품절 상품 관리, 운송장 등록, 가격 조정 등 많은 반복적
								인 업무가 포함됩니다. 이는 운영자의 업무 부담을 증가시키고 실시간 대응이 어렵다는 한계
								가 있습니다. 본 프로젝트는 이러한 문제를 해결하기 위해 도매사이트와 온라인 스토어 간의 데이터를 자
								동으로 연동하고, 대량의 상품등록에 대한 관리와 주문 및 재고 관리를 자동화하여 운영자의
								개입 없이 효율적인 상거래 환경을 구축하는 것을 목표로 합니다.
							</p>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">핵심 가치</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>도매사이트와 자동 연동하여 대량의 상품 업데이트, 품절 관리 등 반복적인 작업을 자동화하여 운영 효율성을 극대화</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>주문 접수부터 운송장 등록까지 자동화된 프로세스로 처리하여 빠른 배송과 고객 만족도를 향상</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>실시간 시장가격 모니터링과 자동 가격 조정 기능으로 경쟁사 대비 최적의 가격 경쟁력을 유지하고 판매 기회를 극대화</span>
								</li>
							</ul>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* 기술 스택 상세 */}
			<section className="py-16">
				<div className="container">
					<SectionHeading title="기술 스택" subtitle="Tech Stack"/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Frontend</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• React</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Backend</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• NestJS</li>
								<li>• TypeORM</li>
								<li>• PostgreSQL</li>
								<li>• Redis</li>
								<li>• RabbitMQ</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">배포</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• GitHub Actions</li>
								<li>• K8s</li>
								<li>• Home server</li>
							</ul>
						</GlassmorphicCard>

						{/*<GlassmorphicCard expandable={false}>*/}
						{/*	<h3 className="font-semibold text-gray-800 mb-3">도구</h3>*/}
						{/*	<ul className="space-y-2 text-sm text-gray-600">*/}
						{/*		<li>• Jest & Testing Library</li>*/}
						{/*	</ul>*/}
						{/*</GlassmorphicCard>*/}
					</div>
				</div>
			</section>

			{/* 아키텍처 */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="인프라 아키텍처" subtitle="Infrastructure architecture"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Kubernetes 기반
										컨테이너 오케스트레이션</h3>
									<img src="/kube.png" alt="Kubernetes 아키텍처 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/kube.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										Kubernetes를 활용하여 확장 가능하고 안정적인 마이크로서비스 아키텍처를 구축했습니다.
										선언적 인프라 관리와 자동화된 배포 파이프라인을 통해 개발 생산성과 운영 효율성을 동시에 향상시켰습니다.
									</p>

									<div className="space-y-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">자동화된 CI/CD 파이프라인</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-3">
													GitHub Actions과 Kubernetes만을 활용하여 코드 변경부터 배포까지 전 과정을 자동화했습니다.
													코드를 main 브랜치에 병합하면 자동으로 테스트, 빌드, 이미지 생성 및 배포 단계가 실행됩니다.
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<h6 className="font-medium text-gray-800 mb-1">품질 검증</h6>
														<p className="text-xs text-gray-600">TypeScript 정적 분석 통과 후에만 Docker 이미지 빌드 및 레지스트리 푸시</p>
													</div>
													<div>
														<h6 className="font-medium text-gray-800 mb-1">효과</h6>
														<p className="text-xs text-gray-600">개발 생산성 향상 및 인적 오류 가능성 최소화</p>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">선언적 인프라 관리 (GitOps)</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-3">
													Kubernetes 매니페스트를 통해 인프라를 코드로 관리하여 버전 관리 및 변경 추적이 가능하도록 구현했습니다.
													GitOps 방식으로 인프라 변경사항을 코드 리뷰 프로세스와 동일하게 검토할 수 있습니다.
												</p>
												<div className="space-y-2">
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span
															className="text-xs text-gray-600">Deployment, Service, ConfigMap, Secret 등을 YAML로 정의</span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">NestJS 마이크로서비스별 분리된 매니페스트 관리</span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">환경 변수와 시크릿의 효율적 주입 패턴 적용</span>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">무중단 배포 전략</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-3">
													서비스 중단 없이 새 버전을 배포할 수 있는 롤링 업데이트 전략을 구현했습니다.
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<h6 className="font-medium text-gray-800 mb-1">배포 최적화</h6>
														<p className="text-xs text-gray-600">maxSurge와 maxUnavailable 파라미터 최적화로 배포 중 서비스 가용성 유지</p>
													</div>
													<div>
														<h6 className="font-medium text-gray-800 mb-1">헬스 체크</h6>
														<p className="text-xs text-gray-600">Readiness/Liveness Probe 구성으로 정상 컨테이너로만 트래픽 라우팅</p>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">동적 자동 스케일링</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-3">
													HPA(Horizontal Pod Autoscaler)를 구성하여 트래픽과 리소스 사용량에 따라 컨테이너 수를 동적으로 조절합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>메트릭 기반:</strong> CPU 사용률, 메모리 사용량, 초당 요청 수</p>
													<p className="text-xs text-gray-600"><strong>효과:</strong> 리소스 사용량 급증 시 동적 컨테이너 수 조절</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">트래픽 관리 및 라우팅</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-3">
													NGINX Ingress Controller를 도입하여 외부 트래픽을 마이크로서비스로 라우팅하는 시스템을 구축했습니다.
												</p>
												<div className="space-y-2">
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">클러스터 외부 HTTP/HTTPS 요청을 적절한 내부 서비스로 연결</span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">경로 기반 라우팅 규칙으로 API Gateway 파드로 트래픽 전달</span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">단일 진입점 제공으로 분산 마이크로서비스 아키텍처 이점 활용</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">마이크로서비스
										아키텍처(MSA) 전환</h3>
									<img src="/storemsa.png" alt="MSA 아키텍처 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/storemsa.png', '_blank')}/>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">모놀리식에서 MSA로의 마이그레이션 배경</h5>
										<p className="text-gray-700 text-sm mb-3">
											초기에는 프로젝트 규모가 단순할 것으로 예상되어 모놀리식 아키텍처로 시작했습니다.
											하지만 Puppeteer를 활용한 여러 크롤링 서비스들이 추가되면서 시스템이 복잡해지고
											강한 결합이 발생하기 시작했습니다.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">기존 모놀리식의 문제점</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 크롤링 서비스 추가로 인한 복잡성 증가</li>
													<li>• 서비스 간 강한 결합으로 인한 유지보수 어려움</li>
													<li>• 배포 시 전체 시스템에 영향</li>
													<li>• 부분적 확장의 어려움</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">MSA 전환 목표</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 서비스별 독립적 배포 환경 구축</li>
													<li>• 느슨한 결합을 통한 확장성 확보</li>
													<li>• 비즈니스 로직의 명확한 분리</li>
													<li>• 배포 시 상호 영향 최소화</li>
												</ul>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">독립적인 서비스 및 비동기
										메시지 기반 통신
									</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<p className="text-gray-700 text-sm mb-3">
											모든 서비스는 독립적으로 실행되며 서로의 상태에 의존하지 않기 때문에 개별적으로 확장 및 배포가 가능합니다.
											각 서비스는 자체적인 책임과 생명주기를 가지며, 장애 발생 시에도 다른 서비스에 영향을 주지 않습니다.
										</p>
										<p className="text-gray-700 text-sm mb-3">
											서비스 간 직접적인 HTTP 호출을 피하고 RabbitMQ를 사용한 비동기 메시징 큐 기반의
											요청-응답 아키텍처를 구현했습니다. 이를 통해 분산 처리 및 서비스 간 느슨한 결합을 달성했습니다.
										</p>
										<div className="bg-gray-50 p-4 rounded-lg mb-4">
											<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
												<div className="bg-white p-3 rounded border border-gray-200 text-center">
													<h6 className="font-medium text-gray-800 mb-1 text-sm">확장성</h6>
													<p className="text-xs text-gray-600">독립적 서비스 확장</p>
												</div>
												<div className="bg-white p-3 rounded border border-gray-200 text-center">
													<h6 className="font-medium text-gray-800 mb-1 text-sm">안정성</h6>
													<p className="text-xs text-gray-600">장애 격리 및 복구</p>
												</div>
												<div className="bg-white p-3 rounded border border-gray-200 text-center">
													<h6 className="font-medium text-gray-800 mb-1 text-sm">결합도</h6>
													<p className="text-xs text-gray-600">느슨한 서비스 결합</p>
												</div>
											</div>
										</div>
									</div>
								</section>


								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">비즈니스 로직 분리 및
										확장성</h4>
									<div className="bg-gray-50 p-4 rounded-lg">
										<p className="text-gray-700 text-sm mb-3">
											주요 비즈니스 로직을 각 서비스별로 분리하여 모듈화했습니다.
											이러한 독립적인 구조는 특정 서비스에 기능을 추가하거나 변경할 때
											다른 서비스에 영향을 주지 않고 확장이 가능합니다.
										</p>
										<div className="bg-white p-3 rounded border border-gray-200">
											<h6 className="font-medium text-gray-800 mb-2">MSA 전환 효과</h6>
											<div className="space-y-2">
												<div className="flex items-start">
													<span className="font-medium mr-2 text-xs">•</span>
													<span
														className="text-xs text-gray-600"><strong>독립적 배포:</strong> 각 서비스별로 독립적인 배포 및 롤백 가능</span>
												</div>
												<div className="flex items-start">
													<span className="font-medium mr-2 text-xs">•</span>
													<span className="text-xs text-gray-600"><strong>기술 스택 자유도:</strong> 서비스별 최적의 기술 선택 가능</span>
												</div>
												<div className="flex items-start">
													<span className="font-medium mr-2 text-xs">•</span>
													<span className="text-xs text-gray-600"><strong>개발 생산성:</strong> 팀별 독립적 개발 및 배포 사이클</span>
												</div>
												<div className="flex items-start">
													<span className="font-medium mr-2 text-xs">•</span>
													<span className="text-xs text-gray-600"><strong>운영 안정성:</strong> 서비스 장애 시 전체 시스템 영향 최소화</span>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">메시지 처리 아키텍처
										설계</h3>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">문제 상황 및 해결 과제</h5>
										<p className="text-gray-700 text-sm mb-3">
											마이크로서비스 아키텍처를 구축하면서 서비스 간 통신에서 여러 복잡한 요구사항이 발생했습니다.
											특히 Puppeteer를 이용한 크롤링 작업과 대량 데이터 처리 작업에서 기존 메시지 브로커만으로는
											해결하기 어려운 문제들이 나타났습니다.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">발생한 문제점</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 크롤링 작업의 동시 실행으로 인한 리소스 경합</li>
													<li>• 순차적 처리가 필요한 작업의 관리 어려움</li>
													<li>• 응답이 필요한 작업과 단순 소비 작업의 혼재</li>
													<li>• 대량 데이터 처리 시 메시지 순서 보장 필요</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">해결 목표</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 작업 유형별 적절한 처리 방식 적용</li>
													<li>• 순차 처리가 필요한 작업의 FIFO 보장</li>
													<li>• 동기/비동기 처리 방식의 명확한 분리</li>
													<li>• 서비스 간 느슨한 결합 유지</li>
												</ul>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">하이브리드 큐 시스템
										도입</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">RabbitMQ + BullMQ 조합 선택 배경</h5>
										<p className="text-gray-700 text-sm mb-3">
											RabbitMQ는 마이크로서비스 간의 직접적인 HTTP 호출보다 빠르고 비동기 메시지 기반으로
											서비스를 느슨하게 결합시키는 데 탁월했습니다. 하지만 일부 작업에서는 메시지 소비 방식을
											세밀하게 관리해야 하는 요구사항이 생겼습니다.
										</p>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">RabbitMQ의 한계</h6>
												<p className="text-xs text-gray-600 mb-2">
													단순히 메시지 브로커 역할을 수행하기 때문에 크롤링이나 대량 데이터 처리 같은
													작업을 순차적으로 실행할 수 있는 기능이 부족했습니다.
												</p>
												<p className="text-xs text-gray-600">
													<strong>용도:</strong> 서비스 간 비동기 메시징, 빠른 메시지 전달
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">BullMQ 보완 역할</h6>
												<p className="text-xs text-gray-600 mb-2">
													크롤링 같은 작업을 FIFO 방식으로 순차적으로 실행할 수 있도록
													작업 큐 관리 기능을 제공합니다.
												</p>
												<p className="text-xs text-gray-600">
													<strong>용도:</strong> 순차 처리, 작업 우선순위 관리, 재시도 로직
												</p>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">메시지 분류 및 처리
										전략</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">두 가지 기준으로 메시지 분리</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">1. 메시지 소비 방식에 따른 분리</h6>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<p className="text-xs font-medium text-gray-700 mb-1">단순 소비 메시지</p>
														<p className="text-xs text-gray-600">구독/소비만 하고 생성자에게 응답이 불필요한 경우</p>
													</div>
													<div>
														<p className="text-xs font-medium text-gray-700 mb-1">응답 필요 메시지</p>
														<p className="text-xs text-gray-600">처리 결과를 생성자에게 반환해야 하는 경우</p>
													</div>
												</div>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">2. 동기/비동기 처리 방식에 따른 분리</h6>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<p className="text-xs font-medium text-gray-700 mb-1">비동기 처리</p>
														<p className="text-xs text-gray-600">병렬 처리가 가능한 독립적 작업</p>
													</div>
													<div>
														<p className="text-xs font-medium text-gray-700 mb-1">동기 처리</p>
														<p className="text-xs text-gray-600">순차적으로 실행되어야 하는 작업</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">메시지 처리 패턴
										매트릭스</h4>
									<div className="bg-gray-50 p-4 rounded-lg">
										<div className="overflow-x-auto">
											<table className="w-full border border-gray-300 bg-white text-sm">
												<thead className="bg-gray-100">
												<tr>
													<th className="border border-gray-300 p-3 text-left font-medium text-gray-800" colSpan={2}>패턴
														유형
													</th>
													<th className="border border-gray-300 p-3 text-left font-medium text-gray-800">작업 특성</th>
													<th className="border border-gray-300 p-3 text-left font-medium text-gray-800">처리 방식</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td className="border border-gray-300 p-3 font-medium text-gray-700" rowSpan={2}>단순 소비 메시지
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">동기 작업</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														결과 반환은 불필요하나 순차적으로 처리해야 하는 작업<br/>
														<span className="text-xs text-gray-500">(예: 크롤링, 데이터 정제)</span>
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">BullMQ</span><br/>
														<span className="text-xs">FIFO 순차 처리</span>
													</td>
												</tr>
												<tr>
													<td className="border border-gray-300 p-3 text-gray-600">비동기 작업</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														결과 반환은 불필요하고 병렬 처리 가능한 작업<br/>
														<span className="text-xs text-gray-500">(예: 알림 발송, 로그 기록)</span>
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">RabbitMQ</span><br/>
														<span className="text-xs">즉시 소비</span>
													</td>
												</tr>
												<tr>
													<td className="border border-gray-300 p-3 font-medium text-gray-700" rowSpan={2}>응답 필요 메시지
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">동기 작업</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														반환 데이터가 있고 순차적으로 처리해야 하는 작업<br/>
														<span className="text-xs text-gray-500">(예: 데이터 분석, 복잡한 계산)</span>
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">BullMQ</span><br/>
														<span className="text-xs">처리 후 결과 반환</span>
													</td>
												</tr>
												<tr>
													<td className="border border-gray-300 p-3 text-gray-600">비동기 작업</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														반환 데이터가 있고 병렬 처리 가능한 작업<br/>
														<span className="text-xs text-gray-500">(예: 단순 조회, 상태 확인)</span>
													</td>
													<td className="border border-gray-300 p-3 text-gray-600">
														<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">RabbitMQ</span><br/>
														<span className="text-xs">즉시 소비 후 반환</span>
													</td>
												</tr>
												</tbody>
											</table>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">구현 효과</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 작업 유형별 최적화된 처리 방식 적용</li>
													<li>• 크롤링 작업의 안정적 순차 실행</li>
													<li>• 시스템 리소스 효율적 활용</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">운영 이점</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 서비스 간 느슨한 결합 유지</li>
													<li>• 작업 실패 시 재시도 로직 지원</li>
													<li>• 모니터링 및 디버깅 용이성</li>
												</ul>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* 주요 기능 */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="주요 기능" subtitle="Key Features"/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.1}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<ShoppingCart className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">자동 발주</h3>
								<p className="text-gray-600">
									주문의 상품, 수량, 수취인 정보 등을 추출해 상태변경부터 발주까지 자동으로 진행합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>

						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.2}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<EyeOff className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">품절 관리</h3>
								<p className="text-gray-600">
									도매사이트의 품절 상태를 실시간으로 감지하여 자동으로 노출을 제한합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>

						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.3}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<Truck className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">배송 관리</h3>
								<p className="text-gray-600">
									도매처의 상품 배송을 추적해 각 플랫폼의 배송상태를 업데이트합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>

						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.3}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<ArrowUpFromLine className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">간편 상품 등록</h3>
								<p className="text-gray-600">
									도매사이트의 상품 정보를 대량으로 자동 수집하여 스마트스토어에 등록합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>

						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.3}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<BadgePercent className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">자동 가격 경쟁</h3>
								<p className="text-gray-600">
									경쟁사의 가격을 실시간으로 모니터링하고 설정한 조건에 따라 자동으로 가격을 조정해 매출을 극대화합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>

						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.3}}
							viewport={{once: true}}
						>
							<GlassmorphicCard expandable={false} className="h-full">
								<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
									<BadgeAlert className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">자동 문제상품 감지</h3>
								<p className="text-gray-600">
									가품, 금지품목, 허위 정보 등 문제가 있는 상품을 감지해 차단하여 판매자 점수를 유지합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Technology & Operation */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="기술 & 운영" subtitle="Technology & Operation"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/puppeteer.png" alt="Puppeteer 크롤링 구조도"
										 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/puppeteer.png', '_blank')}/>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Puppeteer 기반
										브라우저 자동화</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">도입 배경 및 해결 과제</h5>
										<p className="text-gray-700 text-sm mb-3">
											이커머스 플랫폼에서 경쟁력 있는 가격 정책과 상품 관리를 위해서는 실시간 시장 정보 수집이 필수적이었습니다.
											하지만 각 플랫폼에서 제공하지 않는 API 기능이나 단순 스크래핑으로는 처리할 수 없는
											복잡한 작업들이 다수 존재했습니다.
										</p>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">기존 방식의 한계</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 플랫폼별 API 제공 범위의 제한</li>
													<li>• 동적 콘텐츠 로딩으로 인한 스크래핑 실패</li>
													<li>• JavaScript 렌더링이 필요한 SPA 페이지</li>
													<li>• 로그인이 필요한 프리미엄 정보 접근 불가</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">해결 목표</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 실시간 경쟁업체 가격 정보 수집</li>
													<li>• 판매 중인 상품의 시장 위치 파악</li>
													<li>• 동적 콘텐츠 처리 및 인터랙션 자동화</li>
													<li>• 사용자 행동 시뮬레이션을 통한 데이터 접근</li>
												</ul>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">Puppeteer 선택
										이유</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">기술적 요구사항과 해결 능력</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">실제 브라우저 환경 시뮬레이션</h6>
												<p className="text-sm text-gray-600">
													Headless Chrome을 통해 실제 사용자의 브라우저 환경을 완벽하게 재현하여
													JavaScript 렌더링, AJAX 요청, 동적 콘텐츠 로딩을 모두 처리할 수 있습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">복잡한 사용자 인터랙션 자동화</h6>
												<p className="text-sm text-gray-600">
													클릭, 스크롤, 폼 입력, 파일 업로드 등 복잡한 사용자 행동을 자동화하여
													일반적인 스크래핑으로는 접근할 수 없는 데이터에 도달할 수 있습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Anti-Bot 메커니즘 우회</h6>
												<p className="text-sm text-gray-600">
													실제 브라우저 헤더, 쿠키, 세션 관리를 통해 일반적인 봇 탐지 시스템을
													우회하면서도 안정적인 데이터 수집이 가능합니다.
												</p>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">주요 활용 사례</h4>
									<div className="space-y-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">경쟁업체 가격 모니터링</h5>
											<div className="bg-white p-3 rounded border border-gray-200 mb-3">
												<p className="text-sm text-gray-600 mb-2">
													현재 판매 중인 상품들의 경쟁가격을 실시간으로 수집하여 가격 경쟁력을 분석합니다.
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">수집 정보</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 동일 상품의 타 플랫폼 판매가</li>
															<li>• 할인율 및 프로모션 정보</li>
															<li>• 재고 상태 및 배송 조건</li>
														</ul>
													</div>
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">활용 효과</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 실시간 가격 조정 의사결정 지원</li>
															<li>• 마진율 최적화</li>
															<li>• 시장 경쟁력 분석</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">동적 콘텐츠 처리</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-2">
													JavaScript로 동적 생성되는 콘텐츠나 무한 스크롤, AJAX 로딩 등
													전통적인 스크래핑으로는 처리할 수 없는 복잡한 웹 요소들을 안정적으로 수집합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>처리 범위:</strong> SPA 애플리케이션, 무한 스크롤 페이지, 동적 필터링 결과
													</p>
													<p className="text-xs text-gray-600"><strong>기술적 구현:</strong> 요소 대기, 네트워크 완료 감지, 조건부 스크롤</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">인증이 필요한 데이터 수집</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-2">
													로그인이 필요한 프리미엄 정보나 회원 전용 데이터에 접근하여
													더 정확하고 상세한 시장 정보를 수집합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>자동화 범위:</strong> 로그인 프로세스, 세션 유지, 쿠키 관리</p>
													<p className="text-xs text-gray-600"><strong>보안 고려사항:</strong> 계정 보안, 접근 빈도 제한, IP 로테이션</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>
						<br/><br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">자동 가격 조정
										시스템</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">시스템 개발 배경</h5>
										<p className="text-gray-700 text-sm mb-3">
											이커머스에서 경쟁력 있는 가격 정책 수립을 위해서는 도매가와 현재 판매가를 분석하여
											적정 판매가를 자동으로 산출해야 했습니다. 또한 해당 상품의 시장 최저가를 실시간으로 검색하여
											경쟁력 있는 가격 포지셔닝이 필요했습니다.
										</p>

										<div className="bg-white p-3 rounded border border-gray-200">
											<h6 className="font-medium text-gray-800 mb-2">데이터 수집 및 처리 플로우</h6>
											<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
												<div>
													<p className="text-xs font-medium text-gray-700 mb-1">1. 기본 데이터 수집</p>
													<p className="text-xs text-gray-600">도매가 + 현재 판매가 크롤링</p>
												</div>
												<div>
													<p className="text-xs font-medium text-gray-700 mb-1">2. 데이터 조합 분석</p>
													<p className="text-xs text-gray-600">수익률 및 적정가 산출</p>
												</div>
												<div>
													<p className="text-xs font-medium text-gray-700 mb-1">3. 시장가 검색</p>
													<p className="text-xs text-gray-600">해당 상품 최저가 실시간 검색</p>
												</div>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">모놀리식 구조의 메모리
										문제</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">발생한 문제점</h5>
										<p className="text-gray-700 text-sm mb-3">
											초기 모놀리식 구조에서 크롤링과 데이터 처리를 동시에 진행하면서
											Out of Memory(OOM) 오류가 빈번하게 발생했습니다.
										</p>

										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">주요 원인 분석</h6>
												<div className="space-y-2">
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>다중 Puppeteer 인스턴스:</strong> 도매가/판매가 크롤링과 동시에 최저가 검색을 실행하면서 리소스 사용량 급증
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>대량 데이터 적재:</strong> 크롤링한 도매가/판매가 데이터를 데이터베이스에 분할 저장하는 과정에서 메모리 점유
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>전체 데이터 로딩:</strong> 도매가와 판매가 데이터를 조합 분석하기 위해 모든 레코드를 한 번에 조회
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>실시간 검색 부하:</strong> 각 상품별로 최저가 검색을 동시에 실행하면서 추가적인 메모리 사용
                </span>
													</div>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Node.js 메모리 제약</h6>
												<p className="text-xs text-gray-600">
													단일 Node.js 프로세스의 힙 메모리 한도를 초과하면서 시스템 안정성에 심각한 영향을 미쳤습니다.
													특히 대량의 상품 데이터를 조합 분석하고 동시에 최저가 검색을 수행할 때 메모리 사용량이 급격히 증가했습니다.
												</p>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">MSA 전환 및 메모리
										최적화</h4>
									<div className="space-y-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">1단계: 마이크로서비스 아키텍처 전환</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-2">
													크롤링 작업, 데이터 조합 분석, 최저가 검색을 독립적인 서비스로 분리하여
													각각의 메모리 영역에서 실행되도록 구조를 변경했습니다.
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">서비스 분리</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 도매가/판매가 크롤링 서비스</li>
															<li>• 데이터 조합 분석 서비스</li>
															<li>• 최저가 검색 서비스</li>
															<li>• 가격 조정 로직 서비스</li>
														</ul>
													</div>
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">효과</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 메모리 격리를 통한 안정성 향상</li>
															<li>• 서비스별 독립적 확장 가능</li>
															<li>• 장애 범위 최소화</li>
															<li>• 검색 부하와 분석 부하 분산</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">2단계: 데이터 처리 방식 최적화</h5>
											<div className="space-y-3">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">기존 방식의 문제점</h6>
													<p className="text-xs text-gray-600 mb-2">
														도매가 테이블과 판매가 테이블에서 개별적으로 데이터를 조회한 후
														애플리케이션 레벨에서 결합하는 방식으로 메모리 사용량이 기하급수적으로 증가했습니다.
													</p>
													<div className="bg-red-50 p-2 rounded text-xs text-red-700">
														<strong>문제:</strong> 도매가 테이블 + 판매가 테이블을 각각 풀로드 후 메모리에서 조합 분석
													</div>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">개선된 방식</h6>
													<p className="text-xs text-gray-600 mb-2">
														데이터베이스 레벨에서 JOIN 연산을 수행하고 페이징 처리를 통해
														메모리 사용량을 대폭 줄였습니다.
													</p>
													<div className="bg-green-50 p-2 rounded text-xs text-green-700">
														<strong>해결:</strong> DB 레벨 JOIN + 페이징으로 도매가-판매가 조합 데이터만 순차 처리
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">3단계: 배치 처리 시스템 구축</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-2">
													대량의 가격 데이터를 안전하게 처리하고 최저가 검색을 효율적으로 수행하기 위해
													배치 처리 시스템을 도입했습니다.
												</p>
												<div className="space-y-2">
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>페이징 처리:</strong> 1,000건씩 나누어 도매가-판매가 조합 데이터를 순차 처리
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>JOIN 최적화:</strong> 도매가/판매가 테이블을 DB 레벨에서 조인하여 네트워크 트래픽 최소화
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>단계별 처리:</strong> 조합 분석 완료 후 해당 상품의 최저가 검색 및 가격 조정 로직 적용
                </span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

							</div>
						</GlassmorphicCard>
						<br/><br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/elk.png" alt="ELK Stack 로깅 시스템 구조도" style={{cursor: 'pointer'}}
										 onClick={() => window.open('/elk.png', '_blank')}/>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">ELK Stack 기반
										통합 로깅 시스템</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">MSA 전환 후 발생한 로깅 문제</h5>
										<p className="text-gray-700 text-sm mb-3">
											마이크로서비스 아키텍처로 전환한 후 분산된 서비스들 간의 로그 추적이 매우 복잡해졌습니다.
											특히 Puppeteer를 사용한 크롤링 작업에서 예기치 못한 에러가 빈번하게 발생했지만,
											해당 로그를 찾아 디버깅하는 과정이 상당히 어려웠습니다.
										</p>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">기존 로깅 방식의 한계</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• 서비스별로 분산된 로그 파일</li>
													<li>• 수동적인 로그 파일 검색 방식</li>
													<li>• 서비스 간 연관성 추적 어려움</li>
													<li>• 실시간 모니터링 불가능</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">특별한 어려움</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• Puppeteer 브라우저 조작 시 예기치 못한 에러</li>
													<li>• 크롤링 작업의 긴 실행 시간</li>
													<li>• 운영 중 실시간 로그 추적 어려움</li>
													<li>• 에러 발생 시점과 원인 파악 지연</li>
												</ul>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">해결 전략: 작업 추적
										시스템 구축</h4>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">고유 ID 기반 로그 추적</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">작업별 고유 식별자 도입</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 크롤링 작업과 데이터 처리 작업에 고유한 ID를 부여하여
													분산된 서비스들 간의 로그를 연결할 수 있도록 설계했습니다.
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">추적 범위</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 크롤링 작업 세션</li>
															<li>• 데이터 처리 파이프라인</li>
															<li>• 서비스 간 메시지 전달</li>
															<li>• 에러 발생 지점</li>
														</ul>
													</div>
													<div>
														<h6 className="text-xs font-medium text-gray-700 mb-1">식별 정보</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• Job ID (작업 고유 번호)</li>
															<li>• Service Name (서비스 식별)</li>
															<li>• Timestamp (시간 정보)</li>
															<li>• User/Session Context</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">ELK Stack 도입 및
										구현</h4>
									<div className="space-y-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">통합 로깅 아키텍처</h5>
											<div className="space-y-3">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">Elasticsearch</h6>
													<p className="text-xs text-gray-600">
														분산된 모든 서비스의 로그를 중앙 집중식으로 저장하고
														고속 검색이 가능한 인덱싱 시스템을 구축했습니다.
													</p>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">Logstash</h6>
													<p className="text-xs text-gray-600">
														각 마이크로서비스에서 생성되는 다양한 형태의 로그를 수집하고
														표준화된 형식으로 변환하여 Elasticsearch로 전송합니다.
													</p>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">Kibana</h6>
													<p className="text-xs text-gray-600">
														실시간 로그 모니터링과 시각화 대시보드를 제공하여
														크롤링 작업 상태와 에러 발생 현황을 한눈에 파악할 수 있습니다.
													</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">운영 효과 및 개선사항</h5>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">즉시 검색 및 필터링</h6>
													<div className="space-y-1">
														<p className="text-xs text-gray-600">• Job ID로 전체 작업 플로우 추적</p>
														<p className="text-xs text-gray-600">• 에러 레벨별 로그 필터링</p>
														<p className="text-xs text-gray-600">• 시간 범위별 로그 검색</p>
														<p className="text-xs text-gray-600">• 서비스별 로그 분류</p>
													</div>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">실시간 모니터링</h6>
													<div className="space-y-1">
														<p className="text-xs text-gray-600">• 크롤링 작업 진행 상황 실시간 추적</p>
														<p className="text-xs text-gray-600">• 에러 발생 시 즉시 알림</p>
														<p className="text-xs text-gray-600">• 시스템 성능 지표 시각화</p>
														<p className="text-xs text-gray-600">• 장기간 로그 패턴 분석</p>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">Puppeteer 크롤링 특화 로깅</h5>
											<div className="bg-white p-3 rounded border border-gray-200">
												<p className="text-sm text-gray-600 mb-2">
													브라우저 자동화 작업의 특성을 고려한 세부적인 로깅 전략을 구현했습니다.
												</p>
												<div className="space-y-2">
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>페이지 로딩 단계별 로깅:</strong> 네비게이션, 렌더링, 상호작용 각 단계별 상태 기록
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>브라우저 에러 캐치:</strong> JavaScript 에러, 네트워크 에러, 타임아웃 등 상세 에러 정보 수집
                </span>
													</div>
													<div className="flex items-start">
														<span className="font-medium mr-2 text-xs">•</span>
														<span className="text-xs text-gray-600">
                  <strong>스크린샷 및 컨텍스트:</strong> 에러 발생 시점의 브라우저 상태 캡처 및 저장
                </span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

								<section>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">디버깅 효율성</h6>
											<p className="text-sm text-gray-600">에러 추적 시간 대폭 단축</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">운영 모니터링</h6>
											<p className="text-sm text-gray-600">실시간 시스템 상태 파악</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">시스템 안정성</h6>
											<p className="text-sm text-gray-600">예방적 문제 발견</p>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* 성과 및 배운 점 */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="성과 및 배운 점" subtitle="Achievements & Learnings"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">주요 성과</h3>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">기술적 성과</h4>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">아키텍처 진화</h5>
												<p className="text-sm text-gray-600">
													모놀리식에서 MSA로 성공적 전환을 통해 시스템 확장성과 유지보수성을 대폭 향상시켰습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">성능 최적화</h5>
												<p className="text-sm text-gray-600">
													OOM 문제 해결과 메모리 최적화를 통해 대용량 데이터 처리 안정성을 확보했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">자동화 구축</h5>
												<p className="text-sm text-gray-600">
													CI/CD 파이프라인과 자동 스케일링을 통해 개발 생산성과 운영 효율성을 향상시켰습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">비즈니스 성과</h4>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">데이터 수집 자동화</h5>
												<p className="text-sm text-gray-600">
													Puppeteer 기반 크롤링으로 API 미제공 정보 수집을 자동화하여 경쟁력 있는 가격 정책 수립이 가능해졌습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">실시간 모니터링</h5>
												<p className="text-sm text-gray-600">
													ELK Stack을 통한 통합 로깅으로 시스템 안정성과 디버깅 효율성을 크게 개선했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">운영 효율성</h5>
												<p className="text-sm text-gray-600">
													무중단 배포와 자동 스케일링을 통해 서비스 안정성과 가용성을 확보했습니다.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="text-lg font-medium text-gray-800 mb-3">정량적 성과</h4>
									<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
										<div className="bg-white p-3 rounded border border-gray-200 text-center">
											<h5 className="font-medium text-gray-800 mb-1">시스템 안정성</h5>
											<p className="text-sm text-gray-600">99.9%</p>
											<p className="text-xs text-gray-500">서비스 가용성</p>
										</div>
										<div className="bg-white p-3 rounded border border-gray-200 text-center">
											<h5 className="font-medium text-gray-800 mb-1">성능 개선</h5>
											<p className="text-sm text-gray-600">10,000배</p>
											<p className="text-xs text-gray-500">검색 속도 향상</p>
										</div>
										<div className="bg-white p-3 rounded border border-gray-200 text-center">
											<h5 className="font-medium text-gray-800 mb-1">부하 처리</h5>
											<p className="text-sm text-gray-600">800 VUs</p>
											<p className="text-xs text-gray-500">동시 접속 처리</p>
										</div>
										<div className="bg-white p-3 rounded border border-gray-200 text-center">
											<h5 className="font-medium text-gray-800 mb-1">에러율</h5>
											<p className="text-sm text-gray-600">0.02%</p>
											<p className="text-xs text-gray-500">요청 실패율</p>
										</div>
									</div>
								</div>
							</div>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">배운 점</h3>

								<div className="space-y-4">
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">아키텍처 설계 경험</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">단계적 접근의 중요성</h5>
												<p className="text-sm text-gray-600">
													처음부터 완벽한 아키텍처를 구축하기보다는 비즈니스 요구사항 변화에 따라
													점진적으로 개선해나가는 것이 더 효과적임을 깨달았습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">기술 선택의 기준</h5>
												<p className="text-sm text-gray-600">
													최신 기술보다는 프로젝트 규모와 팀 역량을 고려한 현실적인 기술 선택이
													성공적인 프로젝트 완수에 더 중요함을 학습했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">성능 최적화 노하우</h4>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">병목 지점 식별 능력</h5>
												<p className="text-sm text-gray-600">
													메모리 사용량 분석과 프로파일링을 통해 실제 성능 병목 지점을 정확히 파악하고
													효과적인 해결책을 도출하는 방법을 익혔습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">데이터베이스 최적화</h5>
												<p className="text-sm text-gray-600">
													애플리케이션 레벨 조인보다 데이터베이스 레벨 최적화가 성능에 미치는
													영향이 훨씬 크다는 것을 실무를 통해 체득했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">운영 및 모니터링</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">로깅 전략의 중요성</h5>
												<p className="text-sm text-gray-600">
													분산 시스템에서는 체계적인 로깅 전략이 개발 생산성과 운영 안정성에
													직결되는 핵심 요소임을 깨달았습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">자동화의 가치</h5>
												<p className="text-sm text-gray-600">
													CI/CD와 모니터링 자동화가 단순한 편의성을 넘어서
													서비스 품질과 안정성에 미치는 영향을 실감했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">개발 철학 및 접근법</h4>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">사용자 경험 중심 설계</h5>
												<p className="text-sm text-gray-600">
													기술적 우수성보다 실제 사용자가 체감하는 가치를 우선하는 개발 접근법의 중요성을
													토큰 갱신 시스템 개선을 통해 체험했습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">문제 해결 역량</h5>
												<p className="text-sm text-gray-600">
													복잡한 기술적 문제를 단계별로 분석하고 체계적으로 해결하는
													문제 해결 프로세스를 정립할 수 있었습니다.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
									<h4 className="text-gray-800 font-medium mb-2">향후 개발 방향</h4>
									<p className="text-gray-700 text-sm">
										이번 프로젝트를 통해 얻은 경험을 바탕으로 더 확장 가능하고 안정적인 시스템 설계 역량을
										지속적으로 발전시켜 나가겠습니다. 특히 클라우드 네이티브 아키텍처와
										대규모 분산 시스템 운영 경험을 더욱 심화시킬 계획입니다.
									</p>
								</div>
							</div>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* CTA 섹션 */}
			<section className="py-20">
				<div className="container text-center">
					<h2 className="text-3xl font-bold mb-4">프로젝트가 궁금하신가요?</h2>
					<p className="text-gray-600 mb-8">
						GitHub에서 전체 소스코드를 확인하실 수 있습니다.
					</p>
					<div className="flex gap-4 justify-center">
						<Link href="https://github.com/daechan-jo/auto-store" target="_blank" rel="noopener noreferrer">
							<Button
								className="gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900">
								<Github className="h-5 w-5"/>
								GitHub 보기
							</Button>
						</Link>
						<Link key={"Projects"} href={"/#projects"}>
							<Button variant="outline">
								다른 프로젝트 보기
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
