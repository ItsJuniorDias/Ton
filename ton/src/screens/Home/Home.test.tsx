import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './Home';

import { theme } from '../../global';
import { Provider } from 'react-redux';
import store from '../../store';

const RESPONSE = {
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
    {
      id: 'T2',
      title: 'T2+ Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t2-1',
      price: 310.8,
    },
    {
      id: 'T3',
      title: 'T3 Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t3-1',
      price: 418.8,
    },
  ],
};

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
}));

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn().mockResolvedValue(RESPONSE),
  })),
}));

describe('Behavior Home', () => {
  const screenRender = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });
});
