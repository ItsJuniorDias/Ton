import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { formatCurrency } from './formatCurrency';

describe('Behavior formatCurrency', () => {
  it('should return value function formatCurrency', () => {
    const { result } = renderHook(() => formatCurrency(75));

    expect(typeof result.current).toBe('string');
  });
});
