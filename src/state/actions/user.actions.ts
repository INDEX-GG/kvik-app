import {GET_USER} from '../../constants';
import {getUser} from '../../lib/fetch';
import {ActionUser} from '../reducers/userReducer';

export const getUserData = (
  id: number,
): ((dispatch: (arg0: ActionUser) => void) => Promise<void>) => {
  const queryUser = async (dispatch: (arg0: ActionUser) => void) => {
    const userData = await getUser(id);
    dispatch({type: GET_USER, user: userData});
  };
  return queryUser;
};
