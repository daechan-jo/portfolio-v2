// pages/api/notify-visit.ts
import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

interface VisitData {
	page: string;
	userAgent: string;
	timestamp: string;
}

interface ApiResponse {
	success?: boolean;
	error?: string;
	message?: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	if (req.method !== 'POST') {
		return res.status(405).json({message: 'Method not allowed'});
	}

	const {page, userAgent, timestamp}: VisitData = req.body;

	// 메일 전송 설정
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: 'daechan476@gmail.com',
			subject: '🎯 포트폴리오 방문자 알림!',
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">새로운 방문자!</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>📅 방문 시간:</strong> ${new Date(timestamp).toLocaleString('ko-KR')}</p>
            <p><strong>📍 페이지:</strong> ${page}</p>
            <p><strong>🌐 브라우저:</strong> ${userAgent}</p>
            <p><strong>📍 IP:</strong> ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
          </div>
        </div>
      `,
		});

		res.status(200).json({success: true});
	} catch (error) {
		console.error('메일 전송 실패:', error);
		res.status(500).json({error: '메일 전송 실패'});
	}
}