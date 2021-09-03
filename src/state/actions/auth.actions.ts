import {AuthData} from '../../../screens/Login';
import {AUTH_ERROR, SIGN_IN, SIGN_OUT} from '../../constants';
import {getDataByPost} from '../../lib/fetch';
import {ActionAuth, AuthModel} from '../reducers/authReducer';

export const signIn = (
  authData: AuthData,
): ((dispatch: (arg0: ActionAuth) => void) => Promise<void>) => {
  const auth2app = async (dispatch: (arg0: ActionAuth) => void) => {
    const res: AuthModel = await getDataByPost('/api/checkUser', authData);
    if (res.isset === false) {
      dispatch({type: AUTH_ERROR, error: true});
    } else {
      dispatch({type: SIGN_IN, idUser: res.idUser});
    }
  };
  return auth2app;
};

export const signOut = (): ActionAuth => {
  return {
    type: SIGN_OUT,
  };
};
