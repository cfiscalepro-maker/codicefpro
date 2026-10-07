import { describe, it, expect } from 'vitest';
import { parseConsent, serializeConsent, CONSENT_TTL_MS } from '../src/lib/consent';
describe('consent storage', () => {
  const now = 1_800_000_000_000;
  it('round trips accept and reject', () => {
    expect(parseConsent(serializeConsent(true, now), now)?.analytics).toBe(true);
    expect(parseConsent(serializeConsent(false, now), now)?.analytics).toBe(false);
  });
  it('expires after 6 months', () => {
    expect(parseConsent(serializeConsent(true, now), now + CONSENT_TTL_MS + 1)).toBeNull();
    expect(parseConsent(serializeConsent(true, now), now + CONSENT_TTL_MS - 1)).not.toBeNull();
  });
  it('treats missing, corrupt or future data as no choice', () => {
    expect(parseConsent(null, now)).toBeNull();
    expect(parseConsent('{bad', now)).toBeNull();
    expect(parseConsent('{"v":1,"analytics":"yes","ts":1}', now)).toBeNull();
    expect(parseConsent(serializeConsent(true, now + 10 * 864e5), now)).toBeNull();
  });
});
