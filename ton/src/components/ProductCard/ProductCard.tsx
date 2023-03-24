import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { useAppDispatch } from '../../hooks';
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
};

export const ProductCard = ({ id, title, thumbnail, price }: ProductCard) => {
  const [isDelete, setIsDelete] = useState(false);

  const testIDs = useRef({
    container: 'containerCard_testID',
    buttonAdd: 'buttonAdd_testID',
    buttonDelete: 'buttonDelete_testID',
  }).current;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    setIsDelete(true);

    dispatch(
      addProductToCart({
        id,
        title,
        thumbnail,
        price,
      })
    );
  };

  const handleDelete = () => {
    setIsDelete(false);

    dispatch(
      deleteProductFromCart({
        id,
      })
    );
  };

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

      {isDelete && (
        <Button
          testID={testIDs.buttonDelete}
          isDelete
          onPress={handleDelete}
          title="Remover"
        />
      )}

      {!isDelete && (
        <Button
          testID={testIDs.buttonAdd}
          onPress={handleAddToCart}
          title="Pedir agora"
        />
      )}
    </Container>
  );
};
