import React, { useEffect, useState } from 'react';
import axios from '../Config/axios';
import { API_KEY, imageURL } from '../Config/apiKeys';
import { Carousel } from 'react-responsive-carousel';
import Youtube from 'react-youtube';
import './RowPost.css';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieID] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert('NetWork Error');
      });
  }, []);

  const opts = {
    videoId: movieId,
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const setId = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length != 0) {
          setMovieID(response.data.results[0].key);
        } else {
          setMovieID('');
          setTimeout(() => alert('Sorry! Movie Trailer not found'), 1000);
        }
      });
  };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((items) => (
          <div>
            <img
              onClick={() => setId(items.id)}
              className={!props.isSmall ? 'poster' : 'smallPoster'}
              src={`${imageURL + items.backdrop_path}`}
              alt='poster'
            />
          </div>
        ))}
      </div>
      {movieId && (
        <div className='video'>
          <span className='child'>
            <Youtube videoId={movieId} opts={opts} />
          </span>

          <span>
            <svg
              onClick={() => setMovieID('')}
              className='child'
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='close'
              width='1.3em'
              height='1.3em'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'></path>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

export default RowPost;
