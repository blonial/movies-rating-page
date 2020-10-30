import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bool, func } from 'prop-types';

import { useLanguage } from '../../../../hooks';
import { CheckboxField, InputField } from '../../../../components/forms';
import { setViewType } from '../../../../actions/viewType.actions';
import {
  setUserNick,
  setUserConfirmationMode,
} from '../../../../actions/user.actions';
import viewType from '../../../../enums/viewType.enum';

function EnterNick({ submitting, handleSubmit }) {
  const language = useLanguage('welcomeView.enterNick');
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) =>
      handleSubmit((values) => {
        const submit = () => {
          // TODO: API request to get token
          const { nick, confirmationMode = false } = values;
          setViewType(viewType.moviesView)(dispatch);
          setUserNick(nick)(dispatch);
          setUserConfirmationMode(confirmationMode)(dispatch);
        };

        return submit();
      })(e),
    [dispatch, handleSubmit]
  );

  return (
    <div className='enter-nick row'>
      <form
        className='enter-nick-form col-12 d-flex flex-column'
        onSubmit={onSubmit}
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
  handleSubmit: func.isRequired,
};

export default reduxForm({ form: 'userDetails' })(EnterNick);
