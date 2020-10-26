import { KEY_PREFIX, REHYDRATE } from 'redux-persist/lib/constants';
import { isNil } from 'lodash';

function ReduxPersistCrosstabSync(store, crosstabConfig = {}) {
  const whitelistReducers = crosstabConfig.whitelistReducers || [];
  const keyPrefix = crosstabConfig.keyPrefix || KEY_PREFIX;

  window.addEventListener('storage', handleStorageEvent, false);

  function handleStorageEvent(e) {
    if (e.key && e.key.indexOf(keyPrefix) === 0) {
      if (e.oldValue === e.newValue) {
        return;
      }

      const key = e.key.substr(keyPrefix.length);
      const reducerConfig = whitelistReducers.find(
        (reducerConfig) => reducerConfig.key === key
      );

      if (!isNil(reducerConfig)) {
        const whitelist = reducerConfig.whitelist || null;
        const blacklist = reducerConfig.blacklist || null;

        const statePartial = JSON.parse(e.newValue);
        const state = Object.keys(statePartial).reduce((state, reducerKey) => {
          if (whitelist && whitelist.indexOf(reducerKey) === -1) {
            return state;
          }
          if (blacklist && blacklist.indexOf(reducerKey) !== -1) {
            return state;
          }

          state[reducerKey] = JSON.parse(statePartial[reducerKey]);

          return state;
        }, {});

        store.dispatch({
          key,
          payload: state,
          type: REHYDRATE,
        });
      }
    }
  }
}

export default ReduxPersistCrosstabSync;
