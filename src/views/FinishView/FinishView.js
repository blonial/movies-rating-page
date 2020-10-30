import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetViewType } from '../../actions/viewType.actions';
import { resetRatingMovie } from '../../actions/ratingMovie.actions';
import { resetUser } from '../../actions/user.actions';
import { getUserNick } from '../../selectors/user.selectors';

import { useLanguage } from '../../hooks';

function FinishView() {
  const dispatch = useDispatch();
  const language = useLanguage('finishView');

  const nick = useSelector(getUserNick);

  const reset = useCallback(() => {
    resetViewType()(dispatch);
    resetUser()(dispatch);
    resetRatingMovie()(dispatch);
  }, [dispatch]);

  return (
    <div className='finish-view container d-flex flex-column justify-content-center'>
      <h1 className='text-center'>
        {language.thanks} {nick}!
      </h1>
      <span
        className='text-center'
        dangerouslySetInnerHTML={{ __html: language.description }}
      />
      <button onClick={reset}>{language.rateAgain}</button>
    </div>
  );
}

export default FinishView;
