import React from "react";

import "./App.css";
import movies from "./movies.js";

function App() {
  return (
    <div className="App">
      {movies.map(movie => {
        return <p>{movie.id}</p>;
      })}
    </div>
  );
}

export default App;
