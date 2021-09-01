import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import { Platform } from 'react-native';
import MainLayout from './src/UI/layouts/MainLayout';
import Home from './screens/Home';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

const Screens = () => {
	
	return (
		<NavigationContainer>
			<MainLayout>
				<Stack.Navigator
					initialRouteName={'Home'}
					screenOptions={{
						headerMode: 'float',
						headerStatusBarHeight: 12,
						headerStyle: {backgroundColor: 'yellow'},
						cardStyleInterpolator: Platform.OS === 'ios' ? CardStyleInterpolators.forHorizontalIOS : CardStyleInterpolators.forScaleFromCenterAndroid,
						cardStyle: { backgroundColor: '#fff' },
						// header: () => <Header/>
					}}
				>
					<Stack.Screen name='Home'component={Home} options={{title: 'home', /* headerShown: false */}}/>
					<Stack.Screen name='Profile' component={Profile} options={{title: 'profile'}}/>
				</Stack.Navigator>
			</MainLayout>
		</NavigationContainer>
	);
};
export default Screens;