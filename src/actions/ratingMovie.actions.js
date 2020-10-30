import Axios from 'axios';

import {
  MOVIES_API,
  MOVIES_API_TOKEN,
  VOTE_API,
} from '../config/variables.config';

export const ratingMovieActions = {
  setRatingMovieId: 'ratingMovie/ratingMovieId/set',
  resetRatingMoview: 'ratingMovie/reset',
};

export const setRatingMovieId = (ratingMovieId) => (dispatch) =>
  dispatch({
    type: ratingMovieActions.setRatingMovieId,
    payload: ratingMovieId,
  });

export const resetRatingMovie = () => (dispatch) =>
  dispatch({ type: ratingMovieActions.resetRatingMoview });

export const getRatingMovieData = (movieId, language) =>
  Axios.get(`${MOVIES_API}/movie/${movieId}?language=${language}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${MOVIES_API_TOKEN}`,
    },
  });

export const rateMovie = (movieId, rating, token) =>
  Axios.get(`${VOTE_API}/votes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      movieId,
      grade: rating,
    },
  });
