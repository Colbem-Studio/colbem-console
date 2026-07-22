import { NextResponse } from 'next/server';

export function apiError(status: number, code: string, message: string) {
	return NextResponse.json({ code, message }, { status });
}

export function apiSuccess<T>(data: T, status = 200) {
	return NextResponse.json(data, { status });
}