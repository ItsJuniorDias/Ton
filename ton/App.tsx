import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global';

import { Home } from './src/screens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
