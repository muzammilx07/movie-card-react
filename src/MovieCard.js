// MovieCard.js
import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  const { id, title, imageURL, releaseYear, duration, genres, description, backgroundimage } = props.movie;

  return (
    <div className="movie-card">
      <div className='main-card'>
        <div className='image-tile'>
        <img src={imageURL} alt={title} className="movie-image" />
        <div className="movie-details-up">
          <h2>{title}</h2>
          <p>{releaseYear}</p>
          <div className='movies-details-tile-down'>
            <p><strong>Duration:</strong> {duration} minutes</p>
            <p><strong>Genres:</strong> {genres.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className='description'>
        <p><strong>Description:</strong> {description}</p>
      </div></div>
      <img src={backgroundimage} alt={title} className="bg-image" />
    </div>
  );
};

export default MovieCard;
