import {ReactElement} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

export interface Child {
  children: ReactElement;
}

export type RootStackParamList = {
  Home: undefined;
  Messages: undefined;
  PlaceOffer: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type HomeScreenProp = StackNavigationProp<
  RootStackParamList,
  'Messages'
>;

export interface themeShema {
  bg: '#fff' | '#000';
  bg2: '#fff' | '#2c2c2c';
  text: '#000' | '#fff';
  prime: '#00a0ab';
  second: '#8f8f8f' | '#e9e9e9';
  highlight: '#E9E9E9' | '#5a5a5a';
  yellow: '#fff6a5';
}
