export const languageActions = {
  setLanguage: 'language/language/set',
};

export const setLanguage = (language) => (dispatch) =>
  dispatch({ type: languageActions.setLanguage, payload: language });
