import { createStore as createReduxStore } from 'redux';
import { persistStore } from 'redux-persist';

import combinedReducers from './combinedReducers';

function createStore() {
  const store = createReduxStore(combinedReducers);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default createStore;
