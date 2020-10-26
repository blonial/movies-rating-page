import React from 'react';
import { useSelector } from 'react-redux';
import { node } from 'prop-types';

import { getLanguage } from '../../selectors/language.selectors';
import languagesData from '../../config/languages.config';
import LanguageContext from '../../contexts/Language.context';

function LanguageProviderHoc({ children }) {
  const language = useSelector(getLanguage);

  return (
    <LanguageContext.Provider
      value={{
        data: languagesData[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProviderHoc.propTypes = {
  children: node.isRequired,
};

export default LanguageProviderHoc;
