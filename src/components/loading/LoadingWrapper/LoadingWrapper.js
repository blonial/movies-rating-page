import React from 'react';
import { string, bool, node } from 'prop-types';
import { isNil } from 'lodash';

function LoadingWrapper({ fetching, error, children }) {
  return fetching ? (
    <div>Loading...</div>
  ) : (
    <>
      {children}
      {!isNil(error) && <div className='text-danger'>{error}</div>}
    </>
  );
}

LoadingWrapper.propTypes = {
  children: node,
  fetching: bool,
  error: string,
};

export default LoadingWrapper;
