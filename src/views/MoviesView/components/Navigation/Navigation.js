import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';

import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { setRatingMovieId } from '../../../../actions/ratingMovie.actions';

function Navigation() {
  const dispatch = useDispatch();

  const ratingMovieId = useSelector(getRatingMovieId);

  const handleClick = useCallback(() => {
    setRatingMovieId(ratingMovieId - 1)(dispatch);
  }, [dispatch, ratingMovieId]);

  return ratingMovieId === 1 ? null : (
    <span className='navigate-back' onClick={handleClick}>
      <Icon icon={arrowCircleLeft} size={56} />
    </span>
  );
}

export default Navigation;
