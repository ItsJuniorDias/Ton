import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme, shadowStyles } from '../../global';
import { scale } from '../../utils';

import {
  Container,
  Title,
  FakeView,
  Notification,
  NotificationValue,
} from './styles';

export const Header = () => {
  return (
    <Container>
      <FakeView />

      <Title>Home</Title>

      <View>
        <Icon name="shopping-cart" size={28} color={theme.colors.primary} />

        <Notification>
          <NotificationValue>2</NotificationValue>
        </Notification>
      </View>
    </Container>
  );
};
