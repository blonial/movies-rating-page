import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';

import { useLanguage } from '../../../../../../hooks';
import { setTheme } from '../../../../../../actions/theme.actions';
import { getTheme } from '../../../../../../selectors/theme.selectors';

function Theme({ theme }) {
  const language = useLanguage('welcomeView.selectTheme.theme');
  const dispatch = useDispatch();
  const selectedTheme = useSelector(getTheme);

  const changeTheme = useCallback(() => {
    if (selectedTheme !== theme) {
      setTheme(theme)(dispatch);
    }
  }, [dispatch, theme, selectedTheme]);

  const activeClass = useMemo(() => {
    return selectedTheme === theme ? 'active' : '';
  }, [selectedTheme, theme]);

  return (
    <div
      className={`theme col-6 d-flex flex-column justify-content-center ${activeClass}`}
      onClick={changeTheme}
    >
      <div className={`theme-img ${theme}`} />
      <span className='theme-name text-center'>{language[theme]}</span>
    </div>
  );
}

Theme.propTypes = {
  theme: string.isRequired,
};

export default Theme;
