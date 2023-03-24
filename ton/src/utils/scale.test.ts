import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { scale } from './scale';

jest.mock('react-native-iphone-x-helper', () => ({
  isIphoneX: jest.fn(),
}));

describe('Behavior scale', () => {
  it('should return value function scale', () => {
    const { result } = renderHook(() => scale(32));

    expect(result.current).toBe('63px');
  });
});
