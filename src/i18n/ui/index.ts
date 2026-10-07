import type { Locale } from '../config';
import { it, type Dict } from './it';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';
import { en } from './en';
export type { Dict };
export const ui: Record<Locale, Dict> = { it, de, fr, es, en };
/** Replace {name} placeholders. */
export const fmt = (s: string, v: Record<string, string | number> = {}) => s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ''));
