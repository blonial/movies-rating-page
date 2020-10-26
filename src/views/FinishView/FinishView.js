import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { resetViewType } from '../../actions/viewType.actions';
import { resetRatingMovie } from '../../actions/ratingMovie.actions';
import { resetUser } from '../../actions/user.actions';

import { useLanguage } from '../../hooks';

function FinishView() {
  const dispatch = useDispatch();
  const language = useLanguage('finishView');

  const reset = useCallback(() => {
    resetViewType()(dispatch);
    resetUser()(dispatch);
    resetRatingMovie()(dispatch);
  }, [dispatch]);

  return (
    <div>
      {language.title}
      <button onClick={reset}>{language.button}</button>
    </div>
  );
}

export default FinishView;
