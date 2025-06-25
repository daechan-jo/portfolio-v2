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
							{/*<h3 className="text-xl font-semibold mb-4">주요 성과</h3>*/}
							<img src="/aws_architecture.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
									 onClick={() => window.open('/aws_architecture.png', '_blank')}/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">고가용성과 수평 확장성</h3>
							<p className="text-gray-700 leading-relaxed">
								컨테이너화된 애플리케이션을 더 효율적으로 배포하고 관리하기 위해 ECS를 채택했습니다. AutoScaling 그룹으로 구성하여 트래픽 변화에 유동적으로 EC2인스턴스를 인/아웃 스케일링해
								대응하여 서비스의 가용성과 확장성을 확보합니다.
							</p>
							<p className="text-gray-700 leading-relaxed">
								또한 Multi-AZ 배포를 통해 두 개의 가용 영역을 사용하므로 장애 발생 시에도 서비스가 중단되지 않도록 고가용성을 보장합니다.
							</p>
							<br/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">네트워크</h3>
							<p className="text-gray-700 leading-relaxed">
								기본적으로 중요한 리소스(서버, 데이터베이스 등)는 프라이빗 서브넷에 배치하여 외부 접근을 차단하되, NAT 게이트웨이를 통해 퍼블릭/프라이빗 서브넷 간 통신이 가능하도록 구성했습니다.
								이를 통해 퍼블릭 서브넷의 로드 밸런서가 프라이빗 서브넷의 리소스에 트래픽을 안전하게 전달하고 분산할 수 있도록 하여 기본적인 보안을 구현했습니다.
							</p>
							<br/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">CI/CD 및 모니터링</h3>
							<p className="text-gray-700 leading-relaxed">
								GitHub Actions를 통해 main 브랜치에 푸시 및 병합되면 자동으로 테스트를 실행하고 애플리케이션 이미지를 빌드하여 AWS ECR에 푸시합니다. 이후 AWS
								CodePipeline이 새 이미지를 감지하면 AWS CodeBuild를 통해 ECS 서비스를 자동으로 업데이트하여 무중단 배포를 수행합니다.
							</p>
							<p className="text-gray-700 leading-relaxed">
								테스트 자동화를 위해 GitHub Actions workflow에서 Jest를 실행하며, 테스트 성공 시에만 다음 단계로 진행됩니다. CodeBuild는 buildspec.yml에 정의된
								대로 멀티 스테이지 도커 빌드를 수행해 이미지 크기를 최적화합니다.
							</p>
							<p className="text-gray-700 leading-relaxed">
								ECS는 롤링 업데이트 배포 전략을 사용해 새 버전 배포 시 점진적으로 새 버전의 컨테이너를 배포하고 기존 버전을 대체합니다. 문제 발생 시 이전 버전으로 즉시 롤백이
								가능합니다.
							</p>
							<p className="text-gray-700 leading-relaxed">
							</p>
							<br/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">데이터 보호</h3>
							<p className="text-gray-700 leading-relaxed">
								최소 권한 원칙에 따라 IAM 역할과 보안 그룹을 설저하고 각 리소스에 대한 접근을 관리했습니다. 백업 및 장애대응으로 RDS의 자동 백업 기능과 복구 전략, 예비 데이터베이스를 통해
								데이터 손실에 대비하고 안정적인 데이터 관리를 목표로 했습니다.
							</p>
							<br/>
							<br/>
							<h3 className="text-xl font-semibold mb-4">CDN</h3>
							<p className="text-gray-700 leading-relaxed">
								CloudFront를 도입하해 엣지 로케이션을 통해 정적 콘텐츠를 캐싱하고 빠르게 제공합니다. S3에 저장된 이미지, CSS, JavaScript 등의 정적 자원들을
								CloudFront를 통해 배포하여 지연 시간을 최소화하고 사용자 경험을 개선했습니다. 또한 커스텀 도메인과 SSL 인증서를 CloudFront에 연결하여 S3 버킷의 콘텐츠를 메인
								서비스 도메인과 동일한 도메인에서 안전하게 제공할 수 있었습니다.
							</p>
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
								<h4 className="text-xl font-semibold text-gray-800">평판 및 트렌드 시스템</h4>
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
								<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
									<h5 className="text-blue-800 font-medium mb-2">🎯 시스템 개발 목표</h5>
									<div className="text-blue-700 text-sm space-y-1">
										<p>• 단순 조회수 중심에서 벗어난 종합적 품질 평가</p>
										<p>• 시간 경과에 따른 자연스러운 컨텐츠 순환</p>
										<p>• 사용자 참여도 기반의 실질적 인기도 측정</p>
										<p>• 신규 우수 컨텐츠의 적절한 노출 기회 보장</p>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="bg-green-50 p-4 rounded-lg">
										<h6 className="text-green-800 font-medium mb-2">📈 품질 향상 효과</h6>
										<p className="text-green-700 text-sm">
											양질의 컨텐츠가 자연스럽게 상위 노출되어
											전체적인 플랫폼 품질 향상
										</p>
									</div>
									<div className="bg-purple-50 p-4 rounded-lg">
										<h6 className="text-purple-800 font-medium mb-2">🔄 컨텐츠 순환</h6>
										<p className="text-purple-700 text-sm">
											시간 기반 감쇠를 통한 건전한
											컨텐츠 생태계 조성
										</p>
									</div>
								</div>
								<br/>
								<br/>
								<h4 className="text-xl font-semibold text-gray-800">트렌드 점수 관리 알고리즘</h4>
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
									<p className="text-gray-800 font-medium mb-3">📊 감쇠 로직 상세</p>
									<div className="space-y-2 text-gray-700">
										<div className="flex items-center">
											<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
											<span><strong>생성 후 7일 이내:</strong> 감쇠 미적용 (100% 유지)</span>
										</div>
										<div className="flex items-center">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											<span><strong>7일 이후:</strong> 0.995^N 감쇠 계수 적용 (N = 경과일수 - 7)</span>
										</div>
										<div className="bg-white p-3 rounded border-l-4 border-blue-500 mt-3">
											<p className="text-sm font-medium text-blue-800 mb-1">계산 예시</p>
											<p className="text-sm text-gray-700">
												작성 후 10일 경과: 100 × 0.995³ ≈ 98.5점<br/>
												조회 시 점수 갱신: 98.5 + 1(조회 가중치) = 99.5 → 99점 (소수점 버림)
											</p>
										</div>
									</div>
								</div>
								<br/>
								<br/>
								<h4 className="text-xl font-semibold text-gray-800">성능 최적화: 집계 테이블과 비동기 처리</h4>
								<p className="text-gray-700 leading-relaxed mb-4">
									에세이 조회 시 사용자 평판, 트렌드 점수, 상호작용 데이터 등 여러 테이블을 동시에 조회하고 변경해야 하는
									복잡한 워크플로우로 인해 레이턴시 증가와 데이터베이스 락 경합 문제가 발생했습니다.
								</p>

								<div className="bg-gray-50 p-4 rounded-lg mb-4">
									<h5 className="text-gray-800 font-medium mb-3">🔄 최적화 진화 과정</h5>

									<div className="space-y-4">
										<div className="border-l-4 border-red-400 pl-4">
											<h6 className="font-medium text-red-700 mb-1">1단계: 문제 발생</h6>
											<p className="text-sm text-red-600">
												다중 테이블 동시 조회/변경으로 인한 성능 저하 및 락 경합 발생
											</p>
										</div>

										<div className="border-l-4 border-yellow-400 pl-4">
											<h6 className="font-medium text-yellow-700 mb-1">2단계: 집계 테이블 도입</h6>
											<p className="text-sm text-yellow-600 mb-2">
												사용자 평판과 에세이 트렌드 점수를 별도 집계 테이블로 분리하고 크론 작업으로 주기적 일괄 업데이트
											</p>
											<div className="bg-yellow-50 p-2 rounded text-xs text-yellow-800">
												<strong>한계점:</strong> 실시간성이 중요한 추천 시스템에서 크론 작업 실행 전까지 더티리드 발생
											</div>
										</div>

										<div className="border-l-4 border-green-400 pl-4">
											<h6 className="font-medium text-green-700 mb-1">3단계: 비동기 처리 최적화</h6>
											<p className="text-sm text-green-600">
												집계 테이블 대신 비동기 처리 방식 채택으로 실시간성과 성능을 동시에 확보
											</p>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
									<div className="bg-blue-50 p-4 rounded-lg">
										<h6 className="text-blue-800 font-medium mb-2">⚡ 성능 개선 효과</h6>
										<ul className="text-blue-700 text-sm space-y-1">
											<li>• 메인 조회 플로우 응답 시간 단축</li>
											<li>• 데이터베이스 락 경합 현상 제거</li>
											<li>• 동시 처리 능력 향상</li>
										</ul>
									</div>

									<div className="bg-green-50 p-4 rounded-lg">
										<h6 className="text-green-800 font-medium mb-2">🎯 데이터 정확성 보장</h6>
										<ul className="text-green-700 text-sm space-y-1">
											<li>• 실시간 데이터 동기화</li>
											<li>• 더티리드 문제 해결</li>
											<li>• 추천 시스템 정확도 향상</li>
										</ul>
									</div>
								</div>

								<p className="text-gray-700 leading-relaxed">
									최종적으로 비동기 처리 방식을 통해 메인 조회 플로우를 방해하지 않으면서도
									필요한 데이터의 정확성을 보장하고, 동시에 서비스 전반의 성능을 개선할 수 있었습니다.
									이러한 아키텍처 개선을 통해 사용자 경험과 시스템 안정성을 모두 향상시켰습니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/recommend.png" alt="" style={{cursor: 'pointer'}}
										 onClick={() => window.open('/recommend.png', '_blank')}/>
								<h4 className="text-lg font-semibold text-gray-800">추천 에세이</h4>
								<p className="text-gray-700 leading-relaxed">
									사용자가 최근 조회한 컨텐츠, 북마크 수, 트렌드/작성자 평판 점수, 태그 등 다양한 데이터를 활용해 최근 활동과 선호도 및 여러 가중치를 반영하여 보다 개인화된 추천을
									제공합니다. 특히 리스트를 응답할 땐 대역폭 및 클라이언트의 메모리사용량을 줄이기 위해 본문을 가공하여 리소스를 절약함과 동시에 사용자에게 미리보기를 제공하여 대략적인
									내용을 파악할 수 있도록 했습니다.
								</p>
								<br/>
								<h4 className="text-lg font-semibold text-gray-800">최근 활동 기반 태그 수집</h4>
								<p className="text-gray-700 leading-relaxed">
									사용자가 최근에 조회한 컨테느의 태그를 수집해 최근 태그 목록을 만들어 사용자의 현재 관심사의 에세이를 추천하도록 반영했습니다. 예를 들어 사용자가 최근에 본 에세이들에서
									"자기계발", "여행" 등의 태그가 있다면 이 태그들이 최근 태그 목록에 포함되고 추천에세이 가중치에 적용됩니다.
								</p>
								<br/>
								<h4 className="text-lg font-semibold text-gray-800">필터링</h4>
								<p className="text-gray-700 leading-relaxed">
									추천 에세이에 부적절한 콘텐츠로 신고되었거나 작성자가 비공개로 전환하는 등 다양한 경우에 대응해 사용자에게 노출되지 않도록 필터링됩니다. 사용자 본인이 신고한 에세이의 경우 처분
									결과와는 별개로 즉시 신고자에게 노출을 제한하여 사용자의 불쾌감을 줄입니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<img src="/trgin.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/trgin.png', '_blank')}/>
								<h4 className="text-lg font-semibold text-gray-800">유사도 검색</h4>
								<p className="text-gray-700 leading-relaxed">
									대용량 텍스트 데이터에서 LIKE 방식의 성능 한계를 해결하기 위해 PostgreSQL의 Trigram 기반 검색을 도입했습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									검색어를 3글자 단위로 분할하여 GIN 인덱스에서 O(log n) 복잡도로 후보 문서를 빠르게 추출하고, jaccard 유사도 알고리즘을 통해 정확도 높은 검색 결과를 제공합니다.
									LIKE 검색 대비 약 10,000배 향상된 성능으로 수백만 건의 문서에서도 밀리초 단위로 응답이 가능하며, 오타 허용과 부분 매칭까지 지원해 사용자 경험을 크게 개선할 수
									있습니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">조회 성능 최적화</h4>
								<p className="text-gray-700 leading-relaxed">
									사용자가 컨텐츠를 조회할 때마다 조회수, 작성자 평판, 트렌드 점수 등 여러 테이블을 실시간으로 업데이트하는 구조였습니다. 하지만 동시 사용자가 증가하면서 성능 문제가 발생할 수
									있었는데, 여러 사용자가 동일한 컨텐츠를 조회할 때 UPDATE 작업에서 락 경합이 발생해 레이턴시를 늘리고, 하나의 요청에서 여러 테이블을 순차적으로 업데이트하다 보니 전체
									트랜잭션이 지연되는 상황이 반복되었습니다. 더 안좋은 상황은 여러 테이블 간 업데이트 순서가 달라질 때 데드락이 발생할 위험이 있다는 점이였습니다.
								</p>
								<br/>
								<img src="/agg1.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/agg1.png', '_blank')}/>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									이 문제를 해결하기 위해 실시간 업데이트 방식이 아닌 임시 집계 테이블을 도입해서 사용자 요청 시에는 이 테이블에만 데이터를 임시로 저장하고, 주기적인 크론작업을 통해 집계 테이블의
									데이터를 실제 테이블로 일괄 업데이트하는 배치 처리 방식으로 구현했습니다.
								</p>
								<br/>
								<img src="/agg2.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/agg2.png', '_blank')}/>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									하지만 집계 테이블 또한 동시성 이슈에서 자유롭지 못하기에 분산 락을 추가로 적용하게 되었습니다. 동시성 이슈를 해결하기 위해 데이터베이스 기반의 비관적 락을 사용하면 비교적
									간단하게해결할 수 있지만, 비관적 락은 동일한 레코드에 대한 여러 트랜잭션이 생성되면 락을 획득한 트랜잭션을 제외한 나머지 트랜잭션은 커넥션을 유지하며 대기하게 됩니다. 이는 곧
									커넥션 풀 부족 현상이 생겨 또 다른 지연 현상이 생길 수 있었습니다. 그렇기에 redis를 이용한 분산 락을 활용해서 락을 획득하기 전에는 커넥션을 생성하지 않고 대기하도록구현해
									커넥션 풀 관리를 원할하게 하고, 여러 개의 서비스 인스턴스에서 동일한 레코드에 대한 락을 통일적으로 관리할 수 있습니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">배치 시스템</h4>
								<p className="text-gray-700 leading-relaxed">
									제한된 서버 리소스에서 다양한 서비스들 중 많은 데이터를 한꺼번에 처리하는 작업은 자칫 성능에 영향을 줄 수 있었습니다. 특히 대규모 데이터베이스 업데이트나 많은 연산을 필요로 하는
									작업은 서버 다운이나 불필요한 수평확장으로 비용을 증가시킬 수 있었습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									이러한 문제를 해결하기 위해 즉각적인 응답이 불필요하고 많은 리소스를 사용하는 작업을 배치로 나누어 큐를 통해 점진적으로 처리하는 방법을 구현했습니다. 작업을 효율적으로 배치해 나누어
									처리하고, 작업 실패 시 재시도 및 백오프 전략을 통해 안정성을 유지해 다양한 요구사항에서 유연하게 대응할 수 있습니다.
								</p>
								<br/>
								<img src="/queue.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/queue.png', '_blank')}/>
								<br/>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">부하/수평확장 테스트</h4>
								<p className="text-gray-700 leading-relaxed">
									각각의 인스턴스의 최대 요청 처리량과 ECS 기반의 컨테이너 오케스트레이션이 트래픽 증가에 따라 자동으로 수평적 확장을 잘 수행하는지 검증하기 위해 테스트를 진행했습니다. ECS는
									서비스에서 사용중인 CPU 평균 사용률이 지정한 시간동안 유지되면 자동으로 새로운 인스턴스를 추가하고 실행중인 태스크를 적용합니다.
								</p>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									테스트에 사용한 EC2 인스턴스는 t2.micro 기준이며, VUs를 초기 200에서 점진적으로 최대 800까지 증가시킵니다. 각 VU는 랜덤한 키워드로 데이터베이스에서 조회하는
									요청을 1초 주기로 발생시킵니다.
								</p>

							</div>
							<br/>
							<div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
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
									expected_response:true...: avg=604.88ms min=7.67ms med=525.42ms max=11.76s  p(90)=1.32s p(95)=1.42s
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
							<br/>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">테스트 결과</h4>
								<img src="/loadtest.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/loadtest.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									VUs가 200일 때 CPU 사용률이 거의 최대치에 도달하게 되는걸 확인합니다(t2.micro 기준). VUs를 점진적으로 증가할 때 CloudWatch의 그래프와 K6테스트 결과를
									교차해보면 ECS가 예상대로 동작해 인스턴스를 수평확장하여 부하를 효과적으로 처리하는걸 확인할 수 있었습니다.
								</p>
								<div>
									<ul>
										<li>
											<p><b>CPU 및 메모리 사용률</b></p>
											<p>VUs가 200일 때 CPU 사용률(통합 사용률이지만 초기엔 인스턴스 1개)은 거의 최대치를 기록합니다. 테스트에서 7분 간격으로 VUs를 200씩 증가시키므로 수평적
												확장이 이루어지지 않았다면 서버가 다운되거나 장애가 발생하게 됩니다. 그래프로 확인 시 VUs가 점진적으로 증가함과 동시에 아웃스케일링이 실행되고, 새로운 자원을 증가된
												요청을
												처리하는데 최대치로 사용하는걸 확인할 수 있습니다. 추가적으로 수평확장이 발생할 때 새로운 인스턴스를 배포하면서 발생한 메모리 그래프의 변동사항을 확인해 아웃스케일링이 언제
												발생하는지 시각적으로도 확인할 수 있습니다(ECS 클러스터 로그로도 확인 가능).</p>
										</li>
										<br/>
										<li>
											<b>http_req_duration</b>
											<p>VUs가 200일 때 CPU 사용률(통합 사용률이지만 초기엔 인스턴스 1개)은 거의 최대치를 기록합니다. 테스트에서 7분
												간격으로 VUs를 200씩
												증가시키므로 수평적
												확장이 이루어지지 않았다면 서버가 다운되거나 장애가 발생하게 됩니다. 그래프로 확인 시 VUs가 점진적으로 증가함과 동시에 아웃스케일링이 실행되고, 새로운 자원을 증가된
												요청을
												처리하는데 최대치로 사용하는걸 확인할 수 있습니다. 추가적으로 수평확장이 발생할 때 새로운 인스턴스를 배포하면서 발생한 메모리 그래프의 변동사항을 확인해 아웃스케일링이 언제
												발생하는지 시각적으로도 확인할 수 있습니다(ECS 클러스터 로그로도 확인 가능).</p>
										</li>
										<br/>
										<li>
											<b>http_reqs</b>
											<p>총 453971건의 요청이 처리되었으며 실패율은 0.02%로 성공률이 매우 높았기에 해당 테스트를 성공적으로 마무리했습니다.</p>
										</li>
									</ul>
								</div>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">관리자페이지 및 역할기반 접근제어</h4>
								<br/>
								<img src="/rbac.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/rbac.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									각 역할(일반 유저, 관리자, 루트 관리자)에 대한 별도의 테이블과 전략 패턴을 사용하여 인
									증과 인가를 처리했습니다.
									일반 유저는 제공하는 서비스에만 접근할 수 있도록 제한해 개발자가 의도한 기능만 사용할
									수 있으며 민감한 정보에는 접근할 수 없도록 했습니다. 관리자는 공지 작성, 신고 및 리뷰
									처리 등 다양한 데이터를 조회하고 판단하여 원할한 서비스 운영을 할 수 있도록 하였습니
									다. 추가로 루트관리자의 경우 일바 관리자와 분리하여 관리자의 활동 로그 조회, 직접적인
									데이터베이스 객체 조작 등 서비스의 투명성과 관리자 역할로 수행하기 위험한 기능을 사용
									할 수 있도록 하였습니다.
								</p>
								<br/>
								<h4 className="text-lg font-semibold text-gray-800">서버 상태 관리</h4>
								<p className="text-gray-700 leading-relaxed">
									서버는 AWS 인프라를 기반으로 배포되어 운영되고 있고 이 환경은 다양한 서비스와 인프라가 복잡하게 얽혀 있기 때문에 이를 수동으로 제한하거나 개방하는 작업은 부담스럽고, 긴급한
									상황에서 급하게 직접적으로 조정하려다 휴면에러를 범할 가능성이 있기 때문에 서버 상태 관리 기능을 추가함으로써 관리자는 단순한 조작으로 서버의 상태를 변경해 다양한 변수에 신속하게
									대응할 수 있게 했습니다. 또한 ECS 환경에서 수평 확장되는 여러 인스턴스가 일관된 서버 상태를 유지하면서 요청을 처리하기 위해 Redis 기반 상태관리로 구현되었습니다.
								</p>
								<br/>
								<p className="text-gray-700 leading-relaxed">NestJS Guard를 활용해 모든 API 요청을 인터셉트하고, Redis에서 저장된 서버 상태에 따라
									요청 허용 여부를 실시간으로 판단합니다. 서버가 점검 또는 닫힌 상태일땐
									요청을 차단하고, 읽기 전용 모드에서는 GET 요청만 허용하여 데이터 무결성을 보장합니다.</p>
								<br/>
								<img src="/serverstatus.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/serverstatus.png', '_blank')}/>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">인증/인가 및 토큰 관리</h4>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									일반적인 JWT 인증 구현에서는 Access Token(AT)이 만료되면 클라이언트가 401 Unauthorized 응답을 받고, 이를 감지한 후 별도의 토큰 갱신 API를 호출하여
									Refresh Token(RT)으로 새로운 AT를 발급받는 방식을 사용합니다. 하지만 이런 방식은 사용자 경험 측면에서 몇 가지 한계가 있었습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									클라이언트는 매번 401 에러를 처리하는 추가 로직이 필요하고, 토큰 갱신 과정에서 원래 요청이 실패하므로 재시도 메커니즘을 구현해야 합니다. 또한 네트워크 요청이 두 번 발생하여
									응답 시간이 늘어나고, 토큰 만료 시점에 사용자가 일시적인 오류를 경험할 수 있습니다. 특히 당시 서비스 특성상 컨텐츠가 '일기'에 가까운 특성을 가지기에 개인 정보 보호차원에 토큰
									만료기간을 짧게해서 갱신이 잦고, 프론트엔트쪽 개발 진행이 더딘 상황이라 서버에서 최대한 많은 부분을 담당해
									프론트엔드 개발진행이 원할하도록 하기 위함도 있었습니다.
								</p>
								<br/>
								<p><b>개선된 방식</b></p>
								<p className="text-gray-700 leading-relaxed">
									팀 내 논의를 통해 사용자 경험을 개선하고 클라이언트 구현을 단순화하는 새로운 방식을 도입했습니다. 클라이언트는 모든 API 요청 시 AT와 RT를 헤더에 함께 전송하고, 서버에서는
									NestJS Guard를 통해 AT 만료 여부를 확인합니다.
									AT가 유효한 경우에는 일반적인 인가 과정을 거쳐 요청을 처리합니다. 하지만 AT가 만료된 경우, 서버에서 즉시 RT의 유효성을 검증하고 새로운 AT를 생성합니다. 중요한 점은 토큰
									갱신과 동시에 원래 요청을 그대로 처리하여 클라이언트가 별도의 재시도 없이도 원하는 결과를 받을 수 있다는 것입니다. 새롭게 생성된 AT는 응답 헤더에 포함되어 클라이언트로
									전달됩니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									이 방식을 통해 클라이언트는 토큰 만료에 대한 복잡한 에러 핸들링 로직 없이도 매끄러운 사용자 경험을 제공할 수 있게 되었습니다. 서버 측에서는 Guard 레벨에서 토큰 갱신 로직을
									일원화하여 코드 중복을 제거하고 유지보수성을 향상시켰습니다.
									네트워크 요청 수를 절반으로 줄이고 응답 시간을 단축시켰으며, 사용자는 토큰 만료로 인한 서비스 중단 없이 연속적인 서비스 이용이 가능해졌습니다. 특히 모바일 환경에서 네트워크 상태가
									불안정할 때도 안정적인 인증 상태를 유지할 수 있는 장점이 있습니다.
								</p>
								<br/>
								<p><b>Token Refresh 동시성 문제</b></p>

								<p className="text-gray-700 leading-relaxed">
									하지만 개선된 방식에서 사용자가 특정 페이지에 진입할 때 동시성 문제가 발생할 수 있었습니다. 예를 들어 대시보드 페이지에 접속하면 사용자 정보, 알림 목록, 최근 활동 등을 조회하는
									여러개의 API가 동시에 호출됩니다.
								</p>
								<img src="/refresh1.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/refresh1.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									이 때 보유한 AT가 만료된 상태라면 모든 요청에서 토큰 갱신이 동시에 발생하게 됩니다. 각각의 요청이 독립적으로 RT를 사용해 새로운 AT를 생성하려고 시도하면서, 동일한 RT로
									여러 개의 새로운 AT가 생성되는 문제가 발생합니다.
								</p>
								<br/>
								<img src="/refresh2.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/refresh2.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									이러한 중복 토큰 갱신 문제를 해결하기 위해 Redis를 활용해 갱신 상태 캐싱과 요청 대기 메커니즘을 구현했습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									첫 번째 요청이 Refresh Token을 사용한 갱신 작업을 시작할 때, Redis에 해당 사용자의 토큰 갱신 진행 상태를 나타내는 키를 설정합니다. 이후 동일한 사용자의 다른
									요청들이 동시에 들어오면, 이 키의 존재를 확인하고 갱신 작업이 완료될 때까지 잠시 대기하게 됩니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									갱신 작업이 완료되면 새로운 Access Token을 Redis에 캐싱하고, 대기 중이던 모든 요청들이 이 갱신된 토큰을 사용하여 원래의 비즈니스 로직을 처리합니다. 이를 통해 모든
									동시 요청이 동일한 새로운 토큰을 사용하게 되어 일관성을 보장하면서도 불필요한 중복 갱신을 방지할 수 있습니다.
								</p>
								<br/>
								<br/>
								<h4 className="text-lg font-semibold text-gray-800">토큰 버전 관리</h4>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									초기에는 비정상적인 접근이 가지되었을 때 Redis에 해당 RT를 블랙리스트 처리하는 방식을
									사용했습니다. 하지만 이 방식은 메모리 캐시 사용량을 점진적으로 증가시키는 문제가 있었
									습니다.
									메모리나 데이터베이스에 저장하는 방식 대신 사용자와 발급하는 토큰에 버전을 부여해 비정
									상적인 접근이 감지되거나 RT를 발급(로그인)받은 환경과 다른경우 토큰 사용자의 토큰 버전
									을 증가시킴으로 RT를 무효화 처리해 재로그인을 유도했습니다.
									이 방식은 추가적인 메모리 사용 없이도 부적절한 요청에 RT를 무효화하고 보안 측면에서 보
									다 좋은 효율성을 유지할 수 있었습니다.
								</p>
								<img src="/tokenversion.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/tokenversion.png', '_blank')}/>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">DevOps 및 배포</h4>
								<br/>
								<img src="/cicd1.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/cicd1.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									프로젝트를 시작할 때 가장 먼저 CI/CD 파이프라인을 구축했습니다. 이를 통해 코드 변경 시 자동화된 빌드, 테스트, 배포 과정을 통해 환경 간의 일관성을 유지하고 빠른 오류 감지와
									수정으로 생산성을 향상시켰습니다. 또한 점진적 배포와 모니터링을 통해 리스크를 줄이면서 신속하고 안정적인 새로운 기능과 개선사항을 제공할 수 있었습니다.
								</p>
								<br/>
								<h4 className="text-lg font-semibold text-gray-800">무중단 배포</h4>
								<p className="text-gray-700 leading-relaxed">
									파이프라인 구축에 중요한 요소 중 하나는 무중단 배포 구현이였습니다. ECS를 사용중이였기엔 선택지는 Blue/Green 또는 RollingUpdate 두 가지 였습니다. 두 방법
									모두 안정적인 무중단 배포를 지원하지만 방식에 뚜렷한 차이가 있어 고려해야 될 부분이 있었습니다.
								</p>
								<br/>
								<img src="/bluegreen.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/bluegreen.png', '_blank')}/>
								<br/>
								<img src="/rolling.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/rolling.png', '_blank')}/>
								<br/>
								<p className="text-gray-700 leading-relaxed">
									블루/그린 배포는 현재 운영 중인 환경(Blue)과 동일한 새로운 환경(Green)을 구축하여 새 버전을 배포한 후 로드밸런서를 통해 트래픽을 즉시 전환하는 방식입니다. 이 방식의
									가장 큰 장점은 즉시 전환과 롤백이 가능하다는 점입니다. 문제 발생 시 DNS나 로드밸런서 설정만 변경하면 몇 초 내에 이전 버전으로 복구할 수 있어 위험성이 낮습니다. 또한 완전히
									분리된 환경에서 새 버전을 충분히 테스트한 후 전환할 수 있어 안전성이 높습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									반면, 롤링 업데이트는 기존 인스턴스들을 배치 단위로 순차적으로 새 버전으로 교체하는 방식입니다. 일부 인스턴스부터 점진적으로 업데이트하여 전체 서비스 용량을 유지하면서 배포를
									진행합니다.
									기존 인프라를 그대로 활용하므로 추가 비용이 발생하지 않으며 실제 운영 트래픽으로 새 버전을 검증할 수 있다는 장점이 있었습니다.
								</p>
								<p className="text-gray-700 leading-relaxed">
									여러 요소를 종합적으로 고려하고 가장 중요했던 비용 효율성으로 봤을 때 롤링 업데이트 방식이 적합하다 판단해 선택했습니다. 서비스 특성상 금융이나 의료 시스템처럼 즉시 롤백이 반드시
									필요한 서비스가 아니였고 ECS의 기본지원인 롤링업데이트를 사용함으로써 보다 단순하고 안정적인 롤링 업데이트를 통해 무중단 배포의 핵심 목표인 서비스 연속성을 확보하는 것이 더
									현실적이었습니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">컨테이너 오케스트레이션</h4>
								<img src="/ecs.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/ecs.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									프로젝트에서 백엔드 개발과 인프라 운영을 단독으로 담당하게 되면서 컨테이너 오케스트레이션 플랫폼 선택이 중요한 결정사항이었습니다. k8s는 업계 표준으로 자리잡은 가장 대중적인
									컨테이너 오케스트레이션 플랫폼이지만 복잡한 설정과 관리가 필요하고 다양한 구성 요소에 대한 깊은 이해가 요구되었습니다. 반면 ECS는 AWS에서 제공하는 와넞ㄴ 관리형 컨테이너
									오케스트레이션 서비스로 다른 AWS 서비스들과 네이티브 통합을 제공하며 인프라 관리 부담을 크게 줄여주는 특징이 있었습니다.
								</p>
								<p>
									백엔드 개발과 인프라 운영을 혼자 담당하는 상황에서 가장 중요한 고려사항은 학습 부담이었습니다. AWS 클라우드를 본격적으로 사용하는건 처음이었던 프로젝이였기 때문에 k8s를
									도입한다면 추가적인 학습 요소들이 너무 많아졌습니다. 이런 상황에서 ECS의 가장 큰 장점인 다른 AWS 서비스들과의 자동 통합이 선택하게 된 가장 큰 요인이였습니다.
								</p>
								<p>
									ECS를 선택한 결과, AWS 클라우드 환경에서 빠르게 컨테이너 기반 아키텍처를 구축할 수 있었습니다. 학습 곡선이 완만해 개발에 집중할 수 있었고 AWS 서비스들과의 통합을 통해
									안정적인 운영 환경을 구성할 수 있었습니다. 향후 서비스가 성장하고 더 복잡한 요구사항이 생긴다면 k8s로의 마이그레이션도 고려할 수 있지만, 현재 단계에서는 ECS가 최적의
									선택이었다고 판단했습니다. 단독 운영 상황에서 현실적이고 효율적인 기술 선택을 통해 프로젝트 목표를 달성할 수 있도록 했습니다.
								</p>
							</div>
						</GlassmorphicCard>

						<br/>
						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<h4 className="text-lg font-semibold text-gray-800">모니터링 및 로깅</h4>
								<img src="/cloudwatch.png" alt="" style={{cursor: 'pointer', display: 'block', margin: '0 auto'}}
										 onClick={() => window.open('/cloudwatch.png', '_blank')}/>
								<p className="text-gray-700 leading-relaxed">
									AWS의 가장 큰 장점 중 하나라고 생각하는 CloudWatch 서비스를 적극 활용해 애플리케이션과
									인프라를 모니터링하고 분석했습니다. 특히 사용중인 ECS와 연계해 오토스케일링 및 각종 서
									비스의 로그와 메트릭을 수집했습니다.
									ECS는 현재 실행 중인 컨테이너의 지표가 설정한 기준을 일정 시간 이상 초과할 경우 추가적
									으로 컨테이너를 실행하여 트래픽 부하를 분산시키도록 합니다. 이를 위해 브릿지 네트워크
									모드를 사용해 컨테이너 포트를 동적으로 할당했고, 이때 CloudWatch는 다음과 같은 중요한
									역할을 했습니다.
								</p>
								<ul className="text-gray-700 leading-relaxed">
									<li className="text-gray-700 leading-relaxed">• 지표 수집 및 모니터링: ECS에서 실행 중인 각 컨테이너의 성능 지표를 실시간으로 수
										집해, 이를 통해 CPU 사용률, 메모리 사용률, 네트워크 트래픽 등의 주요 메트릭을 모
										니터링하고 특정 기준을 초과할 경우 알림을 받을 수 있도록 설정했습니다.
									</li>
									<li className="text-gray-700 leading-relaxed">• 오토 스케일링: ECS 서비스는 CloudWatch 경보를 기반으로 오토 스케일링을 구성할 수
										있었습니다. 예를 들어 CPU 사용률이 80%를 초과하는 경우 추가 컨테이너를 자동으로
										실행하여 부하를 분산시킬 수 있습니다. 이렇게 동적으로 컨테이너 수를 조정함으로써
										트래픽 증가에 유연하게 대응할 수 있으며 결과적으로 필요할 때만 컨테이너를 추가 실
										행하거나 종료함으로써 효율적인 리소스 사용이 가능해지며 비용절감을 기대할 수 있습
										니다.
									</li>
									<li className="text-gray-700 leading-relaxed">• 문제 감지 및 대응: 대시보드와 알람을 통해 시스템의 상태를 실시간으로 모니터링하고
										문제가 발생할 경우 신속하게 대응해 시스템의 안정성과 가용성을 높이는데 중요한 역
										할을 합니다.
									</li>
								</ul>
								<p className="text-gray-700 leading-relaxed">
									ECS를 제외하고도 사용중인 서비스들의 로그 그룹과 스트림을 통해 손쉽게 관리하고, 검색
									및 필터링 기능을 활용하여 필요한 정보를 빠르게 찾을 수 있었으며 성능 메트릭을 실시간으
									로 모니터링해 CPU, 메모리, 디스크 I/O, 네트워크 트래픽 등의 상태를 파악해 필요한 자원
									을 추가하거나 조정해 성능 문제를 예방할 수 있습니다. 또한 중요한 메트릭에 대해 알람을
									설정해 문제가 발생했을 때 즉시 대응할 수 있도록 설정하여 시스템의 안정성을 유지할 수
									있도록 했습니다.
								</p>
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
							<ul className="space-y-3 text-gray-700">
								<li>
									<b>✅ 서비스 기획부터 출시까지 E2E 경험</b>
									<p className="text-gray-700 leading-relaxed">
										단순한 개발 업무를 넘어 서비스 기회, 기술 스택 선정, 아키텍처 설계, 개발, 운영까지 전 과정을 경험했습니다. 사용자 요구사항 분석부터 시작해서 MVP 정의, 기능 우선순위
										결정, 그리고 실제 출시까지 서비스의 개발 생명주기를 완주했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										특히 혼자서 백엔드와 인프라를 모두 책임지면서 기술적 의사결정의 중요성을 깨달았습니다. 제한된 자원과 시간 내에서 최적의 결과를 도출하기 위한 우선순위 설정, 기술 부채 관리,
										그리고 확장 가능한 아키텍처 설계 능력을 기를 수 있었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										설제 프로덕션 환경에서 서비스를 운영하면서 코드 품질의 중요성, 모니터링의 필요성, 그리고 장애 대응 능력의 중요성을 실감했습니다. 이러한 경험을 통해 단순한 개발자를 넘어서
										서비스의 전체적인 그림을 그릴 수 있는 역량을 갖추게 되었습니다.
									</p>
								</li>
								<li>
									<b>✅ NestJS 프레임워크 심화 학습</b>
									<p className="text-gray-700 leading-relaxed">
										Node.js 기반의 엔터프라이즈급 프레임워크인 NestJS의 핵심 동작 원리를 체득했습니다. Dependency Injection을 통한 느슨한 결합과 테스트 가능한 코드 구조,
										IoC 컨테이너를 통한 객체 생명주기 관리, 그리고 싱글톤 패턴 기반의 효율적인 메모리 사용을 실전에서 경험했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										Decorator 패턴을 활용한 메타데이터 기반 프로그래밍과 Guard, Interceptor, Pipe를 이용한 횡단 관심사 처리 방식을 통해 관심사 분리와 코드 재사용성을
										극대화할 수 있었습니다. 모듈 시스템을 통한 기능별 캡슐화와 Provider 패턴을 활용한 서비스 레이어 설계로 확장 가능하고 유지보수하기 쉬운 백엔드 아키텍처를 구축했습니다.
									</p>
								</li>
								<li>
									<b>✅ AWS 인프라 설계 및 ECS 아키텍처 구축</b>
									<p className="text-gray-700 leading-relaxed">
										AWS 클라우드 환경에서 프로덕션 레벨의 인프라를 처음부터 설계하고 구축했습니다. VPC 네트워킹, 보안 그룹 설정, ALB를 통한 로드 밸런싱, 그리고 ECS를 중심으로 한
										컨테이너 오케스트레이션을 경험했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										ECS 클러스터 설계부터 태스크 정의 작성, 서비스 설정, Auto Scaling 구성까지 전 과정을 담당하면서 컨테이너 기반 아키텍처의 장점을 실감할 수 있었습니다. 특히
										ECR을 통한 이미지 관리와 CloudWatch를 이용한 모니터링 체계 구축을 통해 운영 안정성을 확보했습니다.
									</p>
								</li>
								<li>
									<b>✅ 대규모 트래픽 대비 성능 최적화</b>
									<p className="text-gray-700 leading-relaxed">
										서비스 확장성을 고려한 다양한 성능 최적화 기법을 실제로 구현했습니다. Redis를 활용한 다층 캐싱 전략으로 데이터베이스 부하를 크게 줄였고, 집계 테이블과 크론 작업을 통한
										배치 처리로 실시간 업데이트의 락 경합 문제를 해결했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										NestJS의 Bull 라이브러리와 Redis를 연동한 큐 시스템을 구축하여 비동기 작업 처리와 백그라운드 작업 스케줄링을 구현했습니다. 데이터베이스 쿼리 최적화와 인덱싱을 통해
										응답 시간을 대폭 개선했으며, 동시 사용자 증가 시 발생할 수 있는 병목 지점을 사전에 식별하고 해결하는 경험을 통해 성능 엔지니어링 역량을 키울 수 있었습니다.
									</p>
								</li>
								<li>
									<b>✅ CI/CD 파이프라인 구축</b>
									<p className="text-gray-700 leading-relaxed">
										GitHub Actions와 AWS CodePipeline을 연동한 완전 자동화된 배포 파이프라인을 구축했습니다. 코드 커밋부터 테스트, 빌드, 배포까지의 전 과정을 자동화하여
										개발 생산성을 크게 향상시켰습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										Docker 이미지 빌드 최적화, ECR을 통한 이미지 관리, 그리고 ECS 롤링 업데이트를 통한 무중단 배포를 구현했습니다. 특히 테스트 실패 시 자동 롤백, 배포 성공/실패
										알림 시스템 등을 통해 안정적인 배포 환경을 만들 수 있었습니다. 이를 통해 DevOps 문화와 Infrastructure as Code의 중요성을 몸소 체험했습니다.
									</p>
								</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">배운 점</h3>
							<ul className="space-y-3 text-gray-700">
								<li>
									<b>계획과 현실의 간극</b>
									<p className="text-gray-700 leading-relaxed">
										프로젝트를 진행하면서 가장 뼈아프게 깨달은 것은 프로젝트는 절대 내가 원하는 대로 흘러가지 않는다는 점이었습니다. 초기에 세웠던 완벽한 계획과 타임라인은 현실 앞에서 수없이
										수정되어야 했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										제품 기획 단계에서 명확하다고 생각했던 요구사항들이 개발 과정에서 계속 변경되었고, 예상했던 기술적 난이도와 실제 구현의 복잡성 사이에는 상당한 차이가 있었습니다. 이런 경험을
										통해 불확실성을 전제로 한 유연한 계획 수립의 중요성을 깨달았습니다. 버퍼 시간 확보, 단계별 검증 포인트 설정, 그리고 변경에 대한 대응 계획을 미리 세우는 것이 얼마나 중요한지
										몸소 체험했습니다.
									</p>
								</li>
								<li>
									<b>팀 리더십의 어려움</b>
									<p className="text-gray-700 leading-relaxed">
										기술적 도전만큼이나 어려웠던 것은 팀원들을 이끌고 나아가는 일이었습니다. 각자 다른 배경과 성향을 가진 팀원들이 하나의 목표를 향해 함께 나아가도록 하는 것은 생각보다 훨씬 복잡한
										일이었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										개발 진도나 품질에 대한 기준이 팀원마다 달랐고, 의사소통 방식이나 업무 스타일의 차이로 인한 갈등도 있었습니다. 특히 기술적 의견 차이가 있을 때 합의점을 찾는 과정에서 많은
										시간이 소요되었고, 때로는 개발보다 커뮤니케이션에 더 많은 에너지를 쏟아야 했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										이를 통해 기술 역량만큼이나 소프트 스킬의 중요성을 깨달았습니다. 명확한 커뮤니케이션, 팀원들의 강점 파악과 적절한 역할 분배, 그리고 무엇보다 인내심과 공감 능력이 프로젝트
										성공에 얼마나 중요한지 배울 수 있었습니다.
									</p>
								</li>
								<li>
									<b>기술 부채와 학습</b>
									<p className="text-gray-700 leading-relaxed">
										프로젝트를 진행하면서 가장 어려웠던 부분 중 하나는 아직 경험해보지 못한 구조와 패턴들로 인해 무의식적으로 기술 부채를 만들어가는 것이었습니다. 당시에는 최선이라고 생각했던
										선택들이 나중에 유지보수의 어려움으로 이어지는 경험을 반복하면서, 소프트웨어 설계의 중요성을 뼈저리게 깨달을 수 있었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										설계 패턴들을 이론적으로는 알고 있었지만 실제 프로젝트에서 언제 어떻게 적용해야 하는지에 대한 감각이 부족해 결국 확장성을 고려하지 않은 구조로 개발하게 되었고, 새로운 기능이
										추가될 때 기존 코드를 대량으로 수정해야 하는 상황이 발생했습니다. 초기 테이블 설계시에도 현재 요구사항에만 집중하다 향후 확장성을 충분히 고려하지 못해 전체 구조를 재설계하기도
										했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										결과적으로 이런 무의식적 기술 부채들이 누적되면서 예상치 못한 사이드 이펙트를 걱정해야하는 상황이 되었습니다. 결국 몇 차례에 걸쳐 대규모 리팩토링을 진행해야했던 경험이 있습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										이런 시행착오를 겪으면서 소프트웨어 설계의 중요성과 디자인 패턴의 실용성을 깨달았습니다. 이론적으로만 알고 있던 개념들이 실제 프로젝트에서 어떤 문제를 해결하는지, 언제 적용해야
										하는지에 대한 감각을 기를 수 있었습니다. 또한 초기 설계 단계에서 확장성을 고려하는 것의 중요성을 배웠습니다. 당장의 요구사항에만 집중하기보다 향후 변경 가능성을 염두에 두고
										유연한 구조를 만드는 것이 결국에는 전체 개발 시간을 단축시키고 코드 품질을 높이는 길이라는 것을 경험을 통해 체득했습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										무엇보다 기술 부채를 의식적으로 관리하는 방법을 배웠습니다. 모든 코드가 처음부터 완벽할 수는 없지만, 어떤 부분이 기술 부채가 될 가능성이 있는지 인식하고, 적절한 시점에
										리팩토링을 계획하는 것이 중요하다는 것을 깨달았습니다.
									</p>
								</li>
								<li>
									<b>성장의 계기</b>
									<p className="text-gray-700 leading-relaxed">
										이러한 어려움들은 분명 힘들었지만, 개발자로서 그리고 한 사람으로서 성장할 수 있는 귀중한 경험이었습니다. 기술적 역량뿐만 아니라 프로젝트 관리, 팀 협업, 문제 해결 방식에 대한
										새로운 관점을 얻을 수 있었습니다.
									</p>
									<p className="text-gray-700 leading-relaxed">
										특히 실패와 시행착오를 통해 배운 교훈들은 책이나 강의로는 얻을 수 없는 값진 자산이 되었습니다. 앞으로의 프로젝트에서는 이런 경험을 바탕으로 더 성숙하고 체계적인 접근을 할 수
										있을 것이라 확신합니다.
									</p>
								</li>
							</ul>
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
