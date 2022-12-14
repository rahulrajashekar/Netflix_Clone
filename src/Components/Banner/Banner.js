import React, { useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { API_KEY } from '../Config/apiKeys';
import { imageURL } from '../Config/apiKeys';
import axios from '../Config/axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ''})`,
      }}
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
