import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global';

import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
