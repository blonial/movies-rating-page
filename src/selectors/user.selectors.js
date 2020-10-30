import { get } from 'lodash';

export const getUserToken = (state) => get(state, 'user.token');
export const getUserNick = (state) => get(state, 'user.nick');
export const getUserConfirmationMode = (state) =>
  get(state, 'user.confirmationMode');
