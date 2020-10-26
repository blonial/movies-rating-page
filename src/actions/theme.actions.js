export const themeActions = {
  setTheme: 'theme/theme/set',
};

export const setTheme = (theme) => (dispatch) =>
  dispatch({ type: themeActions.setTheme, payload: theme });
