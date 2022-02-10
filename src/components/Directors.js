import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItem = directors.map((dir) => {
    return (
      <div>
        <h4>{dir.name}:</h4>
        <ul>
          {dir.movies.map((movie) => {
            return <li>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      <div>{directorItem}</div>
    </div>
  );
}

export default Directors;
