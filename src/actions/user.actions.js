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
  dispatch({ type: userActions.setUserToken, payload: nick });

export const setUserConfirmationMode = (confimationMode) => (dispatch) =>
  dispatch({
    type: userActions.setUserConfirmationMode,
    payload: confimationMode,
  });

export const resetUser = () => (dispatch) =>
  dispatch({ type: userActions.resetUser });

export const createUserSession = (nick) =>
  Axios.get(`${VOTE_API}/sessions`, {
    method: 'POST',
    data: {
      nickname: nick,
    },
  });

export const confirmUserRatings = (token) =>
  Axios.get(`${VOTE_API}/confirmations`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
