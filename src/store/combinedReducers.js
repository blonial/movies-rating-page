import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from '../reducers/user.reducer';
import viewTypeReducer from '../reducers/viewType.reducer';
import ratingMovieReducer from '../reducers/ratingMovie.reducer';
import languageReducer from '../reducers/language.reducer';
import userRatingsReducer from '../reducers/userRatings.reducer';
import moviesReducer from '../reducers/movies.reducer';

const combinedReducers = combineReducers({
  form: formReducer,
  user: userReducer,
  viewType: viewTypeReducer,
  ratingMovie: ratingMovieReducer,
  language: languageReducer,
  userRatings: userRatingsReducer,
  movies: moviesReducer,
});

export default combinedReducers;
