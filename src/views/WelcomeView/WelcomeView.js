import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import viewType from '../../enums/viewType.enum';
import { setViewType } from '../../actions/viewType.actions';

function WelcomeView() {
  const dispatch = useDispatch();

  const changeViewToMoviesView = useCallback(() => {
    setViewType(viewType.moviesView)(dispatch);
  }, [dispatch]);

  return (
    <div>
      WelcomeView
      <button onClick={changeViewToMoviesView}>
        Change view to moview view
      </button>
    </div>
  );
}

export default WelcomeView;
