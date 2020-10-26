import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import language from '../enums/language.enum';
import { languageActions } from '../actions/language.actions';

const initialState = { language: language.pl };

function languageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case languageActions.setLanguage:
      return { ...state, language: payload };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'language',
  storage,
};

export default persistReducer(persistConfig, languageReducer);
