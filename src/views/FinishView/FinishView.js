import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetViewType } from '../../actions/viewType.actions';
import { resetRatingMovie } from '../../actions/ratingMovie.actions';
import { resetUser } from '../../actions/user.actions';
import { getUserNick } from '../../selectors/user.selectors';

import { useLanguage } from '../../hooks';

import './style.scss';

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
    <div className='finish-view d-flex flex-column justify-content-center'>
      <h1 className='thanks-text text-center mb-5'>
        {language.thanks} {nick}!
      </h1>
      <span
        className='text-center mt-5'
        dangerouslySetInnerHTML={{ __html: language.description }}
      />
      <div className='text-center mt-5'>
        <button onClick={reset} className='rate-again btn btn-primary'>
          {language.rateAgain}
        </button>
      </div>
    </div>
  );
}

export default FinishView;
