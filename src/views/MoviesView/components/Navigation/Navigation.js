import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isNil } from 'lodash';
import Icon from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';
import { arrowCircleRight } from 'react-icons-kit/fa/arrowCircleRight';

import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { getUserRatings } from '../../../../selectors/userRatings.selectors';
import { setRatingMovieId } from '../../../../actions/ratingMovie.actions';
import { useLanguage } from '../../../../hooks';

function Navigation() {
  const language = useLanguage('moviesView.navigation');

  const dispatch = useDispatch();

  const ratingMovieId = useSelector(getRatingMovieId);
  const userRatings = useSelector(getUserRatings);

  const handleClickBack = useCallback(() => {
    setRatingMovieId(ratingMovieId - 1)(dispatch);
  }, [dispatch, ratingMovieId]);

  const handleClickNext = useCallback(() => {
    setRatingMovieId(ratingMovieId + 1)(dispatch);
  }, [dispatch, ratingMovieId]);

  const isMovieRated = useMemo(() => {
    return !isNil(userRatings[ratingMovieId]);
  }, [userRatings, ratingMovieId]);

  return (
    <div className='d-flex justify-content-between'>
      {ratingMovieId !== 1 ? (
        <span className='navigate-back text-warning' onClick={handleClickBack}>
          <Icon icon={arrowCircleLeft} size={28} /> {language.previous}
        </span>
      ) : (
        <div />
      )}
      <span className='ml-5'>{ratingMovieId} / 200</span>
      {isMovieRated && ratingMovieId !== 200 ? (
        <span className='navigate-next text-warning' onClick={handleClickNext}>
          {language.next} <Icon icon={arrowCircleRight} size={28} />
        </span>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Navigation;
