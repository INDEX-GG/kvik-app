import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useBottomNav} from '../src/state/context/BottomNavigationCtx';

const Profile = (): JSX.Element => {
  const {setRoute} = useBottomNav();
  useFocusEffect(() => {
    setRoute('Profile');
  });
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
