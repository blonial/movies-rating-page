import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import viewType from '../../enums/viewType.enum';
import { setViewType } from '../../actions/viewType.actions';

import { useLanguage } from '../../hooks';

function MoviesView() {
  const dispatch = useDispatch();
  const language = useLanguage('moviesView');

  const changeViewToFinishView = useCallback(() => {
    setViewType(viewType.finishView)(dispatch);
  }, [dispatch]);

  return (
    <div>
      {language.title}
      <button onClick={changeViewToFinishView}>{language.button}</button>
    </div>
  );
}

export default MoviesView;
