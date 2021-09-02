import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Child} from '../../../types/types';
import BottomNavigation from '../../components/BottomNavigation';
import {useTheme} from '../../state/context/ThemeCtx';

const MainLayout = ({children}: Child): JSX.Element => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: theme.bg,
    },
    root: {
      flex: 1,
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.root}>{children}</View>
        <BottomNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MainLayout;
