import { combineReducers } from 'redux';

import userReducer from '../reducers/user.reducer';
import viewTypeReducer from '../reducers/viewType.reducer';
import ratingMovieReducer from '../reducers/ratingMovie.reducer';
import languageReducer from '../reducers/language.reducer';
import themeReducer from '../reducers/theme.reducer';

const combinedReducers = combineReducers({
  user: userReducer,
  viewType: viewTypeReducer,
  ratingMovie: ratingMovieReducer,
  language: languageReducer,
  theme: themeReducer,
});

export default combinedReducers;
