import {combineReducers} from 'redux';
import authReducer, {AuthModel} from './authReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export interface rootModel {
  auth: AuthModel;
  user: string;
  posts: string;
}

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
