import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { formatCurrency } from '../../utils';
import {
  addProductToCart,
  deleteProductFromCart,
} from '../../store/modules/cart';

import {
  Container,
  Thumbnail,
  Title,
  Price,
  PriceDivided,
  Installments,
} from './styles';

type ProductCard = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  intoToCart: boolean;
};

export const ProductCard = ({
  id,
  title,
  thumbnail,
  price,
  intoToCart,
}: ProductCard) => {
  const testIDs = useRef({
    container: 'containerCard_testID',
    buttonAdd: 'buttonAdd_testID',
    buttonDelete: 'buttonDelete_testID',
  }).current;

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addProductToCart({
        id,
        title,
        thumbnail,
        price,
        intoToCart: true,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteProductFromCart({
        id,
      })
    );
  };

  const itemIntoToCart = cart.data.find((item) => item.id === id);

  return (
    <Container testID={testIDs.container} key={id}>
      <Thumbnail source={{ uri: thumbnail }} resizeMode="contain" />

      <Title numberOfLines={1}>{title}</Title>

      <View>
        <Price>{formatCurrency(price)}</Price>

        <Installments>
          <Installments>12x </Installments>
          <PriceDivided>{formatCurrency(price / 12)}</PriceDivided>
        </Installments>
      </View>

      {itemIntoToCart?.intoToCart && (
        <Button
          testID={testIDs.buttonDelete}
          isDelete
          onPress={handleDelete}
          title="Remover"
        />
      )}

      {!itemIntoToCart?.intoToCart && (
        <Button
          testID={testIDs.buttonAdd}
          onPress={handleAddToCart}
          title="Pedir agora"
        />
      )}
    </Container>
  );
};
