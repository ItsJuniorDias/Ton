import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import { formatCurrency } from '../../utils';

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
};

export const ProductCard = ({ id, title, thumbnail, price }: ProductCard) => {
  const testIDs = useRef({
    container: 'containerCard_testID',
  }).current;

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

      <Button title="Pedir agora" />
    </Container>
  );
};
