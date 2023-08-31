import React from "react";

const PopularMoviesSection = ({ popularMovies, removeFromPopular }) => {
  const handleRemoveClick = (movie) => {
    removeFromPopular(movie);
  };

  return (
    <div className="popular-movies-section">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="Movie Poster"
            />
            <h3>{movie.title}</h3>
            <button onClick={() => handleRemoveClick(movie)}>
              Remove from Popular
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMoviesSection;
