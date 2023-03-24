import React from 'react';
import { FlatList } from 'react-native';
import { Header, ItemCart } from '../../components';
import { useAppSelector } from '../../hooks';

import { Content } from './styles';

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <Header title="Cart" amountCart={cart.data.length} isGoBack />

      <Content>
        <FlatList
          data={cart.data}
          renderItem={({ item }) => <ItemCart {...item} />}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </>
  );
};
