import React from 'react';
import ThemeProvider from './src/state/context/ThemeCtx';
import {Provider as StoreProvider} from 'react-redux';
import Screens from './Screens';
import store from './src/state/store';
import BottomNavigationCtx from './src/state/context/BottomNavigationCtx';

const App = (): JSX.Element => {
  return (
    <StoreProvider store={store}>
      <BottomNavigationCtx>
        <ThemeProvider>
          <Screens />
        </ThemeProvider>
      </BottomNavigationCtx>
    </StoreProvider>
  );
};

export default App;
