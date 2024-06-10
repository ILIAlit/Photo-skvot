import { NextRequest, NextResponse } from 'next/server'
import { PRIVATE_PAGES } from './config/private-pages-url.config'
import { PUBLIC_PAGES } from './config/public-pages-url.config'
import { decodeToken, removeTokenStorage } from './services/auth-token.service'
import { UserRole } from './types/user.types'
const { LOGIN, REGISTRATION } = PUBLIC_PAGES

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const token = cookies.get('token')
	const adminPage = url.includes(PRIVATE_PAGES.ADMIN)
	const loginPage = url.includes(PUBLIC_PAGES.LOGIN)
	const registrationPage = url.includes(PUBLIC_PAGES.REGISTRATION)

	if ((loginPage || registrationPage) && token) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, url))
	}

	if (loginPage || registrationPage) {
		return NextResponse.next()
	}

	if (!token) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.LOGIN, url))
	}

	const tokenDecode = decodeToken(token.value)

	if (tokenDecode.isBaned) {
		removeTokenStorage()
		return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, url))
	}

	if (tokenDecode.role !== UserRole.Admin && adminPage) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.NOT_FOUND, url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/auth/:path*',
		'/post/create-post',
		'/education',
		'/user/profile',
		'/admin/:path*',
	],
}
