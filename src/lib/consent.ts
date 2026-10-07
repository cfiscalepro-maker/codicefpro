export const GA_ID = 'G-8GHY9P65L6';
export const CONSENT_KEY = 'cf-consent';
/** A stored choice (accept or reject) is honoured for 6 months, then the banner returns. */
export const CONSENT_TTL_MS = 180 * 24 * 60 * 60 * 1000;

export interface Consent { v: 1; analytics: boolean; ts: number }

export function serializeConsent(analytics: boolean, now = Date.now()): string {
  return JSON.stringify({ v: 1, analytics, ts: now } satisfies Consent);
}

/** Returns null when nothing valid is stored or the choice has expired. */
export function parseConsent(raw: string | null, now = Date.now()): Consent | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Partial<Consent>;
    if (c.v !== 1 || typeof c.analytics !== 'boolean' || typeof c.ts !== 'number') return null;
    if (now - c.ts > CONSENT_TTL_MS || c.ts > now + 60_000) return null;
    return c as Consent;
  } catch { return null; }
}
