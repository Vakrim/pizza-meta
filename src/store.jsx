/* @flow */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

function configureStore(initialState) {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducer
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore();
