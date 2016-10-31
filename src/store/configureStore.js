import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default configureStore = (initialState) => {
  const enhancers = compose(
    applyMiddleware(
      createLogger(),
    )
  );

  return createStore(rootReducer, initialState, enhancers);
}
