import React from 'react';

import { Theme } from './components';
import theme from '../../../../enums/theme.enum';
import { useLanguage } from '../../../../hooks';

function SelectTheme() {
  const languages = useLanguage('welcomeView.selectTheme');

  return (
    <div className='select-theme row'>
      <h1 className='col-12 text-center'>{languages.title}</h1>
      {Object.keys(theme).map((theme) => (
        <Theme key={theme} theme={theme} />
      ))}
    </div>
  );
}

export default SelectTheme;
