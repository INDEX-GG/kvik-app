import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {useTheme} from '../state/context/ThemeCtx';
import KvikIcons from '../UI/KvikIcons';
import {HomeScreenProp} from '../../types/types';
import {useBottomNav} from '../state/context/BottomNavigationCtx';

const BottomNavigation = (): JSX.Element => {
  const nav = useNavigation<HomeScreenProp>();
  const {route} = useBottomNav();

  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 68,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      backgroundColor: theme.bg,
      elevation: 25,
      shadowOffset: {width: 0, height: -15},
      shadowOpacity: 0.05,
      shadowColor: '#000',
      shadowRadius: 7,
    },
    button: {
      width: '20%',
      height: '100%',
      paddingBottom: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    text: {
      fontSize: 11,
      fontWeight: '400',
      color: theme.second,
    },
    textHl: {
      fontSize: 11,
      fontWeight: '400',
      color: theme.prime,
    },
    avatar: {
      backgroundColor: route === 'Profile' ? theme.prime : theme.second,
      width: 32,
      height: 32,
    },
  });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate('Home')}>
        <KvikIcons
          name="logo"
          size={32}
          color={route === 'Home' ? theme.prime : theme.second}
        />
        <Text style={route === 'Home' ? styles.textHl : styles.text}>
          Поиск
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate('Messages')}>
        <KvikIcons
          name="message"
          size={32}
          color={route === 'Messages' ? theme.prime : theme.second}
        />
        <Text style={route === 'Messages' ? styles.textHl : styles.text}>
          Сообщения
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate('PlaceOffer')}>
        <Icon name="add-circle" color={theme.prime} size={46} />
        <Text style={route === 'PlaceOffer' ? styles.textHl : styles.text}>
          Разместить
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate('Favorites')}>
        <KvikIcons
          name="like"
          size={32}
          color={route === 'Favorites' ? theme.prime : theme.second}
        />
        <Text style={route === 'Favorites' ? styles.textHl : styles.text}>
          Избранное
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate('Profile')}>
        <Avatar
          size="small"
          rounded
          icon={{name: 'person', size: 28, color: theme.bg}}
          containerStyle={styles.avatar}
        />
        <Text style={route === 'Profile' ? styles.textHl : styles.text}>
          Профиль
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
