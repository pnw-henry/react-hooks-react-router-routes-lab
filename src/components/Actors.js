import React from "react";
import { actors } from "../data";

function Actors() {
  const Actorlist = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {Actorlist}
    </div>
  );
}

export default Actors;
