import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components';
import { useAppSelector } from '../../hooks';

import { Content } from './styles';

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <Header title="Cart" amountCart={cart.data.length} isGoBack />

      <Content />
    </>
  );
};
