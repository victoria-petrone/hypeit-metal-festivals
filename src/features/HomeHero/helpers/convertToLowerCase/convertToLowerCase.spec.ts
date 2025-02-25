import { convertToLowerCase } from './convertToLowerCase';

describe('When convertToLowerCase is called,', () => {
  it('Then it should convert uppercase string to lowercase', () => {
    expect(convertToLowerCase('HELLO')).toBe('hello');
  });

  it('Then it should keep lowercase string unchanged', () => {
    expect(convertToLowerCase('hello')).toBe('hello');
  });

  it('Then it should convert mixed case string to lowercase', () => {
    expect(convertToLowerCase('HeLLo WoRLD')).toBe('hello world');
  });

  it('Then it should handle empty string', () => {
    expect(convertToLowerCase('')).toBe('');
  });

  it('Then it should handle special characters and numbers', () => {
    expect(convertToLowerCase('1234!@#HELLO')).toBe('1234!@#hello');
  });
});
