import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bool, func } from 'prop-types';
import { get } from 'lodash';

import { useLanguage } from '../../../../hooks';
import { CheckboxField, InputField } from '../../../../components/forms';
import { setViewType } from '../../../../actions/viewType.actions';
import {
  setUserNick,
  setUserConfirmationMode,
  createUserSession,
  setUserToken,
} from '../../../../actions/user.actions';
import viewType from '../../../../enums/viewType.enum';

function EnterNick({ submitting, handleSubmit }) {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const language = useLanguage('welcomeView.enterNick');
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) =>
      handleSubmit((values) => {
        const submit = async () => {
          const { nick, confirmationMode = false } = values;
          try {
            setFetching(true);
            const response = await createUserSession(nick);
            const token = get(response, 'data.token');
            await Promise.all([
              setUserToken(token)(dispatch),
              setUserNick(nick)(dispatch),
              setUserConfirmationMode(confirmationMode)(dispatch),
            ]);
            setViewType(viewType.moviesView)(dispatch);
            setError(null);
          } catch (error) {
            //eslint-disable-next-line
            console.debug(error);
            setError(language.fetchingError);
          } finally {
            setFetching(false);
          }
        };

        return submit();
      })(e),
    [dispatch, handleSubmit, language]
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
          disabled={submitting || fetching}
        />
        {error && <div className='text-danger'>{error}</div>}
      </form>
    </div>
  );
}

EnterNick.propTypes = {
  submitting: bool.isRequired,
  handleSubmit: func.isRequired,
};

export default reduxForm({ form: 'userDetails' })(EnterNick);
