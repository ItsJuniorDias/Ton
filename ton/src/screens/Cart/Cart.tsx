import React from 'react';
import { FlatList, View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../../components';
import { theme } from '../../global';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { scale } from '../../utils';

import { deleteProductFromCart } from '../../store/modules/cart';

import {
  Content,
  CartProduct,
  Thumbnail,
  TitleProduct,
  ContentImage,
} from './styles';

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const ItemCart = ({ id, title, thumbnail, price }) => (
    <CartProduct>
      <ContentImage>
        <Thumbnail source={{ uri: thumbnail }} resizeMode="contain" />

        <TitleProduct>{title}</TitleProduct>
      </ContentImage>

      <Pressable
        onPress={() =>
          dispatch(
            deleteProductFromCart({
              id,
            })
          )
        }
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Icon name="highlight-remove" size={28} color={theme.colors.alert} />
      </Pressable>
    </CartProduct>
  );

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
