import React from 'react';

import {
  MovieDetails,
  Rating,
  Navigation,
  ConfirmationModal,
  Header,
  AbortRatingModal,
} from './components';

import './style.scss';

function MoviesView() {
  return (
    <section className='movies-view container card card-body bg-light mt-5'>
      <Header />
      <Navigation />
      <MovieDetails />
      <Rating />
      <ConfirmationModal />
      <AbortRatingModal />
    </section>
  );
}

export default MoviesView;
