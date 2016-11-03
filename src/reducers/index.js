import { combineReducers } from 'redux';
import users from './users';
import navigation, { navigationParams } from './navigation';

const rootReducer = combineReducers({
  users,
  navigation,
  navigationParams,
});

export default rootReducer;
