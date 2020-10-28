import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bool } from 'prop-types';

import { useLanguage } from '../../../../hooks';
import { CheckboxField, InputField } from '../../../../components/forms';
import { setViewType } from '../../../../actions/viewType.actions';
import viewType from '../../../../enums/viewType.enum';

function EnterNick({ submitting }) {
  const language = useLanguage('welcomeView.enterNick');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (/*values*/) => {
      // TODO: API request to get token
      setViewType(viewType.moviesView)(dispatch);
    },
    [dispatch]
  );

  return (
    <div className='enter-nick row'>
      <form
        className='enter-nick-form col-12 d-flex flex-column'
        onSubmit={handleSubmit}
      >
        <Field
          name='nick'
          component={InputField}
          placeholder='Nick'
          label={language.enterNick}
        />
        <Field
          name='confirmationMode'
          component={CheckboxField}
          label={language.confirmationMode}
        />
        <button
          type='submit'
          dangerouslySetInnerHTML={{ __html: language.submitButton }}
          disabled={submitting}
        />
      </form>
    </div>
  );
}

EnterNick.propTypes = {
  submitting: bool.isRequired,
};

export default reduxForm({ form: 'userDetails' })(EnterNick);
