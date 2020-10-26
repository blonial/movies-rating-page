export const ratingMovieActions = {
  setRatingMovie: 'ratingMovie/ratingMovie/set',
  resetRatingMoview: 'ratingMovie/reset',
};

export const setRatingMovie = (ratingMovieId) => (dispatch) =>
  dispatch({ type: ratingMovieActions.setRatingMovie, payload: ratingMovieId });

export const resetRatingMovie = () => (dispatch) =>
  dispatch({ type: ratingMovieActions.resetRatingMoview });
