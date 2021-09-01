import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import KvikIcons from '../src/UI/KvikIcons';

const Home = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
      <KvikIcons name="logo" size={40} />
      <KvikIcons name="load" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
