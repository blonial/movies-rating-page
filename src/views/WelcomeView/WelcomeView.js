import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import viewType from '../../enums/viewType.enum';
import { setViewType } from '../../actions/viewType.actions';

import { useLanguage } from '../../hooks';

function WelcomeView() {
  const dispatch = useDispatch();
  const language = useLanguage('welcomeView');

  const changeViewToMoviesView = useCallback(() => {
    setViewType(viewType.moviesView)(dispatch);
  }, [dispatch]);

  return (
    <div>
      {language.title}
      <button onClick={changeViewToMoviesView}>{language.button}</button>
    </div>
  );
}

export default WelcomeView;
