import 'jest-styled-components';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { Header, HeaderProps } from './Header';
import { theme } from '../../global';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

describe('Behavior Header', () => {
  const props: HeaderProps = {
    amountCart: 2,
    title: 'Home',
    isGoBack: true,
  };

  const screenRender = (props) => (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Header {...props} />
      </NavigationContainer>
    </ThemeProvider>
  );

  it('render snapshot', () => {
    const result = render(screenRender(props)).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('should render Header with amountCard', () => {
    const { getByTestId } = render(screenRender(props));

    const amount = getByTestId('amountCart_testID');

    expect(amount.props.children).toEqual('2');
  });

  it('should call render with isGoBack', () => {
    const { getByTestId } = render(screenRender(props));

    const pressable = getByTestId('pressableHeader_testID');

    fireEvent.press(pressable);

    expect(pressable).toBeTruthy();
  });

  it('should press button cart', () => {
    const { getByTestId } = render(screenRender(props));

    const pressableCart = getByTestId('pressableCart_testID');

    fireEvent.press(pressableCart);

    expect(pressableCart).toBeTruthy();
  });

  it('should render without render button back', () => {
    const result = render(
      screenRender({
        ...props,
        isGoBack: false,
      })
    );

    expect(result).toBeTruthy();
  });
});
