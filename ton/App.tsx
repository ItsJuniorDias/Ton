import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global';

import { Provider } from 'react-redux';
import store from './src/store';

import { Home } from './src/screens';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
