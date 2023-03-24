import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchProducts } from './useFetchProducts';

const RESPONSE = [
  {
    id: 'T1',
    title: 'T1 Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-1',
    price: 118.8,
  },
  {
    id: 'T1_CHIP',
    title: 'T1 Chip Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-chip-1',
    price: 190.8,
  },
  {
    id: 'T2',
    title: 'T2+ Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t2-1',
    price: 310.8,
  },
  {
    id: 'T3',
    title: 'T3 Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t3-1',
    price: 418.8,
  },
];

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn().mockResolvedValue(RESPONSE),
  })),
}));
jest.mock('react-native-iphone-x-helper', () => ({
  isIphoneX: jest.fn(),
}));

describe('Behavior useFetchProducts', () => {
  it('should call hook default case useFetchProducts', () => {
    const { result } = renderHook(() => useFetchProducts());

    result.current.dispatchDataProducts({
      type: '',
      payload: {},
    });

    const { data } = result.current.dataProducts;

    expect(data).toEqual([]);
  });
});
