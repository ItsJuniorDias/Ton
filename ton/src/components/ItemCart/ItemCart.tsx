import React, { useRef } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../global';
import { useAppDispatch } from '../../hooks';
import { deleteProductFromCart } from '../../store/modules/cart';

import { CartProduct, Thumbnail, TitleProduct, ContentImage } from './styles';

type ItemCartProps = {
  id: string;
  title: string;
  thumbnail: string;
};

export const ItemCart = ({ id, title, thumbnail }: ItemCartProps) => {
  const dispatch = useAppDispatch();

  const testIDs = useRef({
    pressable: 'pressableItemCart_testID',
  }).current;

  return (
    <CartProduct>
      <ContentImage>
        <Thumbnail source={{ uri: thumbnail }} resizeMode="contain" />

        <TitleProduct>{title}</TitleProduct>
      </ContentImage>

      <Pressable
        testID={testIDs.pressable}
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
};
