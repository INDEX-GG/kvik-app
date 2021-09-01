import React from 'react';
import ThemeProvider from './src/state/context/ThemeCtx';
import {Provider as StoreProvider} from 'react-redux';
import Screens from './Screens';
import store from './src/state/store';

const App = (): JSX.Element => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Screens />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
