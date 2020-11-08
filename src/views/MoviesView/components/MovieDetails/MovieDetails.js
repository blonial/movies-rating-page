import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get, isNil, isEmpty } from 'lodash';
import Flag from 'react-world-flags';

import { getLanguage } from '../../../../selectors/language.selectors';
import { getRatingMovieId } from '../../../../selectors/ratingMovie.selectors';
import { getMovies } from '../../../../selectors/movies.selectors';
import { getRatingMovieData } from '../../../../actions/ratingMovie.actions';
import { LoadingWrapper } from '../../../../components/loading';
import { useLanguage } from '../../../../hooks';

function MovieDetails() {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const language = useLanguage('moviesView.movieDetails');

  const selectedLanguage = useSelector(getLanguage);
  const ratingMovieId = useSelector(getRatingMovieId);
  const movies = useSelector(getMovies);

  useEffect(() => {
    const fetchMovieData = async () => {
      setFetching(true);
      try {
        const tmdbId = movies[ratingMovieId - 1].tmdbId;
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
    movies,
  ]);

  return (
    <div className='movie-details'>
      <LoadingWrapper fetching={fetching} error={error}>
        {isNil(data) ? null : (
          <div className='details'>
            <div className='d-flex my-3'>
              <img
                className='poster mr-5'
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
              <div>
                <h1>{data.title}</h1>
                <h4>{data.release_date.split('-').reverse().join('-')}</h4>
                <span className='d-none d-md-block mt-3'>{data.tagline}</span>
              </div>
            </div>
            <h5>{language.overview}</h5>
            <span>{data.overview}</span>
            <hr />
            {!isEmpty(data.production_countries) && (
              <>
                <h5>{language.country}</h5>
                <div className='d-flex'>
                  {data.production_countries.map((country) => (
                    <Flag
                      key={country.iso_3166_1}
                      height={32}
                      code={country.iso_3166_1}
                      className='mr-3'
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </LoadingWrapper>
    </div>
  );
}

export default MovieDetails;
