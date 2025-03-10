import { formatDate } from './formatDate';

describe('formatDate', () => {
  expect(formatDate('2025-06-06T00:00:00Z')).toBe('June 6, 2025');
});

it('returns "Invalid date" for an invalid date string', () => {
  expect(formatDate('invalid-date')).toBe('Invalid Date');
});

it('returns "Invalid date" for null', () => {
  expect(formatDate(null)).toBe('N/A');
});

it('returns "Invalid date" for undefined', () => {
  expect(formatDate(undefined as unknown as string)).toBe('N/A');
});
