import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchProducts } from './useFetchProducts';

jest.mock('react-native-iphone-x-helper', () => ({
  isIphoneX: jest.fn(),
}));

describe('Behavior useFetchProducts', () => {
  it('should return data products useFetchProducts', () => {
    const { result } = renderHook(() => useFetchProducts());

    console.log(result.current, 'RESULT');

    // expect(result.current).toBe('63px');
  });
});
