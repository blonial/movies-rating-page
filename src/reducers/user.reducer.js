import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userActions } from '../actions/user.actions';

const initialState = { token: null, nick: null, confirmationMode: false };

function userReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case userActions.setUserToken:
      return { ...state, token: payload };
    case userActions.setUserNick:
      return { ...state, nick: payload };
    case userActions.setUserConfirmationMode:
      return { ...state, confirmationMode: payload };
    case userActions.resetUser:
      return { ...initialState };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'user',
  storage,
};

export default persistReducer(persistConfig, userReducer);
