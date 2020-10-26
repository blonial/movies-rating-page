import { get } from 'lodash';

export const getLanguage = (state) => get(state, 'language.language');
