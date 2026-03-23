import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix
});

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
