import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import getComposeEnhancers from './composeEnhancers';
import combinedReducers from './combinedReducers';

import ReduxPersistCrosstabSync from '../middlewares/ReduxPersistCrosstabSync';
import crosstabConfig from './crosstabConfig';

const composeEnhancers = getComposeEnhancers();

function createStore() {
  const store = createReduxStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  ReduxPersistCrosstabSync(store, crosstabConfig);
  return { store, persistor };
}

export default createStore;
