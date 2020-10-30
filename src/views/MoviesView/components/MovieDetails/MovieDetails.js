import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get, isNil } from 'lodash';

import { getLanguage } from '../../../../selectors/language.selectors';
import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { getRatingMovieData } from '../../../../actions/ratingMovie.actions';
import { LoadingWrapper } from '../../../../components/loading';
import moviesData from '../../../../data/movies.data';
import { useLanguage } from '../../../../hooks';

function MovieDetails() {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const language = useLanguage('moviesView.movieDetails');

  const selectedLanguage = useSelector(getLanguage);
  const ratingMovieId = useSelector(getRatingMovieId);

  useEffect(() => {
    const fetchMovieData = async () => {
      setFetching(true);
      try {
        const tmdbId = moviesData[ratingMovieId - 1].tmdbId;
        const data = await getRatingMovieData(tmdbId, selectedLanguage);
        setData(get(data, 'data'));
        setError(null);
      } catch (error) {
        // eslint-disable-next-line
        console.debug(error);
        setData(null);
        setError(language.fetchingError);
      } finally {
        setFetching(false);
      }
    };

    fetchMovieData();
  }, [
    setFetching,
    setData,
    setError,
    ratingMovieId,
    selectedLanguage,
    language,
  ]);

  return (
    <div className='movie-details'>
      <span>{ratingMovieId} / 200</span>
      <LoadingWrapper fetching={fetching} error={error}>
        {isNil(data) ? null : (
          <div className='details'>
            <h1>{data.title}</h1>
            <h4>{data.release_date}</h4>
          </div>
        )}
      </LoadingWrapper>
    </div>
  );
}

export default MovieDetails;
