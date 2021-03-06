import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import ReactRating from 'react-rating';
import Icon from 'react-icons-kit';
import { star } from 'react-icons-kit/fa/star';
import { starO } from 'react-icons-kit/fa/starO';

import { useLanguage } from '../../../../hooks';
import {
  getUserConfirmationMode,
  getUserToken,
} from '../../../../selectors/user.selectors';
import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { getUserRatings } from '../../../../selectors/userRatings.selectors';
import {
  setRatingMovieId,
  rateMovie,
} from '../../../../actions/ratingMovie.actions';
import key from '../../../../enums/key.enum';
import { isNil } from 'lodash';
import { setUserRating } from '../../../../actions/userRatings.actions';
import { getMovies } from '../../../../selectors/movies.selectors';

const FullSymbol = <Icon icon={star} size={36} />;
const EmptySymbol = <Icon icon={starO} size={36} />;

function Rating() {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();

  const language = useLanguage('moviesView.rating');

  const confirmationMode = useSelector(getUserConfirmationMode);
  const token = useSelector(getUserToken);
  const ratingMovieId = useSelector(getRatingMovieId);
  const userRatings = useSelector(getUserRatings);
  const movies = useSelector(getMovies);

  const initialRating = isNil(rating)
    ? isNil(userRatings[ratingMovieId])
      ? 0
      : userRatings[ratingMovieId]
    : rating;

  const handleConfirm = useCallback(
    (value) => {
      const nextRatingMovie = ratingMovieId + 1;

      const rate = async () => {
        try {
          setFetching(true);
          await rateMovie(movies[ratingMovieId - 1].id, value - 1, token);
          setError(null);
          await setUserRating(ratingMovieId, value)(dispatch);
          if (nextRatingMovie > 200) {
            $('#confirmationModal').modal('show');
          } else {
            setRatingMovieId(nextRatingMovie)(dispatch);
          }
        } catch (error) {
          //eslint-disable-next-line
          console.debug(error);
          setError(language.ratingError);
        } finally {
          setFetching(false);
        }
      };

      if (!fetching) {
        rate();
      }
    },
    [dispatch, ratingMovieId, token, language, fetching, movies]
  );

  const handleConfirmConfirmationMode = useCallback(() => {
    setRating((rating) => {
      if (!isNil(rating)) {
        handleConfirm(rating);
      }
      return null;
    });
  }, [setRating, handleConfirm]);

  const handleChange = useCallback(
    (value) => {
      if (confirmationMode) {
        setRating(value);
      } else {
        handleConfirm(value);
      }
    },
    [setRating, handleConfirm, confirmationMode]
  );

  const handleNeverSeenThisMovie = useCallback(() => {
    handleConfirm(0);
  }, [handleConfirm]);

  useEffect(() => {
    const callback = confirmationMode ? setRating : handleConfirm;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case key.KEY_1:
          callback(1);
          break;
        case key.KEY_2:
          callback(2);
          break;
        case key.KEY_3:
          callback(3);
          break;
        case key.KEY_4:
          callback(4);
          break;
        case key.KEY_5:
          callback(5);
          break;
        case key.KEY_6:
          callback(6);
          break;
        case key.KEY_ENTER:
          handleConfirmConfirmationMode();
          break;
        case key.KEY_SPACE:
          handleNeverSeenThisMovie();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [
    handleConfirm,
    handleConfirmConfirmationMode,
    handleNeverSeenThisMovie,
    setRating,
    confirmationMode,
  ]);

  return (
    <div className='rating d-flex flex-column justify-content-center my-3'>
      <div className='d-flex justify-content-center'>
        <ReactRating
          fullSymbol={FullSymbol}
          emptySymbol={EmptySymbol}
          initialRating={initialRating}
          onChange={handleChange}
          start={0}
          stop={6}
        />
        {confirmationMode && (
          <button
            onClick={handleConfirmConfirmationMode}
            disabled={isNil(rating)}
            className='btn btn-primary ml-3'
          >
            {language.confirmButton}
          </button>
        )}
      </div>
      {error && <div className='text-danger text-center'>{error}</div>}
      <button
        className={`btn btn-warning mt-2 ${
          userRatings[ratingMovieId] === 0 ? 'never-seen' : ''
        }`}
        onClick={handleNeverSeenThisMovie}
      >
        {language.neverSeenThisMovie}
      </button>
    </div>
  );
}

export default Rating;
