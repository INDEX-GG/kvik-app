import React, { ReactElement } from 'react';
import ThemeProvider from './src/state/context/ThemeCtx';
import { Provider as StoreProvider } from 'react-redux';
import Screens from './Screens';
import store from './src/state/store';
import MainLayout from './src/UI/layouts/MainLayout';

const App = (): ReactElement => {
	return (
		<StoreProvider store={store}>
			<ThemeProvider>
				<Screens />
			</ThemeProvider>
		</StoreProvider>
	)
}

export default App;
