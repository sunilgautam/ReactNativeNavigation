import { combineReducers } from 'redux';
import users from './users';
import navigation from './navigation';

const rootReducer = combineReducers({
  users,
  navigation,
});

export default rootReducer;
