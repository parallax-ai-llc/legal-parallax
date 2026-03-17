export const locales = ['en', 'ko', 'zh', 'es', 'fr', 'de', 'ja', 'pt', 'ar', 'hi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
