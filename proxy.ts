import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	if (req.nextUrl.pathname.startsWith('/api/') && req.nextUrl.pathname !== '/api/health') {
		const authHeader = req.headers.get('authorization');
		const expected = `Bearer ${process.env.CONSOLE_API_KEY}`;

		if (!authHeader || authHeader !== expected) {
			return NextResponse.json(
				{ code: 'UNAUTHORIZED', message: 'Missing or invalid API key' },
				{ status: 401 }
			);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/api/:path*'
};