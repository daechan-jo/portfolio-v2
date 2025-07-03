import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

interface VisitData {
	page: string;
	userAgent: string;
	timestamp: string;
}

export async function POST(request: NextRequest) {
	try {
		const body: VisitData = await request.json();
		const {page, userAgent, timestamp} = body;

		// 환경변수 검증
		if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
			console.error('이메일 환경변수가 설정되지 않았습니다');
			return NextResponse.json(
				{error: '서버 설정 오류'},
				{status: 500}
			);
		}

		// 메일 전송 설정
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: 'daechan476@gmail.com',
			subject: '포트폴리오 방문자 알림',
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">새로운 방문자</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>📅 방문 시간:</strong> ${new Date(timestamp).toLocaleString('ko-KR')}</p>
            <p><strong>📍 페이지:</strong> ${page}</p>
            <p><strong>🌐 브라우저:</strong> ${userAgent}</p>
            <p><strong>📍 IP:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'}</p>
          </div>
        </div>
      `,
		});

		return NextResponse.json({success: true}, {status: 200});
	} catch (error) {
		console.error('메일 전송 실패:', error);
		return NextResponse.json(
			{error: '메일 전송 실패'},
			{status: 500}
		);
	}
}

// 테스트용
export async function GET() {
	return NextResponse.json({
		message: 'Notification API is working',
		timestamp: new Date().toISOString()
	});
}