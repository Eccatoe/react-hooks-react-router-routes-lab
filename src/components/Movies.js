import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItem = movies.map((movie) => {
    const runHr = Math.floor(movie.time / 60);
    const runMin = movie.time % 60;
    return (
      <div>
        <h4>{movie.title}:</h4>
        <p>
          Runtime: {runHr} hr {runMin} min
        </p>
        <ul>
          {movie.genres.map((genre) => {
            return <li>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movieItem}</div>
    </div>
  );
}

export default Movies;
