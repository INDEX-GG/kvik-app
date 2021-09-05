import {AuthData} from '../../../screens/Login';
import {AUTH_ERROR, SIGN_IN, SIGN_OUT} from '../../constants';
import {getDataByPost} from '../../lib/fetch';
import {ActionAuth, AuthModel} from '../reducers/authReducer';
import * as Keychain from 'react-native-keychain';

export const signIn = (
  authData: AuthData,
): ((dispatch: (arg0: ActionAuth) => void) => Promise<void>) => {
  const auth2app = async (dispatch: (arg0: ActionAuth) => void) => {
    const res: AuthModel = await getDataByPost('/api/checkUser', authData);
    if (res.isset === false) {
      dispatch({type: AUTH_ERROR, error: true});
    } else {
      if (res.idUser !== undefined) {
        const id = `${res.idUser}`;
        Keychain.setGenericPassword(id, id);
        dispatch({type: SIGN_IN, idUser: id});
      }
    }
  };
  return auth2app;
};

export const getUserId = (): ((
  dispatch: (arg0: ActionAuth) => void,
) => Promise<void>) => {
  const getFromKeychain = async (dispatch: (arg0: ActionAuth) => void) => {
    const session = await Keychain.getGenericPassword();
    if (session) {
      dispatch({type: SIGN_IN, idUser: session.username});
    } else {
      dispatch({type: SIGN_OUT});
    }
  };
  return getFromKeychain;
};

export const signOut = (): ((
  dispatch: (arg0: ActionAuth) => void,
) => Promise<void>) => {
  const removeId = async (dispatch: (arg0: ActionAuth) => void) => {
    await Keychain.resetGenericPassword();
    dispatch({type: SIGN_OUT});
  };
  return removeId;
};
