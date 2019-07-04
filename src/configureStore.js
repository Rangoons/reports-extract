import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { logger } from 'redux-logger';

const configureStore = () => {
  // logger has to be last in the chain
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
  );

  return store;
};

export default configureStore;
