import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';

import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { setRatingMovieId } from '../../../../actions/ratingMovie.actions';
import { useLanguage } from '../../../../hooks';

function Navigation() {
  const language = useLanguage('moviesView.navigation');

  const dispatch = useDispatch();

  const ratingMovieId = useSelector(getRatingMovieId);

  const handleClick = useCallback(() => {
    setRatingMovieId(ratingMovieId - 1)(dispatch);
  }, [dispatch, ratingMovieId]);

  return ratingMovieId === 1 ? null : (
    <div>
      <span className='navigate-back text-warning' onClick={handleClick}>
        <Icon icon={arrowCircleLeft} size={24} /> {language.back}
      </span>
      <span className='ml-5'>{ratingMovieId} / 200</span>
    </div>
  );
}

export default Navigation;
