import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'ducks/reducers';

let middleware = [];
// $FlowIgnore
if (__DEBUG__) {
  // $FlowIgnore
  const createLogger = require('redux-logger');
  middleware = [...middleware, createLogger({
    collapsed: true,
  })];
}

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState: Object): Object {
  const store = finalCreateStore(reducers, initialState);
  if (__DEV__ && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('ducks/reducers', () => {
      const nextRootReducer = require('ducks/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
