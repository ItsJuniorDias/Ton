import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { ProductCard } from './ProductCard';
import { theme } from '../../global';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

describe('Behavior ProductCard', () => {
  const props = {
    id: 'T1',
    title: 'T1 Brother',
    thumbnail:
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-1',
    price: 118.8,
  };

  const screenRender = () => (
    <ThemeProvider theme={theme}>
      <ProductCard {...props} />
    </ThemeProvider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('should render ProductCard', () => {
    const { getByTestId } = render(screenRender());

    const containerCard = getByTestId('containerCard_testID');

    expect(containerCard).toBeTruthy();
  });
});
