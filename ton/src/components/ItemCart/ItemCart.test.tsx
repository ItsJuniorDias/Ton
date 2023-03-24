import 'jest-styled-components';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { ItemCart } from './ItemCart';
import { theme } from '../../global';
import store from '../../store';
import { Provider } from 'react-redux';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

describe('Behavior ItemCart', () => {
  const props = {
    id: 'T1',
    title: 'T1 Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-1',
  };

  const screenRender = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ItemCart {...props} />
      </ThemeProvider>
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('should call function onPress button pressable', () => {
    const { getByTestId } = render(screenRender());

    const pressable = getByTestId('pressableItemCart_testID');

    fireEvent.press(pressable);

    expect(pressable).toBeTruthy();
  });
});
