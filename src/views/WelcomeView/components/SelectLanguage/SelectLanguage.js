import React from 'react';

import { Language } from './components';
import language from '../../../../enums/language.enum';
import { useLanguage } from '../../../../hooks';

function SelectLanguage() {
  const languages = useLanguage('welcomeView.selectLanguage');

  return (
    <div className='select-language'>
      <h1 className='col-12 text-center'>{languages.title}</h1>
      <div className='d-flex justify-content-center'>
        {Object.keys(language).map((language) => (
          <Language key={language} lang={language} />
        ))}
      </div>
    </div>
  );
}

export default SelectLanguage;
