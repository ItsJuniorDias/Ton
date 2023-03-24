import React from 'react';
import {
  CompositeScreenProps,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Cart } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
