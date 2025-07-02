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
						<Link href="https://github.com/daechan-jo/spring-asynchronous-msa-architecture" target="_blank"
									rel="noopener noreferrer">
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
                Spring WebFlux MSA Architecture
              </span>
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							리액티브 프로그래밍과 마이크로서비스 아키텍처를 활용한 고성능 백엔드 시스템
						</p>

						<div className="flex flex-wrap gap-2 justify-center mb-8">
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Spring WebFlux</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">MSA</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">R2DBC
								PostgreSQL</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Redis</Badge>
							<Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">RabbitMQ</Badge>
						</div>

						<div className="flex gap-4 justify-center">
							<div className="flex items-center gap-2 text-gray-600">
								<Calendar className="h-4 w-4"/>
								<span>25.06</span>
							</div>
							<div className="flex items-center gap-2 text-gray-600">
								<Users className="h-4 w-4"/>
								<span>개인 프로젝트</span>
							</div>
						</div>
					</motion.div>
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
								보편적인 Spring MVC 기반 모놀리식 아키텍처에서 더 높은 성능과 확장성을 달성하기 위해, 리액티브 프로그래밍 패러다임을 채택한 Spring WebFlux 기반의 마이크로서비스
								아키텍처를 구현하였습니다. 전통적인 멀티스레드 방식 대신 이벤트 루프 기반의 논블로킹 I/O를 활용하여 제한된 리소스로도 높은 처리량을 달성하고, 서비스 간 느슨한 결합을 통해 유연한
								확장이 가능한 시스템을 구축하는 것이 목적이었습니다.
							</p>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="text-xl font-semibold mb-4">핵심 가치</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>높은 성능: 이벤트 루프 기반의 논블로킹 I/O를 활용하여 적은 리소스로도 높은 처리량을 달성할 수 있는 아키텍처 구축</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>확장성: 마이크로서비스 아키텍처를 통한 서비스 간 느슨한 결합으로 독립적인 확장 및 배포가 가능한 시스템 구현</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-gray-400 mt-1">•</span>
									<span>개발 생산성: 각 서비스의 명확한 책임 분리와 함수형 프로그래밍을 통한 코드 재사용성 및 유지보수성 향상</span>
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
							<h3 className="font-semibold text-gray-800 mb-3">Framework</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Spring Boot 3.2.0</li>
								<li>• Spring WebFlux</li>
								<li>• Spring Cloud Gateway</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Database & Message Queue</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• R2DBC PostgreSQL</li>
								<li>• Redis</li>
								<li>• RabbitMQ</li>
							</ul>
						</GlassmorphicCard>

						<GlassmorphicCard expandable={false}>
							<h3 className="font-semibold text-gray-800 mb-3">Monitoring</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Elasticsearch</li>
								<li>• Logstash</li>
								<li>• Kibana</li>
								<li>• Grafana</li>
								<li>• Prometheus</li>
							</ul>
						</GlassmorphicCard>
					</div>
				</div>
			</section>

			{/* 아키텍처 */}
			<section className="py-16 bg-gray-50">
				<div className="container">
					<SectionHeading title="아키텍처" subtitle="Infrastructure architecture"/>

					<div className="mt-12 space-y-8">
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Spring
										WebFlux 반응형 아키텍처</h3>
									<img src="/webflux.png" alt="Spring WebFlux 아키텍처 구조도"
											 style={{cursor: 'pointer', display: 'block', margin: '0 auto', marginBottom: '16px'}}
											 onClick={() => window.open('/webflux.png', '_blank')}/>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">프로젝트 개요 및 학습 목표</h5>
										<p className="text-gray-700 text-sm mb-3">
											Spring WebFlux를 깊이 있게 학습하기 위한 목적으로 설계된 반응형 마이크로서비스 아키텍처입니다.
											전통적인 블로킹 I/O 방식에서 벗어나 논블로킹 이벤트 루프 기반의 완전한 반응형 시스템을 구축하여
											반응형 프로그래밍의 핵심 개념과 실제 적용 방법을 구현합니다.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">학습 핵심 영역</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• Spring WebFlux와 Project Reactor 생태계</li>
													<li>• 논블로킹 I/O와 이벤트 루프 메커니즘</li>
													<li>• R2DBC 기반 반응형 데이터베이스 연동</li>
													<li>• 분산 시스템에서의 비동기 메시징 패턴</li>
												</ul>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">아키텍처 특징</h6>
												<ul className="text-xs text-gray-600 space-y-1">
													<li>• End-to-End 논블로킹 파이프라인</li>
													<li>• Direct Exchange 기반 정밀 메시징</li>
													<li>• Correlation ID를 통한 분산 추적</li>
												</ul>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">API Gateway:
										반응형 진입점 설계</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Spring Cloud Gateway 기반 구현</h5>
										<p className="text-gray-700 text-sm mb-3">
											Spring Cloud Gateway를 활용하여 완전한 논블로킹 방식의 API Gateway를 구현했습니다.
											Netty 기반의 이벤트 루프를 통해 높은 동시성 처리가 가능하며, 모든 외부 요청의 단일 진입점 역할을 수행합니다.
										</p>
										<br/>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Correlation ID 생성 및 관리</h6>
												<p className="text-sm text-gray-600 mb-2">
													들어오는 모든 HTTP 요청에 대해 고유한 Correlation ID를 생성하여 분산 환경에서의 요청 추적을 가능하게 합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>생성 방식:</strong> UUID 기반 고유 식별자 생성</p>
													<p className="text-xs text-gray-600"><strong>전파 방법:</strong> HTTP 헤더와 메시지 메타데이터를 통한 전달</p>
													<p className="text-xs text-gray-600"><strong>Redis 저장:</strong> 요청-응답 매핑을 위한 임시 저장소 활용</p>
												</div>
											</div>
											<br/>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">라우팅 및 로드 밸런싱</h6>
												<p className="text-sm text-gray-600 mb-2">
													URI 패턴 기반으로 적절한 마이크로서비스로 요청을 라우팅하며,
													라운드 로빈 방식의 로드 밸런싱을 통해 부하를 분산합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>라우팅 규칙:</strong> Path-based routing을 통한 서비스 식별
													</p>
													<p className="text-xs text-gray-600"><strong>헬스 체크:</strong> 주기적인 서비스 상태 확인</p>
													<p className="text-xs text-gray-600"><strong>메트릭 수집:</strong> Prometheus를 통한 시스템 성능 지표 수집</p>
													<p className="text-xs text-gray-600"><strong>시각화:</strong> Grafana 대시보드를 통한 실시간 모니터링</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">RabbitMQ
										Direct Exchange 메시징 패턴</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">정밀한 메시지 라우팅 시스템</h5>
										<p className="text-gray-700 text-sm mb-3">
											브로드캐스팅을 완전히 배제하고 정확한 대상 서비스로만 메시지를 전달하는
											Direct Exchange 패턴을 구현했습니다. 이를 통해 네트워크 트래픽을 최소화하고
											메시지 처리 효율성을 극대화했습니다.
										</p>
										<br/>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Exchange 구성 전략</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 서비스별로 dedicated exchange를 구성하여 메시지 격리와 독립성을 보장합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Exchange Type:</strong> Direct Exchange로 라우팅 키 기반
														정확한 전달</p>
													<p className="text-xs text-gray-600"><strong>Durability:</strong> 메시지 영속성 보장으로 시스템 재시작 시에도 안전
													</p>
												</div>
											</div>
											<br/>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Queue 설계 패턴</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 서비스마다 Request Queue와 Listener Queue의 쌍을 구성하여
													요청-응답 패턴을 명확히 분리했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Request Queue:</strong> 해당 서비스로 전송되는 요청 메시지 처리
													</p>
													<p className="text-xs text-gray-600"><strong>Listener Queue:</strong> 해당 서비스에서 발생하는 응답 메시지 수신
													</p>
													<p className="text-xs text-gray-600"><strong>Dead Letter Queue:</strong> 처리 실패 메시지의 별도 관리</p>
												</div>
											</div>
											<br/>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">라우팅 키 명명 규칙</h6>
												<p className="text-sm text-gray-600 mb-2">
													체계적인 라우팅 키 명명 규칙을 통해 메시지 전달 경로를 명확히 정의했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Request
														Pattern:</strong> &#123;service-name&#125;.request.&#123;operation&#125;</p>
													<p className="text-xs text-gray-600"><strong>Response
														Pattern:</strong> &#123;service-name&#125;.response.&#123;correlation-id&#125;</p>
													<p className="text-xs text-gray-600"><strong>Error
														Pattern:</strong> &#123;service-name&#125;.error.&#123;error-type&#125;</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">마이크로서비스 반응형
										구현</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">WebFlux 기반 논블로킹 서비스</h5>
										<p className="text-gray-700 text-sm mb-3">
											각 마이크로서비스는 Spring WebFlux와 R2DBC를 활용하여
											완전한 논블로킹 파이프라인을 구현했습니다.
											이를 통해 적은 스레드로도 높은 동시성 처리가 가능합니다.
										</p>

										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Mono/Flux 기반 데이터 스트림</h6>
												<p className="text-sm text-gray-600 mb-2">
													Project Reactor의 Mono와 Flux를 활용하여 반응형 데이터 스트림을 구성했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Mono 활용:</strong> 단일 결과 비동기 처리 (단건 조회, 생성, 수정)
													</p>
													<p className="text-xs text-gray-600"><strong>Flux 활용:</strong> 다중 결과 스트리밍 처리 (목록 조회, 실시간 데이터)
													</p>
													<p className="text-xs text-gray-600"><strong>Back Pressure:</strong> 데이터 생산자와 소비자 간 속도 조절</p>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">R2DBC 반응형 데이터베이스 연동</h6>
												<p className="text-sm text-gray-600 mb-2">
													R2DBC를 통해 데이터베이스 연동까지 완전한 논블로킹을 달성했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Connection Pool:</strong> 비동기 커넥션 풀 관리로 효율적인 리소스
														사용</p>
													<p className="text-xs text-gray-600"><strong>Transaction:</strong> 반응형 트랜잭션 관리 (@Transactional
														with Reactive)</p>
													<p className="text-xs text-gray-600"><strong>Repository
														Pattern:</strong> ReactiveCrudRepository 상속으로 일관된 데이터 접근</p>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">메시지 핸들링 및 라우팅</h6>
												<p className="text-sm text-gray-600 mb-2">
													RabbitMQ 메시지를 수신하여 비즈니스 로직을 처리하고 응답을 생성하는 과정을 반응형으로 구현했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>Message Listener:</strong> @RabbitListener를 통한
														논블로킹 메시지 수신</p>
													<p className="text-xs text-gray-600"><strong>Handler Chain:</strong> Mono/Flux 체이닝을 통한 순차적 처리
													</p>
													<p className="text-xs text-gray-600"><strong>Error Handling:</strong> onErrorResume,
														onErrorReturn을 통한 장애 복구</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">분산 추적 및 상태
										관리</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Redis 기반 Correlation ID 관리</h5>
										<p className="text-gray-700 text-sm mb-3">
											분산 환경에서 요청의 전체 생명주기를 추적하기 위해 Redis를 활용한
											Correlation ID 관리 시스템을 구현했습니다. 이를 통해 복잡한 서비스 간 호출 흐름을
											명확히 파악할 수 있습니다.
										</p>

										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">요청 생명주기 관리</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 요청의 시작부터 완료까지 전체 과정을 Correlation ID를 통해 추적합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>생성 시점:</strong> API Gateway에서 최초 요청 수신 시 UUID 생성
													</p>
													<p className="text-xs text-gray-600"><strong>저장 구조:</strong> Redis Hash를 활용한 요청 메타데이터 저장</p>
													<p className="text-xs text-gray-600"><strong>TTL 관리:</strong> 요청 타임아웃 기반 자동 만료 처리</p>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">응답 수집 및 매핑</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 서비스에서 생성된 응답을 Correlation ID를 통해 원래 요청과 매핑합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>응답 대기:</strong> Reactive Streams를 활용한 논블로킹 응답 대기
													</p>
													<p className="text-xs text-gray-600"><strong>타임아웃 처리:</strong> 지정된 시간 내 응답 없을 시 기본 응답 반환</p>
													<p className="text-xs text-gray-600"><strong>결과 조합:</strong> 여러 서비스 응답을 하나의 최종 응답으로 조합</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</GlassmorphicCard>

						<br/>
						<GlassmorphicCard expandable={false}>
							<div className="space-y-6">
								<section>
									<h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">모니터링 및 관찰
										가능성</h4>

									<div className="bg-gray-50 p-4 rounded-lg mb-4">
										<h5 className="text-gray-800 font-medium mb-3">Prometheus & Grafana 기반 모니터링</h5>
										<p className="text-gray-700 text-sm mb-3">
											분산 마이크로서비스 환경에서 시스템 상태를 실시간으로 파악하기 위해
											Prometheus와 Grafana를 활용한 종합적인 모니터링 시스템을 구축했습니다.
											이를 통해 각 서비스의 성능 지표와 시스템 전반의 건강 상태를 지속적으로 추적할 수 있습니다.
										</p>

										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Prometheus 메트릭 수집</h6>
												<p className="text-sm text-gray-600 mb-2">
													각 마이크로서비스에서 발생하는 다양한 성능 지표를 실시간으로 수집하고 저장합니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>시스템 메트릭:</strong> CPU, 메모리, 디스크 사용률 모니터링</p>
													<p className="text-xs text-gray-600"><strong>애플리케이션 메트릭:</strong> HTTP 요청 수, 응답 시간, 에러율 추적</p>
													<p className="text-xs text-gray-600"><strong>비즈니스 메트릭:</strong> 서비스별 처리량, RabbitMQ 큐 상태</p>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">Grafana 대시보드 시각화</h6>
												<p className="text-sm text-gray-600 mb-2">
													Prometheus에서 수집한 데이터를 직관적인 차트와 그래프로 시각화하여
													시스템 상태를 한눈에 파악할 수 있도록 구성했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>실시간 대시보드:</strong> 서비스별 성능 지표 실시간 표시</p>
													<p className="text-xs text-gray-600"><strong>알람 설정:</strong> 임계값 초과 시 즉시 알림 발송</p>
													<p className="text-xs text-gray-600"><strong>히스토리 분석:</strong> 시간대별 성능 트렌드 분석</p>
												</div>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h6 className="font-medium text-gray-800 mb-2">관찰 가능성 향상</h6>
												<p className="text-sm text-gray-600 mb-2">
													분산 시스템의 복잡성을 해결하기 위해 각 구성요소의 상태를
													투명하게 관찰할 수 있는 환경을 조성했습니다.
												</p>
												<div className="space-y-1">
													<p className="text-xs text-gray-600"><strong>서비스 디스커버리:</strong> 동적으로 추가되는 서비스 자동 감지</p>
													<p className="text-xs text-gray-600"><strong>상관관계 분석:</strong> 서비스 간 의존성 및 영향도 파악</p>
													<p className="text-xs text-gray-600"><strong>성능 병목 식별:</strong> 응답 시간 지연 구간 정확한 진단</p>
												</div>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
										<div className="bg-gray-50 p-3 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1 text-sm">반응형 처리</h6>
											<p className="text-xs text-gray-600">논블로킹 I/O 및 이벤트 루프</p>
										</div>
										<div className="bg-gray-50 p-3 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1 text-sm">정밀 메시징</h6>
											<p className="text-xs text-gray-600">Direct Exchange 패턴</p>
										</div>
										<div className="bg-gray-50 p-3 rounded-lg text-center">
											<h6 className="font-medium text-gray-800 mb-1 text-sm">시스템 관찰성</h6>
											<p className="text-xs text-gray-600">Prometheus & Grafana 모니터링</p>
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
												<h5 className="font-medium text-gray-800 mb-2">반응형 아키텍처 구현</h5>
												<p className="text-sm text-gray-600">
													Spring WebFlux와 R2DBC를 활용하여 완전한 논블로킹 파이프라인을 구축했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">Direct Exchange 메시징</h5>
												<p className="text-sm text-gray-600">
													RabbitMQ Direct Exchange를 통한 정밀한 메시지 라우팅으로
													효율적인 서비스 간 통신을 달성했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">분산 추적 시스템</h5>
												<p className="text-sm text-gray-600">
													Correlation ID와 Redis를 활용한 분산 환경에서의 요청 추적 시스템을 구현했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">모니터링 체계 구축</h5>
												<p className="text-sm text-gray-600">
													Prometheus와 Grafana를 통한 실시간 시스템 모니터링 환경을 조성했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">학습 성과</h4>
										<div className="space-y-3">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">반응형 프로그래밍 이해</h5>
												<p className="text-sm text-gray-600">
													Mono/Flux 기반의 반응형 데이터 스트림과 Back Pressure 개념을
													실제 프로젝트를 통해 체득했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">이벤트 루프 메커니즘</h5>
												<p className="text-sm text-gray-600">
													Netty 기반의 논블로킹 I/O와 이벤트 루프가 어떻게
													높은 동시성을 제공하는지 이해했습니다.
												</p>
											</div>

											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">비동기 메시징 패턴</h5>
												<p className="text-sm text-gray-600">
													RabbitMQ Exchange 타입별 특성과 마이크로서비스 간
													효율적인 메시징 전략을 학습했습니다.
												</p>
											</div>
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
										<h4 className="text-lg font-medium text-gray-800 mb-3">반응형 프로그래밍의 패러다임 변화</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">사고방식의 전환</h5>
												<p className="text-sm text-gray-600">
													기존의 명령형 프로그래밍에서 선언형 반응형 프로그래밍으로의
													사고방식 전환이 필요함을 깨달았습니다.
													데이터를 스트림으로 바라보는 관점이 중요했습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">체이닝의 중요성</h5>
												<p className="text-sm text-gray-600">
													Mono와 Flux의 체이닝을 통해 복잡한 비동기 로직을
													간결하고 읽기 쉽게 표현할 수 있음을 학습했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">성능과 복잡성의 트레이드오프</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">학습 곡선의 가파름</h5>
												<p className="text-sm text-gray-600">
													반응형 프로그래밍은 높은 성능을 제공하지만
													초기 학습 비용이 상당히 높다는 것을 체감했습니다.
													디버깅과 에러 처리가 더 복잡해집니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">적절한 사용 시점</h5>
												<p className="text-sm text-gray-600">
													모든 상황에서 반응형이 최선은 아니며,
													I/O 집약적이고 높은 동시성이 필요한 경우에
													진가를 발휘한다는 것을 이해했습니다.
												</p>
											</div>
										</div>
									</div>

									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="text-lg font-medium text-gray-800 mb-3">분산 시스템 설계 원칙</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">느슨한 결합의 가치</h5>
												<p className="text-sm text-gray-600">
													Direct Exchange를 통한 정밀한 메시징이 어떻게
													서비스 간 결합도를 낮추고 시스템 안정성을
													높이는지 실감했습니다.
												</p>
											</div>
											<div className="bg-white p-3 rounded border border-gray-200">
												<h5 className="font-medium text-gray-800 mb-2">관찰 가능성의 중요성</h5>
												<p className="text-sm text-gray-600">
													분산 환경에서는 각 구성요소의 상태를 투명하게
													관찰할 수 있는 모니터링 체계가
													시스템 운영에 필수적임을 깨달았습니다.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
									<h4 className="text-gray-800 font-medium mb-2">향후 학습 방향</h4>
									<p className="text-gray-700 text-sm">
										이번 WebFlux 학습을 통해 얻은 반응형 프로그래밍 기초를 바탕으로
										Spring Cloud Stream, WebFlux Security, 그리고
										더 복잡한 분산 시스템 패턴들을 학습해 나갈 계획입니다.
										특히 실제 운영 환경에서의 성능 튜닝과 장애 대응 경험을 쌓고 싶습니다.
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
						<Link href="https://github.com/daechan-jo/spring-asynchronous-msa-architecture" target="_blank"
									rel="noopener noreferrer">
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
