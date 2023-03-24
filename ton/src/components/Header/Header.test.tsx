import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { Header } from './Header';
import { theme } from '../../global';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

describe('Behavior Header', () => {
  const screenRender = () => (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Header amountCart={2} title="Header" />
      </NavigationContainer>
    </ThemeProvider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('should render Header with amountCard', () => {
    const { getByTestId } = render(screenRender());

    const amount = getByTestId('amountCart_testID');

    expect(amount.props.children).toEqual('2');
  });
});
