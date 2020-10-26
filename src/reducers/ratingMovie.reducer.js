import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ratingMovieActions } from '../actions/ratingMovie.actions';

const initialState = { id: 1 };

function ratingMovieReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case ratingMovieActions.setRatingMovie:
      return { ...state, viewType: payload };
    case ratingMovieActions.resetRatingMoview:
      return { ...initialState };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'ratingMovie',
  storage,
};

export default persistReducer(persistConfig, ratingMovieReducer);
