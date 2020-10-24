import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import getComposeEnhancers from './composeEnhancers';
import combinedReducers from './combinedReducers';

const composeEnhancers = getComposeEnhancers();

function createStore() {
  const store = createReduxStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
}

export default createStore;
