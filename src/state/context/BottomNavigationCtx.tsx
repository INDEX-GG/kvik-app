import React, {createContext, useContext, useState} from 'react';
import {Child} from '../../../types/types';

export interface BottomNavTypes {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}

const bottomNavCtx = createContext({} as BottomNavTypes);

export const useBottomNav = (): BottomNavTypes => useContext(bottomNavCtx);

const BottomNavigationCtx = ({children}: Child): JSX.Element => {
  const [route, setRoute] = useState('Home');

  return (
    <bottomNavCtx.Provider value={{route, setRoute}}>
      {children}
    </bottomNavCtx.Provider>
  );
};

export default BottomNavigationCtx;
