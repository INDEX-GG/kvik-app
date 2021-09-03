import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {useBottomNav} from '../src/state/context/BottomNavigationCtx';
import {useTheme} from '../src/state/context/ThemeCtx';

const Home = (): JSX.Element => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.bg,
    },
  });
  const {setRoute} = useBottomNav();
  useFocusEffect(() => {
    setRoute('Home');
  });
  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
