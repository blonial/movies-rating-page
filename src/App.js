import React from 'react';
import { useSelector } from 'react-redux';

import { getViewType } from './selectors/viewType.selectors';
import viewType from './enums/viewType.enum';
import { FinishView, MoviesView, WelcomeView } from './views';

function App() {
  const selectedViewType = useSelector(getViewType);

  switch (selectedViewType) {
    case viewType.welcomeView:
      return <WelcomeView />;
    case viewType.moviesView:
      return <MoviesView />;
    case viewType.finishView:
      return <FinishView />;
    default:
      return null;
  }
}

export default App;
