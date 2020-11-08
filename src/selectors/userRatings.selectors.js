import { get } from 'lodash';

export const getUserRatings = (state) => get(state, 'userRatings.userRatings');
