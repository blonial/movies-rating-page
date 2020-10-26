import { get } from 'lodash';

export const getRatingMovieId = (state) => get(state, 'ratingMovie.id');
