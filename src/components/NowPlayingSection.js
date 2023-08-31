import React, { useState, useEffect } from "react";

const apiKey = "2ff06700c1ae087293ec8e2647b61562";
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

const NowPlayingSection = ({ addToPopular }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    fetch(nowPlayingUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNowPlayingMovies(data.results.slice(0, 10));
      })
      .catch((error) =>
        console.error("Error fetching now playing movies:", error)
      );
  }, []);

  return (
    <div className="now-playing-section">
      <h2>Now Playing</h2>
      <div className="movie-list">
        {nowPlayingMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="Movie Poster"
            />
            <h3>{movie.title}</h3>
            <button onClick={() => addToPopular(movie)}>Add to Popular</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlayingSection;
