import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { shuffle } from 'lodash';

import { moviesActions } from '../actions/movies.actions';
import moviesData from '../data/movies.data';

const initialState = { movies: [] };

function moviesReducer(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case moviesActions.initializeMovies:
      return {
        ...state,
        movies: shuffle(
          moviesData.map((movie, index) => ({
            tmdbId: movie.tmdbId,
            id: index,
          }))
        ),
      };
    case moviesActions.resetMovies:
      return { ...initialState };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'movies',
  storage,
};

export default persistReducer(persistConfig, moviesReducer);
