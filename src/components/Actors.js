import React from "react";
import { actors } from "../data";

function Actors() {
  const actorItem = actors.map((act) => {
    return (
      <div>
        <h4>{act.name}:</h4>
        <ul>
          {act.movies.map((movie) => {
            return <li>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>actors Page</h1>
      <div>{actorItem}</div>
    </div>
  );
}

export default Actors;
