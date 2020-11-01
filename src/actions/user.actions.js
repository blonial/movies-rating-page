import Axios from 'axios';

import { VOTE_API } from '../config/variables.config';

export const userActions = {
  setUserToken: 'user/token/set',
  setUserNick: 'user/nick/set',
  setUserConfirmationMode: 'user/confirmationMode/set',
  resetUser: 'user/reset',
};

export const setUserToken = (token) => (dispatch) =>
  dispatch({ type: userActions.setUserToken, payload: token });

export const setUserNick = (nick) => (dispatch) =>
  dispatch({ type: userActions.setUserNick, payload: nick });

export const setUserConfirmationMode = (confimationMode) => (dispatch) =>
  dispatch({
    type: userActions.setUserConfirmationMode,
    payload: confimationMode,
  });

export const resetUser = () => (dispatch) =>
  dispatch({ type: userActions.resetUser });

export const createUserSession = (nick) =>
  Axios.post(`${VOTE_API}/sessions`, {
    nickname: nick,
  });

export const confirmUserRatings = (token) =>
  Axios.post(`${VOTE_API}/confirmations`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
