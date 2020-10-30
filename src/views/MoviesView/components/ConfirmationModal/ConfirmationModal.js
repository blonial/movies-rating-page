import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';

import { useLanguage } from '../../../../hooks';
import { confirmUserRatings } from '../../../../actions/user.actions';
import { setViewType } from '../../../../actions/viewType.actions';
import { getUserToken } from '../../../../selectors/user.selectors';
import viewType from '../../../../enums/viewType.enum';

function ConfirmationModal() {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const language = useLanguage('moviesView.confirmationModal');

  const token = useSelector(getUserToken);

  const handleClick = useCallback(() => {
    const confirmRatings = async () => {
      try {
        setFetching(true);
        await confirmUserRatings(token);
        setError(null);
        $('#confirmationModal').modal('hide');
        setViewType(viewType.finishView);
      } catch (error) {
        //eslint-disable-next-line
        console.debug(error);
        setError(language.confirmingError);
      } finally {
        setFetching(false);
      }
    };

    confirmRatings();
  }, [language, token]);

  return (
    <div
      id='confirmationModal'
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
              className='btn btn-primary'
              disabled={fetching}
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
            {error && <div className='text-danger'>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
