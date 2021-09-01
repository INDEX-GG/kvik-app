import {ReactElement} from 'react';

export interface Child {
  children: ReactElement;
}

export interface themeShema {
  bg: '#fff' | '#000';
  bg2: '#fff' | '#2c2c2c';
  text: '#000' | '#fff';
  prime: '#00a0ab';
  second: '#8f8f8f' | '#e9e9e9';
  highlight: '#E9E9E9' | '#5a5a5a';
}
