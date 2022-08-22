import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time}</p>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
