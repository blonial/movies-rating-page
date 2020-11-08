export const userRatingsActions = {
  setUserRating: 'userRating/userRating/set',
  resetUserRatings: 'userRatings/reset',
};

export const setUserRating = (movieId, rating) => (dispatch) =>
  dispatch({
    type: userRatingsActions.setUserRating,
    payload: { movieId, rating },
  });

export const resetUserRatings = () => (dispatch) =>
  dispatch({ type: userRatingsActions.resetUserRatings });
