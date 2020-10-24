import { createStore } from 'redux';
import { noop } from 'lodash';

const store = createStore(noop);

export default store;
