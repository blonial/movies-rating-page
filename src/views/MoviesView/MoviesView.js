import React from 'react';

import { MovieDetails, Rating, Navigation } from './components';

import './style.scss';

function MoviesView() {
  return (
    <section className='movies-view container'>
      <MovieDetails />
      <Rating />
      <Navigation />
    </section>
  );
}

export default MoviesView;
