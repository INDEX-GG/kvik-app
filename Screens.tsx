import React from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators
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
import {useTheme} from './src/state/context/ThemeCtx';

const Stack = createStackNavigator();

const Screens = (): JSX.Element => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerMode: 'float',
            headerStatusBarHeight: 0,
            headerStyle: {backgroundColor: theme.bg, height: 56},
            headerTitleStyle: {color: theme.text},
            headerTintColor: theme.text,
            headerBackTitleVisible: false,
            cardStyleInterpolator:
              Platform.OS === 'ios'
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forScaleFromCenterAndroid,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
            }}
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
