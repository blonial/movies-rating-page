import { get } from 'lodash';

export const getMovies = (state) => get(state, 'movies.movies');
