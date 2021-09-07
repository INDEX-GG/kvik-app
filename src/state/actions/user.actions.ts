import {GET_USER} from '../../constants';
import {getDataByPost, getUser} from '../../lib/fetch';
import {ActionUser, FavoritesTypes} from '../reducers/userReducer';

export interface postLikeComment extends FavoritesTypes {
  userId: string | number;
}

export interface sendLikeComment {
  userId: string;
  post_id: string;
  comment: string;
  condition: string;
}

export const getUserData = (
  id: number,
): ((dispatch: (arg0: ActionUser) => void) => Promise<void>) => {
  const queryUser = async (dispatch: (arg0: ActionUser) => void) => {
    const userData = await getUser(id);
    dispatch({type: GET_USER, user: userData});
  };
  return queryUser;
};

export const setLikeAndComment = ({
  userId,
  post_id,
  comment,
  condition,
}: postLikeComment) => {
  const sendData = {
    userId: `${userId}`,
    post_id: `${post_id}`,
    comment: `${comment}`,
    condition: `${condition}`,
  };
  const LikeComment = async dispatch => {
    const res = await getDataByPost('/api/favorites', sendData);
  };
  return LikeComment;
};
