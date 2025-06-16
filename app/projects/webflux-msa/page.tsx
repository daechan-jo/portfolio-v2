"use client"

import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"

export default function LinkedOutPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
      {/* 헤더 네비게이션 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              돌아가기
            </Button>
          </Link>
          <div className="flex gap-4">
            <Link href="https://github.com/daechan-jo/linkedout" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                코드 보기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Next.js</Badge>
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">TypeScript</Badge>
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Prisma</Badge>
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">PostgreSQL</Badge>
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">Tailwind CSS</Badge>
            </div>

            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>2024년 3월 - 5월</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>개인 프로젝트</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 프로젝트 이미지 갤러리 */}
      <section className="py-16">
        <div className="container">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/linkedout-img.png"
              alt="LinkedOut 메인 화면"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 개요 */}
      <section className="py-16">
        <div className="container">
          <SectionHeading title="프로젝트 개요" subtitle="Project Overview" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">배경 및 목적</h3>
              <p className="text-gray-700 leading-relaxed">
                소셜 미디어의 '좋아요'와 '댓글' 문화가 진정한 글쓰기를 방해한다는 문제의식에서 출발했습니다.
                작가들이 독자의 즉각적인 반응에 신경 쓰지 않고 온전히 글쓰기에만 집중할 수 있는 플랫폼을 
                만들고자 했습니다.
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">핵심 가치</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>순수한 텍스트 중심의 콘텐츠</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>상호작용 기능 제거로 글의 본질에 집중</span>
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

      {/* 주요 기능 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading title="주요 기능" subtitle="Key Features" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="h-full">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">깔끔한 에디터</h3>
                <p className="text-gray-600">
                  마크다운 기반의 심플한 에디터로 글쓰기에만 집중할 수 있습니다.
                </p>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="h-full">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">익명성 보장</h3>
                <p className="text-gray-600">
                  작가의 신원보다 글의 내용에 집중할 수 있도록 익명 옵션을 제공합니다.
                </p>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="h-full">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <ExternalLink className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">읽기 최적화</h3>
                <p className="text-gray-600">
                  산만함 없는 깔끔한 인터페이스로 독서에 몰입할 수 있습니다.
                </p>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기술 스택 상세 */}
      <section className="py-16">
        <div className="container">
          <SectionHeading title="기술 스택" subtitle="Tech Stack" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <GlassmorphicCard>
              <h3 className="font-semibold text-gray-800 mb-3">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Next.js 14 (App Router)</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="font-semibold text-gray-800 mb-3">Backend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Next.js API Routes</li>
                <li>• Prisma ORM</li>
                <li>• PostgreSQL</li>
                <li>• NextAuth.js</li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="font-semibold text-gray-800 mb-3">배포</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Vercel</li>
                <li>• Supabase (DB)</li>
                <li>• GitHub Actions</li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="font-semibold text-gray-800 mb-3">도구</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ESLint & Prettier</li>
                <li>• Husky</li>
                <li>• Jest & Testing Library</li>
              </ul>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* 성과 및 배운 점 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading title="성과 및 배운 점" subtitle="Achievements & Learnings" />
          
          <div className="mt-12 space-y-8">
            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">주요 성과</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Next.js App Router와 Server Components를 활용한 성능 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Prisma를 활용한 타입 안전한 데이터베이스 작업</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>모바일 반응형 디자인으로 모든 디바이스에서 최적의 UX 제공</span>
                </li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-semibold mb-4">배운 점</h3>
              <p className="text-gray-700 leading-relaxed">
                이 프로젝트를 통해 Next.js 14의 새로운 기능들을 깊이 있게 학습할 수 있었습니다.
                특히 Server Components와 Client Components의 적절한 구분, 그리고 서버 사이드 
                데이터 페칭의 최적화 방법을 익힐 수 있었습니다. 또한 사용자 경험을 최우선으로 
                고려한 미니멀한 디자인의 중요성을 깨달았습니다.
              </p>
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
            <Link href="https://github.com/daechan-jo/linkedout" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900">
                <Github className="h-5 w-5" />
                GitHub 보기
              </Button>
            </Link>
            <Link href="/">
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
