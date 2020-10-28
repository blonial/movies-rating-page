import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';
import Flag from 'react-world-flags';

import {
  flagsCodes,
  welcomeViewFlagSize,
} from '../../../../../../config/flags.config';
import { useLanguage } from '../../../../../../hooks';
import { setLanguage } from '../../../../../../actions/language.actions';
import { getLanguage } from '../../../../../../selectors/language.selectors';

function Language({ lang }) {
  const language = useLanguage('welcomeView.selectLanguage.language');
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(getLanguage);

  const changeLanguage = useCallback(() => {
    setLanguage(lang)(dispatch);
  }, [dispatch, lang]);

  const activeClass = useMemo(() => {
    return selectedLanguage === lang ? 'active' : '';
  }, [selectedLanguage, lang]);

  return (
    <div
      className={`language col-6 d-flex flex-column justify-content-center ${activeClass}`}
      onClick={changeLanguage}
    >
      <div className='d-flex justify-content-center'>
        <Flag
          code={flagsCodes[lang]}
          height={welcomeViewFlagSize}
          className='flag'
        />
      </div>
      <span className='language-name text-center'>{language[lang]}</span>
    </div>
  );
}

Language.propTypes = {
  lang: string.isRequired,
};

export default Language;
