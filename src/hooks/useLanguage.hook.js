import { useContext } from 'react';
import { get } from 'lodash';

import LanguageContext from '../contexts/Language.context';

function useLanguage(langPath) {
  const language = useContext(LanguageContext);

  return get(language, `data.${langPath}`, {});
}

export default useLanguage;
