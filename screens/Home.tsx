import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useBottomNav} from '../src/state/context/BottomNavigationCtx';
import {useTheme} from '../src/state/context/ThemeCtx';
import {useSelector} from 'react-redux';
import {rootModel} from '../src/state/reducers/rootReducer';

const Home = (): JSX.Element => {
  const theme = useTheme();
  const data = useSelector((state: rootModel) => state.posts);
  console.log(data);
  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      minHeight: '100%',
      backgroundColor: theme.bg,
    },
  });
  const {setRoute} = useBottomNav();
  useFocusEffect(() => {
    setRoute('Home');
  });
  return (
    <ScrollView style={styles.wrapper}>
      <Text>Home</Text>
      {data?.map((offer, i) => (
        <Text key={i}>{offer.title}</Text>
      ))}
    </ScrollView>
  );
};

export default Home;
