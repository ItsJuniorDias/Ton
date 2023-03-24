import 'jest-styled-components';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { ProductCard } from './ProductCard';
import { theme } from '../../global';
import store from '../../store';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductCard {...props} />
      </ThemeProvider>
    </Provider>
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

  it('should call function handleAddToCart and handleDelete', () => {
    const { getByTestId } = render(screenRender());

    const button = getByTestId('buttonAdd_testID');

    fireEvent.press(button);

    const buttonDelete = getByTestId('buttonDelete_testID');

    fireEvent.press(buttonDelete);

    expect(button).toBeTruthy();
    expect(buttonDelete).toBeTruthy();
  });
});
