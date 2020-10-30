import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactRating from 'react-rating';
import Icon from 'react-icons-kit';
import { star } from 'react-icons-kit/fa/star';
import { starO } from 'react-icons-kit/fa/starO';

import { useLanguage } from '../../../../hooks';
import { getUserConfirmationMode } from '../../../../selectors/user.selectors';
import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { setRatingMovieId } from '../../../../actions/ratingMovie.actions';
import { setViewType } from '../../../../actions/viewType.actions';
import key from '../../../../enums/key.enum';
import viewType from '../../../../enums/viewType.enum';

const FullSymbol = <Icon icon={star} size={36} />;
const EmptySymbol = <Icon icon={starO} size={36} />;

function Rating() {
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();

  const language = useLanguage('moviesView.rating');

  const confirmationMode = useSelector(getUserConfirmationMode);
  const ratingMovieId = useSelector(getRatingMovieId);

  const handleConfirm = useCallback(
    (/*value*/) => {
      // TODO: Api request to save rating, REMEMBER! value - 1
      const nextRatingMovie = ratingMovieId + 1;
      if (nextRatingMovie > 200) {
        // TODO: Show confirmation modal
        setViewType(viewType.finishView)(dispatch);
      } else {
        setRatingMovieId(nextRatingMovie)(dispatch);
      }
    },
    [dispatch, ratingMovieId]
  );

  const handleConfirmConfirmationMode = useCallback(() => {
    setRating((rating) => {
      if (rating !== 0) {
        handleConfirm(rating);
      }
      return 0;
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
    <div className='rating d-flex flex-column justify-content-center'>
      <div className='d-flex justify-content-center'>
        <ReactRating
          fullSymbol={FullSymbol}
          emptySymbol={EmptySymbol}
          initialRating={rating}
          onChange={handleChange}
          start={0}
          stop={6}
        />
        {confirmationMode && (
          <button
            onClick={handleConfirmConfirmationMode}
            disabled={rating === 0}
          >
            {language.confirmButton}
          </button>
        )}
      </div>
      <button onClick={handleNeverSeenThisMovie}>
        {language.neverSeenThisMovie}
      </button>
    </div>
  );
}

export default Rating;
