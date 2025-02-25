import { act, renderHook } from '@testing-library/react';
import { useCount } from './useCount';

describe('When useCount is called.', () => {
  it('Then the initial value is 0.', () => {
    const { result } = renderHook(() => useCount());
    expect(result.current.value).toBe(0);
  });

  describe('The the convert function is called', () => {
    it('Then the value is incremented by 1.', () => {
      const { result } = renderHook(() => useCount());

      act(() => {
        result.current.convert();
      });

      expect(result.current.value).toBe(1);
    });
  });
});
