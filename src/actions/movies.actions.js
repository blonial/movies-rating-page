export const moviesActions = {
  initializeMovies: 'movies/movies/initialize',
  resetMovies: 'userRatings/reset',
};

export const initializeMovies = () => (dispatch) =>
  dispatch({
    type: moviesActions.initializeMovies,
  });

export const resetMovies = () => (dispatch) =>
  dispatch({ type: moviesActions.resetMovies });
