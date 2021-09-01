import React from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';
import MainLayout from './src/UI/layouts/MainLayout';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Messages from './screens/Messages';
import PlaceOffer from './screens/PlaceOffer';
import Favorites from './screens/Favorites';
import Registration from './screens/Registration';
import Login from './screens/Login';

const Stack = createStackNavigator();

const Screens = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerMode: 'float',
            headerStatusBarHeight: 12,
            headerStyle: {backgroundColor: 'yellow'},
            cardStyleInterpolator:
              Platform.OS === 'ios'
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forScaleFromCenterAndroid,
            cardStyle: {backgroundColor: '#fff'},
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Messages"
            component={Messages}
            options={{title: 'Сообщения'}}
          />
          <Stack.Screen
            name="PlaceOffer"
            component={PlaceOffer}
            options={{title: 'Новое объявление'}}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{title: 'Избранное'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{title: 'Профиль'}}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{title: 'Регистрация'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Войти'}}
          />
        </Stack.Navigator>
      </MainLayout>
    </NavigationContainer>
  );
};
export default Screens;
