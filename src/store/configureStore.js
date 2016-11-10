import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default configureStore = (initialState) => {

  const middlewares = [];

  // development only middlewares 
  if (__DEV__) {
    middlewares.push(createLogger());
  }

  const enhancers = compose(
    applyMiddleware(...middlewares)
  );

  return createStore(rootReducer, initialState, enhancers);
}
