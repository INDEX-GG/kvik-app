import {GET_USER} from '../../constants';

export interface FavoritesTypes {
  post_id: number;
  comment: string;
  condition: boolean;
}

export interface UserModel {
  about: string | null;
  createdAt: Date;
  email: string | null;
  favorites: FavoritesTypes[];
  name: string;
  phone: string;
  raiting: number | null;
  subscriptions: '[]' | string; //типизировать в функции getUser
  userPhoto: string | undefined;
}

export interface ActionUser {
  type: string;
  user: UserModel;
}

const initialState = {} as UserModel;

const userReducer = (state = initialState, action: ActionUser): UserModel => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
