import { it } from './it';
import { en } from './en';
import type { Dict } from './it';
import { DEFAULT_LOCALE, type Locale } from './utils';

export type { Dict };

const dictionaries: Record<Locale, Dict> = { it, en };

export function useTranslations(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
