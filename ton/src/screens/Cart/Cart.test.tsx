import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Cart } from './Cart';

import { theme } from '../../global';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Behavior Cart', () => {
  const screenRender = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });
});
