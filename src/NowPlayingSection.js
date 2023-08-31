import React, { useState, useEffect } from "react";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmYwNjcwMGMxYWUwODcyOTNlYzhlMjY0N2I2MTU2MiIsInN1YiI6IjY0ZjExYTE2Y2FhNTA4MDEyYjA2NzdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xFNrjC_DfBsPzxp8iasOvI3snCv2U3G1EI0g6ZbWlnk";
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

const NowPlayingSection = ({ addToPopular }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    fetch(nowPlayingUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiKey
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setNowPlayingMovies(data.results);
      })
      .catch((error) =>
        console.error("Error fetching now playing movies:", error)
      );
  }, []);

  return (
    <div clasName="now-playing-section">
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
