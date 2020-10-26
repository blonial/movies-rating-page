import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import viewType from '../enums/viewType.enum';
import { viewTypeActions } from '../actions/viewType.actions';

const initialState = { viewType: viewType.welcomeView };

function viewTypeReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case viewTypeActions.setViewType:
      return { ...state, viewType: payload };
    case viewTypeActions.resetViewType:
      return { ...initialState };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'viewType',
  storage,
};

export default persistReducer(persistConfig, viewTypeReducer);
