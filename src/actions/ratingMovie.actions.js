import Axios from 'axios';

import { VOTE_API } from '../config/variables.config';

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
  Axios.get(`${VOTE_API}/movies/${movieId}?lang=${language}`);

export const rateMovie = (movieId, rating, token) =>
  Axios.post(
    `${VOTE_API}/votes`,
    { movieId, grade: rating },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
