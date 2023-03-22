import React, { useRef } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../global';

import {
  Container,
  Title,
  FakeView,
  Notification,
  NotificationValue,
} from './styles';

type HeaderProps = {
  title: string;
  amountCart: number;
};

export const Header = ({ title, amountCart }: HeaderProps) => {
  const testIDs = useRef({
    amount: 'amountCart_testID',
  }).current;

  return (
    <Container>
      <FakeView />

      <Title>{title}</Title>

      <View>
        <Icon name="shopping-cart" size={28} color={theme.colors.primary} />

        <Notification>
          <NotificationValue testID={testIDs.amount}>
            {amountCart.toString()}
          </NotificationValue>
        </Notification>
      </View>
    </Container>
  );
};
