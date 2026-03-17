import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ko|zh|es|fr|de|ja|pt|ar|hi)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
