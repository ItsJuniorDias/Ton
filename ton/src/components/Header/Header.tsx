import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme, shadowStyles } from '../../global';

import {
  Container,
  Title,
  FakeView,
  Notification,
  NotificationValue,
} from './styles';

export const Header = () => {
  return (
    <Container
      style={{
        ...shadowStyles,
      }}
    >
      <FakeView />

      <Title>Home</Title>

      <View>
        <Icon
          name="shopping-cart"
          size={RFValue(28)}
          color={theme.colors.primary}
        />

        <Notification>
          <NotificationValue>2</NotificationValue>
        </Notification>
      </View>
    </Container>
  );
};
