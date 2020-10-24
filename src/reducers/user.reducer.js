import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { token: null };

function userReducer(state = initialState) {
  return state;
}

const persistConfig = {
  key: 'user',
  storage,
};

export default persistReducer(persistConfig, userReducer);
