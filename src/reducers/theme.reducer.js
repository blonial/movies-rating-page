import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import theme from '../enums/theme.enum';
import { themeActions } from '../actions/theme.actions';

const initialState = { theme: theme.dark };

function themeReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case themeActions.setTheme:
      return { ...state, theme: payload };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'theme',
  storage,
};

export default persistReducer(persistConfig, themeReducer);
