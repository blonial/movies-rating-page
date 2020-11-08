import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userRatingsActions } from '../actions/userRatings.actions';

const initialState = { userRatings: [] };

function userRatingsReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case userRatingsActions.setUserRating:
      state.userRatings[payload.movieId] = payload.rating;
      return { ...state };
    case userRatingsActions.resetUserRatings:
      return { userRatings: [] };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'userRatings',
  storage,
};

export default persistReducer(persistConfig, userRatingsReducer);
