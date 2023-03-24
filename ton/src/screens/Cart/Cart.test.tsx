import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Cart } from './Cart';

import { theme } from '../../global';
import { Provider } from 'react-redux';
import store from '../../store';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

const stateCart = {
  cart: {
    data: [
      {
        id: 'T1',
        title: 'T1 Brother',
        thumbnail:
          'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-1',
        price: 118.8,
      },
      {
        id: 'T1_CHIP',
        title: 'T1 Chip Brother',
        thumbnail:
          'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-chip-1',
        price: 190.8,
      },
    ],
  },
};

const MOCK_CART_STORE = {
  ...store,
  getState: () => stateCart,
};

describe('Behavior Cart', () => {
  const screenRender = () => (
    <Provider store={MOCK_CART_STORE}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Cart />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });
});
