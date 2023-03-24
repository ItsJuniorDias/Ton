import React, { useRef } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { theme } from '../../global';

import {
  Container,
  Title,
  FakeView,
  Notification,
  NotificationValue,
} from './styles';
import { RootStackParamList } from '../../routes';

type HeaderProps = {
  title: string;
  amountCart: number;
  isGoBack?: boolean;
};

export const Header = ({ title, amountCart, isGoBack }: HeaderProps) => {
  const testIDs = useRef({
    amount: 'amountCart_testID',
  }).current;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      {isGoBack ? (
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
        >
          <Icon name="arrow-back-ios" size={22} color={theme.colors.text} />
        </Pressable>
      ) : (
        <FakeView />
      )}

      <Title>{title}</Title>

      <Pressable
        onPress={() => navigation.navigate('Cart')}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Icon name="shopping-cart" size={28} color={theme.colors.primary} />

        <Notification>
          <NotificationValue testID={testIDs.amount}>
            {amountCart.toString()}
          </NotificationValue>
        </Notification>
      </Pressable>
    </Container>
  );
};
