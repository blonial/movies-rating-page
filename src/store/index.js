import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import combinedReducers from './combinedReducers';

function createStore() {
  const store = createReduxStore(combinedReducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
}

export default createStore;
