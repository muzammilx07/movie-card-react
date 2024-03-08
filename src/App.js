
import React from 'react';
import MovieCard from './MovieCard';
import './App.css';
import moviesData from './moviesData.json';

const App = () => {
  return (
    <div className="app">
      {moviesData.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
