import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return(
    <div className="titleMovie">
    <h1>Movie List</h1>
      <div className="movieList">
        {movies.map(movie => (
        <Movie 
          name={movie.name} 
          price={movie.price} 
          key={movie.id} 
          id={movie.id}
        />
        ))}
      </div>
    </div>
    
  );
}
 
export default MovieList
