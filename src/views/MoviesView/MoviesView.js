import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import viewType from '../../enums/viewType.enum';
import { setViewType } from '../../actions/viewType.actions';

function MoviesView() {
  const dispatch = useDispatch();

  const changeViewToFinishView = useCallback(() => {
    setViewType(viewType.finishView)(dispatch);
  }, [dispatch]);

  return (
    <div>
      MoviesView
      <button onClick={changeViewToFinishView}>
        Change view to finish view
      </button>
    </div>
  );
}

export default MoviesView;
