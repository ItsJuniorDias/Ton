import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Button } from './Button';
import { theme } from '../../global';

jest.mock('react-native-iphone-x-helper', () => ({
  isIphoneX: jest.fn(),
}));

describe('Behavior Button', () => {
  const screenRender = (
    <ThemeProvider theme={theme}>
      <Button title="Pedir agora" />
    </ThemeProvider>
  );

  it('render snapshot', () => {
    const result = render(screenRender).toJSON();

    expect(result).toMatchSnapshot();
  });
  it('should render button', () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId('button_testID');

    expect(button).toBeTruthy();
  });
});
