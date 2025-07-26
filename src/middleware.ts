import { NextRequest, NextResponse } from 'next/server';
import { TokenType } from './shared/constants';
import { PAGES_NAVIGATION } from './shared/router';

export default async function middleware(request: NextRequest) {

	const { url, cookies } = request

	const refreshToken = cookies.get(TokenType.REFRESH_TOKEN)?.value
	const isAuthPage = url.includes('authorization')

	if(isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(PAGES_NAVIGATION.MAIN, url))
	}


	return NextResponse.next()
}

export const config = {
	matcher: ['/authorization/:path*']
}