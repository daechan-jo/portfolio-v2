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
	Search, Tag, MapPin, Lamp, BellRing, Contact
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
						<Link href="https://github.com/team-echoist/server" target="_blank" rel="noopener noreferrer">
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
                LinkedOut
              </span>
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							상호작용 제한 에세이 공유 플랫폼 - 진정한 글쓰기에 집중할 수 있는 공간
						</p>

						<div className="flex flex-wrap gap-2 justify-center mb-8">
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">NestJS</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">TypeScript</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">PostgreSQL</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">TypeORM</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Redis</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">AWS</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">ECS</Badge>
						</div>

						<div className="flex gap-4 justify-center">
							<div className="flex items-center gap-2 text-gray-600">
								<Calendar className="h-4 w-4"/>
								<span>24.03 개발 시작 ~ 25.05 서비스 종료</span>
							</div>
							<div className="flex items-center gap-2 text-gray-600">
								<Users className="h-4 w-4"/>
								<span>팀 프로젝트</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 프로젝트 이미지 갤러리 */}
			<section className="py-16">
				<div className="container">
					<div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<img
								src="/island1.gif"
								alt="intro1"
								className="w-full h-auto"
							/>
						</div>
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<img
								src="/island2.gif"
								alt="intro2"
								className="w-full h-auto"
							/>
						</div>
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<img
								src="/island3.gif"
								alt="intro3"
								className="w-full h-auto"
							/>
						</div>
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<img
								src="/island4.gif"
								alt="intro4"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>


			{/* 프로젝트 개요 */}
			<section className="py-16">
				<div className="container">
					<SectionHeading title="프로젝트 개요" subtitle="Project Overview"/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">배경 및 목적</h3>
							<p className="text-gray-700 leading-relaxed">
								소셜 미디어의 '좋아요'와 '댓글' 문화가 진정한 글쓰기를 방해한다는 문제의식에서 출발했습니다.
								작가들이 독자의 즉각적인 반응에 신경 쓰지 않고 온전히 글쓰기에만 집중할 수 있는 플랫폼을
								만들고자 했습니다.
							</p>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">핵심 가치</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>순수한 텍스트 중심의 콘텐츠</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>상호작용 기능을 제한해 글의 본질에 집중</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>미니멀한 디자인으로 읽기 경험 극대화</span>
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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Frontend</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Electron</li>
								<li>• Swift</li>
								<li>• Kotlin</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Backend</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• NestJS</li>
								<li>• TypeORM</li>
								<li>• PostgreSQL</li>
								<li>• Redis</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">배포</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• GitHub Actions</li>
								<li>• AWS</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">도구</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Firebase</li>
								<li>• Jest & Testing Library</li>
							</ul>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* 아키텍처 */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="인프라 아키텍처" subtitle="Infrastructure architecture"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="mb-6">
								<img src="/aws_architecture.png" alt="AWS 아키텍처 다이어그램"
										 style={{
											 cursor: 'pointer',
											 display: 'block',
											 margin: '0 auto',
											 borderRadius: '8px',
											 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
										 }}
										 onClick={() => window.open('/aws_architecture.png', '_blank')}/>
							</div>

							<div className="space-y-8">
								<section>
									<h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">고가용성과 수평
										확장성</h3>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h4 className="text-gray-800 font-medium mb-2">ECS 기반 컨테이너 오케스트레이션</h4>
										<p className="text-gray-700 leading-relaxed text-sm mb-3">
											컨테이너화된 애플리케이션의 효율적인 배포와 관리를 위해 Amazon ECS를 채택했습니다.
											AutoScaling 그룹 구성으로 트래픽 변화에 따른 EC2 인스턴스 자동 스케일링을 통해
											비용 효율성과 성능을 동시에 확보했습니다.
										</p>
										<p className="text-gray-600 text-sm">
											<strong>Multi-AZ 배포:</strong> 두 개의 가용 영역 활용으로 단일 장애점 제거 및 99.9% 이상의 서비스 가용성 보장
										</p>
									</div>
								</section>

								<section>
									<h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">보안 네트워크
										아키텍처</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h4 className="text-gray-800 font-medium mb-2">계층화 보안</h4>
											<ul className="text-gray-700 text-sm space-y-1">
												<li>• 프라이빗 서브넷: 핵심 리소스 배치</li>
												<li>• NAT 게이트웨이: 안전한 아웃바운드 통신</li>
												<li>• 최소 권한 원칙 적용</li>
											</ul>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg">
											<h4 className="text-gray-800 font-medium mb-2">로드 밸런싱</h4>
											<p className="text-gray-700 text-sm">
												퍼블릭 서브넷의 ALB가 프라이빗 서브넷 리소스로
												트래픽을 안전하게 분산 처리합니다.
											</p>
										</div>
									</div>
								</section>

								<section>
									<h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">자동화된 CI/CD
										파이프라인</h3>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h4 className="text-gray-800 font-medium mb-3">무중단 배포 프로세스</h4>
										<div className="space-y-3">
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">1
												</div>
												<div>
													<h5 className="font-medium text-gray-800">GitHub Actions</h5>
													<p className="text-sm text-gray-600">main 브랜치 푸시/병합 시 자동 테스트 및 이미지 빌드</p>
												</div>
											</div>
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">2
												</div>
												<div>
													<h5 className="font-medium text-gray-800">ECR 푸시</h5>
													<p className="text-sm text-gray-600">컨테이너 이미지를 AWS ECR에 자동 업로드</p>
												</div>
											</div>
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">3
												</div>
												<div>
													<h5 className="font-medium text-gray-800">CodePipeline 자동 배포</h5>
													<p className="text-sm text-gray-600">ECS 서비스 롤링 업데이트로 무중단 배포 수행</p>
												</div>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="bg-white border border-gray-200 p-3 rounded-lg">
											<h5 className="font-medium text-gray-800 mb-1">테스트 자동화</h5>
											<p className="text-sm text-gray-600">Jest 기반 테스트 성공 시에만 배포 진행</p>
										</div>
										<div className="bg-white border border-gray-200 p-3 rounded-lg">
											<h5 className="font-medium text-gray-800 mb-1">이미지 최적화</h5>
											<p className="text-sm text-gray-600">멀티 스테이지 도커 빌드로 이미지 크기 최소화</p>
										</div>
									</div>
								</section>

								<section>
									<h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">데이터 보호 및 백업
										전략</h3>
									<div className="bg-gray-50 p-4 rounded-lg">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<h4 className="text-gray-800 font-medium mb-2">접근 제어</h4>
												<ul className="text-gray-700 text-sm space-y-1">
													<li>• IAM 역할 기반 최소 권한 적용</li>
													<li>• 보안 그룹을 통한 네트워크 레벨 제어</li>
												</ul>
											</div>
											<div>
												<h4 className="text-gray-800 font-medium mb-2">백업 및 복구</h4>
												<ul className="text-gray-700 text-sm space-y-1">
													<li>• RDS 자동 백업 및 스냅샷</li>
													<li>• Multi-AZ 배포로 장애 대응</li>
												</ul>
											</div>
										</div>
									</div>
								</section>

								<section>
									<h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">글로벌 CDN
										최적화</h3>
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-gray-800 font-medium mb-3">CloudFront 기반 콘텐츠 배포</h4>
										<div className="space-y-2 text-gray-700 text-sm">
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>엣지 캐싱:</strong> 전 세계 엣지 로케이션을 통한 정적 콘텐츠 고속 배포</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>통합 도메인:</strong> 커스텀 도메인과 SSL 인증서 연결로 통일된 사용자 경험 제공</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>성능 최적화:</strong> 이미지, CSS, JavaScript 등 정적 자원의 지연 시간 최소화</span>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>
						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<img src="/erd.png" alt="Entity Relationship Diagram"
									 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
									 onClick={() => window.open('/erd.png', '_blank')}/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">데이터베이스 설계</h3>
							<p className="text-gray-700 leading-relaxed">
								사용자 중심의 콘텐츠 플랫폼을 위한 체계적인 데이터베이스 아키텍처를 구현했습니다. 핵심 도메인인 에세이 작성/공유를 중심으로
								사용자 관리, 소셜 기능, 콘텐츠 검색, 알림 시스템, 결제/구독 관리 등 40여 개의 테이블을 통합 설계했습니다.
							</p>
							<br/>
							<p className="text-gray-700 leading-relaxed">
								비즈니스 도메인별로 테이블을 논리적으로 구조화하여 콘텐츠(essay, story, tag), 사용자(user, follow, badge), 시스템(alert, device,
								subscription)
								영역으로 명확하게 분리했습니다. 성능 최적화를 위해 다음과 같은 전략을 적용했습니다:
								<br/><br/>
								• aggregate 테이블을 통한 효율적인 집계 데이터 관리<br/>
								• tsvector 컬럼 및 trigram 인덱스를 활용한 PostgreSQL 전문 검색 구현<br/>
								• unaccented 컬럼을 통한 다국어 검색 성능 향상<br/>
								• deleted_date 컬럼을 통한 소프트 삭제 구현<br/>
								• token_version을 통한 토큰 제어<br/>
								• processed_history 테이블을 통한 관리자 액션 감사 추적
							</p>
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
									<Code2 className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">깔끔한 에디터</h3>
								<p className="text-gray-600">
									마크다운 기반의 심플한 에디터로 글쓰기에만 집중할 수 있습니다.
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
									<Users className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">익명성 보장</h3>
								<p className="text-gray-600">
									작성자의 신원보다 글의 내용에 집중할 수 있도록 익명 옵션을 제공합니다.
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
									<ExternalLink className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">읽기 최적화</h3>
								<p className="text-gray-600">
									산만함 없는 깔끔한 인터페이스로 독서에 몰입할 수 있습니다.
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
									<MonitorSmartphone className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">멀티 플랫폼 지원</h3>
								<p className="text-gray-600">
									Window, MAC, Android, iOS 등 여러 운영체제와 디바이스에서 동기화를 제공합니다.
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
									<Heart className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">Recommendation system</h3>
								<p className="text-gray-600">
									사용자의 최근 활동 데이터를 수집해 여러 가중치를 반영하여 개인화된 콘텐츠를 추천합니다.
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
									<Highlighter className="h-6 w-6 text-gray-600"/>
								</div>
								<h3 className="text-lg font-semibold mb-2">가이드라인 지원</h3>
								<p className="text-gray-600">
									가볍게 글쓰기를 시작할 수 있게 매일 바뀌는 주제와 이미지 및 가이드라인을 제공합니다.
								</p>
							</GlassmorphicCard>
						</motion.div>
					</div>

					{/* 더보기 버튼 - 카드 아래에 별도로 배치 */}
					<div className="mt-8 text-center">
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 group"
						>
							<span
								className="text-gray-400 group-hover:text-gray-400 transition-colors duration-500 animate-pulse text-lg">
  							{isExpanded ? "접기" : "More"}
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
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
							<motion.div
								initial={{opacity: 0, y: 20}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: 0.1}}
								viewport={{once: true}}
							>
								<GlassmorphicCard expandable={false} className="h-full">
									<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
										<Search className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">검색</h3>
									<p className="text-gray-600">
										유사도 기반 검색으로 원하는 콘텐츠를 빠르게 찾을 수 있습니다.
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
										<Tag className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">뱃지</h3>
									<p className="text-gray-600">
										에세이 작성 시 사용한 태그를 기반으로 다양한 뱃지를 획득할 수 있는 재미있는 이벤트 시스템입니다.
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
										<MapPin className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">위치기반</h3>
									<p className="text-gray-600">
										위치 정보를 활용한 지역 기반의 맞춤형 콘텐츠를 제공합니다.
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
										<Lamp className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">책상 꾸미기</h3>
									<p className="text-gray-600">
										홈 화면의 책상을 다양한 아이템으로 꾸미고 커스터마이징할 수 있습니다.
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
										<Contact className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">소셜</h3>
									<p className="text-gray-600">
										최소한으로 제한된 소셜 기능으로, 비공개 구독을 통해 관심 있는 작가를 팔로우할 수 있습니다.
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
										<BellRing className="h-6 w-6 text-gray-600"/>
									</div>
									<h3 className="text-lg font-semibold mb-2">푸쉬알림</h3>
									<p className="text-gray-600">
										리마인드, 에세이 첫 조회 알림 등 다양한 맞춤형 푸시 알림을 제공합니다.
									</p>
								</GlassmorphicCard>
							</motion.div>
						</div>
					)}
				</div>
			</section>

			{/* Technology & Operation */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="기술 & 운영" subtitle="Technology & Operation"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/getessay.png" alt="Get Essay Flow" style={{cursor: 'pointer'}}
										 onClick={() => window.open('/getessay.png', '_blank')}/>

								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">평판 및 트렌드
										시스템</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										초기에는 단순한 조회수 기반 노출 방식을 사용했으나, 이는 질 낮은 컨텐츠가 상위에 노출되거나
										오래된 인기 글이 지속적으로 상단을 차지하는 문제를 야기했습니다. 이러한 한계를 극복하고
										플랫폼의 신뢰성과 사용자 경험을 극대화하기 위해 종합적인 평판 및 트렌드 시스템을 설계했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed mb-4">
										본 시스템은 사용자 활동 패턴과 에세이의 다차원적 지표를 분석하여 트렌드 점수를 산출하고,
										이를 추천 알고리즘의 핵심 가중치로 활용합니다. 자연스럽게 양질의 컨텐츠가 상위에 노출되고,
										상대적으로 품질이 낮은 컨텐츠는 점진적으로 하위로 순위가 조정되도록 구현했습니다.
									</p>
									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-2">시스템 개발 목표</h5>
										<div className="text-gray-700 text-sm space-y-1">
											<p>• 단순 조회수 중심에서 벗어난 종합적 품질 평가</p>
											<p>• 시간 경과에 따른 자연스러운 컨텐츠 순환</p>
											<p>• 사용자 참여도 기반의 실질적 인기도 측정</p>
											<p>• 신규 우수 컨텐츠의 적절한 노출 기회 보장</p>
										</div>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h6 className="text-gray-800 font-medium mb-2">품질 향상 효과</h6>
											<p className="text-gray-600 text-sm">
												양질의 컨텐츠가 자연스럽게 상위 노출되어
												전체적인 플랫폼 품질 향상
											</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg">
											<h6 className="text-gray-800 font-medium mb-2">컨텐츠 순환</h6>
											<p className="text-gray-600 text-sm">
												시간 기반 감쇠를 통한 건전한
												컨텐츠 생태계 조성
											</p>
										</div>
									</div>
								</section>
								<br/><br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">트렌드 점수 관리
										알고리즘</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										에세이의 인기도를 정확하게 반영하기 위해 조회수 기반 점수 증가와 시간 기반 감쇠 계수를 결합한 알고리즘을 구현했습니다.
										최신성과 인기도의 균형을 맞추기 위해 작성일 기준으로 시간이 경과할수록 점수가 감소하도록 설계했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed mb-4">
										이 방식을 도입한 배경은 사용자들이 컨텐츠를 조회할수록 점수가 지속적으로 증가하여 오래된 컨텐츠가
										상위에 계속 노출되는 문제를 해결하기 위함이었습니다. 작성일이 트렌드 점수 가중치에 포함되어 있었지만,
										보다 적극적인 감쇠 로직이 필요하다고 판단했습니다.
									</p>
									<div className="bg-gray-50 p-4 rounded-lg">
										<p className="text-gray-800 font-medium mb-3">감쇠 로직 상세</p>
										<div className="space-y-2 text-gray-700">
											<div className="flex items-center">
												<span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
												<span><strong>생성 후 7일 이내:</strong> 감쇠 미적용 (100% 유지)</span>
											</div>
											<div className="flex items-center">
												<span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
												<span><strong>7일 이후:</strong> 0.995^N 감쇠 계수 적용 (N = 경과일수 - 7)</span>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200 mt-3">
												<p className="text-sm font-medium text-gray-800 mb-1">계산 예시</p>
												<p className="text-sm text-gray-700">
													작성 후 10일 경과: 100 × 0.995³ ≈ 98.5점<br/>
													조회 시 점수 갱신: 98.5 + 1(조회 가중치) = 99.5 → 99점 (소수점 버림)
												</p>
											</div>
										</div>
									</div>
								</section>
								<br/>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">조회 성능 최적화:
										동시성 문제 해결</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										사용자 컨텐츠 조회 시 조회수, 작성자 평판, 트렌드 점수 등 여러 테이블을 실시간으로 업데이트하는 구조에서 동시 사용자 증가로 인한 성능 병목 현상이 발생했습니다. 이를 해결하기
										위해 단계적 최적화 과정을 통해 확장 가능한 아키텍처로 개선했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-2">기존 시스템의 문제점</h5>
										<img src="/agg1.png" alt="기존 실시간 업데이트 구조"
												 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '12px'}}
												 onClick={() => window.open('/agg1.png', '_blank')}/>
										<div className="space-y-2 text-gray-700 text-sm">
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>락 경합:</strong> 동일 컨텐츠에 대한 동시 조회 시 UPDATE 작업에서 락 경합 발생</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>트랜잭션 지연:</strong> 여러 테이블 순차 업데이트로 인한 전체 트랜잭션 지연</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>데드락 위험:</strong> 테이블 간 업데이트 순서 불일치로 인한 데드락 발생 가능성</span>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">1단계: 집계 테이블 도입</h5>
										<p className="text-gray-700 text-sm mb-3">
											실시간 업데이트 방식에서 배치 처리 방식으로 전환하여 성능 문제를 해결했습니다.
										</p>
										<p className="text-gray-700 text-sm">
											<strong>개선 방안:</strong> 사용자 요청 시 임시 집계 테이블에만 데이터 저장하고,
											주기적인 크론작업을 통해 실제 테이블로 일괄 업데이트하는 배치 처리 방식 구현
										</p>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">2단계: 분산 락 적용</h5>
										<p className="text-gray-700 text-sm mb-3">
											집계 테이블 또한 동시성 이슈가 존재하여 분산 락을 추가로 적용했습니다.
										</p>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-1">비관적 락의 한계</h6>
												<p className="text-sm text-gray-600">
													락 대기 중 커넥션 유지로 인한 커넥션 풀 부족 현상 발생
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-1">Redis 분산 락 채택</h6>
												<p className="text-sm text-gray-600">
													락 획득 전 커넥션 생성하지 않아 리소스 효율성 향상
												</p>
											</div>
										</div>

										<div className="bg-white p-3 rounded border border-gray-200">
											<h6 className="font-medium text-gray-800 mb-2">분산 락의 장점</h6>
											<ul className="text-sm text-gray-700 space-y-1">
												<li>• <strong>커넥션 풀 최적화:</strong> 락 대기 중 커넥션 미점유로 리소스 효율성 극대화</li>
												<li>• <strong>통합 락 관리:</strong> 여러 서비스 인스턴스 간 동일 레코드에 대한 락 통일 관리</li>
												<li>• <strong>확장성 보장:</strong> MSA 환경에서도 일관된 동시성 제어 가능</li>
											</ul>
											<img src="/agg2.png" alt="집계 테이블 기반 배치 처리 구조"
													 style={{cursor: 'pointer', display: 'block', margin: '12px auto 0'}}
													 onClick={() => window.open('/agg2.png', '_blank')}/>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/recommend.png" alt="추천 시스템 다이어그램" style={{cursor: 'pointer'}}
										 onClick={() => window.open('/recommend.png', '_blank')}/>

								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">개인화 추천
										시스템</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										단순한 인기도 기반 추천에서 벗어나 사용자 개별 특성을 반영한 개인화 추천 시스템을 구현했습니다.
										사용자의 최근 조회 컨텐츠의 태그 분석을 통한 선호도 파악과 컨텐츠의 트렌드 점수,
										작성자 평판 등의 품질 지표를 종합적으로 분석하여 맞춤형 추천을 제공합니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">추천 알고리즘 핵심 요소</h5>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div className="bg-white p-4 rounded-lg border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">태그 기반 선호도 분석</h6>
												<p className="text-sm text-gray-600 leading-relaxed">
													사용자가 최근 조회한 컨텐츠들의 태그를 추적하여
													관심 분야와 선호 패턴을 분석
												</p>
											</div>
											<div className="bg-white p-4 rounded-lg border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">컨텐츠 품질 지표</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• 트렌드 점수 (시간 감쇠 적용)</li>
													<li>• 작성자 평판 점수</li>
													<li>• 사용자 참여도</li>
													<li>• 컨텐츠 신선도</li>
												</ul>
											</div>
											<div className="bg-white p-4 rounded-lg border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">가중치 통합</h6>
												<p className="text-sm text-gray-600 leading-relaxed">
													태그 매칭도와 품질 지표를
													종합하여 개인화된 추천 점수 산출
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-2">성능 최적화 전략</h5>
										<p className="text-gray-700 leading-relaxed mb-3">
											추천 리스트 응답 시 대역폭 사용량을 최소화하기 위해 컨텐츠 본문을 지능적으로 요약하여
											데이터 전송량을 대폭 줄이면서도 사용자에게 유의미한 미리보기를 제공했습니다.
										</p>
										<div className="bg-white p-3 rounded border border-gray-200">
											<h6 className="font-medium text-gray-800 mb-2">스마트 컨텐츠 요약</h6>
											<div className="space-y-2">
												<p className="text-sm text-gray-700">
													<strong>추천 리스트:</strong> 원본 본문을 핵심 내용 중심으로 가공하여 전송 데이터 크기를 줄이고,
													사용자가 컨텐츠의 대략적인 내용을 파악할 수 있는 미리보기 제공
												</p>
												<p className="text-sm text-gray-700">
													<strong>검색 결과:</strong> 키워드가 포함된 검색 요청 시, 해당 키워드를 중심으로 한
													맥락적 미리보기를 추출하여 검색 의도와 일치하는 구간을 우선 노출
												</p>
											</div>
										</div>
									</div>
								</section>
								<br/><br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">공정한 컨텐츠 필터링
										시스템</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										신고자와 피신고자 모두에게 공평한 처리를 보장하는 필터링 시스템을 구현했습니다.
										사용자가 신고한 컨텐츠는 관리자의 검토 완료 전까지 해당 신고자에게만 노출을 제한하여
										불쾌감을 줄이면서도, 다른 사용자들에게는 정상적으로 노출되어 무분별한 신고로 인한
										컨텐츠 제작자의 피해를 방지했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">공정성 원칙</h5>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">신고자 보호</h6>
												<p className="text-sm text-gray-600">
													신고한 컨텐츠가 즉시 개인 피드에서 차단되어
													불쾌한 경험을 반복하지 않도록 보장
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">작성자 보호</h6>
												<p className="text-sm text-gray-600">
													관리자 검토 완료 전까지 다른 사용자에게는
													정상 노출되어 무분별한 신고로부터 보호
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">필터링 프로세스</h5>
										<div className="space-y-3">
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">1
												</div>
												<div>
													<h6 className="font-medium text-gray-800">신고 접수</h6>
													<p className="text-sm text-gray-600">사용자가 부적절한 컨텐츠를 신고</p>
												</div>
											</div>
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">2
												</div>
												<div>
													<h6 className="font-medium text-gray-800">선택적 차단</h6>
													<p className="text-sm text-gray-600">신고자에게만 즉시 노출 제한, 다른 사용자에게는 정상 노출</p>
												</div>
											</div>
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">3
												</div>
												<div>
													<h6 className="font-medium text-gray-800">관리자 검토</h6>
													<p className="text-sm text-gray-600">관리자가 신고 내용의 적절성을 판단</p>
												</div>
											</div>
											<div className="flex items-start">
												<div
													className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-1">4
												</div>
												<div>
													<h6 className="font-medium text-gray-800">최종 처리</h6>
													<p className="text-sm text-gray-600">검토 결과에 따라 전체 차단 또는 신고 기각</p>
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
								<img src="/trgin.png" alt="Trigram 검색 구조도"
										 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/trgin.png', '_blank')}/>

								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">고성능 유사도
										검색</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										대용량 텍스트 데이터에서 LIKE 방식의 성능 한계를 해결하기 위해 PostgreSQL의 Trigram 기반 검색을 도입했습니다.
										기존 LIKE 검색의 O(n) 시간 복잡도에서 벗어나 인덱스 기반 검색으로 대폭적인 성능 향상을 달성했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Trigram 검색 메커니즘</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">1. 텍스트 분할</h6>
												<p className="text-sm text-gray-600">검색어와 문서를 3글자 단위로 분할하여 trigram 집합 생성</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">2. GIN 인덱스 활용</h6>
												<p className="text-sm text-gray-600">O(log n) 복잡도로 후보 문서를 빠르게 추출</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">3. Jaccard 유사도 계산</h6>
												<p className="text-sm text-gray-600">교집합과 합집합 비율을 통한 정확도 높은 유사도 측정</p>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h6 className="text-gray-800 font-medium mb-2">성능 개선 효과</h6>
											<ul className="text-gray-600 text-sm space-y-1">
												<li>• LIKE 검색 대비 약 10,000배 성능 향상</li>
												<li>• 수백만 건 문서에서 밀리초 단위 응답</li>
												<li>• 메모리 사용량 최적화</li>
											</ul>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg">
											<h6 className="text-gray-800 font-medium mb-2">사용자 경험 개선</h6>
											<ul className="text-gray-600 text-sm space-y-1">
												<li>• 오타 허용 검색 지원</li>
												<li>• 부분 매칭 기능 제공</li>
												<li>• 실시간 검색 응답</li>
											</ul>
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
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">비동기 배치 처리
										시스템</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										제한된 서버 리소스에서 대용량 데이터 처리 작업이 실시간 서비스에 미치는 영향을 최소화하기 위해
										비동기 배치 처리 시스템을 구현했습니다. 특히 대규모 데이터베이스 업데이트나 연산 집약적 작업으로 인한
										서버 성능 저하와 불필요한 리소스 확장을 방지하는 것이 주요 목표였습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">시스템 설계 원칙</h5>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">작업 분리</h6>
												<p className="text-sm text-gray-600">즉각적인 응답이 불필요한 리소스 집약적 작업을 배치로 분리</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">점진적 처리</h6>
												<p className="text-sm text-gray-600">큐를 통한 순차적 작업 처리로 서버 부하 분산</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">안정성 보장 전략</h5>
										<div className="space-y-2 text-gray-700 text-sm">
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>재시도 메커니즘:</strong> 작업 실패 시 지정된 횟수만큼 자동 재시도</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>백오프 전략:</strong> 지수적 지연을 통한 시스템 부하 완화</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>데드레터 큐:</strong> 처리 불가능한 작업의 별도 관리</span>
											</div>
										</div>
									</div>

									<img src="/queue.png" alt="배치 처리 시스템 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
											 onClick={() => window.open('/queue.png', '_blank')}/>
									<br/>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">리소스 최적화</h6>
											<p className="text-sm text-gray-600">서버 부하 분산 및 비용 효율성 향상</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">시스템 안정성</h6>
											<p className="text-sm text-gray-600">재시도 및 백오프 전략으로 신뢰성 확보</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">확장성</h6>
											<p className="text-sm text-gray-600">다양한 요구사항에 유연한 대응</p>
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
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">부하 테스트 및 자동
										수평 확장 검증</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										ECS 기반 컨테이너 오케스트레이션의 자동 수평 확장 기능과 각 인스턴스의 최대 요청 처리량을 검증하기 위해
										체계적인 부하 테스트를 진행했습니다. ECS는 CPU 평균 사용률이 지정된 임계값을 일정 시간 동안 유지하면
										자동으로 새로운 인스턴스를 추가하고 실행 중인 태스크에 적용하는 메커니즘을 가지고 있습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">테스트 환경 및 조건</h5>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">인프라 스펙</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• EC2 인스턴스: t2.micro</li>
													<li>• ECS 자동 스케일링 활성화</li>
													<li>• CPU 기반 스케일링 정책</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">테스트 시나리오</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• VUs: 200 → 800 점진적 증가</li>
													<li>• 요청 주기: 1초 간격</li>
													<li>• 랜덤 키워드 데이터베이스 조회</li>
												</ul>
											</div>
										</div>
									</div>
								</section>
								<br/>
								<section>
									<h5 className="text-lg font-semibold text-gray-800 mb-3">K6 부하 테스트 결과</h5>
									<div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
        <pre className="text-green-400 text-xs font-mono leading-tight whitespace-pre-line">{`
     /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: ./src/config/scripts/k6.ts
        output: -

     scenarios: (100.00%) 1 scenario, 800 max VUs, 29m30s max duration (incl. graceful stop):
              * default: Up to 800 looping VUs for 29m0s over 6 stages (gracefulRampDown: 30s, gracefulStop: 30s)

     data_received..................: 466 MB 267 kB/s
     data_sent......................: 45 MB  26 kB/s
     http_req_blocked...............: avg=30.61µs  min=0s     med=0s       max=84.2ms  p(90)=1µs   p(95)=1µs
     http_req_connecting............: avg=10.78µs  min=0s     med=0s       max=18.4ms  p(90)=0s    p(95)=0s
     http_req_duration..............: avg=604.75ms min=4.69ms med=525.21ms max=11.76s  p(90)=1.32s p(95)=1.42s
     http_req_failed................: 0.02%  ✓ 105        ✗ 453866
     http_req_receiving.............: avg=83.85µs  min=5µs    med=29µs     max=213.4ms p(90)=115µs p(95)=208µs
     http_req_sending...............: avg=176.63µs min=12µs   med=64µs     max=42.14ms p(90)=294µs p(95)=618µs
     http_req_tls_handshaking.......: avg=18.76µs  min=0s     med=0s       max=74.35ms p(90)=0s    p(95)=0s
     http_req_waiting...............: avg=604.49ms min=0s     med=524.85ms max=11.76s  p(90)=1.32s p(95)=1.42s
     http_reqs......................: 453971 260.756483/s
     iteration_duration.............: avg=1.6s     min=1s     med=1.52s    max=12.76s  p(90)=2.32s p(95)=2.43s
     iterations.....................: 453971 260.756483/s
     vus............................: 13     min=7        max=799
     vus_max........................: 800    min=800      max=800

running (29m01.0s), 000/800 VUs, 453971 complete and 0 interrupted iterations
default ✓ [======================================] 000/800 VUs  29m0s
        `}
        </pre>
									</div>
								</section>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">테스트 결과
										분석</h4>
									<img src="/loadtest.png" alt="부하 테스트 결과 그래프"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/loadtest.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										VUs가 200에 도달했을 때 CPU 사용률이 거의 최대치에 도달하는 것을 확인했습니다.
										VUs를 점진적으로 증가시키는 과정에서 CloudWatch 모니터링 결과와 K6 테스트 결과를 교차 분석한 결과,
										ECS가 예상대로 인스턴스를 수평 확장하여 부하를 효과적으로 처리하는 것을 검증할 수 있었습니다.
									</p>

									<div className="space-y-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">CPU 및 메모리 사용률 분석</h5>
											<p className="text-gray-700 text-sm leading-relaxed">
												VUs가 200일 때 단일 인스턴스의 CPU 사용률이 거의 최대치를 기록했습니다.
												테스트에서 7분 간격으로 VUs를 200씩 증가시키는 시나리오에서, 수평 확장이 이루어지지 않았다면
												서버 장애가 발생했을 것입니다. 그래프 분석 결과 VUs 증가와 동시에 아웃스케일링이 실행되어
												새로운 리소스가 증가된 요청을 처리하는 것을 확인했습니다. 또한 새로운 인스턴스 배포 시
												메모리 그래프의 변동을 통해 스케일링 발생 시점을 시각적으로 확인할 수 있었습니다.
											</p>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">응답 시간 성능</h5>
											<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-1">평균 응답 시간</h6>
													<p className="text-sm text-gray-600">604.75ms</p>
												</div>
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-1">95% 백분위수</h6>
													<p className="text-sm text-gray-600">1.42s</p>
												</div>
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-1">중간값</h6>
													<p className="text-sm text-gray-600">525.21ms</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">전체 처리량 및 안정성</h5>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">총 처리량</h6>
													<p className="text-sm text-gray-600 mb-1">총 453,971건의 요청 처리</p>
													<p className="text-sm text-gray-600">평균 260.76 requests/sec</p>
												</div>
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">안정성 지표</h6>
													<p className="text-sm text-gray-600 mb-1">실패율: 0.02% (105/453,971)</p>
													<p className="text-sm text-gray-600">성공률: 99.98%</p>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg mt-4">
										<h5 className="text-gray-800 font-medium mb-2">테스트 결론</h5>
										<p className="text-gray-700 text-sm">
											ECS 자동 스케일링이 예상대로 동작하여 높은 부하 상황에서도 안정적인 서비스를 유지할 수 있음을 검증했습니다.
											99.98%의 높은 성공률과 효과적인 수평 확장을 통해 시스템의 확장성과 안정성을 동시에 확보했습니다.
										</p>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">관리자페이지 및 역할기반
										접근제어</h4>
									<img src="/rbac.png" alt="RBAC 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/rbac.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										각 역할(일반 유저, 관리자, 루트 관리자)에 대한 별도의 테이블과 전략 패턴을 사용하여
										인증과 인가를 처리했습니다. 역할별 권한을 명확히 분리하여 보안성과 관리 효율성을
										동시에 확보했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">역할별 권한 체계</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">일반 유저</h6>
												<p className="text-sm text-gray-600">
													제공 서비스에만 접근 가능하도록 제한하여 개발자가 의도한 기능만 사용할 수 있으며,
													민감한 정보에는 접근할 수 없도록 구성
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">관리자</h6>
												<p className="text-sm text-gray-600">
													공지 작성, 신고 및 리뷰 처리 등 다양한 데이터를 조회하고 판단하여
													원활한 서비스 운영을 수행할 수 있는 권한 보유
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">루트 관리자</h6>
												<p className="text-sm text-gray-600">
													일반 관리자와 분리하여 관리자 활동 로그 조회, 직접적인 데이터베이스 객체 조작 등
													서비스의 투명성과 고위험 기능을 담당
												</p>
											</div>
										</div>
									</div>
								</section>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">서버 상태 관리</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										AWS 인프라 기반의 복잡한 서비스 환경에서 수동 제어의 부담과 휴먼에러 가능성을 줄이기 위해
										서버 상태 관리 기능을 구현했습니다. 관리자는 단순한 조작으로 서버 상태를 변경하여
										다양한 변수에 신속하게 대응할 수 있습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Redis 기반 분산 상태 관리</h5>
										<p className="text-gray-700 text-sm mb-3">
											ECS 환경에서 수평 확장되는 여러 인스턴스가 일관된 서버 상태를 유지하면서
											요청을 처리하기 위해 Redis 기반 상태 관리로 구현했습니다.
										</p>
										<div className="bg-white p-3 rounded border border-gray-200">
											<h6 className="font-medium text-gray-800 mb-2">NestJS Guard 활용</h6>
											<p className="text-sm text-gray-600">
												모든 API 요청을 인터셉트하고 Redis에서 저장된 서버 상태에 따라 요청 허용 여부를 실시간 판단.
												점검 모드에서는 요청 차단, 읽기 전용 모드에서는 GET 요청만 허용하여 데이터 무결성 보장
											</p>
										</div>
									</div>

									<img src="/serverstatus.png" alt="서버 상태 관리 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
											 onClick={() => window.open('/serverstatus.png', '_blank')}/>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">인증/인가 및 토큰
										관리</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">기존 JWT 방식의 한계</h5>
										<p className="text-gray-700 text-sm mb-3">
											일반적인 JWT 구현에서는 Access Token 만료 시 401 응답 후 별도 갱신 API 호출이 필요하여
											사용자 경험과 개발 복잡성 측면에서 여러 한계가 있었습니다.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">사용자 경험 문제</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• 토큰 만료 시 일시적 서비스 중단</li>
													<li>• 네트워크 요청 2회 발생으로 응답 지연</li>
													<li>• 모바일 환경에서 불안정한 인증 상태</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">개발 복잡성</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• 클라이언트 401 에러 처리 로직 필요</li>
													<li>• 재시도 메커니즘 구현 요구</li>
													<li>• 개인정보 보호로 인한 잦은 토큰 갱신</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">개선된 토큰 갱신 방식</h5>
										<p className="text-gray-700 text-sm mb-3">
											팀 내 논의를 통해 사용자 경험을 개선하고 클라이언트 구현을 단순화하는 새로운 방식을 도입했습니다.
										</p>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">1. 동시 토큰 전송</h6>
												<p className="text-sm text-gray-600">클라이언트는 모든 API 요청 시 Access Token과 Refresh Token을 헤더에 함께
													전송</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">2. 서버 측 자동 처리</h6>
												<p className="text-sm text-gray-600">NestJS Guard에서 AT 만료 시 RT 검증 후 새로운 AT 생성과 동시에 원래 요청 처리</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">3. 응답 헤더 토큰 전달</h6>
												<p className="text-sm text-gray-600">새롭게 생성된 AT를 응답 헤더에 포함하여 클라이언트의 별도 재시도 없이 연속적 서비스 이용 가능</p>
											</div>
										</div>
									</div>
								</section>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">토큰 갱신 동시성 문제
										해결</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										개선된 방식에서 사용자가 특정 페이지 진입 시 여러 API가 동시 호출되면서
										동일한 Refresh Token으로 여러 개의 새로운 Access Token이 생성되는 문제가 발생했습니다.
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
										<div>
											<h6 className="font-medium text-gray-800 mb-2">문제 상황</h6>
											<img src="/refresh1.png" alt="토큰 갱신 동시성 문제" style={{cursor: 'pointer', width: '100%'}}
													 onClick={() => window.open('/refresh1.png', '_blank')}/>
										</div>
										<div>
											<h6 className="font-medium text-gray-800 mb-2">해결 방안</h6>
											<img src="/refresh2.png" alt="Redis 기반 해결책" style={{cursor: 'pointer', width: '100%'}}
													 onClick={() => window.open('/refresh2.png', '_blank')}/>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Redis 기반 동시성 제어</h5>
										<div className="space-y-2 text-gray-700 text-sm">
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>갱신 상태 캐싱:</strong> 첫 번째 요청이 토큰 갱신 시작 시 Redis에 진행 상태 키 설정</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>요청 대기 메커니즘:</strong> 동시 요청들은 갱신 작업 완료까지 대기</span>
											</div>
											<div className="flex items-start">
												<span className="font-medium mr-2">•</span>
												<span><strong>토큰 공유:</strong> 갱신된 토큰을 Redis에 캐싱하여 모든 대기 요청이 동일한 토큰 사용</span>
											</div>
										</div>
									</div>
								</section>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">토큰 버전 관리</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										초기 Redis 블랙리스트 방식의 메모리 사용량 증가 문제를 해결하기 위해
										토큰 버전 관리 시스템을 도입했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">버전 기반 토큰 무효화</h5>
										<p className="text-gray-700 text-sm mb-3">
											사용자와 발급하는 토큰에 버전을 부여하여 비정상적인 접근이 감지되거나
											다른 환경에서의 접근 시 토큰 버전을 증가시켜 Refresh Token을 무효화합니다.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">기존 방식의 문제</h6>
												<p className="text-sm text-gray-600">Redis 블랙리스트 방식으로 인한 메모리 사용량 점진적 증가</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">개선된 방식</h6>
												<p className="text-sm text-gray-600">추가 메모리 사용 없이 버전 증가로 토큰 무효화 및 보안 효율성 향상</p>
											</div>
										</div>
									</div>

									<img src="/tokenversion.png" alt="토큰 버전 관리 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
											 onClick={() => window.open('/tokenversion.png', '_blank')}/>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">DevOps 및 배포
										전략</h4>
									<img src="/cicd1.png" alt="CI/CD 파이프라인"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/cicd1.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										프로젝트 초기에 CI/CD 파이프라인을 우선 구축하여 코드 변경 시 자동화된 빌드, 테스트, 배포 과정을 통해
										환경 간 일관성을 유지하고 빠른 오류 감지와 수정으로 생산성을 향상시켰습니다.
									</p>
								</section>
								<br/>
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">무중단 배포 전략
										선택</h4>
									<p className="text-gray-700 leading-relaxed mb-4">
										ECS 환경에서 Blue/Green과 Rolling Update 두 가지 배포 방식을 비교 분석하여
										서비스 특성과 비용 효율성을 고려한 최적의 전략을 선택했습니다.
									</p>

									<div className="space-y-4 mb-4">
										<div>
											<h6 className="font-medium text-gray-800 mb-2">Blue/Green 배포</h6>
											<img src="/bluegreen.png" alt="Blue/Green 배포 방식"
													 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '12px'}}
													 onClick={() => window.open('/bluegreen.png', '_blank')}/>
											<div className="bg-gray-50 p-3 rounded-lg">
												<p className="text-sm text-gray-700 mb-2">
													현재 운영 환경과 동일한 새로운 환경을 구축하여 트래픽을 즉시 전환하는 방식
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
													<div>
														<h6 className="font-medium text-gray-800 mb-1">장점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 즉시 전환 및 롤백 가능</li>
															<li>• 완전 분리된 환경에서 테스트</li>
															<li>• 위험성 최소화</li>
														</ul>
													</div>
													<div>
														<h6 className="font-medium text-gray-800 mb-1">단점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 2배의 인프라 비용 발생</li>
															<li>• 복잡한 설정 및 관리</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div>
											<h6 className="font-medium text-gray-800 mb-2">Rolling Update 배포</h6>
											<img src="/rolling.png" alt="Rolling Update 배포 방식"
													 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '12px'}}
													 onClick={() => window.open('/rolling.png', '_blank')}/>
											<div className="bg-gray-50 p-3 rounded-lg">
												<p className="text-sm text-gray-700 mb-2">
													기존 인스턴스들을 배치 단위로 순차적으로 새 버전으로 교체하는 방식
												</p>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
													<div>
														<h6 className="font-medium text-gray-800 mb-1">장점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 추가 비용 발생하지 않음</li>
															<li>• 실제 운영 트래픽으로 검증</li>
															<li>• ECS 기본 지원으로 안정성</li>
														</ul>
													</div>
													<div>
														<h6 className="font-medium text-gray-800 mb-1">단점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 점진적 배포로 완료 시간 소요</li>
															<li>• 버전 혼재 상황 발생</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
										<h5 className="text-gray-800 font-medium mb-2">선택 근거</h5>
										<p className="text-gray-700 text-sm">
											서비스 특성상 금융이나 의료 시스템처럼 즉시 롤백이 반드시 필요하지 않고,
											비용 효율성과 ECS의 기본 지원을 고려하여 Rolling Update 방식을 채택했습니다.
											이를 통해 무중단 배포의 핵심 목표인 서비스 연속성을 확보하면서도 현실적이고 안정적인 배포 환경을 구축했습니다.
										</p>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">컨테이너 오케스트레이션
										플랫폼 선택</h4>
									<img src="/ecs.png" alt="ECS 아키텍처 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/ecs.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										프로젝트에서 백엔드 개발과 인프라 운영을 단독으로 담당하게 되면서 컨테이너 오케스트레이션 플랫폼 선택이
										중요한 결정사항이었습니다. 제한된 리소스와 학습 곡선을 고려하여 현실적이고 효율적인 기술 선택이 필요했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">플랫폼 비교 분석</h5>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-4 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-3">Kubernetes</h6>
												<div className="space-y-2">
													<div>
														<h6 className="text-sm font-medium text-gray-700 mb-1">장점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 업계 표준 컨테이너 오케스트레이션</li>
															<li>• 높은 확장성과 유연성</li>
															<li>• 다양한 클라우드 환경 지원</li>
														</ul>
													</div>
													<div>
														<h6 className="text-sm font-medium text-gray-700 mb-1">단점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• 복잡한 설정과 관리 요구</li>
															<li>• 높은 학습 곡선</li>
															<li>• 다양한 구성 요소에 대한 깊은 이해 필요</li>
														</ul>
													</div>
												</div>
											</div>

											<div className="bg-white p-4 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-3">Amazon ECS</h6>
												<div className="space-y-2">
													<div>
														<h6 className="text-sm font-medium text-gray-700 mb-1">장점</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• AWS 완전 관리형 서비스</li>
															<li>• AWS 서비스들과 네이티브 통합</li>
															<li>• 낮은 학습 곡선과 관리 부담</li>
														</ul>
													</div>
													<div>
														<h6 className="text-sm font-medium text-gray-700 mb-1">고려사항</h6>
														<ul className="text-xs text-gray-600 space-y-1">
															<li>• AWS 생태계에 종속</li>
															<li>• Kubernetes 대비 제한적 기능</li>
															<li>• 멀티 클라우드 환경에 부적합</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">선택 기준 및 고려사항</h5>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">학습 부담 최소화</h6>
												<p className="text-sm text-gray-600">
													AWS 클라우드를 본격적으로 사용하는 첫 프로젝트로, Kubernetes 도입 시
													추가 학습 요소가 과도하게 증가하는 상황
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">단독 운영 환경</h6>
												<p className="text-sm text-gray-600">
													백엔드 개발과 인프라 운영을 혼자 담당하는 상황에서
													관리 복잡성을 줄이고 개발에 집중할 수 있는 환경 필요
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">AWS 서비스 통합</h6>
												<p className="text-sm text-gray-600">
													ECS의 다른 AWS 서비스들과의 자동 통합 기능이
													인프라 구축과 운영 효율성 측면에서 가장 큰 장점으로 작용
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
										<h5 className="text-gray-800 font-medium mb-2">결과 및 향후 계획</h5>
										<p className="text-gray-700 text-sm mb-2">
											ECS 선택을 통해 AWS 클라우드 환경에서 빠르게 컨테이너 기반 아키텍처를 구축할 수 있었습니다.
											완만한 학습 곡선으로 개발에 집중할 수 있었고, AWS 서비스 통합을 통해 안정적인 운영 환경을 구성했습니다.
										</p>
										<p className="text-gray-700 text-sm">
											향후 서비스 성장과 복잡한 요구사항 발생 시 Kubernetes로의 마이그레이션도 고려할 수 있지만,
											현재 단계에서는 ECS가 단독 운영 상황에 가장 적합한 현실적이고 효율적인 선택이었습니다.
										</p>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">CloudWatch 기반
										모니터링 및 로깅</h4>
									<img src="/cloudwatch.png" alt="CloudWatch 모니터링 대시보드"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/cloudwatch.png', '_blank')}/>

									<p className="text-gray-700 leading-relaxed mb-4">
										AWS CloudWatch 서비스를 적극 활용하여 애플리케이션과 인프라를 체계적으로 모니터링하고 분석했습니다.
										특히 ECS와의 연계를 통해 오토스케일링 및 각종 서비스의 로그와 메트릭을 효율적으로 수집하고 관리했습니다.
									</p>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">ECS 오토스케일링 연동</h5>
										<p className="text-gray-700 text-sm mb-3">
											ECS는 현재 실행 중인 컨테이너의 지표가 설정한 기준을 일정 시간 이상 초과할 경우
											추가 컨테이너를 실행하여 트래픽 부하를 분산시킵니다. 브릿지 네트워크 모드를 사용해
											컨테이너 포트를 동적으로 할당하며, CloudWatch가 핵심적인 역할을 담당합니다.
										</p>
									</div>

									<div className="space-y-4 mb-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h5 className="text-gray-800 font-medium mb-3">핵심 모니터링 기능</h5>
											<div className="space-y-3">
												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">지표 수집 및 실시간 모니터링</h6>
													<p className="text-sm text-gray-600">
														ECS에서 실행 중인 각 컨테이너의 성능 지표를 실시간으로 수집하여 CPU 사용률, 메모리 사용률,
														네트워크 트래픽 등의 주요 메트릭을 모니터링합니다. 특정 기준 초과 시 즉시 알림을 받을 수 있도록
														경보를 설정했습니다.
													</p>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">자동 스케일링 제어</h6>
													<p className="text-sm text-gray-600">
														CloudWatch 경보를 기반으로 ECS 서비스의 오토스케일링을 구성했습니다.
														CPU 사용률이 80%를 초과하는 경우 추가 컨테이너를 자동으로 실행하여 부하를 분산시키고,
														필요할 때만 리소스를 추가하거나 제거함으로써 효율적인 비용 관리가 가능합니다.
													</p>
												</div>

												<div className="bg-white p-3 rounded border border-gray-200">
													<h6 className="font-medium text-gray-800 mb-2">문제 감지 및 신속 대응</h6>
													<p className="text-sm text-gray-600">
														대시보드와 알람을 통해 시스템 상태를 실시간으로 모니터링하고 문제 발생 시
														신속하게 대응할 수 있는 체계를 구축하여 시스템의 안정성과 가용성을 향상시켰습니다.
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h5 className="text-gray-800 font-medium mb-3">통합 로그 관리 및 성능 최적화</h5>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">로그 관리</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• 로그 그룹과 스트림을 통한 체계적 관리</li>
													<li>• 검색 및 필터링으로 빠른 정보 탐색</li>
													<li>• 중앙화된 로그 수집 및 분석</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">성능 메트릭 모니터링</h6>
												<ul className="text-sm text-gray-600 space-y-1">
													<li>• CPU, 메모리, 디스크 I/O 실시간 추적</li>
													<li>• 네트워크 트래픽 상태 파악</li>
													<li>• 예방적 성능 문제 해결</li>
												</ul>
											</div>
										</div>
										<div className="bg-white p-3 rounded border border-gray-200 mt-3">
											<h6 className="font-medium text-gray-800 mb-2">알람 시스템</h6>
											<p className="text-sm text-gray-600">
												중요한 메트릭에 대한 알람 설정을 통해 문제 발생 시 즉시 대응할 수 있는 체계를 구축하여
												시스템의 안정성을 지속적으로 유지합니다.
											</p>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">실시간 모니터링</h6>
											<p className="text-sm text-gray-600">지속적인 시스템 상태 추적</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">자동 스케일링</h6>
											<p className="text-sm text-gray-600">트래픽 변화에 유연한 대응</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1">비용 최적화</h6>
											<p className="text-sm text-gray-600">효율적인 리소스 사용</p>
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
							<h3 className="text-xl font-semibold mb-4">주요 성과</h3>
							<div className="space-y-3">
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">✅ 서비스 기획부터 출시까지 E2E 경험</h6>
									<p className="text-sm text-gray-600">
										단순한 개발 업무를 넘어 서비스 기회, 기술 스택 선정, 아키텍처 설계, 개발, 운영까지 전 과정을 경험했습니다. 사용자 요구사항 분석부터 시작해서 MVP 정의, 기능 우선순위
										결정, 그리고 실제 출시까지 서비스의 개발 생명주기를 완주했습니다. 특히 혼자서 백엔드와 인프라를 모두 책임지면서 기술적 의사결정의 중요성을 깨달았습니다. 제한된 자원과 시간
										내에서
										최적의 결과를 도출하기 위한 우선순위 설정, 기술 부채 관리,
										그리고 확장 가능한 아키텍처 설계 능력을 기를 수 있었습니다. 설제 프로덕션 환경에서 서비스를 운영하면서 코드 품질의 중요성, 모니터링의 필요성, 그리고 장애 대응 능력의 중요성을
										실감했습니다. 이러한 경험을 통해 단순한 개발자를 넘어서
										서비스의 전체적인 그림을 그릴 수 있는 역량을 갖추게 되었습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">✅ NestJS 프레임워크 심화 학습</h6>
									<p className="text-sm text-gray-600">
										Node.js 기반의 엔터프라이즈급 프레임워크인 NestJS의 핵심 동작 원리를 체득했습니다. Dependency Injection을 통한 느슨한 결합과 테스트 가능한 코드 구조,
										IoC 컨테이너를 통한 객체 생명주기 관리, 그리고 싱글톤 패턴 기반의 효율적인 메모리 사용을 실전에서 경험했습니다. Decorator 패턴을 활용한 메타데이터 기반 프로그래밍과
										Guard, Interceptor, Pipe를 이용한 횡단 관심사 처리 방식을 통해 관심사 분리와 코드 재사용성을
										극대화할 수 있었습니다. 모듈 시스템을 통한 기능별 캡슐화와 Provider 패턴을 활용한 서비스 레이어 설계로 확장 가능하고 유지보수하기 쉬운 백엔드 아키텍처를 구축했습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">✅ AWS 인프라 설계 및 ECS 아키텍처 구축</h6>
									<p className="text-sm text-gray-600">
										AWS 클라우드 환경에서 프로덕션 레벨의 인프라를 처음부터 설계하고 구축했습니다. VPC 네트워킹, 보안 그룹 설정, ALB를 통한 로드 밸런싱, 그리고 ECS를 중심으로 한
										컨테이너 오케스트레이션을 경험했습니다. ECS 클러스터 설계부터 태스크 정의 작성, 서비스 설정, Auto Scaling 구성까지 전 과정을 담당하면서 컨테이너 기반 아키텍처의
										장점을 실감할 수 있었습니다. 특히 ECR을 통한 이미지 관리와 CloudWatch를 이용한 모니터링 체계 구축을 통해 운영 안정성을 확보했습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">✅ 대규모 트래픽 대비 성능 최적화</h6>
									<p className="text-sm text-gray-600">
										서비스 확장성을 고려한 다양한 성능 최적화 기법을 실제로 구현했습니다. Redis를 활용한 다층 캐싱 전략으로 데이터베이스 부하를 크게 줄였고, 집계 테이블과 크론 작업을 통한
										배치 처리로 실시간 업데이트의 락 경합 문제를 해결했습니다. NestJS의 Bull 라이브러리와 Redis를 연동한 큐 시스템을 구축하여 비동기 작업 처리와 백그라운드 작업
										스케줄링을 구현했습니다. 데이터베이스 쿼리 최적화와 인덱싱을 통해
										응답 시간을 대폭 개선했으며, 동시 사용자 증가 시 발생할 수 있는 병목 지점을 사전에 식별하고 해결하는 경험을 통해 성능 엔지니어링 역량을 키울 수 있었습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">✅ CI/CD 파이프라인 구축</h6>
									<p className="text-sm text-gray-600">
										GitHub Actions와 AWS CodePipeline을 연동한 완전 자동화된 배포 파이프라인을 구축했습니다. 코드 커밋부터 테스트, 빌드, 배포까지의 전 과정을 자동화하여
										개발 생산성을 크게 향상시켰습니다. Docker 이미지 빌드 최적화, ECR을 통한 이미지 관리, 그리고 ECS 롤링 업데이트를 통한 무중단 배포를 구현했습니다. 특히 테스트 실패
										시 자동 롤백, 배포 성공/실패 알림 시스템 등을 통해 안정적인 배포 환경을 만들 수 있었습니다. 이를 통해 DevOps 문화와 Infrastructure as Code의 중요성을
										몸소 체험했습니다.
									</p>
								</div>
							</div>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">배운 점</h3>
							<div className="space-y-3">
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">계획과 현실의 간극</h6>
									<p className="text-sm text-gray-600">
										프로젝트를 진행하면서 가장 뼈아프게 깨달은 것은 프로젝트는 절대 내가 원하는 대로 흘러가지 않는다는 점이었습니다. 초기에 세웠던 완벽한 계획과 타임라인은 현실 앞에서 수없이
										수정되어야 했습니다. 제품 기획 단계에서 명확하다고 생각했던 요구사항들이 개발 과정에서 계속 변경되었고, 예상했던 기술적 난이도와 실제 구현의 복잡성 사이에는 상당한 차이가
										있었습니다. 이런 경험을 통해 불확실성을 전제로 한 유연한 계획 수립의 중요성을 깨달았습니다. 버퍼 시간 확보, 단계별 검증 포인트 설정, 그리고 변경에 대한 대응 계획을 미리
										세우는 것이 얼마나 중요한지 몸소 체험했습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">팀 리더십</h6>
									<p className="text-sm text-gray-600">
										기술적 도전만큼이나 어려웠던 것은 팀원들을 이끌고 나아가는 일이었습니다. 각자 다른 배경과 성향을 가진 팀원들이 하나의 목표를 향해 함께 나아가도록 하는 것은 생각보다 훨씬 복잡한
										일이었습니다. 개발 진도나 품질에 대한 기준이 팀원마다 달랐고, 의사소통 방식이나 업무 스타일의 차이로 인한 갈등도 있었습니다. 특히 기술적 의견 차이가 있을 때 합의점을 찾는
										과정에서 많은
										시간이 소요되었고, 때로는 개발보다 커뮤니케이션에 더 많은 에너지를 쏟아야 했습니다. 이를 통해 기술 역량만큼이나 소프트 스킬의 중요성을 깨달았습니다. 명확한 커뮤니케이션,
										팀원들의 강점 파악과 적절한 역할 분배, 그리고 무엇보다 인내심과 공감 능력이 프로젝트 성공에 얼마나 중요한지 배울 수 있었습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">기술 부채와 학습</h6>
									<p className="text-sm text-gray-600">
										프로젝트를 진행하면서 가장 어려웠던 부분 중 하나는 아직 경험해보지 못한 구조와 패턴들로 인해 무의식적으로 기술 부채를 만들어가는 것이었습니다. 당시에는 최선이라고 생각했던
										선택들이 나중에 유지보수의 어려움으로 이어지는 경험을 반복하면서, 소프트웨어 설계의 중요성을 뼈저리게 깨달을 수 있었습니다. 설계 패턴들을 이론적으로는 알고 있었지만 실제
										프로젝트에서 언제 어떻게 적용해야 하는지에 대한 감각이 부족해 결국 확장성을 고려하지 않은 구조로 개발하게 되었고, 새로운 기능이
										추가될 때 기존 코드를 대량으로 수정해야 하는 상황이 발생했습니다. 초기 테이블 설계시에도 현재 요구사항에만 집중하다 향후 확장성을 충분히 고려하지 못해 전체 구조를 재설계하기도
										했습니다. 결과적으로 이런 무의식적 기술 부채들이 누적되면서 예상치 못한 사이드 이펙트를 걱정해야하는 상황이 되었습니다. 결국 몇 차례에 걸쳐 대규모 리팩토링을 진행해야했던 경험이
										있습니다. 이런 시행착오를 겪으면서 소프트웨어 설계의 중요성과 디자인 패턴의 실용성을 깨달았습니다. 이론적으로만 알고 있던 개념들이 실제 프로젝트에서 어떤 문제를 해결하는지, 언제
										적용해야 하는지에 대한 감각을 기를 수 있었습니다. 또한 초기 설계 단계에서 확장성을 고려하는 것의 중요성을 배웠습니다. 당장의 요구사항에만 집중하기보다 향후 변경 가능성을 염두에
										두고 유연한 구조를 만드는 것이 결국에는 전체 개발 시간을 단축시키고 코드 품질을 높이는 길이라는 것을 경험을 통해 체득했습니다. 무엇보다 기술 부채를 의식적으로 관리하는 방법을
										배웠습니다. 모든 코드가 처음부터 완벽할 수는 없지만, 어떤 부분이 기술 부채가 될 가능성이 있는지 인식하고, 적절한 시점에
										리팩토링을 계획하는 것이 중요하다는 것을 깨달았습니다.
									</p>
								</div>
								<div className="bg-white p-3 rounded border border-gray-200">
									<h6 className="font-medium text-gray-800 mb-2">성장의 계기</h6>
									<p className="text-sm text-gray-600">
										이러한 어려움들은 분명 힘들었지만, 개발자로서 그리고 한 사람으로서 성장할 수 있는 귀중한 경험이었습니다. 기술적 역량뿐만 아니라 프로젝트 관리, 팀 협업, 문제 해결 방식에 대한
										새로운 관점을 얻을 수 있었습니다. 특히 실패와 시행착오를 통해 배운 교훈들은 책이나 강의로는 얻을 수 없는 값진 자산이 되었습니다. 앞으로의 프로젝트에서는 이런 경험을 바탕으로
										더 성숙하고 체계적인 접근을 할 수
										있을 것이라 확신합니다.
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
						<Link href="https://github.com/team-echoist/server" target="_blank" rel="noopener noreferrer">
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
