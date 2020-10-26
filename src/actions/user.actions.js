export const userActions = {
  setUserToken: 'user/token/set',
  setUserNick: 'user/nick/set',
  resetUser: 'user/reset',
};

export const setUserToken = (token) => (dispatch) =>
  dispatch({ type: userActions.setUserToken, payload: token });

export const setUserNick = (nick) => (dispatch) =>
  dispatch({ type: userActions.setUserToken, payload: nick });

export const resetUser = () => (dispatch) =>
  dispatch({ type: userActions.resetUser });
