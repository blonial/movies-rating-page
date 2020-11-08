import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';

import { useLanguage } from '../../../../hooks';
import { resetUser } from '../../../../actions/user.actions';
import { resetViewType } from '../../../../actions/viewType.actions';
import { resetRatingMovie } from '../../../../actions/ratingMovie.actions';
import { resetUserRatings } from '../../../../actions/userRatings.actions';
import { resetMovies } from '../../../../actions/movies.actions';

function AbortRatingModal() {
  const dispatch = useDispatch();

  const language = useLanguage('moviesView.abortRatingModal');

  const handleClick = useCallback(() => {
    $('#abortRatingModal').modal('hide');
    resetViewType()(dispatch);
    resetUser()(dispatch);
    resetRatingMovie()(dispatch);
    resetUserRatings()(dispatch);
    resetMovies()(dispatch);
  }, [dispatch]);

  return (
    <div
      id='abortRatingModal'
      className='modal fade'
      tabIndex='-1'
      role='dialog'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{language.title}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>{language.body}</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={handleClick}
            >
              {language.save}
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              {language.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbortRatingModal;
