import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {phoneFormat} from '../src/lib/phoneFormat';
import {signIn} from '../src/state/actions/auth.actions';
import {useTheme} from '../src/state/context/ThemeCtx';
import {rootModel} from '../src/state/reducers/rootReducer';
import KvikButton from '../src/UI/KvikButton';

export interface AuthData {
  phone: string;
  password: string;
}

const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [visible, setVisible] = useState(true);
  const theme = useTheme();
  const themes = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.bg,
    },
    input: {
      borderColor: theme.second,
    },
    text: {
      color: theme.text,
    },
  });

  const handleLogin = () => {
    if (phone.length === 0) {
      setPhoneError('Введите номер');
    } else if (password.length === 0) {
      setPasswordError('Введите пароль');
    } else {
      dispatch(signIn({phone: `+${phone.replace(/\D/g, '')}`, password}));
    }
  };
  const {isset} = useSelector((state: rootModel) => state.auth);

  useEffect(() => {
    if (isset) {
      setPasswordError('Неверные данные');
    }
  }, [isset]);

  return (
    <View style={[themes.wrapper, styles.wrapper]}>
      <Input
        containerStyle={styles.container}
        inputContainerStyle={[themes.input, styles.input]}
        inputStyle={themes.text}
        placeholder="+7 (999) 777-77-77"
        maxLength={18}
        placeholderTextColor={theme.second}
        value={phone}
        onChangeText={text => setPhone(phoneFormat(text))}
        errorMessage={phoneError}
        leftIcon={
          <Icon name="phone" type="entypo" color={theme.prime} size={24} />
        }
      />
      <Input
        containerStyle={styles.container}
        inputContainerStyle={[themes.input, styles.input]}
        placeholder="Пароль"
        placeholderTextColor={theme.second}
        value={password}
        secureTextEntry={visible}
        onChangeText={text => setPassword(text)}
        errorMessage={passwordError}
        leftIcon={
          <Icon name="lock" type="entypo" color={theme.prime} size={24} />
        }
        rightIcon={
          <Icon
            onPress={() => setVisible(p => !p)}
            name={visible ? 'eye' : 'eye-with-line'}
            color={theme.second}
            type="entypo"
          />
        }
      />
      <KvikButton onPress={() => handleLogin()} title="Войти" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 32,
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: 0,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 4,
  },
});

export default Login;
