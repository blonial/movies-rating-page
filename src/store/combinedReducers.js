import { combineReducers } from 'redux';

import userReducer from '../reducers/user.reducer';

const combinedReducers = combineReducers({
  user: userReducer,
});

export default combinedReducers;
