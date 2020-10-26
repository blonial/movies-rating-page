import { compose } from 'redux';
import { decode } from 'querystring';
import { get } from 'lodash';

import { NODE_ENV } from '../config/variables.config';
import nodeEnv from '../enums/nodeEnv.enum';

function getComposeEnhancers() {
  if (
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    const enableReduxDevTools = get(
      decode(window.location.search.substr(1)),
      'enableReduxDevTools'
    );
    if (NODE_ENV !== nodeEnv.production || enableReduxDevTools === 'true') {
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return compose;
}

export default getComposeEnhancers;
