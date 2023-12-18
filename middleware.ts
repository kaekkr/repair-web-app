import { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const locales = ['ru', 'kz', 'en'];

function getLocale(request: NextRequest): string {
	const headers = {
		'accept-language': request.headers.get(
			'accept-language'
		)!,
	};
	const languages = new Negotiator({
		headers,
	}).languages();
	const matchedLocale = match(
		languages,
		locales,
		'ru'
	);

	return matchedLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		locale =>
			pathname.startsWith(`/${locale}/`) ||
			pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;

	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next).*)'],
};
