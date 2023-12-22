import { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const locales = ['ru', 'kz', 'en'];

function getLocale(request: NextRequest): string {
	const pathnameParts = request.nextUrl.pathname.split('/').filter(Boolean);
  const pathLocale = pathnameParts[0];

	console.log(pathLocale);

  if (pathLocale && locales.includes(pathLocale)) {
    return pathLocale;
  }

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

	if (pathname.includes('.')) {
		return;
	}

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
