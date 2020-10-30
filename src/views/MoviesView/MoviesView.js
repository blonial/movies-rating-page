import React from 'react';

import {
  MovieDetails,
  Rating,
  Navigation,
  ConfirmationModal,
} from './components';

import './style.scss';

function MoviesView() {
  return (
    <section className='movies-view container'>
      <MovieDetails />
      <Rating />
      <Navigation />
      <ConfirmationModal />
    </section>
  );
}

export default MoviesView;
