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

describe('Behavior Cart', () => {
  const screenRender = () => (
    <Provider store={store}>
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
