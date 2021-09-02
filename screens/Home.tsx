import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {useBottomNav} from '../src/state/context/BottomNavigationCtx';
import KvikIcons from '../src/UI/KvikIcons';
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
      <KvikIcons color="#00a0ab" name="logo" size={40} />
      <KvikIcons color="#00a0ab" name="load" size={40} />
    </View>
  );
};

export default Home;
