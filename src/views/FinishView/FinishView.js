import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { resetViewType } from '../../actions/viewType.actions';
import { resetRatingMovie } from '../../actions/ratingMovie.actions';
import { resetUser } from '../../actions/user.actions';

function FinishView() {
  const dispatch = useDispatch();

  const reset = useCallback(() => {
    resetViewType()(dispatch);
    resetUser()(dispatch);
    resetRatingMovie()(dispatch);
  }, [dispatch]);

  return (
    <div>
      FinishView
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default FinishView;
