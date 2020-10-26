import { get } from 'lodash';

export const getViewType = (state) => get(state, 'viewType.viewType');
