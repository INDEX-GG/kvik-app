import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Child } from '../../../types/types';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: '100%',
		height: '100%',
	}
});

const MainLayout = ({ children }: Child) => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.wrapper}>
				{children}
			</SafeAreaView>
		</SafeAreaProvider>

	);
};

export default MainLayout;