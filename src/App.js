import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NowPlayingSection from "./components/NowPlayingSection";
import PopularMoviesSection from "./components/PopularMoviesSection";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const addToPopular = (movie) => {
    setPopularMovies((prevPopularMovies) => [...prevPopularMovies, movie]);
  };
  const removeFromPopular = (movie) => {
    setPopularMovies((prevPopularMovies) =>
      prevPopularMovies.filter((m) => m.id !== movie.id)
    );
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/popular">Popular Movies</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<NowPlayingSection addToPopular={addToPopular} />}
          />
          <Route
            path="/popular"
            element={
              <PopularMoviesSection
                popularMovies={popularMovies}
                removeFromPopular={removeFromPopular}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
