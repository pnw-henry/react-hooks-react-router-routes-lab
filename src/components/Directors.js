import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director, index) => {
    return (
      <div key={index}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
